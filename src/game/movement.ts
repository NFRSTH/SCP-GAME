// ===== Movement & Room Transition Logic =====
// Extracted from store.ts — all player/SCP movement, door checks, room transitions.

import type { Direction, StoreGet, StoreSet } from './types'
import { ROOM_MAP, doorsFrom, doorBetween, getRoom } from './data/facility'
import { getDifficulty } from './data/roles'
import { getSCP } from './data/scps'
import {
  MOVE_STAMINA_COST,
  NOISE_PER_MOVE,
  DARK_ROOM_SANITY_LOSS,
  CROWBAR_FORCE_CHANCE,
} from './constants'
import { rng, describeMove } from './utils'

// Player movement by direction
export function move(get: StoreGet, set: StoreSet, dir: Direction): { ok: boolean; reason?: string } {
  const s = get()
  if (s.phase !== 'playing') return { ok: false, reason: 'Not in game' }
  const room = ROOM_MAP[s.player.roomId]
  if (!room) return { ok: false, reason: 'No room' }
  const door = doorsFrom(room.id).find((d) => d.direction === dir)
  if (!door) return { ok: false, reason: 'No door in that direction.' }
  return tryMoveToRoom(get, set, door.to)
}

// Move to a specific adjacent room (validates door, keycard, lock, stamina)
export function tryMoveToRoom(get: StoreGet, set: StoreSet, targetId: string): { ok: boolean; reason?: string } {
  const s = get()
  if (s.phase !== 'playing') return { ok: false, reason: 'Not in game' }
  const from = s.player.roomId
  const door = doorBetween(from, targetId)
  if (!door) return { ok: false, reason: 'No direct door.' }

  // Check keycard
  if (door.keycardRequired > 0) {
    if (!s.hasKeycard(door.keycardRequired)) {
      s.addLog('danger', `The door to ${getRoom(targetId)?.shortName} requires a Level ${door.keycardRequired} keycard.`)
      return { ok: false, reason: `Requires Level ${door.keycardRequired} keycard.` }
    }
  }
  // Check 079-locked
  if (s.facility.lockedDoors.includes(door.id)) {
    const hasCrowbar = s.player.inventory.some((sl) => sl.item.id === 'crowbar')
    if (hasCrowbar && rng() < CROWBAR_FORCE_CHANCE) {
      s.addLog('success', `You pry open the jammed door with the crowbar.`)
      set((st) => ({
        facility: {
          ...st.facility,
          lockedDoors: st.facility.lockedDoors.filter((d) => d !== door.id),
        },
      }))
    } else {
      s.addLog('danger', `SCP-079 has locked this door. It won't budge.`)
      return { ok: false, reason: 'Door is locked by SCP-079.' }
    }
  }
  // Stamina cost
  const diff = getDifficulty(s.difficulty)!
  const cost = MOVE_STAMINA_COST * diff.staminaDrainMultiplier
  if (s.player.stamina < cost) {
    s.addLog('danger', `You are too exhausted to move. Catch your breath.`)
    return { ok: false, reason: 'Too exhausted.' }
  }

  set((st) => ({
    player: {
      ...st.player,
      roomId: targetId,
      stamina: Math.max(0, st.player.stamina - cost),
      noiseLevel: Math.min(1, st.player.noiseLevel + NOISE_PER_MOVE),
      watchingSCP173: false,
    },
  }))

  const newRoom = getRoom(targetId)!
  s.addLog('move', `You move ${describeMove(from, targetId)} into ${newRoom.name}.`)

  // Entering a dark room without flashlight drains sanity
  if (newRoom.isDark && !get().player.flashlightOn) {
    set((st) => ({ player: { ...st.player, sanity: Math.max(0, st.player.sanity - DARK_ROOM_SANITY_LOSS) } }))
    s.addLog('danger', `It is pitch black. Your sanity frays in the dark.`)
  }

  // SCP-096 trigger: entering 096's room = saw its face (enrage + grace windup)
  trigger096OnEntry(get, set, targetId)

  // Trigger room entry tick
  get().tick()
  return { ok: true }
}

// SCP-096 face-seen trigger (shared between text and 3D movement)
export function trigger096OnEntry(get: StoreGet, set: StoreSet, roomId: string) {
  const s = get()
  const scp096 = s.scps.find((sc) => sc.scpId === 'scp-096')
  if (scp096 && scp096.roomId === roomId && !s.player.lookedAt096) {
    const diff = getDifficulty(s.difficulty)!
    const grace = diff.lethalWarningTurns
    set((st) => ({ player: { ...st.player, lookedAt096: true } }))
    s.addLog('danger', `You have seen the face of SCP-096. It begins to scream — RUN.`)
    set((st) => ({
      scps: st.scps.map((sc) =>
        sc.scpId === 'scp-096' ? { ...sc, state: 'enraged' as const, windup: grace } : sc,
      ),
    }))
  }
}

// 3D mode: set player room based on position (no stamina cost, no keycard check —
// collision/wall system handles access control in 3D)
export function setPlayerRoom(get: StoreGet, set: StoreSet, roomId: string) {
  const s = get()
  if (s.player.roomId === roomId) return
  set((st) => ({ player: { ...st.player, roomId } }))
  const r = getRoom(roomId)
  s.addLog('move', `Entered ${r?.name}.`)
  trigger096OnEntry(get, set, roomId)
  get().tick()
}

// SCP-as-player movement (SCP role): SCPs ignore keycards but respect 079-locks
// (unless they can phase or smash doors)
export function moveSCP(get: StoreGet, set: StoreSet, dir: Direction): { ok: boolean; reason?: string } {
  const s = get()
  if (s.role !== 'scp') return { ok: false, reason: 'Not playing as SCP.' }
  const room = ROOM_MAP[s.player.roomId]
  const door = doorsFrom(room.id).find((d) => d.direction === dir)
  if (!door) return { ok: false, reason: 'No door that way.' }

  if (s.facility.lockedDoors.includes(door.id)) {
    const scp = s.scpId ? getSCP(s.scpId) : null
    if (scp?.ai === 'phase' || scp?.threat === 'strong') {
      s.addLog('success', `You ${scp?.ai === 'phase' ? 'phase through' : 'smash open'} the locked door.`)
      set((st) => ({ facility: { ...st.facility, lockedDoors: st.facility.lockedDoors.filter((d) => d !== door.id) } }))
    } else {
      s.addLog('danger', 'The door is locked by SCP-079. You cannot pass.')
      return { ok: false, reason: 'Locked.' }
    }
  }
  set((st) => ({ player: { ...st.player, roomId: door.to } }))
  s.addLog('move', `You move into ${getRoom(door.to)?.name}.`)
  get().tick()

  // Check SCP win
  const newRoom = getRoom(door.to)
  if (newRoom?.isExit) {
    s.endGame(true, `You, ${s.scpId ? getSCP(s.scpId)?.number : 'SCP'}, have escaped the facility.`, 'escape')
  }
  return { ok: true }
}

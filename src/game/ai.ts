// ===== SCP AI & Guard AI Logic =====
// Extracted from store.ts — all SCP behavior, encounter resolution, NPC guard hunting.

import type { SCPInstance, LogEntry, StoreGet, StoreSet } from './types'
import { getDifficulty } from './data/roles'
import { getSCP } from './data/scps'
import { getRoom } from './data/facility'
import { DOORS } from './data/facility'
import {
  SCP173_WATCH_RANGE,
  SCP049_SMELL_RANGE,
  SCP939_NOISE_THRESHOLD,
  SCP939_PROXIMITY_RANGE,
  SCP106_FLASHLIGHT_REPEL_RANGE,
  SCP106_FLASHLIGHT_REPEL_CHANCE,
  SCP106_RETREAT_COOLDOWN,
  SCP079_LOCK_CHANCE,
  SCP079_SMASH_CHANCE,
  DAMAGE_VARIANCE_LOW,
  DAMAGE_VARIANCE_HIGH,
  NPC_GUARD_DAMAGE,
  NONLETHAL_HIT_COOLDOWN,
  STRONG_SCP_SLOW_COOLDOWN,
} from './constants'
import {
  rng,
  roomDistance,
  nextRoomToward,
  nextRoomTowardBreakable,
  randomAdjacent,
  randomAdjacentAway,
} from './utils'

type DiffDef = ReturnType<typeof getDifficulty>

// ===== Main SCP AI runner =====
export function runSCPAI(get: StoreGet, set: StoreSet, diff: DiffDef) {
  const s = get()
  const playerRoom = s.player.roomId
  const aiSmart = diff?.aiSmart ?? 0.6
  const speedMult = diff?.scpSpeedMultiplier ?? 1
  const warningTurns = diff?.lethalWarningTurns ?? 0
  const abilityCdMult = diff?.scpAbilityCooldownMultiplier ?? 1
  const updates: Record<string, Partial<SCPInstance>> = {}
  let playerHit = false
  let hitDamage = 0
  let hitScp = ''
  const newLogs: { type: LogEntry['type']; text: string }[] = []

  const isLocked = (doorId: string) => s.facility.lockedDoors.includes(doorId)

  const roamingCount = s.scps.filter(
    (sc) => sc.scpId !== 'npc-guard' && sc.state !== 'contained',
  ).length

  for (const inst of s.scps) {
    if (inst.scpId === 'npc-guard') continue
    const def = getSCP(inst.scpId)
    if (!def) continue

    // ---- Contained SCPs: controlled escape chance (capped) ----
    if (inst.state === 'contained') {
      if (roamingCount < (diff?.maxConcurrentRoamingSCPs ?? 5) && rng() < (diff?.scpEscapeChancePerTick ?? 0.08)) {
        updates[inst.scpId] = { state: 'roaming', windup: 0 }
        newLogs.push({ type: 'danger', text: `Sensors detect ${def.number} has breached containment.` })
      }
      continue
    }

    const dist = roomDistance(inst.roomId, playerRoom)

    // ---- Windup reset when player escapes ----
    const curWindup = updates[inst.scpId]?.windup ?? inst.windup
    if (inst.roomId !== playerRoom && def.ai !== 'shy' && curWindup > 0) {
      updates[inst.scpId] = { ...(updates[inst.scpId] || {}), windup: 0 }
    }

    // ---- SCP-106 flashlight weakness ----
    if (def.ai === 'phase' && s.player.flashlightOn && warningTurns > 0) {
      if (dist <= SCP106_FLASHLIGHT_REPEL_RANGE && rng() < SCP106_FLASHLIGHT_REPEL_CHANCE) {
        newLogs.push({ type: 'success', text: `Your flashlight beam falls on SCP-106. It recoils and sinks into the floor.` })
        const away = randomAdjacentAway(inst.roomId, playerRoom)
        if (away) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: away, cooldown: Math.max(SCP106_RETREAT_COOLDOWN, Math.round(SCP106_RETREAT_COOLDOWN * abilityCdMult)) }
        continue
      }
    }

    // ---- Cooldown gating ----
    const cd = updates[inst.scpId]?.cooldown ?? inst.cooldown
    if (cd > 0) {
      updates[inst.scpId] = { ...(updates[inst.scpId] || {}), cooldown: cd - 1 }
    }

    // SCP-096 fairness: cap to 1 move/tick on Easy/Balanced
    let moves = Math.max(1, Math.round(def.speed * speedMult))
    if (def.ai === 'shy' && warningTurns > 0) {
      moves = 1
    }

    // ---- SCP-096 screaming phase ----
    if (def.ai === 'shy' && inst.state === 'enraged' && inst.windup > 0 && warningTurns > 0) {
      const next = inst.windup - 1
      updates[inst.scpId] = { windup: next }
      if (next > 0) {
        newLogs.push({ type: 'danger', text: `SCP-096 screams and thrashes — it will rise in ${next} turn(s). RUN!` })
      } else {
        newLogs.push({ type: 'danger', text: `SCP-096 falls silent. Then it sprints — straight at you.` })
      }
      continue
    }

    const effectiveWarning = def.ai === 'shy' ? 0 : warningTurns

    for (let m = 0; m < moves; m++) {
      const cur = updates[inst.scpId] ? { ...inst, ...updates[inst.scpId] } : inst

      // ---- Encounter resolution ----
      if (cur.roomId === playerRoom) {
        if (def.killOnContact) {
          const w = cur.windup
          if (effectiveWarning > 0 && w <= 0) {
            updates[inst.scpId] = { ...(updates[inst.scpId] || {}), windup: effectiveWarning }
            newLogs.push({ type: 'danger', text: `⚠ ${def.number} is upon you! You have ${effectiveWarning} turn(s) to FLEE — move to another room now!` })
            break
          } else if (w > 0) {
            const next = w - 1
            updates[inst.scpId] = { ...(updates[inst.scpId] || {}), windup: next }
            if (next > 0) {
              newLogs.push({ type: 'danger', text: `${def.number} closes in — ${next} turn(s) to escape!` })
            } else {
              playerHit = true
              hitDamage = 999
              hitScp = def.number
              newLogs.push({ type: 'danger', text: `${def.number} reaches you. ${def.ability}` })
            }
            break
          } else {
            playerHit = true
            hitDamage = 999
            hitScp = def.number
            newLogs.push({ type: 'danger', text: `${def.number} reaches you. ${def.ability}` })
            break
          }
        } else {
          const dmgCooldown = updates[inst.scpId]?.cooldown ?? inst.cooldown
          if (dmgCooldown <= 0) {
            const dmg = Math.round(def.damage * (DAMAGE_VARIANCE_LOW + aiSmart * DAMAGE_VARIANCE_HIGH) * (diff?.scpDamageMultiplier ?? 1))
            playerHit = true
            hitDamage += dmg
            hitScp = def.number
            newLogs.push({ type: 'combat', text: `${def.number} strikes you for ${dmg} damage!` })
            updates[inst.scpId] = { ...(updates[inst.scpId] || {}), cooldown: Math.max(NONLETHAL_HIT_COOLDOWN, Math.round(NONLETHAL_HIT_COOLDOWN * abilityCdMult)) }
          }
          break
        }
      }

      // ---- Movement AI by type ----
      if (def.ai === 'statue') {
        const watched = s.player.watchingSCP173 && dist <= SCP173_WATCH_RANGE
        if (watched) continue
        const next = nextRoomToward(cur.roomId, playerRoom, isLocked, false)
        if (next) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: next }
      } else if (def.ai === 'shy') {
        if (inst.state !== 'enraged') continue
        const next = nextRoomToward(cur.roomId, playerRoom, isLocked, false)
        if (next) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: next }
      } else if (def.ai === 'chase') {
        if (dist <= SCP049_SMELL_RANGE || rng() < aiSmart) {
          const next = nextRoomToward(cur.roomId, playerRoom, isLocked, false)
          if (next) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: next }
        } else {
          const wander = randomAdjacent(cur.roomId)
          if (wander) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: wander }
        }
      } else if (def.ai === 'phase') {
        const next = nextRoomToward(cur.roomId, playerRoom, isLocked, true)
        if (next) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: next }
      } else if (def.ai === 'mimic') {
        if (s.player.noiseLevel > SCP939_NOISE_THRESHOLD || dist <= SCP939_PROXIMITY_RANGE || rng() < aiSmart * 0.5) {
          const next = nextRoomToward(cur.roomId, playerRoom, isLocked, false)
          if (next) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: next }
        }
      } else if (def.ai === 'patrol') {
        const wander = randomAdjacent(cur.roomId)
        if (wander) updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: wander }
      } else if (def.ai === 'ai') {
        if (!s.player.scp079Shutdown) {
          const lockCap = diff?.maxLockedDoors ?? 5
          if (s.facility.lockedDoors.length < lockCap && rng() < SCP079_LOCK_CHANCE) {
            const lockable = DOORS.filter((d) => !s.facility.lockedDoors.includes(d.id))
            if (lockable.length) {
              const target = lockable[Math.floor(Math.random() * lockable.length)]
              set((st) => ({ facility: { ...st.facility, lockedDoors: [...st.facility.lockedDoors, target.id] } }))
              newLogs.push({ type: 'system', text: `SCP-079 seals a door somewhere in the facility.` })
            }
          }
          const cutChance = diff?.powerCutChance ?? 0.04
          if (rng() < cutChance && s.facility.powerOn) {
            const dur = diff?.powerOutageDuration ?? 3
            set((st) => ({ facility: { ...st.facility, powerOn: false, powerOutageTicks: dur } }))
            newLogs.push({ type: 'danger', text: `SCP-079 cuts power to a sector. Lights die — they will flicker back soon.` })
          }
        }
      } else if (def.ai === 'guardian') {
        continue
      } else if (def.ai === 'reptile') {
        const next = nextRoomTowardBreakable(cur.roomId, playerRoom)
        if (next) {
          updates[inst.scpId] = { ...(updates[inst.scpId] || {}), roomId: next }
          if (rng() < SCP079_SMASH_CHANCE) newLogs.push({ type: 'danger', text: `${def.number} smashes through a door.` })
        }
      }
    }
  }

  // Apply SCP updates
  if (Object.keys(updates).length) {
    set((st) => ({ scps: st.scps.map((sc) => (updates[sc.scpId] ? { ...sc, ...updates[sc.scpId] } : sc)) }))
  }

  // Power auto-recovery
  const fac = get().facility
  if (!fac.powerOn && fac.powerOutageTicks > 0) {
    const remaining = fac.powerOutageTicks - 1
    if (remaining <= 0) {
      set((st) => ({ facility: { ...st.facility, powerOn: true, powerOutageTicks: 0 } }))
      get().addLog('system', 'Power hums back online. The lights return.')
    } else {
      set((st) => ({ facility: { ...st.facility, powerOutageTicks: remaining } }))
    }
  }

  // Apply damage
  if (playerHit) {
    set((st) => ({ player: { ...st.player, health: Math.max(0, st.player.health - hitDamage) } }))
    if (hitDamage >= 999) {
      get().endGame(false, `Killed by ${hitScp}.`, 'scp-kill')
    }
  }

  for (const l of newLogs) get().addLog(l.type, l.text)

  // Proximity warnings (gated by difficulty)
  if (diff?.showProximityWarnings) {
    const s2 = get()
    for (const inst of s2.scps) {
      if (inst.scpId === 'npc-guard') continue
      const def = getSCP(inst.scpId)
      if (!def) continue
      const d = roomDistance(inst.roomId, s2.player.roomId)
      if (d === 1 && inst.state !== 'contained') {
        get().addLog('danger', `You sense ${def.number} in an adjacent room.`)
      }
    }
  }
}

// ===== NPC Guard AI (when player is SCP) =====
export function runGuardAI(get: StoreGet, set: StoreSet, diff: DiffDef) {
  const s = get()
  const speedMult = diff?.scpSpeedMultiplier ?? 1
  const updates: Record<string, Partial<SCPInstance>> = {}
  let playerHit = false
  let hitDamage = 0
  const isLocked = (doorId: string) => s.facility.lockedDoors.includes(doorId)

  for (const inst of s.scps) {
    if (inst.scpId !== 'npc-guard') continue
    const dist = roomDistance(inst.roomId, s.player.roomId)
    if (dist === 0) {
      playerHit = true
      hitDamage += NPC_GUARD_DAMAGE
      get().addLog('combat', `A guard opens fire on you! -${NPC_GUARD_DAMAGE} HP.`)
    } else {
      const moves = Math.max(1, Math.round(1 * speedMult))
      for (let m = 0; m < moves; m++) {
        const cur = updates[inst.scpId] ? { ...inst, ...updates[inst.scpId] } : inst
        const next = nextRoomToward(cur.roomId, s.player.roomId, isLocked, false)
        if (next) updates[inst.scpId] = { roomId: next }
        else break
      }
    }
  }
  if (Object.keys(updates).length) {
    set((st) => ({ scps: st.scps.map((sc) => (updates[sc.scpId] ? { ...sc, ...updates[sc.scpId] } : sc)) }))
  }
  if (playerHit) {
    set((st) => ({ player: { ...st.player, health: Math.max(0, st.player.health - hitDamage) } }))
  }
}

// ===== Encounter resolution helper =====
export function resolveEncounter(
  def: ReturnType<typeof getSCP>,
  player: { watchingSCP173: boolean },
  aiSmart: number,
): { kill: boolean; damage: number; text: string } {
  if (!def) return { kill: false, damage: 0, text: '' }
  const watched = player.watchingSCP173 && def.ai === 'statue'
  if (watched) {
    return { kill: false, damage: 0, text: `SCP-173 stands frozen under your gaze. Don't look away.` }
  }
  if (def.killOnContact) {
    return { kill: true, damage: 999, text: `${def.number} reaches you. ${def.ability}` }
  }
  const dmg = Math.round(def.damage * (DAMAGE_VARIANCE_LOW + aiSmart * DAMAGE_VARIANCE_HIGH))
  return { kill: false, damage: dmg, text: `${def.number} strikes you for ${dmg} damage!` }
}

// Re-export for convenience
export { STRONG_SCP_SLOW_COOLDOWN, getRoom }

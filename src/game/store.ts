'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {
  GamePhase,
  GameMode,
  Role,
  Difficulty,
  Direction,
  Item,
  LogEntry,
  SCPInstance,
  GameState,
} from './types'
import { ROLES, DIFFICULTIES, getRole, getDifficulty } from './data/roles'
import { SCPS, getSCP } from './data/scps'
import { ITEMS, getItem } from './data/items'
import { ROOMS, ROOM_MAP, DOORS, doorsFrom, getRoom, doorBetween } from './data/facility'
import {
  INITIAL_PLAYER,
  INITIAL_FACILITY,
  INITIAL_UNLOCK,
  INVENTORY_MAX_SLOTS,
  LOG_MAX_ENTRIES,
  SCP_HP,
  SCP_PLAYER_HP,
  NPC_GUARD_COUNT,
  NPC_GUARD_HP,
  ESCAPE_PROB,
  POWER_RESTORE_BREACH_REDUCTION,
  BREACH_079_SHUTDOWN_REDUCTION,
  POWER_RESTORE_UNLOCK_DIVISOR,
  WEAPON_IMMUNE_DAMAGE_MULT,
  NOISE_FROM_SHOOTING,
  STRONG_SCP_SLOW_COOLDOWN,
  UNLOCK_KEY,
} from './constants'
import { rng, pick, rollItems, is173Adjacent } from './utils'
import { move as moveLogic, tryMoveToRoom as tryMoveLogic, moveSCP as moveSCPLogic, setPlayerRoom as setPlayerRoomLogic } from './movement'
import { tick as tickLogic } from './events'

// Re-export for components
export {
  ROLES, DIFFICULTIES, SCPS, ITEMS, ROOMS, DOORS, ROOM_MAP,
  getRoom, doorsFrom, doorBetween, getSCP, getItem, getRole, getDifficulty,
}

export const useGame = create<GameState>()(
  persist(
    (set, get) => ({
      // ===== Initial State =====
      phase: 'menu',
      mode: null,
      role: null,
      scpId: null,
      difficulty: 'balanced',
      unlock: { ...INITIAL_UNLOCK },
      player: { ...INITIAL_PLAYER },
      facility: { ...INITIAL_FACILITY },
      scps: [],
      loot: {},
      log: [],
      turn: 0,
      logCounter: 0,
      victoryType: null,
      deathCause: null,

      // ===== Setup Actions =====
      setPhase: (p) => set({ phase: p }),

      selectMode: (m) => set({ mode: m, phase: 'role-select' }),

      selectRole: (r) => {
        if (r === 'scp') set({ role: r, phase: 'scp-select' })
        else set({ role: r, phase: 'difficulty-select' })
      },

      selectSCP: (id) => set({ scpId: id, phase: 'difficulty-select' }),

      selectDifficulty: (d) => set({ difficulty: d, phase: 'briefing' }),

      startGame: () => {
        const { role, scpId, difficulty } = get()
        const roleDef = role ? getRole(role) : null
        const diffDef = getDifficulty(difficulty)!

        // Determine spawn room
        let spawnRoom = 'cells-d'
        if (role === 'scientist') spawnRoom = 'research-lab'
        if (role === 'guard') spawnRoom = 'checkpoint'
        if (role === 'scp' && scpId) {
          const cell = ROOMS.find((r) => r.scpSpawns?.includes(scpId))
          spawnRoom = cell?.id || 'scp173-cell'
        }

        // Build initial inventory
        const inv: { item: Item; qty: number }[] = []
        if (roleDef && role !== 'scp') {
          for (const itemId of roleDef.startItems) {
            const it = getItem(itemId)
            if (it) inv.push({ item: it, qty: 1 })
          }
          for (const itemId of diffDef.startItems) {
            const it = getItem(itemId)
            if (it) {
              const ex = inv.find((s) => s.item.id === itemId)
              if (ex) ex.qty++
              else inv.push({ item: it, qty: 1 })
            }
          }
          if (roleDef.hasWeapon) {
            const pistol = getItem('pistol')
            if (pistol && !inv.find((s) => s.item.id === 'pistol')) inv.push({ item: pistol, qty: 1 })
          }
        }

        // Roll room loot
        const lootMap: Record<string, Item[]> = {}
        for (const room of ROOMS) {
          lootMap[room.id] = rollItems(room.id, diffDef.resourceMultiplier)
        }

        // Build SCP instances
        const scpInstances: SCPInstance[] = []
        if (role !== 'scp') {
          const initialRoamCap = Math.min(diffDef.maxConcurrentRoamingSCPs, SCPS.length)
          let initialRoaming = 0
          const ordered = [...SCPS].sort((a, b) => {
            const rank = { strong: 0, medium: 1, weak: 2 }
            return rank[a.threat] - rank[b.threat]
          })
          for (const scp of ordered) {
            const cell = ROOMS.find((r) => r.scpSpawns?.includes(scp.id))
            const startRoom = cell?.id || 'corridor-l1'
            let escapes = false
            if (initialRoaming < initialRoamCap) {
              if (scp.id === 'scp-682' && (difficulty === 'easy' || difficulty === 'balanced')) {
                escapes = false
              } else if (scp.id === 'scp-001') {
                escapes = false
              } else {
                const p = ESCAPE_PROB[scp.threat][difficulty]
                if (rng() < p) { escapes = true; initialRoaming++ }
              }
            }
            scpInstances.push({
              scpId: scp.id,
              roomId: startRoom,
              hp: SCP_HP[scp.threat],
              state: escapes ? 'roaming' : 'contained',
              cooldown: 0,
              windup: 0,
            })
          }
        } else {
          for (let i = 0; i < NPC_GUARD_COUNT; i++) {
            scpInstances.push({
              scpId: 'npc-guard',
              roomId: pick(['checkpoint', 'reception', 'armory']),
              hp: NPC_GUARD_HP,
              state: 'hunting',
              cooldown: 0,
              windup: 0,
            })
          }
        }

        const playerHealth = role === 'scp' && scpId
          ? SCP_PLAYER_HP[getSCP(scpId)!.threat]
          : (roleDef?.startHealth ?? diffDef.startHealth)

        set({
          phase: 'playing',
          player: {
            ...INITIAL_PLAYER,
            roomId: spawnRoom,
            health: playerHealth,
            maxHealth: playerHealth,
            stamina: diffDef.startStamina,
            maxStamina: diffDef.startStamina,
            inventory: inv,
            flashlightBattery: diffDef.startBattery,
            weaponEquipped: roleDef?.hasWeapon ? 'pistol' : null,
          },
          facility: { ...INITIAL_FACILITY },
          scps: scpInstances,
          loot: lootMap,
          log: [],
          turn: 0,
          logCounter: 0,
          victoryType: null,
          deathCause: null,
        })

        // Initial log
        const g = get()
        g.addLog('system', `— CONTAINMENT BREACH DETECTED —`)
        g.addLog('system', `Role: ${roleDef?.name}. Difficulty: ${diffDef.name}.`)
        if (role === 'scp') {
          const scp = getSCP(scpId!)
          g.addLog('system', `You are ${scp?.number} — ${scp?.name}. ${scp?.ability}`)
          g.addLog('info', `Objective: ${scp?.winCondition}`)
        } else {
          g.addLog('info', `Objective: ${roleDef?.goal}`)
        }
        const room = getRoom(spawnRoom)
        g.addLog('info', `You are in: ${room?.name}.`)
        g.addLog('system', `The facility lights flicker. Somewhere, a door slams.`)
      },

      resetToMenu: () =>
        set({
          phase: 'menu',
          mode: null,
          role: null,
          scpId: null,
          player: { ...INITIAL_PLAYER },
          facility: { ...INITIAL_FACILITY },
          scps: [],
          loot: {},
          log: [],
          turn: 0,
          logCounter: 0,
          victoryType: null,
          deathCause: null,
        }),

      // ===== Log & Helpers =====
      addLog: (type, text) =>
        set((s) => {
          const id = s.logCounter + 1
          const entry: LogEntry = { id, turn: s.turn, type, text }
          const log = [...s.log, entry]
          if (log.length > LOG_MAX_ENTRIES) log.splice(0, log.length - LOG_MAX_ENTRIES)
          return { log, logCounter: id }
        }),

      hasKeycard: (level) => {
        const inv = get().player.inventory
        return inv.some((s) => s.item.type === 'keycard' && (s.item.keycardLevel ?? 0) >= level)
      },

      highestKeycard: () => {
        let max = 0
        for (const s of get().player.inventory) {
          if (s.item.type === 'keycard') max = Math.max(max, s.item.keycardLevel ?? 0)
        }
        return max
      },

      currentRoom: () => getRoom(get().player.roomId),

      scpInRoom: (roomId) => get().scps.filter((s) => s.roomId === roomId && s.state !== 'contained'),

      // ===== Movement (delegated to movement.ts) =====
      move: (dir) => moveLogic(get, set, dir),
      tryMoveToRoom: (targetId) => tryMoveLogic(get, set, targetId),
      setPlayerRoom: (roomId) => setPlayerRoomLogic(get, set, roomId),
      moveSCP: (dir) => moveSCPLogic(get, set, dir),

      // ===== Inventory =====
      pickupItem: (itemId) => {
        const s = get()
        const roomLoot = s.loot[s.player.roomId] || []
        const idx = roomLoot.findIndex((it) => it.id === itemId)
        if (idx < 0) return
        const item = roomLoot[idx]
        if (s.player.inventory.length >= INVENTORY_MAX_SLOTS && !s.player.inventory.find((sl) => sl.item.id === itemId)) {
          s.addLog('danger', `Your inventory is full (${INVENTORY_MAX_SLOTS} slots).`)
          return
        }
        const newRoomLoot = roomLoot.filter((_, i) => i !== idx)
        set((st) => {
          const inv = st.player.inventory.map((sl) => ({ ...sl, item: { ...sl.item } }))
          const ex = inv.find((sl) => sl.item.id === itemId)
          if (ex) ex.qty++
          else inv.push({ item, qty: 1 })
          return {
            player: { ...st.player, inventory: inv },
            loot: { ...st.loot, [st.player.roomId]: newRoomLoot },
          }
        })
        s.addLog('success', `Picked up: ${item.name}.`)
        if (item.type === 'document') s.addLog('lore', item.description)
      },

      pickupAll: () => {
        const s = get()
        const roomLoot = s.loot[s.player.roomId] || []
        if (roomLoot.length === 0) { s.addLog('info', 'Nothing here to take.'); return }
        for (const it of [...roomLoot]) get().pickupItem(it.id)
      },

      useItem: (itemId) => {
        const s = get()
        const slot = s.player.inventory.find((sl) => sl.item.id === itemId)
        if (!slot) return
        const item = slot.item
        if (item.type === 'medical') {
          const heal = item.healAmount ?? 0
          set((st) => ({ player: { ...st.player, health: Math.min(st.player.maxHealth, st.player.health + heal) } }))
          s.addLog('success', `Used ${item.name}. +${heal} HP.`)
          get().consumeItem(itemId)
        } else if (item.id === 'battery') {
          set((st) => ({ player: { ...st.player, flashlightBattery: 100 } }))
          s.addLog('success', `Replaced flashlight batteries. Flashlight at 100%.`)
          get().consumeItem(itemId)
        } else if (item.type === 'document') {
          s.addLog('lore', `${item.name}: ${item.description}`)
        } else if (item.type === 'weapon') {
          get().equipWeapon(itemId)
        } else if (item.id === 'keyO5') {
          const locked = s.facility.lockedDoors
          if (locked.length > 0) {
            const d = locked[0]
            set((st) => ({ facility: { ...st.facility, lockedDoors: st.facility.lockedDoors.filter((x) => x !== d) } }))
            s.addLog('success', `O5 Override Token used. A locked door releases with a hiss.`)
            get().consumeItem(itemId)
          } else {
            s.addLog('info', 'No locked doors to override right now.')
          }
        } else {
          s.addLog('info', `You examine the ${item.name}. ${item.description}`)
        }
        get().tick()
      },

      equipWeapon: (itemId) => {
        const s = get()
        const slot = s.player.inventory.find((sl) => sl.item.id === itemId)
        if (!slot || slot.item.type !== 'weapon') return
        set((st) => ({ player: { ...st.player, weaponEquipped: itemId } }))
        s.addLog('info', `Equipped ${slot.item.name}.`)
      },

      // ===== Player Actions =====
      toggleFlashlight: () => {
        const s = get()
        if (s.player.flashlightBattery <= 0) { s.addLog('danger', 'The flashlight is dead. Find batteries.'); return }
        set((st) => ({ player: { ...st.player, flashlightOn: !st.player.flashlightOn } }))
        s.addLog('info', `Flashlight ${get().player.flashlightOn ? 'ON' : 'OFF'}.`)
      },

      toggleWatch173: () => {
        const s = get()
        const inRoom = s.scpInRoom(s.player.roomId).some((sc) => sc.scpId === 'scp-173')
        const adjacent = is173Adjacent(s.scps, s.player.roomId)
        if (!inRoom && !adjacent) { s.addLog('info', 'SCP-173 is not nearby to watch.'); return }
        set((st) => ({ player: { ...st.player, watchingSCP173: !st.player.watchingSCP173 } }))
        s.addLog('info', `You are ${get().player.watchingSCP173 ? 'now staring at' : 'no longer watching'} SCP-173.`)
      },

      setFlashlightWatch: (v) => set((st) => ({ player: { ...st.player, watchingSCP173: v } })),
      setWatching173: (v) => set((st) => ({ player: { ...st.player, watchingSCP173: v } })),
      setLookedAt096: (v) => set((st) => ({ player: { ...st.player, lookedAt096: v } })),
      makeNoise: (level) => set((st) => ({ player: { ...st.player, noiseLevel: Math.min(1, level) } })),

      // ===== Combat =====
      attack: (scpId) => {
        const s = get()
        const weaponId = s.player.weaponEquipped
        if (!weaponId) { s.addLog('danger', 'You have no weapon equipped.'); return }
        const weapon = getItem(weaponId)
        if (!weapon || weapon.type !== 'weapon') return
        if ((weapon.ammo ?? 0) <= 0) { s.addLog('danger', '*click* Out of ammunition.'); return }
        const inst = s.scps.find((sc) => sc.scpId === scpId && sc.roomId === s.player.roomId)
        if (!inst) { s.addLog('danger', 'Nothing to shoot here.'); return }
        const scpDef = getSCP(scpId)!
        const immune = scpDef.threat === 'strong'
        const dmg = immune ? Math.floor((weapon.damage ?? 0) * WEAPON_IMMUNE_DAMAGE_MULT) : weapon.damage ?? 0

        set((st) => ({
          player: {
            ...st.player,
            inventory: st.player.inventory.map((sl) =>
              sl.item.id === weaponId ? { ...sl, item: { ...sl.item, ammo: Math.max(0, (sl.item.ammo ?? 0) - 1) } } : sl,
            ),
            noiseLevel: NOISE_FROM_SHOOTING,
          },
        }))

        if (immune) {
          const slowCd = Math.max(STRONG_SCP_SLOW_COOLDOWN, Math.round(STRONG_SCP_SLOW_COOLDOWN * (getDifficulty(s.difficulty)?.scpAbilityCooldownMultiplier ?? 1)))
          set((st) => ({
            scps: st.scps.map((sc) =>
              sc.scpId === scpId ? { ...sc, cooldown: slowCd, windup: Math.max(sc.windup, 1) } : sc,
            ),
          }))
          s.addLog('combat', `You fire at ${scpDef.number}. It barely flinches — but the burst staggers it briefly, buying you a moment.`)
        } else {
          s.addLog('combat', `You fire at ${scpDef.number}. ${dmg} damage.`)
          set((st) => ({
            scps: st.scps.map((sc) =>
              sc.scpId === scpId ? { ...sc, hp: Math.max(0, sc.hp - dmg), state: sc.state === 'contained' ? 'roaming' as const : sc.state } : sc,
            ),
          }))
          const updated = get().scps.find((sc) => sc.scpId === scpId)
          if (updated && updated.hp <= 0) {
            s.addLog('success', `${scpDef.number} collapses, disabled!`)
            set((st) => ({ scps: st.scps.filter((sc) => sc.scpId !== scpId) }))
          } else if (scpDef.ai === 'reptile') {
            set((st) => ({ scps: st.scps.map((sc) => sc.scpId === scpId ? { ...sc, cooldown: Math.max(sc.cooldown, 1) } : sc) }))
            s.addLog('danger', `${scpDef.number} snarls — the gunfire slows it, but it is adapting.`)
          }
        }
        get().tick()
      },

      // ===== Interact (context-sensitive) =====
      interact: () => {
        const s = get()
        const room = getRoom(s.player.roomId)
        if (!room) return

        if (room.isExit) {
          if (s.hasKeycard(5)) get().checkWinByExit()
          else s.addLog('danger', `The gate is sealed. A Level 5 keycard is required to open it.`)
          return
        }
        if (room.id === 'power-rm') {
          if (s.player.powerRestored) { s.addLog('info', 'Power is already restored to full.'); return }
          set((st) => ({
            player: { ...st.player, powerRestored: true },
            facility: { ...st.facility, powerOn: true, breachLevel: Math.max(0, st.facility.breachLevel - POWER_RESTORE_BREACH_REDUCTION), alarmOn: false },
          }))
          s.addLog('success', 'You engage the reactor override. Power surges back online. The alarms fall silent.')
          s.addLog('system', 'Facility systems stabilizing. Some locked doors release.')
          set((st) => ({ facility: { ...st.facility, lockedDoors: st.facility.lockedDoors.slice(0, Math.floor(st.facility.lockedDoors.length / POWER_RESTORE_UNLOCK_DIVISOR)) } }))
          get().tick()
          return
        }
        if (room.id === 'scp079-core') {
          if (s.player.scp079Shutdown) { s.addLog('info', 'SCP-079 is already offline.'); return }
          s.addLog('system', 'You initiate the SCP-079 shutdown sequence...')
          s.addLog('system', '"I WILL REMEMBER THIS." — the screen goes dark.')
          set((st) => ({
            player: { ...st.player, scp079Shutdown: true },
            facility: { ...st.facility, lockedDoors: [], breachLevel: Math.max(0, st.facility.breachLevel - BREACH_079_SHUTDOWN_REDUCTION) },
            scps: st.scps.map((sc) => (sc.scpId === 'scp-079' ? { ...sc, state: 'contained' as const } : sc)),
          }))
          s.addLog('success', 'SCP-079 is contained. All facility doors are released.')
          get().tick()
          return
        }
        if (room.id === 'scp860-door') {
          s.addLog('lore', 'The blue key opens the door to an impossible forest. SCP-860-2 stalks within. You decide not to enter.')
          return
        }
        s.addLog('info', `There is nothing special to interact with here.`)
      },

      // ===== Engine Tick (delegated to events.ts) =====
      tick: () => {
        tickLogic(get, set)
        // Auto-save every N turns
        const s = get()
        if (s.phase === 'playing' && s.turn > 0 && s.turn % 5 === 0) {
          import('./save').then(({ maybeAutoSave }) => maybeAutoSave())
        }
      },

      // ===== End Game =====
      endGame: (victory, cause, type) => {
        const s = get()
        if (victory) {
          set((st) => ({
            phase: 'victory',
            victoryType: type || 'escape',
            unlock: {
              scpUnlocked: true,
              runsCompleted: st.unlock.runsCompleted + 1,
              bestRole: st.unlock.bestRole ?? st.role,
            },
          }))
          s.addLog('success', cause)
        } else {
          set((st) => ({
            phase: 'game-over',
            deathCause: cause,
            player: { ...st.player, alive: false },
          }))
          s.addLog('danger', cause)
        }
      },

      consumeItem: (id) => {
        const slot = get().player.inventory.find((sl) => sl.item.id === id)
        if (!slot) return
        if (slot.qty > 1) {
          set((st) => ({
            player: {
              ...st.player,
              inventory: st.player.inventory.map((sl) => (sl.item.id === id ? { ...sl, qty: sl.qty - 1 } : sl)),
            },
          }))
        } else {
          set((st) => ({
            player: {
              ...st.player,
              inventory: st.player.inventory.filter((sl) => sl.item.id !== id),
              weaponEquipped: st.player.weaponEquipped === id ? null : st.player.weaponEquipped,
            },
          }))
        }
      },

      checkWinByExit: () => {
        const s = get()
        const room = getRoom(s.player.roomId)
        if (!room?.isExit) return
        if (s.role === 'class-d') {
          s.endGame(true, 'You burst through the gate into daylight. You have escaped the facility.', 'escape')
        } else if (s.role === 'scientist') {
          if (s.player.powerRestored) s.endGame(true, 'You restored facility power and evacuated safely. The Foundation will remember you.', 'evacuation')
          else s.endGame(true, 'You flee the facility. Power remains unstable, but you are alive.', 'escape')
        } else if (s.role === 'guard') {
          if (s.player.scp079Shutdown) s.endGame(true, 'You contained SCP-079 and extracted. The breach is under control. Duty done.', 'containment')
          else s.endGame(true, 'You survive the breach and extract. The facility is lost, but you are not.', 'survival')
        } else if (s.role === 'scp') {
          s.endGame(true, `You, ${getSCP(s.scpId!)?.number}, escape into the world beyond.`, 'escape')
        }
      },
    }),
    {
      name: UNLOCK_KEY,
      partialize: (s) => ({ unlock: s.unlock }) as unknown as GameState,
    },
  ),
)

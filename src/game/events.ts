// ===== Game Events & Tick Handler =====
// Extracted from store.ts — periodic events, tick orchestration, breach dynamics.

import type { StoreGet, StoreSet } from './types'
import { getDifficulty } from './data/roles'
import { getSCP } from './data/scps'
import { getRoom } from './data/facility'
import { runSCPAI, runGuardAI } from './ai'
import {
  STAMINA_REGEN_PER_TICK,
  NOISE_DECAY_PER_TICK,
  FLASHLIGHT_DRAIN_PER_TICK,
  BREACH_RISE_PER_TICK,
  BREACH_FALL_PER_TICK,
  GUARD_SURVIVAL_TURNS,
} from './constants'
import { pick } from './utils'

type DiffDef = ReturnType<typeof getDifficulty>

// ===== Main tick handler =====
export function tick(get: StoreGet, set: StoreSet) {
  const s = get()
  if (s.phase !== 'playing') return
  const diff = getDifficulty(s.difficulty)!
  const newTurn = s.turn + 1
  set({ turn: newTurn })

  // Stamina regen + noise decay
  set((st) => ({
    player: {
      ...st.player,
      stamina: Math.min(st.player.maxStamina, st.player.stamina + STAMINA_REGEN_PER_TICK),
      noiseLevel: Math.max(0, st.player.noiseLevel - NOISE_DECAY_PER_TICK),
    },
  }))

  // Flashlight battery drain
  if (s.player.flashlightOn) {
    set((st) => ({ player: { ...st.player, flashlightBattery: Math.max(0, st.player.flashlightBattery - FLASHLIGHT_DRAIN_PER_TICK) } }))
    if (get().player.flashlightBattery <= 0) {
      set((st) => ({ player: { ...st.player, flashlightOn: false } }))
      get().addLog('danger', 'Your flashlight dies. Darkness returns.')
    }
  }

  // SCP AI or Guard AI
  if (s.role !== 'scp') {
    runSCPAI(get, set, diff)
  } else {
    runGuardAI(get, set, diff)
  }

  // Breach level dynamics
  set((st) => {
    let bl = st.facility.breachLevel
    if (st.player.powerRestored) bl = Math.max(0, bl - BREACH_FALL_PER_TICK)
    else bl = Math.min(100, bl + BREACH_RISE_PER_TICK)
    return { facility: { ...st.facility, breachLevel: bl } }
  })

  // Check deaths
  const p = get().player
  if (p.health <= 0 && p.alive) {
    get().endGame(false, 'You succumb to your wounds.', 'death')
    return
  }
  if (p.sanity <= 0 && p.alive) {
    get().endGame(false, 'Your mind shatters in the darkness. You are lost.', 'sanity')
    return
  }

  // Guard survival win hint
  if (s.role === 'guard' && newTurn >= GUARD_SURVIVAL_TURNS) {
    if (newTurn === GUARD_SURVIVAL_TURNS) {
      get().addLog('system', 'Evacuation is now possible. Reach a gate to extract.')
    }
  }

  // Periodic events
  if (newTurn % 5 === 0) {
    randomEvent(get, set)
  }
}

// ===== Controlled random events (all non-lethal, atmospheric) =====
export function randomEvent(get: StoreGet, _set: StoreSet) {
  const s = get()
  const events = [
    () => {
      get().addLog('system', 'The intercom crackles: "All personnel... evacuation... Gate A..."')
    },
    () => {
      get().addLog('system', 'A distant explosion shakes the facility. The breach worsens slightly.')
      _set((st) => ({ facility: { ...st.facility, breachLevel: Math.min(100, st.facility.breachLevel + 3) } }))
    },
    () => {
      if (s.player.sanity < 50) {
        get().addLog('danger', 'You hear your own name whispered from an empty corridor.')
        _set((st) => ({ player: { ...st.player, sanity: Math.max(0, st.player.sanity - 2) } }))
      }
    },
    () => {
      get().addLog('info', 'Emergency lighting flickers across the facility.')
    },
    () => {
      const roaming = s.scps.filter((sc) => sc.scpId !== 'npc-guard' && sc.state !== 'contained')
      if (roaming.length > 0) {
        const inst = roaming[Math.floor(Math.random() * roaming.length)]
        const def = getSCP(inst.scpId)
        if (def) get().addLog('info', `Security sensors place ${def.number} somewhere in the ${getRoom(inst.roomId)?.zone ?? 'facility'} zone.`)
      }
    },
  ]
  pick(events)()
}

// Re-export for store
export type { DiffDef }

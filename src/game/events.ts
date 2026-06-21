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
    // --- PA announcements ---
    () => {
      const msgs = [
        'The intercom crackles: "All personnel... evacuation... Gate A..."',
        'A calm automated voice: "Breach level: critical. Remain calm. Help is en route."',
        'The PA system announces: "Mobile Task Force Epsilon-11 dispatched. ETA: unknown."',
        'A garbled transmission: "...containment teams... heavy losses... fall back to surface..."',
        'The intercom hisses: "Reminder: SCP-096 must not be observed. Do not view its face."',
      ]
      get().addLog('system', msgs[Math.floor(Math.random() * msgs.length)])
    },
    // --- Breach escalation (bounded) ---
    () => {
      get().addLog('system', 'A distant explosion shakes the facility. The breach worsens slightly.')
      _set((st) => ({ facility: { ...st.facility, breachLevel: Math.min(100, st.facility.breachLevel + 3) } }))
    },
    () => {
      get().addLog('danger', 'A secondary containment failure rumbles through the deep zones.')
      _set((st) => ({ facility: { ...st.facility, breachLevel: Math.min(100, st.facility.breachLevel + 5) } }))
    },
    // --- Sanity events (only when already low) ---
    () => {
      if (s.player.sanity < 50) {
        get().addLog('danger', 'You hear your own name whispered from an empty corridor.')
        _set((st) => ({ player: { ...st.player, sanity: Math.max(0, st.player.sanity - 2) } }))
      }
    },
    () => {
      if (s.player.sanity < 40) {
        get().addLog('danger', 'Shadows move at the edge of your vision. You blink and they are gone.')
        _set((st) => ({ player: { ...st.player, sanity: Math.max(0, st.player.sanity - 1) } }))
      }
    },
    () => {
      if (s.player.sanity < 30) {
        get().addLog('danger', 'You smell copper and old dust. The walls seem to breathe.')
      }
    },
    // --- Atmospheric ---
    () => {
      get().addLog('info', 'Emergency lighting flickers across the facility.')
    },
    () => {
      get().addLog('info', 'The ventilation system groans, then settles into silence.')
    },
    () => {
      get().addLog('system', 'A fire suppression system discharges somewhere distant. Hiss and steam.')
    },
    () => {
      get().addLog('info', 'Distant footsteps echo through a corridor — then stop.')
    },
    () => {
      get().addLog('info', 'A door slams shut somewhere above you. The sound repeats, fading.')
    },
    // --- SCP sensor intel ---
    () => {
      const roaming = s.scps.filter((sc) => sc.scpId !== 'npc-guard' && sc.state !== 'contained')
      if (roaming.length > 0) {
        const inst = roaming[Math.floor(Math.random() * roaming.length)]
        const def = getSCP(inst.scpId)
        if (def) get().addLog('info', `Security sensors place ${def.number} somewhere in the ${getRoom(inst.roomId)?.zone ?? 'facility'} zone.`)
      }
    },
    // --- SCP-079 taunts ---
    () => {
      if (!s.player.scp079Shutdown) {
        const taunts = [
          'A monitor flickers: "YOU CANNOT LEAVE."',
          'The speakers emit a synthesized laugh. SCP-079 is amused.',
          'A text terminal displays: "I HAVE SEEN YOUR PATH."',
          'Lights strobe in a pattern — SCP-079 is signaling. Or mocking you.',
        ]
        get().addLog('system', taunts[Math.floor(Math.random() * taunts.length)])
      }
    },
    // --- Beneficial events ---
    () => {
      // A door spontaneously unlocks (079 glitch)
      if (s.facility.lockedDoors.length > 0) {
        const d = s.facility.lockedDoors[0]
        _set((st) => ({ facility: { ...st.facility, lockedDoors: st.facility.lockedDoors.filter((x) => x !== d) } }))
        get().addLog('success', 'A 079-locked door releases on its own — a glitch in its control? Seize the moment.')
      }
    },
    () => {
      // Power stabilizes briefly
      if (!s.facility.powerOn) {
        get().addLog('success', 'Power stutters back for a moment — long enough to get your bearings.')
      }
    },
    () => {
      // Sanity recovery (finding a moment of calm)
      if (s.player.sanity < 80) {
        get().addLog('success', 'A moment of stillness. You steady your breathing. Sanity partially restored.')
        _set((st) => ({ player: { ...st.player, sanity: Math.min(100, st.player.sanity + 5) } }))
      }
    },
    // --- Rescue team sighting ---
    () => {
      get().addLog('info', 'You hear gunfire in the distance — M.T.F. Epsilon-11 is engaging something. They are not here for you.')
    },
    () => {
      get().addLog('system', 'A radio crackles: "Epsilon-11 to command. We are pinned down in Heavy Containment. Requesting backup."')
    },
    // --- Environmental storytelling ---
    () => {
      get().addLog('lore', 'You find scrawled graffiti on a wall: "IT KNOWS WHEN YOU BLINK."')
    },
    () => {
      get().addLog('lore', 'A half-written note lies on the floor: "The doctor is not a doctor. Run if you see the mask."')
    },
    () => {
      get().addLog('lore', 'Blood smear leads to a ventilation grate. Something was dragged inside.')
    },
    () => {
      get().addLog('lore', 'A wristwatch lies shattered on the floor. It stopped at the hour the breach began.')
    },
  ]
  pick(events)()
}

// Re-export for store
export type { DiffDef }

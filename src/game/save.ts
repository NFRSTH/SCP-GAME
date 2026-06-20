// ===== Save / Load System =====
// Saves full game state to localStorage for resume functionality.

import { useGame } from './store'
import type { GameState } from './types'
import { SAVE_KEY, AUTOSAVE_INTERVAL_TURNS } from './constants'

export interface SaveData {
  version: number
  savedAt: number
  turn: number
  state: Partial<GameState>
}

const SAVE_VERSION = 1

// Save the full game state to localStorage
export function saveGame(): boolean {
  try {
    const s = useGame.getState()
    if (s.phase !== 'playing') return false
    const data: SaveData = {
      version: SAVE_VERSION,
      savedAt: Date.now(),
      turn: s.turn,
      state: {
        phase: s.phase,
        mode: s.mode,
        role: s.role,
        scpId: s.scpId,
        difficulty: s.difficulty,
        player: s.player,
        facility: s.facility,
        scps: s.scps,
        loot: s.loot,
        log: s.log,
        turn: s.turn,
        logCounter: s.logCounter,
      },
    }
    localStorage.setItem(SAVE_KEY, JSON.stringify(data))
    return true
  } catch {
    return false
  }
}

// Load a saved game from localStorage
export function loadGame(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as SaveData
    if (data.version !== SAVE_VERSION) return null
    return data
  } catch {
    return null
  }
}

// Check if a save exists
export function hasSave(): boolean {
  try {
    return !!localStorage.getItem(SAVE_KEY)
  } catch {
    return false
  }
}

// Resume from a save
export function resumeGame(): boolean {
  const data = loadGame()
  if (!data || !data.state) return false
  useGame.setState({
    phase: 'playing',
    mode: data.state.mode ?? null,
    role: data.state.role ?? null,
    scpId: data.state.scpId ?? null,
    difficulty: data.state.difficulty ?? 'balanced',
    player: data.state.player ?? useGame.getState().player,
    facility: data.state.facility ?? useGame.getState().facility,
    scps: data.state.scps ?? [],
    loot: data.state.loot ?? {},
    log: data.state.log ?? [],
    turn: data.state.turn ?? 0,
    logCounter: data.state.logCounter ?? 0,
    victoryType: null,
    deathCause: null,
  })
  useGame.getState().addLog('system', 'Game resumed from save.')
  return true
}

// Delete the save
export function deleteSave(): void {
  try {
    localStorage.removeItem(SAVE_KEY)
  } catch {
    // ignore
  }
}

// Auto-save hook: call this after each tick. Saves every AUTOSAVE_INTERVAL_TURNS.
export function maybeAutoSave(): void {
  const s = useGame.getState()
  if (s.phase !== 'playing') return
  if (s.turn > 0 && s.turn % AUTOSAVE_INTERVAL_TURNS === 0) {
    if (saveGame()) {
      s.addLog('system', `[Auto-saved at turn ${s.turn}]`)
    }
  }
}

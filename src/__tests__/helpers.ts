// ===== Shared Test Helpers =====
// Helpers for putting the Zustand store into a deterministic, isolated state
// before each test. The store is a module-level singleton, so we reset it
// before every test to keep them independent.

import { useGame } from '@/game/store'
import { INITIAL_PLAYER, INITIAL_FACILITY, INITIAL_UNLOCK, SCP_HP } from '@/game/constants'
import { getItem } from '@/game/data/items'
import { getSCP } from '@/game/data/scps'
import type {
  GameState,
  SCPInstance,
  Difficulty,
  Role,
  Item,
  FacilityState,
  PlayerState,
  UnlockState,
} from '@/game/types'

/**
 * Force Math.random to return a fixed value for the duration of a test.
 * Defaults to 0.99 (high) so probability-gated events (SCP escapes, 079
 * locks, etc.) almost never fire. Pass a specific value to test those
 * code paths deterministically.
 */
export function mockRandom(value: number = 0.99): jest.SpyInstance {
  return jest.spyOn(Math, 'random').mockReturnValue(value)
}

/**
 * Reset the store to a pristine pre-game state. Use in beforeEach.
 */
export function resetStore(): void {
  useGame.setState({
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
  })
}

/**
 * Patch the store with a partial state object. Convenience wrapper.
 */
export function patchStore(patch: Partial<GameState>): void {
  useGame.setState(patch as Partial<GameState>)
}

/**
 * Build a minimal "playing" state without running startGame (which rolls
 * loot and SCP escapes via rng). Use this when you need precise control
 * over the initial state for a test scenario.
 */
export function startPlaying(overrides: {
  role?: Role
  difficulty?: Difficulty
  scpId?: string | null
  player?: Partial<PlayerState>
  facility?: Partial<FacilityState>
  scps?: SCPInstance[]
  loot?: Record<string, Item[]>
  unlock?: Partial<UnlockState>
} = {}): GameState {
  const role: Role = overrides.role ?? 'class-d'
  const difficulty: Difficulty = overrides.difficulty ?? 'balanced'
  const state: Partial<GameState> = {
    phase: 'playing',
    role,
    difficulty,
    scpId: overrides.scpId ?? null,
    unlock: { ...INITIAL_UNLOCK, ...overrides.unlock },
    player: {
      ...INITIAL_PLAYER,
      roomId: overrides.player?.roomId ?? 'cells-d',
      health: overrides.player?.health ?? 100,
      maxHealth: overrides.player?.maxHealth ?? 100,
      stamina: overrides.player?.stamina ?? 100,
      maxStamina: overrides.player?.maxStamina ?? 100,
      inventory: overrides.player?.inventory ?? [],
      weaponEquipped: overrides.player?.weaponEquipped ?? null,
      flashlightOn: overrides.player?.flashlightOn ?? false,
      flashlightBattery: overrides.player?.flashlightBattery ?? 100,
      ...overrides.player,
    },
    facility: { ...INITIAL_FACILITY, ...overrides.facility },
    scps: overrides.scps ?? [],
    loot: overrides.loot ?? {},
    log: [],
    turn: 0,
    logCounter: 0,
    victoryType: null,
    deathCause: null,
  }
  useGame.setState(state as GameState)
  return useGame.getState()
}

/**
 * Add an item directly to the player's inventory (bypasses pickup logic).
 */
export function giveItem(itemId: string, qty: number = 1): void {
  const s = useGame.getState()
  const inv = s.player.inventory.map((sl) => ({ ...sl, item: { ...sl.item } }))
  const existing = inv.find((sl) => sl.item.id === itemId)
  if (existing) {
    existing.qty += qty
  } else {
    const it = getItem(itemId)
    if (it) inv.push({ item: it, qty })
  }
  useGame.setState({ player: { ...useGame.getState().player, inventory: inv } })
}

/**
 * Build an SCPInstance with sensible defaults.
 */
export function makeSCP(
  scpId: string,
  overrides: Partial<SCPInstance> = {},
): SCPInstance {
  const def = getSCP(scpId)
  return {
    scpId,
    roomId: overrides.roomId ?? 'corridor-l1',
    hp: overrides.hp ?? (def ? SCP_HP[def.threat] : 80),
    state: overrides.state ?? 'roaming',
    cooldown: overrides.cooldown ?? 0,
    windup: overrides.windup ?? 0,
    ...overrides,
  }
}

export { useGame }

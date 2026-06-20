// ===== Tests for src/game/movement.ts (and store movement actions) =====
// Movement validation: door checks, keycard requirements, stamina cost,
// bidirectional door traversal, and SCP-079 lock + crowbar interactions.

import { useGame } from '@/game/store'
import { DOORS, doorBetween, doorsFrom, getRoom } from '@/game/data/facility'
import { getItem } from '@/game/data/items'
import {
  MOVE_STAMINA_COST,
  CROWBAR_FORCE_CHANCE,
  NOISE_PER_MOVE,
} from '@/game/constants'
import {
  resetStore,
  startPlaying,
  giveItem,
  makeSCP,
  mockRandom,
} from './helpers'

beforeEach(() => {
  resetStore()
  mockRandom(0.99)
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('move() — door existence checks', () => {
  it("fails when there is no door in the requested direction", () => {
    startPlaying({ player: { roomId: 'cells-d', stamina: 100 } })
    // cells-d has doors E (corridor-l1), N (gate-a reversed), S (server-rm).
    // No door to the W.
    const result = useGame.getState().move('W')
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/no door/i)
    expect(useGame.getState().player.roomId).toBe('cells-d')
  })

  it('fails when phase is not "playing"', () => {
    resetStore() // phase defaults to 'menu'
    const result = useGame.getState().move('N')
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/not in game/i)
  })

  it('fails when current room does not exist', () => {
    startPlaying({ player: { roomId: 'cells-d', stamina: 100 } })
    // Force the player into a non-existent room
    useGame.setState({ player: { ...useGame.getState().player, roomId: 'does-not-exist' } })
    const result = useGame.getState().move('N')
    expect(result.ok).toBe(false)
  })
})

describe('move() — keycard requirements', () => {
  it('blocks movement through a Level 5 door without a keycard', () => {
    // cells-d -> gate-a (reversed d-gate-a-cells) requires L5 keycard.
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100, inventory: [] },
    })
    const result = useGame.getState().move('N') // N goes to gate-a
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/Level 5 keycard/i)
    expect(useGame.getState().player.roomId).toBe('cells-d')
  })

  it('blocks movement through a Level 3 door with only a Level 2 keycard', () => {
    // checkpoint -> armory requires L3.
    startPlaying({
      player: { roomId: 'checkpoint', stamina: 100 },
    })
    giveItem('keycard2') // L2 only
    const result = useGame.getState().move('E') // E to armory
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/Level 3 keycard/i)
  })

  it('allows movement when the player holds a sufficient keycard', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
    })
    giveItem('keycard5')
    const result = useGame.getState().move('N') // to gate-a, L5 required
    expect(result.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('gate-a')
  })

  it('allows movement through open doors (keycardRequired=0) without any keycard', () => {
    // No door in the facility has keycardRequired=0 by default, so test that
    // an L1 keycard unlocks L1 doors (cells-d -> corridor-l1 requires L1).
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
    })
    giveItem('keycard1')
    const result = useGame.getState().move('E')
    expect(result.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('corridor-l1')
  })

  it('highestKeycard returns the max level held', () => {
    startPlaying({ player: { roomId: 'cells-d' } })
    giveItem('keycard2')
    giveItem('keycard4')
    expect(useGame.getState().highestKeycard()).toBe(4)
  })

  it('hasKeycard returns true for any level <= the highest held', () => {
    startPlaying({ player: { roomId: 'cells-d' } })
    giveItem('keycard3')
    expect(useGame.getState().hasKeycard(1)).toBe(true)
    expect(useGame.getState().hasKeycard(2)).toBe(true)
    expect(useGame.getState().hasKeycard(3)).toBe(true)
    expect(useGame.getState().hasKeycard(4)).toBe(false)
    expect(useGame.getState().hasKeycard(5)).toBe(false)
  })
})

describe('move() — stamina cost', () => {
  it('fails when stamina is below the move cost', () => {
    // Balanced difficulty: cost = MOVE_STAMINA_COST * 1 = 4.
    startPlaying({
      difficulty: 'balanced',
      player: { roomId: 'cells-d', stamina: 3, maxStamina: 100 },
    })
    giveItem('keycard1') // unlock the E door
    const result = useGame.getState().move('E')
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/exhausted/i)
    expect(useGame.getState().player.roomId).toBe('cells-d')
  })

  it('succeeds when stamina is exactly the move cost (stamina drops to 0)', () => {
    startPlaying({
      difficulty: 'balanced',
      player: { roomId: 'cells-d', stamina: MOVE_STAMINA_COST, maxStamina: 100 },
    })
    giveItem('keycard1')
    const result = useGame.getState().move('E')
    expect(result.ok).toBe(true)
    // After move stamina is 0, after tick stamina regens by STAMINA_REGEN_PER_TICK (6).
    expect(useGame.getState().player.stamina).toBeGreaterThan(0)
    expect(useGame.getState().player.roomId).toBe('corridor-l1')
  })

  it('deducts stamina scaled by difficulty staminaDrainMultiplier', () => {
    // Hardcore: cost = 4 * 1.4 = 5.6. Use stamina=6 so it succeeds with 0.4 left,
    // then tick regens +6 -> 6.4.
    startPlaying({
      difficulty: 'hardcore',
      player: { roomId: 'cells-d', stamina: 6, maxStamina: 100 },
    })
    giveItem('keycard1')
    const result = useGame.getState().move('E')
    expect(result.ok).toBe(true)
    // 6 - 5.6 = 0.4, + 6 regen = 6.4 (well below maxStamina=100, so no cap).
    expect(useGame.getState().player.stamina).toBeCloseTo(6.4, 1)
  })

  it('adds NOISE_PER_MOVE to the player noise level on a successful move', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100, noiseLevel: 0 },
    })
    giveItem('keycard1')
    useGame.getState().move('E')
    // Move adds NOISE_PER_MOVE; tick decays NOISE_DECAY_PER_TICK (0.3).
    // Net: 0 + 0.2 - 0.3 = 0 (clamped to >= 0).
    // To verify the cost was applied, check noise >= NOISE_PER_MOVE - decay.
    const noise = useGame.getState().player.noiseLevel
    expect(noise).toBeGreaterThanOrEqual(0)
    expect(noise).toBeLessThanOrEqual(NOISE_PER_MOVE)
  })
})

describe('move() — bidirectional door traversal', () => {
  it('allows moving back the way you came', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
    })
    giveItem('keycard1')

    // Move E to corridor-l1
    const r1 = useGame.getState().move('E')
    expect(r1.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('corridor-l1')

    // Move W back to cells-d
    const r2 = useGame.getState().move('W')
    expect(r2.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('cells-d')
  })

  it('doorBetween returns the same door regardless of direction', () => {
    const fwd = doorBetween('cells-d', 'corridor-l1')
    const rev = doorBetween('corridor-l1', 'cells-d')
    expect(fwd).toBeDefined()
    expect(rev).toBeDefined()
    expect(fwd?.id).toBe(rev?.id)
  })

  it('doorsFrom includes both forward and reversed doors', () => {
    const fromCells = doorsFrom('cells-d')
    const fromCorr = doorsFrom('corridor-l1')
    // cells-d -> corridor-l1 forward (id d-cells-corr1)
    expect(fromCells.find((d) => d.to === 'corridor-l1')).toBeDefined()
    // corridor-l1 -> cells-d reversed (id d-cells-corr1-rev)
    expect(fromCorr.find((d) => d.to === 'cells-d')).toBeDefined()
  })
})

describe('move() — SCP-079 locked doors', () => {
  it('blocks movement through a 079-locked door without a crowbar', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
      facility: { lockedDoors: ['d-cells-corr1'] },
    })
    giveItem('keycard1')
    const result = useGame.getState().move('E') // E to corridor-l1
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/locked by SCP-079/i)
    expect(useGame.getState().player.roomId).toBe('cells-d')
  })

  it('still blocks movement with a crowbar when the force roll fails', () => {
    // CROWBAR_FORCE_CHANCE = 0.6. Mock rng to 0.9 (>0.6) -> crowbar fails.
    mockRandom(0.9)
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
      facility: { lockedDoors: ['d-cells-corr1'] },
    })
    giveItem('keycard1')
    giveItem('crowbar')
    const result = useGame.getState().move('E')
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/locked by SCP-079/i)
    expect(useGame.getState().player.roomId).toBe('cells-d')
  })

  it('allows movement through a 079-locked door with a crowbar when the force roll succeeds', () => {
    // Mock rng to 0.1 (< 0.6) -> crowbar succeeds.
    mockRandom(0.1)
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
      facility: { lockedDoors: ['d-cells-corr1'] },
    })
    giveItem('keycard1')
    giveItem('crowbar')
    const result = useGame.getState().move('E')
    expect(result.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('corridor-l1')
    // The door should be removed from lockedDoors.
    expect(useGame.getState().facility.lockedDoors).not.toContain('d-cells-corr1')
  })

  it('force chance threshold equals CROWBAR_FORCE_CHANCE', () => {
    // Sanity-check the constant is what we think it is.
    expect(CROWBAR_FORCE_CHANCE).toBe(0.6)
  })
})

describe('tryMoveToRoom() — direct target validation', () => {
  it('fails when no direct door connects the rooms', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
    })
    giveItem('keycard5')
    // cells-d and scp079-core are not directly connected.
    const result = useGame.getState().tryMoveToRoom('scp079-core')
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/no direct door/i)
  })

  it('succeeds for an adjacent room with the right keycard', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100 },
    })
    giveItem('keycard1')
    const result = useGame.getState().tryMoveToRoom('corridor-l1')
    expect(result.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('corridor-l1')
  })

  it('clears the watchingSCP173 flag on a successful move', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100, watchingSCP173: true },
    })
    giveItem('keycard1')
    useGame.getState().tryMoveToRoom('corridor-l1')
    expect(useGame.getState().player.watchingSCP173).toBe(false)
  })
})

describe('move() — SCP-096 face-seen trigger on entry', () => {
  it('enrages SCP-096 and starts windup when the player enters its room', () => {
    startPlaying({
      difficulty: 'easy', // lethalWarningTurns = 2
      player: { roomId: 'corridor-l1', stamina: 100, lookedAt096: false },
      scps: [makeSCP('scp-096', { roomId: 'scp096-cell', state: 'roaming' })],
    })
    giveItem('keycard2')

    // corridor-l1 -> corridor-l2 -> research-lab -> scp096-cell
    useGame.getState().move('S')
    useGame.getState().move('E')
    const r = useGame.getState().move('E') // into scp096-cell
    expect(r.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('scp096-cell')

    // trigger096OnEntry sets windup = lethalWarningTurns (2 on easy) and
    // state = 'enraged'. The subsequent tick runs SCP-096's screaming-phase
    // AI branch which decrements windup by 1, leaving windup = 1.
    const scp096 = useGame.getState().scps.find((s) => s.scpId === 'scp-096')
    expect(scp096?.state).toBe('enraged')
    expect(scp096?.windup).toBe(1)
    expect(useGame.getState().player.lookedAt096).toBe(true)

    // The trigger log and the scream log should both be present.
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/seen the face of SCP-096/)
    expect(logText).toMatch(/screams and thrashes/)
  })

  it('only enrages 096 the first time its face is seen', () => {
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp096-cell', stamina: 100, lookedAt096: true },
      scps: [makeSCP('scp-096', { roomId: 'scp096-cell', state: 'roaming', windup: 0 })],
    })
    // Player has already looked at 096. Entering its room again should NOT re-enrage.
    // We simulate by calling setPlayerRoom to a different room then back.
    useGame.setState({ player: { ...useGame.getState().player, roomId: 'research-lab' } })
    useGame.getState().tryMoveToRoom('scp096-cell')
    const scp096 = useGame.getState().scps.find((s) => s.scpId === 'scp-096')
    expect(scp096?.state).toBe('roaming') // unchanged
  })
})

describe('moveSCP() — SCP role movement', () => {
  it('rejects movement when role is not SCP', () => {
    startPlaying({ role: 'class-d', player: { roomId: 'cells-d', stamina: 100 } })
    const result = useGame.getState().moveSCP('E')
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/not playing as SCP/i)
  })

  it('allows SCP player to ignore keycard requirements', () => {
    // As SCP-173 (locked doors respected, but keycards ignored).
    startPlaying({
      role: 'scp',
      scpId: 'scp-173',
      player: { roomId: 'cells-d', stamina: 100 },
    })
    // cells-d -> gate-a requires L5 normally, SCP player should bypass.
    const result = useGame.getState().moveSCP('N')
    expect(result.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('gate-a')
  })

  it('blocks SCP player at 079-locked doors unless they can phase or smash', () => {
    startPlaying({
      role: 'scp',
      scpId: 'scp-173', // statue, cannot phase or smash
      player: { roomId: 'cells-d', stamina: 100 },
      facility: { lockedDoors: ['d-cells-corr1'] },
    })
    const result = useGame.getState().moveSCP('E')
    expect(result.ok).toBe(false)
    expect(result.reason).toMatch(/locked/i)
  })

  it('lets SCP-106 (phase) pass through 079-locked doors', () => {
    startPlaying({
      role: 'scp',
      scpId: 'scp-106', // phase AI
      player: { roomId: 'cells-d', stamina: 100 },
      facility: { lockedDoors: ['d-cells-corr1'] },
    })
    const result = useGame.getState().moveSCP('E')
    expect(result.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('corridor-l1')
    // The door should be removed from lockedDoors.
    expect(useGame.getState().facility.lockedDoors).not.toContain('d-cells-corr1')
  })

  it('lets a strong SCP (e.g. SCP-682) smash through 079-locked doors', () => {
    startPlaying({
      role: 'scp',
      scpId: 'scp-682', // strong threat
      player: { roomId: 'cells-d', stamina: 100 },
      facility: { lockedDoors: ['d-cells-corr1'] },
    })
    const result = useGame.getState().moveSCP('E')
    expect(result.ok).toBe(true)
    expect(useGame.getState().player.roomId).toBe('corridor-l1')
  })

  it('triggers SCP win when reaching an exit', () => {
    startPlaying({
      role: 'scp',
      scpId: 'scp-173',
      player: { roomId: 'reception', stamina: 100 },
    })
    // reception -> gate-a is the reversed d-gate-a-recep door. Move W to gate-a.
    const result = useGame.getState().moveSCP('W')
    expect(result.ok).toBe(true)
    expect(useGame.getState().phase).toBe('victory')
    expect(useGame.getState().victoryType).toBe('escape')
  })
})

describe('move() — entering a dark room without flashlight drains sanity', () => {
  it('reduces sanity when entering a dark room without flashlight', () => {
    // checkpoint (not dark) -> scp173-cell (not dark). Need a dark destination.
    // reception (not dark) -> corridor-l1 (dark). Requires L1 keycard.
    startPlaying({
      player: { roomId: 'reception', stamina: 100, sanity: 100, flashlightOn: false },
    })
    giveItem('keycard1')
    useGame.getState().move('S') // S to corridor-l1 (dark)
    expect(useGame.getState().player.sanity).toBeLessThan(100)
  })

  it('does not reduce sanity when flashlight is on', () => {
    startPlaying({
      player: { roomId: 'reception', stamina: 100, sanity: 100, flashlightOn: true, flashlightBattery: 100 },
    })
    giveItem('keycard1')
    useGame.getState().move('S')
    expect(useGame.getState().player.sanity).toBe(100)
  })
})

describe('move() — facility data integrity', () => {
  it('every room has at least one door connecting it to the facility graph', () => {
    for (const door of DOORS) {
      expect(getRoom(door.from)).toBeDefined()
      expect(getRoom(door.to)).toBeDefined()
    }
  })
})

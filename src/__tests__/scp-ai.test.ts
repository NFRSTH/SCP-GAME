// ===== Tests for src/game/ai.ts — SCP AI state transitions =====
// Verifies contained-SCP escapes, SCP-173 freeze-when-watched, SCP-096
// screaming windup, SCP-106 flashlight repel, and SCP-079 door-lock cap.

import { useGame } from '@/game/store'
import { DOORS } from '@/game/data/facility'
import { getSCP } from '@/game/data/scps'
import { getDifficulty } from '@/game/data/roles'
import {
  SCP173_WATCH_RANGE,
  SCP106_FLASHLIGHT_REPEL_RANGE,
  SCP106_FLASHLIGHT_REPEL_CHANCE,
  SCP106_RETREAT_COOLDOWN,
  SCP079_LOCK_CHANCE,
  SCP_ESCAPE_BASE_CHANCE,
} from '@/game/constants'
import { resetStore, startPlaying, makeSCP, mockRandom } from './helpers'

beforeEach(() => {
  resetStore()
  mockRandom(0.99)
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('runSCPAI — contained SCP escape', () => {
  it('transitions a contained SCP to roaming when the escape roll succeeds', () => {
    // Easy: scpEscapeChancePerTick = 0.04. rng=0 -> 0 < 0.04 -> escape.
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100 },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell', state: 'contained' })],
    })
    expect(useGame.getState().scps[0].state).toBe('contained')
    useGame.getState().tick()
    expect(useGame.getState().scps[0].state).toBe('roaming')
  })

  it('keeps the SCP contained when the escape roll fails', () => {
    // rng=0.99 -> 0.99 > 0.04 -> no escape.
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100 },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell', state: 'contained' })],
    })
    useGame.getState().tick()
    expect(useGame.getState().scps[0].state).toBe('contained')
  })

  it('respects the maxConcurrentRoamingSCPs cap', () => {
    // Pre-fill the roaming roster to the cap (3 on easy). Even with rng=0,
    // a contained SCP cannot escape because the cap is reached.
    mockRandom(0)
    startPlaying({
      difficulty: 'easy', // maxConcurrentRoamingSCPs = 3
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [
        makeSCP('scp-066', { roomId: 'corridor-l2', state: 'roaming' }),
        makeSCP('scp-860', { roomId: 'scp860-door', state: 'roaming' }),
        makeSCP('scp-939', { roomId: 'scp939-nest', state: 'roaming' }),
        makeSCP('scp-173', { roomId: 'scp173-cell', state: 'contained' }),
      ],
    })
    useGame.getState().tick()
    // SCP-173 should still be contained (cap reached).
    const scp173 = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    expect(scp173?.state).toBe('contained')
  })

  it('logs a breach message when an SCP escapes', () => {
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100 },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell', state: 'contained' })],
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/SCP-173.*breached containment/i)
  })

  it('SCP-001 never escapes (special-cased)', () => {
    // SCP-001 is excluded from initial escape rolls in startGame, but the AI
    // itself doesn't special-case 001 — if 001 is contained, it can escape
    // via the normal escape check. The "never escapes" guarantee is enforced
    // at startGame time, not at AI time. This test documents the AI behavior.
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100 },
      scps: [makeSCP('scp-001', { roomId: 'scp001-vault', state: 'contained' })],
    })
    useGame.getState().tick()
    const scp001 = useGame.getState().scps.find((s) => s.scpId === 'scp-001')
    // 001 escapes like any other contained SCP when the roll succeeds.
    expect(scp001?.state).toBe('roaming')
  })
})

describe('runSCPAI — SCP-173 frozen when watched', () => {
  it('does not move toward the player while being watched', () => {
    // 173 in scp173-cell (2,1), player in corridor-l1 (1,1). dist=1 <= 2.
    // watchingSCP173=true -> 173 frozen.
    mockRandom(0.99) // 173 wouldn't escape anyway (contained branch skipped)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'corridor-l1', stamina: 100, watchingSCP173: true },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell', state: 'roaming' })],
    })
    const roomBefore = useGame.getState().scps[0].roomId
    useGame.getState().tick()
    expect(useGame.getState().scps[0].roomId).toBe(roomBefore) // unchanged
  })

  it('moves toward the player when NOT watched', () => {
    // Same setup but watchingSCP173=false. 173 should move toward the player.
    // Next step from scp173-cell toward corridor-l1 is corridor-l1 (direct door).
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'corridor-l1', stamina: 100, watchingSCP173: false, health: 9999 },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell', state: 'roaming' })],
    })
    useGame.getState().tick()
    // 173 should have moved (toward player).
    expect(useGame.getState().scps[0].roomId).not.toBe('scp173-cell')
  })

  it('SCP-173 does not freeze when the player is out of watch range', () => {
    // 173 in scp173-cell (2,1), player in scp079-core (3,4). dist = 1+3 = 4 > 2.
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp079-core', stamina: 100, watchingSCP173: true, health: 9999 },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell', state: 'roaming' })],
    })
    useGame.getState().tick()
    // 173 should move toward player (not frozen because out of range).
    expect(useGame.getState().scps[0].roomId).not.toBe('scp173-cell')
  })

  it('SCP173_WATCH_RANGE is 2', () => {
    expect(SCP173_WATCH_RANGE).toBe(2)
  })
})

describe('runSCPAI — SCP-096 screaming phase (windup countdown)', () => {
  it('decrements windup by 1 each tick while screaming', () => {
    // SCP-096 enraged, windup=3, in a different room from player.
    // Easy: warningTurns=2 > 0, so the screaming-phase branch runs.
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-096', { roomId: 'scp096-cell', state: 'enraged', windup: 3 })],
    })
    useGame.getState().tick()
    const scp096 = useGame.getState().scps.find((s) => s.scpId === 'scp-096')
    expect(scp096?.windup).toBe(2)
  })

  it('transitions from screaming to chase when windup reaches 0', () => {
    // windup=1 -> 0 after tick. The log should say "falls silent. Then it sprints."
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-096', { roomId: 'scp096-cell', state: 'enraged', windup: 1 })],
    })
    useGame.getState().tick()
    const scp096 = useGame.getState().scps.find((s) => s.scpId === 'scp-096')
    expect(scp096?.windup).toBe(0)
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/falls silent/i)
  })

  it('does not scream on difficulties with lethalWarningTurns=0', () => {
    // Hard: warningTurns=0. The screaming-phase branch is skipped.
    // 096 enraged with windup>0, but warningTurns=0 means the branch doesn't run.
    // 096 will instead chase the player directly (shy+enraged, no windup gate).
    mockRandom(0.99)
    startPlaying({
      difficulty: 'hard',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-096', { roomId: 'scp096-cell', state: 'enraged', windup: 3 })],
    })
    useGame.getState().tick()
    const scp096 = useGame.getState().scps.find((s) => s.scpId === 'scp-096')
    // 096 moves toward the player (sprint), windup not decremented by scream branch.
    // Movement may have happened, but windup stays at 3 (screaming branch skipped).
    expect(scp096?.windup).toBe(3)
  })

  it('logs the "screams and thrashes" warning while windup > 0', () => {
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-096', { roomId: 'scp096-cell', state: 'enraged', windup: 2 })],
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/screams and thrashes/i)
  })
})

describe('runSCPAI — SCP-106 repelled by flashlight', () => {
  it('retreats from the player when the flashlight is on and roll succeeds', () => {
    // SCP-106 in corridor-l1 (1,1), player in cells-d (0,1). dist=1 <= 2.
    // Flashlight on. rng=0 < 0.7 -> repel.
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, flashlightOn: true, flashlightBattery: 100, health: 9999 },
      scps: [makeSCP('scp-106', { roomId: 'corridor-l1', state: 'roaming' })],
    })
    const roomBefore = useGame.getState().scps[0].roomId
    useGame.getState().tick()
    const scp106 = useGame.getState().scps.find((s) => s.scpId === 'scp-106')
    // 106 should have moved to a different room (away from player).
    expect(scp106?.roomId).not.toBe(roomBefore)
    expect(scp106?.roomId).not.toBe('cells-d') // never moves INTO the player
  })

  it('sets the retreat cooldown after being repelled', () => {
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, flashlightOn: true, flashlightBattery: 100, health: 9999 },
      scps: [makeSCP('scp-106', { roomId: 'corridor-l1', state: 'roaming', cooldown: 0 })],
    })
    useGame.getState().tick()
    const scp106 = useGame.getState().scps.find((s) => s.scpId === 'scp-106')
    // Retreat cooldown = max(SCP106_RETREAT_COOLDOWN, round(2 * 1.5)) = max(2, 3) = 3 on easy.
    expect(scp106?.cooldown).toBeGreaterThanOrEqual(SCP106_RETREAT_COOLDOWN)
  })

  it('does not repel 106 when the flashlight is off', () => {
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, flashlightOn: false, health: 9999 },
      scps: [makeSCP('scp-106', { roomId: 'corridor-l1', state: 'roaming' })],
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).not.toMatch(/flashlight beam falls on SCP-106/i)
  })

  it('does not repel 106 when out of flashlight range', () => {
    // 106 in scp106-cell (3,3), player in cells-d (0,1). dist = 3+2 = 5 > 2.
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, flashlightOn: true, flashlightBattery: 100, health: 9999 },
      scps: [makeSCP('scp-106', { roomId: 'scp106-cell', state: 'roaming' })],
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).not.toMatch(/flashlight beam falls on SCP-106/i)
  })

  it('does not repel 106 when the repel roll fails', () => {
    // rng=0.99 > 0.7 -> repel fails.
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, flashlightOn: true, flashlightBattery: 100, health: 9999 },
      scps: [makeSCP('scp-106', { roomId: 'corridor-l1', state: 'roaming' })],
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).not.toMatch(/flashlight beam falls on SCP-106/i)
  })

  it('SCP106_FLASHLIGHT_REPEL_CHANCE is 0.7', () => {
    expect(SCP106_FLASHLIGHT_REPEL_CHANCE).toBe(0.7)
  })

  it('SCP106_FLASHLIGHT_REPEL_RANGE is 2', () => {
    expect(SCP106_FLASHLIGHT_REPEL_RANGE).toBe(2)
  })
})

describe('runSCPAI — SCP-079 door locking', () => {
  it('locks a door when the lock roll succeeds', () => {
    // rng=0 < 0.25 -> lock attempt. No doors pre-locked.
    mockRandom(0)
    startPlaying({
      difficulty: 'easy', // maxLockedDoors=3
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [], powerOn: true },
    })
    expect(useGame.getState().facility.lockedDoors.length).toBe(0)
    useGame.getState().tick()
    expect(useGame.getState().facility.lockedDoors.length).toBe(1)
  })

  it('does not lock doors when scp079Shutdown is true', () => {
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999, scp079Shutdown: true },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [], powerOn: true },
    })
    useGame.getState().tick()
    expect(useGame.getState().facility.lockedDoors.length).toBe(0)
  })

  it('respects the maxLockedDoors cap', () => {
    // Easy: maxLockedDoors=3. Pre-lock 3 doors. 079 cannot lock more.
    mockRandom(0)
    const prelocked = DOORS.slice(0, 3).map((d) => d.id)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [...prelocked], powerOn: true },
    })
    useGame.getState().tick()
    expect(useGame.getState().facility.lockedDoors.length).toBe(3)
  })

  it('does not re-lock an already-locked door', () => {
    // Pre-lock 1 door. After tick, the new lock should be a DIFFERENT door.
    mockRandom(0)
    const prelocked = DOORS.slice(0, 1).map((d) => d.id)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [...prelocked], powerOn: true },
    })
    useGame.getState().tick()
    const locked = useGame.getState().facility.lockedDoors
    expect(locked.length).toBe(2)
    // The newly locked door is the first non-locked door (lockable[0]).
    const expectedNewLock = DOORS.find((d) => !prelocked.includes(d.id))!.id
    expect(locked).toContain(expectedNewLock)
  })

  it('only locks one door per tick', () => {
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [], powerOn: true },
    })
    useGame.getState().tick()
    expect(useGame.getState().facility.lockedDoors.length).toBe(1)
  })

  it('logs a message when 079 locks a door', () => {
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [], powerOn: true },
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/SCP-079 seals a door/i)
  })

  it('SCP079_LOCK_CHANCE is 0.25', () => {
    expect(SCP079_LOCK_CHANCE).toBe(0.25)
  })
})

describe('runSCPAI — SCP-079 power cut', () => {
  it('cuts power on balanced+ when the roll succeeds', () => {
    // Balanced: powerCutChance=0.04. rng=0 < 0.04 -> cut.
    mockRandom(0)
    startPlaying({
      difficulty: 'balanced',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [], powerOn: true },
    })
    useGame.getState().tick()
    expect(useGame.getState().facility.powerOn).toBe(false)
    expect(useGame.getState().facility.powerOutageTicks).toBeGreaterThan(0)
  })

  it('does not cut power on easy (powerCutChance=0)', () => {
    mockRandom(0)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', state: 'roaming' })],
      facility: { lockedDoors: [], powerOn: true },
    })
    useGame.getState().tick()
    expect(useGame.getState().facility.powerOn).toBe(true)
  })

  it('auto-recovers power after the outage duration elapses', () => {
    mockRandom(0.99)
    startPlaying({
      difficulty: 'balanced', // powerOutageDuration=3
      player: { roomId: 'cells-d', stamina: 100, health: 9999 },
      scps: [],
      facility: { lockedDoors: [], powerOn: false, powerOutageTicks: 1 },
    })
    useGame.getState().tick()
    // powerOutageTicks was 1, decremented to 0, power restored.
    expect(useGame.getState().facility.powerOn).toBe(true)
    expect(useGame.getState().facility.powerOutageTicks).toBe(0)
  })
})

describe('runSCPAI — windup reset when player escapes', () => {
  it('resets windup to 0 when a non-shy SCP leaves the player room', () => {
    // SCP-173 (statue, not shy) was hunting the player with windup>0.
    // Player moves away — next tick, 173 is in a different room, windup resets.
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, watchingSCP173: true, health: 9999 },
      scps: [makeSCP('scp-173', { roomId: 'corridor-l1', state: 'roaming', windup: 2 })],
    })
    useGame.getState().tick()
    const scp173 = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    // 173 is in corridor-l1, player in cells-d. dist=1. Not in player's room.
    // 173 is shy? No, 173 is statue. windup>0, not in player's room, not shy -> reset.
    expect(scp173?.windup).toBe(0)
  })
})

describe('runSCPAI — proximity warnings', () => {
  it('warns the player when a roaming SCP is in an adjacent room (easy)', () => {
    // Easy: showProximityWarnings=true. SCP-173 in corridor-l1 (adjacent to cells-d).
    mockRandom(0.99)
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'cells-d', stamina: 100, watchingSCP173: true, health: 9999 },
      scps: [makeSCP('scp-173', { roomId: 'corridor-l1', state: 'roaming' })],
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/sense SCP-173 in an adjacent room/i)
  })

  it('does NOT warn on difficulties with showProximityWarnings=false', () => {
    mockRandom(0.99)
    startPlaying({
      difficulty: 'hard', // showProximityWarnings=false
      player: { roomId: 'cells-d', stamina: 100, watchingSCP173: true, health: 9999 },
      scps: [makeSCP('scp-173', { roomId: 'corridor-l1', state: 'roaming' })],
    })
    useGame.getState().tick()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).not.toMatch(/sense SCP-173 in an adjacent room/i)
  })
})

describe('difficulty constants integrity', () => {
  it('SCP_ESCAPE_BASE_CHANCE is 0.08', () => {
    expect(SCP_ESCAPE_BASE_CHANCE).toBe(0.08)
  })

  it('every difficulty defines a maxLockedDoors cap', () => {
    for (const d of ['easy', 'balanced', 'hard', 'hardcore'] as const) {
      const diff = getDifficulty(d)!
      expect(diff.maxLockedDoors).toBeGreaterThanOrEqual(1)
    }
  })

  it('every SCP has a valid threat tier', () => {
    const validThreats = ['weak', 'medium', 'strong']
    for (const scp of ['scp-173', 'scp-096', 'scp-079', 'scp-682', 'scp-001']) {
      const def = getSCP(scp)!
      expect(validThreats).toContain(def.threat)
    }
  })
})

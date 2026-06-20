// ===== Tests for src/game/utils.ts =====
// Pure helpers: RNG, room distance, BFS pathfinding, item rolling.

import {
  rng,
  pick,
  roomDistance,
  describeMove,
  rollItems,
  nextRoomToward,
  nextRoomTowardBreakable,
  randomAdjacent,
  randomAdjacentAway,
  is173Adjacent,
} from '@/game/utils'
import { getItem } from '@/game/data/items'
import { DOORS, getRoom } from '@/game/data/facility'
import { mockRandom } from './helpers'

describe('rng', () => {
  it('returns a number in [0, 1)', () => {
    const spy = mockRandom(0.42)
    expect(rng()).toBe(0.42)
    expect(rng()).toBeGreaterThanOrEqual(0)
    expect(rng()).toBeLessThan(1)
    spy.mockRestore()
  })

  it('delegates to Math.random', () => {
    const spy = mockRandom(0.5)
    expect(rng()).toBe(0.5)
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})

describe('pick', () => {
  it('returns an element from the array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e']
    // mockRandom returns 0.99; floor(0.99 * 5) = floor(4.95) = 4
    const spy = mockRandom(0.99)
    expect(arr).toContain(pick(arr))
    expect(pick(arr)).toBe('e')
    spy.mockRestore()
  })

  it('returns the first element when random is 0', () => {
    const arr = ['first', 'second', 'third']
    const spy = mockRandom(0)
    expect(pick(arr)).toBe('first')
    spy.mockRestore()
  })

  it('returns the only element of a single-element array', () => {
    expect(pick(['only'])).toBe('only')
  })
})

describe('roomDistance', () => {
  it('returns 0 for the same room', () => {
    expect(roomDistance('cells-d', 'cells-d')).toBe(0)
  })

  it('returns Manhattan distance between two rooms', () => {
    // cells-d: (0, 1) | reception: (1, 0) -> |1-0| + |0-1| = 2
    expect(roomDistance('cells-d', 'reception')).toBe(2)
    // gate-a: (0, 0) | scp001-vault: (4, 4) -> 4 + 4 = 8
    expect(roomDistance('gate-a', 'scp001-vault')).toBe(8)
    // corridor-l1 (1,1) | research-lab (2,2) -> 1 + 1 = 2
    expect(roomDistance('corridor-l1', 'research-lab')).toBe(2)
  })

  it('returns 99 when a room id is unknown', () => {
    expect(roomDistance('cells-d', 'does-not-exist')).toBe(99)
    expect(roomDistance('nope', 'cells-d')).toBe(99)
  })
})

describe('describeMove', () => {
  it('describes eastward movement', () => {
    // cells-d (x=0) -> corridor-l1 (x=1): east
    expect(describeMove('cells-d', 'corridor-l1')).toBe('east')
  })

  it('describes westward movement', () => {
    // corridor-l1 (x=1) -> cells-d (x=0): west
    expect(describeMove('corridor-l1', 'cells-d')).toBe('west')
  })

  it('describes southward (deeper) movement', () => {
    // cells-d (y=1) -> server-rm (y=2): south (deeper)
    expect(describeMove('cells-d', 'server-rm')).toBe('south (deeper)')
  })

  it('describes northward (toward surface) movement', () => {
    // server-rm (y=2) -> cells-d (y=1): north (toward the surface)
    expect(describeMove('server-rm', 'cells-d')).toBe('north (toward the surface)')
  })

  it('returns empty string for unknown rooms', () => {
    expect(describeMove('nope', 'cells-d')).toBe('')
  })
})

describe('rollItems', () => {
  it('returns an empty array for unknown rooms', () => {
    expect(rollItems('does-not-exist', 1)).toEqual([])
  })

  it('spawns an item when chance roll succeeds', () => {
    // reception has keycard1 with chance 0.7. With rng()=0 and resourceMult=1,
    // 0 <= 0.7 * 1 = 0.7 -> item spawned.
    const spy = mockRandom(0)
    const result = rollItems('reception', 1)
    expect(result).toContainEqual(getItem('keycard1'))
    expect(result).toContainEqual(getItem('radio'))
    expect(result).toContainEqual(getItem('crowbar'))
    expect(result).toContainEqual(getItem('docLore1'))
    spy.mockRestore()
  })

  it('spawns no items when chance roll fails for all', () => {
    // With rng()=0.99, no item with chance<1 will spawn at resourceMult=1.
    // medbay has all chances <= 0.9, so nothing spawns.
    const spy = mockRandom(0.99)
    const result = rollItems('medbay', 1)
    expect(result).toEqual([])
    spy.mockRestore()
  })

  it('resourceMult boosts spawn probability', () => {
    // With rng()=0.99 and chance 0.6 * resourceMult 2 = 1.2 -> 0.99 <= 1.2 -> spawn.
    // medbay has medkit chance 0.9 -> 0.9 * 2 = 1.8 -> spawn.
    const spy = mockRandom(0.99)
    const result = rollItems('medbay', 2)
    const ids = result.map((r) => r.id)
    expect(ids).toContain('medkit')
    expect(ids).toContain('bandage')
    expect(ids).toContain('battery')
    spy.mockRestore()
  })

  it('resourceMult below 1 reduces spawn probability', () => {
    // With rng()=0.4 and chance 0.5 * 0.5 = 0.25 -> 0.4 > 0.25 -> no spawn.
    const spy = mockRandom(0.4)
    const result = rollItems('lab-wing', 0.5)
    // lab-wing has keycard2 (0.6*0.5=0.3), flashlight (0.4*0.5=0.2), battery (0.6*0.5=0.3), medkit (0.3*0.5=0.15)
    // All < 0.4, so no items spawn.
    expect(result).toEqual([])
    spy.mockRestore()
  })
})

describe('nextRoomToward (BFS pathfinding)', () => {
  it('returns null when from === to', () => {
    expect(nextRoomToward('cells-d', 'cells-d', () => false)).toBeNull()
  })

  it('returns the next room along a direct path', () => {
    // cells-d -> corridor-l1 is a direct door
    expect(nextRoomToward('cells-d', 'corridor-l1', () => false)).toBe('corridor-l1')
  })

  it('returns the first step of a multi-step path', () => {
    // cells-d -> research-lab requires going cells-d -> corridor-l1 -> corridor-l2 -> research-lab
    // (or cells-d -> server-rm -> corridor-l2 -> research-lab; BFS picks the first discovered)
    const next = nextRoomToward('cells-d', 'research-lab', () => false)
    expect(next).toBeTruthy()
    // The first hop from cells-d is one of: corridor-l1 (E), server-rm (S)
    expect(['corridor-l1', 'server-rm']).toContain(next)
  })

  it('finds a path across the whole facility', () => {
    // gate-a -> scp001-vault: a long path
    const next = nextRoomToward('gate-a', 'scp001-vault', () => false)
    expect(next).toBeTruthy()
    // gate-a's neighbors: reception (E), cells-d (S)
    expect(['reception', 'cells-d']).toContain(next)
  })

  it('avoids locked doors', () => {
    // Lock the door between cells-d and corridor-l1 (d-cells-corr1).
    // cells-d has 3 doors out (in DOORS array order): corridor-l1 (E),
    // gate-a (N, reversed from d-gate-a-cells), and server-rm (S).
    // With the direct E route locked, BFS routes through the next available
    // neighbor — gate-a — and onward via reception to corridor-l1.
    const isLocked = (doorId: string) => doorId === 'd-cells-corr1'
    expect(nextRoomToward('cells-d', 'corridor-l1', isLocked)).toBe('gate-a')
  })

  it('returns null when no path exists due to locks', () => {
    // Lock every door out of cells-d. The player is trapped.
    const isLocked = () => true
    expect(nextRoomToward('cells-d', 'corridor-l1', isLocked)).toBeNull()
  })

  it('ignoreDoors flag bypasses the lock check', () => {
    const isLocked = () => true
    expect(nextRoomToward('cells-d', 'corridor-l1', isLocked, true)).toBe('corridor-l1')
  })
})

describe('nextRoomTowardBreakable', () => {
  it('always ignores locked doors', () => {
    // Even if every door is "locked", breakable pathfinding finds a route.
    expect(nextRoomTowardBreakable('cells-d', 'corridor-l1')).toBe('corridor-l1')
    expect(nextRoomTowardBreakable('cells-d', 'scp001-vault')).toBeTruthy()
  })
})

describe('randomAdjacent', () => {
  it('returns an adjacent room', () => {
    // cells-d has 2 doors: to corridor-l1 and to server-rm.
    const spy = mockRandom(0) // floor(0 * 2) = 0 -> first door (corridor-l1)
    const next = randomAdjacent('cells-d')
    expect(['corridor-l1', 'server-rm']).toContain(next)
    spy.mockRestore()
  })

  it('returns null for a room with no doors', () => {
    // No real room has 0 doors in the facility, but test the edge case directly.
    // We test via a non-existent room.
    expect(randomAdjacent('does-not-exist')).toBeNull()
  })
})

describe('randomAdjacentAway', () => {
  it('returns the adjacent room farthest from the reference point', () => {
    // From cells-d (0,1), doors are: corridor-l1 (1,1), gate-a (0,0, reversed),
    // server-rm (0,2). Away from scp001-vault (4,4):
    //   gate-a       distance = 4 + 4 = 8   <- largest
    //   corridor-l1  distance = 3 + 3 = 6
    //   server-rm    distance = 4 + 2 = 6
    // So the farthest adjacent room is gate-a.
    expect(randomAdjacentAway('cells-d', 'scp001-vault')).toBe('gate-a')
  })
})

describe('is173Adjacent', () => {
  it('returns false when 173 is not in the scp list', () => {
    expect(is173Adjacent([], 'cells-d')).toBe(false)
    expect(
      is173Adjacent([{ scpId: 'scp-096', roomId: 'cells-d', state: 'roaming' }], 'cells-d'),
    ).toBe(false)
  })

  it('returns true when 173 is within 2 rooms (Manhattan)', () => {
    // 173 in scp173-cell (2,1). Player in corridor-l1 (1,1). Distance = 1.
    expect(
      is173Adjacent([{ scpId: 'scp-173', roomId: 'scp173-cell', state: 'roaming' }], 'corridor-l1'),
    ).toBe(true)
  })

  it('returns true when 173 is exactly 2 rooms away', () => {
    // 173 in scp173-cell (2,1). Player in cells-d (0,1). Distance = 2.
    expect(
      is173Adjacent([{ scpId: 'scp-173', roomId: 'scp173-cell', state: 'roaming' }], 'cells-d'),
    ).toBe(true)
  })

  it('returns false when 173 is more than 2 rooms away', () => {
    // 173 in scp173-cell (2,1). Player in scp079-core (3,4). Distance = 1+3 = 4.
    expect(
      is173Adjacent([{ scpId: 'scp-173', roomId: 'scp173-cell', state: 'roaming' }], 'scp079-core'),
    ).toBe(false)
  })
})

describe('DOORS data integrity', () => {
  it('every door references valid rooms', () => {
    for (const d of DOORS) {
      expect(getRoom(d.from)).toBeDefined()
      expect(getRoom(d.to)).toBeDefined()
    }
  })
})

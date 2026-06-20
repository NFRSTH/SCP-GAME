// ===== Game Utility Functions =====
// Pure helpers shared across modules: RNG, pathfinding, distance, etc.

import type { Item } from './types'
import { getItem } from './data/items'
import { ROOM_MAP, doorsFrom, getRoom } from './data/facility'

// ----- RNG -----
export function rng(): number {
  return Math.random()
}

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ----- Room helpers -----
export function roomDistance(a: string, b: string): number {
  const ra = getRoom(a)
  const rb = getRoom(b)
  if (!ra || !rb) return 99
  return Math.abs(ra.x - rb.x) + Math.abs(ra.y - rb.y)
}

export function describeMove(from: string, to: string): string {
  const rf = getRoom(from)
  const rt = getRoom(to)
  if (!rf || !rt) return ''
  if (rt.x > rf.x) return 'east'
  if (rt.x < rf.x) return 'west'
  if (rt.y > rf.y) return 'south (deeper)'
  return 'north (toward the surface)'
}

// ----- Item spawning -----
export function rollItems(roomId: string, resourceMult: number): Item[] {
  const room = ROOM_MAP[roomId]
  if (!room) return []
  const out: Item[] = []
  for (const spawn of room.items) {
    if (rng() <= spawn.chance * resourceMult) {
      const item = getItem(spawn.itemId)
      if (item) out.push(item)
    }
  }
  return out
}

// ----- Pathfinding (BFS) -----
// Returns the next room ID toward `to`, or null if no path.
// If ignoreDoors is true, the pathfinder ignores locked doors (for phasing SCPs).
export function nextRoomToward(
  from: string,
  to: string,
  isLocked: (doorId: string) => boolean,
  ignoreDoors = false,
): string | null {
  if (from === to) return null
  const visited = new Set<string>([from])
  const queue: { id: string; path: string[] }[] = [{ id: from, path: [] }]
  while (queue.length) {
    const cur = queue.shift()!
    const doors = doorsFrom(cur.id)
    for (const d of doors) {
      if (visited.has(d.to)) continue
      if (!ignoreDoors && isLocked(d.id)) continue
      const newPath = [...cur.path, d.to]
      if (d.to === to) return newPath[0]
      visited.add(d.to)
      queue.push({ id: d.to, path: newPath })
    }
  }
  return null
}

// Like nextRoomToward but ignores locked doors entirely (for 682 which smashes doors)
export function nextRoomTowardBreakable(from: string, to: string): string | null {
  return nextRoomToward(from, to, () => false, true)
}

// ----- Random adjacent room -----
export function randomAdjacent(roomId: string): string | null {
  const doors = doorsFrom(roomId)
  if (doors.length === 0) return null
  return pick(doors).to
}

// Pick an adjacent room that maximizes distance from `awayFrom`
export function randomAdjacentAway(roomId: string, awayFrom: string): string | null {
  const doors = doorsFrom(roomId)
  if (doors.length === 0) return null
  const candidates = doors
    .map((d) => ({ id: d.to, dist: roomDistance(d.to, awayFrom) }))
    .sort((a, b) => b.dist - a.dist)
  return candidates[0]?.id ?? null
}

// ----- SCP-173 adjacency check -----
export function is173Adjacent(scpInstances: { scpId: string; roomId: string; state: string }[], roomId: string): boolean {
  const inst = scpInstances.find((sc) => sc.scpId === 'scp-173')
  if (!inst) return false
  return roomDistance(roomId, inst.roomId) <= 2
}

'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGame, getRoom, getSCP, getItem, ROOMS, DOORS, doorsFrom, doorBetween } from '@/game/store'
import { ZONE_INFO } from '@/game/data/facility'
import { PlayerStatus, InventoryPanel, GameLog, ThreatIndicator } from './GameHUD'
import { AudioToggleButton } from './ErrorBoundary'
import { useRef, useState, useMemo, useEffect, useCallback, Suspense, memo } from 'react'
import * as THREE from 'three'
import {
  Flashlight, Power, Package, Crosshair, Eye, DoorOpen, AlertTriangle, Hand, MousePointerClick, Timer, Save,
} from 'lucide-react'
import type { Item } from '@/game/types'

// ===== Layout constants =====
const ROOM_SIZE = 10
const WALL_H = 4
const PLAYER_RADIUS = 0.45
const PLAYER_EYE = 1.7
const DOOR_HALF = 2 // doorway half-width
const EMPTY_LOOT: Item[] = []

function roomCenter(x: number, y: number): [number, number, number] {
  return [x * ROOM_SIZE + ROOM_SIZE / 2, 0, y * ROOM_SIZE + ROOM_SIZE / 2]
}
function roomAtWorld(px: number, pz: number): string | null {
  const x = Math.floor(px / ROOM_SIZE)
  const z = Math.floor(pz / ROOM_SIZE)
  const r = ROOMS.find((rm) => rm.x === x && rm.y === z)
  return r?.id ?? null
}

// ===== Wall generation =====
interface WallBox {
  minX: number; maxX: number; minZ: number; maxZ: number
  // rendering
  cx: number; cz: number; w: number; d: number
  isExit?: boolean
}

function buildWalls(): { walls: WallBox[]; exits: WallBox[] } {
  const walls: WallBox[] = []
  const exits: WallBox[] = []

  // For each room, generate its 4 edges. Dedupe by canonical edge key.
  const seen = new Set<string>()
  for (const room of ROOMS) {
    const x0 = room.x * ROOM_SIZE
    const z0 = room.y * ROOM_SIZE
    const x1 = x0 + ROOM_SIZE
    const z1 = z0 + ROOM_SIZE

    // North edge (z = z0) — partner is room at (x, y-1)
    addEdge(walls, exits, seen, room, 'N', x0, z0, x1, z0)
    // South edge (z = z1)
    addEdge(walls, exits, seen, room, 'S', x0, z1, x1, z1)
    // West edge (x = x0)
    addEdge(walls, exits, seen, room, 'W', x0, z0, x0, z1)
    // East edge (x = x1)
    addEdge(walls, exits, seen, room, 'E', x1, z0, x1, z1)
  }
  return { walls, exits }
}

function addEdge(
  walls: WallBox[],
  exits: WallBox[],
  seen: Set<string>,
  room: { id: string; x: number; y: number; isExit?: boolean },
  dir: 'N' | 'S' | 'E' | 'W',
  ax: number, az: number, bx: number, bz: number,
) {
  const key = `${Math.min(ax, bx)},${Math.min(az, bz)},${Math.max(ax, bx)},${Math.max(az, bz)}`
  if (seen.has(key)) return
  seen.add(key)

  // Find door in this direction
  const door = DOORS.find((d) => d.from === room.id && d.direction === dir)
  const reverseDoor = DOORS.find((d) => d.to === room.id && d.direction === oppositeDir(dir))
  const hasDoor = !!(door || reverseDoor)
  const isBoundary = !hasDoor

  // If this edge is on the boundary (no door) and the room is an exit gate AND the edge faces "out" (north for gate), it's an escape zone
  const isGateExit = isBoundary && room.isExit && dir === 'N'

  const horizontal = az === bz // wall runs along X
  if (isGateExit) {
    // mark as exit passage (no wall, but a special zone)
    const cx = (ax + bx) / 2
    const cz = (az + bz) / 2
    exits.push({ minX: Math.min(ax, bx), maxX: Math.max(ax, bx), minZ: Math.min(az, bz), maxZ: Math.max(az, bz), cx, cz, w: Math.abs(bx - ax), d: Math.abs(bz - az), isExit: true })
    return
  }

  if (hasDoor) {
    // wall with doorway gap in the middle
    if (horizontal) {
      const gapStart = Math.min(ax, bx) + (ROOM_SIZE / 2 - DOOR_HALF)
      const gapEnd = Math.min(ax, bx) + (ROOM_SIZE / 2 + DOOR_HALF)
      // left segment
      pushWall(walls, Math.min(ax, bx), az, gapStart, bz)
      // right segment
      pushWall(walls, gapEnd, az, Math.max(ax, bx), bz)
    } else {
      const gapStart = Math.min(az, bz) + (ROOM_SIZE / 2 - DOOR_HALF)
      const gapEnd = Math.min(az, bz) + (ROOM_SIZE / 2 + DOOR_HALF)
      pushWall(walls, ax, Math.min(az, bz), bx, gapStart)
      pushWall(walls, ax, gapEnd, bx, Math.max(az, bz))
    }
  } else {
    // solid boundary wall
    pushWall(walls, ax, az, bx, bz)
  }
}

function pushWall(walls: WallBox[], ax: number, az: number, bx: number, bz: number) {
  const minX = Math.min(ax, bx)
  const maxX = Math.max(ax, bx)
  const minZ = Math.min(az, bz)
  const maxZ = Math.max(az, bz)
  walls.push({
    minX: minX - 0.2, maxX: maxX + 0.2,
    minZ: minZ - 0.2, maxZ: maxZ + 0.2,
    cx: (minX + maxX) / 2, cz: (minZ + maxZ) / 2,
    w: Math.max(0.4, maxX - minX), d: Math.max(0.4, maxZ - minZ),
  })
}

function oppositeDir(d: 'N' | 'S' | 'E' | 'W'): 'N' | 'S' | 'E' | 'W' {
  return d === 'N' ? 'S' : d === 'S' ? 'N' : d === 'E' ? 'W' : 'E'
}

// ===== Collision =====
function collide(pos: THREE.Vector3, walls: WallBox[]) {
  for (const w of walls) {
    // expand box by player radius
    const ex0 = w.minX - PLAYER_RADIUS
    const ex1 = w.maxX + PLAYER_RADIUS
    const ez0 = w.minZ - PLAYER_RADIUS
    const ez1 = w.maxZ + PLAYER_RADIUS
    if (pos.x > ex0 && pos.x < ex1 && pos.z > ez0 && pos.z < ez1) {
      // push out along the smallest penetration axis
      const penX = pos.x < (w.minX + w.maxX) / 2 ? pos.x - ex0 : ex1 - pos.x
      const penZ = pos.z < (w.minZ + w.maxZ) / 2 ? pos.z - ez0 : ez1 - pos.z
      if (penX < penZ) {
        pos.x = pos.x < (w.minX + w.maxX) / 2 ? ex0 : ex1
      } else {
        pos.z = pos.z < (w.minZ + w.maxZ) / 2 ? ez0 : ez1
      }
    }
  }
  // facility bounds (6x6 grid)
  pos.x = Math.max(0.5, Math.min(ROOM_SIZE * 6 - 0.5, pos.x))
  pos.z = Math.max(0.5, Math.min(ROOM_SIZE * 6 - 0.5, pos.z))
}

// ===== Player =====
function Player({ walls, onRoomChange }: { walls: WallBox[]; onRoomChange: (id: string) => void }) {
  const { camera } = useThree()
  const keys = useRef<Record<string, boolean>>({})
  const velocity = useRef(new THREE.Vector3())
  const startRoomId = useGame((s) => s.player.roomId)
  const startRoom = getRoom(startRoomId)
  const flashlightOn = useGame((s) => s.player.flashlightOn)
  const spawnPos = useMemo(() => {
    if (!startRoom) return [5, 0, 5] as [number, number, number]
    return roomCenter(startRoom.x, startRoom.y)
  }, [startRoom])

  // init camera
  useEffect(() => {
    camera.position.set(spawnPos[0], PLAYER_EYE, spawnPos[2])
    ready.current = true
  }, [camera, spawnPos])

  useEffect(() => {
    const down = (e: KeyboardEvent) => { keys.current[e.code] = true }
    const up = (e: KeyboardEvent) => { keys.current[e.code] = false }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  const currentRoom = useRef(startRoomId)
  const ready = useRef(false)

  useFrame((_, delta) => {
    if (!ready.current) return
    const dt = Math.min(0.05, delta)
    const speed = keys.current['ShiftLeft'] ? 6.5 : 3.6
    const forward = new THREE.Vector3()
    camera.getWorldDirection(forward)
    forward.y = 0
    forward.normalize()
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize()

    const dir = new THREE.Vector3()
    if (keys.current['KeyW'] || keys.current['ArrowUp']) dir.add(forward)
    if (keys.current['KeyS'] || keys.current['ArrowDown']) dir.sub(forward)
    if (keys.current['KeyD'] || keys.current['ArrowRight']) dir.add(right)
    if (keys.current['KeyA'] || keys.current['ArrowLeft']) dir.sub(right)
    if (dir.lengthSq() > 0) dir.normalize()

    velocity.current.lerp(dir.multiplyScalar(speed), 1 - Math.exp(-10 * dt))
    const next = camera.position.clone()
    next.x += velocity.current.x * dt
    next.z += velocity.current.z * dt
    collide(next, walls)
    camera.position.set(next.x, PLAYER_EYE, next.z)

    // room change detection
    const rid = roomAtWorld(camera.position.x, camera.position.z)
    if (rid && rid !== currentRoom.current) {
      currentRoom.current = rid
      onRoomChange(rid)
    }

    // noise from sprinting
    if (keys.current['ShiftLeft'] && dir.lengthSq() > 0) {
      useGame.getState().makeNoise(1)
    }
  })

  return (
    <>
      <pointLight position={[camera.position.x, camera.position.y, camera.position.z]} intensity={flashlightOn ? 2.2 : 0.4} distance={flashlightOn ? 18 : 6} color={flashlightOn ? '#fff4d6' : '#5a6a78'} castShadow={false} />
      {flashlightOn && (
        <SpotLightFollow position={[camera.position.x, camera.position.y, camera.position.z]} />
      )}
    </>
  )
}

function SpotLightFollow({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.SpotLight>(null)
  const { camera } = useThree()
  useFrame(() => {
    if (!ref.current) return
    ref.current.position.copy(camera.position)
    const target = new THREE.Vector3()
    camera.getWorldDirection(target)
    ref.current.target.position.copy(camera.position).add(target.multiplyScalar(10))
    ref.current.target.updateMatrixWorld()
  })
  return (
    <>
      <spotLight ref={ref} intensity={3} distance={22} angle={0.5} penumbra={0.4} color="#fff4d6" position={position} />
    </>
  )
}

// ===== Rooms (floors + zone lighting + props) =====
const Rooms = memo(function Rooms() {
  return (
    <group>
      {ROOMS.map((room) => {
        const [cx, , cz] = roomCenter(room.x, room.y)
        const zone = ZONE_INFO[room.zone]
        const zoneColor = new THREE.Color(zone.color)
        const isDarkRoom = room.isDark
        return (
          <group key={room.id}>
            {/* floor */}
            <mesh position={[cx, 0, cz]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[ROOM_SIZE, ROOM_SIZE]} />
              <meshStandardMaterial color={room.isExit ? '#1a1610' : '#0e1418'} />
            </mesh>
            {/* floor grid lines for industrial feel */}
            <gridHelper position={[cx, 0.01, cz]} args={[ROOM_SIZE, 4, '#1a2329', '#121820']} />
            {/* ceiling */}
            <mesh position={[cx, WALL_H, cz]} rotation={[Math.PI / 2, 0, 0]}>
              <planeGeometry args={[ROOM_SIZE, ROOM_SIZE]} />
              <meshStandardMaterial color="#070a0c" />
            </mesh>
            {/* ceiling light fixture */}
            <CeilingLight cx={cx} cz={cz} zoneColor={zoneColor} isDark={isDarkRoom} />
            {/* zone accent strip on floor edge */}
            <mesh position={[cx, 0.02, cz - ROOM_SIZE / 2 + 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[ROOM_SIZE - 0.6, 0.3]} />
              <meshStandardMaterial color={zoneColor} emissive={zoneColor} emissiveIntensity={0.4} />
            </mesh>
            {/* room label light */}
            <pointLight position={[cx, 3.4, cz]} intensity={isDarkRoom ? 0.12 : 0.35} distance={9} color={zoneColor} />
            {/* exit glow */}
            {room.isExit && (
              <mesh position={[cx, 2, cz - ROOM_SIZE / 2 + 0.6]}>
                <boxGeometry args={[ROOM_SIZE - 1, 3, 0.2]} />
                <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.8} transparent opacity={0.5} />
              </mesh>
            )}
            {/* special markers */}
            {room.id === 'power-rm' && <Marker cx={cx} cz={cz} color="#f59e0b" />}
            {room.id === 'scp079-core' && <Marker cx={cx} cz={cz} color="#0aff8a" />}
            {room.id === 'backup-gen' && <Marker cx={cx} cz={cz} color="#f59e0b" />}
            {room.id === 'backup-server' && <Marker cx={cx} cz={cz} color="#06b6d4" />}
            {room.id === 'ventilation' && <Marker cx={cx} cz={cz} color="#10b981" />}
            {/* room-specific props */}
            <RoomProps roomId={room.id} cx={cx} cz={cz} />
          </group>
        )
      })}
    </group>
  )
})

// Ceiling light fixture with flickering fluorescent effect
function CeilingLight({ cx, cz, zoneColor, isDark }: { cx: number; cz: number; zoneColor: THREE.Color; isDark: boolean }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => {
    if (!ref.current) return
    const mat = ref.current.material as THREE.MeshStandardMaterial
    // flicker occasionally in dark rooms
    if (isDark) {
      const flicker = Math.random() < 0.04 ? 0.1 : 0.5
      mat.emissiveIntensity = flicker
    } else {
      mat.emissiveIntensity = 0.8
    }
  })
  return (
    <mesh ref={ref} position={[cx, WALL_H - 0.1, cz]}>
      <boxGeometry args={[3, 0.1, 1]} />
      <meshStandardMaterial color={zoneColor} emissive={zoneColor} emissiveIntensity={isDark ? 0.3 : 0.8} />
    </mesh>
  )
}

// Room-specific props (furniture, equipment) — adds visual variety
const PROP_CACHE = new Map<string, React.ReactNode>()
function RoomProps({ roomId, cx, cz }: { roomId: string; cx: number; cz: number }) {
  // Render static props based on room type — memoized for performance
  if (PROP_CACHE.has(roomId)) {
    const cached = PROP_CACHE.get(roomId)!
    return <group position={[0, 0, 0]}>{cached}</group>
  }
  const props = renderRoomProps(roomId, cx, cz)
  PROP_CACHE.set(roomId, props)
  return <group position={[0, 0, 0]}>{props}</group>
}

function renderRoomProps(roomId: string, cx: number, cz: number): React.ReactNode {
  // Server racks (server rooms)
  if (roomId === 'server-rm' || roomId === 'backup-server') {
    return (
      <>
        {[0, 1, 2].map((i) => (
          <group key={i} position={[cx - 2 + i * 2, 1, cz - 2]}>
            <mesh castShadow>
              <boxGeometry args={[1.2, 2.4, 0.8]} />
              <meshStandardMaterial color="#0a0d0f" />
            </mesh>
            {/* blinking LEDs */}
            {[0, 1, 2, 3].map((j) => (
              <mesh key={j} position={[0.3, 0.6 + j * 0.3, 0.42]}>
                <sphereGeometry args={[0.04, 6, 6]} />
                <meshStandardMaterial color={j % 2 ? '#10b981' : '#d4af37'} emissive={j % 2 ? '#10b981' : '#d4af37'} emissiveIntensity={0.8} />
              </mesh>
            ))}
          </group>
        ))}
      </>
    )
  }
  // Beds (cells, medbay, morgue)
  if (roomId === 'cells-d' || roomId === 'medbay' || roomId === 'morgue') {
    return (
      <>
        <mesh position={[cx - 2, 0.4, cz + 2]} castShadow>
          <boxGeometry args={[1.8, 0.5, 2.5]} />
          <meshStandardMaterial color={roomId === 'morgue' ? '#2a3a3a' : '#3a4a5a'} />
        </mesh>
        <mesh position={[cx - 2, 0.7, cz + 2]}>
          <boxGeometry args={[1.6, 0.15, 2.3]} />
          <meshStandardMaterial color="#6b7d8a" />
        </mesh>
      </>
    )
  }
  // Desks (reception, research-lab, checkpoint)
  if (roomId === 'reception' || roomId === 'research-lab' || roomId === 'checkpoint') {
    return (
      <>
        <mesh position={[cx + 2, 0.8, cz - 2]} castShadow>
          <boxGeometry args={[2.5, 0.1, 1.2]} />
          <meshStandardMaterial color="#1a2329" />
        </mesh>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[cx + 1.3 + i * 0.6, 0.4, cz - 2]}>
            <boxGeometry args={[0.1, 0.8, 0.1]} />
            <meshStandardMaterial color="#0a0d0f" />
          </mesh>
        ))}
        {/* monitor */}
        <mesh position={[cx + 2, 1.1, cz - 2.3]} castShadow>
          <boxGeometry args={[0.7, 0.5, 0.05]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.4} />
        </mesh>
      </>
    )
  }
  // Crates (storage, armory)
  if (roomId === 'storage' || roomId === 'armory') {
    return (
      <>
        {[
          [cx - 2, cz - 2], [cx + 2, cz + 1], [cx - 1, cz + 2], [cx + 1, cz - 1],
        ].map(([x, z], i) => (
          <mesh key={i} position={[x, 0.8, z]} castShadow>
            <boxGeometry args={[1.2, 1.6, 1.2]} />
            <meshStandardMaterial color={i % 2 ? '#3a2f1a' : '#2a3a2a'} />
          </mesh>
        ))}
      </>
    )
  }
  // Tables (cafeteria, locker-room)
  if (roomId === 'cafeteria' || roomId === 'locker-room') {
    return (
      <>
        {[0, 1].map((i) => (
          <group key={i} position={[cx + (i ? 2 : -2), 0, cz]}>
            <mesh position={[0, 0.8, 0]} castShadow>
              <boxGeometry args={[2, 0.1, 1]} />
              <meshStandardMaterial color="#3a4a5a" />
            </mesh>
            {[[-0.8, -0.4], [0.8, -0.4], [-0.8, 0.4], [0.8, 0.4]].map(([x, z], j) => (
              <mesh key={j} position={[x, 0.4, z]}>
                <cylinderGeometry args={[0.08, 0.08, 0.8, 6]} />
                <meshStandardMaterial color="#1a2329" />
              </mesh>
            ))}
          </group>
        ))}
      </>
    )
  }
  // Lockers (locker-room, checkpoint)
  if (roomId === 'locker-room') {
    return (
      <>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[cx - 2.5 + i * 0.9, 1.2, cz + 2.5]} castShadow>
            <boxGeometry args={[0.7, 2.4, 0.6]} />
            <meshStandardMaterial color="#2a4a5a" />
          </mesh>
        ))}
      </>
    )
  }
  // Power generator (power-rm, backup-gen)
  if (roomId === 'power-rm' || roomId === 'backup-gen') {
    return (
      <>
        <mesh position={[cx, 1, cz]} castShadow>
          <cylinderGeometry args={[1.5, 1.8, 2, 12]} />
          <meshStandardMaterial color="#1a2a1a" metalness={0.7} roughness={0.4} />
        </mesh>
        <mesh position={[cx, 2.2, cz]}>
          <cylinderGeometry args={[0.3, 0.3, 0.6, 8]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.6} />
        </mesh>
        <pointLight position={[cx, 2.5, cz]} intensity={0.5} distance={6} color="#f59e0b" />
      </>
    )
  }
  // Ventilation ducts (ventilation)
  if (roomId === 'ventilation') {
    return (
      <>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[cx - 2 + i * 2, 3, cz]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 2, 10]} />
            <meshStandardMaterial color="#1a2329" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </>
    )
  }
  // Morgue drawers
  if (roomId === 'morgue') {
    return (
      <>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[cx - 2.5, 0.6 + i * 0.7, cz + 2.5]} castShadow>
            <boxGeometry args={[2, 0.6, 0.5]} />
            <meshStandardMaterial color="#2a3a3a" metalness={0.6} />
          </mesh>
        ))}
      </>
    )
  }
  // Incinerator furnace
  if (roomId === 'incinerator') {
    return (
      <>
        <mesh position={[cx, 1.5, cz]} castShadow>
          <boxGeometry args={[2, 3, 2]} />
          <meshStandardMaterial color="#2a1a1a" />
        </mesh>
        <mesh position={[cx, 1.5, cz + 1.01]}>
          <planeGeometry args={[1.2, 1.5]} />
          <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={0.5} />
        </mesh>
        <pointLight position={[cx, 1.5, cz + 1.5]} intensity={0.6} distance={5} color="#dc2626" />
      </>
    )
  }
  // Elevator shaft (gap in floor)
  if (roomId === 'elevator-shaft') {
    return (
      <>
        <mesh position={[cx, 0.05, cz]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4, 4]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* hanging cable */}
        <mesh position={[cx + 1, 2, cz - 1]}>
          <cylinderGeometry args={[0.05, 0.05, 4, 6]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.8} />
        </mesh>
      </>
    )
  }
  // Decontam spray nozzles
  if (roomId === 'decontam') {
    return (
      <>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[cx + (i % 2 ? 2 : -2), WALL_H - 0.3, cz + (i < 2 ? -2 : 2)]}>
            <cylinderGeometry args={[0.15, 0.15, 0.3, 6]} />
            <meshStandardMaterial color="#2a4a5a" emissive="#06b6d4" emissiveIntensity={0.3} />
          </mesh>
        ))}
      </>
    )
  }
  // SCP containment chamber props
  if (roomId.includes('scp') && roomId !== 'scp860-door') {
    return (
      <>
        {/* observation glass */}
        <mesh position={[cx, 1.5, cz - 2.5]}>
          <boxGeometry args={[5, 2, 0.1]} />
          <meshStandardMaterial color="#1a2a3a" transparent opacity={0.3} metalness={0.9} roughness={0.1} />
        </mesh>
        {/* containment markings on floor */}
        <mesh position={[cx, 0.03, cz]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.5, 2, 24]} />
          <meshStandardMaterial color="#dc2626" emissive="#dc2626" emissiveIntensity={0.3} transparent opacity={0.4} />
        </mesh>
      </>
    )
  }
  // Corridor pipes
  if (roomId.includes('corridor')) {
    return (
      <>
        <mesh position={[cx, WALL_H - 0.3, cz - 2]}>
          <cylinderGeometry args={[0.15, 0.15, ROOM_SIZE - 1, 8]} />
          <meshStandardMaterial color="#2a3640" metalness={0.6} />
        </mesh>
        <mesh position={[cx, WALL_H - 0.3, cz + 2]}>
          <cylinderGeometry args={[0.12, 0.12, ROOM_SIZE - 1, 8]} />
          <meshStandardMaterial color="#3a2a2a" metalness={0.6} />
        </mesh>
      </>
    )
  }
  return null
}

function Marker({ cx, cz, color }: { cx: number; cz: number; color: string }) {
  const c = new THREE.Color(color)
  return (
    <mesh position={[cx, 1.2, cz]}>
      <cylinderGeometry args={[0.4, 0.4, 2.4, 16]} />
      <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.7} />
    </mesh>
  )
}

// ===== Walls =====
const Walls = memo(function Walls({ walls }: { walls: WallBox[] }) {
  return (
    <group>
      {walls.map((w, i) => (
        <mesh key={i} position={[w.cx, WALL_H / 2, w.cz]} castShadow receiveShadow>
          <boxGeometry args={[w.w, WALL_H, w.d]} />
          <meshStandardMaterial color="#1a2329" />
        </mesh>
      ))}
    </group>
  )
})

// ===== SCP entities =====
const SCPEntities = memo(function SCPEntities() {
  const scps = useGame((s) => s.scps)
  return (
    <group>
      {scps.map((inst) => {
        if (inst.scpId === 'npc-guard') return <NPCGuard key={inst.scpId + inst.roomId} inst={inst} />
        const def = getSCP(inst.scpId)
        if (!def) return null
        return <SCPShape key={inst.scpId} inst={inst} def={def} />
      })}
    </group>
  )
})

function SCPShape({ inst, def }: { inst: { scpId: string; roomId: string; state: string }; def: NonNullable<ReturnType<typeof getSCP>> }) {
  const targetRoom = getRoom(inst.roomId)
  const target = useRef(new THREE.Vector3())
  const pos = useRef(new THREE.Vector3())
  const init = useRef(false)
  const meshRef = useRef<THREE.Group>(null)
  const color = new THREE.Color(def.color)

  useEffect(() => {
    if (!init.current && targetRoom) {
      const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y)
      pos.current.set(cx, 0, cz)
      target.current.set(cx, 0, cz)
      init.current = true
    }
  }, [targetRoom])

  useFrame((_, delta) => {
    if (!targetRoom || !meshRef.current) return
    const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y)
    target.current.set(cx, 0, cz)
    const speed = def.speed * 1.8 * (def.threat === 'strong' ? 1.2 : 1)
    pos.current.lerp(target.current, 1 - Math.exp(-speed * delta))
    meshRef.current.position.copy(pos.current)
    // face movement
    const lookAt = new THREE.Vector3(target.current.x, 0, target.current.z)
    meshRef.current.lookAt(lookAt)
  })

  // shape varies by SCP
  const shape = (() => {
    switch (def.ai) {
      case 'statue': // 173 — tall lumpy statue
        return (
          <group>
            <mesh position={[0, 1.0, 0]} castShadow>
              <cylinderGeometry args={[0.4, 0.6, 2, 8]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            <mesh position={[0, 2.2, 0]}>
              <sphereGeometry args={[0.35, 8, 8]} />
              <meshStandardMaterial color="#8b0000" emissive="#8b0000" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )
      case 'ai': // 079 — floating CRT
        return (
          <mesh position={[0, 1.4, 0]} castShadow>
            <boxGeometry args={[0.9, 0.7, 0.7]} />
            <meshStandardMaterial color="#0a0a0a" emissive={color} emissiveIntensity={0.9} />
          </mesh>
        )
      case 'reptile': // 682 — big low creature
        return (
          <mesh position={[0, 0.7, 0]} castShadow>
            <boxGeometry args={[1.6, 1.4, 2.4]} />
            <meshStandardMaterial color={color} roughness={0.7} />
          </mesh>
        )
      case 'guardian': // 001 / 860 — radiant
        return (
          <group>
            <mesh position={[0, 1.2, 0]} castShadow>
              <coneGeometry args={[0.5, 2.4, 6]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
            </mesh>
            <pointLight position={[0, 2, 0]} intensity={1.5} distance={8} color={color} />
          </group>
        )
      default: // humanoid-ish
        return (
          <group>
            <mesh position={[0, 0.9, 0]} castShadow>
              <capsuleGeometry args={[0.35, 1.0, 4, 8]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            <mesh position={[0, 1.8, 0]}>
              <sphereGeometry args={[0.3, 8, 8]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {def.threat !== 'weak' && (
              <pointLight position={[0, 1.5, 0]} intensity={0.6} distance={6} color={color} />
            )}
          </group>
        )
    }
  })()

  return <group ref={meshRef}>{shape}</group>
}

function NPCGuard({ inst }: { inst: { scpId: string; roomId: string } }) {
  const targetRoom = getRoom(inst.roomId)
  const meshRef = useRef<THREE.Group>(null)
  const pos = useRef(new THREE.Vector3())
  const target = useRef(new THREE.Vector3())
  const init = useRef(false)
  useEffect(() => {
    if (!init.current && targetRoom) {
      const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y)
      pos.current.set(cx, 0, cz)
      target.current.set(cx, 0, cz)
      init.current = true
    }
  }, [targetRoom])
  useFrame((_, delta) => {
    if (!targetRoom || !meshRef.current) return
    const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y)
    target.current.set(cx, 0, cz)
    pos.current.lerp(target.current, 1 - Math.exp(-2.5 * delta))
    meshRef.current.position.copy(pos.current)
  })
  return (
    <group ref={meshRef}>
      <mesh position={[0, 0.9, 0]} castShadow>
        <capsuleGeometry args={[0.35, 1.0, 4, 8]} />
        <meshStandardMaterial color="#1a2a3a" />
      </mesh>
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial color="#2a3a4a" />
      </mesh>
      <pointLight position={[0, 1.5, 0]} intensity={0.5} distance={5} color="#3a5a7a" />
    </group>
  )
}

// ===== Items in rooms =====
const Items = memo(function Items() {
  const loot = useGame((s) => s.loot)
  if (!loot) return null
  return (
    <group>
      {ROOMS.flatMap((room) => {
        const items = loot[room.id] || []
        const [cx, , cz] = roomCenter(room.x, room.y)
        return items.map((it, i) => {
          const offset = (i - (items.length - 1) / 2) * 1.2
          const color = itemColor(it)
          return <ItemOrb key={room.id + it.id + i} position={[cx + offset, 0.4, cz]} color={color} itemId={it.id} />
        })
      })}
    </group>
  )
})

function itemColor(it: Item): string {
  if (it.type === 'keycard') return '#d4af37'
  if (it.type === 'weapon') return '#dc2626'
  if (it.type === 'medical') return '#10b981'
  if (it.type === 'tool') return '#06b6d4'
  if (it.type === 'document') return '#a78bfa'
  return '#9fb0bc'
}

function ItemOrb({ position, color, itemId }: { position: [number, number, number]; color: string; itemId: string }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((s) => {
    if (!ref.current) return
    ref.current.rotation.y = s.clock.elapsedTime * 1.2
    ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime * 2) * 0.1
  })
  const c = new THREE.Color(color)
  void itemId
  return (
    <group ref={ref} position={position}>
      <mesh>
        <octahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.6} />
      </mesh>
      <pointLight intensity={0.4} distance={3} color={c} />
    </group>
  )
}

// ===== Main scene =====
function Scene({ onRoomChange, onLockChange, onLockError }: {
  onRoomChange: (id: string) => void
  onLockChange: (v: boolean) => void
  onLockError: () => void
}) {
  const { walls } = useMemo(() => buildWalls(), [])
  return (
    <>
      <ambientLight intensity={0.18} color="#3a4a5a" />
      <hemisphereLight args={['#1a2a3a', '#050708', 0.3]} />
      <fog attach="fog" args={['#05080a', 8, 28]} />
      <Rooms />
      <Walls walls={walls} />
      <Items />
      <SCPEntities />
      <Player walls={walls} onRoomChange={onRoomChange} />
      <CustomPointerLock onLockChange={onLockChange} onLockError={onLockError} />
    </>
  )
}

// ===== Custom Pointer Lock (robust against cooldown) =====
// Replaces drei's PointerLockControls to handle the browser security cooldown
// (~1s) imposed after the user exits pointer lock via ESC. During cooldown,
// requests fail silently; we surface a friendly retry message instead of errors.
function CustomPointerLock({ onLockChange, onLockError }: {
  onLockChange: (v: boolean) => void
  onLockError: () => void
}) {
  const { gl, camera } = useThree()
  const euler = useRef(new THREE.Euler(0, 0, 0, 'YXZ'))
  const isLocked = useRef(false)

  useEffect(() => {
    const canvas = gl.domElement

    const onLockChangeEvt = () => {
      const locked = document.pointerLockElement === canvas
      isLocked.current = locked
      onLockChange(locked)
    }

    const onLockError = () => {
      // Browser rejected the lock request (usually due to cooldown after ESC).
      onLockError()
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isLocked.current) return
      const movementX = e.movementX || 0
      const movementY = e.movementY || 0
      euler.current.setFromQuaternion(camera.quaternion)
      euler.current.y -= movementX * 0.0022
      euler.current.x -= movementY * 0.0022
      // clamp pitch to avoid flipping
      euler.current.x = Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, euler.current.x))
      camera.quaternion.setFromEuler(euler.current)
    }

    document.addEventListener('pointerlockchange', onLockChangeEvt)
    document.addEventListener('pointerlockerror', onLockError)
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('pointerlockchange', onLockChangeEvt)
      document.removeEventListener('pointerlockerror', onLockError)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [gl, camera, onLockChange, onLockError])

  // Expose a request-lock function via a ref-like mechanism using a custom event.
  // The overlay button calls this to acquire pointer lock on user gesture.
  useEffect(() => {
    const onRequestLock = () => {
      const canvas = gl.domElement
      if (!isLocked.current) {
        const p = canvas.requestPointerLock()
        // Some browsers return a promise; catch cooldown rejections gracefully.
        if (p && typeof (p as unknown as Promise<void>).catch === 'function') {
          ;(p as unknown as Promise<void>).catch(() => onLockError())
        }
      }
    }
    ;(window as unknown as { __scpRequestPointerLock?: () => void }).__scpRequestPointerLock = onRequestLock
    return () => {
      delete (window as unknown as { __scpRequestPointerLock?: () => void }).__scpRequestPointerLock
    }
  }, [gl, onLockError])

  return null
}

// ===== HUD overlay =====
function HUD3D({ onPickupNearby, onInteract, onAttack, onFlashlight, locked, lockError, onRequestLock, onDismissError, prompt }: {
  onPickupNearby: () => void
  onInteract: () => void
  onAttack: () => void
  onFlashlight: () => void
  locked: boolean
  lockError: boolean
  onRequestLock: () => void
  onDismissError: () => void
  prompt: string | null
}) {
  const role = useGame((s) => s.role)
  const isSCP = role === 'scp'
  const [cooldown, setCooldown] = useState(0)

  // Countdown timer for the cooldown retry — only runs while a lock error is active.
  // The interval sets the value asynchronously (no synchronous setState in the effect body).
  useEffect(() => {
    if (!lockError) return
    const start = Date.now()
    const id = setInterval(() => {
      const remaining = Math.max(0, 1 - (Date.now() - start) / 1000)
      setCooldown(remaining)
      if (remaining <= 0) clearInterval(id)
    }, 100)
    return () => clearInterval(id)
  }, [lockError])

  return (
    <>
      {!isSCP && locked && <div className="scp-crosshair" />}
      {/* top-left status */}
      <div className="absolute top-3 left-3 w-64 z-30 space-y-2">
        <PlayerStatus compact />
        <ThreatIndicator />
      </div>
      {/* top-right inventory */}
      <div className="absolute top-3 right-3 w-56 z-30">
        <InventoryPanel3D />
      </div>
      {/* bottom log */}
      <div className="absolute bottom-14 left-3 right-3 sm:right-auto sm:w-96 z-30 h-40">
        <GameLogCompact />
      </div>
      {/* bottom action bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {!isSCP && (
          <>
            <HudBtn onClick={onFlashlight} icon={<Flashlight className="w-4 h-4" />} label="F" />
            <HudBtn onClick={onInteract} icon={<Power className="w-4 h-4" />} label="E" disabled={!prompt} />
            <HudBtn onClick={onPickupNearby} icon={<Package className="w-4 h-4" />} label="G" />
            <HudBtn onClick={onAttack} icon={<Crosshair className="w-4 h-4" />} label="CLICK" danger />
          </>
        )}
      </div>
      {/* interaction prompt */}
      {prompt && locked && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 scp-panel px-4 py-2 rounded scp-pulse-danger">
          <div className="text-xs text-[#d4af37] flex items-center gap-2">
            <DoorOpen className="w-4 h-4" /> {prompt} <Keycap>E</Keycap>
          </div>
        </div>
      )}
      {/* lock prompt — clickable button (user gesture required for pointer lock) */}
      {!locked && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/80">
          <div className="text-center scp-panel p-8 rounded-lg max-w-sm">
            {lockError ? (
              (() => {
                // Display cooldown: if interval hasn't fired yet, show full 1.0s
                const displayCd = cooldown > 0 ? cooldown : 1
                return (
                  <>
                    <Timer className="w-8 h-8 text-[#f59e0b] mx-auto mb-3 scp-blip" />
                    <div className="text-[#f59e0b] font-bold mb-2 text-sm uppercase tracking-widest">Pointer Lock Cooldown</div>
                    <div className="text-[#9fb0bc] text-xs leading-relaxed mb-4">
                      The browser is enforcing a brief security cooldown after you exited mouse-look.
                      Please wait, then click below to re-enter.
                    </div>
                    <div className="text-[#d4af37] text-3xl font-black mb-4 scp-blip">{displayCd.toFixed(1)}s</div>
                    <button
                      onClick={() => { onDismissError(); onRequestLock() }}
                      disabled={displayCd > 0.1}
                      className={`px-6 py-3 font-bold uppercase tracking-widest text-xs rounded transition-all flex items-center gap-2 mx-auto ${
                        displayCd > 0.1
                          ? 'scp-panel-2 text-[#6b7d8a] cursor-not-allowed'
                          : 'bg-[#d4af37] text-[#0a0d0f] hover:bg-[#e8c460]'
                      }`}
                    >
                      <MousePointerClick className="w-4 h-4" /> {displayCd > 0.1 ? 'Waiting…' : 'Re-enter Mouse-Look'}
                    </button>
                  </>
                )
              })()
            ) : (
              <>
                <Eye className="w-8 h-8 text-[#d4af37] mx-auto mb-3 scp-blip" />
                <div className="text-[#e8eef2] font-bold mb-2 text-lg">CLICK TO LOOK AROUND</div>
                <div className="text-[#6b7d8a] text-xs mb-5">WASD move · Mouse look · Shift sprint · ESC to release</div>
                <button
                  onClick={onRequestLock}
                  className="px-6 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-xs rounded hover:bg-[#e8c460] transition-all flex items-center gap-2 mx-auto scp-pulse-danger"
                >
                  <MousePointerClick className="w-4 h-4" /> Enter Mouse-Look
                </button>
                <div className="text-[#3a4a55] text-[10px] mt-4">You can still move with WASD and use the HUD buttons below without mouse-look.</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

function Keycap({ children }: { children: React.ReactNode }) {
  return <kbd className="ml-1 px-1.5 py-0.5 bg-[#0a0d0f] border border-[#2a3640] rounded text-[#d4af37] text-[10px] font-mono">{children}</kbd>
}

function HudBtn({ onClick, icon, label, disabled, danger }: { onClick: () => void; icon: React.ReactNode; label: string; disabled?: boolean; danger?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-12 h-12 scp-panel rounded flex flex-col items-center justify-center gap-0.5 transition-all hover:scale-105 ${
        disabled ? 'opacity-30 cursor-not-allowed' : danger ? 'hover:border-[#dc2626] text-[#dc2626]' : 'hover:border-[#d4af37] text-[#d4af37]'
      } text-[#9fb0bc]`}
    >
      {icon}
      <span className="text-[8px] uppercase tracking-wider">{label}</span>
    </button>
  )
}

function InventoryPanel3D() {
  const useItem = useGame((s) => s.useItem)
  return <InventoryPanel onUse={useItem} />
}

function GameLogCompact() {
  const log = useGame((s) => s.log)
  const last = log.slice(-6)
  return (
    <div className="scp-panel rounded h-full flex flex-col">
      <div className="px-3 py-1.5 border-b border-[#2a3640] flex items-center gap-2">
        <span className="scp-blip text-[#10b981] text-[8px]">●</span>
        <span className="text-[9px] uppercase tracking-widest text-[#6b7d8a]">Log</span>
      </div>
      <div className="flex-1 overflow-y-auto scp-scroll p-2 space-y-0.5 text-[10px] leading-snug">
        {last.map((e) => {
          const c = e.type === 'danger' ? '#dc2626' : e.type === 'success' ? '#10b981' : e.type === 'combat' ? '#f59e0b' : e.type === 'system' ? '#d4af37' : e.type === 'lore' ? '#a78bfa' : '#9fb0bc'
          return <div key={e.id} style={{ color: c }}>{e.text}</div>
        })}
      </div>
    </div>
  )
}

// ===== Main wrapper =====
export function ThreeGame() {
  const phase = useGame((s) => s.phase)
  const roomId = useGame((s) => s.player.roomId)
  const setPlayerRoom = useGame((s) => s.setPlayerRoom)
  const interact = useGame((s) => s.interact)
  const toggleFlashlight = useGame((s) => s.toggleFlashlight)
  const pickupAll = useGame((s) => s.pickupAll)
  const attack = useGame((s) => s.attack)
  const resetToMenu = useGame((s) => s.resetToMenu)
  const scps = useGame((s) => s.scps)
  const tick = useGame((s) => s.tick)
  const role = useGame((s) => s.role)
  const isSCP = role === 'scp'

  const [locked, setLocked] = useState(false)
  const [lockError, setLockError] = useState(false)

  // Request pointer lock via the CustomPointerLock's exposed function.
  // Must be called from a user gesture (button click).
  const requestLock = useCallback(() => {
    const fn = (window as unknown as { __scpRequestPointerLock?: () => void }).__scpRequestPointerLock
    if (fn) fn()
  }, [])

  const dismissError = useCallback(() => setLockError(false), [])
  const handleLockChange = useCallback((v: boolean) => setLocked(v), [])
  const handleLockError = useCallback(() => setLockError(true), [])

  // periodic AI tick for real-time SCP movement
  useEffect(() => {
    if (phase !== 'playing') return
    const id = setInterval(() => tick(), 1400)
    return () => clearInterval(id)
  }, [phase, tick])

  // attack on click while locked (only fires when pointer is locked → real gameplay click)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!locked || isSCP) return
      // ignore clicks on HUD buttons / overlays
      const target = e.target as HTMLElement
      if (target.closest('button') || target.closest('.scp-panel')) return
      const here = scps.filter((s) => s.roomId === roomId && s.state !== 'contained' && s.scpId !== 'npc-guard')
      if (here.length > 0) attack(here[0].scpId)
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [locked, scps, roomId, attack, isSCP])

  // hotkeys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase !== 'playing') return
      if (e.code === 'KeyF') toggleFlashlight()
      if (e.code === 'KeyE') interact()
      if (e.code === 'KeyG') pickupAll()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, toggleFlashlight, interact, pickupAll])

  const room = getRoom(roomId)
  const lootHere = useGame((s) => s.loot[roomId])
  const lootCount = (lootHere || EMPTY_LOOT).length
  const canInteract = !!(room && (room.isExit || room.id === 'power-rm' || room.id === 'scp079-core' || room.id === 'scp860-door' || room.id === 'backup-gen' || room.id === 'backup-server' || room.id === 'ventilation'))
  const prompt = lootCount > 0
    ? `${lootCount} item(s) here — pickup`
    : canInteract
    ? room?.isExit ? 'Open gate' : 'Interact'
    : null

  return (
    <div className="scp-root relative w-full h-screen overflow-hidden scp-scanlines">
      <Canvas
        shadows
        camera={{ fov: 75, near: 0.1, far: 60, position: [5, PLAYER_EYE, 5] }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#05080a')
        }}
      >
        <Suspense fallback={null}>
          <Scene
            onRoomChange={(id) => setPlayerRoom(id)}
            onLockChange={handleLockChange}
            onLockError={handleLockError}
          />
        </Suspense>
      </Canvas>

      <HUD3D
        onPickupNearby={pickupAll}
        onInteract={interact}
        onAttack={() => {
          const here = scps.filter((s) => s.roomId === roomId && s.state !== 'contained' && s.scpId !== 'npc-guard')
          if (here[0]) attack(here[0].scpId)
        }}
        onFlashlight={toggleFlashlight}
        locked={locked}
        lockError={lockError}
        onRequestLock={requestLock}
        onDismissError={dismissError}
        prompt={prompt}
      />

      {/* top bar */}
      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="scp-danger-stripes h-1" />
        <div className="px-4 py-2 flex items-center justify-between text-xs bg-[#0a0d0f]/70 backdrop-blur pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="scp-blip text-[#dc2626]" aria-hidden="true">●</span>
            <span className="text-[#d4af37] font-bold uppercase tracking-widest">{room?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="pointer-events-auto"><AudioToggleButton /></div>
            <button
              onClick={() => {
                import('@/game/save').then(({ saveGame }) => {
                  if (saveGame()) useGame.getState().addLog('success', `Game saved (turn ${useGame.getState().turn}).`)
                })
              }}
              className="pointer-events-auto text-[#6b7d8a] hover:text-[#d4af37] uppercase tracking-widest text-[10px] flex items-center gap-1"
              aria-label="Save game"
            >
              <Save className="w-3 h-3" /> Save
            </button>
            <button onClick={resetToMenu} className="pointer-events-auto text-[#6b7d8a] hover:text-[#dc2626] uppercase tracking-widest text-[10px]">Abandon</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// guard unused
void Hand
void AlertTriangle
void doorBetween
void doorsFrom
void getItem

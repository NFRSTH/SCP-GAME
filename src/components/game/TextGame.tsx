'use client'

import { useGame, getRoom, doorsFrom, getSCP, getItem } from '@/game/store'
import { ZONE_INFO, DOORS } from '@/game/data/facility'
import { PlayerStatus, InventoryPanel, GameLog, ThreatIndicator } from './GameHUD'
import { AudioToggleButton } from './ErrorBoundary'
import {
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Flashlight, Eye, Hand,
  Package, Crosshair, Power, DoorOpen, LogOut, AlertTriangle, Eye as EyeIcon, Save,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { Direction, Item } from '@/game/types'

const EMPTY: Item[] = []

export function TextGame() {
  const phase = useGame((s) => s.phase)
  const roomId = useGame((s) => s.player.roomId)
  const role = useGame((s) => s.role)
  const scpId = useGame((s) => s.scpId)
  const log = useGame((s) => s.log)
  const move = useGame((s) => s.move)
  const moveSCP = useGame((s) => s.moveSCP)
  const useItem = useGame((s) => s.useItem)
  const interact = useGame((s) => s.interact)
  const toggleFlashlight = useGame((s) => s.toggleFlashlight)
  const toggleWatch173 = useGame((s) => s.toggleWatch173)
  const attack = useGame((s) => s.attack)
  const pickupAll = useGame((s) => s.pickupAll)
  const resetToMenu = useGame((s) => s.resetToMenu)
  const lootHere = useGame((s) => s.loot[roomId])

  const room = getRoom(roomId)
  const doors = room ? doorsFrom(room.id) : []
  const allScps = useGame((s) => s.scps)
  const scpsHere = allScps.filter((sc) => sc.roomId === roomId && sc.state !== 'contained' && sc.scpId !== 'npc-guard')

  const isSCP = role === 'scp'
  const scpDef = isSCP && scpId ? getSCP(scpId) : null

  // keyboard
  const keyRef = useRef(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (keyRef.current) return
      if (phase !== 'playing') return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
      const dirMap: Record<string, Direction> = {
        w: 'N', ArrowUp: 'N', k: 'N',
        s: 'S', ArrowDown: 'S', j: 'S',
        a: 'W', ArrowLeft: 'W', h: 'W',
        d: 'E', ArrowRight: 'E', l: 'E',
      }
      const dir = dirMap[e.key]
      if (dir) {
        e.preventDefault()
        keyRef.current = true
        setTimeout(() => (keyRef.current = false), 120)
        if (isSCP) moveSCP(dir)
        else move(dir)
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFlashlight()
      } else if (e.key === 'e' || e.key === 'E') {
        interact()
      } else if (e.key === 'g' || e.key === 'G') {
        pickupAll()
      } else if (e.key === ' ') {
        e.preventDefault()
        // attack nearest scp in room
        const target = scpsHere[0]
        if (target) attack(target.scpId)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, isSCP, move, moveSCP, toggleFlashlight, interact, pickupAll, attack, scpsHere])

  if (!room) return null

  const zoneInfo = ZONE_INFO[room.zone]

  return (
    <div className="scp-root relative min-h-screen flex flex-col scp-scanlines overflow-hidden">
      <TopBar />
      <main className="relative z-10 flex-1 p-3 sm:p-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-3 h-full">
          {/* LEFT: Room view + actions */}
          <div className="space-y-3 min-h-0">
            <RoomView room={room} zoneInfo={zoneInfo} lootHere={lootHere || EMPTY} scpsHere={scpsHere} />
            <ActionPanel
              room={room}
              doors={doors}
              onMove={(d) => (isSCP ? moveSCP(d) : move(d))}
              isSCP={isSCP}
              onInteract={interact}
              onFlashlight={toggleFlashlight}
              onWatch173={toggleWatch173}
              onAttack={(id) => attack(id)}
              onPickupAll={pickupAll}
              scpsHere={scpsHere}
            />
          </div>

          {/* RIGHT: Stats, threat, inventory, log */}
          <div className="space-y-3 min-h-0 flex flex-col">
            <PlayerStatus />
            <ThreatIndicator />
            <InventoryPanel onUse={useItem} />
            <div className="flex-1 min-h-[200px]">
              <GameLog log={log} />
            </div>
          </div>
        </div>
      </main>
      <BottomBar onMenu={resetToMenu} isSCP={isSCP} scpName={scpDef?.number} />
    </div>
  )
}

function TopBar() {
  const role = useGame((s) => s.role)
  const scpId = useGame((s) => s.scpId)
  const roomId = useGame((s) => s.player.roomId)
  const turn = useGame((s) => s.turn)
  const room = getRoom(roomId)
  const scp = scpId ? getSCP(scpId) : null
  const roleLabel = role === 'scp' ? scp?.number : role === 'class-d' ? 'CLASS-D' : role === 'scientist' ? 'SCIENTIST' : role === 'guard' ? 'GUARD' : '—'
  return (
    <header className="relative z-10 border-b border-[#2a3640] bg-[#0a0d0f]/90 backdrop-blur">
      <div className="scp-danger-stripes h-1" />
      <div className="px-4 py-2 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-3">
          <span className="scp-blip text-[#dc2626]">●</span>
          <span className="text-[#d4af37] font-bold uppercase tracking-widest">{roleLabel}</span>
          <span className="text-[#6b7d8a] hidden sm:inline">|</span>
          <span className="text-[#9fb0bc] hidden sm:inline truncate max-w-[200px]">{room?.name}</span>
        </div>
        <div className="flex items-center gap-3 text-[#6b7d8a]">
          <span>TURN {turn}</span>
        </div>
      </div>
    </header>
  )
}

function BottomBar({ onMenu, isSCP, scpName }: { onMenu: () => void; isSCP: boolean; scpName?: string }) {
  const addLog = useGame((s) => s.addLog)
  const turn = useGame((s) => s.turn)

  const handleSave = () => {
    import('@/game/save').then(({ saveGame }) => {
      if (saveGame()) addLog('success', `Game saved (turn ${turn}).`)
      else addLog('danger', 'Failed to save game.')
    })
  }

  return (
    <footer className="relative z-10 mt-auto border-t border-[#2a3640] bg-[#0a0d0f]/90 backdrop-blur">
      <div className="px-4 py-2 flex items-center justify-between gap-2 text-[10px] text-[#6b7d8a]">
        <div className="flex items-center gap-2 flex-wrap">
          <Key>WASD</Key><span>Move</span>
          {!isSCP && <><Key>F</Key><span>Flashlight</span><Key>E</Key><span>Interact</span><Key>G</Key><span>Pickup</span><Key>SPACE</Key><span>Attack</span></>}
          {isSCP && scpName && <span className="text-[#dc2626]">You are {scpName}. Reach a gate to escape.</span>}
        </div>
        <div className="flex items-center gap-3">
          <AudioToggleButton />
          <button onClick={handleSave} className="text-[#6b7d8a] hover:text-[#d4af37] uppercase tracking-widest flex items-center gap-1" aria-label="Save game">
            <Save className="w-3 h-3" /> Save
          </button>
          <button onClick={onMenu} className="text-[#6b7d8a] hover:text-[#dc2626] uppercase tracking-widest">Abandon Run</button>
        </div>
      </div>
    </footer>
  )
}

function Key({ children }: { children: React.ReactNode }) {
  return <kbd className="px-1.5 py-0.5 bg-[#11161a] border border-[#2a3640] rounded text-[#9fb0bc] text-[9px] font-mono">{children}</kbd>
}

function RoomView({
  room,
  zoneInfo,
  lootHere,
  scpsHere,
}: {
  room: NonNullable<ReturnType<typeof getRoom>>
  zoneInfo: { name: string; color: string; description: string }
  lootHere: Item[]
  scpsHere: ReturnType<typeof useGame.getState>['scps']
}) {
  const flashlightOn = useGame((s) => s.player.flashlightOn)
  const isDark = room.isDark && !flashlightOn
  const scpDefs = scpsHere.map((s) => getSCP(s.scpId)).filter(Boolean)
  return (
    <motion.div
      key={room.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="scp-panel rounded-lg overflow-hidden"
    >
      <div className="px-4 py-2 border-b border-[#2a3640] flex items-center justify-between" style={{ borderLeft: `4px solid ${zoneInfo.color}` }}>
        <div>
          <div className="text-[10px] uppercase tracking-widest" style={{ color: zoneInfo.color }}>{zoneInfo.name}</div>
          <div className="text-lg font-bold text-[#e8eef2]">{room.name}</div>
        </div>
        <div className="text-[10px] text-[#6b7d8a] font-mono">[{room.x},{room.y}]</div>
      </div>
      <div className={`p-4 ${isDark ? 'bg-[#050708]' : ''} relative`}>
        {isDark && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-[#3a4a55] text-xs uppercase tracking-widest mb-1">Darkness</div>
              <div className="text-[#6b7d8a] text-sm">You cannot see. Turn on your flashlight (F).</div>
            </div>
          </div>
        )}
        <p className="text-[#c8d4dc] text-sm leading-relaxed mb-3">{room.description}</p>
        <div className="text-[#6b7d8a] text-xs italic mb-3 flex items-center gap-1">
          <AlertTriangle className="w-3 h-3" /> {room.ambient}
        </div>

        {scpDefs.length > 0 && (
          <div className="scp-panel-2 rounded p-3 border-l-2 border-[#dc2626] mb-3 scp-pulse-danger">
            <div className="text-[#dc2626] text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1">
              <EyeIcon className="w-3 h-3 scp-blip" /> Entity Present
            </div>
            {scpDefs.map((s) => s && (
              <div key={s.id} className="mb-2 last:mb-0">
                <div className="font-bold" style={{ color: s.color }}>{s.number} — {s.name}</div>
                <div className="text-xs text-[#9fb0bc]">{s.ability}</div>
                {s.ai === 'statue' && <div className="text-[10px] text-[#f59e0b] mt-1">⚠ Keep watching it. Do not move or look away.</div>}
              </div>
            ))}
          </div>
        )}

        {lootHere.length > 0 && (
          <div className="scp-panel-2 rounded p-3 border-l-2 border-[#10b981]">
            <div className="text-[#10b981] text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1">
              <Package className="w-3 h-3" /> Items Here
            </div>
            <div className="flex flex-wrap gap-2">
              {lootHere.map((it) => (
                <div key={it.id} className="text-xs text-[#c8d4dc] scp-panel-2 px-2 py-1 rounded">
                  {it.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function ActionPanel({
  room,
  doors,
  onMove,
  isSCP,
  onInteract,
  onFlashlight,
  onWatch173,
  onAttack,
  onPickupAll,
  scpsHere,
}: {
  room: NonNullable<ReturnType<typeof getRoom>>
  doors: ReturnType<typeof doorsFrom>
  onMove: (d: Direction) => void
  isSCP: boolean
  onInteract: () => void
  onFlashlight: () => void
  onWatch173: () => void
  onAttack: (id: string) => void
  onPickupAll: () => void
  scpsHere: ReturnType<typeof useGame.getState>['scps']
}) {
  const flashlightOn = useGame((s) => s.player.flashlightOn)
  const watching173 = useGame((s) => s.player.watchingSCP173)
  const hasWeapon = useGame((s) => s.player.weaponEquipped !== null)
  const lootCount = useGame((s) => (s.loot[room.id] || []).length)

  const dirIcon: Record<Direction, React.ReactNode> = {
    N: <ArrowUp className="w-4 h-4" />,
    S: <ArrowDown className="w-4 h-4" />,
    E: <ArrowRight className="w-4 h-4" />,
    W: <ArrowLeft className="w-4 h-4" />,
  }
  const dirLabel: Record<Direction, string> = { N: 'North', S: 'South', E: 'East', W: 'West' }

  const has173 = scpsHere.some((s) => s.scpId === 'scp-173')
  const canInteract =
    room.isExit ||
    room.id === 'power-rm' ||
    room.id === 'scp079-core' ||
    room.id === 'scp860-door' ||
    room.id === 'backup-gen' ||
    room.id === 'backup-server' ||
    room.id === 'ventilation'

  return (
    <div className="scp-panel rounded-lg p-3 space-y-3">
      <div className="text-[10px] uppercase tracking-widest text-[#6b7d8a]">Actions</div>

      {/* Movement compass */}
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-1 w-32">
          <div />
          <MoveBtn dir="N" doors={doors} onMove={onMove} icon={dirIcon.N} />
          <div />
          <MoveBtn dir="W" doors={doors} onMove={onMove} icon={dirIcon.W} />
          <div className="flex items-center justify-center text-[#3a4a55]">
            <DoorOpen className="w-4 h-4" />
          </div>
          <MoveBtn dir="E" doors={doors} onMove={onMove} icon={dirIcon.E} />
          <div />
          <MoveBtn dir="S" doors={doors} onMove={onMove} icon={dirIcon.S} />
          <div />
        </div>
        <div className="flex-1 space-y-1.5 text-xs">
          {doors.length === 0 && <div className="text-[#6b7d8a] italic">No exits visible.</div>}
          {doors.map((d) => {
            const target = getRoom(d.to)
            const locked = d.keycardRequired > 0
            return (
              <div key={d.id} className="flex items-center gap-2 text-[#9fb0bc]">
                <span className="text-[#d4af37]">{dirLabel[d.direction]}</span>
                <span className="text-[#6b7d8a]">→</span>
                <span className="truncate">{target?.shortName}</span>
                {locked && (
                  <span className="text-[9px] text-[#f59e0b] uppercase tracking-wider">L{d.keycardRequired}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {!isSCP && (
          <ActionBtn onClick={onFlashlight} active={flashlightOn} icon={<Flashlight className="w-4 h-4" />} label="Flashlight" sub={flashlightOn ? 'ON' : 'OFF'} />
        )}
        {!isSCP && has173 && (
          <ActionBtn onClick={onWatch173} active={watching173} icon={<Eye className="w-4 h-4" />} label="Watch 173" sub={watching173 ? 'WATCHING' : 'WATCH'} danger />
        )}
        {!isSCP && canInteract && (
          <ActionBtn onClick={onInteract} icon={<Power className="w-4 h-4" />} label="Interact" sub={room.isExit ? 'Gate' : 'Use'} accent />
        )}
        {!isSCP && lootCount > 0 && (
          <ActionBtn onClick={onPickupAll} icon={<Package className="w-4 h-4" />} label="Pickup All" sub={`${lootCount} item${lootCount > 1 ? 's' : ''}`} success />
        )}
        {!isSCP && hasWeapon && scpsHere.length > 0 && scpsHere.map((s) => {
          const def = getSCP(s.scpId)
          return (
            <ActionBtn key={s.scpId} onClick={() => onAttack(s.scpId)} icon={<Crosshair className="w-4 h-4" />} label={`Attack`} sub={def?.number || ''} danger />
          )
        })}
      </div>
    </div>
  )
}

function MoveBtn({
  dir,
  doors,
  onMove,
  icon,
}: {
  dir: Direction
  doors: ReturnType<typeof doorsFrom>
  onMove: (d: Direction) => void
  icon: React.ReactNode
}) {
  const door = doors.find((d) => d.direction === dir)
  const hasKeycard = useGame((s) => (door ? s.hasKeycard(door.keycardRequired) : true))
  const locked = useGame((s) => (door ? s.facility.lockedDoors.includes(door.id) : false))
  if (!door) return <div className="aspect-square scp-panel-2 rounded opacity-30" />
  const blocked = (door.keycardRequired > 0 && !hasKeycard) || locked
  return (
    <button
      onClick={() => onMove(dir)}
      className={`aspect-square rounded flex items-center justify-center transition-all border ${
        blocked
          ? 'border-[#3a1a1a] bg-[#1a0d0d] text-[#6b3a3a] hover:bg-[#2a1010]'
          : 'border-[#2a3640] bg-[#11161a] text-[#d4af37] hover:border-[#d4af37] hover:bg-[#1a1610] hover:scale-105'
      }`}
      title={blocked ? (locked ? 'Locked by SCP-079' : `Needs L${door.keycardRequired} keycard`) : `Move ${dir}`}
    >
      {icon}
    </button>
  )
}

function ActionBtn({
  onClick,
  icon,
  label,
  sub,
  active,
  danger,
  accent,
  success,
}: {
  onClick: () => void
  icon: React.ReactNode
  label: string
  sub?: string
  active?: boolean
  danger?: boolean
  accent?: boolean
  success?: boolean
}) {
  const color = danger ? '#dc2626' : accent ? '#d4af37' : success ? '#10b981' : active ? '#10b981' : '#9fb0bc'
  const border = active ? 'border-[#10b981]' : danger ? 'border-[#3a1a1a]' : 'border-[#2a3640]'
  const bg = active ? 'bg-[#0d1a13]' : 'bg-[#11161a]'
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded border ${border} ${bg} hover:scale-[1.02] transition-all text-left`}
      style={{ color }}
    >
      {icon}
      <div className="min-w-0">
        <div className="text-xs font-semibold leading-tight">{label}</div>
        {sub && <div className="text-[9px] uppercase tracking-wider opacity-70">{sub}</div>}
      </div>
    </button>
  )
}

// Unused imports guard
void Hand
void LogOut
void AnimatePresence

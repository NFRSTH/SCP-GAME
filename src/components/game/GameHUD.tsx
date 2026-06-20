'use client'

import { useGame, getSCP, getItem } from '@/game/store'
import { Heart, Zap, Brain, Flashlight, Backpack, KeyRound, Crosshair, Eye, Hand } from 'lucide-react'
import type { LogEntry } from '@/game/types'

export function StatBar({
  label,
  value,
  max,
  color,
  icon,
}: {
  label: string
  value: number
  max: number
  color: string
  icon: React.ReactNode
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider mb-1">
        <span className="flex items-center gap-1 text-[#6b7d8a]">
          {icon}
          {label}
        </span>
        <span className="text-[#9fb0bc] font-semibold">{Math.round(value)}/{max}</span>
      </div>
      <div className="h-2 bg-[#0a0d0f] rounded-sm overflow-hidden border border-[#2a3640]">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  )
}

export function GameLog({ log, compact = false }: { log: LogEntry[]; compact?: boolean }) {
  const colorFor = (t: LogEntry['type']) =>
    t === 'danger' ? '#dc2626'
    : t === 'success' ? '#10b981'
    : t === 'combat' ? '#f59e0b'
    : t === 'system' ? '#d4af37'
    : t === 'lore' ? '#a78bfa'
    : t === 'move' ? '#9fb0bc'
    : '#9fb0bc'
  return (
    <div
      className={`scp-panel rounded-lg flex flex-col ${compact ? 'max-h-64' : 'h-full'}`}
      role="log"
      aria-label="Facility event log"
      aria-live="polite"
      aria-atomic="false"
    >
      <div className="px-3 py-2 border-b border-[#2a3640] flex items-center gap-2">
        <span className="scp-blip text-[#10b981]" aria-hidden="true">●</span>
        <span className="text-[10px] uppercase tracking-widest text-[#6b7d8a]">Facility Log</span>
      </div>
      <div className="flex-1 overflow-y-auto scp-scroll p-3 space-y-1 text-xs leading-relaxed">
        {log.length === 0 && <div className="text-[#6b7d8a] italic">Awaiting events...</div>}
        {log.map((e) => (
          <div key={e.id} style={{ color: colorFor(e.type) }} className={e.type === 'system' ? 'font-semibold' : ''}>
            <span className="text-[#3a4a55] mr-2">[{e.turn}]</span>
            {e.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export function InventoryPanel({ onUse }: { onUse?: (id: string) => void }) {
  const inventory = useGame((s) => s.player.inventory)
  const weaponEquipped = useGame((s) => s.player.weaponEquipped)
  const highestKeycard = useGame((s) => s.highestKeycard())
  return (
    <div className="scp-panel rounded-lg">
      <div className="px-3 py-2 border-b border-[#2a3640] flex items-center justify-between">
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#6b7d8a]">
          <Backpack className="w-3 h-3" /> Inventory
        </span>
        <span className="flex items-center gap-1 text-[10px] text-[#d4af37]">
          <KeyRound className="w-3 h-3" /> L{highestKeycard}
        </span>
      </div>
      <div className="p-2 grid grid-cols-4 gap-1.5 max-h-40 overflow-y-auto scp-scroll">
        {inventory.length === 0 && (
          <div className="col-span-4 text-center text-[#6b7d8a] text-xs italic py-4">Empty pockets.</div>
        )}
        {inventory.map((slot) => {
          const it = slot.item
          const equipped = weaponEquipped === it.id
          const color =
            it.type === 'keycard' ? '#d4af37'
            : it.type === 'weapon' ? '#dc2626'
            : it.type === 'medical' ? '#10b981'
            : it.type === 'tool' ? '#06b6d4'
            : it.type === 'document' ? '#a78bfa'
            : '#9fb0bc'
          return (
            <button
              key={it.id}
              onClick={() => onUse?.(it.id)}
              title={`${it.name} — ${it.description}${it.ammo !== undefined ? ` (${it.ammo} rounds)` : ''}`}
              className={`relative aspect-square rounded border flex flex-col items-center justify-center p-1 transition-all hover:scale-105 ${
                equipped ? 'border-[#dc2626] bg-[#1a0d0d]' : 'border-[#2a3640] bg-[#11161a] hover:border-[#3a4a55]'
              }`}
              style={{ color }}
            >
              <ItemIcon type={it.type} id={it.id} />
              {slot.qty > 1 && (
                <span className="absolute top-0.5 right-1 text-[9px] font-bold text-[#e8eef2] bg-[#0a0d0f] rounded-full px-1">
                  {slot.qty}
                </span>
              )}
              {equipped && (
                <span className="absolute top-0.5 left-1 text-[#dc2626]">
                  <Crosshair className="w-2.5 h-2.5" />
                </span>
              )}
              {it.ammo !== undefined && (
                <span className="absolute bottom-0.5 text-[8px] text-[#9fb0bc]">{it.ammo}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ItemIcon({ type, id }: { type: string; id: string }) {
  const cls = 'w-4 h-4'
  if (type === 'keycard') return <KeyRound className={cls} />
  if (type === 'weapon') return <Crosshair className={cls} />
  if (type === 'medical') return <Heart className={cls} />
  if (id === 'flashlight') return <Flashlight className={cls} />
  if (id === 'battery') return <Zap className={cls} />
  if (id === 'radio') return <span className="text-[10px]">📡</span>
  if (id === 'crowbar') return <Hand className={cls} />
  if (type === 'document') return <span className="text-[10px]">📄</span>
  if (id === 'keyO5') return <span className="text-[10px]">🗝️</span>
  return <span className="text-[10px]">◇</span>
}

export function PlayerStatus({ compact = false }: { compact?: boolean }) {
  const p = useGame((s) => s.player)
  const facility = useGame((s) => s.facility)
  return (
    <div className={`scp-panel rounded-lg ${compact ? 'p-2' : 'p-3'} space-y-2`}>
      <StatBar label="Health" value={p.health} max={p.maxHealth} color="#dc2626" icon={<Heart className="w-3 h-3" />} />
      <StatBar label="Stamina" value={p.stamina} max={p.maxStamina} color="#10b981" icon={<Zap className="w-3 h-3" />} />
      {!compact && <StatBar label="Sanity" value={p.sanity} max={100} color="#a78bfa" icon={<Brain className="w-3 h-3" />} />}
      {!compact && p.flashlightOn && (
        <StatBar label="Flashlight" value={p.flashlightBattery} max={100} color="#f59e0b" icon={<Flashlight className="w-3 h-3" />} />
      )}
      {!compact && (
        <div className="flex items-center gap-2 text-[10px] text-[#6b7d8a] pt-1">
          <span className={`w-2 h-2 rounded-full ${facility.powerOn ? 'bg-[#10b981]' : 'bg-[#dc2626] scp-blip'}`} />
          <span>Power {facility.powerOn ? 'ON' : 'OFF'}</span>
          <span className="ml-auto">Breach {Math.round(facility.breachLevel)}%</span>
        </div>
      )}
    </div>
  )
}

export function ThreatIndicator() {
  const scps = useGame((s) => s.scps)
  const roomId = useGame((s) => s.player.roomId)
  const here = scps.filter((s) => s.roomId === roomId && s.state !== 'contained')
  const nearby = scps.filter((s) => {
    if (s.state === 'contained') return false
    const def = getSCP(s.scpId)
    if (!def) return false
    return Math.abs(getRoomX(s.roomId) - getRoomX(roomId)) + Math.abs(getRoomY(s.roomId) - getRoomY(roomId)) === 1
  })
  if (here.length === 0 && nearby.length === 0) return null
  return (
    <div className="scp-panel rounded-lg p-2 scp-pulse-danger">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#dc2626] mb-1">
        <Eye className="w-3 h-3 scp-blip" /> Threat Detected
      </div>
      {here.length > 0 && (
        <div className="text-xs text-[#dc2626] font-bold">
          IN ROOM: {here.map((s) => getSCP(s.scpId)?.number).join(', ')}
        </div>
      )}
      {nearby.length > 0 && (
        <div className="text-xs text-[#f59e0b]">
          NEARBY: {nearby.map((s) => getSCP(s.scpId)?.number).join(', ')}
        </div>
      )}
    </div>
  )
}

import { ROOM_MAP } from '@/game/data/facility'
function getRoomX(id: string) { return ROOM_MAP[id]?.x ?? 0 }
function getRoomY(id: string) { return ROOM_MAP[id]?.y ?? 0 }

'use client'

import { useGame, getSCP, getRole } from '@/game/store'
import { motion } from 'framer-motion'
import { Skull, Trophy, RotateCcw, Home, Lock, Unlock } from 'lucide-react'

export function GameOverScreen() {
  const phase = useGame((s) => s.phase)
  const deathCause = useGame((s) => s.deathCause)
  const victoryType = useGame((s) => s.victoryType)
  const role = useGame((s) => s.role)
  const scpId = useGame((s) => s.scpId)
  const turn = useGame((s) => s.turn)
  const unlock = useGame((s) => s.unlock)
  const resetToMenu = useGame((s) => s.resetToMenu)
  const startGame = useGame((s) => s.startGame)

  const isVictory = phase === 'victory'
  const roleDef = role ? getRole(role) : null
  const scp = scpId ? getSCP(scpId) : null

  return (
    <div className="scp-root relative min-h-screen flex flex-col scp-scanlines overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{
        background: isVictory
          ? 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.15), transparent 60%)'
          : 'radial-gradient(ellipse at 50% 30%, rgba(220,38,38,0.18), transparent 60%)',
      }} />
      <main className="relative z-10 flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl text-center"
        >
          <div className={isVictory ? 'scp-warning-stripes h-2 rounded-t-lg' : 'scp-danger-stripes h-2 rounded-t-lg'} />
          <div className="scp-panel rounded-lg p-8 sm:p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className={`inline-flex p-4 rounded-full mb-4 ${isVictory ? 'bg-[#1a1610] text-[#d4af37]' : 'bg-[#1a0d0d] text-[#dc2626]'}`}
            >
              {isVictory ? <Trophy className="w-10 h-10" /> : <Skull className="w-10 h-10 scp-blip" />}
            </motion.div>

            <div className={`text-xs uppercase tracking-[0.4em] mb-2 ${isVictory ? 'text-[#d4af37]' : 'text-[#dc2626]'}`}>
              {isVictory ? 'Run Complete' : 'Containment Failed'}
            </div>
            <h1 className={`text-4xl sm:text-5xl font-black tracking-tight mb-4 ${isVictory ? 'text-[#e8eef2]' : 'text-[#e8eef2]'}`}>
              {isVictory ? 'YOU SURVIVED' : 'YOU DIED'}
            </h1>

            <p className="text-[#9fb0bc] text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
              {isVictory ? (victoryType === 'escape' ? 'You escaped the facility alive.' : victoryType === 'evacuation' ? 'You restored the facility and evacuated.' : victoryType === 'containment' ? 'You contained the breach.' : victoryType === 'survival' ? 'You survived until extraction.' : 'You completed your objective.') : deathCause}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <Stat label="Role" value={role === 'scp' ? scp?.number ?? 'SCP' : roleDef?.name.split(' ')[0] ?? '—'} />
              <Stat label="Turns" value={`${turn}`} />
              <Stat label="Runs Won" value={`${unlock.runsCompleted}`} />
            </div>

            {isVictory && role !== 'scp' && !unlock.scpUnlocked && (
              <div className="scp-panel-2 rounded p-4 mb-6 border-l-2 border-[#d4af37] text-left">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs uppercase tracking-wider mb-1">
                  <Unlock className="w-4 h-4" /> New Content Unlocked
                </div>
                <p className="text-sm text-[#9fb0bc]">The SCP role is now playable. Take control of an anomaly on your next run.</p>
              </div>
            )}
            {isVictory && role !== 'scp' && unlock.scpUnlocked && (
              <div className="text-[#10b981] text-xs uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
                <Unlock className="w-4 h-4" /> SCP role remains unlocked
              </div>
            )}
            {isVictory && role === 'scp' && (
              <div className="scp-panel-2 rounded p-4 mb-6 border-l-2 border-[#dc2626] text-left">
                <div className="text-[#dc2626] text-xs uppercase tracking-wider mb-1">⚠ Keter-Class Breach</div>
                <p className="text-sm text-[#9fb0bc]">{scp?.number} has escaped containment and reached the surface. The Foundation will not forget this.</p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={resetToMenu}
                className="flex-1 px-5 py-3 scp-panel rounded text-[#9fb0bc] text-sm uppercase tracking-wider hover:text-[#e8eef2] transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" /> Main Menu
              </button>
              <button
                onClick={startGame}
                className="flex-1 px-5 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Run Again
              </button>
            </div>
          </div>
          <div className={isVictory ? 'scp-warning-stripes h-2 rounded-b-lg' : 'scp-danger-stripes h-2 rounded-b-lg'} />
        </motion.div>
      </main>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="scp-panel-2 rounded p-3">
      <div className="text-lg font-bold text-[#d4af37] truncate">{value}</div>
      <div className="text-[#6b7d8a] uppercase tracking-wider text-[10px]">{label}</div>
    </div>
  )
}

export { Lock }

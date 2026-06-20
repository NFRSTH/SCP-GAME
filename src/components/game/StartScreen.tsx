'use client'

import { useGame, ROLES, DIFFICULTIES, SCPS, getSCP, getRole } from '@/game/store'
import { ZONE_INFO } from '@/game/data/facility'
import { hasSave, resumeGame, deleteSave } from '@/game/save'
import type { GameMode, Role, Difficulty } from '@/game/types'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Skull, FlaskConical, Shield, Ghost, Terminal, Box, ChevronRight, AlertTriangle, CheckCircle2, Radio, Save, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export function StartScreen() {
  const phase = useGame((s) => s.phase)
  return (
    <div className="scp-root relative min-h-screen flex flex-col scp-scanlines overflow-hidden">
      <AmbientBackground />
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6">
        <AnimatePresence mode="wait">
          {phase === 'menu' && <Menu key="menu" />}
          {phase === 'mode-select' && <ModeSelect key="mode" />}
          {phase === 'role-select' && <RoleSelect key="role" />}
          {phase === 'scp-select' && <SCPSelect key="scp" />}
          {phase === 'difficulty-select' && <DifficultySelect key="diff" />}
          {phase === 'briefing' && <Briefing key="brief" />}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

function AmbientBackground() {
  return (
    <>
      <div className="absolute inset-0 opacity-40" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(220,38,38,0.06), transparent 60%)',
      }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#c8d4dc 1px, transparent 1px), linear-gradient(90deg, #c8d4dc 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
    </>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-[#2a3640] bg-[#0a0d0f]/90 backdrop-blur">
      <div className="scp-warning-stripes h-1.5" />
      <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#6b7d8a]">
        <div className="flex items-center gap-3">
          <span className="scp-blip text-[#dc2626]">●</span>
          <span className="uppercase tracking-widest">SITE-19 // CONTAINMENT PROTOCOL ACTIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <span>SECURE · CONTAIN · PROTECT</span>
          <span className="text-[#d4af37]">SCP-SURVIVAL.SIM</span>
        </div>
      </div>
    </footer>
  )
}

function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`scp-panel rounded-lg ${className}`}>{children}</div>
}

// ===== MENU =====
function Menu() {
  const setPhase = useGame((s) => s.setPhase)
  const unlock = useGame((s) => s.unlock)
  const [saveExists, setSaveExists] = useState(false)

  useEffect(() => {
    // Check for save on mount — use a flag to avoid setting state after unmount
    let active = true
    const check = () => { if (active) setSaveExists(hasSave()) }
    check()
    return () => { active = false }
  }, [])

  const handleResume = () => {
    if (resumeGame()) {
      // Store will transition to 'playing' phase
    }
  }

  const handleDeleteSave = () => {
    deleteSave()
    setSaveExists(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="w-full max-w-3xl text-center"
    >
      <div className="scp-danger-stripes h-2 rounded-t-lg" />
      <Panel className="p-8 sm:p-12">
        <div className="text-[#dc2626] text-xs uppercase tracking-[0.4em] mb-3 scp-blip">⚠ Containment Breach Detected ⚠</div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-2 text-[#e8eef2] scp-glow-text" style={{ color: '#d4af37' }}>
          SITE-19
        </h1>
        <div className="text-[#6b7d8a] text-sm tracking-[0.3em] uppercase mb-8">Survive the Breach</div>

        <p className="text-[#9fb0bc] max-w-xl mx-auto mb-8 leading-relaxed text-sm sm:text-base">
          A containment breach has torn through the underground SCP research facility. Anomalous entities roam the corridors.
          Choose your role, your difficulty, and your mode of play. Escape, contain, or become the anomaly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
          <button
            onClick={() => setPhase('mode-select')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all hover:scale-[1.02] scp-pulse-danger"
            aria-label="Initialize a new run"
          >
            Initialize Run
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          {saveExists && (
            <button
              onClick={handleResume}
              className="inline-flex items-center gap-2 px-6 py-4 scp-panel text-[#10b981] font-bold uppercase tracking-widest text-sm rounded hover:border-[#10b981] transition-all hover:scale-[1.02]"
              aria-label="Resume saved game"
            >
              <Save className="w-4 h-4" /> Resume Saved Run
            </button>
          )}
        </div>

        {saveExists && (
          <button
            onClick={handleDeleteSave}
            className="text-[#6b7d8a] hover:text-[#dc2626] text-[10px] uppercase tracking-widest flex items-center gap-1 mx-auto mt-2"
            aria-label="Delete saved game"
          >
            <Trash2 className="w-3 h-3" /> Delete Save
          </button>
        )}

        <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
          <Stat label="Roles" value="4" />
          <Stat label="SCPs" value="10" />
          <Stat label="Difficulties" value="4" />
        </div>
        {unlock.scpUnlocked && (
          <div className="mt-4 text-[#10b981] text-xs uppercase tracking-widest flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> SCP role unlocked — {unlock.runsCompleted} run(s) completed
          </div>
        )}
      </Panel>
      <div className="scp-danger-stripes h-2 rounded-b-lg" />
    </motion.div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="scp-panel-2 rounded p-3">
      <div className="text-2xl font-black text-[#d4af37]">{value}</div>
      <div className="text-[#6b7d8a] uppercase tracking-wider text-[10px]">{label}</div>
    </div>
  )
}

// ===== MODE SELECT =====
function ModeSelect() {
  const selectMode = useGame((s) => s.selectMode)
  const setPhase = useGame((s) => s.setPhase)
  const modes: { id: GameMode; title: string; icon: React.ReactNode; desc: string; tag: string }[] = [
    {
      id: 'text',
      title: 'Text-Based',
      icon: <Terminal className="w-8 h-8" />,
      desc: 'A classic terminal-style survival horror. Navigate room-to-room, read environmental descriptions, manage inventory and make life-or-death choices. Fast, atmospheric, imagination-driven.',
      tag: 'Recommended for quick sessions',
    },
    {
      id: '3d',
      title: '3D First-Person',
      icon: <Box className="w-8 h-8" />,
      desc: 'Walk the facility in real time. WASD movement, mouse look, real-time SCP encounters. See the breach unfold around you in three dimensions.',
      tag: 'Immersive real-time mode',
    },
  ]
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-4xl">
      <Header step={1} title="Select Game Mode" sub="How will you experience the breach?" />
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => selectMode(m.id)}
            className="group scp-panel rounded-lg p-6 text-left hover:border-[#d4af37] transition-all hover:scale-[1.01] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 scp-warning-stripes w-16 h-1.5" />
            <div className="text-[#d4af37] mb-3 group-hover:scale-110 transition-transform">{m.icon}</div>
            <div className="text-xl font-bold text-[#e8eef2] mb-1">{m.title}</div>
            <div className="text-[#6b7d8a] text-[11px] uppercase tracking-wider mb-3">{m.tag}</div>
            <p className="text-[#9fb0bc] text-sm leading-relaxed">{m.desc}</p>
            <div className="mt-4 text-[#d4af37] text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
              Select <ChevronRight className="w-3 h-3" />
            </div>
          </button>
        ))}
      </div>
      <BackBtn onClick={() => setPhase('menu')} />
    </motion.div>
  )
}

// ===== ROLE SELECT =====
function RoleSelect() {
  const selectRole = useGame((s) => s.selectRole)
  const setPhase = useGame((s) => s.setPhase)
  const unlock = useGame((s) => s.unlock)
  const roleIcons: Record<Role, React.ReactNode> = {
    'class-d': <Skull className="w-6 h-6" />,
    'scientist': <FlaskConical className="w-6 h-6" />,
    'guard': <Shield className="w-6 h-6" />,
    'scp': <Ghost className="w-6 h-6" />,
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-5xl">
      <Header step={2} title="Select Your Role" sub="Each role plays completely differently." />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {ROLES.map((r) => {
          const locked = r.locked && !unlock.scpUnlocked
          return (
            <button
              key={r.id}
              disabled={locked}
              onClick={() => selectRole(r.id)}
              className={`group scp-panel rounded-lg p-5 text-left transition-all relative overflow-hidden ${
                locked ? 'opacity-60 cursor-not-allowed' : 'hover:border-[#d4af37] hover:scale-[1.01]'
              }`}
            >
              <div className="absolute top-0 right-0 scp-warning-stripes w-16 h-1.5" />
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded ${r.id === 'scp' ? 'bg-[#1a0d0d] text-[#dc2626]' : 'bg-[#1a1f24] text-[#d4af37]'}`}>
                  {roleIcons[r.id]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#e8eef2]">{r.name}</h3>
                    {locked && <Lock className="w-3.5 h-3.5 text-[#6b7d8a]" />}
                  </div>
                  {r.id === 'scp' && (
                    <div className="text-[10px] uppercase tracking-wider mt-0.5 font-bold" style={{ color: ZONE_INFO.deep.color }}>
                      {unlock.scpUnlocked ? 'Unlocked — choose from 10 SCPs' : 'Locked'}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-[#9fb0bc] text-xs leading-relaxed mb-3">{r.description}</p>
              <div className="border-t border-[#2a3640] pt-3 space-y-1.5">
                <Row label="Goal" value={r.goal} accent="#d4af37" />
                <Row label="Style" value={r.gameplay} />
              </div>
              {locked && (
                <div className="mt-3 text-[10px] text-[#6b7d8a] italic flex items-center gap-1">
                  <Lock className="w-3 h-3" /> {r.lockReason}
                </div>
              )}
            </button>
          )
        })}
      </div>
      <BackBtn onClick={() => setPhase('mode-select')} />
    </motion.div>
  )
}

function Row({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex gap-2 text-xs">
      <span className="text-[#6b7d8a] uppercase tracking-wider w-12 shrink-0">{label}</span>
      <span style={{ color: accent || '#9fb0bc' }} className="leading-relaxed">{value}</span>
    </div>
  )
}

// ===== SCP SELECT =====
function SCPSelect() {
  const selectSCP = useGame((s) => s.selectSCP)
  const setPhase = useGame((s) => s.setPhase)
  const [filter, setFilter] = useState<'all' | 'weak' | 'medium' | 'strong'>('all')
  const list = SCPS.filter((s) => filter === 'all' || s.threat === filter)
  const threatColor = { weak: '#10b981', medium: '#f59e0b', strong: '#dc2626' }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-6xl">
      <Header step={2} title="Select Your SCP" sub="You are the anomaly. Hunt, trap, or escape." />
      <div className="flex gap-2 mt-4 flex-wrap">
        {(['all', 'weak', 'medium', 'strong'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded border transition-all ${
              filter === f ? 'border-[#d4af37] text-[#d4af37] bg-[#1a1610]' : 'border-[#2a3640] text-[#6b7d8a] hover:text-[#9fb0bc]'
            }`}
          >
            {f === 'all' ? 'All' : f}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 max-h-[60vh] overflow-y-auto scp-scroll pr-1">
        {list.map((scp) => (
          <button
            key={scp.id}
            onClick={() => selectSCP(scp.id)}
            className="group scp-panel rounded-lg p-4 text-left hover:border-[#d4af37] transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[#e8eef2]">{scp.number}</span>
              <span
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold"
                style={{ color: threatColor[scp.threat], background: `${threatColor[scp.threat]}22` }}
              >
                {scp.threat}
              </span>
            </div>
            <div className="text-sm font-semibold mb-1" style={{ color: scp.color }}>{scp.name}</div>
            <p className="text-[#9fb0bc] text-xs leading-relaxed line-clamp-2 mb-2">{scp.description}</p>
            <div className="flex items-center gap-2 text-[10px] text-[#6b7d8a]">
              <span>DIFF {scp.difficulty}/10</span>
              <span>·</span>
              <span className="capitalize">{scp.ai} AI</span>
            </div>
          </button>
        ))}
      </div>
      <BackBtn onClick={() => setPhase('role-select')} />
    </motion.div>
  )
}

// ===== DIFFICULTY SELECT =====
function DifficultySelect() {
  const selectDifficulty = useGame((s) => s.selectDifficulty)
  const setPhase = useGame((s) => s.setPhase)
  const role = useGame((s) => s.role)
  const diffColor: Record<string, string> = { easy: '#10b981', balanced: '#d4af37', hard: '#f59e0b', hardcore: '#dc2626' }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-5xl">
      <Header step={3} title="Select Difficulty" sub={role === 'scp' ? 'How resilient are your hunters?' : 'How forgiving is the breach?'} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {DIFFICULTIES.map((d) => (
          <button
            key={d.id}
            onClick={() => selectDifficulty(d.id)}
            className="group scp-panel rounded-lg p-4 text-left hover:border-[#d4af37] transition-all hover:scale-[1.02] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-1.5" style={{ background: diffColor[d.id] }} />
            <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: diffColor[d.id] }}>
              {d.id === 'balanced' ? 'Default' : d.id}
            </div>
            <h3 className="font-bold text-[#e8eef2] mb-2 text-sm">{d.name}</h3>
            <p className="text-[#9fb0bc] text-xs leading-relaxed mb-3 min-h-[60px]">{d.description}</p>
            <div className="space-y-1 text-[11px]">
              <MiniRow label="Health" value={`${d.startHealth}`} />
              <MiniRow label="Resources" value={`${Math.round(d.resourceMultiplier * 100)}%`} />
              <MiniRow label="SCP Speed" value={`${Math.round(d.scpSpeedMultiplier * 100)}%`} />
              <MiniRow label="Grace Turns" value={d.lethalWarningTurns > 0 ? `${d.lethalWarningTurns}` : 'None'} />
              <MiniRow label="Warnings" value={d.showProximityWarnings ? 'On' : 'Off'} />
              <MiniRow label="Roaming Cap" value={`${d.maxConcurrentRoamingSCPs}`} />
            </div>
          </button>
        ))}
      </div>
      <BackBtn onClick={() => (role === 'scp' ? setPhase('scp-select') : setPhase('role-select'))} />
    </motion.div>
  )
}

function MiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[#6b7d8a]">
      <span>{label}</span>
      <span className="text-[#9fb0bc] font-semibold">{value}</span>
    </div>
  )
}

// ===== BRIEFING =====
function Briefing() {
  const role = useGame((s) => s.role)
  const scpId = useGame((s) => s.scpId)
  const difficulty = useGame((s) => s.difficulty)
  const startGame = useGame((s) => s.startGame)
  const setPhase = useGame((s) => s.setPhase)
  const roleDef = role ? getRole(role) : null
  const scp = scpId ? getSCP(scpId) : null
  const diff = DIFFICULTIES.find((d) => d.id === difficulty)!
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-3xl">
      <Header step={4} title="Mission Briefing" sub="Read carefully. Then descend." />
      <Panel className="p-6 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <Radio className="w-5 h-5 text-[#d4af37] scp-blip" />
          <span className="text-xs uppercase tracking-widest text-[#6b7d8a]">Intercepted Transmission — SITE-19 OPS</span>
        </div>
        {role === 'scp' && scp ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" style={{ color: scp.color }}>{scp.number} — {scp.name}</h2>
            <p className="text-[#9fb0bc] text-sm leading-relaxed">{scp.description}</p>
            <div className="scp-panel-2 rounded p-4">
              <div className="text-[#d4af37] text-xs uppercase tracking-wider mb-1">Your Ability</div>
              <p className="text-sm">{scp.ability}</p>
            </div>
            <div className="scp-panel-2 rounded p-4">
              <div className="text-[#dc2626] text-xs uppercase tracking-wider mb-1">Your Weakness</div>
              <p className="text-sm">{scp.weakness}</p>
            </div>
            <div className="scp-panel-2 rounded p-4 border-l-2 border-[#d4af37]">
              <div className="text-[#d4af37] text-xs uppercase tracking-wider mb-1">Win Condition</div>
              <p className="text-sm">{scp.winCondition}</p>
            </div>
          </div>
        ) : roleDef ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#e8eef2]">{roleDef.name}</h2>
            <p className="text-[#9fb0bc] text-sm leading-relaxed">{roleDef.description}</p>
            <div className="scp-panel-2 rounded p-4 border-l-2 border-[#d4af37]">
              <div className="text-[#d4af37] text-xs uppercase tracking-wider mb-1">Objective</div>
              <p className="text-sm">{roleDef.goal}</p>
            </div>
            <div className="scp-panel-2 rounded p-4">
              <div className="text-[#9fb0bc] text-xs uppercase tracking-wider mb-1">Gameplay</div>
              <p className="text-sm">{roleDef.gameplay}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <MiniRow label="Starting Health" value={`${roleDef.startHealth}`} />
              <MiniRow label="Starting Keycard" value={`L${roleDef.startKeycard}`} />
              <MiniRow label="Armed" value={roleDef.hasWeapon ? 'Yes' : 'No'} />
              <MiniRow label="Difficulty" value={diff.name} />
            </div>
          </div>
        ) : null}

        <div className="mt-6 scp-panel-2 rounded p-4 border-l-2 border-[#dc2626]">
          <div className="flex items-center gap-2 text-[#dc2626] text-xs uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4" /> Breach Status
          </div>
          <p className="text-sm text-[#9fb0bc]">
            Containment failure is total. SCPs roam the facility. Power is unstable. SCP-079 may seize control of doors at any moment.
            Find keycards, tools, and a way to the surface gates. Gate A and Gate B both require Level 5 clearance.
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setPhase('difficulty-select')}
            className="px-5 py-3 scp-panel rounded text-[#9fb0bc] text-sm uppercase tracking-wider hover:text-[#e8eef2] transition-colors"
          >
            Back
          </button>
          <button
            onClick={startGame}
            className="flex-1 px-6 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
          >
            <Skull className="w-4 h-4" /> Descend into SITE-19
          </button>
        </div>
      </Panel>
    </motion.div>
  )
}

// ===== Shared =====
function Header({ step, title, sub }: { step: number; title: string; sub: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-1">
        <span className="text-[#d4af37] text-xs font-bold">STEP {step}/4</span>
        <div className="h-px flex-1 bg-[#2a3640]" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-[#e8eef2] tracking-tight">{title}</h2>
      <p className="text-[#6b7d8a] text-sm mt-1">{sub}</p>
    </div>
  )
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-5 text-[#6b7d8a] text-xs uppercase tracking-widest hover:text-[#d4af37] transition-colors flex items-center gap-1"
    >
      ← Back
    </button>
  )
}

export { type Difficulty }

'use client'

import { useGame } from '@/game/store'
import { StartScreen } from '@/components/game/StartScreen'
import { TextGame } from '@/components/game/TextGame'
import { ThreeGame } from '@/components/game/ThreeGame'
import { GameOverScreen } from '@/components/game/GameOverScreen'
import { ErrorBoundary } from '@/components/game/ErrorBoundary'
import dynamic from 'next/dynamic'

// 3D mode needs to be client-only (Three.js / WebGL)
const ThreeGameLazy = dynamic(() => Promise.resolve(ThreeGame), {
  ssr: false,
  loading: () => (
    <div className="scp-root min-h-screen flex items-center justify-center scp-scanlines">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-[#2a3640] border-t-[#d4af37] rounded-full animate-spin mb-3" />
        <div className="text-[#d4af37] text-xs uppercase tracking-[0.3em]">Loading 3D Engine...</div>
      </div>
    </div>
  ),
})

export default function Home() {
  const phase = useGame((s) => s.phase)
  const mode = useGame((s) => s.mode)

  return (
    <ErrorBoundary>
      {phase === 'playing' ? (
        mode === '3d' ? <ThreeGameLazy /> : <TextGame />
      ) : phase === 'game-over' || phase === 'victory' ? (
        <GameOverScreen />
      ) : (
        <StartScreen />
      )}
    </ErrorBoundary>
  )
}

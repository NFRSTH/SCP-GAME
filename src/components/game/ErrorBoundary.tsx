'use client'

import React, { Component, useState, useEffect, useRef, useCallback } from 'react'
import { AlertTriangle, RotateCcw, Volume2, VolumeX } from 'lucide-react'

// ===== Error Boundary =====
interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Game Error Boundary caught:', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
    // Clear game state to avoid re-triggering the error
    try {
      localStorage.removeItem('scp-game-save')
    } catch {
      // ignore
    }
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="scp-root min-h-screen flex items-center justify-center p-4 scp-scanlines">
          <div className="scp-panel rounded-lg p-8 max-w-md text-center">
            <div className="scp-danger-stripes h-2 rounded-t-lg absolute top-0 left-0 right-0" />
            <AlertTriangle className="w-12 h-12 text-[#dc2626] mx-auto mb-4 scp-blip" />
            <h1 className="text-2xl font-bold text-[#e8eef2] mb-2">SYSTEM ERROR</h1>
            <p className="text-[#9fb0bc] text-sm mb-4">
              A critical error occurred in the facility control system. The breach protocols have been reset.
            </p>
            {this.state.error && (
              <details className="text-left mb-4 scp-panel-2 rounded p-3">
                <summary className="text-[#6b7d8a] text-xs cursor-pointer">Error details</summary>
                <pre className="text-[10px] text-[#dc2626] mt-2 overflow-auto whitespace-pre-wrap">
                  {this.state.error.message}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Restart System
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

// ===== Loading Screen =====
export function LoadingScreen() {
  return (
    <div className="scp-root min-h-screen flex items-center justify-center scp-scanlines">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-[#2a3640] border-t-[#d4af37] rounded-full animate-spin mb-4" />
        <div className="text-[#d4af37] text-sm uppercase tracking-[0.3em] scp-blip">Loading Facility...</div>
        <div className="text-[#6b7d8a] text-xs mt-2">Initializing containment systems</div>
      </div>
    </div>
  )
}

// ===== Audio System =====
// Simple Web Audio API wrapper for ambience, footsteps, and SCP proximity beeps.
class AudioEngine {
  private ctx: AudioContext | null = null
  private ambienceGain: GainNode | null = null
  private ambienceOsc: OscillatorNode | null = null
  private alarmOsc: OscillatorNode | null = null
  private alarmGain: GainNode | null = null
  private enabled = false

  init() {
    if (this.ctx) return
    try {
      this.ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      this.ambienceGain = this.ctx.createGain()
      this.ambienceGain.gain.value = 0.03
      this.ambienceGain.connect(this.ctx.destination)
    } catch {
      // Audio not supported
    }
  }

  setEnabled(on: boolean) {
    this.enabled = on
    if (on) {
      this.init()
      this.startAmbience()
    } else {
      this.stopAmbience()
    }
  }

  isEnabled() {
    return this.enabled
  }

  private startAmbience() {
    if (!this.ctx || !this.ambienceGain || this.ambienceOsc) return
    // Low hum
    this.ambienceOsc = this.ctx.createOscillator()
    this.ambienceOsc.type = 'sine'
    this.ambienceOsc.frequency.value = 55
    this.ambienceOsc.connect(this.ambienceGain)
    this.ambienceOsc.start()

    // Distant alarm pulse
    this.alarmGain = this.ctx.createGain()
    this.alarmGain.gain.value = 0
    this.alarmGain.connect(this.ctx.destination)
    this.alarmOsc = this.ctx.createOscillator()
    this.alarmOsc.type = 'sawtooth'
    this.alarmOsc.frequency.value = 440
    this.alarmOsc.connect(this.alarmGain)
    this.alarmOsc.start()

    // Pulse the alarm every 3s
    const pulse = () => {
      if (!this.ctx || !this.alarmGain || !this.enabled) return
      const now = this.ctx.currentTime
      this.alarmGain.gain.setValueAtTime(0, now)
      this.alarmGain.gain.linearRampToValueAtTime(0.015, now + 0.1)
      this.alarmGain.gain.linearRampToValueAtTime(0, now + 0.4)
    }
    this.alarmInterval = setInterval(pulse, 3000)
    pulse()
  }

  private alarmInterval: ReturnType<typeof setInterval> | null = null

  private stopAmbience() {
    if (this.ambienceOsc) { try { this.ambienceOsc.stop() } catch { /* */ }; this.ambienceOsc = null }
    if (this.alarmOsc) { try { this.alarmOsc.stop() } catch { /* */ }; this.alarmOsc = null }
    if (this.alarmInterval) { clearInterval(this.alarmInterval); this.alarmInterval = null }
  }

  // Play a short beep (for SCP proximity warning)
  playBeep(frequency = 880, duration = 0.15, volume = 0.1) {
    if (!this.ctx || !this.enabled) return
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = frequency
    gain.gain.value = 0
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.01)
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration)
    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start()
    osc.stop(this.ctx.currentTime + duration)
  }

  // Footstep sound
  playFootstep() {
    if (!this.ctx || !this.enabled) return
    const noise = this.ctx.createBufferSource()
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.1, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.3))
    noise.buffer = buffer
    const filter = this.ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 200
    const gain = this.ctx.createGain()
    gain.gain.value = 0.05
    noise.connect(filter)
    filter.connect(gain)
    gain.connect(this.ctx.destination)
    noise.start()
  }

  // SCP encounter sound (low ominous tone)
  playEncounter() {
    if (!this.ctx || !this.enabled) return
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = 'sawtooth'
    osc.frequency.value = 80
    osc.frequency.linearRampToValueAtTime(40, this.ctx.currentTime + 0.5)
    gain.gain.value = 0
    gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.05)
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5)
    osc.connect(gain)
    gain.connect(this.ctx.destination)
    osc.start()
    osc.stop(this.ctx.currentTime + 0.5)
  }
}

const audioEngine = new AudioEngine()

// React hook for audio toggle
export function useAudio() {
  const [enabled, setEnabled] = useState(false)

  const toggle = useCallback(() => {
    const next = !enabled
    setEnabled(next)
    audioEngine.setEnabled(next)
  }, [enabled])

  return { enabled, toggle, audioEngine }
}

// Audio toggle button component
export function AudioToggleButton() {
  const { enabled, toggle } = useAudio()
  return (
    <button
      onClick={toggle}
      className="scp-panel rounded p-2 text-[#9fb0bc] hover:text-[#d4af37] transition-colors flex items-center gap-1"
      aria-label={enabled ? 'Mute audio' : 'Enable audio'}
      aria-pressed={enabled}
    >
      {enabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      <span className="text-[9px] uppercase tracking-wider hidden sm:inline">{enabled ? 'On' : 'Off'}</span>
    </button>
  )
}

export { audioEngine }

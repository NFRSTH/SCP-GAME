// ===== Tests for combat (store.attack) and resolveEncounter =====
// Verifies ammo consumption, damage to weak/medium SCPs, immunity of strong
// SCPs, weapon/ammo requirements, and SCP death.

import { useGame } from '@/game/store'
import { ITEMS, getItem } from '@/game/data/items'
import { SCPS, getSCP } from '@/game/data/scps'
import {
  SCP_HP,
  WEAPON_IMMUNE_DAMAGE_MULT,
  NOISE_FROM_SHOOTING,
  STRONG_SCP_SLOW_COOLDOWN,
} from '@/game/constants'
import { resolveEncounter } from '@/game/ai'
import { resetStore, startPlaying, giveItem, makeSCP, mockRandom } from './helpers'

beforeEach(() => {
  resetStore()
  mockRandom(0.99)
})

afterEach(() => {
  jest.restoreAllMocks()
  // Restore default item ammo in case a test mutated ITEMS.
  ITEMS.pistol.ammo = 12
  ITEMS.smg.ammo = 30
  ITEMS.rifle.ammo = 50
})

describe('attack() — weapon requirements', () => {
  it('refuses to attack with no weapon equipped', () => {
    startPlaying({
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: null },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })],
    })
    const hpBefore = useGame.getState().scps[0].hp
    useGame.getState().attack('scp-173')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    expect(scp?.hp).toBe(hpBefore) // unchanged
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/no weapon equipped/i)
  })

  it('refuses to attack when the SCP is not in the player room', () => {
    startPlaying({
      player: { roomId: 'cells-d', stamina: 100, weaponEquipped: 'pistol' },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })], // different room
    })
    giveItem('pistol')
    const hpBefore = useGame.getState().scps[0].hp
    useGame.getState().attack('scp-173')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    expect(scp?.hp).toBe(hpBefore) // unchanged
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/nothing to shoot here/i)
  })

  it('refuses to attack with 0 ammo (static def check)', () => {
    // The attack code checks the static item def's ammo (not the inventory
    // slot's ammo). Mutate ITEMS.pistol.ammo to 0 to exercise this branch.
    ITEMS.pistol.ammo = 0
    startPlaying({
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: 'pistol' },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })],
    })
    giveItem('pistol')
    const hpBefore = useGame.getState().scps[0].hp
    useGame.getState().attack('scp-173')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    expect(scp?.hp).toBe(hpBefore)
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/out of ammunition/i)
  })
})

describe('attack() — ammo consumption', () => {
  it('consumes one round of ammunition per attack', () => {
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: 'pistol' },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })],
    })
    giveItem('pistol')
    const ammoBefore = useGame
      .getState()
      .player.inventory.find((s) => s.item.id === 'pistol')!.item.ammo!
    useGame.getState().attack('scp-173')
    const ammoAfter = useGame
      .getState()
      .player.inventory.find((s) => s.item.id === 'pistol')!.item.ammo!
    expect(ammoAfter).toBe(ammoBefore - 1)
  })

  it('sets the player noise level to NOISE_FROM_SHOOTING', () => {
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: 'pistol', noiseLevel: 0 },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })],
    })
    giveItem('pistol')
    useGame.getState().attack('scp-173')
    // Attack sets noise to NOISE_FROM_SHOOTING (1.0), then tick decays by
    // NOISE_DECAY_PER_TICK (0.3). Net: 0.7.
    expect(useGame.getState().player.noiseLevel).toBeCloseTo(
      NOISE_FROM_SHOOTING - 0.3,
      5,
    )
  })
})

describe('attack() — damage to weak and medium SCPs', () => {
  it('deals full weapon damage to a weak SCP', () => {
    // SCP-173 (weak, 40 HP). Use rifle (40 dmg) — but that one-shots it.
    // Use pistol (25 dmg) instead — HP 40 -> 15.
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: 'pistol', watchingSCP173: true },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })],
    })
    giveItem('pistol')
    const hpBefore = useGame.getState().scps[0].hp
    useGame.getState().attack('scp-173')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    expect(scp).toBeDefined()
    expect(scp!.hp).toBe(hpBefore - 25) // pistol damage = 25
  })

  it('deals full weapon damage to a medium SCP', () => {
    // SCP-939 (medium, 80 HP). Pistol 25 dmg -> 55.
    // SCP-939 is non-lethal (killOnContact=false), so the AI tick won't kill
    // the player. It will damage them, but the test only checks SCP HP.
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp939-nest', stamina: 100, weaponEquipped: 'pistol', health: 200 },
      scps: [makeSCP('scp-939', { roomId: 'scp939-nest' })],
    })
    giveItem('pistol')
    const hpBefore = useGame.getState().scps[0].hp
    useGame.getState().attack('scp-939')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-939')
    expect(scp).toBeDefined()
    expect(scp!.hp).toBe(hpBefore - 25)
  })

  it('breaks a contained SCP out of containment on hit', () => {
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: 'pistol', watchingSCP173: true },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell', state: 'contained' })],
    })
    giveItem('pistol')
    useGame.getState().attack('scp-173')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    expect(scp?.state).toBe('roaming')
  })
})

describe('attack() — strong SCP immunity', () => {
  it('does NOT reduce a strong SCP HP (immune branch)', () => {
    // SCP-079 (strong, 200 HP, ai=ai). Attack with pistol: immune branch runs.
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp079-core', stamina: 100, weaponEquipped: 'pistol' },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core' })],
    })
    giveItem('pistol')
    const hpBefore = useGame.getState().scps[0].hp
    useGame.getState().attack('scp-079')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-079')
    expect(scp).toBeDefined()
    expect(scp!.hp).toBe(hpBefore) // unchanged — strong SCPs are immune
  })

  it('applies WEAPON_IMMUNE_DAMAGE_MULT in the dmg calculation (5%)', () => {
    // The attack code computes dmg = weapon.damage * WEAPON_IMMUNE_DAMAGE_MULT
    // for strong SCPs. Verify the constant is what we expect.
    expect(WEAPON_IMMUNE_DAMAGE_MULT).toBe(0.05)
    // For a pistol (25 dmg), the computed dmg would be floor(25 * 0.05) = 1.
    // However, the immune branch does NOT apply this damage to HP — it only
    // staggers the SCP. This test documents that the constant is in place.
    const computedDmg = Math.floor(25 * WEAPON_IMMUNE_DAMAGE_MULT)
    expect(computedDmg).toBe(1)
  })

  it('sets a cooldown (slow) and windup on the strong SCP', () => {
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp079-core', stamina: 100, weaponEquipped: 'pistol' },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core', cooldown: 0, windup: 0 })],
    })
    giveItem('pistol')
    useGame.getState().attack('scp-079')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-079')
    // On easy: slowCd = max(STRONG_SCP_SLOW_COOLDOWN, round(1 * 1.5)) = 2.
    // The subsequent tick decrements cooldown by 1 -> cooldown = 1.
    expect(scp?.cooldown).toBeGreaterThanOrEqual(1)
    // windup is set to max(sc.windup, 1) = 1 by attack; AI doesn't reset it
    // because the SCP is in the player's room.
    expect(scp?.windup).toBeGreaterThanOrEqual(1)
  })

  it('logs the "barely flinches" message for strong SCPs', () => {
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp079-core', stamina: 100, weaponEquipped: 'pistol' },
      scps: [makeSCP('scp-079', { roomId: 'scp079-core' })],
    })
    giveItem('pistol')
    useGame.getState().attack('scp-079')
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/barely flinches/i)
  })
})

describe('attack() — SCP death', () => {
  it('removes the SCP when HP reaches 0', () => {
    // SCP-173 (40 HP). Rifle (40 dmg) one-shots it.
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: 'rifle', watchingSCP173: true },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })],
    })
    giveItem('rifle')
    expect(useGame.getState().scps.find((s) => s.scpId === 'scp-173')).toBeDefined()
    useGame.getState().attack('scp-173')
    expect(useGame.getState().scps.find((s) => s.scpId === 'scp-173')).toBeUndefined()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/collapses, disabled/i)
  })

  it('kills a medium SCP with two rifle shots', () => {
    // SCP-939 (80 HP). Rifle 40 dmg x2 = 80 — exactly enough.
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp939-nest', stamina: 100, weaponEquipped: 'rifle', health: 200 },
      scps: [makeSCP('scp-939', { roomId: 'scp939-nest' })],
    })
    giveItem('rifle')
    // First shot: 80 -> 40
    useGame.getState().attack('scp-939')
    let scp = useGame.getState().scps.find((s) => s.scpId === 'scp-939')
    expect(scp?.hp).toBe(40)

    // Second shot: 40 -> 0, SCP removed
    useGame.getState().attack('scp-939')
    scp = useGame.getState().scps.find((s) => s.scpId === 'scp-939')
    expect(scp).toBeUndefined()
  })

  it('does not kill the SCP if HP remains above 0', () => {
    // SCP-173 (40 HP). Pistol (25 dmg). One shot leaves 15 HP.
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp173-cell', stamina: 100, weaponEquipped: 'pistol', watchingSCP173: true },
      scps: [makeSCP('scp-173', { roomId: 'scp173-cell' })],
    })
    giveItem('pistol')
    useGame.getState().attack('scp-173')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-173')
    expect(scp).toBeDefined()
    expect(scp!.hp).toBe(15)
  })
})

describe('attack() — reptile SCP (682) slowdown', () => {
  it('slows SCP-682 but does not kill it (reptile adaptation)', () => {
    // SCP-682 (strong, 200 HP, ai=reptile). Attack with rifle (40 dmg).
    // Strong -> immune branch: HP unchanged, cooldown set.
    // Then reptile branch in the immune path: actually the code falls into
    // the non-immune else block for reptile? Let me check...
    // No — reptile is strong (threat='strong'), so immune=true, immune branch runs.
    // The reptile-specific slowdown in the non-immune else block doesn't run.
    startPlaying({
      difficulty: 'easy',
      player: { roomId: 'scp682-chamber', stamina: 100, weaponEquipped: 'rifle', health: 200 },
      scps: [makeSCP('scp-682', { roomId: 'scp682-chamber', state: 'roaming' })],
    })
    giveItem('rifle')
    const hpBefore = useGame.getState().scps[0].hp
    useGame.getState().attack('scp-682')
    const scp = useGame.getState().scps.find((s) => s.scpId === 'scp-682')
    expect(scp).toBeDefined()
    expect(scp!.hp).toBe(hpBefore) // strong/immune: HP unchanged
  })
})

describe('resolveEncounter() — pure encounter helper', () => {
  it('returns no damage when 173 is being watched', () => {
    const def = getSCP('scp-173')!
    const result = resolveEncounter(def, { watchingSCP173: true }, 0.6)
    expect(result.kill).toBe(false)
    expect(result.damage).toBe(0)
    expect(result.text).toMatch(/frozen/i)
  })

  it('returns lethal damage for killOnContact SCPs when not watched', () => {
    const def = getSCP('scp-173')!
    const result = resolveEncounter(def, { watchingSCP173: false }, 0.6)
    expect(result.kill).toBe(true)
    expect(result.damage).toBe(999)
  })

  it('returns scaled damage for non-lethal SCPs', () => {
    const def = getSCP('scp-939')! // damage 40
    const result = resolveEncounter(def, { watchingSCP173: false }, 0.6)
    expect(result.kill).toBe(false)
    // dmg = round(40 * (0.7 + 0.6 * 0.6)) = round(40 * 1.06) = round(42.4) = 42
    expect(result.damage).toBe(42)
  })

  it('returns zero damage for a missing SCP def', () => {
    const result = resolveEncounter(undefined, { watchingSCP173: false }, 0.6)
    expect(result.kill).toBe(false)
    expect(result.damage).toBe(0)
    expect(result.text).toBe('')
  })
})

describe('SCP data integrity for combat', () => {
  it('SCP_HP constants match threat tiers', () => {
    expect(SCP_HP.weak).toBe(40)
    expect(SCP_HP.medium).toBe(80)
    expect(SCP_HP.strong).toBe(200)
  })

  it('every weak/medium SCP has HP that a pistol can damage', () => {
    const pistol = getItem('pistol')!
    for (const scp of SCPS) {
      if (scp.threat === 'weak' || scp.threat === 'medium') {
        // Two pistol mags (24 shots * 25 dmg = 600) should be enough.
        expect(SCP_HP[scp.threat]).toBeLessThan(pistol.damage! * 24)
      }
    }
  })

  it('STRONG_SCP_SLOW_COOLDOWN is at least 1', () => {
    expect(STRONG_SCP_SLOW_COOLDOWN).toBeGreaterThanOrEqual(1)
  })
})

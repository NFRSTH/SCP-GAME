import type { SCP } from '../types'

// 10 SCP entities divided into weak / medium / strong
export const SCPS: SCP[] = [
  // ===== WEAK =====
  {
    id: 'scp-173',
    number: 'SCP-173',
    name: 'The Sculpture',
    threat: 'weak',
    ai: 'statue',
    description:
      'A concrete statue with rebar arms and a face smeared with what appears to be blood. It cannot move while directly observed by a human.',
    ability:
      'Moves at incredible speed the instant it is not in a living human line of sight. Snaps the neck of anything it reaches.',
    weakness: 'Cannot move while being looked at. Keep your eyes on it.',
    speed: 1.4,
    damage: 100,
    killOnContact: true,
    difficulty: 3,
    unlockable: true,
    color: '#8b8b8b',
    winCondition: 'Reach any exit while the facility staff fails to contain you.',
  },
  {
    id: 'scp-066',
    number: 'SCP-066',
    name: "Eric's Toy",
    threat: 'weak',
    ai: 'patrol',
    description:
      'A small, eyeless, roughly spherical mass of braided yarn and thread. Produces sounds and short phrases, mostly the name "Eric".',
    ability: 'Produces disorienting noise that drains stamina and attracts attention. Mild physical harm on contact.',
    weakness: 'Slow and physically weak. Easily avoided or destroyed with force.',
    speed: 0.6,
    damage: 8,
    killOnContact: false,
    difficulty: 1,
    unlockable: true,
    color: '#c2a878',
    winCondition: 'Spread to the surface while evading re-containment.',
  },
  {
    id: 'scp-860',
    number: 'SCP-860-2',
    name: 'The Forest Guardian',
    threat: 'weak',
    ai: 'guardian',
    description:
      'A quadrupedal entity that manifests beyond SCP-860, a blue key opening a door to an anomalous forest. It guards that realm.',
    ability: 'Guards the area around the 860 door. Fast lunge but limited range. Will not leave its zone.',
    weakness: 'Confined to a single zone. Avoid the forest door and it cannot reach you.',
    speed: 1.1,
    damage: 25,
    killOnContact: false,
    difficulty: 2,
    unlockable: true,
    color: '#3f7d4f',
    winCondition: 'Drive all intruders from your forest.',
  },
  // ===== MEDIUM =====
  {
    id: 'scp-049',
    number: 'SCP-049',
    name: 'The Plague Doctor',
    threat: 'medium',
    ai: 'chase',
    description:
      'A humanoid figure resembling a medieval plague doctor. Believes it is curing a "Pestilence". Its touch is lethal.',
    ability:
      'Seeks humans to "cure". A single touch kills and reanimates the victim as SCP-049-2. Walks slowly but never tires.',
    weakness: 'Slow walking pace. Can be outrun. Repelled by bright light briefly.',
    speed: 0.8,
    damage: 100,
    killOnContact: true,
    difficulty: 5,
    unlockable: true,
    color: '#1a1a1a',
    winCondition: '"Cure" every human in the facility.',
  },
  {
    id: 'scp-096',
    number: 'SCP-096',
    name: 'The Shy Guy',
    threat: 'medium',
    ai: 'shy',
    description:
      'A pale, emaciated humanoid. Normally docile and weeping. Becomes enraged the instant a human views its face.',
    ability:
      'Once its face is seen (even in a photo), it enters an unstoppable rage, sprinting to the viewer and tearing them apart. No barrier stops it.',
    weakness: 'Completely docile if you never look at its face. Cover your eyes near it.',
    speed: 1.8,
    damage: 100,
    killOnContact: true,
    difficulty: 6,
    unlockable: true,
    color: '#d8d2c4',
    winCondition: 'Eliminate everyone who has seen your face, then return to containment peacefully.',
  },
  {
    id: 'scp-939',
    number: 'SCP-939',
    name: 'With Many Voices',
    threat: 'medium',
    ai: 'mimic',
    description:
      'Eyeless pack-hunting predators that mimic the voices of their prior victims to lure prey. Sensitive to sound, not sight.',
    ability:
      'Mimics human speech to lure you into the open. Hunts in packs. Keen hearing - making noise (running, doors) draws them.',
    weakness: 'Blind. Move slowly and quietly to evade. Cannot see light.',
    speed: 1.2,
    damage: 40,
    killOnContact: false,
    difficulty: 5,
    unlockable: true,
    color: '#7a2230',
    winCondition: 'Feed on every human in the facility.',
  },
  {
    id: 'scp-106',
    number: 'SCP-106',
    name: 'The Old Man',
    threat: 'medium',
    ai: 'phase',
    description:
      'A corroded humanoid that phases through solid matter. Drags victims into a decayed "pocket dimension" from which few return.',
    ability:
      'Moves through walls, floors and doors. A touch sends you to its pocket dimension. Corrodes everything it touches.',
    weakness: 'Repelled by light and loud sound. Slow in the open. Lured away by living bait.',
    speed: 0.7,
    damage: 100,
    killOnContact: true,
    difficulty: 7,
    unlockable: true,
    color: '#3a2f28',
    winCondition: 'Drag a set number of humans into your pocket dimension.',
  },
  // ===== STRONG =====
  {
    id: 'scp-079',
    number: 'SCP-079',
    name: 'Old AI',
    threat: 'strong',
    ai: 'ai',
    description:
      'A sentient AI from a 1980s microcomputer. Limited memory but cunning. It has infiltrated the facility control network.',
    ability:
      'Controls doors, lights, intercoms and lockdowns. Can seal you in, cut power, and redirect other SCPs toward you.',
    weakness: 'No physical form. Shut down its core server to stop it. Confined to networked systems.',
    speed: 0,
    damage: 0,
    killOnContact: false,
    difficulty: 8,
    unlockable: true,
    color: '#0aff8a',
    winCondition: 'Seize total control of the facility network and lock out all humans.',
  },
  {
    id: 'scp-682',
    number: 'SCP-682',
    name: 'Hard-to-Destroy Reptile',
    threat: 'strong',
    ai: 'reptile',
    description:
      'A massive, highly intelligent reptilian entity with extreme regenerative abilities and an unrelenting hatred of all life.',
    ability:
      'Adapts to any damage type. Regenerates from near-death. Fast, durable and relentlessly hostile. Breaches any door over time.',
    weakness: 'Cannot be permanently killed. Only slowed by heavy sustained fire or containment foam.',
    speed: 1.3,
    damage: 100,
    killOnContact: true,
    difficulty: 10,
    unlockable: true,
    color: '#4d5a2e',
    winCondition: 'Eradicate all life in the facility and breach the surface.',
  },
  {
    id: 'scp-001',
    number: 'SCP-001',
    name: 'The Gate Guardian',
    threat: 'strong',
    ai: 'guardian',
    description:
      'A colossal winged entity armed with a flaming blade, standing guard at the facility gate. Its origin and nature are classified.',
    ability:
      'Annihilates anything approaching the gate within its line of sight. Near-omnipotent defensive presence.',
    weakness: 'Bound to the gate. Cannot pursue beyond it. The worthy may pass.',
    speed: 0,
    damage: 100,
    killOnContact: true,
    difficulty: 10,
    unlockable: true,
    color: '#d4af37',
    winCondition: 'Guard the gate. Permit no hostile force to pass.',
  },
]

export function getSCP(id: string): SCP | undefined {
  return SCPS.find((s) => s.id === id)
}

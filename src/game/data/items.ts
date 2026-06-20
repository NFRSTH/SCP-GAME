import type { Item } from '../types'

export const ITEMS: Record<string, Item> = {
  // Keycards (levels 1-5)
  keycard1: {
    id: 'keycard1',
    name: 'Level 1 Keycard',
    description: 'A white keycard. Grants access to low-security zones (Class-D cells, light containment).',
    type: 'keycard',
    keycardLevel: 1,
  },
  keycard2: {
    id: 'keycard2',
    name: 'Level 2 Keycard',
    description: 'A yellow keycard. Grants access to laboratories and support areas.',
    type: 'keycard',
    keycardLevel: 2,
  },
  keycard3: {
    id: 'keycard3',
    name: 'Level 3 Keycard',
    description: 'An orange keycard. Grants access to security areas and the armory.',
    type: 'keycard',
    keycardLevel: 3,
  },
  keycard4: {
    id: 'keycard4',
    name: 'Level 4 Keycard',
    description: 'A red keycard. Grants access to heavy containment zones.',
    type: 'keycard',
    keycardLevel: 4,
  },
  keycard5: {
    id: 'keycard5',
    name: 'Level 5 O5 Keycard',
    description: 'A black O5 keycard. Required to open the facility gates and escape.',
    type: 'keycard',
    keycardLevel: 5,
  },
  // Weapons
  pistol: {
    id: 'pistol',
    name: 'USP Pistol',
    description: 'Standard sidearm. Effective on weak and some medium SCPs. Useless against strong ones.',
    type: 'weapon',
    damage: 25,
    ammo: 12,
  },
  smg: {
    id: 'smg',
    name: 'MP7 SMG',
    description: 'Rapid-fire weapon. Higher damage output, scarce ammunition.',
    type: 'weapon',
    damage: 18,
    ammo: 30,
  },
  rifle: {
    id: 'rifle',
    name: 'P90 Rifle',
    description: 'Heavy weapon found in the armory. The only thing that slows SCP-682.',
    type: 'weapon',
    damage: 40,
    ammo: 50,
  },
  // Tools
  flashlight: {
    id: 'flashlight',
    name: 'Flashlight',
    description: 'Reveals dark rooms and repels SCP-106 and SCP-049. Drains batteries.',
    type: 'tool',
    battery: 100,
  },
  medkit: {
    id: 'medkit',
    name: 'First Aid Kit',
    description: 'Restores 50 health. Single use.',
    type: 'medical',
    healAmount: 50,
    uses: 1,
  },
  bandage: {
    id: 'bandage',
    name: 'Bandage',
    description: 'Restores 20 health. Single use.',
    type: 'medical',
    healAmount: 20,
    uses: 1,
  },
  battery: {
    id: 'battery',
    name: 'Batteries',
    description: 'Recharges the flashlight to full.',
    type: 'battery',
    battery: 100,
  },
  radio: {
    id: 'radio',
    name: 'Radio',
    description: 'Picks up emergency broadcasts and facility announcements.',
    type: 'tool',
  },
  crowbar: {
    id: 'crowbar',
    name: 'Crowbar',
    description: 'Can pry open jammed or broken doors. Weak melee weapon.',
    type: 'tool',
    damage: 10,
  },
  keyO5: {
    id: 'keyO5',
    name: 'O5 Override Token',
    description: 'Bypasses any single locked door, once.',
    type: 'tool',
    uses: 1,
  },
  // Documents
  docLore1: {
    id: 'docLore1',
    name: 'Facility Log #1',
    description: 'A crumpled page: "...the breach began in Heavy Containment. 682 is loose. God help us."',
    type: 'document',
  },
  docLore2: {
    id: 'docLore2',
    name: 'Researcher Note',
    description: '"096 reacted to a photograph today. The whole D-Class block is gone. Seal the photo vault."',
    type: 'document',
  },
  docLore3: {
    id: 'docLore3',
    name: 'Intercepted Transmission',
    description: '"...all units fall back to Gate A. 079 has locked us out of the elevators. We are trapped down here."',
    type: 'document',
  },
}

export function getItem(id: string): Item | undefined {
  return ITEMS[id]
}

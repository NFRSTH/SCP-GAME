import type { Room, Door, Zone } from '../types'

// ===== Facility Layout (5x5 grid) =====
//   x: 0 (west)  -> 4 (east)
//   y: 0 (north) -> 4 (south)
//
//   y0:  gate-a      reception    checkpoint    armory        gate-b
//   y1:  cells-d     corridor-l1  scp173-cell   scp860-door   lab-wing
//   y2:  server-rm   corridor-l2  research-lab  scp096-cell   medbay
//   y3:  power-rm    corridor-h1  scp049-cell   scp106-cell   scp682-chamber
//   y4:  maint-shaft corridor-h2  scp939-nest   scp079-core   scp001-vault

export const FACILITY_WIDTH = 5
export const FACILITY_HEIGHT = 5

export const ROOMS: Room[] = [
  // ---- Row 0: Support / Entrance ----
  {
    id: 'gate-a',
    name: 'Gate A — Surface Exit',
    shortName: 'Gate A',
    description:
      'A massive blast door marked GATE A. Beyond it, a freight elevator rises to the surface. The door is sealed shut, awaiting a Level 5 keycard.',
    ambient: 'Cold wind seeps through the seal. Daylight bleeds under the door.',
    x: 0,
    y: 0,
    zone: 'exit',
    isExit: true,
    items: [],
    isDark: false,
    lore: 'Gate A leads directly to the surface. Only O5 clearance can open it during a breach.',
  },
  {
    id: 'reception',
    name: 'Reception & Lobby',
    shortName: 'Reception',
    description:
      'The facility lobby. A reception desk, broken monitors, scattered chairs. Bullet holes riddle the far wall.',
    ambient: 'A broken intercom crackles with static. Somewhere, a phone rings endlessly.',
    x: 1,
    y: 0,
    zone: 'support',
    items: [
      { itemId: 'keycard1', chance: 0.7 },
      { itemId: 'radio', chance: 0.5 },
      { itemId: 'crowbar', chance: 0.4 },
      { itemId: 'docLore1', chance: 0.6 },
    ],
  },
  {
    id: 'checkpoint',
    name: 'Security Checkpoint',
    shortName: 'Checkpoint',
    description:
      'A fortified security post. Bulletproof glass, weapon lockers, a bank of monitors — most dark. The Guard spawns here.',
    ambient: 'A red emergency light pulses. The monitors show only static.',
    x: 2,
    y: 0,
    zone: 'support',
    spawnFor: 'guard',
    items: [
      { itemId: 'medkit', chance: 0.8 },
      { itemId: 'pistol', chance: 0.5 },
      { itemId: 'bandage', chance: 0.9 },
    ],
  },
  {
    id: 'armory',
    name: 'Armory',
    shortName: 'Armory',
    description:
      'Racks of firearms and tactical gear behind a reinforced door. Most lockers are empty — someone armed up before you.',
    ambient: 'The metallic smell of gun oil. A locker door swings on a broken hinge.',
    x: 3,
    y: 0,
    zone: 'support',
    items: [
      { itemId: 'smg', chance: 0.6 },
      { itemId: 'rifle', chance: 0.3 },
      { itemId: 'medkit', chance: 0.5 },
      { itemId: 'battery', chance: 0.4 },
    ],
  },
  {
    id: 'gate-b',
    name: 'Gate B — Surface Exit',
    shortName: 'Gate B',
    description:
      'The second surface exit, marked GATE B. A freight elevator shaft ascends into darkness. Sealed — requires a Level 5 keycard.',
    ambient: 'The shaft exhales cold air. A distant alarm wails above.',
    x: 4,
    y: 0,
    zone: 'exit',
    isExit: true,
    items: [],
    lore: 'Gate B is the secondary escape route. SCP-001 is rumoured to guard the path beyond.',
  },

  // ---- Row 1: Light Containment ----
  {
    id: 'cells-d',
    name: 'Class-D Holding Cells',
    shortName: 'Cells',
    description:
      'A block of cramped cells. The doors are open — the inmates are gone, or worse. A single flickering bulb remains. The Class-D spawns here.',
    ambient: 'Dripping water. A child\'s music box plays somewhere down the hall.',
    x: 0,
    y: 1,
    zone: 'light',
    spawnFor: 'class-d',
    isDark: true,
    items: [
      { itemId: 'keycard1', chance: 0.5 },
      { itemId: 'flashlight', chance: 0.7 },
      { itemId: 'bandage', chance: 0.6 },
      { itemId: 'docLore2', chance: 0.4 },
    ],
  },
  {
    id: 'corridor-l1',
    name: 'Light Containment Corridor',
    shortName: 'Corridor L1',
    description: 'A long white corridor lined with containment doors. Emergency lighting casts everything in dim red.',
    ambient: 'Your footsteps echo. Something else echoes back, a half-second late.',
    x: 1,
    y: 1,
    zone: 'light',
    isDark: true,
    items: [{ itemId: 'battery', chance: 0.5 }],
    scpSpawns: ['scp-066'],
  },
  {
    id: 'scp173-cell',
    name: 'SCP-173 Containment Cell',
    shortName: 'SCP-173 Cell',
    description:
      'A sealed chamber behind reinforced glass. Scratches gouge the inside of the walls. The chamber is empty — 173 is loose.',
    ambient: 'The glass is cracked from the inside. You feel watched when you look away.',
    x: 2,
    y: 1,
    zone: 'light',
    items: [{ itemId: 'keycard2', chance: 0.4 }],
    scpSpawns: ['scp-173'],
  },
  {
    id: 'scp860-door',
    name: 'SCP-860 Door',
    shortName: 'SCP-860',
    description:
      'An ordinary-looking door set into the wall. A blue key hangs from a hook beside it. Beyond the door, you hear wind through trees — but there is no forest here.',
    ambient: 'Birdsong that should not exist underground. The door is warm to the touch.',
    x: 3,
    y: 1,
    zone: 'light',
    items: [{ itemId: 'docLore3', chance: 0.5 }],
    scpSpawns: ['scp-860'],
  },
  {
    id: 'lab-wing',
    name: 'Laboratory Wing',
    shortName: 'Lab Wing',
    description: 'A research wing with microscopes, centrifuges and cold-storage units. Papers are scattered across the floor in haste.',
    ambient: 'A centrifuge still spins, unattended. The hum of refrigeration.',
    x: 4,
    y: 1,
    zone: 'labs',
    items: [
      { itemId: 'keycard2', chance: 0.6 },
      { itemId: 'flashlight', chance: 0.4 },
      { itemId: 'battery', chance: 0.6 },
      { itemId: 'medkit', chance: 0.3 },
    ],
  },

  // ---- Row 2: Labs ----
  {
    id: 'server-rm',
    name: 'Server Room',
    shortName: 'Server Room',
    description:
      'Rows of server racks hum with activity. This is the backbone of the facility network — and where SCP-079 was first contained.',
    ambient: 'The whine of cooling fans. Blinking LEDs form patterns that almost mean something.',
    x: 0,
    y: 2,
    zone: 'labs',
    isDark: true,
    items: [
      { itemId: 'keycard4', chance: 0.3 },
      { itemId: 'battery', chance: 0.5 },
    ],
  },
  {
    id: 'corridor-l2',
    name: 'Lab Corridor',
    shortName: 'Corridor L2',
    description: 'A connector corridor between the labs and containment. White tiles, now stained.',
    ambient: 'Fluorescent lights strobe erratically.',
    x: 1,
    y: 2,
    zone: 'labs',
    items: [{ itemId: 'bandage', chance: 0.4 }],
  },
  {
    id: 'research-lab',
    name: 'Primary Research Laboratory',
    shortName: 'Research Lab',
    description:
      'The main lab, where SCP behaviour is studied. A central observation chamber, banks of terminals, specimen fridges. The Scientist spawns here.',
    ambient: 'A terminal blinks an unacknowledged warning. Specimen fridges drone.',
    x: 2,
    y: 2,
    zone: 'labs',
    spawnFor: 'scientist',
    items: [
      { itemId: 'keycard2', chance: 0.5 },
      { itemId: 'medkit', chance: 0.6 },
      { itemId: 'docLore1', chance: 0.5 },
    ],
  },
  {
    id: 'scp096-cell',
    name: 'SCP-096 Containment Cell',
    shortName: 'SCP-096 Cell',
    description:
      'A bare concrete cell. A single cot. The walls are scored with deep grooves — and the door hangs open. SCP-096 is loose. DO NOT LOOK AT ITS FACE.',
    ambient: 'Faint weeping, somewhere nearby. Do not seek the source.',
    x: 3,
    y: 2,
    zone: 'labs',
    isDark: true,
    items: [{ itemId: 'keycard3', chance: 0.3 }],
    scpSpawns: ['scp-096'],
  },
  {
    id: 'medbay',
    name: 'Medical Bay',
    shortName: 'Med Bay',
    description: 'The facility infirmary. Intact beds, anesthetic machines, a supply cabinet. A body lies under a sheet.',
    ambient: 'An EKG monitor flatlines, over and over, its patient long gone.',
    x: 4,
    y: 2,
    zone: 'labs',
    items: [
      { itemId: 'medkit', chance: 0.9 },
      { itemId: 'bandage', chance: 0.9 },
      { itemId: 'flashlight', chance: 0.5 },
      { itemId: 'battery', chance: 0.6 },
    ],
  },

  // ---- Row 3: Heavy Containment ----
  {
    id: 'power-rm',
    name: 'Power Control Room',
    shortName: 'Power Room',
    description:
      'The facility power core. Massive turbines and a central control console. The reactor is online — for now. Restoring power here can stabilize the facility.',
    ambient: 'The deep thrum of the reactor. Warning klaxons beneath it.',
    x: 0,
    y: 3,
    zone: 'heavy',
    items: [
      { itemId: 'keycard4', chance: 0.5 },
      { itemId: 'battery', chance: 0.4 },
    ],
  },
  {
    id: 'corridor-h1',
    name: 'Heavy Containment Corridor',
    shortName: 'Corridor H1',
    description:
      'A reinforced corridor into Heavy Containment. Blast doors line the walls. The air is colder here.',
    ambient: 'Your breath fogs. The hum of magnetic seals.',
    x: 1,
    y: 3,
    zone: 'heavy',
    isDark: true,
    items: [{ itemId: 'bandage', chance: 0.4 }],
  },
  {
    id: 'scp049-cell',
    name: 'SCP-049 Containment Cell',
    shortName: 'SCP-049 Cell',
    description:
      'A Victorian-style chamber, incongruous underground. The door is open. SCP-049 — the Plague Doctor — walks the facility, "curing" the staff.',
    ambient: 'The faint smell of incense. A polite humming, growing closer.',
    x: 2,
    y: 3,
    zone: 'heavy',
    items: [{ itemId: 'keycard3', chance: 0.4 }],
    scpSpawns: ['scp-049'],
  },
  {
    id: 'scp106-cell',
    name: 'SCP-106 Containment Cell',
    shortName: 'SCP-106 Cell',
    description:
      'A sealed chamber with a containment "pocket dimension" lure. The cell is corroded through — SCP-106 has phased out. It can walk through any wall.',
    ambient: 'Rust and decay. A black smear leads from the cell into the wall.',
    x: 3,
    y: 3,
    zone: 'heavy',
    isDark: true,
    items: [{ itemId: 'keycard4', chance: 0.3 }],
    scpSpawns: ['scp-106'],
  },
  {
    id: 'scp682-chamber',
    name: 'SCP-682 Containment Chamber',
    shortName: 'SCP-682 Chamber',
    description:
      'A massive chamber built to hold SCP-682 — the Hard-to-Destroy Reptile. Acid pools fill the floor. The chamber is empty. 682 is loose, and it hates everything that lives.',
    ambient: 'A low, rumbling growl echoes through the walls. It knows you are here.',
    x: 4,
    y: 3,
    zone: 'heavy',
    items: [],
    scpSpawns: ['scp-682'],
  },

  // ---- Row 4: Deep Containment ----
  {
    id: 'maint-shaft',
    name: 'Maintenance Shaft',
    shortName: 'Maintenance',
    description: 'A narrow service shaft. Pipes, cables, and the guts of the facility. A crowbar leans against the wall.',
    ambient: 'Hissing steam. The skitter of rats — or something rat-shaped.',
    x: 0,
    y: 4,
    zone: 'deep',
    isDark: true,
    items: [
      { itemId: 'crowbar', chance: 0.7 },
      { itemId: 'battery', chance: 0.5 },
      { itemId: 'keycard4', chance: 0.3 },
    ],
  },
  {
    id: 'corridor-h2',
    name: 'Deep Containment Access',
    shortName: 'Corridor H2',
    description: 'The deepest corridor. Only the most dangerous anomalies are kept here. The air is thick.',
    ambient: 'Silence so complete it rings in your ears.',
    x: 1,
    y: 4,
    zone: 'deep',
    isDark: true,
    items: [{ itemId: 'medkit', chance: 0.3 }],
  },
  {
    id: 'scp939-nest',
    name: 'SCP-939 Nest',
    shortName: 'SCP-939 Nest',
    description:
      'A nest of eyeless pack-hunters that mimic human voices. Bones litter the floor. They hear every sound you make.',
    ambient: 'A voice calls your name from the dark. It is not a friend. Move quietly.',
    x: 2,
    y: 4,
    zone: 'deep',
    isDark: true,
    items: [{ itemId: 'keycard4', chance: 0.4 }],
    scpSpawns: ['scp-939'],
  },
  {
    id: 'scp079-core',
    name: 'SCP-079 Core Server',
    shortName: 'SCP-079 Core',
    description:
      'The physical server housing SCP-079, the Old AI. A single green CRT displays a slowly blinking cursor. It is watching the facility through every camera. Shutting it down stabilizes all doors.',
    ambient: 'A monotone synthesized voice: "I HAVE BEEN WAITING."',
    x: 3,
    y: 4,
    zone: 'deep',
    isDark: true,
    items: [{ itemId: 'keycard5', chance: 0.4 }],
    scpSpawns: ['scp-079'],
  },
  {
    id: 'scp001-vault',
    name: 'SCP-001 Vault',
    shortName: 'SCP-001 Vault',
    description:
      'The final vault. SCP-001 — the Gate Guardian — manifests beyond the inner door. A flaming sword is visible in the dark. The worthy may pass; the rest are annihilated.',
    ambient: 'Heat without source. A voice like a bell: "TURN BACK."',
    x: 4,
    y: 4,
    zone: 'deep',
    isDark: true,
    items: [{ itemId: 'keycard5', chance: 0.6 }],
    scpSpawns: ['scp-001'],
  },
]

// ===== Doors =====
// Hand-defined for a deliberate facility layout & keycard progression.
// direction = direction of travel FROM -> TO.
export const DOORS: Door[] = [
  // Row 0 horizontal
  { id: 'd-gate-a-recep', from: 'gate-a', to: 'reception', direction: 'E', keycardRequired: 5, lockedDuringBreach: false },
  { id: 'd-recep-check', from: 'reception', to: 'checkpoint', direction: 'E', keycardRequired: 1 },
  { id: 'd-check-armory', from: 'checkpoint', to: 'armory', direction: 'E', keycardRequired: 3 },
  { id: 'd-armory-gate-b', from: 'armory', to: 'gate-b', direction: 'E', keycardRequired: 5, lockedDuringBreach: false },

  // Row 1 horizontal
  { id: 'd-cells-corr1', from: 'cells-d', to: 'corridor-l1', direction: 'E', keycardRequired: 1 },
  { id: 'd-corr1-173', from: 'corridor-l1', to: 'scp173-cell', direction: 'E', keycardRequired: 2 },
  { id: 'd-173-860', from: 'scp173-cell', to: 'scp860-door', direction: 'E', keycardRequired: 2 },
  { id: 'd-860-labwing', from: 'scp860-door', to: 'lab-wing', direction: 'E', keycardRequired: 2 },

  // Row 2 horizontal
  { id: 'd-server-corr2', from: 'server-rm', to: 'corridor-l2', direction: 'E', keycardRequired: 2 },
  { id: 'd-corr2-research', from: 'corridor-l2', to: 'research-lab', direction: 'E', keycardRequired: 2 },
  { id: 'd-research-096', from: 'research-lab', to: 'scp096-cell', direction: 'E', keycardRequired: 2 },
  { id: 'd-096-medbay', from: 'scp096-cell', to: 'medbay', direction: 'E', keycardRequired: 2 },

  // Row 3 horizontal
  { id: 'd-power-corrh1', from: 'power-rm', to: 'corridor-h1', direction: 'E', keycardRequired: 3, heavy: true },
  { id: 'd-corrh1-049', from: 'corridor-h1', to: 'scp049-cell', direction: 'E', keycardRequired: 3, heavy: true },
  { id: 'd-049-106', from: 'scp049-cell', to: 'scp106-cell', direction: 'E', keycardRequired: 4, heavy: true },
  { id: 'd-106-682', from: 'scp106-cell', to: 'scp682-chamber', direction: 'E', keycardRequired: 4, heavy: true },

  // Row 4 horizontal
  { id: 'd-maint-corrh2', from: 'maint-shaft', to: 'corridor-h2', direction: 'E', keycardRequired: 4, heavy: true },
  { id: 'd-corrh2-939', from: 'corridor-h2', to: 'scp939-nest', direction: 'E', keycardRequired: 4, heavy: true },
  { id: 'd-939-079', from: 'scp939-nest', to: 'scp079-core', direction: 'E', keycardRequired: 4, heavy: true },
  { id: 'd-079-001', from: 'scp079-core', to: 'scp001-vault', direction: 'E', keycardRequired: 5, heavy: true },

  // Vertical connections (rows -> next row)
  // Row 0 -> Row 1
  { id: 'd-gate-a-cells', from: 'gate-a', to: 'cells-d', direction: 'S', keycardRequired: 5 },
  { id: 'd-recep-corr1', from: 'reception', to: 'corridor-l1', direction: 'S', keycardRequired: 1 },
  { id: 'd-check-173', from: 'checkpoint', to: 'scp173-cell', direction: 'S', keycardRequired: 2 },
  { id: 'd-armory-860', from: 'armory', to: 'scp860-door', direction: 'S', keycardRequired: 3 },
  { id: 'd-gate-b-labwing', from: 'gate-b', to: 'lab-wing', direction: 'S', keycardRequired: 5 },

  // Row 1 -> Row 2
  { id: 'd-cells-server', from: 'cells-d', to: 'server-rm', direction: 'S', keycardRequired: 2 },
  { id: 'd-corr1-corr2', from: 'corridor-l1', to: 'corridor-l2', direction: 'S', keycardRequired: 1 },
  { id: 'd-173-research', from: 'scp173-cell', to: 'research-lab', direction: 'S', keycardRequired: 2 },
  { id: 'd-860-096', from: 'scp860-door', to: 'scp096-cell', direction: 'S', keycardRequired: 2 },
  { id: 'd-labwing-medbay', from: 'lab-wing', to: 'medbay', direction: 'S', keycardRequired: 2 },

  // Row 2 -> Row 3
  { id: 'd-server-power', from: 'server-rm', to: 'power-rm', direction: 'S', keycardRequired: 3, heavy: true },
  { id: 'd-corr2-corrh1', from: 'corridor-l2', to: 'corridor-h1', direction: 'S', keycardRequired: 3, heavy: true },
  { id: 'd-research-049', from: 'research-lab', to: 'scp049-cell', direction: 'S', keycardRequired: 3, heavy: true },
  { id: 'd-096-106', from: 'scp096-cell', to: 'scp106-cell', direction: 'S', keycardRequired: 4, heavy: true },
  { id: 'd-medbay-682', from: 'medbay', to: 'scp682-chamber', direction: 'S', keycardRequired: 4, heavy: true },

  // Row 3 -> Row 4
  { id: 'd-power-maint', from: 'power-rm', to: 'maint-shaft', direction: 'S', keycardRequired: 4, heavy: true },
  { id: 'd-corrh1-corrh2', from: 'corridor-h1', to: 'corridor-h2', direction: 'S', keycardRequired: 4, heavy: true },
  { id: 'd-049-939', from: 'scp049-cell', to: 'scp939-nest', direction: 'S', keycardRequired: 4, heavy: true },
  { id: 'd-106-079', from: 'scp106-cell', to: 'scp079-core', direction: 'S', keycardRequired: 4, heavy: true },
  { id: 'd-682-001', from: 'scp682-chamber', to: 'scp001-vault', direction: 'S', keycardRequired: 5, heavy: true },
]

export const ROOM_MAP: Record<string, Room> = Object.fromEntries(
  ROOMS.map((r) => [r.id, r]),
)

export function getRoom(id: string): Room | undefined {
  return ROOM_MAP[id]
}

// Reverse direction mapping for bidirectional door traversal
const REVERSE_DIR: Record<Direction, Direction> = { N: 'S', S: 'N', E: 'W', W: 'E' }

// All doors connecting to a room (both outgoing and incoming/reversed).
// Returns them with `from` = roomId, `to` = the other side, `direction` = travel direction FROM roomId.
export function doorsFrom(roomId: string): Door[] {
  const out: Door[] = []
  for (const d of DOORS) {
    if (d.from === roomId) {
      out.push(d)
    } else if (d.to === roomId) {
      // reverse the door so it reads from roomId → d.from
      out.push({
        ...d,
        id: d.id + '-rev',
        from: d.to,
        to: d.from,
        direction: REVERSE_DIR[d.direction],
      })
    }
  }
  return out
}

export function doorBetween(fromId: string, toId: string): Door | undefined {
  // Bidirectional: a door connects two rooms regardless of which is "from".
  return DOORS.find((d) =>
    (d.from === fromId && d.to === toId) || (d.from === toId && d.to === fromId),
  )
}

export const ZONE_INFO: Record<Zone, { name: string; color: string; description: string }> = {
  support: { name: 'Support Zone', color: '#6b7280', description: 'Entrance, security and logistics.' },
  light: { name: 'Light Containment', color: '#10b981', description: 'Low-risk anomalies and Class-D housing.' },
  labs: { name: 'Research Laboratories', color: '#06b6d4', description: 'Scientific study and medical facilities.' },
  heavy: { name: 'Heavy Containment', color: '#f59e0b', description: 'High-risk anomalies. Elevated clearance required.' },
  deep: { name: 'Deep Containment', color: '#dc2626', description: 'The most dangerous entities. Maximum clearance.' },
  exit: { name: 'Surface Exit', color: '#a78bfa', description: 'Escape to the surface. Level 5 clearance required.' },
}

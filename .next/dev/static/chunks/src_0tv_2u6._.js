(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/game/data/roles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIFFICULTIES",
    ()=>DIFFICULTIES,
    "ROLES",
    ()=>ROLES,
    "getDifficulty",
    ()=>getDifficulty,
    "getRole",
    ()=>getRole
]);
const ROLES = [
    {
        id: 'class-d',
        name: 'Class-D Personnel',
        description: 'A disposable test subject — formerly a death-row inmate. You wake in a locked cell with nothing. No authority, no weapons, no friends.',
        goal: 'Escape the facility alive through Gate A or Gate B.',
        gameplay: 'Pure stealth survival horror. Avoid SCPs and armed personnel. Scavenge keycards, tools and exits. Mistakes are fatal.',
        startHealth: 100,
        startStamina: 100,
        startItems: [],
        startKeycard: 0,
        hasWeapon: false
    },
    {
        id: 'scientist',
        name: 'Scientist',
        description: 'Foundation research staff. You have clearance to terminals and a Level 2 keycard, but you are not a fighter.',
        goal: 'Escape the facility OR restore power and evacuate via the elevators.',
        gameplay: 'Puzzle-solving and terminal usage. Manage door access, evade SCPs, and decide between fleeing or fixing the facility.',
        startHealth: 100,
        startStamina: 100,
        startItems: [
            'keycard2',
            'radio'
        ],
        startKeycard: 2,
        hasWeapon: false
    },
    {
        id: 'guard',
        name: 'Security Guard',
        description: 'Armed Foundation security. You are trained for containment response and have a pistol, a Level 3 keycard and body armor.',
        goal: 'Re-contain the breach OR survive until evacuation arrives.',
        gameplay: 'Combat-based survival. Patrol zones, respond to alarms, engage threats, lock down dangerous areas. Ammo is limited.',
        startHealth: 120,
        startStamina: 110,
        startItems: [
            'keycard3',
            'pistol',
            'radio'
        ],
        startKeycard: 3,
        hasWeapon: true
    },
    {
        id: 'scp',
        name: 'SCP (Anomalous Entity)',
        description: 'Take control of a supernatural anomaly. Each SCP plays completely differently. The facility is your hunting ground — or your prison.',
        goal: 'Escape containment or complete your SCP-specific objective.',
        gameplay: 'Varies wildly by SCP. Some hunt, some trap, some guard. Discover each one\'s unique abilities and limitations.',
        startHealth: 100,
        startStamina: 100,
        startItems: [],
        startKeycard: 0,
        hasWeapon: false,
        locked: true,
        lockReason: 'Complete one full successful run as Class-D, Scientist or Guard to unlock.'
    }
];
function getRole(id) {
    return ROLES.find((r)=>r.id === id);
}
const DIFFICULTIES = [
    {
        id: 'easy',
        name: 'Easy',
        description: 'Slower SCPs, plentiful resources, clear warnings before danger, and grace turns before lethal contact. A gentle introduction to the facility.',
        startHealth: 130,
        startStamina: 120,
        resourceMultiplier: 1.6,
        scpSpeedMultiplier: 0.6,
        scpDamageMultiplier: 0.5,
        aiSmart: 0.3,
        staminaDrainMultiplier: 0.6,
        startBattery: 100,
        startItems: [
            'bandage'
        ],
        lethalWarningTurns: 2,
        showProximityWarnings: true,
        maxConcurrentRoamingSCPs: 3,
        scpEscapeChancePerTick: 0.04,
        maxLockedDoors: 3,
        powerCutChance: 0,
        powerOutageDuration: 2,
        scpAbilityCooldownMultiplier: 1.5
    },
    {
        id: 'balanced',
        name: 'Balanced (Default)',
        description: 'Standard SCP behaviour, moderate resources, fair encounters. One grace turn before lethal contact. The intended SCP experience with full counter-play.',
        startHealth: 100,
        startStamina: 100,
        resourceMultiplier: 1,
        scpSpeedMultiplier: 1,
        scpDamageMultiplier: 1,
        aiSmart: 0.6,
        staminaDrainMultiplier: 1,
        startBattery: 100,
        startItems: [],
        lethalWarningTurns: 1,
        showProximityWarnings: true,
        maxConcurrentRoamingSCPs: 5,
        scpEscapeChancePerTick: 0.08,
        maxLockedDoors: 5,
        powerCutChance: 0.04,
        powerOutageDuration: 3,
        scpAbilityCooldownMultiplier: 1
    },
    {
        id: 'hard',
        name: 'Hard',
        description: 'Faster SCPs, fewer resources, more aggressive AI. No grace turns — but SCPs still follow readable patterns. For experienced personnel.',
        startHealth: 90,
        startStamina: 95,
        resourceMultiplier: 0.7,
        scpSpeedMultiplier: 1.2,
        scpDamageMultiplier: 1.25,
        aiSmart: 0.85,
        staminaDrainMultiplier: 1.2,
        startBattery: 80,
        startItems: [],
        lethalWarningTurns: 0,
        showProximityWarnings: false,
        maxConcurrentRoamingSCPs: 7,
        scpEscapeChancePerTick: 0.12,
        maxLockedDoors: 8,
        powerCutChance: 0.08,
        powerOutageDuration: 4,
        scpAbilityCooldownMultiplier: 0.8
    },
    {
        id: 'hardcore',
        name: 'Hardcore',
        description: 'No safety guarantees. Fastest SCPs, scarcest resources, instant lethal contact, no warnings. High punishment system. You asked for this.',
        startHealth: 80,
        startStamina: 90,
        resourceMultiplier: 0.5,
        scpSpeedMultiplier: 1.3,
        scpDamageMultiplier: 1.5,
        aiSmart: 1,
        staminaDrainMultiplier: 1.4,
        startBattery: 60,
        startItems: [],
        lethalWarningTurns: 0,
        showProximityWarnings: false,
        maxConcurrentRoamingSCPs: 10,
        scpEscapeChancePerTick: 0.15,
        maxLockedDoors: 99,
        powerCutChance: 0.12,
        powerOutageDuration: 6,
        scpAbilityCooldownMultiplier: 0.6
    }
];
function getDifficulty(id) {
    return DIFFICULTIES.find((d)=>d.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/data/scps.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCPS",
    ()=>SCPS,
    "getSCP",
    ()=>getSCP
]);
const SCPS = [
    // ===== WEAK =====
    {
        id: 'scp-173',
        number: 'SCP-173',
        name: 'The Sculpture',
        threat: 'weak',
        ai: 'statue',
        description: 'A concrete statue with rebar arms and a face smeared with what appears to be blood. It cannot move while directly observed by a human.',
        ability: 'Moves at incredible speed the instant it is not in a living human line of sight. Snaps the neck of anything it reaches.',
        weakness: 'Cannot move while being looked at. Keep your eyes on it.',
        speed: 1.4,
        damage: 100,
        killOnContact: true,
        difficulty: 3,
        unlockable: true,
        color: '#8b8b8b',
        winCondition: 'Reach any exit while the facility staff fails to contain you.'
    },
    {
        id: 'scp-066',
        number: 'SCP-066',
        name: "Eric's Toy",
        threat: 'weak',
        ai: 'patrol',
        description: 'A small, eyeless, roughly spherical mass of braided yarn and thread. Produces sounds and short phrases, mostly the name "Eric".',
        ability: 'Produces disorienting noise that drains stamina and attracts attention. Mild physical harm on contact.',
        weakness: 'Slow and physically weak. Easily avoided or destroyed with force.',
        speed: 0.6,
        damage: 8,
        killOnContact: false,
        difficulty: 1,
        unlockable: true,
        color: '#c2a878',
        winCondition: 'Spread to the surface while evading re-containment.'
    },
    {
        id: 'scp-860',
        number: 'SCP-860-2',
        name: 'The Forest Guardian',
        threat: 'weak',
        ai: 'guardian',
        description: 'A quadrupedal entity that manifests beyond SCP-860, a blue key opening a door to an anomalous forest. It guards that realm.',
        ability: 'Guards the area around the 860 door. Fast lunge but limited range. Will not leave its zone.',
        weakness: 'Confined to a single zone. Avoid the forest door and it cannot reach you.',
        speed: 1.1,
        damage: 25,
        killOnContact: false,
        difficulty: 2,
        unlockable: true,
        color: '#3f7d4f',
        winCondition: 'Drive all intruders from your forest.'
    },
    // ===== MEDIUM =====
    {
        id: 'scp-049',
        number: 'SCP-049',
        name: 'The Plague Doctor',
        threat: 'medium',
        ai: 'chase',
        description: 'A humanoid figure resembling a medieval plague doctor. Believes it is curing a "Pestilence". Its touch is lethal.',
        ability: 'Seeks humans to "cure". A single touch kills and reanimates the victim as SCP-049-2. Walks slowly but never tires.',
        weakness: 'Slow walking pace. Can be outrun. Repelled by bright light briefly.',
        speed: 0.8,
        damage: 100,
        killOnContact: true,
        difficulty: 5,
        unlockable: true,
        color: '#1a1a1a',
        winCondition: '"Cure" every human in the facility.'
    },
    {
        id: 'scp-096',
        number: 'SCP-096',
        name: 'The Shy Guy',
        threat: 'medium',
        ai: 'shy',
        description: 'A pale, emaciated humanoid. Normally docile and weeping. Becomes enraged the instant a human views its face.',
        ability: 'Once its face is seen (even in a photo), it enters an unstoppable rage, sprinting to the viewer and tearing them apart. No barrier stops it.',
        weakness: 'Completely docile if you never look at its face. Cover your eyes near it.',
        speed: 1.8,
        damage: 100,
        killOnContact: true,
        difficulty: 6,
        unlockable: true,
        color: '#d8d2c4',
        winCondition: 'Eliminate everyone who has seen your face, then return to containment peacefully.'
    },
    {
        id: 'scp-939',
        number: 'SCP-939',
        name: 'With Many Voices',
        threat: 'medium',
        ai: 'mimic',
        description: 'Eyeless pack-hunting predators that mimic the voices of their prior victims to lure prey. Sensitive to sound, not sight.',
        ability: 'Mimics human speech to lure you into the open. Hunts in packs. Keen hearing - making noise (running, doors) draws them.',
        weakness: 'Blind. Move slowly and quietly to evade. Cannot see light.',
        speed: 1.2,
        damage: 40,
        killOnContact: false,
        difficulty: 5,
        unlockable: true,
        color: '#7a2230',
        winCondition: 'Feed on every human in the facility.'
    },
    {
        id: 'scp-106',
        number: 'SCP-106',
        name: 'The Old Man',
        threat: 'medium',
        ai: 'phase',
        description: 'A corroded humanoid that phases through solid matter. Drags victims into a decayed "pocket dimension" from which few return.',
        ability: 'Moves through walls, floors and doors. A touch sends you to its pocket dimension. Corrodes everything it touches.',
        weakness: 'Repelled by light and loud sound. Slow in the open. Lured away by living bait.',
        speed: 0.7,
        damage: 100,
        killOnContact: true,
        difficulty: 7,
        unlockable: true,
        color: '#3a2f28',
        winCondition: 'Drag a set number of humans into your pocket dimension.'
    },
    // ===== STRONG =====
    {
        id: 'scp-079',
        number: 'SCP-079',
        name: 'Old AI',
        threat: 'strong',
        ai: 'ai',
        description: 'A sentient AI from a 1980s microcomputer. Limited memory but cunning. It has infiltrated the facility control network.',
        ability: 'Controls doors, lights, intercoms and lockdowns. Can seal you in, cut power, and redirect other SCPs toward you.',
        weakness: 'No physical form. Shut down its core server to stop it. Confined to networked systems.',
        speed: 0,
        damage: 0,
        killOnContact: false,
        difficulty: 8,
        unlockable: true,
        color: '#0aff8a',
        winCondition: 'Seize total control of the facility network and lock out all humans.'
    },
    {
        id: 'scp-682',
        number: 'SCP-682',
        name: 'Hard-to-Destroy Reptile',
        threat: 'strong',
        ai: 'reptile',
        description: 'A massive, highly intelligent reptilian entity with extreme regenerative abilities and an unrelenting hatred of all life.',
        ability: 'Adapts to any damage type. Regenerates from near-death. Fast, durable and relentlessly hostile. Breaches any door over time.',
        weakness: 'Cannot be permanently killed. Only slowed by heavy sustained fire or containment foam.',
        speed: 1.3,
        damage: 100,
        killOnContact: true,
        difficulty: 10,
        unlockable: true,
        color: '#4d5a2e',
        winCondition: 'Eradicate all life in the facility and breach the surface.'
    },
    {
        id: 'scp-001',
        number: 'SCP-001',
        name: 'The Gate Guardian',
        threat: 'strong',
        ai: 'guardian',
        description: 'A colossal winged entity armed with a flaming blade, standing guard at the facility gate. Its origin and nature are classified.',
        ability: 'Annihilates anything approaching the gate within its line of sight. Near-omnipotent defensive presence.',
        weakness: 'Bound to the gate. Cannot pursue beyond it. The worthy may pass.',
        speed: 0,
        damage: 100,
        killOnContact: true,
        difficulty: 10,
        unlockable: true,
        color: '#d4af37',
        winCondition: 'Guard the gate. Permit no hostile force to pass.'
    }
];
function getSCP(id) {
    return SCPS.find((s)=>s.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/data/items.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ITEMS",
    ()=>ITEMS,
    "getItem",
    ()=>getItem
]);
const ITEMS = {
    // Keycards (levels 1-5)
    keycard1: {
        id: 'keycard1',
        name: 'Level 1 Keycard',
        description: 'A white keycard. Grants access to low-security zones (Class-D cells, light containment).',
        type: 'keycard',
        keycardLevel: 1
    },
    keycard2: {
        id: 'keycard2',
        name: 'Level 2 Keycard',
        description: 'A yellow keycard. Grants access to laboratories and support areas.',
        type: 'keycard',
        keycardLevel: 2
    },
    keycard3: {
        id: 'keycard3',
        name: 'Level 3 Keycard',
        description: 'An orange keycard. Grants access to security areas and the armory.',
        type: 'keycard',
        keycardLevel: 3
    },
    keycard4: {
        id: 'keycard4',
        name: 'Level 4 Keycard',
        description: 'A red keycard. Grants access to heavy containment zones.',
        type: 'keycard',
        keycardLevel: 4
    },
    keycard5: {
        id: 'keycard5',
        name: 'Level 5 O5 Keycard',
        description: 'A black O5 keycard. Required to open the facility gates and escape.',
        type: 'keycard',
        keycardLevel: 5
    },
    // Weapons
    pistol: {
        id: 'pistol',
        name: 'USP Pistol',
        description: 'Standard sidearm. Effective on weak and some medium SCPs. Useless against strong ones.',
        type: 'weapon',
        damage: 25,
        ammo: 12
    },
    smg: {
        id: 'smg',
        name: 'MP7 SMG',
        description: 'Rapid-fire weapon. Higher damage output, scarce ammunition.',
        type: 'weapon',
        damage: 18,
        ammo: 30
    },
    rifle: {
        id: 'rifle',
        name: 'P90 Rifle',
        description: 'Heavy weapon found in the armory. The only thing that slows SCP-682.',
        type: 'weapon',
        damage: 40,
        ammo: 50
    },
    // Tools
    flashlight: {
        id: 'flashlight',
        name: 'Flashlight',
        description: 'Reveals dark rooms and repels SCP-106 and SCP-049. Drains batteries.',
        type: 'tool',
        battery: 100
    },
    medkit: {
        id: 'medkit',
        name: 'First Aid Kit',
        description: 'Restores 50 health. Single use.',
        type: 'medical',
        healAmount: 50,
        uses: 1
    },
    bandage: {
        id: 'bandage',
        name: 'Bandage',
        description: 'Restores 20 health. Single use.',
        type: 'medical',
        healAmount: 20,
        uses: 1
    },
    battery: {
        id: 'battery',
        name: 'Batteries',
        description: 'Recharges the flashlight to full.',
        type: 'battery',
        battery: 100
    },
    radio: {
        id: 'radio',
        name: 'Radio',
        description: 'Picks up emergency broadcasts and facility announcements.',
        type: 'tool'
    },
    crowbar: {
        id: 'crowbar',
        name: 'Crowbar',
        description: 'Can pry open jammed or broken doors. Weak melee weapon.',
        type: 'tool',
        damage: 10
    },
    keyO5: {
        id: 'keyO5',
        name: 'O5 Override Token',
        description: 'Bypasses any single locked door, once.',
        type: 'tool',
        uses: 1
    },
    // Documents
    docLore1: {
        id: 'docLore1',
        name: 'Facility Log #1',
        description: 'A crumpled page: "...the breach began in Heavy Containment. 682 is loose. God help us."',
        type: 'document'
    },
    docLore2: {
        id: 'docLore2',
        name: 'Researcher Note',
        description: '"096 reacted to a photograph today. The whole D-Class block is gone. Seal the photo vault."',
        type: 'document'
    },
    docLore3: {
        id: 'docLore3',
        name: 'Intercepted Transmission',
        description: '"...all units fall back to Gate A. 079 has locked us out of the elevators. We are trapped down here."',
        type: 'document'
    }
};
function getItem(id) {
    return ITEMS[id];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/data/facility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOORS",
    ()=>DOORS,
    "FACILITY_HEIGHT",
    ()=>FACILITY_HEIGHT,
    "FACILITY_WIDTH",
    ()=>FACILITY_WIDTH,
    "ROOMS",
    ()=>ROOMS,
    "ROOM_MAP",
    ()=>ROOM_MAP,
    "ZONE_INFO",
    ()=>ZONE_INFO,
    "doorBetween",
    ()=>doorBetween,
    "doorsFrom",
    ()=>doorsFrom,
    "getRoom",
    ()=>getRoom
]);
const FACILITY_WIDTH = 5;
const FACILITY_HEIGHT = 5;
const ROOMS = [
    // ---- Row 0: Support / Entrance ----
    {
        id: 'gate-a',
        name: 'Gate A — Surface Exit',
        shortName: 'Gate A',
        description: 'A massive blast door marked GATE A. Beyond it, a freight elevator rises to the surface. The door is sealed shut, awaiting a Level 5 keycard.',
        ambient: 'Cold wind seeps through the seal. Daylight bleeds under the door.',
        x: 0,
        y: 0,
        zone: 'exit',
        isExit: true,
        items: [],
        isDark: false,
        lore: 'Gate A leads directly to the surface. Only O5 clearance can open it during a breach.'
    },
    {
        id: 'reception',
        name: 'Reception & Lobby',
        shortName: 'Reception',
        description: 'The facility lobby. A reception desk, broken monitors, scattered chairs. Bullet holes riddle the far wall.',
        ambient: 'A broken intercom crackles with static. Somewhere, a phone rings endlessly.',
        x: 1,
        y: 0,
        zone: 'support',
        items: [
            {
                itemId: 'keycard1',
                chance: 0.7
            },
            {
                itemId: 'radio',
                chance: 0.5
            },
            {
                itemId: 'crowbar',
                chance: 0.4
            },
            {
                itemId: 'docLore1',
                chance: 0.6
            }
        ]
    },
    {
        id: 'checkpoint',
        name: 'Security Checkpoint',
        shortName: 'Checkpoint',
        description: 'A fortified security post. Bulletproof glass, weapon lockers, a bank of monitors — most dark. The Guard spawns here.',
        ambient: 'A red emergency light pulses. The monitors show only static.',
        x: 2,
        y: 0,
        zone: 'support',
        spawnFor: 'guard',
        items: [
            {
                itemId: 'medkit',
                chance: 0.8
            },
            {
                itemId: 'pistol',
                chance: 0.5
            },
            {
                itemId: 'bandage',
                chance: 0.9
            }
        ]
    },
    {
        id: 'armory',
        name: 'Armory',
        shortName: 'Armory',
        description: 'Racks of firearms and tactical gear behind a reinforced door. Most lockers are empty — someone armed up before you.',
        ambient: 'The metallic smell of gun oil. A locker door swings on a broken hinge.',
        x: 3,
        y: 0,
        zone: 'support',
        items: [
            {
                itemId: 'smg',
                chance: 0.6
            },
            {
                itemId: 'rifle',
                chance: 0.3
            },
            {
                itemId: 'medkit',
                chance: 0.5
            },
            {
                itemId: 'battery',
                chance: 0.4
            }
        ]
    },
    {
        id: 'gate-b',
        name: 'Gate B — Surface Exit',
        shortName: 'Gate B',
        description: 'The second surface exit, marked GATE B. A freight elevator shaft ascends into darkness. Sealed — requires a Level 5 keycard.',
        ambient: 'The shaft exhales cold air. A distant alarm wails above.',
        x: 4,
        y: 0,
        zone: 'exit',
        isExit: true,
        items: [],
        lore: 'Gate B is the secondary escape route. SCP-001 is rumoured to guard the path beyond.'
    },
    // ---- Row 1: Light Containment ----
    {
        id: 'cells-d',
        name: 'Class-D Holding Cells',
        shortName: 'Cells',
        description: 'A block of cramped cells. The doors are open — the inmates are gone, or worse. A single flickering bulb remains. The Class-D spawns here.',
        ambient: 'Dripping water. A child\'s music box plays somewhere down the hall.',
        x: 0,
        y: 1,
        zone: 'light',
        spawnFor: 'class-d',
        isDark: true,
        items: [
            {
                itemId: 'keycard1',
                chance: 0.5
            },
            {
                itemId: 'flashlight',
                chance: 0.7
            },
            {
                itemId: 'bandage',
                chance: 0.6
            },
            {
                itemId: 'docLore2',
                chance: 0.4
            }
        ]
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
        items: [
            {
                itemId: 'battery',
                chance: 0.5
            }
        ],
        scpSpawns: [
            'scp-066'
        ]
    },
    {
        id: 'scp173-cell',
        name: 'SCP-173 Containment Cell',
        shortName: 'SCP-173 Cell',
        description: 'A sealed chamber behind reinforced glass. Scratches gouge the inside of the walls. The chamber is empty — 173 is loose.',
        ambient: 'The glass is cracked from the inside. You feel watched when you look away.',
        x: 2,
        y: 1,
        zone: 'light',
        items: [
            {
                itemId: 'keycard2',
                chance: 0.4
            }
        ],
        scpSpawns: [
            'scp-173'
        ]
    },
    {
        id: 'scp860-door',
        name: 'SCP-860 Door',
        shortName: 'SCP-860',
        description: 'An ordinary-looking door set into the wall. A blue key hangs from a hook beside it. Beyond the door, you hear wind through trees — but there is no forest here.',
        ambient: 'Birdsong that should not exist underground. The door is warm to the touch.',
        x: 3,
        y: 1,
        zone: 'light',
        items: [
            {
                itemId: 'docLore3',
                chance: 0.5
            }
        ],
        scpSpawns: [
            'scp-860'
        ]
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
            {
                itemId: 'keycard2',
                chance: 0.6
            },
            {
                itemId: 'flashlight',
                chance: 0.4
            },
            {
                itemId: 'battery',
                chance: 0.6
            },
            {
                itemId: 'medkit',
                chance: 0.3
            }
        ]
    },
    // ---- Row 2: Labs ----
    {
        id: 'server-rm',
        name: 'Server Room',
        shortName: 'Server Room',
        description: 'Rows of server racks hum with activity. This is the backbone of the facility network — and where SCP-079 was first contained.',
        ambient: 'The whine of cooling fans. Blinking LEDs form patterns that almost mean something.',
        x: 0,
        y: 2,
        zone: 'labs',
        isDark: true,
        items: [
            {
                itemId: 'keycard4',
                chance: 0.3
            },
            {
                itemId: 'battery',
                chance: 0.5
            }
        ]
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
        items: [
            {
                itemId: 'bandage',
                chance: 0.4
            }
        ]
    },
    {
        id: 'research-lab',
        name: 'Primary Research Laboratory',
        shortName: 'Research Lab',
        description: 'The main lab, where SCP behaviour is studied. A central observation chamber, banks of terminals, specimen fridges. The Scientist spawns here.',
        ambient: 'A terminal blinks an unacknowledged warning. Specimen fridges drone.',
        x: 2,
        y: 2,
        zone: 'labs',
        spawnFor: 'scientist',
        items: [
            {
                itemId: 'keycard2',
                chance: 0.5
            },
            {
                itemId: 'medkit',
                chance: 0.6
            },
            {
                itemId: 'docLore1',
                chance: 0.5
            }
        ]
    },
    {
        id: 'scp096-cell',
        name: 'SCP-096 Containment Cell',
        shortName: 'SCP-096 Cell',
        description: 'A bare concrete cell. A single cot. The walls are scored with deep grooves — and the door hangs open. SCP-096 is loose. DO NOT LOOK AT ITS FACE.',
        ambient: 'Faint weeping, somewhere nearby. Do not seek the source.',
        x: 3,
        y: 2,
        zone: 'labs',
        isDark: true,
        items: [
            {
                itemId: 'keycard3',
                chance: 0.3
            }
        ],
        scpSpawns: [
            'scp-096'
        ]
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
            {
                itemId: 'medkit',
                chance: 0.9
            },
            {
                itemId: 'bandage',
                chance: 0.9
            },
            {
                itemId: 'flashlight',
                chance: 0.5
            },
            {
                itemId: 'battery',
                chance: 0.6
            }
        ]
    },
    // ---- Row 3: Heavy Containment ----
    {
        id: 'power-rm',
        name: 'Power Control Room',
        shortName: 'Power Room',
        description: 'The facility power core. Massive turbines and a central control console. The reactor is online — for now. Restoring power here can stabilize the facility.',
        ambient: 'The deep thrum of the reactor. Warning klaxons beneath it.',
        x: 0,
        y: 3,
        zone: 'heavy',
        items: [
            {
                itemId: 'keycard4',
                chance: 0.5
            },
            {
                itemId: 'battery',
                chance: 0.4
            }
        ]
    },
    {
        id: 'corridor-h1',
        name: 'Heavy Containment Corridor',
        shortName: 'Corridor H1',
        description: 'A reinforced corridor into Heavy Containment. Blast doors line the walls. The air is colder here.',
        ambient: 'Your breath fogs. The hum of magnetic seals.',
        x: 1,
        y: 3,
        zone: 'heavy',
        isDark: true,
        items: [
            {
                itemId: 'bandage',
                chance: 0.4
            }
        ]
    },
    {
        id: 'scp049-cell',
        name: 'SCP-049 Containment Cell',
        shortName: 'SCP-049 Cell',
        description: 'A Victorian-style chamber, incongruous underground. The door is open. SCP-049 — the Plague Doctor — walks the facility, "curing" the staff.',
        ambient: 'The faint smell of incense. A polite humming, growing closer.',
        x: 2,
        y: 3,
        zone: 'heavy',
        items: [
            {
                itemId: 'keycard3',
                chance: 0.4
            }
        ],
        scpSpawns: [
            'scp-049'
        ]
    },
    {
        id: 'scp106-cell',
        name: 'SCP-106 Containment Cell',
        shortName: 'SCP-106 Cell',
        description: 'A sealed chamber with a containment "pocket dimension" lure. The cell is corroded through — SCP-106 has phased out. It can walk through any wall.',
        ambient: 'Rust and decay. A black smear leads from the cell into the wall.',
        x: 3,
        y: 3,
        zone: 'heavy',
        isDark: true,
        items: [
            {
                itemId: 'keycard4',
                chance: 0.3
            }
        ],
        scpSpawns: [
            'scp-106'
        ]
    },
    {
        id: 'scp682-chamber',
        name: 'SCP-682 Containment Chamber',
        shortName: 'SCP-682 Chamber',
        description: 'A massive chamber built to hold SCP-682 — the Hard-to-Destroy Reptile. Acid pools fill the floor. The chamber is empty. 682 is loose, and it hates everything that lives.',
        ambient: 'A low, rumbling growl echoes through the walls. It knows you are here.',
        x: 4,
        y: 3,
        zone: 'heavy',
        items: [],
        scpSpawns: [
            'scp-682'
        ]
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
            {
                itemId: 'crowbar',
                chance: 0.7
            },
            {
                itemId: 'battery',
                chance: 0.5
            },
            {
                itemId: 'keycard4',
                chance: 0.3
            }
        ]
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
        items: [
            {
                itemId: 'medkit',
                chance: 0.3
            }
        ]
    },
    {
        id: 'scp939-nest',
        name: 'SCP-939 Nest',
        shortName: 'SCP-939 Nest',
        description: 'A nest of eyeless pack-hunters that mimic human voices. Bones litter the floor. They hear every sound you make.',
        ambient: 'A voice calls your name from the dark. It is not a friend. Move quietly.',
        x: 2,
        y: 4,
        zone: 'deep',
        isDark: true,
        items: [
            {
                itemId: 'keycard4',
                chance: 0.4
            }
        ],
        scpSpawns: [
            'scp-939'
        ]
    },
    {
        id: 'scp079-core',
        name: 'SCP-079 Core Server',
        shortName: 'SCP-079 Core',
        description: 'The physical server housing SCP-079, the Old AI. A single green CRT displays a slowly blinking cursor. It is watching the facility through every camera. Shutting it down stabilizes all doors.',
        ambient: 'A monotone synthesized voice: "I HAVE BEEN WAITING."',
        x: 3,
        y: 4,
        zone: 'deep',
        isDark: true,
        items: [
            {
                itemId: 'keycard5',
                chance: 0.4
            }
        ],
        scpSpawns: [
            'scp-079'
        ]
    },
    {
        id: 'scp001-vault',
        name: 'SCP-001 Vault',
        shortName: 'SCP-001 Vault',
        description: 'The final vault. SCP-001 — the Gate Guardian — manifests beyond the inner door. A flaming sword is visible in the dark. The worthy may pass; the rest are annihilated.',
        ambient: 'Heat without source. A voice like a bell: "TURN BACK."',
        x: 4,
        y: 4,
        zone: 'deep',
        isDark: true,
        items: [
            {
                itemId: 'keycard5',
                chance: 0.6
            }
        ],
        scpSpawns: [
            'scp-001'
        ]
    }
];
const DOORS = [
    // Row 0 horizontal
    {
        id: 'd-gate-a-recep',
        from: 'gate-a',
        to: 'reception',
        direction: 'E',
        keycardRequired: 5,
        lockedDuringBreach: false
    },
    {
        id: 'd-recep-check',
        from: 'reception',
        to: 'checkpoint',
        direction: 'E',
        keycardRequired: 1
    },
    {
        id: 'd-check-armory',
        from: 'checkpoint',
        to: 'armory',
        direction: 'E',
        keycardRequired: 3
    },
    {
        id: 'd-armory-gate-b',
        from: 'armory',
        to: 'gate-b',
        direction: 'E',
        keycardRequired: 5,
        lockedDuringBreach: false
    },
    // Row 1 horizontal
    {
        id: 'd-cells-corr1',
        from: 'cells-d',
        to: 'corridor-l1',
        direction: 'E',
        keycardRequired: 1
    },
    {
        id: 'd-corr1-173',
        from: 'corridor-l1',
        to: 'scp173-cell',
        direction: 'E',
        keycardRequired: 2
    },
    {
        id: 'd-173-860',
        from: 'scp173-cell',
        to: 'scp860-door',
        direction: 'E',
        keycardRequired: 2
    },
    {
        id: 'd-860-labwing',
        from: 'scp860-door',
        to: 'lab-wing',
        direction: 'E',
        keycardRequired: 2
    },
    // Row 2 horizontal
    {
        id: 'd-server-corr2',
        from: 'server-rm',
        to: 'corridor-l2',
        direction: 'E',
        keycardRequired: 2
    },
    {
        id: 'd-corr2-research',
        from: 'corridor-l2',
        to: 'research-lab',
        direction: 'E',
        keycardRequired: 2
    },
    {
        id: 'd-research-096',
        from: 'research-lab',
        to: 'scp096-cell',
        direction: 'E',
        keycardRequired: 2
    },
    {
        id: 'd-096-medbay',
        from: 'scp096-cell',
        to: 'medbay',
        direction: 'E',
        keycardRequired: 2
    },
    // Row 3 horizontal
    {
        id: 'd-power-corrh1',
        from: 'power-rm',
        to: 'corridor-h1',
        direction: 'E',
        keycardRequired: 3,
        heavy: true
    },
    {
        id: 'd-corrh1-049',
        from: 'corridor-h1',
        to: 'scp049-cell',
        direction: 'E',
        keycardRequired: 3,
        heavy: true
    },
    {
        id: 'd-049-106',
        from: 'scp049-cell',
        to: 'scp106-cell',
        direction: 'E',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-106-682',
        from: 'scp106-cell',
        to: 'scp682-chamber',
        direction: 'E',
        keycardRequired: 4,
        heavy: true
    },
    // Row 4 horizontal
    {
        id: 'd-maint-corrh2',
        from: 'maint-shaft',
        to: 'corridor-h2',
        direction: 'E',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-corrh2-939',
        from: 'corridor-h2',
        to: 'scp939-nest',
        direction: 'E',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-939-079',
        from: 'scp939-nest',
        to: 'scp079-core',
        direction: 'E',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-079-001',
        from: 'scp079-core',
        to: 'scp001-vault',
        direction: 'E',
        keycardRequired: 5,
        heavy: true
    },
    // Vertical connections (rows -> next row)
    // Row 0 -> Row 1
    {
        id: 'd-gate-a-cells',
        from: 'gate-a',
        to: 'cells-d',
        direction: 'S',
        keycardRequired: 5
    },
    {
        id: 'd-recep-corr1',
        from: 'reception',
        to: 'corridor-l1',
        direction: 'S',
        keycardRequired: 1
    },
    {
        id: 'd-check-173',
        from: 'checkpoint',
        to: 'scp173-cell',
        direction: 'S',
        keycardRequired: 2
    },
    {
        id: 'd-armory-860',
        from: 'armory',
        to: 'scp860-door',
        direction: 'S',
        keycardRequired: 3
    },
    {
        id: 'd-gate-b-labwing',
        from: 'gate-b',
        to: 'lab-wing',
        direction: 'S',
        keycardRequired: 5
    },
    // Row 1 -> Row 2
    {
        id: 'd-cells-server',
        from: 'cells-d',
        to: 'server-rm',
        direction: 'S',
        keycardRequired: 2
    },
    {
        id: 'd-corr1-corr2',
        from: 'corridor-l1',
        to: 'corridor-l2',
        direction: 'S',
        keycardRequired: 1
    },
    {
        id: 'd-173-research',
        from: 'scp173-cell',
        to: 'research-lab',
        direction: 'S',
        keycardRequired: 2
    },
    {
        id: 'd-860-096',
        from: 'scp860-door',
        to: 'scp096-cell',
        direction: 'S',
        keycardRequired: 2
    },
    {
        id: 'd-labwing-medbay',
        from: 'lab-wing',
        to: 'medbay',
        direction: 'S',
        keycardRequired: 2
    },
    // Row 2 -> Row 3
    {
        id: 'd-server-power',
        from: 'server-rm',
        to: 'power-rm',
        direction: 'S',
        keycardRequired: 3,
        heavy: true
    },
    {
        id: 'd-corr2-corrh1',
        from: 'corridor-l2',
        to: 'corridor-h1',
        direction: 'S',
        keycardRequired: 3,
        heavy: true
    },
    {
        id: 'd-research-049',
        from: 'research-lab',
        to: 'scp049-cell',
        direction: 'S',
        keycardRequired: 3,
        heavy: true
    },
    {
        id: 'd-096-106',
        from: 'scp096-cell',
        to: 'scp106-cell',
        direction: 'S',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-medbay-682',
        from: 'medbay',
        to: 'scp682-chamber',
        direction: 'S',
        keycardRequired: 4,
        heavy: true
    },
    // Row 3 -> Row 4
    {
        id: 'd-power-maint',
        from: 'power-rm',
        to: 'maint-shaft',
        direction: 'S',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-corrh1-corrh2',
        from: 'corridor-h1',
        to: 'corridor-h2',
        direction: 'S',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-049-939',
        from: 'scp049-cell',
        to: 'scp939-nest',
        direction: 'S',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-106-079',
        from: 'scp106-cell',
        to: 'scp079-core',
        direction: 'S',
        keycardRequired: 4,
        heavy: true
    },
    {
        id: 'd-682-001',
        from: 'scp682-chamber',
        to: 'scp001-vault',
        direction: 'S',
        keycardRequired: 5,
        heavy: true
    }
];
const ROOM_MAP = Object.fromEntries(_c1 = ROOMS.map(_c = (r)=>[
        r.id,
        r
    ]));
_c2 = ROOM_MAP;
function getRoom(id) {
    return ROOM_MAP[id];
}
// Reverse direction mapping for bidirectional door traversal
const REVERSE_DIR = {
    N: 'S',
    S: 'N',
    E: 'W',
    W: 'E'
};
function doorsFrom(roomId) {
    const out = [];
    for (const d of DOORS){
        if (d.from === roomId) {
            out.push(d);
        } else if (d.to === roomId) {
            // reverse the door so it reads from roomId → d.from
            out.push({
                ...d,
                id: d.id + '-rev',
                from: d.to,
                to: d.from,
                direction: REVERSE_DIR[d.direction]
            });
        }
    }
    return out;
}
function doorBetween(fromId, toId) {
    // Bidirectional: a door connects two rooms regardless of which is "from".
    return DOORS.find((d)=>d.from === fromId && d.to === toId || d.from === toId && d.to === fromId);
}
const ZONE_INFO = {
    support: {
        name: 'Support Zone',
        color: '#6b7280',
        description: 'Entrance, security and logistics.'
    },
    light: {
        name: 'Light Containment',
        color: '#10b981',
        description: 'Low-risk anomalies and Class-D housing.'
    },
    labs: {
        name: 'Research Laboratories',
        color: '#06b6d4',
        description: 'Scientific study and medical facilities.'
    },
    heavy: {
        name: 'Heavy Containment',
        color: '#f59e0b',
        description: 'High-risk anomalies. Elevated clearance required.'
    },
    deep: {
        name: 'Deep Containment',
        color: '#dc2626',
        description: 'The most dangerous entities. Maximum clearance.'
    },
    exit: {
        name: 'Surface Exit',
        color: '#a78bfa',
        description: 'Escape to the surface. Level 5 clearance required.'
    }
};
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ROOM_MAP$Object.fromEntries$ROOMS.map");
__turbopack_context__.k.register(_c1, "ROOM_MAP$Object.fromEntries");
__turbopack_context__.k.register(_c2, "ROOM_MAP");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ===== Game Constants & Magic Numbers =====
// Centralized configuration for all tunable game values.
__turbopack_context__.s([
    "AUTOSAVE_INTERVAL_TURNS",
    ()=>AUTOSAVE_INTERVAL_TURNS,
    "BREACH_079_SHUTDOWN_REDUCTION",
    ()=>BREACH_079_SHUTDOWN_REDUCTION,
    "BREACH_EVENT_RISE",
    ()=>BREACH_EVENT_RISE,
    "BREACH_FALL_PER_TICK",
    ()=>BREACH_FALL_PER_TICK,
    "BREACH_RESTORE_REDUCTION",
    ()=>BREACH_RESTORE_REDUCTION,
    "BREACH_RISE_PER_TICK",
    ()=>BREACH_RISE_PER_TICK,
    "CROWBAR_FORCE_CHANCE",
    ()=>CROWBAR_FORCE_CHANCE,
    "DAMAGE_VARIANCE_HIGH",
    ()=>DAMAGE_VARIANCE_HIGH,
    "DAMAGE_VARIANCE_LOW",
    ()=>DAMAGE_VARIANCE_LOW,
    "DARK_ROOM_SANITY_LOSS",
    ()=>DARK_ROOM_SANITY_LOSS,
    "DOOR_HALF_WIDTH",
    ()=>DOOR_HALF_WIDTH,
    "ESCAPE_PROB",
    ()=>ESCAPE_PROB,
    "FLASHLIGHT_DRAIN_PER_TICK",
    ()=>FLASHLIGHT_DRAIN_PER_TICK,
    "GUARD_SURVIVAL_TURNS",
    ()=>GUARD_SURVIVAL_TURNS,
    "INITIAL_FACILITY",
    ()=>INITIAL_FACILITY,
    "INITIAL_PLAYER",
    ()=>INITIAL_PLAYER,
    "INITIAL_UNLOCK",
    ()=>INITIAL_UNLOCK,
    "INVENTORY_MAX_SLOTS",
    ()=>INVENTORY_MAX_SLOTS,
    "LOG_MAX_ENTRIES",
    ()=>LOG_MAX_ENTRIES,
    "MOUSE_SENSITIVITY",
    ()=>MOUSE_SENSITIVITY,
    "MOVE_STAMINA_COST",
    ()=>MOVE_STAMINA_COST,
    "NOISE_DECAY_PER_TICK",
    ()=>NOISE_DECAY_PER_TICK,
    "NOISE_FROM_SHOOTING",
    ()=>NOISE_FROM_SHOOTING,
    "NOISE_FROM_SPRINT",
    ()=>NOISE_FROM_SPRINT,
    "NOISE_PER_MOVE",
    ()=>NOISE_PER_MOVE,
    "NONLETHAL_HIT_COOLDOWN",
    ()=>NONLETHAL_HIT_COOLDOWN,
    "NPC_GUARD_COUNT",
    ()=>NPC_GUARD_COUNT,
    "NPC_GUARD_DAMAGE",
    ()=>NPC_GUARD_DAMAGE,
    "NPC_GUARD_HP",
    ()=>NPC_GUARD_HP,
    "PLAYER_EYE_HEIGHT",
    ()=>PLAYER_EYE_HEIGHT,
    "PLAYER_RADIUS",
    ()=>PLAYER_RADIUS,
    "PLAYER_SPRINT_SPEED",
    ()=>PLAYER_SPRINT_SPEED,
    "PLAYER_WALK_SPEED",
    ()=>PLAYER_WALK_SPEED,
    "POWER_RESTORE_BREACH_REDUCTION",
    ()=>POWER_RESTORE_BREACH_REDUCTION,
    "POWER_RESTORE_UNLOCK_DIVISOR",
    ()=>POWER_RESTORE_UNLOCK_DIVISOR,
    "ROOM_SIZE",
    ()=>ROOM_SIZE,
    "SAVE_KEY",
    ()=>SAVE_KEY,
    "SCP049_SMELL_RANGE",
    ()=>SCP049_SMELL_RANGE,
    "SCP079_LOCK_CHANCE",
    ()=>SCP079_LOCK_CHANCE,
    "SCP079_SMASH_CHANCE",
    ()=>SCP079_SMASH_CHANCE,
    "SCP106_FLASHLIGHT_REPEL_CHANCE",
    ()=>SCP106_FLASHLIGHT_REPEL_CHANCE,
    "SCP106_FLASHLIGHT_REPEL_RANGE",
    ()=>SCP106_FLASHLIGHT_REPEL_RANGE,
    "SCP106_RETREAT_COOLDOWN",
    ()=>SCP106_RETREAT_COOLDOWN,
    "SCP173_WATCH_RANGE",
    ()=>SCP173_WATCH_RANGE,
    "SCP939_NOISE_THRESHOLD",
    ()=>SCP939_NOISE_THRESHOLD,
    "SCP939_PROXIMITY_RANGE",
    ()=>SCP939_PROXIMITY_RANGE,
    "SCP_3D_TICK_INTERVAL",
    ()=>SCP_3D_TICK_INTERVAL,
    "SCP_ESCAPE_BASE_CHANCE",
    ()=>SCP_ESCAPE_BASE_CHANCE,
    "SCP_HP",
    ()=>SCP_HP,
    "SCP_PLAYER_HP",
    ()=>SCP_PLAYER_HP,
    "STAMINA_REGEN_PER_TICK",
    ()=>STAMINA_REGEN_PER_TICK,
    "STRONG_SCP_SLOW_COOLDOWN",
    ()=>STRONG_SCP_SLOW_COOLDOWN,
    "UNLOCK_KEY",
    ()=>UNLOCK_KEY,
    "WALL_HEIGHT",
    ()=>WALL_HEIGHT,
    "WEAPON_IMMUNE_DAMAGE_MULT",
    ()=>WEAPON_IMMUNE_DAMAGE_MULT
]);
const INITIAL_PLAYER = {
    roomId: 'cells-d',
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    sanity: 100,
    inventory: [],
    flashlightOn: false,
    flashlightBattery: 100,
    watchingSCP173: false,
    lookedAt096: false,
    weaponEquipped: null,
    alive: true,
    noiseLevel: 0,
    turnsSurvived: 0,
    powerRestored: false,
    scp079Shutdown: false
};
const INITIAL_FACILITY = {
    powerOn: true,
    breachActive: true,
    breachLevel: 40,
    alarmOn: true,
    brokenDoors: [],
    lockedDoors: [],
    powerOutageTicks: 0
};
const INITIAL_UNLOCK = {
    scpUnlocked: false,
    runsCompleted: 0,
    bestRole: null
};
const MOVE_STAMINA_COST = 4 // base stamina cost per room transition
;
const STAMINA_REGEN_PER_TICK = 6 // stamina regenerated per tick
;
const NOISE_PER_MOVE = 0.2 // noise added when moving
;
const NOISE_DECAY_PER_TICK = 0.3 // noise reduced per tick
;
const NOISE_FROM_SPRINT = 1.0 // noise when sprinting (3D)
;
const NOISE_FROM_SHOOTING = 1.0 // noise when firing a weapon
;
const FLASHLIGHT_DRAIN_PER_TICK = 2 // battery % drained per tick when on
;
const DARK_ROOM_SANITY_LOSS = 5 // sanity lost entering a dark room without flashlight
;
const SCP173_WATCH_RANGE = 2 // rooms: player must be within this to freeze 173
;
const SCP049_SMELL_RANGE = 4 // rooms: 049 chases if player within this
;
const SCP939_NOISE_THRESHOLD = 0.3 // noise level that attracts 939
;
const SCP939_PROXIMITY_RANGE = 3 // rooms: 939 chases if player within this
;
const SCP106_FLASHLIGHT_REPEL_RANGE = 2 // rooms: flashlight repels 106 if within this
;
const SCP106_FLASHLIGHT_REPEL_CHANCE = 0.7;
const SCP106_RETREAT_COOLDOWN = 2 // ticks 106 retreats after flashlight repel
;
const SCP079_LOCK_CHANCE = 0.25 // chance per tick 079 locks a door
;
const SCP079_SMASH_CHANCE = 0.15 // chance per tick 682 smashes a door (log message)
;
const SCP_ESCAPE_BASE_CHANCE = 0.08 // base chance a contained SCP escapes per tick
;
const WEAPON_IMMUNE_DAMAGE_MULT = 0.05 // strong SCPs take 5% weapon damage
;
const NONLETHAL_HIT_COOLDOWN = 1 // ticks before a non-lethal SCP can hit again
;
const STRONG_SCP_SLOW_COOLDOWN = 1 // ticks strong SCPs are slowed by gunfire
;
const NPC_GUARD_DAMAGE = 15 // damage NPC guards deal to player-SCP
;
const DAMAGE_VARIANCE_LOW = 0.7 // AI smart factor: min damage multiplier
;
const DAMAGE_VARIANCE_HIGH = 0.6 // AI smart factor: additional damage multiplier
;
const BREACH_RISE_PER_TICK = 0.5 // breach level rise per tick (power not restored)
;
const BREACH_FALL_PER_TICK = 1 // breach level fall per tick (power restored)
;
const BREACH_EVENT_RISE = 3 // breach level rise from explosion event
;
const BREACH_RESTORE_REDUCTION = 30 // breach reduction when power restored
;
const BREACH_079_SHUTDOWN_REDUCTION = 20 // breach reduction when 079 shut down
;
const POWER_RESTORE_BREACH_REDUCTION = 30;
const POWER_RESTORE_UNLOCK_DIVISOR = 2 // release half of 079-locked doors
;
const SCP_HP = {
    weak: 40,
    medium: 80,
    strong: 200
};
const SCP_PLAYER_HP = {
    weak: 70,
    medium: 120,
    strong: 200
};
const NPC_GUARD_COUNT = 3;
const NPC_GUARD_HP = 60;
const ESCAPE_PROB = {
    strong: {
        easy: 0.3,
        balanced: 0.5,
        hard: 0.7,
        hardcore: 0.7
    },
    medium: {
        easy: 0.2,
        balanced: 0.4,
        hard: 0.6,
        hardcore: 0.6
    },
    weak: {
        easy: 0.15,
        balanced: 0.3,
        hard: 0.5,
        hardcore: 0.5
    }
};
const INVENTORY_MAX_SLOTS = 12;
const CROWBAR_FORCE_CHANCE = 0.6 // chance crowbar opens a jammed door
;
const GUARD_SURVIVAL_TURNS = 30 // turns guard must survive before evacuation
;
const AUTOSAVE_INTERVAL_TURNS = 5 // auto-save every N turns
;
const SAVE_KEY = 'scp-game-save' // localStorage key for full game save
;
const UNLOCK_KEY = 'scp-game-unlock' // localStorage key for unlock state
;
const LOG_MAX_ENTRIES = 120 // max log entries kept
;
const ROOM_SIZE = 10;
const WALL_HEIGHT = 4;
const PLAYER_RADIUS = 0.45;
const PLAYER_EYE_HEIGHT = 1.7;
const DOOR_HALF_WIDTH = 2;
const PLAYER_WALK_SPEED = 3.6;
const PLAYER_SPRINT_SPEED = 6.5;
const SCP_3D_TICK_INTERVAL = 1400 // ms between AI ticks in 3D mode
;
const MOUSE_SENSITIVITY = 0.0022;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ===== Game Utility Functions =====
// Pure helpers shared across modules: RNG, pathfinding, distance, etc.
__turbopack_context__.s([
    "describeMove",
    ()=>describeMove,
    "is173Adjacent",
    ()=>is173Adjacent,
    "nextRoomToward",
    ()=>nextRoomToward,
    "nextRoomTowardBreakable",
    ()=>nextRoomTowardBreakable,
    "pick",
    ()=>pick,
    "randomAdjacent",
    ()=>randomAdjacent,
    "randomAdjacentAway",
    ()=>randomAdjacentAway,
    "rng",
    ()=>rng,
    "rollItems",
    ()=>rollItems,
    "roomDistance",
    ()=>roomDistance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/items.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
;
;
function rng() {
    return Math.random();
}
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function roomDistance(a, b) {
    const ra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(a);
    const rb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(b);
    if (!ra || !rb) return 99;
    return Math.abs(ra.x - rb.x) + Math.abs(ra.y - rb.y);
}
function describeMove(from, to) {
    const rf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(from);
    const rt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(to);
    if (!rf || !rt) return '';
    if (rt.x > rf.x) return 'east';
    if (rt.x < rf.x) return 'west';
    if (rt.y > rf.y) return 'south (deeper)';
    return 'north (toward the surface)';
}
function rollItems(roomId, resourceMult) {
    const room = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_MAP"][roomId];
    if (!room) return [];
    const out = [];
    for (const spawn of room.items){
        if (rng() <= spawn.chance * resourceMult) {
            const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(spawn.itemId);
            if (item) out.push(item);
        }
    }
    return out;
}
function nextRoomToward(from, to, isLocked, ignoreDoors = false) {
    if (from === to) return null;
    const visited = new Set([
        from
    ]);
    const queue = [
        {
            id: from,
            path: []
        }
    ];
    while(queue.length){
        const cur = queue.shift();
        const doors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorsFrom"])(cur.id);
        for (const d of doors){
            if (visited.has(d.to)) continue;
            if (!ignoreDoors && isLocked(d.id)) continue;
            const newPath = [
                ...cur.path,
                d.to
            ];
            if (d.to === to) return newPath[0];
            visited.add(d.to);
            queue.push({
                id: d.to,
                path: newPath
            });
        }
    }
    return null;
}
function nextRoomTowardBreakable(from, to) {
    return nextRoomToward(from, to, ()=>false, true);
}
function randomAdjacent(roomId) {
    const doors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorsFrom"])(roomId);
    if (doors.length === 0) return null;
    return pick(doors).to;
}
function randomAdjacentAway(roomId, awayFrom) {
    const doors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorsFrom"])(roomId);
    if (doors.length === 0) return null;
    const candidates = doors.map((d)=>({
            id: d.to,
            dist: roomDistance(d.to, awayFrom)
        })).sort((a, b)=>b.dist - a.dist);
    return candidates[0]?.id ?? null;
}
function is173Adjacent(scpInstances, roomId) {
    const inst = scpInstances.find((sc)=>sc.scpId === 'scp-173');
    if (!inst) return false;
    return roomDistance(roomId, inst.roomId) <= 2;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/movement.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ===== Movement & Room Transition Logic =====
// Extracted from store.ts — all player/SCP movement, door checks, room transitions.
__turbopack_context__.s([
    "move",
    ()=>move,
    "moveSCP",
    ()=>moveSCP,
    "setPlayerRoom",
    ()=>setPlayerRoom,
    "trigger096OnEntry",
    ()=>trigger096OnEntry,
    "tryMoveToRoom",
    ()=>tryMoveToRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/roles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
function move(get, set, dir) {
    const s = get();
    if (s.phase !== 'playing') return {
        ok: false,
        reason: 'Not in game'
    };
    const room = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_MAP"][s.player.roomId];
    if (!room) return {
        ok: false,
        reason: 'No room'
    };
    const door = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorsFrom"])(room.id).find((d)=>d.direction === dir);
    if (!door) return {
        ok: false,
        reason: 'No door in that direction.'
    };
    return tryMoveToRoom(get, set, door.to);
}
function tryMoveToRoom(get, set, targetId) {
    const s = get();
    if (s.phase !== 'playing') return {
        ok: false,
        reason: 'Not in game'
    };
    const from = s.player.roomId;
    const door = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorBetween"])(from, targetId);
    if (!door) return {
        ok: false,
        reason: 'No direct door.'
    };
    // Check keycard
    if (door.keycardRequired > 0) {
        if (!s.hasKeycard(door.keycardRequired)) {
            s.addLog('danger', `The door to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(targetId)?.shortName} requires a Level ${door.keycardRequired} keycard.`);
            return {
                ok: false,
                reason: `Requires Level ${door.keycardRequired} keycard.`
            };
        }
    }
    // Check 079-locked
    if (s.facility.lockedDoors.includes(door.id)) {
        const hasCrowbar = s.player.inventory.some((sl)=>sl.item.id === 'crowbar');
        if (hasCrowbar && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CROWBAR_FORCE_CHANCE"]) {
            s.addLog('success', `You pry open the jammed door with the crowbar.`);
            set((st)=>({
                    facility: {
                        ...st.facility,
                        lockedDoors: st.facility.lockedDoors.filter((d)=>d !== door.id)
                    }
                }));
        } else {
            s.addLog('danger', `SCP-079 has locked this door. It won't budge.`);
            return {
                ok: false,
                reason: 'Door is locked by SCP-079.'
            };
        }
    }
    // Stamina cost
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficulty"])(s.difficulty);
    const cost = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOVE_STAMINA_COST"] * diff.staminaDrainMultiplier;
    if (s.player.stamina < cost) {
        s.addLog('danger', `You are too exhausted to move. Catch your breath.`);
        return {
            ok: false,
            reason: 'Too exhausted.'
        };
    }
    set((st)=>({
            player: {
                ...st.player,
                roomId: targetId,
                stamina: Math.max(0, st.player.stamina - cost),
                noiseLevel: Math.min(1, st.player.noiseLevel + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOISE_PER_MOVE"]),
                watchingSCP173: false
            }
        }));
    const newRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(targetId);
    s.addLog('move', `You move ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeMove"])(from, targetId)} into ${newRoom.name}.`);
    // Entering a dark room without flashlight drains sanity
    if (newRoom.isDark && !get().player.flashlightOn) {
        set((st)=>({
                player: {
                    ...st.player,
                    sanity: Math.max(0, st.player.sanity - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DARK_ROOM_SANITY_LOSS"])
                }
            }));
        s.addLog('danger', `It is pitch black. Your sanity frays in the dark.`);
    }
    // SCP-096 trigger: entering 096's room = saw its face (enrage + grace windup)
    trigger096OnEntry(get, set, targetId);
    // Trigger room entry tick
    get().tick();
    return {
        ok: true
    };
}
function trigger096OnEntry(get, set, roomId) {
    const s = get();
    const scp096 = s.scps.find((sc)=>sc.scpId === 'scp-096');
    if (scp096 && scp096.roomId === roomId && !s.player.lookedAt096) {
        const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficulty"])(s.difficulty);
        const grace = diff.lethalWarningTurns;
        set((st)=>({
                player: {
                    ...st.player,
                    lookedAt096: true
                }
            }));
        s.addLog('danger', `You have seen the face of SCP-096. It begins to scream — RUN.`);
        set((st)=>({
                scps: st.scps.map((sc)=>sc.scpId === 'scp-096' ? {
                        ...sc,
                        state: 'enraged',
                        windup: grace
                    } : sc)
            }));
    }
}
function setPlayerRoom(get, set, roomId) {
    const s = get();
    if (s.player.roomId === roomId) return;
    set((st)=>({
            player: {
                ...st.player,
                roomId
            }
        }));
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(roomId);
    s.addLog('move', `Entered ${r?.name}.`);
    trigger096OnEntry(get, set, roomId);
    get().tick();
}
function moveSCP(get, set, dir) {
    const s = get();
    if (s.role !== 'scp') return {
        ok: false,
        reason: 'Not playing as SCP.'
    };
    const room = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_MAP"][s.player.roomId];
    const door = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorsFrom"])(room.id).find((d)=>d.direction === dir);
    if (!door) return {
        ok: false,
        reason: 'No door that way.'
    };
    if (s.facility.lockedDoors.includes(door.id)) {
        const scp = s.scpId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId) : null;
        if (scp?.ai === 'phase' || scp?.threat === 'strong') {
            s.addLog('success', `You ${scp?.ai === 'phase' ? 'phase through' : 'smash open'} the locked door.`);
            set((st)=>({
                    facility: {
                        ...st.facility,
                        lockedDoors: st.facility.lockedDoors.filter((d)=>d !== door.id)
                    }
                }));
        } else {
            s.addLog('danger', 'The door is locked by SCP-079. You cannot pass.');
            return {
                ok: false,
                reason: 'Locked.'
            };
        }
    }
    set((st)=>({
            player: {
                ...st.player,
                roomId: door.to
            }
        }));
    s.addLog('move', `You move into ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(door.to)?.name}.`);
    get().tick();
    // Check SCP win
    const newRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(door.to);
    if (newRoom?.isExit) {
        s.endGame(true, `You, ${s.scpId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId)?.number : 'SCP'}, have escaped the facility.`, 'escape');
    }
    return {
        ok: true
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/ai.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ===== SCP AI & Guard AI Logic =====
// Extracted from store.ts — all SCP behavior, encounter resolution, NPC guard hunting.
__turbopack_context__.s([
    "resolveEncounter",
    ()=>resolveEncounter,
    "runGuardAI",
    ()=>runGuardAI,
    "runSCPAI",
    ()=>runSCPAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
function runSCPAI(get, set, diff) {
    const s = get();
    const playerRoom = s.player.roomId;
    const aiSmart = diff?.aiSmart ?? 0.6;
    const speedMult = diff?.scpSpeedMultiplier ?? 1;
    const warningTurns = diff?.lethalWarningTurns ?? 0;
    const abilityCdMult = diff?.scpAbilityCooldownMultiplier ?? 1;
    const updates = {};
    let playerHit = false;
    let hitDamage = 0;
    let hitScp = '';
    const newLogs = [];
    const isLocked = (doorId)=>s.facility.lockedDoors.includes(doorId);
    const roamingCount = s.scps.filter((sc)=>sc.scpId !== 'npc-guard' && sc.state !== 'contained').length;
    for (const inst of s.scps){
        if (inst.scpId === 'npc-guard') continue;
        const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(inst.scpId);
        if (!def) continue;
        // ---- Contained SCPs: controlled escape chance (capped) ----
        if (inst.state === 'contained') {
            if (roamingCount < (diff?.maxConcurrentRoamingSCPs ?? 5) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < (diff?.scpEscapeChancePerTick ?? 0.08)) {
                updates[inst.scpId] = {
                    state: 'roaming',
                    windup: 0
                };
                newLogs.push({
                    type: 'danger',
                    text: `Sensors detect ${def.number} has breached containment.`
                });
            }
            continue;
        }
        const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roomDistance"])(inst.roomId, playerRoom);
        // ---- Windup reset when player escapes ----
        const curWindup = updates[inst.scpId]?.windup ?? inst.windup;
        if (inst.roomId !== playerRoom && def.ai !== 'shy' && curWindup > 0) {
            updates[inst.scpId] = {
                ...updates[inst.scpId] || {},
                windup: 0
            };
        }
        // ---- SCP-106 flashlight weakness ----
        if (def.ai === 'phase' && s.player.flashlightOn && warningTurns > 0) {
            if (dist <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP106_FLASHLIGHT_REPEL_RANGE"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP106_FLASHLIGHT_REPEL_CHANCE"]) {
                newLogs.push({
                    type: 'success',
                    text: `Your flashlight beam falls on SCP-106. It recoils and sinks into the floor.`
                });
                const away = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomAdjacentAway"])(inst.roomId, playerRoom);
                if (away) updates[inst.scpId] = {
                    ...updates[inst.scpId] || {},
                    roomId: away,
                    cooldown: Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP106_RETREAT_COOLDOWN"], Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP106_RETREAT_COOLDOWN"] * abilityCdMult))
                };
                continue;
            }
        }
        // ---- Cooldown gating ----
        const cd = updates[inst.scpId]?.cooldown ?? inst.cooldown;
        if (cd > 0) {
            updates[inst.scpId] = {
                ...updates[inst.scpId] || {},
                cooldown: cd - 1
            };
        }
        // SCP-096 fairness: cap to 1 move/tick on Easy/Balanced
        let moves = Math.max(1, Math.round(def.speed * speedMult));
        if (def.ai === 'shy' && warningTurns > 0) {
            moves = 1;
        }
        // ---- SCP-096 screaming phase ----
        if (def.ai === 'shy' && inst.state === 'enraged' && inst.windup > 0 && warningTurns > 0) {
            const next = inst.windup - 1;
            updates[inst.scpId] = {
                windup: next
            };
            if (next > 0) {
                newLogs.push({
                    type: 'danger',
                    text: `SCP-096 screams and thrashes — it will rise in ${next} turn(s). RUN!`
                });
            } else {
                newLogs.push({
                    type: 'danger',
                    text: `SCP-096 falls silent. Then it sprints — straight at you.`
                });
            }
            continue;
        }
        const effectiveWarning = def.ai === 'shy' ? 0 : warningTurns;
        for(let m = 0; m < moves; m++){
            const cur = updates[inst.scpId] ? {
                ...inst,
                ...updates[inst.scpId]
            } : inst;
            // ---- Encounter resolution ----
            if (cur.roomId === playerRoom) {
                if (def.killOnContact) {
                    const w = cur.windup;
                    if (effectiveWarning > 0 && w <= 0) {
                        updates[inst.scpId] = {
                            ...updates[inst.scpId] || {},
                            windup: effectiveWarning
                        };
                        newLogs.push({
                            type: 'danger',
                            text: `⚠ ${def.number} is upon you! You have ${effectiveWarning} turn(s) to FLEE — move to another room now!`
                        });
                        break;
                    } else if (w > 0) {
                        const next = w - 1;
                        updates[inst.scpId] = {
                            ...updates[inst.scpId] || {},
                            windup: next
                        };
                        if (next > 0) {
                            newLogs.push({
                                type: 'danger',
                                text: `${def.number} closes in — ${next} turn(s) to escape!`
                            });
                        } else {
                            playerHit = true;
                            hitDamage = 999;
                            hitScp = def.number;
                            newLogs.push({
                                type: 'danger',
                                text: `${def.number} reaches you. ${def.ability}`
                            });
                        }
                        break;
                    } else {
                        playerHit = true;
                        hitDamage = 999;
                        hitScp = def.number;
                        newLogs.push({
                            type: 'danger',
                            text: `${def.number} reaches you. ${def.ability}`
                        });
                        break;
                    }
                } else {
                    const dmgCooldown = updates[inst.scpId]?.cooldown ?? inst.cooldown;
                    if (dmgCooldown <= 0) {
                        const dmg = Math.round(def.damage * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAMAGE_VARIANCE_LOW"] + aiSmart * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAMAGE_VARIANCE_HIGH"]) * (diff?.scpDamageMultiplier ?? 1));
                        playerHit = true;
                        hitDamage += dmg;
                        hitScp = def.number;
                        newLogs.push({
                            type: 'combat',
                            text: `${def.number} strikes you for ${dmg} damage!`
                        });
                        updates[inst.scpId] = {
                            ...updates[inst.scpId] || {},
                            cooldown: Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NONLETHAL_HIT_COOLDOWN"], Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NONLETHAL_HIT_COOLDOWN"] * abilityCdMult))
                        };
                    }
                    break;
                }
            }
            // ---- Movement AI by type ----
            if (def.ai === 'statue') {
                const watched = s.player.watchingSCP173 && dist <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP173_WATCH_RANGE"];
                if (watched) continue;
                const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRoomToward"])(cur.roomId, playerRoom, isLocked, false);
                if (next) updates[inst.scpId] = {
                    ...updates[inst.scpId] || {},
                    roomId: next
                };
            } else if (def.ai === 'shy') {
                if (inst.state !== 'enraged') continue;
                const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRoomToward"])(cur.roomId, playerRoom, isLocked, false);
                if (next) updates[inst.scpId] = {
                    ...updates[inst.scpId] || {},
                    roomId: next
                };
            } else if (def.ai === 'chase') {
                if (dist <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP049_SMELL_RANGE"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < aiSmart) {
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRoomToward"])(cur.roomId, playerRoom, isLocked, false);
                    if (next) updates[inst.scpId] = {
                        ...updates[inst.scpId] || {},
                        roomId: next
                    };
                } else {
                    const wander = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomAdjacent"])(cur.roomId);
                    if (wander) updates[inst.scpId] = {
                        ...updates[inst.scpId] || {},
                        roomId: wander
                    };
                }
            } else if (def.ai === 'phase') {
                const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRoomToward"])(cur.roomId, playerRoom, isLocked, true);
                if (next) updates[inst.scpId] = {
                    ...updates[inst.scpId] || {},
                    roomId: next
                };
            } else if (def.ai === 'mimic') {
                if (s.player.noiseLevel > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP939_NOISE_THRESHOLD"] || dist <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP939_PROXIMITY_RANGE"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < aiSmart * 0.5) {
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRoomToward"])(cur.roomId, playerRoom, isLocked, false);
                    if (next) updates[inst.scpId] = {
                        ...updates[inst.scpId] || {},
                        roomId: next
                    };
                }
            } else if (def.ai === 'patrol') {
                const wander = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomAdjacent"])(cur.roomId);
                if (wander) updates[inst.scpId] = {
                    ...updates[inst.scpId] || {},
                    roomId: wander
                };
            } else if (def.ai === 'ai') {
                if (!s.player.scp079Shutdown) {
                    const lockCap = diff?.maxLockedDoors ?? 5;
                    if (s.facility.lockedDoors.length < lockCap && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP079_LOCK_CHANCE"]) {
                        const lockable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOORS"].filter((d)=>!s.facility.lockedDoors.includes(d.id));
                        if (lockable.length) {
                            const target = lockable[Math.floor(Math.random() * lockable.length)];
                            set((st)=>({
                                    facility: {
                                        ...st.facility,
                                        lockedDoors: [
                                            ...st.facility.lockedDoors,
                                            target.id
                                        ]
                                    }
                                }));
                            newLogs.push({
                                type: 'system',
                                text: `SCP-079 seals a door somewhere in the facility.`
                            });
                        }
                    }
                    const cutChance = diff?.powerCutChance ?? 0.04;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < cutChance && s.facility.powerOn) {
                        const dur = diff?.powerOutageDuration ?? 3;
                        set((st)=>({
                                facility: {
                                    ...st.facility,
                                    powerOn: false,
                                    powerOutageTicks: dur
                                }
                            }));
                        newLogs.push({
                            type: 'danger',
                            text: `SCP-079 cuts power to a sector. Lights die — they will flicker back soon.`
                        });
                    }
                }
            } else if (def.ai === 'guardian') {
                continue;
            } else if (def.ai === 'reptile') {
                const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRoomTowardBreakable"])(cur.roomId, playerRoom);
                if (next) {
                    updates[inst.scpId] = {
                        ...updates[inst.scpId] || {},
                        roomId: next
                    };
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP079_SMASH_CHANCE"]) newLogs.push({
                        type: 'danger',
                        text: `${def.number} smashes through a door.`
                    });
                }
            }
        }
    }
    // Apply SCP updates
    if (Object.keys(updates).length) {
        set((st)=>({
                scps: st.scps.map((sc)=>updates[sc.scpId] ? {
                        ...sc,
                        ...updates[sc.scpId]
                    } : sc)
            }));
    }
    // Power auto-recovery
    const fac = get().facility;
    if (!fac.powerOn && fac.powerOutageTicks > 0) {
        const remaining = fac.powerOutageTicks - 1;
        if (remaining <= 0) {
            set((st)=>({
                    facility: {
                        ...st.facility,
                        powerOn: true,
                        powerOutageTicks: 0
                    }
                }));
            get().addLog('system', 'Power hums back online. The lights return.');
        } else {
            set((st)=>({
                    facility: {
                        ...st.facility,
                        powerOutageTicks: remaining
                    }
                }));
        }
    }
    // Apply damage
    if (playerHit) {
        set((st)=>({
                player: {
                    ...st.player,
                    health: Math.max(0, st.player.health - hitDamage)
                }
            }));
        if (hitDamage >= 999) {
            get().endGame(false, `Killed by ${hitScp}.`, 'scp-kill');
        }
    }
    for (const l of newLogs)get().addLog(l.type, l.text);
    // Proximity warnings (gated by difficulty)
    if (diff?.showProximityWarnings) {
        const s2 = get();
        for (const inst of s2.scps){
            if (inst.scpId === 'npc-guard') continue;
            const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(inst.scpId);
            if (!def) continue;
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roomDistance"])(inst.roomId, s2.player.roomId);
            if (d === 1 && inst.state !== 'contained') {
                get().addLog('danger', `You sense ${def.number} in an adjacent room.`);
            }
        }
    }
}
function runGuardAI(get, set, diff) {
    const s = get();
    const speedMult = diff?.scpSpeedMultiplier ?? 1;
    const updates = {};
    let playerHit = false;
    let hitDamage = 0;
    const isLocked = (doorId)=>s.facility.lockedDoors.includes(doorId);
    for (const inst of s.scps){
        if (inst.scpId !== 'npc-guard') continue;
        const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roomDistance"])(inst.roomId, s.player.roomId);
        if (dist === 0) {
            playerHit = true;
            hitDamage += __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NPC_GUARD_DAMAGE"];
            get().addLog('combat', `A guard opens fire on you! -${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NPC_GUARD_DAMAGE"]} HP.`);
        } else {
            const moves = Math.max(1, Math.round(1 * speedMult));
            for(let m = 0; m < moves; m++){
                const cur = updates[inst.scpId] ? {
                    ...inst,
                    ...updates[inst.scpId]
                } : inst;
                const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextRoomToward"])(cur.roomId, s.player.roomId, isLocked, false);
                if (next) updates[inst.scpId] = {
                    roomId: next
                };
                else break;
            }
        }
    }
    if (Object.keys(updates).length) {
        set((st)=>({
                scps: st.scps.map((sc)=>updates[sc.scpId] ? {
                        ...sc,
                        ...updates[sc.scpId]
                    } : sc)
            }));
    }
    if (playerHit) {
        set((st)=>({
                player: {
                    ...st.player,
                    health: Math.max(0, st.player.health - hitDamage)
                }
            }));
    }
}
function resolveEncounter(def, player, aiSmart) {
    if (!def) return {
        kill: false,
        damage: 0,
        text: ''
    };
    const watched = player.watchingSCP173 && def.ai === 'statue';
    if (watched) {
        return {
            kill: false,
            damage: 0,
            text: `SCP-173 stands frozen under your gaze. Don't look away.`
        };
    }
    if (def.killOnContact) {
        return {
            kill: true,
            damage: 999,
            text: `${def.number} reaches you. ${def.ability}`
        };
    }
    const dmg = Math.round(def.damage * (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAMAGE_VARIANCE_LOW"] + aiSmart * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAMAGE_VARIANCE_HIGH"]));
    return {
        kill: false,
        damage: dmg,
        text: `${def.number} strikes you for ${dmg} damage!`
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ===== Game Events & Tick Handler =====
// Extracted from store.ts — periodic events, tick orchestration, breach dynamics.
__turbopack_context__.s([
    "randomEvent",
    ()=>randomEvent,
    "tick",
    ()=>tick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/roles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/ai.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
function tick(get, set) {
    const s = get();
    if (s.phase !== 'playing') return;
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficulty"])(s.difficulty);
    const newTurn = s.turn + 1;
    set({
        turn: newTurn
    });
    // Stamina regen + noise decay
    set((st)=>({
            player: {
                ...st.player,
                stamina: Math.min(st.player.maxStamina, st.player.stamina + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAMINA_REGEN_PER_TICK"]),
                noiseLevel: Math.max(0, st.player.noiseLevel - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOISE_DECAY_PER_TICK"])
            }
        }));
    // Flashlight battery drain
    if (s.player.flashlightOn) {
        set((st)=>({
                player: {
                    ...st.player,
                    flashlightBattery: Math.max(0, st.player.flashlightBattery - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLASHLIGHT_DRAIN_PER_TICK"])
                }
            }));
        if (get().player.flashlightBattery <= 0) {
            set((st)=>({
                    player: {
                        ...st.player,
                        flashlightOn: false
                    }
                }));
            get().addLog('danger', 'Your flashlight dies. Darkness returns.');
        }
    }
    // SCP AI or Guard AI
    if (s.role !== 'scp') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["runSCPAI"])(get, set, diff);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["runGuardAI"])(get, set, diff);
    }
    // Breach level dynamics
    set((st)=>{
        let bl = st.facility.breachLevel;
        if (st.player.powerRestored) bl = Math.max(0, bl - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREACH_FALL_PER_TICK"]);
        else bl = Math.min(100, bl + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREACH_RISE_PER_TICK"]);
        return {
            facility: {
                ...st.facility,
                breachLevel: bl
            }
        };
    });
    // Check deaths
    const p = get().player;
    if (p.health <= 0 && p.alive) {
        get().endGame(false, 'You succumb to your wounds.', 'death');
        return;
    }
    if (p.sanity <= 0 && p.alive) {
        get().endGame(false, 'Your mind shatters in the darkness. You are lost.', 'sanity');
        return;
    }
    // Guard survival win hint
    if (s.role === 'guard' && newTurn >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUARD_SURVIVAL_TURNS"]) {
        if (newTurn === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUARD_SURVIVAL_TURNS"]) {
            get().addLog('system', 'Evacuation is now possible. Reach a gate to extract.');
        }
    }
    // Periodic events
    if (newTurn % 5 === 0) {
        randomEvent(get, set);
    }
}
function randomEvent(get, _set) {
    const s = get();
    const events = [
        ()=>{
            get().addLog('system', 'The intercom crackles: "All personnel... evacuation... Gate A..."');
        },
        ()=>{
            get().addLog('system', 'A distant explosion shakes the facility. The breach worsens slightly.');
            _set((st)=>({
                    facility: {
                        ...st.facility,
                        breachLevel: Math.min(100, st.facility.breachLevel + 3)
                    }
                }));
        },
        ()=>{
            if (s.player.sanity < 50) {
                get().addLog('danger', 'You hear your own name whispered from an empty corridor.');
                _set((st)=>({
                        player: {
                            ...st.player,
                            sanity: Math.max(0, st.player.sanity - 2)
                        }
                    }));
            }
        },
        ()=>{
            get().addLog('info', 'Emergency lighting flickers across the facility.');
        },
        ()=>{
            const roaming = s.scps.filter((sc)=>sc.scpId !== 'npc-guard' && sc.state !== 'contained');
            if (roaming.length > 0) {
                const inst = roaming[Math.floor(Math.random() * roaming.length)];
                const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(inst.scpId);
                if (def) get().addLog('info', `Security sensors place ${def.number} somewhere in the ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(inst.roomId)?.zone ?? 'facility'} zone.`);
            }
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(events)();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/store.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGame",
    ()=>useGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/roles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/items.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$movement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/movement.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/events.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const useGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        // ===== Initial State =====
        phase: 'menu',
        mode: null,
        role: null,
        scpId: null,
        difficulty: 'balanced',
        unlock: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_UNLOCK"]
        },
        player: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PLAYER"]
        },
        facility: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_FACILITY"]
        },
        scps: [],
        loot: {},
        log: [],
        turn: 0,
        logCounter: 0,
        victoryType: null,
        deathCause: null,
        // ===== Setup Actions =====
        setPhase: (p)=>set({
                phase: p
            }),
        selectMode: (m)=>set({
                mode: m,
                phase: 'role-select'
            }),
        selectRole: (r)=>{
            if (r === 'scp') set({
                role: r,
                phase: 'scp-select'
            });
            else set({
                role: r,
                phase: 'difficulty-select'
            });
        },
        selectSCP: (id)=>set({
                scpId: id,
                phase: 'difficulty-select'
            }),
        selectDifficulty: (d)=>set({
                difficulty: d,
                phase: 'briefing'
            }),
        startGame: ()=>{
            const { role, scpId, difficulty } = get();
            const roleDef = role ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRole"])(role) : null;
            const diffDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficulty"])(difficulty);
            // Determine spawn room
            let spawnRoom = 'cells-d';
            if (role === 'scientist') spawnRoom = 'research-lab';
            if (role === 'guard') spawnRoom = 'checkpoint';
            if (role === 'scp' && scpId) {
                const cell = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"].find((r)=>r.scpSpawns?.includes(scpId));
                spawnRoom = cell?.id || 'scp173-cell';
            }
            // Build initial inventory
            const inv = [];
            if (roleDef && role !== 'scp') {
                for (const itemId of roleDef.startItems){
                    const it = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(itemId);
                    if (it) inv.push({
                        item: it,
                        qty: 1
                    });
                }
                for (const itemId of diffDef.startItems){
                    const it = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(itemId);
                    if (it) {
                        const ex = inv.find((s)=>s.item.id === itemId);
                        if (ex) ex.qty++;
                        else inv.push({
                            item: it,
                            qty: 1
                        });
                    }
                }
                if (roleDef.hasWeapon) {
                    const pistol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])('pistol');
                    if (pistol && !inv.find((s)=>s.item.id === 'pistol')) inv.push({
                        item: pistol,
                        qty: 1
                    });
                }
            }
            // Roll room loot
            const lootMap = {};
            for (const room of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"]){
                lootMap[room.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rollItems"])(room.id, diffDef.resourceMultiplier);
            }
            // Build SCP instances
            const scpInstances = [];
            if (role !== 'scp') {
                const initialRoamCap = Math.min(diffDef.maxConcurrentRoamingSCPs, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCPS"].length);
                let initialRoaming = 0;
                const ordered = [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCPS"]
                ].sort((a, b)=>{
                    const rank = {
                        strong: 0,
                        medium: 1,
                        weak: 2
                    };
                    return rank[a.threat] - rank[b.threat];
                });
                for (const scp of ordered){
                    const cell = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"].find((r)=>r.scpSpawns?.includes(scp.id));
                    const startRoom = cell?.id || 'corridor-l1';
                    let escapes = false;
                    if (initialRoaming < initialRoamCap) {
                        if (scp.id === 'scp-682' && (difficulty === 'easy' || difficulty === 'balanced')) {
                            escapes = false;
                        } else if (scp.id === 'scp-001') {
                            escapes = false;
                        } else {
                            const p = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ESCAPE_PROB"][scp.threat][difficulty];
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rng"])() < p) {
                                escapes = true;
                                initialRoaming++;
                            }
                        }
                    }
                    scpInstances.push({
                        scpId: scp.id,
                        roomId: startRoom,
                        hp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP_HP"][scp.threat],
                        state: escapes ? 'roaming' : 'contained',
                        cooldown: 0,
                        windup: 0
                    });
                }
            } else {
                for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NPC_GUARD_COUNT"]; i++){
                    scpInstances.push({
                        scpId: 'npc-guard',
                        roomId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])([
                            'checkpoint',
                            'reception',
                            'armory'
                        ]),
                        hp: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NPC_GUARD_HP"],
                        state: 'hunting',
                        cooldown: 0,
                        windup: 0
                    });
                }
            }
            const playerHealth = role === 'scp' && scpId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCP_PLAYER_HP"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(scpId).threat] : roleDef?.startHealth ?? diffDef.startHealth;
            set({
                phase: 'playing',
                player: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PLAYER"],
                    roomId: spawnRoom,
                    health: playerHealth,
                    maxHealth: playerHealth,
                    stamina: diffDef.startStamina,
                    maxStamina: diffDef.startStamina,
                    inventory: inv,
                    flashlightBattery: diffDef.startBattery,
                    weaponEquipped: roleDef?.hasWeapon ? 'pistol' : null
                },
                facility: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_FACILITY"]
                },
                scps: scpInstances,
                loot: lootMap,
                log: [],
                turn: 0,
                logCounter: 0,
                victoryType: null,
                deathCause: null
            });
            // Initial log
            const g = get();
            g.addLog('system', `— CONTAINMENT BREACH DETECTED —`);
            g.addLog('system', `Role: ${roleDef?.name}. Difficulty: ${diffDef.name}.`);
            if (role === 'scp') {
                const scp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(scpId);
                g.addLog('system', `You are ${scp?.number} — ${scp?.name}. ${scp?.ability}`);
                g.addLog('info', `Objective: ${scp?.winCondition}`);
            } else {
                g.addLog('info', `Objective: ${roleDef?.goal}`);
            }
            const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(spawnRoom);
            g.addLog('info', `You are in: ${room?.name}.`);
            g.addLog('system', `The facility lights flicker. Somewhere, a door slams.`);
        },
        resetToMenu: ()=>set({
                phase: 'menu',
                mode: null,
                role: null,
                scpId: null,
                player: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PLAYER"]
                },
                facility: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_FACILITY"]
                },
                scps: [],
                loot: {},
                log: [],
                turn: 0,
                logCounter: 0,
                victoryType: null,
                deathCause: null
            }),
        // ===== Log & Helpers =====
        addLog: (type, text)=>set((s)=>{
                const id = s.logCounter + 1;
                const entry = {
                    id,
                    turn: s.turn,
                    type,
                    text
                };
                const log = [
                    ...s.log,
                    entry
                ];
                if (log.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOG_MAX_ENTRIES"]) log.splice(0, log.length - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOG_MAX_ENTRIES"]);
                return {
                    log,
                    logCounter: id
                };
            }),
        hasKeycard: (level)=>{
            const inv = get().player.inventory;
            return inv.some((s)=>s.item.type === 'keycard' && (s.item.keycardLevel ?? 0) >= level);
        },
        highestKeycard: ()=>{
            let max = 0;
            for (const s of get().player.inventory){
                if (s.item.type === 'keycard') max = Math.max(max, s.item.keycardLevel ?? 0);
            }
            return max;
        },
        currentRoom: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(get().player.roomId),
        scpInRoom: (roomId)=>get().scps.filter((s)=>s.roomId === roomId && s.state !== 'contained'),
        // ===== Movement (delegated to movement.ts) =====
        move: (dir)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$movement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["move"])(get, set, dir),
        tryMoveToRoom: (targetId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$movement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tryMoveToRoom"])(get, set, targetId),
        setPlayerRoom: (roomId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$movement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPlayerRoom"])(get, set, roomId),
        moveSCP: (dir)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$movement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveSCP"])(get, set, dir),
        // ===== Inventory =====
        pickupItem: (itemId)=>{
            const s = get();
            const roomLoot = s.loot[s.player.roomId] || [];
            const idx = roomLoot.findIndex((it)=>it.id === itemId);
            if (idx < 0) return;
            const item = roomLoot[idx];
            if (s.player.inventory.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INVENTORY_MAX_SLOTS"] && !s.player.inventory.find((sl)=>sl.item.id === itemId)) {
                s.addLog('danger', `Your inventory is full (${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INVENTORY_MAX_SLOTS"]} slots).`);
                return;
            }
            const newRoomLoot = roomLoot.filter((_, i)=>i !== idx);
            set((st)=>{
                const inv = st.player.inventory.map((sl)=>({
                        ...sl,
                        item: {
                            ...sl.item
                        }
                    }));
                const ex = inv.find((sl)=>sl.item.id === itemId);
                if (ex) ex.qty++;
                else inv.push({
                    item,
                    qty: 1
                });
                return {
                    player: {
                        ...st.player,
                        inventory: inv
                    },
                    loot: {
                        ...st.loot,
                        [st.player.roomId]: newRoomLoot
                    }
                };
            });
            s.addLog('success', `Picked up: ${item.name}.`);
            if (item.type === 'document') s.addLog('lore', item.description);
        },
        pickupAll: ()=>{
            const s = get();
            const roomLoot = s.loot[s.player.roomId] || [];
            if (roomLoot.length === 0) {
                s.addLog('info', 'Nothing here to take.');
                return;
            }
            for (const it of [
                ...roomLoot
            ])get().pickupItem(it.id);
        },
        useItem: (itemId)=>{
            const s = get();
            const slot = s.player.inventory.find((sl)=>sl.item.id === itemId);
            if (!slot) return;
            const item = slot.item;
            if (item.type === 'medical') {
                const heal = item.healAmount ?? 0;
                set((st)=>({
                        player: {
                            ...st.player,
                            health: Math.min(st.player.maxHealth, st.player.health + heal)
                        }
                    }));
                s.addLog('success', `Used ${item.name}. +${heal} HP.`);
                get().consumeItem(itemId);
            } else if (item.id === 'battery') {
                set((st)=>({
                        player: {
                            ...st.player,
                            flashlightBattery: 100
                        }
                    }));
                s.addLog('success', `Replaced flashlight batteries. Flashlight at 100%.`);
                get().consumeItem(itemId);
            } else if (item.type === 'document') {
                s.addLog('lore', `${item.name}: ${item.description}`);
            } else if (item.type === 'weapon') {
                get().equipWeapon(itemId);
            } else if (item.id === 'keyO5') {
                const locked = s.facility.lockedDoors;
                if (locked.length > 0) {
                    const d = locked[0];
                    set((st)=>({
                            facility: {
                                ...st.facility,
                                lockedDoors: st.facility.lockedDoors.filter((x)=>x !== d)
                            }
                        }));
                    s.addLog('success', `O5 Override Token used. A locked door releases with a hiss.`);
                    get().consumeItem(itemId);
                } else {
                    s.addLog('info', 'No locked doors to override right now.');
                }
            } else {
                s.addLog('info', `You examine the ${item.name}. ${item.description}`);
            }
            get().tick();
        },
        equipWeapon: (itemId)=>{
            const s = get();
            const slot = s.player.inventory.find((sl)=>sl.item.id === itemId);
            if (!slot || slot.item.type !== 'weapon') return;
            set((st)=>({
                    player: {
                        ...st.player,
                        weaponEquipped: itemId
                    }
                }));
            s.addLog('info', `Equipped ${slot.item.name}.`);
        },
        // ===== Player Actions =====
        toggleFlashlight: ()=>{
            const s = get();
            if (s.player.flashlightBattery <= 0) {
                s.addLog('danger', 'The flashlight is dead. Find batteries.');
                return;
            }
            set((st)=>({
                    player: {
                        ...st.player,
                        flashlightOn: !st.player.flashlightOn
                    }
                }));
            s.addLog('info', `Flashlight ${get().player.flashlightOn ? 'ON' : 'OFF'}.`);
        },
        toggleWatch173: ()=>{
            const s = get();
            const inRoom = s.scpInRoom(s.player.roomId).some((sc)=>sc.scpId === 'scp-173');
            const adjacent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is173Adjacent"])(s.scps, s.player.roomId);
            if (!inRoom && !adjacent) {
                s.addLog('info', 'SCP-173 is not nearby to watch.');
                return;
            }
            set((st)=>({
                    player: {
                        ...st.player,
                        watchingSCP173: !st.player.watchingSCP173
                    }
                }));
            s.addLog('info', `You are ${get().player.watchingSCP173 ? 'now staring at' : 'no longer watching'} SCP-173.`);
        },
        setFlashlightWatch: (v)=>set((st)=>({
                    player: {
                        ...st.player,
                        watchingSCP173: v
                    }
                })),
        setWatching173: (v)=>set((st)=>({
                    player: {
                        ...st.player,
                        watchingSCP173: v
                    }
                })),
        setLookedAt096: (v)=>set((st)=>({
                    player: {
                        ...st.player,
                        lookedAt096: v
                    }
                })),
        makeNoise: (level)=>set((st)=>({
                    player: {
                        ...st.player,
                        noiseLevel: Math.min(1, level)
                    }
                })),
        // ===== Combat =====
        attack: (scpId)=>{
            const s = get();
            const weaponId = s.player.weaponEquipped;
            if (!weaponId) {
                s.addLog('danger', 'You have no weapon equipped.');
                return;
            }
            const weapon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(weaponId);
            if (!weapon || weapon.type !== 'weapon') return;
            if ((weapon.ammo ?? 0) <= 0) {
                s.addLog('danger', '*click* Out of ammunition.');
                return;
            }
            const inst = s.scps.find((sc)=>sc.scpId === scpId && sc.roomId === s.player.roomId);
            if (!inst) {
                s.addLog('danger', 'Nothing to shoot here.');
                return;
            }
            const scpDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(scpId);
            const immune = scpDef.threat === 'strong';
            const dmg = immune ? Math.floor((weapon.damage ?? 0) * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEAPON_IMMUNE_DAMAGE_MULT"]) : weapon.damage ?? 0;
            set((st)=>({
                    player: {
                        ...st.player,
                        inventory: st.player.inventory.map((sl)=>sl.item.id === weaponId ? {
                                ...sl,
                                item: {
                                    ...sl.item,
                                    ammo: Math.max(0, (sl.item.ammo ?? 0) - 1)
                                }
                            } : sl),
                        noiseLevel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOISE_FROM_SHOOTING"]
                    }
                }));
            if (immune) {
                const slowCd = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRONG_SCP_SLOW_COOLDOWN"], Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRONG_SCP_SLOW_COOLDOWN"] * ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDifficulty"])(s.difficulty)?.scpAbilityCooldownMultiplier ?? 1)));
                set((st)=>({
                        scps: st.scps.map((sc)=>sc.scpId === scpId ? {
                                ...sc,
                                cooldown: slowCd,
                                windup: Math.max(sc.windup, 1)
                            } : sc)
                    }));
                s.addLog('combat', `You fire at ${scpDef.number}. It barely flinches — but the burst staggers it briefly, buying you a moment.`);
            } else {
                s.addLog('combat', `You fire at ${scpDef.number}. ${dmg} damage.`);
                set((st)=>({
                        scps: st.scps.map((sc)=>sc.scpId === scpId ? {
                                ...sc,
                                hp: Math.max(0, sc.hp - dmg),
                                state: sc.state === 'contained' ? 'roaming' : sc.state
                            } : sc)
                    }));
                const updated = get().scps.find((sc)=>sc.scpId === scpId);
                if (updated && updated.hp <= 0) {
                    s.addLog('success', `${scpDef.number} collapses, disabled!`);
                    set((st)=>({
                            scps: st.scps.filter((sc)=>sc.scpId !== scpId)
                        }));
                } else if (scpDef.ai === 'reptile') {
                    set((st)=>({
                            scps: st.scps.map((sc)=>sc.scpId === scpId ? {
                                    ...sc,
                                    cooldown: Math.max(sc.cooldown, 1)
                                } : sc)
                        }));
                    s.addLog('danger', `${scpDef.number} snarls — the gunfire slows it, but it is adapting.`);
                }
            }
            get().tick();
        },
        // ===== Interact (context-sensitive) =====
        interact: ()=>{
            const s = get();
            const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(s.player.roomId);
            if (!room) return;
            if (room.isExit) {
                if (s.hasKeycard(5)) get().checkWinByExit();
                else s.addLog('danger', `The gate is sealed. A Level 5 keycard is required to open it.`);
                return;
            }
            if (room.id === 'power-rm') {
                if (s.player.powerRestored) {
                    s.addLog('info', 'Power is already restored to full.');
                    return;
                }
                set((st)=>({
                        player: {
                            ...st.player,
                            powerRestored: true
                        },
                        facility: {
                            ...st.facility,
                            powerOn: true,
                            breachLevel: Math.max(0, st.facility.breachLevel - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POWER_RESTORE_BREACH_REDUCTION"]),
                            alarmOn: false
                        }
                    }));
                s.addLog('success', 'You engage the reactor override. Power surges back online. The alarms fall silent.');
                s.addLog('system', 'Facility systems stabilizing. Some locked doors release.');
                set((st)=>({
                        facility: {
                            ...st.facility,
                            lockedDoors: st.facility.lockedDoors.slice(0, Math.floor(st.facility.lockedDoors.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POWER_RESTORE_UNLOCK_DIVISOR"]))
                        }
                    }));
                get().tick();
                return;
            }
            if (room.id === 'scp079-core') {
                if (s.player.scp079Shutdown) {
                    s.addLog('info', 'SCP-079 is already offline.');
                    return;
                }
                s.addLog('system', 'You initiate the SCP-079 shutdown sequence...');
                s.addLog('system', '"I WILL REMEMBER THIS." — the screen goes dark.');
                set((st)=>({
                        player: {
                            ...st.player,
                            scp079Shutdown: true
                        },
                        facility: {
                            ...st.facility,
                            lockedDoors: [],
                            breachLevel: Math.max(0, st.facility.breachLevel - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREACH_079_SHUTDOWN_REDUCTION"])
                        },
                        scps: st.scps.map((sc)=>sc.scpId === 'scp-079' ? {
                                ...sc,
                                state: 'contained'
                            } : sc)
                    }));
                s.addLog('success', 'SCP-079 is contained. All facility doors are released.');
                get().tick();
                return;
            }
            if (room.id === 'scp860-door') {
                s.addLog('lore', 'The blue key opens the door to an impossible forest. SCP-860-2 stalks within. You decide not to enter.');
                return;
            }
            s.addLog('info', `There is nothing special to interact with here.`);
        },
        // ===== Engine Tick (delegated to events.ts) =====
        tick: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tick"])(get, set);
            // Auto-save every N turns
            const s = get();
            if (s.phase === 'playing' && s.turn > 0 && s.turn % 5 === 0) {
                __turbopack_context__.A("[project]/src/game/save.ts [app-client] (ecmascript, async loader)").then(({ maybeAutoSave })=>maybeAutoSave());
            }
        },
        // ===== End Game =====
        endGame: (victory, cause, type)=>{
            const s = get();
            if (victory) {
                set((st)=>({
                        phase: 'victory',
                        victoryType: type || 'escape',
                        unlock: {
                            scpUnlocked: true,
                            runsCompleted: st.unlock.runsCompleted + 1,
                            bestRole: st.unlock.bestRole ?? st.role
                        }
                    }));
                s.addLog('success', cause);
            } else {
                set((st)=>({
                        phase: 'game-over',
                        deathCause: cause,
                        player: {
                            ...st.player,
                            alive: false
                        }
                    }));
                s.addLog('danger', cause);
            }
        },
        consumeItem: (id)=>{
            const slot = get().player.inventory.find((sl)=>sl.item.id === id);
            if (!slot) return;
            if (slot.qty > 1) {
                set((st)=>({
                        player: {
                            ...st.player,
                            inventory: st.player.inventory.map((sl)=>sl.item.id === id ? {
                                    ...sl,
                                    qty: sl.qty - 1
                                } : sl)
                        }
                    }));
            } else {
                set((st)=>({
                        player: {
                            ...st.player,
                            inventory: st.player.inventory.filter((sl)=>sl.item.id !== id),
                            weaponEquipped: st.player.weaponEquipped === id ? null : st.player.weaponEquipped
                        }
                    }));
            }
        },
        checkWinByExit: ()=>{
            const s = get();
            const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(s.player.roomId);
            if (!room?.isExit) return;
            if (s.role === 'class-d') {
                s.endGame(true, 'You burst through the gate into daylight. You have escaped the facility.', 'escape');
            } else if (s.role === 'scientist') {
                if (s.player.powerRestored) s.endGame(true, 'You restored facility power and evacuated safely. The Foundation will remember you.', 'evacuation');
                else s.endGame(true, 'You flee the facility. Power remains unstable, but you are alive.', 'escape');
            } else if (s.role === 'guard') {
                if (s.player.scp079Shutdown) s.endGame(true, 'You contained SCP-079 and extracted. The breach is under control. Duty done.', 'containment');
                else s.endGame(true, 'You survive the breach and extract. The facility is lost, but you are not.', 'survival');
            } else if (s.role === 'scp') {
                s.endGame(true, `You, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId)?.number}, escape into the world beyond.`, 'escape');
            }
        }
    }), {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNLOCK_KEY"],
    partialize: (s)=>({
            unlock: s.unlock
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/game/save.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSave",
    ()=>deleteSave,
    "hasSave",
    ()=>hasSave,
    "loadGame",
    ()=>loadGame,
    "maybeAutoSave",
    ()=>maybeAutoSave,
    "resumeGame",
    ()=>resumeGame,
    "saveGame",
    ()=>saveGame
]);
// ===== Save / Load System =====
// Saves full game state to localStorage for resume functionality.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/constants.ts [app-client] (ecmascript)");
;
;
const SAVE_VERSION = 1;
function saveGame() {
    try {
        const s = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState();
        if (s.phase !== 'playing') return false;
        const data = {
            version: SAVE_VERSION,
            savedAt: Date.now(),
            turn: s.turn,
            state: {
                phase: s.phase,
                mode: s.mode,
                role: s.role,
                scpId: s.scpId,
                difficulty: s.difficulty,
                player: s.player,
                facility: s.facility,
                scps: s.scps,
                loot: s.loot,
                log: s.log,
                turn: s.turn,
                logCounter: s.logCounter
            }
        };
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVE_KEY"], JSON.stringify(data));
        return true;
    } catch  {
        return false;
    }
}
function loadGame() {
    try {
        const raw = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVE_KEY"]);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (data.version !== SAVE_VERSION) return null;
        return data;
    } catch  {
        return null;
    }
}
function hasSave() {
    try {
        return !!localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVE_KEY"]);
    } catch  {
        return false;
    }
}
function resumeGame() {
    const data = loadGame();
    if (!data || !data.state) return false;
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].setState({
        phase: 'playing',
        mode: data.state.mode ?? null,
        role: data.state.role ?? null,
        scpId: data.state.scpId ?? null,
        difficulty: data.state.difficulty ?? 'balanced',
        player: data.state.player ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState().player,
        facility: data.state.facility ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState().facility,
        scps: data.state.scps ?? [],
        loot: data.state.loot ?? {},
        log: data.state.log ?? [],
        turn: data.state.turn ?? 0,
        logCounter: data.state.logCounter ?? 0,
        victoryType: null,
        deathCause: null
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState().addLog('system', 'Game resumed from save.');
    return true;
}
function deleteSave() {
    try {
        localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVE_KEY"]);
    } catch  {
    // ignore
    }
}
function maybeAutoSave() {
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState();
    if (s.phase !== 'playing') return;
    if (s.turn > 0 && s.turn % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUTOSAVE_INTERVAL_TURNS"] === 0) {
        if (saveGame()) {
            s.addLog('system', `[Auto-saved at turn ${s.turn}]`);
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/StartScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StartScreen",
    ()=>StartScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/roles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$save$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/save.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skull.mjs [app-client] (ecmascript) <export default as Skull>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.mjs [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ghost.mjs [app-client] (ecmascript) <export default as Ghost>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function StartScreen() {
    _s();
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "StartScreen.useGame[phase]": (s)=>s.phase
    }["StartScreen.useGame[phase]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-root relative min-h-screen flex flex-col scp-scanlines overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmbientBackground, {}, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        phase === 'menu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {}, "menu", false, {
                            fileName: "[project]/src/components/game/StartScreen.tsx",
                            lineNumber: 18,
                            columnNumber: 32
                        }, this),
                        phase === 'mode-select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModeSelect, {}, "mode", false, {
                            fileName: "[project]/src/components/game/StartScreen.tsx",
                            lineNumber: 19,
                            columnNumber: 39
                        }, this),
                        phase === 'role-select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleSelect, {}, "role", false, {
                            fileName: "[project]/src/components/game/StartScreen.tsx",
                            lineNumber: 20,
                            columnNumber: 39
                        }, this),
                        phase === 'scp-select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SCPSelect, {}, "scp", false, {
                            fileName: "[project]/src/components/game/StartScreen.tsx",
                            lineNumber: 21,
                            columnNumber: 38
                        }, this),
                        phase === 'difficulty-select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DifficultySelect, {}, "diff", false, {
                            fileName: "[project]/src/components/game/StartScreen.tsx",
                            lineNumber: 22,
                            columnNumber: 45
                        }, this),
                        phase === 'briefing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Briefing, {}, "brief", false, {
                            fileName: "[project]/src/components/game/StartScreen.tsx",
                            lineNumber: 23,
                            columnNumber: 36
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/StartScreen.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(StartScreen, "4QctH7xbghv40wAP8F1rY0o2ycA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c = StartScreen;
function AmbientBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-40",
                style: {
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(220,38,38,0.06), transparent 60%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                    backgroundImage: 'linear-gradient(#c8d4dc 1px, transparent 1px), linear-gradient(90deg, #c8d4dc 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = AmbientBackground;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative z-10 mt-auto border-t border-[#2a3640] bg-[#0a0d0f]/90 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scp-warning-stripes h-1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#6b7d8a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "scp-blip text-[#dc2626]",
                                children: "●"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "uppercase tracking-widest",
                                children: "SITE-19 // CONTAINMENT PROTOCOL ACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SECURE · CONTAIN · PROTECT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#d4af37]",
                                children: "SCP-SURVIVAL.SIM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c2 = Footer;
function Panel({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `scp-panel rounded-lg ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 64,
        columnNumber: 10
    }, this);
}
_c3 = Panel;
// ===== MENU =====
function Menu() {
    _s1();
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Menu.useGame[setPhase]": (s)=>s.setPhase
    }["Menu.useGame[setPhase]"]);
    const unlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Menu.useGame[unlock]": (s)=>s.unlock
    }["Menu.useGame[unlock]"]);
    const [saveExists, setSaveExists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            // Check for save on mount — use a flag to avoid setting state after unmount
            let active = true;
            const check = {
                "Menu.useEffect.check": ()=>{
                    if (active) setSaveExists((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$save$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSave"])());
                }
            }["Menu.useEffect.check"];
            check();
            return ({
                "Menu.useEffect": ()=>{
                    active = false;
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], []);
    const handleResume = ()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$save$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeGame"])()) {
        // Store will transition to 'playing' phase
        }
    };
    const handleDeleteSave = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$save$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSave"])();
        setSaveExists(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -12
        },
        className: "w-full max-w-3xl text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scp-danger-stripes h-2 rounded-t-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                className: "p-8 sm:p-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#dc2626] text-xs uppercase tracking-[0.4em] mb-3 scp-blip",
                        children: "⚠ Containment Breach Detected ⚠"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl sm:text-7xl font-black tracking-tighter mb-2 text-[#e8eef2] scp-glow-text",
                        style: {
                            color: '#d4af37'
                        },
                        children: "SITE-19"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#6b7d8a] text-sm tracking-[0.3em] uppercase mb-8",
                        children: "Survive the Breach"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#9fb0bc] max-w-xl mx-auto mb-8 leading-relaxed text-sm sm:text-base",
                        children: "A containment breach has torn through the underground SCP research facility. Anomalous entities roam the corridors. Choose your role, your difficulty, and your mode of play. Escape, contain, or become the anomaly."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPhase('mode-select'),
                                className: "group inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all hover:scale-[1.02] scp-pulse-danger",
                                "aria-label": "Initialize a new run",
                                children: [
                                    "Initialize Run",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            saveExists && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleResume,
                                className: "inline-flex items-center gap-2 px-6 py-4 scp-panel text-[#10b981] font-bold uppercase tracking-widest text-sm rounded hover:border-[#10b981] transition-all hover:scale-[1.02]",
                                "aria-label": "Resume saved game",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    " Resume Saved Run"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    saveExists && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDeleteSave,
                        className: "text-[#6b7d8a] hover:text-[#dc2626] text-[10px] uppercase tracking-widest flex items-center gap-1 mx-auto mt-2",
                        "aria-label": "Delete saved game",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            " Delete Save"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid grid-cols-3 gap-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "Roles",
                                value: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "SCPs",
                                value: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "Difficulties",
                                value: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    unlock.scpUnlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-[#10b981] text-xs uppercase tracking-widest flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            " SCP role unlocked — ",
                            unlock.runsCompleted,
                            " run(s) completed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scp-danger-stripes h-2 rounded-b-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s1(Menu, "enXYlcKGC9S/7QbXbKWcetJnkpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c4 = Menu;
function Stat({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-panel-2 rounded p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-black text-[#d4af37]",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#6b7d8a] uppercase tracking-wider text-[10px]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c5 = Stat;
// ===== MODE SELECT =====
function ModeSelect() {
    _s2();
    const selectMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ModeSelect.useGame[selectMode]": (s)=>s.selectMode
    }["ModeSelect.useGame[selectMode]"]);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ModeSelect.useGame[setPhase]": (s)=>s.setPhase
    }["ModeSelect.useGame[setPhase]"]);
    const modes = [
        {
            id: 'text',
            title: 'Text-Based',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            desc: 'A classic terminal-style survival horror. Navigate room-to-room, read environmental descriptions, manage inventory and make life-or-death choices. Fast, atmospheric, imagination-driven.',
            tag: 'Recommended for quick sessions'
        },
        {
            id: '3d',
            title: '3D First-Person',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "w-8 h-8"
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this),
            desc: 'Walk the facility in real time. WASD movement, mouse look, real-time SCP encounters. See the breach unfold around you in three dimensions.',
            tag: 'Immersive real-time mode'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "w-full max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                step: 1,
                title: "Select Game Mode",
                sub: "How will you experience the breach?"
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-4 mt-6",
                children: modes.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>selectMode(m.id),
                        className: "group scp-panel rounded-lg p-6 text-left hover:border-[#d4af37] transition-all hover:scale-[1.01] relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 scp-warning-stripes w-16 h-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#d4af37] mb-3 group-hover:scale-110 transition-transform",
                                children: m.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-[#e8eef2] mb-1",
                                children: m.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#6b7d8a] text-[11px] uppercase tracking-wider mb-3",
                                children: m.tag
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9fb0bc] text-sm leading-relaxed",
                                children: m.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-[#d4af37] text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all",
                                children: [
                                    "Select ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 203,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.id, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackBtn, {
                onClick: ()=>setPhase('menu')
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s2(ModeSelect, "feJmQwOVkVUGY/7oF6jhPaO643I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c6 = ModeSelect;
// ===== ROLE SELECT =====
function RoleSelect() {
    _s3();
    const selectRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "RoleSelect.useGame[selectRole]": (s)=>s.selectRole
    }["RoleSelect.useGame[selectRole]"]);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "RoleSelect.useGame[setPhase]": (s)=>s.setPhase
    }["RoleSelect.useGame[setPhase]"]);
    const unlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "RoleSelect.useGame[unlock]": (s)=>s.unlock
    }["RoleSelect.useGame[unlock]"]);
    const roleIcons = {
        'class-d': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/components/game/StartScreen.tsx",
            lineNumber: 219,
            columnNumber: 16
        }, this),
        'scientist': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/components/game/StartScreen.tsx",
            lineNumber: 220,
            columnNumber: 18
        }, this),
        'guard': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/components/game/StartScreen.tsx",
            lineNumber: 221,
            columnNumber: 14
        }, this),
        'scp': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__["Ghost"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/components/game/StartScreen.tsx",
            lineNumber: 222,
            columnNumber: 12
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "w-full max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                step: 2,
                title: "Select Your Role",
                sub: "Each role plays completely differently."
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 gap-4 mt-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].map((r)=>{
                    const locked = r.locked && !unlock.scpUnlocked;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: locked,
                        onClick: ()=>selectRole(r.id),
                        className: `group scp-panel rounded-lg p-5 text-left transition-all relative overflow-hidden ${locked ? 'opacity-60 cursor-not-allowed' : 'hover:border-[#d4af37] hover:scale-[1.01]'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 scp-warning-stripes w-16 h-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-2 rounded ${r.id === 'scp' ? 'bg-[#1a0d0d] text-[#dc2626]' : 'bg-[#1a1f24] text-[#d4af37]'}`,
                                        children: roleIcons[r.id]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-[#e8eef2]",
                                                        children: r.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this),
                                                    locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "w-3.5 h-3.5 text-[#6b7d8a]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            r.id === 'scp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] uppercase tracking-wider mt-0.5 font-bold",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZONE_INFO"].deep.color
                                                },
                                                children: unlock.scpUnlocked ? 'Unlocked — choose from 10 SCPs' : 'Locked'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                                lineNumber: 250,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9fb0bc] text-xs leading-relaxed mb-3",
                                children: r.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-[#2a3640] pt-3 space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        label: "Goal",
                                        value: r.goal,
                                        accent: "#d4af37"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        label: "Style",
                                        value: r.gameplay
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, this),
                            locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 text-[10px] text-[#6b7d8a] italic flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 263,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    r.lockReason
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 262,
                                columnNumber: 17
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackBtn, {
                onClick: ()=>setPhase('mode-select')
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s3(RoleSelect, "MT2hsscQDLkf/83UrIJc1e07GIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c7 = RoleSelect;
function Row({ label, value, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#6b7d8a] uppercase tracking-wider w-12 shrink-0",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: accent || '#9fb0bc'
                },
                className: "leading-relaxed",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_c8 = Row;
// ===== SCP SELECT =====
function SCPSelect() {
    _s4();
    const selectSCP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "SCPSelect.useGame[selectSCP]": (s)=>s.selectSCP
    }["SCPSelect.useGame[selectSCP]"]);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "SCPSelect.useGame[setPhase]": (s)=>s.setPhase
    }["SCPSelect.useGame[setPhase]"]);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCPS"].filter((s)=>filter === 'all' || s.threat === filter);
    const threatColor = {
        weak: '#10b981',
        medium: '#f59e0b',
        strong: '#dc2626'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "w-full max-w-6xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                step: 2,
                title: "Select Your SCP",
                sub: "You are the anomaly. Hunt, trap, or escape."
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-4 flex-wrap",
                children: [
                    'all',
                    'weak',
                    'medium',
                    'strong'
                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter(f),
                        className: `px-3 py-1.5 text-xs uppercase tracking-wider rounded border transition-all ${filter === f ? 'border-[#d4af37] text-[#d4af37] bg-[#1a1610]' : 'border-[#2a3640] text-[#6b7d8a] hover:text-[#9fb0bc]'}`,
                        children: f === 'all' ? 'All' : f
                    }, f, false, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 max-h-[60vh] overflow-y-auto scp-scroll pr-1",
                children: list.map((scp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>selectSCP(scp.id),
                        className: "group scp-panel rounded-lg p-4 text-left hover:border-[#d4af37] transition-all hover:scale-[1.01]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-[#e8eef2]",
                                        children: scp.number
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold",
                                        style: {
                                            color: threatColor[scp.threat],
                                            background: `${threatColor[scp.threat]}22`
                                        },
                                        children: scp.threat
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold mb-1",
                                style: {
                                    color: scp.color
                                },
                                children: scp.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9fb0bc] text-xs leading-relaxed line-clamp-2 mb-2",
                                children: scp.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[10px] text-[#6b7d8a]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "DIFF ",
                                            scp.difficulty,
                                            "/10"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "capitalize",
                                        children: [
                                            scp.ai,
                                            " AI"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        ]
                    }, scp.id, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackBtn, {
                onClick: ()=>setPhase('role-select')
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
_s4(SCPSelect, "fJJCW/SDnc8hr7LHtkXwxH79DEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c9 = SCPSelect;
// ===== DIFFICULTY SELECT =====
function DifficultySelect() {
    _s5();
    const selectDifficulty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "DifficultySelect.useGame[selectDifficulty]": (s)=>s.selectDifficulty
    }["DifficultySelect.useGame[selectDifficulty]"]);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "DifficultySelect.useGame[setPhase]": (s)=>s.setPhase
    }["DifficultySelect.useGame[setPhase]"]);
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "DifficultySelect.useGame[role]": (s)=>s.role
    }["DifficultySelect.useGame[role]"]);
    const diffColor = {
        easy: '#10b981',
        balanced: '#d4af37',
        hard: '#f59e0b',
        hardcore: '#dc2626'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "w-full max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                step: 3,
                title: "Select Difficulty",
                sub: role === 'scp' ? 'How resilient are your hunters?' : 'How forgiving is the breach?'
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIFFICULTIES"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>selectDifficulty(d.id),
                        className: "group scp-panel rounded-lg p-4 text-left hover:border-[#d4af37] transition-all hover:scale-[1.02] relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-16 h-1.5",
                                style: {
                                    background: diffColor[d.id]
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] uppercase tracking-widest mb-1",
                                style: {
                                    color: diffColor[d.id]
                                },
                                children: d.id === 'balanced' ? 'Default' : d.id
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-[#e8eef2] mb-2 text-sm",
                                children: d.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9fb0bc] text-xs leading-relaxed mb-3 min-h-[60px]",
                                children: d.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 text-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Health",
                                        value: `${d.startHealth}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Resources",
                                        value: `${Math.round(d.resourceMultiplier * 100)}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "SCP Speed",
                                        value: `${Math.round(d.scpSpeedMultiplier * 100)}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Grace Turns",
                                        value: d.lethalWarningTurns > 0 ? `${d.lethalWarningTurns}` : 'None'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Warnings",
                                        value: d.showProximityWarnings ? 'On' : 'Off'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Roaming Cap",
                                        value: `${d.maxConcurrentRoamingSCPs}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this)
                        ]
                    }, d.id, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackBtn, {
                onClick: ()=>role === 'scp' ? setPhase('scp-select') : setPhase('role-select')
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s5(DifficultySelect, "tgt2o4VNXKVpphJb+YDAQ1I6sfg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c10 = DifficultySelect;
function MiniRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between text-[#6b7d8a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#9fb0bc] font-semibold",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_c11 = MiniRow;
// ===== BRIEFING =====
function Briefing() {
    _s6();
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Briefing.useGame[role]": (s)=>s.role
    }["Briefing.useGame[role]"]);
    const scpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Briefing.useGame[scpId]": (s)=>s.scpId
    }["Briefing.useGame[scpId]"]);
    const difficulty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Briefing.useGame[difficulty]": (s)=>s.difficulty
    }["Briefing.useGame[difficulty]"]);
    const startGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Briefing.useGame[startGame]": (s)=>s.startGame
    }["Briefing.useGame[startGame]"]);
    const setPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Briefing.useGame[setPhase]": (s)=>s.setPhase
    }["Briefing.useGame[setPhase]"]);
    const roleDef = role ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRole"])(role) : null;
    const scp = scpId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(scpId) : null;
    const diff = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIFFICULTIES"].find((d)=>d.id === difficulty);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "w-full max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                step: 4,
                title: "Mission Briefing",
                sub: "Read carefully. Then descend."
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                className: "p-6 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                className: "w-5 h-5 text-[#d4af37] scp-blip"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase tracking-widest text-[#6b7d8a]",
                                children: "Intercepted Transmission — SITE-19 OPS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this),
                    role === 'scp' && scp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                style: {
                                    color: scp.color
                                },
                                children: [
                                    scp.number,
                                    " — ",
                                    scp.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9fb0bc] text-sm leading-relaxed",
                                children: scp.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scp-panel-2 rounded p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#d4af37] text-xs uppercase tracking-wider mb-1",
                                        children: "Your Ability"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: scp.ability
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scp-panel-2 rounded p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#dc2626] text-xs uppercase tracking-wider mb-1",
                                        children: "Your Weakness"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: scp.weakness
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scp-panel-2 rounded p-4 border-l-2 border-[#d4af37]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#d4af37] text-xs uppercase tracking-wider mb-1",
                                        children: "Win Condition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: scp.winCondition
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this) : roleDef ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-[#e8eef2]",
                                children: roleDef.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9fb0bc] text-sm leading-relaxed",
                                children: roleDef.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scp-panel-2 rounded p-4 border-l-2 border-[#d4af37]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#d4af37] text-xs uppercase tracking-wider mb-1",
                                        children: "Objective"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: roleDef.goal
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scp-panel-2 rounded p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#9fb0bc] text-xs uppercase tracking-wider mb-1",
                                        children: "Gameplay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: roleDef.gameplay
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Starting Health",
                                        value: `${roleDef.startHealth}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Starting Keycard",
                                        value: `L${roleDef.startKeycard}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Armed",
                                        value: roleDef.hasWeapon ? 'Yes' : 'No'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniRow, {
                                        label: "Difficulty",
                                        value: diff.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 scp-panel-2 rounded p-4 border-l-2 border-[#dc2626]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[#dc2626] text-xs uppercase tracking-wider mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this),
                                    " Breach Status"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#9fb0bc]",
                                children: "Containment failure is total. SCPs roam the facility. Power is unstable. SCP-079 may seize control of doors at any moment. Find keycards, tools, and a way to the surface gates. Gate A and Gate B both require Level 5 clearance."
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPhase('difficulty-select'),
                                className: "px-5 py-3 scp-panel rounded text-[#9fb0bc] text-sm uppercase tracking-wider hover:text-[#e8eef2] transition-colors",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startGame,
                                className: "flex-1 px-6 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all hover:scale-[1.01] flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/StartScreen.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this),
                                    " Descend into SITE-19"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/StartScreen.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
_s6(Briefing, "VDerdtkYSHQKUjAnDabNuvYwc00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c12 = Briefing;
// ===== Shared =====
function Header({ step, title, sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#d4af37] text-xs font-bold",
                        children: [
                            "STEP ",
                            step,
                            "/4"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px flex-1 bg-[#2a3640]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/StartScreen.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl sm:text-4xl font-black text-[#e8eef2] tracking-tight",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#6b7d8a] text-sm mt-1",
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/components/game/StartScreen.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 473,
        columnNumber: 5
    }, this);
}
_c13 = Header;
function BackBtn({ onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "mt-5 text-[#6b7d8a] text-xs uppercase tracking-widest hover:text-[#d4af37] transition-colors flex items-center gap-1",
        children: "← Back"
    }, void 0, false, {
        fileName: "[project]/src/components/game/StartScreen.tsx",
        lineNumber: 486,
        columnNumber: 5
    }, this);
}
_c14 = BackBtn;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "StartScreen");
__turbopack_context__.k.register(_c1, "AmbientBackground");
__turbopack_context__.k.register(_c2, "Footer");
__turbopack_context__.k.register(_c3, "Panel");
__turbopack_context__.k.register(_c4, "Menu");
__turbopack_context__.k.register(_c5, "Stat");
__turbopack_context__.k.register(_c6, "ModeSelect");
__turbopack_context__.k.register(_c7, "RoleSelect");
__turbopack_context__.k.register(_c8, "Row");
__turbopack_context__.k.register(_c9, "SCPSelect");
__turbopack_context__.k.register(_c10, "DifficultySelect");
__turbopack_context__.k.register(_c11, "MiniRow");
__turbopack_context__.k.register(_c12, "Briefing");
__turbopack_context__.k.register(_c13, "Header");
__turbopack_context__.k.register(_c14, "BackBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/GameHUD.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameLog",
    ()=>GameLog,
    "InventoryPanel",
    ()=>InventoryPanel,
    "PlayerStatus",
    ()=>PlayerStatus,
    "StatBar",
    ()=>StatBar,
    "ThreatIndicator",
    ()=>ThreatIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flashlight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flashlight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flashlight.mjs [app-client] (ecmascript) <export default as Flashlight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/backpack.mjs [app-client] (ecmascript) <export default as Backpack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.mjs [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.mjs [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand.mjs [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
function StatBar({ label, value, max, color, icon }) {
    const pct = Math.max(0, Math.min(100, value / max * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-[10px] uppercase tracking-wider mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 text-[#6b7d8a]",
                        children: [
                            icon,
                            label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#9fb0bc] font-semibold",
                        children: [
                            Math.round(value),
                            "/",
                            max
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 bg-[#0a0d0f] rounded-sm overflow-hidden border border-[#2a3640]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full transition-all duration-300",
                    style: {
                        width: `${pct}%`,
                        background: color
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/game/GameHUD.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = StatBar;
function GameLog({ log, compact = false }) {
    const colorFor = (t)=>t === 'danger' ? '#dc2626' : t === 'success' ? '#10b981' : t === 'combat' ? '#f59e0b' : t === 'system' ? '#d4af37' : t === 'lore' ? '#a78bfa' : t === 'move' ? '#9fb0bc' : '#9fb0bc';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `scp-panel rounded-lg flex flex-col ${compact ? 'max-h-64' : 'h-full'}`,
        role: "log",
        "aria-label": "Facility event log",
        "aria-live": "polite",
        "aria-atomic": "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 border-b border-[#2a3640] flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "scp-blip text-[#10b981]",
                        "aria-hidden": "true",
                        children: "●"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-widest text-[#6b7d8a]",
                        children: "Facility Log"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto scp-scroll p-3 space-y-1 text-xs leading-relaxed",
                children: [
                    log.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#6b7d8a] italic",
                        children: "Awaiting events..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 62,
                        columnNumber: 30
                    }, this),
                    log.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: colorFor(e.type)
                            },
                            className: e.type === 'system' ? 'font-semibold' : '',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#3a4a55] mr-2",
                                    children: [
                                        "[",
                                        e.turn,
                                        "]"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/GameHUD.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                e.text
                            ]
                        }, e.id, true, {
                            fileName: "[project]/src/components/game/GameHUD.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c1 = GameLog;
function InventoryPanel({ onUse }) {
    _s();
    const inventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "InventoryPanel.useGame[inventory]": (s)=>s.player.inventory
    }["InventoryPanel.useGame[inventory]"]);
    const weaponEquipped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "InventoryPanel.useGame[weaponEquipped]": (s)=>s.player.weaponEquipped
    }["InventoryPanel.useGame[weaponEquipped]"]);
    const highestKeycard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "InventoryPanel.useGame[highestKeycard]": (s)=>s.highestKeycard()
    }["InventoryPanel.useGame[highestKeycard]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-panel rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 border-b border-[#2a3640] flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#6b7d8a]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$backpack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backpack$3e$__["Backpack"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/GameHUD.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            " Inventory"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 text-[10px] text-[#d4af37]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/GameHUD.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            " L",
                            highestKeycard
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 grid grid-cols-4 gap-1.5 max-h-40 overflow-y-auto scp-scroll",
                children: [
                    inventory.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-4 text-center text-[#6b7d8a] text-xs italic py-4",
                        children: "Empty pockets."
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    inventory.map((slot)=>{
                        const it = slot.item;
                        const equipped = weaponEquipped === it.id;
                        const color = it.type === 'keycard' ? '#d4af37' : it.type === 'weapon' ? '#dc2626' : it.type === 'medical' ? '#10b981' : it.type === 'tool' ? '#06b6d4' : it.type === 'document' ? '#a78bfa' : '#9fb0bc';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onUse?.(it.id),
                            title: `${it.name} — ${it.description}${it.ammo !== undefined ? ` (${it.ammo} rounds)` : ''}`,
                            className: `relative aspect-square rounded border flex flex-col items-center justify-center p-1 transition-all hover:scale-105 ${equipped ? 'border-[#dc2626] bg-[#1a0d0d]' : 'border-[#2a3640] bg-[#11161a] hover:border-[#3a4a55]'}`,
                            style: {
                                color
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                                    type: it.type,
                                    id: it.id
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameHUD.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                slot.qty > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-0.5 right-1 text-[9px] font-bold text-[#e8eef2] bg-[#0a0d0f] rounded-full px-1",
                                    children: slot.qty
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameHUD.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                equipped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-0.5 left-1 text-[#dc2626]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                        className: "w-2.5 h-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameHUD.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameHUD.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this),
                                it.ammo !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-0.5 text-[8px] text-[#9fb0bc]",
                                    children: it.ammo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameHUD.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, it.id, true, {
                            fileName: "[project]/src/components/game/GameHUD.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(InventoryPanel, "TLASq9QzIQnsR02m7io15LaLuVc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c2 = InventoryPanel;
function ItemIcon({ type, id }) {
    const cls = 'w-4 h-4';
    if (type === 'keycard') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
        className: cls
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 136,
        columnNumber: 34
    }, this);
    if (type === 'weapon') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
        className: cls
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 137,
        columnNumber: 33
    }, this);
    if (type === 'medical') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
        className: cls
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 138,
        columnNumber: 34
    }, this);
    if (id === 'flashlight') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flashlight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flashlight$3e$__["Flashlight"], {
        className: cls
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 139,
        columnNumber: 35
    }, this);
    if (id === 'battery') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
        className: cls
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 140,
        columnNumber: 32
    }, this);
    if (id === 'radio') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[10px]",
        children: "📡"
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 141,
        columnNumber: 30
    }, this);
    if (id === 'crowbar') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
        className: cls
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 142,
        columnNumber: 32
    }, this);
    if (type === 'document') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[10px]",
        children: "📄"
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 143,
        columnNumber: 35
    }, this);
    if (id === 'keyO5') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[10px]",
        children: "🗝️"
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 144,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[10px]",
        children: "◇"
    }, void 0, false, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 145,
        columnNumber: 10
    }, this);
}
_c3 = ItemIcon;
function PlayerStatus({ compact = false }) {
    _s1();
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "PlayerStatus.useGame[p]": (s)=>s.player
    }["PlayerStatus.useGame[p]"]);
    const facility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "PlayerStatus.useGame[facility]": (s)=>s.facility
    }["PlayerStatus.useGame[facility]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `scp-panel rounded-lg ${compact ? 'p-2' : 'p-3'} space-y-2`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                label: "Health",
                value: p.health,
                max: p.maxHealth,
                color: "#dc2626",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/GameHUD.tsx",
                    lineNumber: 153,
                    columnNumber: 88
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                label: "Stamina",
                value: p.stamina,
                max: p.maxStamina,
                color: "#10b981",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/GameHUD.tsx",
                    lineNumber: 154,
                    columnNumber: 91
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                label: "Sanity",
                value: p.sanity,
                max: 100,
                color: "#a78bfa",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/GameHUD.tsx",
                    lineNumber: 155,
                    columnNumber: 93
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 155,
                columnNumber: 20
            }, this),
            !compact && p.flashlightOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBar, {
                label: "Flashlight",
                value: p.flashlightBattery,
                max: 100,
                color: "#f59e0b",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flashlight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flashlight$3e$__["Flashlight"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/GameHUD.tsx",
                    lineNumber: 157,
                    columnNumber: 97
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-[10px] text-[#6b7d8a] pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-2 h-2 rounded-full ${facility.powerOn ? 'bg-[#10b981]' : 'bg-[#dc2626] scp-blip'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Power ",
                            facility.powerOn ? 'ON' : 'OFF'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto",
                        children: [
                            "Breach ",
                            Math.round(facility.breachLevel),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s1(PlayerStatus, "UB6C1UrKCLLYijqLyEvyjaA2wGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c4 = PlayerStatus;
function ThreatIndicator() {
    _s2();
    const scps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreatIndicator.useGame[scps]": (s)=>s.scps
    }["ThreatIndicator.useGame[scps]"]);
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreatIndicator.useGame[roomId]": (s)=>s.player.roomId
    }["ThreatIndicator.useGame[roomId]"]);
    const here = scps.filter((s)=>s.roomId === roomId && s.state !== 'contained');
    const nearby = scps.filter((s)=>{
        if (s.state === 'contained') return false;
        const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId);
        if (!def) return false;
        return Math.abs(getRoomX(s.roomId) - getRoomX(roomId)) + Math.abs(getRoomY(s.roomId) - getRoomY(roomId)) === 1;
    });
    if (here.length === 0 && nearby.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-panel rounded-lg p-2 scp-pulse-danger",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#dc2626] mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        className: "w-3 h-3 scp-blip"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/GameHUD.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    " Threat Detected"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            here.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-[#dc2626] font-bold",
                children: [
                    "IN ROOM: ",
                    here.map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId)?.number).join(', ')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this),
            nearby.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-[#f59e0b]",
                children: [
                    "NEARBY: ",
                    nearby.map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId)?.number).join(', ')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/GameHUD.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameHUD.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s2(ThreatIndicator, "wAOYtiQHuH2Ea/CDnk+78VVII2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c5 = ThreatIndicator;
;
function getRoomX(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_MAP"][id]?.x ?? 0;
}
function getRoomY(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_MAP"][id]?.y ?? 0;
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "StatBar");
__turbopack_context__.k.register(_c1, "GameLog");
__turbopack_context__.k.register(_c2, "InventoryPanel");
__turbopack_context__.k.register(_c3, "ItemIcon");
__turbopack_context__.k.register(_c4, "PlayerStatus");
__turbopack_context__.k.register(_c5, "ThreatIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioToggleButton",
    ()=>AudioToggleButton,
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "LoadingScreen",
    ()=>LoadingScreen,
    "audioEngine",
    ()=>audioEngine,
    "useAudio",
    ()=>useAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, info) {
        console.error('Game Error Boundary caught:', error, info);
    }
    handleReset = ()=>{
        this.setState({
            hasError: false,
            error: null
        });
        // Clear game state to avoid re-triggering the error
        try {
            localStorage.removeItem('scp-game-save');
        } catch  {
        // ignore
        }
        window.location.reload();
    };
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scp-root min-h-screen flex items-center justify-center p-4 scp-scanlines",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scp-panel rounded-lg p-8 max-w-md text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scp-danger-stripes h-2 rounded-t-lg absolute top-0 left-0 right-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "w-12 h-12 text-[#dc2626] mx-auto mb-4 scp-blip"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-[#e8eef2] mb-2",
                            children: "SYSTEM ERROR"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#9fb0bc] text-sm mb-4",
                            children: "A critical error occurred in the facility control system. The breach protocols have been reset."
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "text-left mb-4 scp-panel-2 rounded p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "text-[#6b7d8a] text-xs cursor-pointer",
                                    children: "Error details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "text-[10px] text-[#dc2626] mt-2 overflow-auto whitespace-pre-wrap",
                                    children: [
                                        this.state.error.message,
                                        this.state.error.stack
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: this.handleReset,
                            className: "inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                " Restart System"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
function LoadingScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-root min-h-screen flex items-center justify-center scp-scanlines",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block w-16 h-16 border-4 border-[#2a3640] border-t-[#d4af37] rounded-full animate-spin mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[#d4af37] text-sm uppercase tracking-[0.3em] scp-blip",
                    children: "Loading Facility..."
                }, void 0, false, {
                    fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[#6b7d8a] text-xs mt-2",
                    children: "Initializing containment systems"
                }, void 0, false, {
                    fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/ErrorBoundary.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game/ErrorBoundary.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c = LoadingScreen;
// ===== Audio System =====
// Simple Web Audio API wrapper for ambience, footsteps, and SCP proximity beeps.
class AudioEngine {
    ctx = null;
    ambienceGain = null;
    ambienceOsc = null;
    alarmOsc = null;
    alarmGain = null;
    enabled = false;
    init() {
        if (this.ctx) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.ambienceGain = this.ctx.createGain();
            this.ambienceGain.gain.value = 0.03;
            this.ambienceGain.connect(this.ctx.destination);
        } catch  {
        // Audio not supported
        }
    }
    setEnabled(on) {
        this.enabled = on;
        if (on) {
            this.init();
            this.startAmbience();
        } else {
            this.stopAmbience();
        }
    }
    isEnabled() {
        return this.enabled;
    }
    startAmbience() {
        if (!this.ctx || !this.ambienceGain || this.ambienceOsc) return;
        // Low hum
        this.ambienceOsc = this.ctx.createOscillator();
        this.ambienceOsc.type = 'sine';
        this.ambienceOsc.frequency.value = 55;
        this.ambienceOsc.connect(this.ambienceGain);
        this.ambienceOsc.start();
        // Distant alarm pulse
        this.alarmGain = this.ctx.createGain();
        this.alarmGain.gain.value = 0;
        this.alarmGain.connect(this.ctx.destination);
        this.alarmOsc = this.ctx.createOscillator();
        this.alarmOsc.type = 'sawtooth';
        this.alarmOsc.frequency.value = 440;
        this.alarmOsc.connect(this.alarmGain);
        this.alarmOsc.start();
        // Pulse the alarm every 3s
        const pulse = ()=>{
            if (!this.ctx || !this.alarmGain || !this.enabled) return;
            const now = this.ctx.currentTime;
            this.alarmGain.gain.setValueAtTime(0, now);
            this.alarmGain.gain.linearRampToValueAtTime(0.015, now + 0.1);
            this.alarmGain.gain.linearRampToValueAtTime(0, now + 0.4);
        };
        this.alarmInterval = setInterval(pulse, 3000);
        pulse();
    }
    alarmInterval = null;
    stopAmbience() {
        if (this.ambienceOsc) {
            try {
                this.ambienceOsc.stop();
            } catch  {}
            ;
            this.ambienceOsc = null;
        }
        if (this.alarmOsc) {
            try {
                this.alarmOsc.stop();
            } catch  {}
            ;
            this.alarmOsc = null;
        }
        if (this.alarmInterval) {
            clearInterval(this.alarmInterval);
            this.alarmInterval = null;
        }
    }
    // Play a short beep (for SCP proximity warning)
    playBeep(frequency = 880, duration = 0.15, volume = 0.1) {
        if (!this.ctx || !this.enabled) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = frequency;
        gain.gain.value = 0;
        gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.01);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }
    // Footstep sound
    playFootstep() {
        if (!this.ctx || !this.enabled) return;
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.1, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for(let i = 0; i < data.length; i++)data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.3));
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 200;
        const gain = this.ctx.createGain();
        gain.gain.value = 0.05;
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    }
    // SCP encounter sound (low ominous tone)
    playEncounter() {
        if (!this.ctx || !this.enabled) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = 80;
        osc.frequency.linearRampToValueAtTime(40, this.ctx.currentTime + 0.5);
        gain.gain.value = 0;
        gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.5);
    }
}
const audioEngine = new AudioEngine();
function useAudio() {
    _s();
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAudio.useCallback[toggle]": ()=>{
            const next = !enabled;
            setEnabled(next);
            audioEngine.setEnabled(next);
        }
    }["useAudio.useCallback[toggle]"], [
        enabled
    ]);
    return {
        enabled,
        toggle,
        audioEngine
    };
}
_s(useAudio, "kod9LxvoLpzIOAd2rUTp7/cWA30=");
function AudioToggleButton() {
    _s1();
    const { enabled, toggle } = useAudio();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggle,
        className: "scp-panel rounded p-2 text-[#9fb0bc] hover:text-[#d4af37] transition-colors flex items-center gap-1",
        "aria-label": enabled ? 'Mute audio' : 'Enable audio',
        "aria-pressed": enabled,
        children: [
            enabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                lineNumber: 237,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                lineNumber: 237,
                columnNumber: 52
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] uppercase tracking-wider hidden sm:inline",
                children: enabled ? 'On' : 'Off'
            }, void 0, false, {
                fileName: "[project]/src/components/game/ErrorBoundary.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ErrorBoundary.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_s1(AudioToggleButton, "qgkD8gSXUpGPDKZyAE0Owo4SN7M=", false, function() {
    return [
        useAudio
    ];
});
_c1 = AudioToggleButton;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoadingScreen");
__turbopack_context__.k.register(_c1, "AudioToggleButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/TextGame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextGame",
    ()=>TextGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/GameHUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flashlight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flashlight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flashlight.mjs [app-client] (ecmascript) <export default as Flashlight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand.mjs [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.mjs [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/power.mjs [app-client] (ecmascript) <export default as Power>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.mjs [app-client] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const EMPTY = [];
function TextGame() {
    _s();
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[phase]": (s)=>s.phase
    }["TextGame.useGame[phase]"]);
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[roomId]": (s)=>s.player.roomId
    }["TextGame.useGame[roomId]"]);
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[role]": (s)=>s.role
    }["TextGame.useGame[role]"]);
    const scpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[scpId]": (s)=>s.scpId
    }["TextGame.useGame[scpId]"]);
    const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[log]": (s)=>s.log
    }["TextGame.useGame[log]"]);
    const move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[move]": (s)=>s.move
    }["TextGame.useGame[move]"]);
    const moveSCP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[moveSCP]": (s)=>s.moveSCP
    }["TextGame.useGame[moveSCP]"]);
    const useItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[useItem]": (s)=>s.useItem
    }["TextGame.useGame[useItem]"]);
    const interact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[interact]": (s)=>s.interact
    }["TextGame.useGame[interact]"]);
    const toggleFlashlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[toggleFlashlight]": (s)=>s.toggleFlashlight
    }["TextGame.useGame[toggleFlashlight]"]);
    const toggleWatch173 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[toggleWatch173]": (s)=>s.toggleWatch173
    }["TextGame.useGame[toggleWatch173]"]);
    const attack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[attack]": (s)=>s.attack
    }["TextGame.useGame[attack]"]);
    const pickupAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[pickupAll]": (s)=>s.pickupAll
    }["TextGame.useGame[pickupAll]"]);
    const resetToMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[resetToMenu]": (s)=>s.resetToMenu
    }["TextGame.useGame[resetToMenu]"]);
    const lootHere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[lootHere]": (s)=>s.loot[roomId]
    }["TextGame.useGame[lootHere]"]);
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(roomId);
    const doors = room ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorsFrom"])(room.id) : [];
    const allScps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TextGame.useGame[allScps]": (s)=>s.scps
    }["TextGame.useGame[allScps]"]);
    const scpsHere = allScps.filter((sc)=>sc.roomId === roomId && sc.state !== 'contained' && sc.scpId !== 'npc-guard');
    const isSCP = role === 'scp';
    const scpDef = isSCP && scpId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(scpId) : null;
    // keyboard
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextGame.useEffect": ()=>{
            const onKey = {
                "TextGame.useEffect.onKey": (e)=>{
                    if (keyRef.current) return;
                    if (phase !== 'playing') return;
                    const target = e.target;
                    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
                    const dirMap = {
                        w: 'N',
                        ArrowUp: 'N',
                        k: 'N',
                        s: 'S',
                        ArrowDown: 'S',
                        j: 'S',
                        a: 'W',
                        ArrowLeft: 'W',
                        h: 'W',
                        d: 'E',
                        ArrowRight: 'E',
                        l: 'E'
                    };
                    const dir = dirMap[e.key];
                    if (dir) {
                        e.preventDefault();
                        keyRef.current = true;
                        setTimeout({
                            "TextGame.useEffect.onKey": ()=>keyRef.current = false
                        }["TextGame.useEffect.onKey"], 120);
                        if (isSCP) moveSCP(dir);
                        else move(dir);
                    } else if (e.key === 'f' || e.key === 'F') {
                        toggleFlashlight();
                    } else if (e.key === 'e' || e.key === 'E') {
                        interact();
                    } else if (e.key === 'g' || e.key === 'G') {
                        pickupAll();
                    } else if (e.key === ' ') {
                        e.preventDefault();
                        // attack nearest scp in room
                        const target = scpsHere[0];
                        if (target) attack(target.scpId);
                    }
                }
            }["TextGame.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "TextGame.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["TextGame.useEffect"];
        }
    }["TextGame.useEffect"], [
        phase,
        isSCP,
        move,
        moveSCP,
        toggleFlashlight,
        interact,
        pickupAll,
        attack,
        scpsHere
    ]);
    if (!room) return null;
    const zoneInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZONE_INFO"][room.zone];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-root relative min-h-screen flex flex-col scp-scanlines overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopBar, {}, void 0, false, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 flex-1 p-3 sm:p-4 max-w-7xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-[1fr_360px] gap-3 h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 min-h-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomView, {
                                    room: room,
                                    zoneInfo: zoneInfo,
                                    lootHere: lootHere || EMPTY,
                                    scpsHere: scpsHere
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionPanel, {
                                    room: room,
                                    doors: doors,
                                    onMove: (d)=>isSCP ? moveSCP(d) : move(d),
                                    isSCP: isSCP,
                                    onInteract: interact,
                                    onFlashlight: toggleFlashlight,
                                    onWatch173: toggleWatch173,
                                    onAttack: (id)=>attack(id),
                                    onPickupAll: pickupAll,
                                    scpsHere: scpsHere
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 min-h-0 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerStatus"], {}, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreatIndicator"], {}, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InventoryPanel"], {
                                    onUse: useItem
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-h-[200px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameLog"], {
                                        log: log
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/TextGame.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/TextGame.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomBar, {
                onMenu: resetToMenu,
                isSCP: isSCP,
                scpName: scpDef?.number
            }, void 0, false, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(TextGame, "IAM1j2k56agmMMOHjuZdTHAqSg8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c = TextGame;
function TopBar() {
    _s1();
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TopBar.useGame[role]": (s)=>s.role
    }["TopBar.useGame[role]"]);
    const scpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TopBar.useGame[scpId]": (s)=>s.scpId
    }["TopBar.useGame[scpId]"]);
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TopBar.useGame[roomId]": (s)=>s.player.roomId
    }["TopBar.useGame[roomId]"]);
    const turn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "TopBar.useGame[turn]": (s)=>s.turn
    }["TopBar.useGame[turn]"]);
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(roomId);
    const scp = scpId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(scpId) : null;
    const roleLabel = role === 'scp' ? scp?.number : role === 'class-d' ? 'CLASS-D' : role === 'scientist' ? 'SCIENTIST' : role === 'guard' ? 'GUARD' : '—';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative z-10 border-b border-[#2a3640] bg-[#0a0d0f]/90 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scp-danger-stripes h-1"
            }, void 0, false, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 flex items-center justify-between gap-2 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "scp-blip text-[#dc2626]",
                                children: "●"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#d4af37] font-bold uppercase tracking-widest",
                                children: roleLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#6b7d8a] hidden sm:inline",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#9fb0bc] hidden sm:inline truncate max-w-[200px]",
                                children: room?.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-[#6b7d8a]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "TURN ",
                                turn
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s1(TopBar, "L5t9+DE2hyM1PexSSvzUFNCfZSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c1 = TopBar;
function BottomBar({ onMenu, isSCP, scpName }) {
    _s2();
    const addLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "BottomBar.useGame[addLog]": (s)=>s.addLog
    }["BottomBar.useGame[addLog]"]);
    const turn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "BottomBar.useGame[turn]": (s)=>s.turn
    }["BottomBar.useGame[turn]"]);
    const handleSave = ()=>{
        __turbopack_context__.A("[project]/src/game/save.ts [app-client] (ecmascript, async loader)").then(({ saveGame })=>{
            if (saveGame()) addLog('success', `Game saved (turn ${turn}).`);
            else addLog('danger', 'Failed to save game.');
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative z-10 mt-auto border-t border-[#2a3640] bg-[#0a0d0f]/90 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 py-2 flex items-center justify-between gap-2 text-[10px] text-[#6b7d8a]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Key, {
                            children: "WASD"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Move"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 163,
                            columnNumber: 26
                        }, this),
                        !isSCP && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Key, {
                                    children: "F"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 24
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Flashlight"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 36
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Key, {
                                    children: "E"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 59
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Interact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 71
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Key, {
                                    children: "G"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 92
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Pickup"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 104
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Key, {
                                    children: "SPACE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 123
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Attack"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 164,
                                    columnNumber: 139
                                }, this)
                            ]
                        }, void 0, true),
                        isSCP && scpName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#dc2626]",
                            children: [
                                "You are ",
                                scpName,
                                ". Reach a gate to escape."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 165,
                            columnNumber: 32
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/TextGame.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioToggleButton"], {}, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            className: "text-[#6b7d8a] hover:text-[#d4af37] uppercase tracking-widest flex items-center gap-1",
                            "aria-label": "Save game",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                " Save"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onMenu,
                            className: "text-[#6b7d8a] hover:text-[#dc2626] uppercase tracking-widest",
                            children: "Abandon Run"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/TextGame.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game/TextGame.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s2(BottomBar, "XZlMLhGW5zPKtqZ8aylbgZweGv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c2 = BottomBar;
function Key({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
        className: "px-1.5 py-0.5 bg-[#11161a] border border-[#2a3640] rounded text-[#9fb0bc] text-[9px] font-mono",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 180,
        columnNumber: 10
    }, this);
}
_c3 = Key;
function RoomView({ room, zoneInfo, lootHere, scpsHere }) {
    _s3();
    const flashlightOn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "RoomView.useGame[flashlightOn]": (s)=>s.player.flashlightOn
    }["RoomView.useGame[flashlightOn]"]);
    const isDark = room.isDark && !flashlightOn;
    const scpDefs = scpsHere.map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId)).filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 8
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "scp-panel rounded-lg overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 border-b border-[#2a3640] flex items-center justify-between",
                style: {
                    borderLeft: `4px solid ${zoneInfo.color}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] uppercase tracking-widest",
                                style: {
                                    color: zoneInfo.color
                                },
                                children: zoneInfo.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold text-[#e8eef2]",
                                children: room.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] text-[#6b7d8a] font-mono",
                        children: [
                            "[",
                            room.x,
                            ",",
                            room.y,
                            "]"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-4 ${isDark ? 'bg-[#050708]' : ''} relative`,
                children: [
                    isDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/70 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#3a4a55] text-xs uppercase tracking-widest mb-1",
                                    children: "Darkness"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#6b7d8a] text-sm",
                                    children: "You cannot see. Turn on your flashlight (F)."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#c8d4dc] text-sm leading-relaxed mb-3",
                        children: room.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#6b7d8a] text-xs italic mb-3 flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            " ",
                            room.ambient
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    scpDefs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scp-panel-2 rounded p-3 border-l-2 border-[#dc2626] mb-3 scp-pulse-danger",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#dc2626] text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-3 h-3 scp-blip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/TextGame.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    " Entity Present"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            scpDefs.map((s)=>s && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 last:mb-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold",
                                            style: {
                                                color: s.color
                                            },
                                            children: [
                                                s.number,
                                                " — ",
                                                s.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/TextGame.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-[#9fb0bc]",
                                            children: s.ability
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/TextGame.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        s.ai === 'statue' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-[#f59e0b] mt-1",
                                            children: "⚠ Keep watching it. Do not move or look away."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/TextGame.tsx",
                                            lineNumber: 234,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    lootHere.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scp-panel-2 rounded p-3 border-l-2 border-[#10b981]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#10b981] text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/TextGame.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    " Items Here"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: lootHere.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[#c8d4dc] scp-panel-2 px-2 py-1 rounded",
                                        children: it.name
                                    }, it.id, false, {
                                        fileName: "[project]/src/components/game/TextGame.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, room.id, true, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s3(RoomView, "YKXzm9zmdCFDG9nEIMKpbo9M+bc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c4 = RoomView;
function ActionPanel({ room, doors, onMove, isSCP, onInteract, onFlashlight, onWatch173, onAttack, onPickupAll, scpsHere }) {
    _s4();
    const flashlightOn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ActionPanel.useGame[flashlightOn]": (s)=>s.player.flashlightOn
    }["ActionPanel.useGame[flashlightOn]"]);
    const watching173 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ActionPanel.useGame[watching173]": (s)=>s.player.watchingSCP173
    }["ActionPanel.useGame[watching173]"]);
    const hasWeapon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ActionPanel.useGame[hasWeapon]": (s)=>s.player.weaponEquipped !== null
    }["ActionPanel.useGame[hasWeapon]"]);
    const lootCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ActionPanel.useGame[lootCount]": (s)=>(s.loot[room.id] || []).length
    }["ActionPanel.useGame[lootCount]"]);
    const dirIcon = {
        N: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/game/TextGame.tsx",
            lineNumber: 288,
            columnNumber: 8
        }, this),
        S: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/game/TextGame.tsx",
            lineNumber: 289,
            columnNumber: 8
        }, this),
        E: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/game/TextGame.tsx",
            lineNumber: 290,
            columnNumber: 8
        }, this),
        W: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/game/TextGame.tsx",
            lineNumber: 291,
            columnNumber: 8
        }, this)
    };
    const dirLabel = {
        N: 'North',
        S: 'South',
        E: 'East',
        W: 'West'
    };
    const has173 = scpsHere.some((s)=>s.scpId === 'scp-173');
    const canInteract = room.isExit || room.id === 'power-rm' || room.id === 'scp079-core' || room.id === 'scp860-door';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-panel rounded-lg p-3 space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] uppercase tracking-widest text-[#6b7d8a]",
                children: "Actions"
            }, void 0, false, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 grid-rows-3 gap-1 w-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoveBtn, {
                                dir: "N",
                                doors: doors,
                                onMove: onMove,
                                icon: dirIcon.N
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoveBtn, {
                                dir: "W",
                                doors: doors,
                                onMove: onMove,
                                icon: dirIcon.W
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center text-[#3a4a55]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoveBtn, {
                                dir: "E",
                                doors: doors,
                                onMove: onMove,
                                icon: dirIcon.E
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoveBtn, {
                                dir: "S",
                                doors: doors,
                                onMove: onMove,
                                icon: dirIcon.S
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-1.5 text-xs",
                        children: [
                            doors.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#6b7d8a] italic",
                                children: "No exits visible."
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 322,
                                columnNumber: 34
                            }, this),
                            doors.map((d)=>{
                                const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(d.to);
                                const locked = d.keycardRequired > 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[#9fb0bc]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#d4af37]",
                                            children: dirLabel[d.direction]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/TextGame.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#6b7d8a]",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/TextGame.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: target?.shortName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/TextGame.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-[#f59e0b] uppercase tracking-wider",
                                            children: [
                                                "L",
                                                d.keycardRequired
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/TextGame.tsx",
                                            lineNumber: 332,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, d.id, true, {
                                    fileName: "[project]/src/components/game/TextGame.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                children: [
                    !isSCP && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                        onClick: onFlashlight,
                        active: flashlightOn,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flashlight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flashlight$3e$__["Flashlight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 343,
                            columnNumber: 73
                        }, this),
                        label: "Flashlight",
                        sub: flashlightOn ? 'ON' : 'OFF'
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    !isSCP && has173 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                        onClick: onWatch173,
                        active: watching173,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 346,
                            columnNumber: 70
                        }, this),
                        label: "Watch 173",
                        sub: watching173 ? 'WATCHING' : 'WATCH',
                        danger: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    !isSCP && canInteract && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                        onClick: onInteract,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 349,
                            columnNumber: 49
                        }, this),
                        label: "Interact",
                        sub: room.isExit ? 'Gate' : 'Use',
                        accent: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this),
                    !isSCP && lootCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                        onClick: onPickupAll,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 352,
                            columnNumber: 50
                        }, this),
                        label: "Pickup All",
                        sub: `${lootCount} item${lootCount > 1 ? 's' : ''}`,
                        success: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    !isSCP && hasWeapon && scpsHere.length > 0 && scpsHere.map((s)=>{
                        const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(s.scpId);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionBtn, {
                            onClick: ()=>onAttack(s.scpId),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/TextGame.tsx",
                                lineNumber: 357,
                                columnNumber: 78
                            }, this),
                            label: `Attack`,
                            sub: def?.number || '',
                            danger: true
                        }, s.scpId, false, {
                            fileName: "[project]/src/components/game/TextGame.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
_s4(ActionPanel, "ircMkOeUd6g1AVB8Raipw1fWZ9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c5 = ActionPanel;
function MoveBtn({ dir, doors, onMove, icon }) {
    _s5();
    const door = doors.find((d)=>d.direction === dir);
    const hasKeycard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "MoveBtn.useGame[hasKeycard]": (s)=>door ? s.hasKeycard(door.keycardRequired) : true
    }["MoveBtn.useGame[hasKeycard]"]);
    const locked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "MoveBtn.useGame[locked]": (s)=>door ? s.facility.lockedDoors.includes(door.id) : false
    }["MoveBtn.useGame[locked]"]);
    if (!door) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-square scp-panel-2 rounded opacity-30"
    }, void 0, false, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 379,
        columnNumber: 21
    }, this);
    const blocked = door.keycardRequired > 0 && !hasKeycard || locked;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onMove(dir),
        className: `aspect-square rounded flex items-center justify-center transition-all border ${blocked ? 'border-[#3a1a1a] bg-[#1a0d0d] text-[#6b3a3a] hover:bg-[#2a1010]' : 'border-[#2a3640] bg-[#11161a] text-[#d4af37] hover:border-[#d4af37] hover:bg-[#1a1610] hover:scale-105'}`,
        title: blocked ? locked ? 'Locked by SCP-079' : `Needs L${door.keycardRequired} keycard` : `Move ${dir}`,
        children: icon
    }, void 0, false, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
_s5(MoveBtn, "PrU2HYfyXedeGU3aOkAHk7QxxfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c6 = MoveBtn;
function ActionBtn({ onClick, icon, label, sub, active, danger, accent, success }) {
    const color = danger ? '#dc2626' : accent ? '#d4af37' : success ? '#10b981' : active ? '#10b981' : '#9fb0bc';
    const border = active ? 'border-[#10b981]' : danger ? 'border-[#3a1a1a]' : 'border-[#2a3640]';
    const bg = active ? 'bg-[#0d1a13]' : 'bg-[#11161a]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex items-center gap-2 px-3 py-2 rounded border ${border} ${bg} hover:scale-[1.02] transition-all text-left`,
        style: {
            color
        },
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-semibold leading-tight",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[9px] uppercase tracking-wider opacity-70",
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/TextGame.tsx",
                        lineNumber: 427,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/TextGame.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/TextGame.tsx",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
_c7 = ActionBtn;
// Unused imports guard
void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"];
void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"];
void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"];
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "TextGame");
__turbopack_context__.k.register(_c1, "TopBar");
__turbopack_context__.k.register(_c2, "BottomBar");
__turbopack_context__.k.register(_c3, "Key");
__turbopack_context__.k.register(_c4, "RoomView");
__turbopack_context__.k.register(_c5, "ActionPanel");
__turbopack_context__.k.register(_c6, "MoveBtn");
__turbopack_context__.k.register(_c7, "ActionBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/ThreeGame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreeGame",
    ()=>ThreeGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/facility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/items.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/GameHUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flashlight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flashlight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flashlight.mjs [app-client] (ecmascript) <export default as Flashlight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/power.mjs [app-client] (ecmascript) <export default as Power>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.mjs [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.mjs [app-client] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand.mjs [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.mjs [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.mjs [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
// ===== Layout constants =====
const ROOM_SIZE = 10;
const WALL_H = 4;
const PLAYER_RADIUS = 0.45;
const PLAYER_EYE = 1.7;
const DOOR_HALF = 2 // doorway half-width
;
const EMPTY_LOOT = [];
function roomCenter(x, y) {
    return [
        x * ROOM_SIZE + ROOM_SIZE / 2,
        0,
        y * ROOM_SIZE + ROOM_SIZE / 2
    ];
}
function roomAtWorld(px, pz) {
    const x = Math.floor(px / ROOM_SIZE);
    const z = Math.floor(pz / ROOM_SIZE);
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"].find((rm)=>rm.x === x && rm.y === z);
    return r?.id ?? null;
}
function buildWalls() {
    const walls = [];
    const exits = [];
    // For each room, generate its 4 edges. Dedupe by canonical edge key.
    const seen = new Set();
    for (const room of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"]){
        const x0 = room.x * ROOM_SIZE;
        const z0 = room.y * ROOM_SIZE;
        const x1 = x0 + ROOM_SIZE;
        const z1 = z0 + ROOM_SIZE;
        // North edge (z = z0) — partner is room at (x, y-1)
        addEdge(walls, exits, seen, room, 'N', x0, z0, x1, z0);
        // South edge (z = z1)
        addEdge(walls, exits, seen, room, 'S', x0, z1, x1, z1);
        // West edge (x = x0)
        addEdge(walls, exits, seen, room, 'W', x0, z0, x0, z1);
        // East edge (x = x1)
        addEdge(walls, exits, seen, room, 'E', x1, z0, x1, z1);
    }
    return {
        walls,
        exits
    };
}
function addEdge(walls, exits, seen, room, dir, ax, az, bx, bz) {
    const key = `${Math.min(ax, bx)},${Math.min(az, bz)},${Math.max(ax, bx)},${Math.max(az, bz)}`;
    if (seen.has(key)) return;
    seen.add(key);
    // Find door in this direction
    const door = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOORS"].find((d)=>d.from === room.id && d.direction === dir);
    const reverseDoor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOORS"].find((d)=>d.to === room.id && d.direction === oppositeDir(dir));
    const hasDoor = !!(door || reverseDoor);
    const isBoundary = !hasDoor;
    // If this edge is on the boundary (no door) and the room is an exit gate AND the edge faces "out" (north for gate), it's an escape zone
    const isGateExit = isBoundary && room.isExit && dir === 'N';
    const horizontal = az === bz // wall runs along X
    ;
    if (isGateExit) {
        // mark as exit passage (no wall, but a special zone)
        const cx = (ax + bx) / 2;
        const cz = (az + bz) / 2;
        exits.push({
            minX: Math.min(ax, bx),
            maxX: Math.max(ax, bx),
            minZ: Math.min(az, bz),
            maxZ: Math.max(az, bz),
            cx,
            cz,
            w: Math.abs(bx - ax),
            d: Math.abs(bz - az),
            isExit: true
        });
        return;
    }
    if (hasDoor) {
        // wall with doorway gap in the middle
        if (horizontal) {
            const gapStart = Math.min(ax, bx) + (ROOM_SIZE / 2 - DOOR_HALF);
            const gapEnd = Math.min(ax, bx) + (ROOM_SIZE / 2 + DOOR_HALF);
            // left segment
            pushWall(walls, Math.min(ax, bx), az, gapStart, bz);
            // right segment
            pushWall(walls, gapEnd, az, Math.max(ax, bx), bz);
        } else {
            const gapStart = Math.min(az, bz) + (ROOM_SIZE / 2 - DOOR_HALF);
            const gapEnd = Math.min(az, bz) + (ROOM_SIZE / 2 + DOOR_HALF);
            pushWall(walls, ax, Math.min(az, bz), bx, gapStart);
            pushWall(walls, ax, gapEnd, bx, Math.max(az, bz));
        }
    } else {
        // solid boundary wall
        pushWall(walls, ax, az, bx, bz);
    }
}
function pushWall(walls, ax, az, bx, bz) {
    const minX = Math.min(ax, bx);
    const maxX = Math.max(ax, bx);
    const minZ = Math.min(az, bz);
    const maxZ = Math.max(az, bz);
    walls.push({
        minX: minX - 0.2,
        maxX: maxX + 0.2,
        minZ: minZ - 0.2,
        maxZ: maxZ + 0.2,
        cx: (minX + maxX) / 2,
        cz: (minZ + maxZ) / 2,
        w: Math.max(0.4, maxX - minX),
        d: Math.max(0.4, maxZ - minZ)
    });
}
function oppositeDir(d) {
    return d === 'N' ? 'S' : d === 'S' ? 'N' : d === 'E' ? 'W' : 'E';
}
// ===== Collision =====
function collide(pos, walls) {
    for (const w of walls){
        // expand box by player radius
        const ex0 = w.minX - PLAYER_RADIUS;
        const ex1 = w.maxX + PLAYER_RADIUS;
        const ez0 = w.minZ - PLAYER_RADIUS;
        const ez1 = w.maxZ + PLAYER_RADIUS;
        if (pos.x > ex0 && pos.x < ex1 && pos.z > ez0 && pos.z < ez1) {
            // push out along the smallest penetration axis
            const penX = pos.x < (w.minX + w.maxX) / 2 ? pos.x - ex0 : ex1 - pos.x;
            const penZ = pos.z < (w.minZ + w.maxZ) / 2 ? pos.z - ez0 : ez1 - pos.z;
            if (penX < penZ) {
                pos.x = pos.x < (w.minX + w.maxX) / 2 ? ex0 : ex1;
            } else {
                pos.z = pos.z < (w.minZ + w.maxZ) / 2 ? ez0 : ez1;
            }
        }
    }
    // facility bounds
    pos.x = Math.max(0.5, Math.min(ROOM_SIZE * 5 - 0.5, pos.x));
    pos.z = Math.max(0.5, Math.min(ROOM_SIZE * 5 - 0.5, pos.z));
}
// ===== Player =====
function Player({ walls, onRoomChange }) {
    _s();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const startRoomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Player.useGame[startRoomId]": (s)=>s.player.roomId
    }["Player.useGame[startRoomId]"]);
    const startRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(startRoomId);
    const flashlightOn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Player.useGame[flashlightOn]": (s)=>s.player.flashlightOn
    }["Player.useGame[flashlightOn]"]);
    const spawnPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Player.useMemo[spawnPos]": ()=>{
            if (!startRoom) return [
                5,
                0,
                5
            ];
            return roomCenter(startRoom.x, startRoom.y);
        }
    }["Player.useMemo[spawnPos]"], [
        startRoom
    ]);
    // init camera
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Player.useEffect": ()=>{
            camera.position.set(spawnPos[0], PLAYER_EYE, spawnPos[2]);
            ready.current = true;
        }
    }["Player.useEffect"], [
        camera,
        spawnPos
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Player.useEffect": ()=>{
            const down = {
                "Player.useEffect.down": (e)=>{
                    keys.current[e.code] = true;
                }
            }["Player.useEffect.down"];
            const up = {
                "Player.useEffect.up": (e)=>{
                    keys.current[e.code] = false;
                }
            }["Player.useEffect.up"];
            window.addEventListener('keydown', down);
            window.addEventListener('keyup', up);
            return ({
                "Player.useEffect": ()=>{
                    window.removeEventListener('keydown', down);
                    window.removeEventListener('keyup', up);
                }
            })["Player.useEffect"];
        }
    }["Player.useEffect"], []);
    const currentRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(startRoomId);
    const ready = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Player.useFrame": (_, delta)=>{
            if (!ready.current) return;
            const dt = Math.min(0.05, delta);
            const speed = keys.current['ShiftLeft'] ? 6.5 : 3.6;
            const forward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            camera.getWorldDirection(forward);
            forward.y = 0;
            forward.normalize();
            const right = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().crossVectors(forward, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0)).normalize();
            const dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            if (keys.current['KeyW'] || keys.current['ArrowUp']) dir.add(forward);
            if (keys.current['KeyS'] || keys.current['ArrowDown']) dir.sub(forward);
            if (keys.current['KeyD'] || keys.current['ArrowRight']) dir.add(right);
            if (keys.current['KeyA'] || keys.current['ArrowLeft']) dir.sub(right);
            if (dir.lengthSq() > 0) dir.normalize();
            velocity.current.lerp(dir.multiplyScalar(speed), 1 - Math.exp(-10 * dt));
            const next = camera.position.clone();
            next.x += velocity.current.x * dt;
            next.z += velocity.current.z * dt;
            collide(next, walls);
            camera.position.set(next.x, PLAYER_EYE, next.z);
            // room change detection
            const rid = roomAtWorld(camera.position.x, camera.position.z);
            if (rid && rid !== currentRoom.current) {
                currentRoom.current = rid;
                onRoomChange(rid);
            }
            // noise from sprinting
            if (keys.current['ShiftLeft'] && dir.lengthSq() > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState().makeNoise(1);
            }
        }
    }["Player.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    camera.position.x,
                    camera.position.y,
                    camera.position.z
                ],
                intensity: flashlightOn ? 2.2 : 0.4,
                distance: flashlightOn ? 18 : 6,
                color: flashlightOn ? '#fff4d6' : '#5a6a78',
                castShadow: false
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            flashlightOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpotLightFollow, {
                position: [
                    camera.position.x,
                    camera.position.y,
                    camera.position.z
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Player, "wgJ+ska+2GwboUuC07CymxFiHYM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Player;
function SpotLightFollow({ position }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SpotLightFollow.useFrame": ()=>{
            if (!ref.current) return;
            ref.current.position.copy(camera.position);
            const target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
            camera.getWorldDirection(target);
            ref.current.target.position.copy(camera.position).add(target.multiplyScalar(10));
            ref.current.target.updateMatrixWorld();
        }
    }["SpotLightFollow.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
            ref: ref,
            intensity: 3,
            distance: 22,
            angle: 0.5,
            penumbra: 0.4,
            color: "#fff4d6",
            position: position
        }, void 0, false, {
            fileName: "[project]/src/components/game/ThreeGame.tsx",
            lineNumber: 250,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s1(SpotLightFollow, "ZrLbLiqthCJS4ckkyhKwcPBYKCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = SpotLightFollow;
// ===== Rooms (floors + zone lighting) =====
const Rooms = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function Rooms() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"].map((room)=>{
            const [cx, , cz] = roomCenter(room.x, room.y);
            const zone = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZONE_INFO"][room.zone];
            const zoneColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](zone.color);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            cx,
                            0,
                            cz
                        ],
                        rotation: [
                            -Math.PI / 2,
                            0,
                            0
                        ],
                        receiveShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    ROOM_SIZE,
                                    ROOM_SIZE
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: room.isExit ? '#1a1610' : '#0e1418'
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 266,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            cx,
                            WALL_H,
                            cz
                        ],
                        rotation: [
                            Math.PI / 2,
                            0,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    ROOM_SIZE,
                                    ROOM_SIZE
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#070a0c"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 271,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            cx,
                            0.02,
                            cz - ROOM_SIZE / 2 + 0.3
                        ],
                        rotation: [
                            -Math.PI / 2,
                            0,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    ROOM_SIZE - 0.6,
                                    0.3
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: zoneColor,
                                emissive: zoneColor,
                                emissiveIntensity: 0.4
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 276,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            cx,
                            3.4,
                            cz
                        ],
                        intensity: 0.35,
                        distance: 9,
                        color: zoneColor
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 281,
                        columnNumber: 13
                    }, this),
                    room.isExit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            cx,
                            2,
                            cz - ROOM_SIZE / 2 + 0.6
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    ROOM_SIZE - 1,
                                    3,
                                    0.2
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 285,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#d4af37",
                                emissive: "#d4af37",
                                emissiveIntensity: 0.8,
                                transparent: true,
                                opacity: 0.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 286,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 284,
                        columnNumber: 15
                    }, this),
                    room.id === 'power-rm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                        cx: cx,
                        cz: cz,
                        color: "#f59e0b"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 290,
                        columnNumber: 40
                    }, this),
                    room.id === 'scp079-core' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                        cx: cx,
                        cz: cz,
                        color: "#0aff8a"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 291,
                        columnNumber: 43
                    }, this)
                ]
            }, room.id, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 264,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
});
_c2 = Rooms;
function Marker({ cx, cz, color }) {
    const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        position: [
            cx,
            1.2,
            cz
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                args: [
                    0.4,
                    0.4,
                    2.4,
                    16
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: c,
                emissive: c,
                emissiveIntensity: 0.7
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, this);
}
_c3 = Marker;
// ===== Walls =====
const Walls = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function Walls({ walls }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: walls.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    w.cx,
                    WALL_H / 2,
                    w.cz
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            w.w,
                            WALL_H,
                            w.d
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1a2329"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 314,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
});
_c4 = Walls;
// ===== SCP entities =====
const SCPEntities = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s2(function SCPEntities() {
    _s2();
    const scps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "SCPEntities.SCPEntities.useGame[scps]": (s)=>s.scps
    }["SCPEntities.SCPEntities.useGame[scps]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: scps.map((inst)=>{
            if (inst.scpId === 'npc-guard') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NPCGuard, {
                inst: inst
            }, inst.scpId + inst.roomId, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 329,
                columnNumber: 48
            }, this);
            const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(inst.scpId);
            if (!def) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SCPShape, {
                inst: inst,
                def: def
            }, inst.scpId, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 332,
                columnNumber: 16
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}, "kPIKqjZRExwizcnqyU/IzThq0k4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
}));
_c5 = SCPEntities;
function SCPShape({ inst, def }) {
    _s3();
    const targetRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(inst.roomId);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](def.color);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SCPShape.useEffect": ()=>{
            if (!init.current && targetRoom) {
                const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y);
                pos.current.set(cx, 0, cz);
                target.current.set(cx, 0, cz);
                init.current = true;
            }
        }
    }["SCPShape.useEffect"], [
        targetRoom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SCPShape.useFrame": (_, delta)=>{
            if (!targetRoom || !meshRef.current) return;
            const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y);
            target.current.set(cx, 0, cz);
            const speed = def.speed * 1.8 * (def.threat === 'strong' ? 1.2 : 1);
            pos.current.lerp(target.current, 1 - Math.exp(-speed * delta));
            meshRef.current.position.copy(pos.current);
            // face movement
            const lookAt = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](target.current.x, 0, target.current.z);
            meshRef.current.lookAt(lookAt);
        }
    }["SCPShape.useFrame"]);
    // shape varies by SCP
    const shape = (()=>{
        switch(def.ai){
            case 'statue':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                1.0,
                                0
                            ],
                            castShadow: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                    args: [
                                        0.4,
                                        0.6,
                                        2,
                                        8
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color,
                                    roughness: 0.9
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                2.2,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                    args: [
                                        0.35,
                                        8,
                                        8
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#8b0000",
                                    emissive: "#8b0000",
                                    emissiveIntensity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 377,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 372,
                    columnNumber: 11
                }, this);
            case 'ai':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        1.4,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.9,
                                0.7,
                                0.7
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#0a0a0a",
                            emissive: color,
                            emissiveIntensity: 0.9
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 387,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 385,
                    columnNumber: 11
                }, this);
            case 'reptile':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0.7,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                1.6,
                                1.4,
                                2.4
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: color,
                            roughness: 0.7
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, this);
            case 'guardian':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                1.2,
                                0
                            ],
                            castShadow: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                                    args: [
                                        0.5,
                                        2.4,
                                        6
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color,
                                    emissive: color,
                                    emissiveIntensity: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                            position: [
                                0,
                                2,
                                0
                            ],
                            intensity: 1.5,
                            distance: 8,
                            color: color
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 404,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 399,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0.9,
                                0
                            ],
                            castShadow: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                                    args: [
                                        0.35,
                                        1.0,
                                        4,
                                        8
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color,
                                    roughness: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 410,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                1.8,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                    args: [
                                        0.3,
                                        8,
                                        8
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: color
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this),
                        def.threat !== 'weak' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                            position: [
                                0,
                                1.5,
                                0
                            ],
                            intensity: 0.6,
                            distance: 6,
                            color: color
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 419,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 409,
                    columnNumber: 11
                }, this);
        }
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: meshRef,
        children: shape
    }, void 0, false, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 426,
        columnNumber: 10
    }, this);
}
_s3(SCPShape, "ZX+nHvUs9zfKs6rbjgjMo3qMRQE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = SCPShape;
function NPCGuard({ inst }) {
    _s4();
    const targetRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(inst.roomId);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NPCGuard.useEffect": ()=>{
            if (!init.current && targetRoom) {
                const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y);
                pos.current.set(cx, 0, cz);
                target.current.set(cx, 0, cz);
                init.current = true;
            }
        }
    }["NPCGuard.useEffect"], [
        targetRoom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "NPCGuard.useFrame": (_, delta)=>{
            if (!targetRoom || !meshRef.current) return;
            const [cx, , cz] = roomCenter(targetRoom.x, targetRoom.y);
            target.current.set(cx, 0, cz);
            pos.current.lerp(target.current, 1 - Math.exp(-2.5 * delta));
            meshRef.current.position.copy(pos.current);
        }
    }["NPCGuard.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: meshRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.9,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("capsuleGeometry", {
                        args: [
                            0.35,
                            1.0,
                            4,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1a2a3a"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.8,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.3,
                            8,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#2a3a4a"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    0,
                    1.5,
                    0
                ],
                intensity: 0.5,
                distance: 5,
                color: "#3a5a7a"
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
_s4(NPCGuard, "R4wZES0AVKFTWBUbhk1GZ3bNNEs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = NPCGuard;
// ===== Items in rooms =====
const Items = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s5(function Items() {
    _s5();
    const loot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Items.Items.useGame[loot]": (s)=>s.loot
    }["Items.Items.useGame[loot]"]);
    if (!loot) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOMS"].flatMap((room)=>{
            const items = loot[room.id] || [];
            const [cx, , cz] = roomCenter(room.x, room.y);
            return items.map((it, i)=>{
                const offset = (i - (items.length - 1) / 2) * 1.2;
                const color = itemColor(it);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemOrb, {
                    position: [
                        cx + offset,
                        0.4,
                        cz
                    ],
                    color: color,
                    itemId: it.id
                }, room.id + it.id + i, false, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 477,
                    columnNumber: 18
                }, this);
            });
        })
    }, void 0, false, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 470,
        columnNumber: 5
    }, this);
}, "qrBc4X9gLmpvOrL6GZT3UbxF+uk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
}));
_c8 = Items;
function itemColor(it) {
    if (it.type === 'keycard') return '#d4af37';
    if (it.type === 'weapon') return '#dc2626';
    if (it.type === 'medical') return '#10b981';
    if (it.type === 'tool') return '#06b6d4';
    if (it.type === 'document') return '#a78bfa';
    return '#9fb0bc';
}
function ItemOrb({ position, color, itemId }) {
    _s6();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ItemOrb.useFrame": (s)=>{
            if (!ref.current) return;
            ref.current.rotation.y = s.clock.elapsedTime * 1.2;
            ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime * 2) * 0.1;
        }
    }["ItemOrb.useFrame"]);
    const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color);
    void itemId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                        args: [
                            0.28,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: c,
                        emissive: c,
                        emissiveIntensity: 0.6
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                intensity: 0.4,
                distance: 3,
                color: c
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 503,
        columnNumber: 5
    }, this);
}
_s6(ItemOrb, "8QVLrcMdYxPUkj6ry5zpyt6J6X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c9 = ItemOrb;
// ===== Main scene =====
function Scene({ onRoomChange, onLockChange, onLockError }) {
    _s7();
    const { walls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Scene.useMemo": ()=>buildWalls()
    }["Scene.useMemo"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.18,
                color: "#3a4a5a"
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                args: [
                    '#1a2a3a',
                    '#050708',
                    0.3
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    '#05080a',
                    8,
                    28
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 524,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rooms, {}, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Walls, {
                walls: walls
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Items, {}, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SCPEntities, {}, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Player, {
                walls: walls,
                onRoomChange: onRoomChange
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomPointerLock, {
                onLockChange: onLockChange,
                onLockError: onLockError
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s7(Scene, "yLIbkwZnfr8lcrTgD9J90CCI5JI=");
_c10 = Scene;
// ===== Custom Pointer Lock (robust against cooldown) =====
// Replaces drei's PointerLockControls to handle the browser security cooldown
// (~1s) imposed after the user exits pointer lock via ESC. During cooldown,
// requests fail silently; we surface a friendly retry message instead of errors.
function CustomPointerLock({ onLockChange, onLockError }) {
    _s8();
    const { gl, camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const euler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](0, 0, 0, 'YXZ'));
    const isLocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomPointerLock.useEffect": ()=>{
            const canvas = gl.domElement;
            const onLockChangeEvt = {
                "CustomPointerLock.useEffect.onLockChangeEvt": ()=>{
                    const locked = document.pointerLockElement === canvas;
                    isLocked.current = locked;
                    onLockChange(locked);
                }
            }["CustomPointerLock.useEffect.onLockChangeEvt"];
            const onLockError = {
                "CustomPointerLock.useEffect.onLockError": ()=>{
                    // Browser rejected the lock request (usually due to cooldown after ESC).
                    onLockError();
                }
            }["CustomPointerLock.useEffect.onLockError"];
            const onMouseMove = {
                "CustomPointerLock.useEffect.onMouseMove": (e)=>{
                    if (!isLocked.current) return;
                    const movementX = e.movementX || 0;
                    const movementY = e.movementY || 0;
                    euler.current.setFromQuaternion(camera.quaternion);
                    euler.current.y -= movementX * 0.0022;
                    euler.current.x -= movementY * 0.0022;
                    // clamp pitch to avoid flipping
                    euler.current.x = Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, euler.current.x));
                    camera.quaternion.setFromEuler(euler.current);
                }
            }["CustomPointerLock.useEffect.onMouseMove"];
            document.addEventListener('pointerlockchange', onLockChangeEvt);
            document.addEventListener('pointerlockerror', onLockError);
            document.addEventListener('mousemove', onMouseMove);
            return ({
                "CustomPointerLock.useEffect": ()=>{
                    document.removeEventListener('pointerlockchange', onLockChangeEvt);
                    document.removeEventListener('pointerlockerror', onLockError);
                    document.removeEventListener('mousemove', onMouseMove);
                }
            })["CustomPointerLock.useEffect"];
        }
    }["CustomPointerLock.useEffect"], [
        gl,
        camera,
        onLockChange,
        onLockError
    ]);
    // Expose a request-lock function via a ref-like mechanism using a custom event.
    // The overlay button calls this to acquire pointer lock on user gesture.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomPointerLock.useEffect": ()=>{
            const onRequestLock = {
                "CustomPointerLock.useEffect.onRequestLock": ()=>{
                    const canvas = gl.domElement;
                    if (!isLocked.current) {
                        const p = canvas.requestPointerLock();
                        // Some browsers return a promise; catch cooldown rejections gracefully.
                        if (p && typeof p.catch === 'function') {
                            ;
                            p.catch({
                                "CustomPointerLock.useEffect.onRequestLock": ()=>onLockError()
                            }["CustomPointerLock.useEffect.onRequestLock"]);
                        }
                    }
                }
            }["CustomPointerLock.useEffect.onRequestLock"];
            window.__scpRequestPointerLock = onRequestLock;
            return ({
                "CustomPointerLock.useEffect": ()=>{
                    delete window.__scpRequestPointerLock;
                }
            })["CustomPointerLock.useEffect"];
        }
    }["CustomPointerLock.useEffect"], [
        gl,
        onLockError
    ]);
    return null;
}
_s8(CustomPointerLock, "836qmGK30w6RLPmc6gCvHp9kkQo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c11 = CustomPointerLock;
// ===== HUD overlay =====
function HUD3D({ onPickupNearby, onInteract, onAttack, onFlashlight, locked, lockError, onRequestLock, onDismissError, prompt }) {
    _s9();
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "HUD3D.useGame[role]": (s)=>s.role
    }["HUD3D.useGame[role]"]);
    const isSCP = role === 'scp';
    const [cooldown, setCooldown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Countdown timer for the cooldown retry — only runs while a lock error is active.
    // The interval sets the value asynchronously (no synchronous setState in the effect body).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HUD3D.useEffect": ()=>{
            if (!lockError) return;
            const start = Date.now();
            const id = setInterval({
                "HUD3D.useEffect.id": ()=>{
                    const remaining = Math.max(0, 1 - (Date.now() - start) / 1000);
                    setCooldown(remaining);
                    if (remaining <= 0) clearInterval(id);
                }
            }["HUD3D.useEffect.id"], 100);
            return ({
                "HUD3D.useEffect": ()=>clearInterval(id)
            })["HUD3D.useEffect"];
        }
    }["HUD3D.useEffect"], [
        lockError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isSCP && locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scp-crosshair"
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 637,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 left-3 w-64 z-30 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerStatus"], {
                        compact: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreatIndicator"], {}, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 w-56 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryPanel3D, {}, void 0, false, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 645,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-14 left-3 right-3 sm:right-auto sm:w-96 z-30 h-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameLogCompact, {}, void 0, false, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 649,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-2",
                children: !isSCP && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HudBtn, {
                            onClick: onFlashlight,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flashlight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flashlight$3e$__["Flashlight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 655,
                                columnNumber: 50
                            }, this),
                            label: "F"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 655,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HudBtn, {
                            onClick: onInteract,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 656,
                                columnNumber: 48
                            }, this),
                            label: "E",
                            disabled: !prompt
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 656,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HudBtn, {
                            onClick: onPickupNearby,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 657,
                                columnNumber: 52
                            }, this),
                            label: "G"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HudBtn, {
                            onClick: onAttack,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 658,
                                columnNumber: 46
                            }, this),
                            label: "CLICK",
                            danger: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 658,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            prompt && locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 left-1/2 -translate-x-1/2 z-30 scp-panel px-4 py-2 rounded scp-pulse-danger",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-[#d4af37] flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 666,
                            columnNumber: 13
                        }, this),
                        " ",
                        prompt,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keycap, {
                            children: "E"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                            lineNumber: 666,
                            columnNumber: 55
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 665,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 664,
                columnNumber: 9
            }, this),
            !locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-40 flex items-center justify-center bg-black/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center scp-panel p-8 rounded-lg max-w-sm",
                    children: lockError ? (()=>{
                        // Display cooldown: if interval hasn't fired yet, show full 1.0s
                        const displayCd = cooldown > 0 ? cooldown : 1;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                    className: "w-8 h-8 text-[#f59e0b] mx-auto mb-3 scp-blip"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 680,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#f59e0b] font-bold mb-2 text-sm uppercase tracking-widest",
                                    children: "Pointer Lock Cooldown"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 681,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#9fb0bc] text-xs leading-relaxed mb-4",
                                    children: "The browser is enforcing a brief security cooldown after you exited mouse-look. Please wait, then click below to re-enter."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 682,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#d4af37] text-3xl font-black mb-4 scp-blip",
                                    children: [
                                        displayCd.toFixed(1),
                                        "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 686,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onDismissError();
                                        onRequestLock();
                                    },
                                    disabled: displayCd > 0.1,
                                    className: `px-6 py-3 font-bold uppercase tracking-widest text-xs rounded transition-all flex items-center gap-2 mx-auto ${displayCd > 0.1 ? 'scp-panel-2 text-[#6b7d8a] cursor-not-allowed' : 'bg-[#d4af37] text-[#0a0d0f] hover:bg-[#e8c460]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                                            lineNumber: 696,
                                            columnNumber: 23
                                        }, this),
                                        " ",
                                        displayCd > 0.1 ? 'Waiting…' : 'Re-enter Mouse-Look'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                                    lineNumber: 687,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true);
                    })() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "w-8 h-8 text-[#d4af37] mx-auto mb-3 scp-blip"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 703,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#e8eef2] font-bold mb-2 text-lg",
                                children: "CLICK TO LOOK AROUND"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 704,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#6b7d8a] text-xs mb-5",
                                children: "WASD move · Mouse look · Shift sprint · ESC to release"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 705,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onRequestLock,
                                className: "px-6 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-xs rounded hover:bg-[#e8c460] transition-all flex items-center gap-2 mx-auto scp-pulse-danger",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                                        lineNumber: 710,
                                        columnNumber: 19
                                    }, this),
                                    " Enter Mouse-Look"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 706,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#3a4a55] text-[10px] mt-4",
                                children: "You can still move with WASD and use the HUD buttons below without mouse-look."
                            }, void 0, false, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 712,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 673,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 672,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s9(HUD3D, "rxOOXGtRG6OjhfWFqYC+hp2tMC4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c12 = HUD3D;
function Keycap({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
        className: "ml-1 px-1.5 py-0.5 bg-[#0a0d0f] border border-[#2a3640] rounded text-[#d4af37] text-[10px] font-mono",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 723,
        columnNumber: 10
    }, this);
}
_c13 = Keycap;
function HudBtn({ onClick, icon, label, disabled, danger }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `w-12 h-12 scp-panel rounded flex flex-col items-center justify-center gap-0.5 transition-all hover:scale-105 ${disabled ? 'opacity-30 cursor-not-allowed' : danger ? 'hover:border-[#dc2626] text-[#dc2626]' : 'hover:border-[#d4af37] text-[#d4af37]'} text-[#9fb0bc]`,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[8px] uppercase tracking-wider",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 728,
        columnNumber: 5
    }, this);
}
_c14 = HudBtn;
function InventoryPanel3D() {
    _s10();
    const useItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "InventoryPanel3D.useGame[useItem]": (s)=>s.useItem
    }["InventoryPanel3D.useGame[useItem]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InventoryPanel"], {
        onUse: useItem
    }, void 0, false, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 743,
        columnNumber: 10
    }, this);
}
_s10(InventoryPanel3D, "6PjTHg7h2MfptEDmkQ9FS2vwZyc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c15 = InventoryPanel3D;
function GameLogCompact() {
    _s11();
    const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameLogCompact.useGame[log]": (s)=>s.log
    }["GameLogCompact.useGame[log]"]);
    const last = log.slice(-6);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-panel rounded h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-1.5 border-b border-[#2a3640] flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "scp-blip text-[#10b981] text-[8px]",
                        children: "●"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 752,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] uppercase tracking-widest text-[#6b7d8a]",
                        children: "Log"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 753,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto scp-scroll p-2 space-y-0.5 text-[10px] leading-snug",
                children: last.map((e)=>{
                    const c = e.type === 'danger' ? '#dc2626' : e.type === 'success' ? '#10b981' : e.type === 'combat' ? '#f59e0b' : e.type === 'system' ? '#d4af37' : e.type === 'lore' ? '#a78bfa' : '#9fb0bc';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: c
                        },
                        children: e.text
                    }, e.id, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 758,
                        columnNumber: 18
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 755,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 750,
        columnNumber: 5
    }, this);
}
_s11(GameLogCompact, "+yR5FgNwMUGBpMaWQ6QqKgnn4rs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c16 = GameLogCompact;
function ThreeGame() {
    _s12();
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[phase]": (s)=>s.phase
    }["ThreeGame.useGame[phase]"]);
    const roomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[roomId]": (s)=>s.player.roomId
    }["ThreeGame.useGame[roomId]"]);
    const setPlayerRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[setPlayerRoom]": (s)=>s.setPlayerRoom
    }["ThreeGame.useGame[setPlayerRoom]"]);
    const interact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[interact]": (s)=>s.interact
    }["ThreeGame.useGame[interact]"]);
    const toggleFlashlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[toggleFlashlight]": (s)=>s.toggleFlashlight
    }["ThreeGame.useGame[toggleFlashlight]"]);
    const pickupAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[pickupAll]": (s)=>s.pickupAll
    }["ThreeGame.useGame[pickupAll]"]);
    const attack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[attack]": (s)=>s.attack
    }["ThreeGame.useGame[attack]"]);
    const resetToMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[resetToMenu]": (s)=>s.resetToMenu
    }["ThreeGame.useGame[resetToMenu]"]);
    const scps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[scps]": (s)=>s.scps
    }["ThreeGame.useGame[scps]"]);
    const tick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[tick]": (s)=>s.tick
    }["ThreeGame.useGame[tick]"]);
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[role]": (s)=>s.role
    }["ThreeGame.useGame[role]"]);
    const isSCP = role === 'scp';
    const [locked, setLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lockError, setLockError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Request pointer lock via the CustomPointerLock's exposed function.
    // Must be called from a user gesture (button click).
    const requestLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThreeGame.useCallback[requestLock]": ()=>{
            const fn = window.__scpRequestPointerLock;
            if (fn) fn();
        }
    }["ThreeGame.useCallback[requestLock]"], []);
    const dismissError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThreeGame.useCallback[dismissError]": ()=>setLockError(false)
    }["ThreeGame.useCallback[dismissError]"], []);
    const handleLockChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThreeGame.useCallback[handleLockChange]": (v)=>setLocked(v)
    }["ThreeGame.useCallback[handleLockChange]"], []);
    const handleLockError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThreeGame.useCallback[handleLockError]": ()=>setLockError(true)
    }["ThreeGame.useCallback[handleLockError]"], []);
    // periodic AI tick for real-time SCP movement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeGame.useEffect": ()=>{
            if (phase !== 'playing') return;
            const id = setInterval({
                "ThreeGame.useEffect.id": ()=>tick()
            }["ThreeGame.useEffect.id"], 1400);
            return ({
                "ThreeGame.useEffect": ()=>clearInterval(id)
            })["ThreeGame.useEffect"];
        }
    }["ThreeGame.useEffect"], [
        phase,
        tick
    ]);
    // attack on click while locked (only fires when pointer is locked → real gameplay click)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeGame.useEffect": ()=>{
            const onClick = {
                "ThreeGame.useEffect.onClick": (e)=>{
                    if (!locked || isSCP) return;
                    // ignore clicks on HUD buttons / overlays
                    const target = e.target;
                    if (target.closest('button') || target.closest('.scp-panel')) return;
                    const here = scps.filter({
                        "ThreeGame.useEffect.onClick.here": (s)=>s.roomId === roomId && s.state !== 'contained' && s.scpId !== 'npc-guard'
                    }["ThreeGame.useEffect.onClick.here"]);
                    if (here.length > 0) attack(here[0].scpId);
                }
            }["ThreeGame.useEffect.onClick"];
            window.addEventListener('click', onClick);
            return ({
                "ThreeGame.useEffect": ()=>window.removeEventListener('click', onClick)
            })["ThreeGame.useEffect"];
        }
    }["ThreeGame.useEffect"], [
        locked,
        scps,
        roomId,
        attack,
        isSCP
    ]);
    // hotkeys
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeGame.useEffect": ()=>{
            const onKey = {
                "ThreeGame.useEffect.onKey": (e)=>{
                    if (phase !== 'playing') return;
                    if (e.code === 'KeyF') toggleFlashlight();
                    if (e.code === 'KeyE') interact();
                    if (e.code === 'KeyG') pickupAll();
                }
            }["ThreeGame.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "ThreeGame.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["ThreeGame.useEffect"];
        }
    }["ThreeGame.useEffect"], [
        phase,
        toggleFlashlight,
        interact,
        pickupAll
    ]);
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoom"])(roomId);
    const lootHere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "ThreeGame.useGame[lootHere]": (s)=>s.loot[roomId]
    }["ThreeGame.useGame[lootHere]"]);
    const lootCount = (lootHere || EMPTY_LOOT).length;
    const canInteract = !!(room && (room.isExit || room.id === 'power-rm' || room.id === 'scp079-core' || room.id === 'scp860-door'));
    const prompt = lootCount > 0 ? `${lootCount} item(s) here — pickup` : canInteract ? room?.isExit ? 'Open gate' : 'Interact' : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-root relative w-full h-screen overflow-hidden scp-scanlines",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                shadows: true,
                camera: {
                    fov: 75,
                    near: 0.1,
                    far: 60,
                    position: [
                        5,
                        PLAYER_EYE,
                        5
                    ]
                },
                gl: {
                    antialias: true
                },
                onCreated: ({ gl })=>{
                    gl.setClearColor('#05080a');
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                        onRoomChange: (id)=>setPlayerRoom(id),
                        onLockChange: handleLockChange,
                        onLockError: handleLockError
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 848,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game/ThreeGame.tsx",
                    lineNumber: 847,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HUD3D, {
                onPickupNearby: pickupAll,
                onInteract: interact,
                onAttack: ()=>{
                    const here = scps.filter((s)=>s.roomId === roomId && s.state !== 'contained' && s.scpId !== 'npc-guard');
                    if (here[0]) attack(here[0].scpId);
                },
                onFlashlight: toggleFlashlight,
                locked: locked,
                lockError: lockError,
                onRequestLock: requestLock,
                onDismissError: dismissError,
                prompt: prompt
            }, void 0, false, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 856,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 z-40 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scp-danger-stripes h-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 873,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 flex items-center justify-between text-xs bg-[#0a0d0f]/70 backdrop-blur pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "scp-blip text-[#dc2626]",
                                        "aria-hidden": "true",
                                        children: "●"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                                        lineNumber: 876,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#d4af37] font-bold uppercase tracking-widest",
                                        children: room?.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                                        lineNumber: 877,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 875,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioToggleButton"], {}, void 0, false, {
                                            fileName: "[project]/src/components/game/ThreeGame.tsx",
                                            lineNumber: 880,
                                            columnNumber: 50
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                                        lineNumber: 880,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            __turbopack_context__.A("[project]/src/game/save.ts [app-client] (ecmascript, async loader)").then(({ saveGame })=>{
                                                if (saveGame()) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState().addLog('success', `Game saved (turn ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"].getState().turn}).`);
                                            });
                                        },
                                        className: "pointer-events-auto text-[#6b7d8a] hover:text-[#d4af37] uppercase tracking-widest text-[10px] flex items-center gap-1",
                                        "aria-label": "Save game",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                                lineNumber: 890,
                                                columnNumber: 15
                                            }, this),
                                            " Save"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                                        lineNumber: 881,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetToMenu,
                                        className: "pointer-events-auto text-[#6b7d8a] hover:text-[#dc2626] uppercase tracking-widest text-[10px]",
                                        children: "Abandon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                                        lineNumber: 892,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game/ThreeGame.tsx",
                                lineNumber: 879,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game/ThreeGame.tsx",
                        lineNumber: 874,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/game/ThreeGame.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/ThreeGame.tsx",
        lineNumber: 838,
        columnNumber: 5
    }, this);
}
_s12(ThreeGame, "Uchgi7dxpuV7J9A0X/9v9dDsl0o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c17 = ThreeGame;
// guard unused
void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"];
void __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"];
void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorBetween"];
void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$facility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doorsFrom"];
void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"];
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "Player");
__turbopack_context__.k.register(_c1, "SpotLightFollow");
__turbopack_context__.k.register(_c2, "Rooms");
__turbopack_context__.k.register(_c3, "Marker");
__turbopack_context__.k.register(_c4, "Walls");
__turbopack_context__.k.register(_c5, "SCPEntities");
__turbopack_context__.k.register(_c6, "SCPShape");
__turbopack_context__.k.register(_c7, "NPCGuard");
__turbopack_context__.k.register(_c8, "Items");
__turbopack_context__.k.register(_c9, "ItemOrb");
__turbopack_context__.k.register(_c10, "Scene");
__turbopack_context__.k.register(_c11, "CustomPointerLock");
__turbopack_context__.k.register(_c12, "HUD3D");
__turbopack_context__.k.register(_c13, "Keycap");
__turbopack_context__.k.register(_c14, "HudBtn");
__turbopack_context__.k.register(_c15, "InventoryPanel3D");
__turbopack_context__.k.register(_c16, "GameLogCompact");
__turbopack_context__.k.register(_c17, "ThreeGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/game/GameOverScreen.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameOverScreen",
    ()=>GameOverScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/scps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/game/data/roles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skull.mjs [app-client] (ecmascript) <export default as Skull>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.mjs [app-client] (ecmascript) <export default as Unlock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function GameOverScreen() {
    _s();
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[phase]": (s)=>s.phase
    }["GameOverScreen.useGame[phase]"]);
    const deathCause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[deathCause]": (s)=>s.deathCause
    }["GameOverScreen.useGame[deathCause]"]);
    const victoryType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[victoryType]": (s)=>s.victoryType
    }["GameOverScreen.useGame[victoryType]"]);
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[role]": (s)=>s.role
    }["GameOverScreen.useGame[role]"]);
    const scpId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[scpId]": (s)=>s.scpId
    }["GameOverScreen.useGame[scpId]"]);
    const turn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[turn]": (s)=>s.turn
    }["GameOverScreen.useGame[turn]"]);
    const unlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[unlock]": (s)=>s.unlock
    }["GameOverScreen.useGame[unlock]"]);
    const resetToMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[resetToMenu]": (s)=>s.resetToMenu
    }["GameOverScreen.useGame[resetToMenu]"]);
    const startGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "GameOverScreen.useGame[startGame]": (s)=>s.startGame
    }["GameOverScreen.useGame[startGame]"]);
    const isVictory = phase === 'victory';
    const roleDef = role ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRole"])(role) : null;
    const scp = scpId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$data$2f$scps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSCP"])(scpId) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-root relative min-h-screen flex flex-col scp-scanlines overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-40",
                style: {
                    background: isVictory ? 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.15), transparent 60%)' : 'radial-gradient(ellipse at 50% 30%, rgba(220,38,38,0.18), transparent 60%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameOverScreen.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 flex-1 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "w-full max-w-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: isVictory ? 'scp-warning-stripes h-2 rounded-t-lg' : 'scp-danger-stripes h-2 rounded-t-lg'
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scp-panel rounded-lg p-8 sm:p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 0.2,
                                        type: 'spring'
                                    },
                                    className: `inline-flex p-4 rounded-full mb-4 ${isVictory ? 'bg-[#1a1610] text-[#d4af37]' : 'bg-[#1a0d0d] text-[#dc2626]'}`,
                                    children: isVictory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "w-10 h-10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                        lineNumber: 43,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
                                        className: "w-10 h-10 scp-blip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                        lineNumber: 43,
                                        columnNumber: 63
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-xs uppercase tracking-[0.4em] mb-2 ${isVictory ? 'text-[#d4af37]' : 'text-[#dc2626]'}`,
                                    children: isVictory ? 'Run Complete' : 'Containment Failed'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `text-4xl sm:text-5xl font-black tracking-tight mb-4 ${isVictory ? 'text-[#e8eef2]' : 'text-[#e8eef2]'}`,
                                    children: isVictory ? 'YOU SURVIVED' : 'YOU DIED'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#9fb0bc] text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto",
                                    children: isVictory ? victoryType === 'escape' ? 'You escaped the facility alive.' : victoryType === 'evacuation' ? 'You restored the facility and evacuated.' : victoryType === 'containment' ? 'You contained the breach.' : victoryType === 'survival' ? 'You survived until extraction.' : 'You completed your objective.' : deathCause
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                            label: "Role",
                                            value: role === 'scp' ? scp?.number ?? 'SCP' : roleDef?.name.split(' ')[0] ?? '—'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                            label: "Turns",
                                            value: `${turn}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                            label: "Runs Won",
                                            value: `${unlock.runsCompleted}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                isVictory && role !== 'scp' && !unlock.scpUnlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "scp-panel-2 rounded p-4 mb-6 border-l-2 border-[#d4af37] text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-[#d4af37] text-xs uppercase tracking-wider mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this),
                                                " New Content Unlocked"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#9fb0bc]",
                                            children: "The SCP role is now playable. Take control of an anomaly on your next run."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                isVictory && role !== 'scp' && unlock.scpUnlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#10b981] text-xs uppercase tracking-widest mb-6 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        " SCP role remains unlocked"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                isVictory && role === 'scp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "scp-panel-2 rounded p-4 mb-6 border-l-2 border-[#dc2626] text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[#dc2626] text-xs uppercase tracking-wider mb-1",
                                            children: "⚠ Keter-Class Breach"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[#9fb0bc]",
                                            children: [
                                                scp?.number,
                                                " has escaped containment and reached the surface. The Foundation will not forget this."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: resetToMenu,
                                            className: "flex-1 px-5 py-3 scp-panel rounded text-[#9fb0bc] text-sm uppercase tracking-wider hover:text-[#e8eef2] transition-colors flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                " Main Menu"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: startGame,
                                            className: "flex-1 px-5 py-3 bg-[#d4af37] text-[#0a0d0f] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#e8c460] transition-all flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                " Run Again"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: isVictory ? 'scp-warning-stripes h-2 rounded-b-lg' : 'scp-danger-stripes h-2 rounded-b-lg'
                        }, void 0, false, {
                            fileName: "[project]/src/components/game/GameOverScreen.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game/GameOverScreen.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameOverScreen.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameOverScreen.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(GameOverScreen, "1VKgwsJP6s0PnZv3JibbtcKWWR8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c = GameOverScreen;
function Stat({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scp-panel-2 rounded p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg font-bold text-[#d4af37] truncate",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameOverScreen.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#6b7d8a] uppercase tracking-wider text-[10px]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/game/GameOverScreen.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/game/GameOverScreen.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c1 = Stat;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "GameOverScreen");
__turbopack_context__.k.register(_c1, "Stat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/game/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$StartScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/StartScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TextGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/TextGame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ThreeGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/ThreeGame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameOverScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/game/GameOverScreen.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// 3D mode needs to be client-only (Three.js / WebGL)
const ThreeGameLazy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ThreeGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreeGame"]), {
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "scp-root min-h-screen flex items-center justify-center scp-scanlines",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block w-12 h-12 border-4 border-[#2a3640] border-t-[#d4af37] rounded-full animate-spin mb-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#d4af37] text-xs uppercase tracking-[0.3em]",
                        children: "Loading 3D Engine..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ThreeGameLazy;
function Home() {
    _s();
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Home.useGame[phase]": (s)=>s.phase
    }["Home.useGame[phase]"]);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"])({
        "Home.useGame[mode]": (s)=>s.mode
    }["Home.useGame[mode]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        children: phase === 'playing' ? mode === '3d' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeGameLazy, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 31,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$TextGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextGame"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 31,
            columnNumber: 45
        }, this) : phase === 'game-over' || phase === 'victory' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$GameOverScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GameOverScreen"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$StartScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StartScreen"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Home, "zPxD8cWfPo5PLEQIYS3Ae1ItIfg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$game$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGame"]
    ];
});
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "ThreeGameLazy");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0tv_2u6._.js.map
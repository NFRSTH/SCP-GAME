// ===== Game Constants & Magic Numbers =====
// Centralized configuration for all tunable game values.

import type { PlayerState, FacilityState, UnlockState } from './types'

// ----- Initial Player State -----
export const INITIAL_PLAYER: PlayerState = {
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
  scp079Shutdown: false,
}

// ----- Initial Facility State -----
export const INITIAL_FACILITY: FacilityState = {
  powerOn: true,
  breachActive: true,
  breachLevel: 40,
  alarmOn: true,
  brokenDoors: [],
  lockedDoors: [],
  powerOutageTicks: 0,
}

// ----- Initial Unlock State -----
export const INITIAL_UNLOCK: UnlockState = {
  scpUnlocked: false,
  runsCompleted: 0,
  bestRole: null,
}

// ----- Movement -----
export const MOVE_STAMINA_COST = 4          // base stamina cost per room transition
export const STAMINA_REGEN_PER_TICK = 6     // stamina regenerated per tick
export const NOISE_PER_MOVE = 0.2           // noise added when moving
export const NOISE_DECAY_PER_TICK = 0.3     // noise reduced per tick
export const NOISE_FROM_SPRINT = 1.0        // noise when sprinting (3D)
export const NOISE_FROM_SHOOTING = 1.0      // noise when firing a weapon

// ----- Flashlight -----
export const FLASHLIGHT_DRAIN_PER_TICK = 2  // battery % drained per tick when on

// ----- Sanity -----
export const DARK_ROOM_SANITY_LOSS = 5      // sanity lost entering a dark room without flashlight

// ----- SCP AI -----
export const SCP173_WATCH_RANGE = 2         // rooms: player must be within this to freeze 173
export const SCP049_SMELL_RANGE = 4         // rooms: 049 chases if player within this
export const SCP939_NOISE_THRESHOLD = 0.3   // noise level that attracts 939
export const SCP939_PROXIMITY_RANGE = 3     // rooms: 939 chases if player within this
export const SCP106_FLASHLIGHT_REPEL_RANGE = 2 // rooms: flashlight repels 106 if within this
export const SCP106_FLASHLIGHT_REPEL_CHANCE = 0.7
export const SCP106_RETREAT_COOLDOWN = 2    // ticks 106 retreats after flashlight repel
export const SCP079_LOCK_CHANCE = 0.25      // chance per tick 079 locks a door
export const SCP079_SMASH_CHANCE = 0.15     // chance per tick 682 smashes a door (log message)
export const SCP_ESCAPE_BASE_CHANCE = 0.08  // base chance a contained SCP escapes per tick

// ----- Combat -----
export const WEAPON_IMMUNE_DAMAGE_MULT = 0.05  // strong SCPs take 5% weapon damage
export const NONLETHAL_HIT_COOLDOWN = 1        // ticks before a non-lethal SCP can hit again
export const STRONG_SCP_SLOW_COOLDOWN = 1      // ticks strong SCPs are slowed by gunfire
export const NPC_GUARD_DAMAGE = 15             // damage NPC guards deal to player-SCP

// ----- Damage scaling -----
export const DAMAGE_VARIANCE_LOW = 0.7         // AI smart factor: min damage multiplier
export const DAMAGE_VARIANCE_HIGH = 0.6        // AI smart factor: additional damage multiplier

// ----- Breach dynamics -----
export const BREACH_RISE_PER_TICK = 0.5        // breach level rise per tick (power not restored)
export const BREACH_FALL_PER_TICK = 1          // breach level fall per tick (power restored)
export const BREACH_EVENT_RISE = 3             // breach level rise from explosion event
export const BREACH_RESTORE_REDUCTION = 30     // breach reduction when power restored
export const BREACH_079_SHUTDOWN_REDUCTION = 20 // breach reduction when 079 shut down

// ----- Power restoration -----
export const POWER_RESTORE_BREACH_REDUCTION = 30
export const POWER_RESTORE_UNLOCK_DIVISOR = 2  // release half of 079-locked doors

// ----- SCP HP by threat -----
export const SCP_HP = { weak: 40, medium: 80, strong: 200 } as const

// ----- SCP Player (SCP role) HP by threat -----
export const SCP_PLAYER_HP = { weak: 70, medium: 120, strong: 200 } as const

// ----- NPC Guards (SCP role) -----
export const NPC_GUARD_COUNT = 3
export const NPC_GUARD_HP = 60

// ----- Initial breach escape probabilities (by threat) -----
export const ESCAPE_PROB = {
  strong: { easy: 0.3, balanced: 0.5, hard: 0.7, hardcore: 0.7 },
  medium: { easy: 0.2, balanced: 0.4, hard: 0.6, hardcore: 0.6 },
  weak: { easy: 0.15, balanced: 0.3, hard: 0.5, hardcore: 0.5 },
} as const

// ----- Inventory -----
export const INVENTORY_MAX_SLOTS = 12

// ----- Crowbar -----
export const CROWBAR_FORCE_CHANCE = 0.6       // chance crowbar opens a jammed door

// ----- Guard survival win -----
export const GUARD_SURVIVAL_TURNS = 30        // turns guard must survive before evacuation

// ----- Auto-save -----
export const AUTOSAVE_INTERVAL_TURNS = 5      // auto-save every N turns
export const SAVE_KEY = 'scp-game-save'       // localStorage key for full game save
export const UNLOCK_KEY = 'scp-game-unlock'   // localStorage key for unlock state

// ----- Log -----
export const LOG_MAX_ENTRIES = 120            // max log entries kept

// ----- 3D Rendering -----
export const ROOM_SIZE = 10
export const WALL_HEIGHT = 4
export const PLAYER_RADIUS = 0.45
export const PLAYER_EYE_HEIGHT = 1.7
export const DOOR_HALF_WIDTH = 2
export const PLAYER_WALK_SPEED = 3.6
export const PLAYER_SPRINT_SPEED = 6.5
export const SCP_3D_TICK_INTERVAL = 1400      // ms between AI ticks in 3D mode
export const MOUSE_SENSITIVITY = 0.0022

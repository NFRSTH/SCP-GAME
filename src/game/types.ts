// ===== Core Game Types =====

export type GameMode = 'text' | '3d'
export type GamePhase =
  | 'menu'
  | 'mode-select'
  | 'role-select'
  | 'scp-select'
  | 'difficulty-select'
  | 'briefing'
  | 'playing'
  | 'paused'
  | 'game-over'
  | 'victory'

export type Role = 'class-d' | 'scientist' | 'guard' | 'scp'
export type Difficulty = 'easy' | 'balanced' | 'hard' | 'hardcore'
export type Direction = 'N' | 'S' | 'E' | 'W'
export type Zone =
  | 'support'
  | 'light'
  | 'labs'
  | 'heavy'
  | 'deep'
  | 'exit'

export type ItemType =
  | 'keycard'
  | 'weapon'
  | 'tool'
  | 'medical'
  | 'misc'
  | 'battery'
  | 'document'

export interface Item {
  id: string
  name: string
  description: string
  type: ItemType
  keycardLevel?: number
  damage?: number
  ammo?: number
  healAmount?: number
  battery?: number
  uses?: number
}

export interface ItemSpawn {
  itemId: string
  chance: number // 0..1 probability of being present
}

export interface Door {
  id: string
  from: string // room id
  to: string // room id
  direction: Direction // direction of travel FROM -> TO
  keycardRequired: number // 0 = open
  lockedDuringBreach?: boolean
  heavy?: boolean // heavy containment door
  broken?: boolean // malfunctioning, randomly opens/closes
}

export interface Room {
  id: string
  name: string
  shortName: string
  description: string
  ambient: string
  x: number
  y: number
  zone: Zone
  isExit?: boolean
  spawnFor?: Role
  items: ItemSpawn[]
  scpSpawns?: string[] // scp ids that begin here (contained)
  isDark?: boolean
  lore?: string
}

export type SCPThreat = 'weak' | 'medium' | 'strong'

export type SCPAI =
  | 'statue' // moves when unobserved
  | 'shy' // passive until face seen
  | 'patrol' // roams corridors
  | 'chase' // pursues player on sight
  | 'phase' // moves through walls
  | 'ambush' // waits then ambushes
  | 'mimic' // lures with voice
  | 'ai' // controls facility systems
  | 'guardian' // guards an area
  | 'reptile' // relentless adaptive chase

export interface SCP {
  id: string
  number: string // e.g. "SCP-173"
  name: string
  threat: SCPThreat
  ai: SCPAI
  description: string
  ability: string
  weakness: string
  speed: number // tiles per turn / units per second (0-2)
  damage: number // damage per encounter
  killOnContact: boolean
  difficulty: number // 1-10
  unlockable: boolean // playable as SCP
  color: string // hex for 3D rendering
  winCondition: string
}

export interface RoleDef {
  id: Role
  name: string
  description: string
  goal: string
  gameplay: string
  startHealth: number
  startStamina: number
  startItems: string[]
  startKeycard: number
  hasWeapon: boolean
  locked?: boolean
  lockReason?: string
}

export interface DifficultyDef {
  id: Difficulty
  name: string
  description: string
  startHealth: number
  startStamina: number
  resourceMultiplier: number
  scpSpeedMultiplier: number
  scpDamageMultiplier: number
  aiSmart: number // 0..1 how smart SCP AI is
  staminaDrainMultiplier: number
  startBattery: number
  startItems: string[]
  // ===== Balance patch fields =====
  lethalWarningTurns: number // grace turns before a lethal SCP kills (0 = instant). Fairness guarantee.
  showProximityWarnings: boolean // warn player when an SCP is in an adjacent room
  maxConcurrentRoamingSCPs: number // cap on simultaneously roaming SCPs (prevents overwhelm)
  scpEscapeChancePerTick: number // probability a contained SCP breaks out per tick
  maxLockedDoors: number // cap on doors SCP-079 can lock at once (ensures escape routes)
  powerCutChance: number // probability per tick SCP-079 cuts power (0 = disabled on easy)
  powerOutageDuration: number // ticks before power auto-recovers
  scpAbilityCooldownMultiplier: number // multiplier for SCP ability cooldowns (>1 = slower abilities)
}

// ===== Runtime game state =====

export interface InventorySlot {
  item: Item
  qty: number
}

export interface SCPInstance {
  scpId: string
  roomId: string
  hp: number
  state: 'contained' | 'roaming' | 'hunting' | 'docile' | 'enraged'
  lastSeenPlayerRoom?: string
  cooldown: number
  windup: number // grace timer for lethal SCPs (counts down; 0 = ready to kill). Reset when player escapes.
}

export interface LogEntry {
  id: number
  turn: number
  type: 'info' | 'danger' | 'success' | 'system' | 'combat' | 'lore' | 'move'
  text: string
}

export interface GameEvent {
  type: string
  text: string
  severity: 'info' | 'warn' | 'danger'
}

// ===== Runtime state interfaces (shared across modules) =====

export interface UnlockState {
  scpUnlocked: boolean
  runsCompleted: number
  bestRole: Role | null
}

export interface PlayerState {
  roomId: string
  health: number
  maxHealth: number
  stamina: number
  maxStamina: number
  sanity: number
  inventory: InventorySlot[]
  flashlightOn: boolean
  flashlightBattery: number
  watchingSCP173: boolean
  lookedAt096: boolean
  weaponEquipped: string | null
  alive: boolean
  noiseLevel: number
  turnsSurvived: number
  powerRestored: boolean
  scp079Shutdown: boolean
}

export interface FacilityState {
  powerOn: boolean
  breachActive: boolean
  breachLevel: number
  alarmOn: boolean
  brokenDoors: string[]
  lockedDoors: string[]
  powerOutageTicks: number
}

// Store action signatures — used by extracted modules (ai, movement, events)
export interface GameState {
  // Setup
  phase: GamePhase
  mode: GameMode | null
  role: Role | null
  scpId: string | null
  difficulty: Difficulty
  unlock: UnlockState

  // Runtime
  player: PlayerState
  facility: FacilityState
  scps: SCPInstance[]
  loot: Record<string, Item[]>
  log: LogEntry[]
  turn: number
  logCounter: number
  victoryType: string | null
  deathCause: string | null

  // Actions
  setPhase: (p: GamePhase) => void
  selectMode: (m: GameMode) => void
  selectRole: (r: Role) => void
  selectSCP: (id: string) => void
  selectDifficulty: (d: Difficulty) => void
  startGame: () => void
  resetToMenu: () => void
  move: (dir: Direction) => { ok: boolean; reason?: string }
  tryMoveToRoom: (roomId: string) => { ok: boolean; reason?: string }
  pickupItem: (itemId: string) => void
  pickupAll: () => void
  useItem: (itemId: string) => void
  equipWeapon: (itemId: string) => void
  toggleFlashlight: () => void
  toggleWatch173: () => void
  attack: (scpId: string) => void
  interact: () => void
  setFlashlightWatch: (v: boolean) => void
  setLookedAt096: (v: boolean) => void
  makeNoise: (level: number) => void
  setPlayerRoom: (roomId: string) => void
  setWatching173: (v: boolean) => void
  moveSCP: (dir: Direction) => { ok: boolean; reason?: string }
  tick: () => void
  endGame: (victory: boolean, cause: string, type?: string) => void
  consumeItem: (id: string) => void
  checkWinByExit: () => void
  addLog: (type: LogEntry['type'], text: string) => void
  hasKeycard: (level: number) => boolean
  highestKeycard: () => number
  currentRoom: () => ReturnType<typeof import('./data/facility').getRoom>
  scpInRoom: (roomId: string) => SCPInstance[]
}

// Type aliases for get/set used by extracted modules
export type StoreGet = () => GameState
export type StoreSet = (fn: (s: GameState) => Partial<GameState>) => void

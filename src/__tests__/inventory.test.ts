// ===== Tests for inventory operations (store actions) =====
// Pickup, pickup-all, use (medical/battery/weapon), equip, consume.

import { useGame } from '@/game/store'
import { getItem } from '@/game/data/items'
import { INVENTORY_MAX_SLOTS } from '@/game/constants'
import { resetStore, startPlaying, giveItem, mockRandom } from './helpers'
import type { Item } from '@/game/types'

beforeEach(() => {
  resetStore()
  mockRandom(0.99)
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('pickupItem() — moving loot into the inventory', () => {
  it('moves an item from the room loot into the inventory', () => {
    const medkit = getItem('medkit')!
    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': [medkit] },
    })
    useGame.getState().pickupItem('medkit')
    const inv = useGame.getState().player.inventory
    expect(inv.find((s) => s.item.id === 'medkit')).toBeDefined()
    expect(inv.find((s) => s.item.id === 'medkit')!.qty).toBe(1)
    // Loot no longer contains the medkit.
    expect(useGame.getState().loot['cells-d']).not.toContainEqual(medkit)
  })

  it('increments the qty when the item is already in the inventory', () => {
    const bandage = getItem('bandage')!
    startPlaying({
      player: { roomId: 'cells-d' },
      loot: { 'cells-d': [bandage] },
    })
    giveItem('bandage', 1) // inventory already has 1 bandage
    useGame.getState().pickupItem('bandage')
    const slot = useGame.getState().player.inventory.find((s) => s.item.id === 'bandage')
    expect(slot?.qty).toBe(2)
  })

  it('is a no-op when the item is not in the room loot', () => {
    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': [] },
    })
    useGame.getState().pickupItem('medkit')
    expect(useGame.getState().player.inventory).toEqual([])
  })

  it('logs a success message with the picked-up item name', () => {
    const medkit = getItem('medkit')!
    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': [medkit] },
    })
    useGame.getState().pickupItem('medkit')
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/Picked up: First Aid Kit/i)
  })

  it('logs lore when picking up a document', () => {
    const doc = getItem('docLore1')!
    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': [doc] },
    })
    useGame.getState().pickupItem('docLore1')
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/breach began in Heavy Containment/i)
  })
})

describe('pickupItem() — inventory slot cap', () => {
  it('refuses pickup when the inventory is full and the item is new', () => {
    // Fill the inventory to the cap with distinct items.
    const fillIds = [
      'keycard1', 'keycard2', 'keycard3', 'keycard4', 'keycard5',
      'radio', 'crowbar', 'flashlight', 'bandage', 'medkit', 'battery', 'pistol',
    ] // 12 distinct items = INVENTORY_MAX_SLOTS
    expect(fillIds.length).toBe(INVENTORY_MAX_SLOTS)

    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': [getItem('rifle')!] }, // rifle not in inventory
    })
    for (const id of fillIds) giveItem(id, 1)
    expect(useGame.getState().player.inventory.length).toBe(INVENTORY_MAX_SLOTS)

    useGame.getState().pickupItem('rifle')
    // Inventory unchanged.
    expect(useGame.getState().player.inventory.length).toBe(INVENTORY_MAX_SLOTS)
    expect(useGame.getState().player.inventory.find((s) => s.item.id === 'rifle')).toBeUndefined()
    // Loot still contains the rifle.
    expect(useGame.getState().loot['cells-d'].find((i) => i.id === 'rifle')).toBeDefined()

    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/inventory is full/i)
  })

  it('still allows pickup of an existing item when the inventory is full', () => {
    // Inventory is full but contains a bandage. Picking up another bandage
    // should succeed (qty++).
    const fillIds = [
      'keycard1', 'keycard2', 'keycard3', 'keycard4', 'keycard5',
      'radio', 'crowbar', 'flashlight', 'bandage', 'medkit', 'battery', 'pistol',
    ]
    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': [getItem('bandage')!] },
    })
    for (const id of fillIds) giveItem(id, 1)
    expect(useGame.getState().player.inventory.length).toBe(INVENTORY_MAX_SLOTS)

    useGame.getState().pickupItem('bandage')
    const slot = useGame.getState().player.inventory.find((s) => s.item.id === 'bandage')
    expect(slot?.qty).toBe(2)
  })

  it('INVENTORY_MAX_SLOTS is 12', () => {
    expect(INVENTORY_MAX_SLOTS).toBe(12)
  })
})

describe('pickupAll() — bulk pickup', () => {
  it('picks up every item in the current room loot', () => {
    const loot: Item[] = [getItem('medkit')!, getItem('bandage')!, getItem('battery')!]
    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': loot },
    })
    useGame.getState().pickupAll()
    const inv = useGame.getState().player.inventory
    expect(inv.length).toBe(3)
    expect(inv.map((s) => s.item.id).sort()).toEqual(['bandage', 'battery', 'medkit'])
    expect(useGame.getState().loot['cells-d']).toEqual([])
  })

  it('logs "Nothing here" when the room has no loot', () => {
    startPlaying({
      player: { roomId: 'cells-d', inventory: [] },
      loot: { 'cells-d': [] },
    })
    useGame.getState().pickupAll()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/nothing here to take/i)
  })
})

describe('useItem() — medical items', () => {
  it('heals the player by healAmount and consumes the item', () => {
    startPlaying({
      player: { roomId: 'cells-d', health: 50, maxHealth: 100 },
    })
    giveItem('medkit', 1) // healAmount=50
    useGame.getState().useItem('medkit')
    expect(useGame.getState().player.health).toBe(100)
    // Medkit consumed.
    expect(useGame.getState().player.inventory.find((s) => s.item.id === 'medkit')).toBeUndefined()
  })

  it('caps healing at maxHealth', () => {
    startPlaying({
      player: { roomId: 'cells-d', health: 80, maxHealth: 100 },
    })
    giveItem('medkit', 1) // heals 50, would go to 130
    useGame.getState().useItem('medkit')
    expect(useGame.getState().player.health).toBe(100)
  })

  it('heals with a bandage (healAmount=20)', () => {
    startPlaying({
      player: { roomId: 'cells-d', health: 50, maxHealth: 100 },
    })
    giveItem('bandage', 1)
    useGame.getState().useItem('bandage')
    expect(useGame.getState().player.health).toBe(70)
  })

  it('logs the heal amount', () => {
    startPlaying({
      player: { roomId: 'cells-d', health: 50, maxHealth: 100 },
    })
    giveItem('medkit', 1)
    useGame.getState().useItem('medkit')
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/\+50 HP/i)
  })
})

describe('useItem() — battery', () => {
  it('recharges the flashlight battery to 100', () => {
    startPlaying({
      player: { roomId: 'cells-d', flashlightBattery: 30 },
    })
    giveItem('battery', 1)
    useGame.getState().useItem('battery')
    expect(useGame.getState().player.flashlightBattery).toBe(100)
    expect(useGame.getState().player.inventory.find((s) => s.item.id === 'battery')).toBeUndefined()
  })

  it('logs the recharge message', () => {
    startPlaying({
      player: { roomId: 'cells-d', flashlightBattery: 30 },
    })
    giveItem('battery', 1)
    useGame.getState().useItem('battery')
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/Replaced flashlight batteries.*100%/i)
  })
})

describe('useItem() — weapon (delegates to equipWeapon)', () => {
  it('equips the weapon when used', () => {
    startPlaying({
      player: { roomId: 'cells-d', weaponEquipped: null },
    })
    giveItem('pistol', 1)
    useGame.getState().useItem('pistol')
    expect(useGame.getState().player.weaponEquipped).toBe('pistol')
  })
})

describe('useItem() — documents', () => {
  it('logs the document description without consuming it', () => {
    startPlaying({
      player: { roomId: 'cells-d' },
    })
    giveItem('docLore1', 1)
    useGame.getState().useItem('docLore1')
    // Document is NOT consumed.
    expect(useGame.getState().player.inventory.find((s) => s.item.id === 'docLore1')).toBeDefined()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/breach began in Heavy Containment/i)
  })
})

describe('useItem() — keyO5 override token', () => {
  it('unlocks one locked door and consumes the token', () => {
    startPlaying({
      player: { roomId: 'cells-d' },
      facility: { lockedDoors: ['d-cells-corr1', 'd-cells-server'] },
    })
    giveItem('keyO5', 1)
    useGame.getState().useItem('keyO5')
    // One door removed.
    expect(useGame.getState().facility.lockedDoors.length).toBe(1)
    // Token consumed.
    expect(useGame.getState().player.inventory.find((s) => s.item.id === 'keyO5')).toBeUndefined()
  })

  it('does nothing when there are no locked doors', () => {
    startPlaying({
      player: { roomId: 'cells-d' },
      facility: { lockedDoors: [] },
    })
    giveItem('keyO5', 1)
    useGame.getState().useItem('keyO5')
    // Token NOT consumed.
    expect(useGame.getState().player.inventory.find((s) => s.item.id === 'keyO5')).toBeDefined()
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/No locked doors to override/i)
  })
})

describe('equipWeapon()', () => {
  it('sets weaponEquipped to the weapon id', () => {
    startPlaying({ player: { roomId: 'cells-d', weaponEquipped: null } })
    giveItem('pistol', 1)
    useGame.getState().equipWeapon('pistol')
    expect(useGame.getState().player.weaponEquipped).toBe('pistol')
  })

  it('can switch between weapons', () => {
    startPlaying({ player: { roomId: 'cells-d', weaponEquipped: null } })
    giveItem('pistol', 1)
    giveItem('rifle', 1)
    useGame.getState().equipWeapon('pistol')
    expect(useGame.getState().player.weaponEquipped).toBe('pistol')
    useGame.getState().equipWeapon('rifle')
    expect(useGame.getState().player.weaponEquipped).toBe('rifle')
  })

  it('refuses to equip a non-weapon item', () => {
    startPlaying({ player: { roomId: 'cells-d', weaponEquipped: 'pistol' } })
    giveItem('medkit', 1)
    useGame.getState().equipWeapon('medkit')
    // weaponEquipped unchanged.
    expect(useGame.getState().player.weaponEquipped).toBe('pistol')
  })

  it('refuses to equip an item not in the inventory', () => {
    startPlaying({ player: { roomId: 'cells-d', weaponEquipped: null } })
    useGame.getState().equipWeapon('rifle')
    expect(useGame.getState().player.weaponEquipped).toBe(null)
  })

  it('logs the equip message', () => {
    startPlaying({ player: { roomId: 'cells-d', weaponEquipped: null } })
    giveItem('pistol', 1)
    useGame.getState().equipWeapon('pistol')
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/Equipped USP Pistol/i)
  })
})

describe('consumeItem() — qty decrement and slot removal', () => {
  it('decrements qty when more than 1 remains', () => {
    startPlaying({ player: { roomId: 'cells-d' } })
    giveItem('bandage', 3)
    useGame.getState().consumeItem('bandage')
    const slot = useGame.getState().player.inventory.find((s) => s.item.id === 'bandage')
    expect(slot?.qty).toBe(2)
  })

  it('removes the slot when qty reaches 0', () => {
    startPlaying({ player: { roomId: 'cells-d' } })
    giveItem('bandage', 1)
    useGame.getState().consumeItem('bandage')
    expect(useGame.getState().player.inventory.find((s) => s.item.id === 'bandage')).toBeUndefined()
  })

  it('clears weaponEquipped if the consumed item was the equipped weapon', () => {
    startPlaying({ player: { roomId: 'cells-d', weaponEquipped: 'pistol' } })
    giveItem('pistol', 1)
    useGame.getState().consumeItem('pistol')
    expect(useGame.getState().player.weaponEquipped).toBe(null)
  })

  it('does not clear weaponEquipped if a different item is consumed', () => {
    startPlaying({ player: { roomId: 'cells-d', weaponEquipped: 'pistol' } })
    giveItem('pistol', 1)
    giveItem('bandage', 1)
    useGame.getState().consumeItem('bandage')
    expect(useGame.getState().player.weaponEquipped).toBe('pistol')
  })

  it('is a no-op when the item is not in the inventory', () => {
    startPlaying({ player: { roomId: 'cells-d', inventory: [] } })
    useGame.getState().consumeItem('medkit')
    expect(useGame.getState().player.inventory).toEqual([])
  })
})

describe('toggleFlashlight()', () => {
  it('toggles the flashlight on/off', () => {
    startPlaying({ player: { roomId: 'cells-d', flashlightOn: false, flashlightBattery: 100 } })
    useGame.getState().toggleFlashlight()
    expect(useGame.getState().player.flashlightOn).toBe(true)
    useGame.getState().toggleFlashlight()
    expect(useGame.getState().player.flashlightOn).toBe(false)
  })

  it('refuses to turn on when the battery is dead', () => {
    startPlaying({ player: { roomId: 'cells-d', flashlightOn: false, flashlightBattery: 0 } })
    useGame.getState().toggleFlashlight()
    expect(useGame.getState().player.flashlightOn).toBe(false)
    const logText = useGame.getState().log.map((l) => l.text).join(' ')
    expect(logText).toMatch(/flashlight is dead/i)
  })
})

# Tests

Comprehensive Jest test suite for the SCP: SITE-19 Containment Breach game logic.

## Run all tests

```bash
bun test
```

Or with npx:

```bash
npx jest
```

Or with the npm script:

```bash
npm test
```

## Run a specific test file

```bash
npx jest __tests__/movement.test.ts
```

## Run in watch mode (during development)

```bash
npm run test:watch
```

## Run with coverage

```bash
npx jest --coverage
```

## Test Structure

| File | What it covers |
| --- | --- |
| `utils.test.ts` | Pure helpers — `rng`, `pick`, `roomDistance`, BFS pathfinding (`nextRoomToward`), `rollItems`, `is173Adjacent`, door data integrity. |
| `movement.test.ts` | Player & SCP movement: door existence, keycard requirements, stamina cost, bidirectional doors, SCP-079 lock + crowbar interactions, SCP-096 face-seen trigger, SCP-role movement, dark-room sanity loss. |
| `combat.test.ts` | `attack()` ammo consumption, damage to weak/medium SCPs, strong-SCP immunity (`WEAPON_IMMUNE_DAMAGE_MULT`), weapon/ammo requirements, SCP death, `resolveEncounter()`. |
| `scp-ai.test.ts` | `runSCPAI` state transitions: contained-SCP escape (with cap), SCP-173 freeze-when-watched, SCP-096 screaming windup, SCP-106 flashlight repel, SCP-079 door locking + power cuts, windup reset, proximity warnings. |
| `inventory.test.ts` | `pickupItem`, `pickupAll`, `useItem` (medical/battery/weapon/document/keyO5), `equipWeapon`, `consumeItem`, `toggleFlashlight`, slot cap (`INVENTORY_MAX_SLOTS`). |
| `win-conditions.test.ts` | `checkWinByExit` for every role, `interact()` at power-rm / scp079-core / scp860-door / exits, `endGame` victory/defeat unlock state, guard survival hint, exit room data integrity. |
| `api.test.ts` | Integration test for `/api/route.ts` using supertest — wraps the Next.js route handler in a Node `http.Server` and exercises GET, POST/PUT/DELETE 405 routing, and the server lifecycle. Also calls `GET()` directly to verify the handler contract. |
| `helpers.ts` | Shared test helpers — `resetStore`, `startPlaying`, `giveItem`, `makeSCP`, `mockRandom`. |

## Conventions

- **Store isolation**: every test resets the Zustand store in `beforeEach` via `resetStore()`. The store is a module-level singleton, so this prevents state from leaking between tests.
- **Deterministic RNG**: `mockRandom(value)` spies on `Math.random()` and forces a fixed return value. Tests that exercise probability-gated SCP behaviour pass `0` (always-succeed) or `0.99` (always-fail) explicitly.
- **Direct state setup**: tests use `startPlaying(overrides)` to build a minimal "playing" state without running `startGame()` (which rolls loot and SCP escapes via `rng`). This gives precise control over the initial conditions.
- **Tick awareness**: many store actions (`move`, `attack`, `useItem`, `interact`) call `tick()` internally. Tests that assert on post-action state account for the tick's side effects (stamina regen, breach dynamics, SCP AI).
- **No component/render tests**: per `CONTRIBUTING.md`, components and Three.js rendering are not unit-tested. Only pure game logic and the API endpoint are covered.

## Files Modified / Created

- `jest.config.ts` — Jest configuration with `ts-jest` ESM preset and `@/` path alias.
- `jest.setup.ts` — Global setup: in-memory `localStorage` mock for the Zustand `persist` middleware.
- `package.json` — Added `test` and `test:watch` scripts; added `jest`, `ts-jest`, `@types/jest`, `supertest`, `@types/supertest`, `ts-node` as dev dependencies.
- `__tests__/helpers.ts` — Shared test utilities.
- `__tests__/*.test.ts` — The 7 test suites described above.

  ## How to install

If you don't have Bun (test it by going into cmd and typing `bun`), use this:

powershell -c "irm bun.sh/install.ps1 | iex"

First step is to cd into the dir (the command assumes it's in your downloads; change if it's somewhere else):

cd %USERPROFILE%\Downloads\SCP-GAME-main\SCP-GAME-main

Then install dependencies:

bun install

Then set up the database:

bun run db:push

Run tests (optional):

bun test

Start the game:

bun run dev

When you're all done, head to http://localhost:3000 and enjoy!

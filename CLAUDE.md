# core-ui

React component library, ESM-only, bundled with Rolldown using `preserveModules` so each component ships as its own file.

## Treeshake invariants

Consumers depend on dead-code elimination dropping unused components. Three rules keep that working — violate any of them and unused components leak into consumer bundles:

1. **No module-level side effects in components.** No CSS imports, global registrations, or work done at module scope. `"sideEffects": false` in `package.json` is a promise to consumer bundlers; if a component breaks it, widen `sideEffects` to an explicit allowlist (e.g. `["**/*.css"]`) rather than leaving the field lying.

2. **Register a sentinel for every new component.** `examples/consumer/scripts/check-bundle.mjs` is the treeshake test: it builds a consumer that imports only `Button` and asserts that strings from other components are absent from the bundle. When you add a component, pick a unique runtime string from it (a class name, `data-*` value, displayed text — anything that survives bundling) and add it to `EXPECTED_ABSENT`. Without the sentinel, the test passes vacuously and a regression ships silently.

3. **Named exports only at the barrel.** `src/index.ts` must only re-export named symbols. Never `export default { Button, ... }` — the object literal is unshakable and forces every component into every consumer bundle.

## Source import style

Relative imports use the emitted `.js` extension (`from './Button.js'`), even though the source is `.ts`. This keeps the code portable to `moduleResolution: "NodeNext"` and matches what `tsc` writes into emitted `.d.ts` files. Not strictly required under `"Bundler"` resolution but applied consistently.

## Local verification

- `npm run typecheck && npm run lint && npm test && npm run build` — mirrors CI.
- `npm run verify:consumer` — builds the library, installs the consumer fixture, builds it, and runs the treeshake check. Run after changes to `rolldown.config.ts`, the `exports` map in `package.json`, the `sideEffects` field, or any new component.

# core-ui

React component library, ESM-only, bundled with Rolldown using `preserveModules` so each component ships as its own file.

## Headless by design

Components are headless. The library ships structure, behavior, ARIA, and `data-*` attributes — **no CSS, no Tailwind classes, no design tokens**. Variant/size props are surfaced to the DOM as data attributes (`data-variant="outline"`, `data-size="lg"`) so consumer apps style components by writing CSS keyed off those attributes, or by passing a `className` at the call site. This is the Radix/Headless UI pattern; it's what lets multiple consumer apps adopt the same primitives without inheriting one app's visual identity. If you find yourself wanting to add classes inside a component, stop and add a data attribute instead — the styling decision belongs to the consumer.

## Component file structure

Every component lives in its own directory under `src/components/`:

```
components/MyComponent/
  index.ts                 # Barrel: named re-exports of the component and its types
  MyComponent.tsx          # Implementation; re-exports types from the .types file at the bottom
  MyComponent.types.ts     # Interfaces and prop unions only — no runtime code
  MyComponent.test.tsx     # Vitest + Testing Library
  MyComponent.stories.tsx  # Storybook stories — see Dev surfaces below
  MyComponent.builder.ts   # `RegisteredComponent` config — omit if not Builder-registered
```

- **Types live in `MyComponent.types.ts`.** Implementation imports them with `import type` (so the file is fully elided at runtime under `verbatimModuleSyntax`), and re-exports them so consumers resolve them through the barrel.
- **Variant/size props become `data-*` attributes on the rendered element**, never internal class strings. Default values are absorbed at the component boundary (see the `T | null` rule below), so the data attribute always carries a meaningful value the consumer's CSS can target.
- **Builder-bound optional fields are typed as `T | null`, not `T | undefined`.** Builder serializes unset CMS fields as `null`; absorb it at the component boundary with `prop ?? default` instead of pushing the null through.
- **`MyComponent.builder.ts` is NOT re-exported from `src/index.ts`.** It's reached via deep import at `core-ui/components/MyComponent/MyComponent.builder`, which is handled automatically by two pieces of infrastructure: the `./components/*` subpath pattern in `package.json` exports, and a `globSync('src/components/*/*.builder.ts')` Rolldown input. Drop a `.builder.ts` into a component directory and both will pick it up — no per-component wiring. This keeps the Builder config (and the `@builder.io/sdk-react` type surface) out of every bundle that doesn't use Builder. Pair each new one with an `EXPECTED_ABSENT` sentinel (see Treeshake invariants below) so a regression can't sneak into the main barrel unnoticed.

## Treeshake invariants

Consumers depend on dead-code elimination dropping unused components. Three rules keep that working — violate any of them and unused components leak into consumer bundles:

1. **No module-level side effects in components.** No CSS imports, global registrations, or work done at module scope. `"sideEffects": false` in `package.json` is a promise to consumer bundlers; if a component breaks it, widen `sideEffects` to an explicit allowlist (e.g. `["**/*.css"]`) rather than leaving the field lying.

2. **Register a sentinel for every new component.** `examples/consumer/scripts/check-bundle.mjs` is the treeshake test: it builds a consumer that imports only `Button` and asserts that strings from other components are absent from the bundle. When you add a component, pick a unique runtime string from it (a class name, `data-*` value, displayed text — anything that survives bundling) and add it to `EXPECTED_ABSENT`. Without the sentinel, the test passes vacuously and a regression ships silently.

3. **Named exports only at the barrel.** `src/index.ts` must only re-export named symbols. Never `export default { Button, ... }` — the object literal is unshakable and forces every component into every consumer bundle.

## Dev surfaces

**Storybook** (`npm run storybook`, build with `build-storybook`) is the canonical way to see components in a browser. It does not ship in the published package (`files: ["dist"]`) and develops against `src/` (not `dist/`) so edits hot-reload. Config lives in `.storybook/`; stories are colocated as `MyComponent.stories.tsx` and import the library by its public name (`@jasonyangcis/core-ui`, aliased to `src/index.ts` in both `.storybook/main.ts`'s `viteFinal` and the `paths` map in `tsconfig.json`). The `@storybook/addon-a11y` panel is the meaningful signal for a headless library — it tests the ARIA you ship. Add a `tags: ['autodocs']` story per new component.

Because the library ships no CSS, `.storybook/preview.css` supplies demo styles keyed off the `data-*` attributes — this is the consumer styling pattern, deliberately kept out of the components.

**Stories must not leak into `dist/`.** Rolldown won't bundle them (its inputs are explicit), but `tsconfig.build.json` emits `.d.ts` for everything under `src/`, so `**/*.stories.ts(x)` is in that file's `exclude` list alongside tests. Keep it there.

## Source import style

Relative imports use the emitted `.js` extension (`from './Button.js'`), even though the source is `.ts`. This keeps the code portable to `moduleResolution: "NodeNext"` and matches what `tsc` writes into emitted `.d.ts` files. Not strictly required under `"Bundler"` resolution but applied consistently.

## Local verification

- `npm run typecheck && npm run lint && npm test && npm run build` — mirrors CI.
- `npm run verify:consumer` — builds the library, installs the consumer fixture, builds it, and runs the treeshake check. Run after changes to `rolldown.config.ts`, the `exports` map in `package.json`, the `sideEffects` field, or any new component.

# @jasonyangcis/core-ui

A headless React component library. It ships **structure, behavior, ARIA, and `data-*` attributes — no CSS, no Tailwind, no design tokens.** Consumer apps own styling by writing CSS keyed off the data attributes, or by passing a `className` at the call site. It's the Radix / Headless UI pattern: multiple apps adopt the same primitives without inheriting one app's visual identity.

- **ESM-only**, bundled with [Rolldown](https://rolldown.rs/) using `preserveModules` so each component ships as its own file.
- **Tree-shakeable** — `"sideEffects": false` plus per-component modules mean unused components are dropped from consumer bundles. A fixture test enforces this.
- **Builder.io ready** — components can ship an optional Builder registration that stays out of every bundle that doesn't use it.
- React 18/19, Node ≥ 24.

## Installation

This package is published to **GitHub Packages** from a private repo — installing it always requires a GitHub credential. See [`CONSUMER_SETUP.md`](./CONSUMER_SETUP.md) for the full walkthrough (PAT scopes, CI, Docker, Vercel/Netlify). The short version:

```bash
# 1. Create a Classic PAT with `repo` + `read:packages` scopes:
#    https://github.com/settings/tokens/new
export GITHUB_TOKEN=ghp_yourToken

# 2. Copy .npmrc.example to .npmrc at the root of your consumer repo, then:
npm install @jasonyangcis/core-ui
```

`.npmrc` (safe to commit — the token is resolved from the environment):

```
@jasonyangcis:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Peer dependencies: `react >=18`, `react-dom >=18`. `@builder.io/sdk-react >=5` is an **optional** peer — only needed if you use the Builder registrations.

## Usage

```tsx
import { Button } from '@jasonyangcis/core-ui'

function Example() {
  return (
    <Button variant="outline" size="lg" onClick={() => alert('hi')}>
      Click me
    </Button>
  )
}
```

The component renders no styles. `variant` and `size` are surfaced to the DOM as `data-*` attributes — style them in your own CSS:

```css
button[data-variant='outline'] {
  background: transparent;
  border: 1px solid currentColor;
}
button[data-size='lg'] {
  padding: 0.75rem 1.25rem;
  font-size: 1.125rem;
}
```

### `asChild`

Pass `asChild` to render the props onto your own element instead of a `<button>` (e.g. to make a link look like a button). `className` and `data-*` attributes are merged onto the child:

```tsx
<Button asChild variant="link">
  <a href="/docs">Docs</a>
</Button>
```

## Components

| Component | Props | Notes |
|---|---|---|
| `Button` | `variant`, `size`, `asChild`, plus all native `<button>` attributes | `variant`: `default \| destructive \| outline \| secondary \| ghost \| link` (→ `data-variant`). `size`: `default \| sm \| lg \| icon` (→ `data-size`). |

## Builder.io registration

Each component can ship an optional `*.builder.ts` exporting a `RegisteredComponent` config. It is **not** part of the main barrel — reach it via a deep import so the `@builder.io/sdk-react` type surface stays out of bundles that don't use Builder:

```ts
import { buttonConfig } from '@jasonyangcis/core-ui/components/Button/Button.builder'

// Register with your Builder content component:
customComponents={[buttonConfig]}
```

## Architecture & conventions

Every component lives in its own directory under `src/components/`:

```
components/MyComponent/
  index.ts                 # Barrel: named re-exports of the component and its types
  MyComponent.tsx          # Implementation; re-exports its types at the bottom
  MyComponent.types.ts     # Interfaces and prop unions only — no runtime code
  MyComponent.test.tsx     # Vitest + Testing Library
  MyComponent.builder.ts   # Builder RegisteredComponent config — omit if not registered
```

Key rules (see [`CLAUDE.md`](./CLAUDE.md) for the full reasoning):

- **Headless.** No CSS or class strings inside components. Want to style something? Add a `data-*` attribute and let the consumer target it.
- **Variant/size props → `data-*` attributes**, with defaults absorbed at the component boundary so the attribute always carries a meaningful value.
- **Builder-bound optional fields are typed `T | null`**, not `T | undefined` — Builder serializes unset CMS fields as `null`. Absorb it with `prop ?? default`.
- **Treeshake invariants:** no module-level side effects; named exports only at the barrel (never `export default { … }`); and register a sentinel string for every new component in the consumer fixture.
- **Relative imports use the emitted `.js` extension** (`from './Button.js'`) even though the source is `.ts`.

## Development

```bash
npm install
npm run dev          # rolldown in watch mode
```

Mirror CI locally:

```bash
npm run typecheck && npm run lint && npm test && npm run build
```

### Treeshake verification

`examples/consumer/` is a Vite fixture that imports only `Button` and asserts (in `scripts/check-bundle.mjs`) that strings from other components are absent from the built bundle. When you add a component, add a unique runtime string from it to `EXPECTED_ABSENT`, or the test passes vacuously and a regression ships silently.

```bash
npm run verify:consumer   # build the lib, install the fixture, build it, run the check
```

Run it after touching `rolldown.config.ts`, the `exports` map, the `sideEffects` field, or any new component.

## Scripts

| Script | What it does |
|---|---|
| `build` | Rolldown bundle (`preserveModules`) + `tsc` declarations |
| `dev` | Rolldown in watch mode |
| `typecheck` | `tsc --noEmit` |
| `lint` / `format` | ESLint / Prettier |
| `test` / `test:watch` | Vitest |
| `verify:consumer` | Build + consumer fixture build + treeshake check |
| `changeset` / `version` / `release` | [Changesets](https://github.com/changesets/changesets) release flow (publishes to GitHub Packages) |

## Releasing

Versioning and publishing run through Changesets:

```bash
npm run changeset        # describe the change, pick a semver bump
npm run version          # apply pending changesets, update CHANGELOG
npm run release          # build + publish to GitHub Packages
```

## License

MIT

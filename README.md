# @jasonyangcis/core-ui

A headless React component library. It ships **structure, behavior, ARIA, and `data-*` attributes — no CSS, no Tailwind, no design tokens.** Consumer apps own styling by writing CSS keyed off the data attributes, or by passing a `className` at the call site. It's the Radix / Headless UI pattern: multiple apps adopt the same primitives without inheriting one app's visual identity.

- **ESM-only**, bundled with [Rolldown](https://rolldown.rs/) using `preserveModules` so each component ships as its own file.
- **Tree-shakeable** — `"sideEffects": false` plus per-component modules mean unused components are dropped from consumer bundles. A fixture test enforces this.
- **Builder.io ready** — components can ship an optional Builder registration that stays out of every bundle that doesn't use it.
- React 19+, Node ≥ 24.

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

Peer dependencies: `react >=19`, `react-dom >=19` (the components rely on React 19's ref-as-prop API — there is no `forwardRef` shim). `@builder.io/sdk-react >=5` is an **optional** peer — only needed if you use the Builder registrations.

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
| `changeset` / `version` / `release` | [Changesets](https://github.com/changesets/changesets) release flow — normally driven by CI, see [Releasing](#releasing) |

## Releasing

Releases run through [Changesets](https://github.com/changesets/changesets) and are **published automatically by CI** — you normally never run `npm publish` or `npm run release` by hand. The `.github/workflows/release.yml` workflow runs `changesets/action` on every push to `main`.

### The normal flow

1. **Add a changeset with your PR.** In your feature branch, run:

   ```bash
   npm run changeset
   ```

   Pick the affected package, choose a bump, and write a human-readable summary. Because the package is **pre-1.0**, follow the 0.x convention: breaking changes are a **minor** bump (0.1 → 0.2), everything else is a **patch**. This drops a markdown file in `.changeset/` — commit it alongside your code.

2. **Merge your PR to `main`.** The Release workflow runs. If there are unconsumed changesets, `changesets/action` opens (or updates) a **"Version Packages" PR** that applies `npm run version` — bumping `package.json` and updating `CHANGELOG.md`.

3. **Merge the "Version Packages" PR.** That push to `main` triggers the workflow again; this time there are no pending changesets, so it runs `npm run release` (`npm run build && changeset publish`) and **publishes to GitHub Packages**.

So the only manual steps are: write a changeset, then merge two PRs (yours, then the auto-generated version PR). CI does the build and publish — it authenticates with the workflow's `GITHUB_TOKEN`, which has `packages: write`.

### Doing it locally (not recommended)

The same scripts exist for local use, but since the workflow auto-publishes on push, running them by hand usually just races CI or no-ops:

```bash
npm run version          # apply pending changesets, bump version, update CHANGELOG
npm run release          # build + changeset publish (needs an .npmrc with a write:packages token)
```

A local `changeset publish` is a safe no-op if CI already published that version — it prints "version X.Y.Z is already published" and exits 0. To publish locally you need an `.npmrc` mapping `@jasonyangcis` to `https://npm.pkg.github.com` with a token carrying the **`write:packages`** scope (the read-only consumer token in [`CONSUMER_SETUP.md`](./CONSUMER_SETUP.md) is not enough).

## License

MIT

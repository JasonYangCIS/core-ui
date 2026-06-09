# @jasonyangcis/core-ui

Headless React component library — ships structure, behavior, ARIA, and `data-*` attributes. **No CSS, no Tailwind, no design tokens.** Consumer apps own all styling. ESM-only, tree-shakeable, Builder.io ready.

- React 19+, Node ≥ 24
- Bundled with [Rolldown](https://rolldown.rs/) (`preserveModules` — each component is its own file)
- `"sideEffects": false` — unused components are dropped from consumer bundles

## Installation

Published to **GitHub Packages**. See [`CONSUMER_SETUP.md`](./CONSUMER_SETUP.md) for the full PAT walkthrough.

```bash
export GITHUB_TOKEN=ghp_yourToken
npm install @jasonyangcis/core-ui
```

`.npmrc` (safe to commit):
```
@jasonyangcis:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Peer deps: `react >=19`, `react-dom >=19`. `@builder.io/sdk-react >=5` is optional — only needed for Builder registrations.

## Usage

Components render no styles. Variant/size props are surfaced as `data-*` attributes — style them in your own CSS:

```tsx
import { Button } from '@jasonyangcis/core-ui'

<Button variant="outline" size="lg">Click me</Button>
```

```css
button[data-variant='outline'] { border: 1px solid currentColor; }
button[data-size='lg'] { padding: 0.75rem 1.25rem; }
```

Use `asChild` to render props onto your own element:

```tsx
<Button asChild variant="link"><a href="/docs">Docs</a></Button>
```

## Components

| Component | Props |
|---|---|
| `Button` | `variant` (`default \| destructive \| outline \| secondary \| ghost \| link`), `size` (`default \| sm \| lg \| icon`), `asChild`, native `<button>` attrs |

## Builder.io

Builder registration configs are **not** in the main barrel — import via deep path to avoid polluting non-Builder bundles:

```ts
import { buttonConfig } from '@jasonyangcis/core-ui/components/Button/Button.builder'
```

## Architecture

Each component lives in `src/components/MyComponent/`:

```
index.ts              # Barrel: named re-exports
MyComponent.tsx       # Implementation
MyComponent.types.ts  # Interfaces/unions only — no runtime code
MyComponent.test.tsx  # Vitest + Testing Library
MyComponent.stories.tsx       # Storybook (mandatory)
MyComponent.stories.css       # Demo styles keyed off data-* attrs
MyComponent.builder.ts        # Builder RegisteredComponent config (optional)
```

Key rules:
- **Headless.** No CSS inside components. Add a `data-*` attribute and let the consumer style it.
- **Variant/size → `data-*` attributes**, never class strings.
- **Builder optional fields typed `T | null`** (Builder serializes unset fields as `null`).
- **Named exports only** at the barrel — no `export default { … }`.
- **Relative imports use `.js` extension** (`from './Button.js'`) even though source is `.ts`.

## Scripts

| Script | What it does |
|---|---|
| `build` | Rolldown bundle + `tsc` declarations |
| `dev` | Rolldown watch mode |
| `typecheck` / `lint` / `format` | tsc / ESLint / Prettier |
| `test` / `test:watch` | Vitest |
| `storybook` | Storybook dev server |
| `verify:consumer` | Build + consumer fixture + treeshake check |
| `changeset` / `version` / `release` | Changesets release flow |

## Releasing

Releases run through [Changesets](https://github.com/changesets/changesets) and are **published automatically by CI** on merge to `main`.

1. In your feature branch: `npm run changeset` — pick a bump, write a summary, commit the `.changeset/` file.
2. Merge your PR → CI opens a "Version Packages" PR.
3. Merge that PR → CI publishes to GitHub Packages.

Pre-1.0 convention: breaking changes = **minor** bump (0.1 → 0.2), everything else = **patch**.

## License

MIT

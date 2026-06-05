# @jasonyangcis/core-ui

## 0.4.0

### Minor Changes

- 4f5743a: Add headless `Card` surface primitive. Emits `data-slot="card"`; consumers own all visuals via CSS keyed off that attribute or a `className` at the call site.

## 0.3.0

### Minor Changes

- 96575b4: Add headless Badge component (variant surfaced as `data-variant`, marked with `data-slot="badge"`).

## 0.2.0

### Minor Changes

- f17cf83: Require React 19+. The components use React 19's ref-as-prop API (no `forwardRef` shim), so the `react` and `react-dom` peer dependency ranges are now `>=19`. Consumers on React 18 must upgrade.

## 0.1.0

### Minor Changes

- 5c06db4: Publish to GitHub Packages as `@jasonyangcis/core-ui` (private). Consumers need an `.npmrc` mapping the `@jasonyangcis` scope to `https://npm.pkg.github.com` and an auth token with `read:packages`.

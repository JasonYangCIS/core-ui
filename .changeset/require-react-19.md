---
'@jasonyangcis/core-ui': minor
---

Require React 19+. The components use React 19's ref-as-prop API (no `forwardRef` shim), so the `react` and `react-dom` peer dependency ranges are now `>=19`. Consumers on React 18 must upgrade.

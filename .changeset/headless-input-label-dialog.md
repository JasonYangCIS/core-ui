---
"@jasonyangcis/core-ui": minor
---

Add headless `Input`, `Label`, and `Dialog` primitives. `Input` and `Label`
expose `data-slot="input"` / `data-slot="label"`; `Dialog` re-exports the Radix
dialog parts and surfaces `data-slot="dialog-overlay"`, `data-slot="dialog-content"`,
and `data-slot="dialog-close-button"` for consumer styling. `Label` and `Dialog`
depend on `@radix-ui/react-label` and `@radix-ui/react-dialog` as optional peer
dependencies.

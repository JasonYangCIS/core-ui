# @jasonyangcis/core-ui

## 0.7.0

### Minor Changes

- 464930f: Add three headless marketing primitives migrated from the app:
  - `FaqList` — accordion-style FAQ section. Renders `data-slot="faq-list"` section with a `<dl>` of `<details>`/`<summary>` items. Each item exposes `data-slot` attributes for heading, question, indicator, and answer. Includes `FaqList.builder.ts` for Builder.io registration.
  - `HeroCentered` — centered marketing hero. Renders `data-slot="hero-centered"` section with eyebrow rules, a split heading (lead + accent span), body, and CTA. Accepts a `ctaSlot` render prop so consumers can inject framework-specific links. Includes `HeroCentered.builder.ts`.
  - `HeroSplit` — two-column hero with image panel. Renders `data-slot="hero-split"` grid with text and image columns. Image column supports frame chrome (`frameLabel`, `frameFootLeft`, `frameFootRight`) and a `data-has-frame-chrome` attribute. Accepts `imageSlot`, `ctaSlot`, and `secondaryCtaSlot` render props for consumer overrides. Includes `HeroSplit.builder.ts`.

## 0.6.0

### Minor Changes

- 7f1fda8: Add `AnnouncementBar` headless primitive with `AnnouncementBar.builder.ts` for Builder.io registration. Renders a `data-slot="announcement-bar"` root (div or anchor when `href` is set), glyph slots on both sides of the message, and `data-linked="true"` on the anchor variant.

## 0.5.0

### Minor Changes

- 47c25da: Add headless `Input`, `Label`, and `Dialog` primitives. `Input` and `Label`
  expose `data-slot="input"` / `data-slot="label"`; `Dialog` re-exports the Radix
  dialog parts and surfaces `data-slot="dialog-overlay"`, `data-slot="dialog-content"`,
  and `data-slot="dialog-close-button"` for consumer styling. `Label` and `Dialog`
  depend on `@radix-ui/react-label` and `@radix-ui/react-dialog` as optional peer
  dependencies.

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

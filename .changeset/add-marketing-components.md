---
"@jasonyangcis/core-ui": minor
---

Add three headless marketing primitives migrated from the app:

- `FaqList` — accordion-style FAQ section. Renders `data-slot="faq-list"` section with a `<dl>` of `<details>`/`<summary>` items. Each item exposes `data-slot` attributes for heading, question, indicator, and answer. Includes `FaqList.builder.ts` for Builder.io registration.
- `HeroCentered` — centered marketing hero. Renders `data-slot="hero-centered"` section with eyebrow rules, a split heading (lead + accent span), body, and CTA. Accepts a `ctaSlot` render prop so consumers can inject framework-specific links. Includes `HeroCentered.builder.ts`.
- `HeroSplit` — two-column hero with image panel. Renders `data-slot="hero-split"` grid with text and image columns. Image column supports frame chrome (`frameLabel`, `frameFootLeft`, `frameFootRight`) and a `data-has-frame-chrome` attribute. Accepts `imageSlot`, `ctaSlot`, and `secondaryCtaSlot` render props for consumer overrides. Includes `HeroSplit.builder.ts`.

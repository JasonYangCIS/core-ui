import type { Ref } from 'react'
import type { HeroCenteredProps } from './HeroCentered.types.js'

function splitHeading(heading: string): { lead: string; accent: string } {
  const trimmed = heading.trim()
  const lastSpace = trimmed.lastIndexOf(' ')
  if (lastSpace === -1) return { lead: '', accent: trimmed }
  return {
    lead: trimmed.slice(0, lastSpace),
    accent: trimmed.slice(lastSpace + 1),
  }
}

export function HeroCentered({
  heading,
  body,
  ctaLabel,
  ctaHref,
  headingLevel,
  eyebrow = 'XENOSPHERE / TRANSMISSION / VOL. 01',
  ctaSlot,
  className,
  ref,
  ...rest
}: HeroCenteredProps) {
  const Heading = headingLevel ?? 'h1'
  const parts = heading ? splitHeading(heading) : null

  return (
    <section data-slot="hero-centered" className={className} ref={ref as Ref<HTMLElement>} {...rest}>
      {eyebrow && (
        <div data-slot="hero-centered-eyebrow">
          <span data-slot="hero-centered-eyebrow-rule" aria-hidden="true" />
          {eyebrow}
          <span data-slot="hero-centered-eyebrow-rule" aria-hidden="true" />
        </div>
      )}

      {parts && (
        <Heading data-slot="hero-centered-heading">
          {parts.lead && (
            <>
              {parts.lead}
              <br />
            </>
          )}
          <span data-slot="hero-centered-heading-accent">{parts.accent}</span>
        </Heading>
      )}

      {body && <p data-slot="hero-centered-body">{body}</p>}

      {ctaSlot ?? (ctaLabel && ctaHref ? (
        <a
          data-slot="hero-centered-cta"
          data-variant="default"
          data-size="lg"
          href={ctaHref}
        >
          {ctaLabel}
        </a>
      ) : null)}
    </section>
  )
}

export type { HeroCenteredProps } from './HeroCentered.types.js'

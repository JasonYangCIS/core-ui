import type { ReactNode, Ref } from 'react'
import type { HeroSplitProps } from './HeroSplit.types.js'

function renderHeadingContent(heading: string, accent?: string | null): ReactNode {
  if (!accent) return heading
  const idx = heading.toLowerCase().indexOf(accent.toLowerCase())
  if (idx === -1) return heading
  const before = heading.slice(0, idx)
  const match = heading.slice(idx, idx + accent.length)
  const after = heading.slice(idx + accent.length)
  return (
    <>
      {before}
      <span data-slot="hero-split-heading-accent">{match}</span>
      {after}
    </>
  )
}

export function HeroSplit({
  eyebrow,
  heading,
  headingAccent,
  body,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageUrl,
  imageAlt,
  headingLevel,
  imagePosition,
  frameLabel,
  frameFootLeft,
  frameFootRight,
  imageSlot,
  ctaSlot,
  secondaryCtaSlot,
  className,
  ref,
  ...rest
}: HeroSplitProps) {
  const Heading = headingLevel ?? 'h1'
  const hasFrameChrome = Boolean(frameLabel || frameFootLeft || frameFootRight)
  const imageOnLeft = (imagePosition ?? 'right') === 'left'

  const imageBlock =
    imageUrl || imageSlot ? (
      <div
        data-slot="hero-split-image-frame"
        data-has-frame-chrome={hasFrameChrome || undefined}
      >
        <span data-slot="corner-tl" aria-hidden="true" />
        <span data-slot="corner-br" aria-hidden="true" />

        {frameLabel && <span data-slot="hero-split-frame-label">{frameLabel}</span>}

        <div data-slot="hero-split-inner-image">
          {imageSlot ?? (imageUrl ? (
            <img src={imageUrl} alt={imageAlt ?? ''} loading="lazy" data-slot="hero-split-image" />
          ) : null)}
          <div data-slot="hero-split-scanlines" aria-hidden="true" />
        </div>

        {(frameFootLeft || frameFootRight) && (
          <div data-slot="hero-split-frame-foot">
            {frameFootLeft && (
              <span data-slot="hero-split-frame-foot-left">{frameFootLeft}</span>
            )}
            {frameFootRight && (
              <span data-slot="hero-split-frame-foot-right">{frameFootRight}</span>
            )}
          </div>
        )}
      </div>
    ) : null

  const textBlock = (
    <div data-slot="hero-split-text">
      {eyebrow && (
        <div data-slot="hero-split-eyebrow">
          <span data-slot="hero-split-eyebrow-rule" aria-hidden="true" />
          {eyebrow}
        </div>
      )}

      {heading && (
        <Heading data-slot="hero-split-heading">
          {renderHeadingContent(heading, headingAccent)}
        </Heading>
      )}

      {body && <p data-slot="hero-split-body">{body}</p>}

      {((ctaLabel && ctaHref) || (secondaryCtaLabel && secondaryCtaHref)) && (
        <div data-slot="hero-split-cta-row">
          {ctaSlot ?? (ctaLabel && ctaHref ? (
            <a
              data-slot="hero-split-cta"
              data-variant="default"
              data-size="lg"
              href={ctaHref}
            >
              {ctaLabel}
            </a>
          ) : null)}
          {secondaryCtaSlot ?? (secondaryCtaLabel && secondaryCtaHref ? (
            <a
              data-slot="hero-split-cta-secondary"
              data-variant="outline"
              data-size="lg"
              href={secondaryCtaHref}
            >
              {secondaryCtaLabel}
            </a>
          ) : null)}
        </div>
      )}
    </div>
  )

  return (
    <section
      data-slot="hero-split"
      data-image-position={imagePosition ?? 'right'}
      className={className}
      ref={ref as Ref<HTMLElement>}
      {...rest}
    >
      {imageOnLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </section>
  )
}

export type { HeroSplitProps } from './HeroSplit.types.js'

import type { HTMLAttributes, ReactNode, Ref } from 'react'

export interface HeroSplitProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string | null
  heading?: string | null
  headingAccent?: string | null
  body?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
  secondaryCtaLabel?: string | null
  secondaryCtaHref?: string | null
  imageUrl?: string | null
  imageAlt?: string | null
  headingLevel?: 'h1' | 'h2' | null
  imagePosition?: 'left' | 'right' | null
  frameLabel?: string | null
  frameFootLeft?: string | null
  frameFootRight?: string | null
  imageSlot?: ReactNode
  ctaSlot?: ReactNode
  secondaryCtaSlot?: ReactNode
  ref?: Ref<HTMLElement>
}

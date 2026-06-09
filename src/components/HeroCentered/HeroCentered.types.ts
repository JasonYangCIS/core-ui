import type { HTMLAttributes, ReactNode, Ref } from 'react'

export interface HeroCenteredProps extends HTMLAttributes<HTMLElement> {
  heading?: string | null
  body?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
  headingLevel?: 'h1' | 'h2' | null
  eyebrow?: string | null
  ctaSlot?: ReactNode
  ref?: Ref<HTMLElement>
}

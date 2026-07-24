import type { HTMLAttributes, Ref } from 'react'

export type BlogCtaVariant = 'default' | 'emphasis'
export interface BlogCtaProps extends HTMLAttributes<HTMLElement> {
  heading?: string | null
  body?: string | null
  actionLabel?: string | null
  actionHref?: string | null
  secondaryLabel?: string | null
  secondaryHref?: string | null
  variant?: BlogCtaVariant | null
  ref?: Ref<HTMLElement>
}

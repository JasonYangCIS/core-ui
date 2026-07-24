import type { HTMLAttributes, Ref } from 'react'

export interface BlogPullQuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  quote?: string | null
  attribution?: string | null
  cite?: string | null
  ref?: Ref<HTMLQuoteElement>
}

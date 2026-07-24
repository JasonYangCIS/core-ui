import type { HTMLAttributes, Ref } from 'react'

export interface BlogRichTextProps extends HTMLAttributes<HTMLDivElement> {
  html?: string | null
  ref?: Ref<HTMLDivElement>
}

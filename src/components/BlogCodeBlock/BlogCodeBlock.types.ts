import type { HTMLAttributes, Ref } from 'react'

export interface BlogCodeBlockProps extends HTMLAttributes<HTMLElement> {
  code?: string | null
  language?: string | null
  label?: string | null
  ref?: Ref<HTMLElement>
}

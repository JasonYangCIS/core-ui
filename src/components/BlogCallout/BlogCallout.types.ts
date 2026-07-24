import type { HTMLAttributes, Ref } from 'react'

export type BlogCalloutVariant = 'note' | 'tip' | 'warning'
export interface BlogCalloutProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: string | null
  body?: string | null
  variant?: BlogCalloutVariant | null
  ref?: Ref<HTMLElement>
}

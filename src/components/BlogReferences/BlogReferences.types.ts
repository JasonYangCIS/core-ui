import type { HTMLAttributes, Ref } from 'react'

export interface BlogReferenceItem { title: string | null; href?: string | null; description?: string | null }
export interface BlogReferencesProps extends HTMLAttributes<HTMLElement> {
  heading?: string | null
  items?: BlogReferenceItem[] | null
  ref?: Ref<HTMLElement>
}

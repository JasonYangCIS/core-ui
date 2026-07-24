import type { HTMLAttributes, Ref } from 'react'

export interface BlogRelatedPost { title: string | null; href: string | null; excerpt?: string | null; imageSrc?: string | null; imageAlt?: string | null }
export interface BlogRelatedPostsProps extends HTMLAttributes<HTMLElement> {
  heading?: string | null
  posts?: BlogRelatedPost[] | null
  ref?: Ref<HTMLElement>
}

import type { HTMLAttributes, Ref } from 'react'

export interface BlogArticleHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: string | null
  eyebrow?: string | null
  description?: string | null
  authorName?: string | null
  authorHref?: string | null
  publishedAt?: string | null
  publishedLabel?: string | null
  readingTime?: string | null
  imageSrc?: string | null
  imageAlt?: string | null
  ref?: Ref<HTMLElement>
}

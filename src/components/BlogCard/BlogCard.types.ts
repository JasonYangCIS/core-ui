import type { HTMLAttributes, Ref } from 'react'

export interface BlogCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: string | null
  href?: string | null
  excerpt?: string | null
  category?: string | null
  imageSrc?: string | null
  imageAlt?: string | null
  publishedAt?: string | null
  publishedLabel?: string | null
  ref?: Ref<HTMLElement>
}

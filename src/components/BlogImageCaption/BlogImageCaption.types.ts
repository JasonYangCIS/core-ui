import type { HTMLAttributes, Ref } from 'react'

export type BlogImageCaptionAlign = 'start' | 'center' | 'end'
export interface BlogImageCaptionProps extends HTMLAttributes<HTMLElement> {
  src?: string | null
  alt?: string | null
  caption?: string | null
  credit?: string | null
  align?: BlogImageCaptionAlign | null
  width?: number | null
  height?: number | null
  ref?: Ref<HTMLElement>
}

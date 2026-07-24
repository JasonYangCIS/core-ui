import type { HTMLAttributes, Ref } from 'react'

export type BlogDividerVariant = 'solid' | 'dashed' | 'ornamental'
export interface BlogDividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: BlogDividerVariant | null
  ref?: Ref<HTMLHRElement>
}

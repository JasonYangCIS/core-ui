import type { HTMLAttributes, ReactNode, Ref } from 'react'

export interface ListIconItem {
  icon?: ReactNode
  label: string | null
}

export interface ListIconProps extends HTMLAttributes<HTMLElement> {
  items?: ListIconItem[] | null
  ref?: Ref<HTMLElement>
}

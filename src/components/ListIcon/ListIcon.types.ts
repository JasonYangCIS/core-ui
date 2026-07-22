import type { HTMLAttributes, ReactNode, Ref } from 'react'

export interface ListIconItem {
  label: string | null
  icon?: ReactNode
}

export interface ListIconProps extends HTMLAttributes<HTMLElement> {
  items?: ListIconItem[] | null
  ref?: Ref<HTMLElement>
}

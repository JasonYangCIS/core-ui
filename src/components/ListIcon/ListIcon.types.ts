import type { HTMLAttributes, Ref } from 'react'

export type ListIconName =
  | 'palmtree'
  | 'zap'
  | 'droplets'
  | 'scale'
  | 'leaf'
  | 'mountain'
  | 'sparkles'
  | 'waves'
  | 'sun'

export interface ListIconItem {
  icon?: ListIconName | null
  text?: string | null
}

export interface ListIconProps extends HTMLAttributes<HTMLElement> {
  items?: ListIconItem[] | null
  ref?: Ref<HTMLElement>
}

import type { HTMLAttributes, Ref } from 'react'

export interface ListIconItem {
  /** Lucide icon name in kebab-case, e.g. "zap", "droplet". */
  icon: string | null
  label: string | null
}

export interface ListIconProps extends HTMLAttributes<HTMLUListElement> {
  items?: ListIconItem[] | null
  ref?: Ref<HTMLUListElement>
}

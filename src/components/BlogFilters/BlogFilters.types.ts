import type { HTMLAttributes, Ref } from 'react'

export interface BlogFilterItem {
  label: string | null
  value: string | null
  href: string | null
}
export interface BlogFiltersProps extends HTMLAttributes<HTMLElement> {
  items?: BlogFilterItem[] | null
  activeValue?: string | null
  ariaLabel?: string | null
  ref?: Ref<HTMLElement>
}

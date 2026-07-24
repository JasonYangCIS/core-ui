import type { HTMLAttributes, Ref } from 'react'

export interface BlogGridProps extends HTMLAttributes<HTMLUListElement> {
  ariaLabel?: string | null
  ref?: Ref<HTMLUListElement>
}

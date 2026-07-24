import type { HTMLAttributes, Ref } from 'react'

export interface BlogPaginationProps extends HTMLAttributes<HTMLElement> {
  currentPage?: number | null
  totalPages?: number | null
  previousHref?: string | null
  nextHref?: string | null
  previousLabel?: string | null
  nextLabel?: string | null
  ariaLabel?: string | null
  ref?: Ref<HTMLElement>
}

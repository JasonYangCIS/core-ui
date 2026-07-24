import type { BlogPaginationProps } from './BlogPagination.types.js'

export function BlogPagination({ currentPage, totalPages, previousHref, nextHref, previousLabel, nextLabel, ariaLabel, className, ref, ...rest }: BlogPaginationProps) {
  const current = Math.max(1, currentPage ?? 1)
  const total = Math.max(current, totalPages ?? current)
  if (total <= 1 && !previousHref && !nextHref) return null
  return <nav ref={ref} className={className} data-slot="blog-pagination" aria-label={ariaLabel ?? 'Article pagination'} {...rest}>{previousHref && <a data-slot="blog-pagination-previous" rel="prev" href={previousHref}>{previousLabel ?? 'Previous'}</a>}<span data-slot="blog-pagination-status" aria-current="page">Page {current} of {total}</span>{nextHref && <a data-slot="blog-pagination-next" rel="next" href={nextHref}>{nextLabel ?? 'Next'}</a>}</nav>
}
export type { BlogPaginationProps } from './BlogPagination.types.js'

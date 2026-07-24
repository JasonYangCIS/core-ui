import type { BlogFiltersProps } from './BlogFilters.types.js'

export function BlogFilters({ items, activeValue, ariaLabel, className, ref, ...rest }: BlogFiltersProps) {
  const valid = items?.filter(item => item.label && item.value && item.href) ?? []
  if (!valid.length) return null
  return <nav ref={ref} className={className} data-slot="blog-filters" aria-label={ariaLabel ?? 'Filter articles'} {...rest}><ul data-slot="blog-filter-list">{valid.map(item => { const active = item.value === activeValue; return <li data-slot="blog-filter-item" key={item.value!}><a data-slot="blog-filter-link" data-active={active ? 'true' : 'false'} aria-current={active ? 'page' : undefined} href={item.href!}>{item.label}</a></li> })}</ul></nav>
}
export type { BlogFilterItem, BlogFiltersProps } from './BlogFilters.types.js'

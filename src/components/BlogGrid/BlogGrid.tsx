import { Children } from 'react'
import type { BlogGridProps } from './BlogGrid.types.js'

export function BlogGrid({ ariaLabel, className, children, ref, ...rest }: BlogGridProps) {
  if (!Children.count(children)) return null
  return <ul ref={ref} className={className} data-slot="blog-grid" aria-label={ariaLabel ?? undefined} {...rest}>{Children.map(children, child => <li data-slot="blog-grid-item">{child}</li>)}</ul>
}
export type { BlogGridProps } from './BlogGrid.types.js'

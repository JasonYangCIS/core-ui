import type { BlogDividerProps, BlogDividerVariant } from './BlogDivider.types.js'

export function BlogDivider({ variant, className, ref, ...rest }: BlogDividerProps) {
  const resolvedVariant: BlogDividerVariant = variant ?? 'solid'
  return <hr ref={ref} className={className} data-slot="blog-divider" data-variant={resolvedVariant} {...rest} />
}
export type { BlogDividerProps, BlogDividerVariant } from './BlogDivider.types.js'

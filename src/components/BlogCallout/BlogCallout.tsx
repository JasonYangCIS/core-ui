import type { BlogCalloutProps, BlogCalloutVariant } from './BlogCallout.types.js'

export function BlogCallout({ title, body, variant, className, children, ref, ...rest }: BlogCalloutProps) {
  if (!title && !body && !children) return null
  const resolvedVariant: BlogCalloutVariant = variant ?? 'note'
  return <aside ref={ref} className={className} data-slot="blog-callout" data-variant={resolvedVariant} aria-label={title ?? `${resolvedVariant} callout`} {...rest}>{title && <h2 data-slot="blog-callout-title">{title}</h2>}{body && <p data-slot="blog-callout-body">{body}</p>}{children}</aside>
}
export type { BlogCalloutProps, BlogCalloutVariant } from './BlogCallout.types.js'

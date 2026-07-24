import type { BlogCtaProps, BlogCtaVariant } from './BlogCta.types.js'

export function BlogCta({ heading, body, actionLabel, actionHref, secondaryLabel, secondaryHref, variant, className, ref, ...rest }: BlogCtaProps) {
  if (!heading && !body && !(actionLabel && actionHref)) return null
  const resolvedVariant: BlogCtaVariant = variant ?? 'default'
  return <aside ref={ref} className={className} data-slot="blog-cta" data-variant={resolvedVariant} aria-label={heading ?? 'Call to action'} {...rest}>{heading && <h2 data-slot="blog-cta-heading">{heading}</h2>}{body && <p data-slot="blog-cta-body">{body}</p>}{((actionLabel && actionHref) || (secondaryLabel && secondaryHref)) && <div data-slot="blog-cta-actions">{actionLabel && actionHref && <a data-slot="blog-cta-primary" href={actionHref}>{actionLabel}</a>}{secondaryLabel && secondaryHref && <a data-slot="blog-cta-secondary" href={secondaryHref}>{secondaryLabel}</a>}</div>}</aside>
}
export type { BlogCtaProps, BlogCtaVariant } from './BlogCta.types.js'

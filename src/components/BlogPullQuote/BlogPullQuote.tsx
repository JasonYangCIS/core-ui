import type { BlogPullQuoteProps } from './BlogPullQuote.types.js'

export function BlogPullQuote({ quote, attribution, cite, className, ref, ...rest }: BlogPullQuoteProps) {
  if (!quote) return null
  return <blockquote ref={ref} className={className} data-slot="blog-pull-quote" cite={cite ?? undefined} {...rest}><p data-slot="blog-pull-quote-text">{quote}</p>{attribution && <footer data-slot="blog-pull-quote-attribution">— <cite>{attribution}</cite></footer>}</blockquote>
}
export type { BlogPullQuoteProps } from './BlogPullQuote.types.js'

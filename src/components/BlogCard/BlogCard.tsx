import type { BlogCardProps } from './BlogCard.types.js'

export function BlogCard({ title, href, excerpt, category, imageSrc, imageAlt, publishedAt, publishedLabel, className, ref, ...rest }: BlogCardProps) {
  if (!title) return null
  return <article ref={ref} className={className} data-slot="blog-card" {...rest}>
    {imageSrc && <img data-slot="blog-card-image" src={imageSrc} alt={imageAlt ?? ''} />}
    {category && <p data-slot="blog-card-category">{category}</p>}
    <h2 data-slot="blog-card-title">{href ? <a data-slot="blog-card-link" href={href}>{title}</a> : title}</h2>
    {excerpt && <p data-slot="blog-card-excerpt">{excerpt}</p>}
    {publishedAt && <time data-slot="blog-card-date" dateTime={publishedAt}>{publishedLabel ?? publishedAt}</time>}
  </article>
}
export type { BlogCardProps } from './BlogCard.types.js'

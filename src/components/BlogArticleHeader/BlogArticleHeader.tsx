import type { BlogArticleHeaderProps } from './BlogArticleHeader.types.js'

export function BlogArticleHeader({ title, eyebrow, description, authorName, authorHref, publishedAt, publishedLabel, readingTime, imageSrc, imageAlt, className, ref, ...rest }: BlogArticleHeaderProps) {
  if (!title) return null
  const author = authorName && (authorHref ? <a data-slot="blog-article-author" href={authorHref}>{authorName}</a> : <span data-slot="blog-article-author">{authorName}</span>)
  return <header ref={ref} className={className} data-slot="blog-article-header" {...rest}>
    {eyebrow && <p data-slot="blog-article-eyebrow">{eyebrow}</p>}
    <h1 data-slot="blog-article-title">{title}</h1>
    {description && <p data-slot="blog-article-description">{description}</p>}
    {(author || publishedAt || readingTime) && <div data-slot="blog-article-meta">{author}{publishedAt && <time data-slot="blog-article-date" dateTime={publishedAt}>{publishedLabel ?? publishedAt}</time>}{readingTime && <span data-slot="blog-article-reading-time">{readingTime}</span>}</div>}
    {imageSrc && <img data-slot="blog-article-image" src={imageSrc} alt={imageAlt ?? ''} />}
  </header>
}
export type { BlogArticleHeaderProps } from './BlogArticleHeader.types.js'

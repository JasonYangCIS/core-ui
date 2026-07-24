import type { BlogRelatedPostsProps } from './BlogRelatedPosts.types.js'

export function BlogRelatedPosts({ heading, posts, className, ref, ...rest }: BlogRelatedPostsProps) {
  const valid = posts?.filter(post => post.title && post.href) ?? []
  if (!valid.length) return null
  return <section ref={ref} className={className} data-slot="blog-related-posts" {...rest}><h2 data-slot="blog-related-heading">{heading ?? 'Related posts'}</h2><ul data-slot="blog-related-list">{valid.map(post => <li data-slot="blog-related-item" key={post.href!}><article>{post.imageSrc && <img data-slot="blog-related-image" src={post.imageSrc} alt={post.imageAlt ?? ''} />}<h3 data-slot="blog-related-title"><a data-slot="blog-related-link" href={post.href!}>{post.title}</a></h3>{post.excerpt && <p data-slot="blog-related-excerpt">{post.excerpt}</p>}</article></li>)}</ul></section>
}
export type { BlogRelatedPost, BlogRelatedPostsProps } from './BlogRelatedPosts.types.js'

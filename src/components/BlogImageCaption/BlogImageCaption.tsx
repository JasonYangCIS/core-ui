import type { BlogImageCaptionAlign, BlogImageCaptionProps } from './BlogImageCaption.types.js'

export function BlogImageCaption({ src, alt, caption, credit, align, width, height, className, ref, ...rest }: BlogImageCaptionProps) {
  if (!src) return null
  const resolvedAlign: BlogImageCaptionAlign = align ?? 'center'
  return <figure ref={ref} className={className} data-slot="blog-image-caption" data-align={resolvedAlign} {...rest}><img data-slot="blog-image" src={src} alt={alt ?? ''} width={width ?? undefined} height={height ?? undefined} />{(caption || credit) && <figcaption data-slot="blog-image-caption-text">{caption}{caption && credit && ' '}{credit && <span data-slot="blog-image-credit">{credit}</span>}</figcaption>}</figure>
}
export type { BlogImageCaptionAlign, BlogImageCaptionProps } from './BlogImageCaption.types.js'

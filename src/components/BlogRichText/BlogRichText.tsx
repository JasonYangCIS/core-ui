import type { BlogRichTextProps } from './BlogRichText.types.js'

export function BlogRichText({ html, className, children, ref, ...rest }: BlogRichTextProps) {
  if (!html && !children) return null
  return <div ref={ref} className={className} data-slot="blog-rich-text" {...rest} {...(html ? { dangerouslySetInnerHTML: { __html: html } } : { children })} />
}
export type { BlogRichTextProps } from './BlogRichText.types.js'

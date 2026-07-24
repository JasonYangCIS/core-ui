import type { BlogReferencesProps } from './BlogReferences.types.js'

export function BlogReferences({ heading, items, className, ref, ...rest }: BlogReferencesProps) {
  const valid = items?.filter(item => item.title) ?? []
  if (!valid.length) return null
  return <section ref={ref} className={className} data-slot="blog-references" {...rest}><h2 data-slot="blog-references-heading">{heading ?? 'References'}</h2><ol data-slot="blog-references-list">{valid.map((item, index) => <li data-slot="blog-reference" key={`${item.title}-${index}`}><cite>{item.href ? <a data-slot="blog-reference-link" href={item.href}>{item.title}</a> : item.title}</cite>{item.description && <p data-slot="blog-reference-description">{item.description}</p>}</li>)}</ol></section>
}
export type { BlogReferenceItem, BlogReferencesProps } from './BlogReferences.types.js'

import type { BlogCodeBlockProps } from './BlogCodeBlock.types.js'

export function BlogCodeBlock({ code, language, label, className, ref, ...rest }: BlogCodeBlockProps) {
  if (!code) return null
  return <figure ref={ref} className={className} data-slot="blog-code-block" {...rest}><figcaption data-slot="blog-code-label">{label ?? language ?? 'Code'}</figcaption><pre data-slot="blog-code" data-language={language ?? undefined} tabIndex={0}><code>{code}</code></pre></figure>
}
export type { BlogCodeBlockProps } from './BlogCodeBlock.types.js'

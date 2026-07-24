import type { BlogAuthorBioProps } from './BlogAuthorBio.types.js'

export function BlogAuthorBio({ name, bio, avatarSrc, avatarAlt, profileHref, profileLabel, className, ref, ...rest }: BlogAuthorBioProps) {
  if (!name) return null
  return <aside ref={ref} className={className} data-slot="blog-author-bio" aria-label={`About ${name}`} {...rest}>{avatarSrc && <img data-slot="blog-author-avatar" src={avatarSrc} alt={avatarAlt ?? ''} />}<div data-slot="blog-author-content"><h2 data-slot="blog-author-name">{name}</h2>{bio && <p data-slot="blog-author-description">{bio}</p>}{profileHref && <a data-slot="blog-author-link" href={profileHref}>{profileLabel ?? `More from ${name}`}</a>}</div></aside>
}
export type { BlogAuthorBioProps } from './BlogAuthorBio.types.js'

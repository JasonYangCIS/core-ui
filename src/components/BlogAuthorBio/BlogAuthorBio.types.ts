import type { HTMLAttributes, Ref } from 'react'

export interface BlogAuthorBioProps extends HTMLAttributes<HTMLElement> {
  name?: string | null
  bio?: string | null
  avatarSrc?: string | null
  avatarAlt?: string | null
  profileHref?: string | null
  profileLabel?: string | null
  ref?: Ref<HTMLElement>
}

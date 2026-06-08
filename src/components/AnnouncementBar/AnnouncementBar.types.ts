import type { HTMLAttributes, Ref } from 'react'

export interface AnnouncementBarProps extends HTMLAttributes<HTMLElement> {
  message?: string | null
  href?: string | null
  ref?: Ref<HTMLElement>
}

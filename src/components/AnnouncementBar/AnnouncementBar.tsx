import type { AnchorHTMLAttributes, Ref } from 'react'
import type { AnnouncementBarProps } from './AnnouncementBar.types.js'

export function AnnouncementBar({ message, href, className, ref, ...rest }: AnnouncementBarProps) {
  if (!message) return null

  const glyphs = (
    <>
      <span data-slot="announcement-bar-glyph" aria-hidden="true">⌁</span>
      <span data-slot="announcement-bar-message">{message}</span>
      <span data-slot="announcement-bar-glyph" aria-hidden="true">⌁</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        data-slot="announcement-bar"
        data-linked="true"
        className={className}
        ref={ref as Ref<HTMLAnchorElement>}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {glyphs}
      </a>
    )
  }

  return (
    <div
      data-slot="announcement-bar"
      className={className}
      ref={ref as Ref<HTMLDivElement>}
      {...rest}
    >
      {glyphs}
    </div>
  )
}

export type { AnnouncementBarProps } from './AnnouncementBar.types.js'

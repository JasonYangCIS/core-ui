import type { RegisteredComponent } from '@builder.io/sdk-react'
import { AnnouncementBar } from './AnnouncementBar.js'

export const announcementBarConfig: RegisteredComponent = {
  component: AnnouncementBar,
  name: 'AnnouncementBar',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/bell.svg',
  inputs: [
    {
      name: 'message',
      type: 'string',
    },
    {
      name: 'href',
      type: 'url',
    },
  ],
}

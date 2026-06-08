import type { RegisteredComponent } from '@builder.io/sdk-react'
import { HeroCentered } from './HeroCentered.js'

export const heroCenteredConfig: RegisteredComponent = {
  component: HeroCentered,
  name: 'HeroCentered',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/screen.svg',
  inputs: [
    { name: 'heading', type: 'string', required: true },
    { name: 'body', type: 'longText' },
    { name: 'ctaLabel', type: 'string' },
    { name: 'ctaHref', type: 'url' },
    { name: 'headingLevel', type: 'string', enum: ['h1', 'h2'], defaultValue: 'h1' },
    { name: 'eyebrow', type: 'string' },
  ],
}

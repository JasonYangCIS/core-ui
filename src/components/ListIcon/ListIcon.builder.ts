import type { RegisteredComponent } from '@builder.io/sdk-react'
import { ListIcon } from './ListIcon.js'

export const listIconConfig: RegisteredComponent = {
  component: ListIcon,
  name: 'ListIcon',
  inputs: [
    {
      name: 'items',
      type: 'list',
      defaultValue: [
        { icon: 'palmtree', text: 'From the Islands of Fiji' },
        { icon: 'zap', text: '100% Natural Electrolytes' },
        { icon: 'droplets', text: 'Soft, Smooth Taste' },
        { icon: 'scale', text: 'Perfectly Balanced 7.7pH' },
      ],
      subFields: [
        {
          name: 'icon',
          type: 'string',
          enum: ['palmtree', 'zap', 'droplets', 'scale', 'leaf', 'mountain', 'sparkles', 'waves', 'sun'],
          defaultValue: 'palmtree',
        },
        { name: 'text', type: 'string', required: true },
      ],
    },
  ],
}

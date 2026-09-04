import type { RegisteredComponent } from '@builder.io/sdk-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { ListIcon } from './ListIcon.js'

const ICON_NAMES = Object.keys(dynamicIconImports).sort()

export const listIconConfig: RegisteredComponent = {
  component: ListIcon,
  name: 'ListIcon',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/list.svg',
  inputs: [
    {
      name: 'items',
      type: 'list',
      subFields: [
        {
          name: 'icon',
          type: 'string',
          enum: ICON_NAMES,
          defaultValue: 'zap',
          helperText: 'Lucide icon name',
        },
        { name: 'label', type: 'string' },
      ],
      defaultValue: [
        { icon: 'zap', label: 'Fast' },
        { icon: 'shield-check', label: 'Secure' },
        { icon: 'droplet', label: 'Pure' },
      ],
    },
  ],
}

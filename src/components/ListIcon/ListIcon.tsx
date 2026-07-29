import {
  Droplets,
  Leaf,
  Mountain,
  Palmtree,
  Scale,
  Sparkles,
  Sun,
  Waves,
  Zap,
} from 'lucide-react'
import type { Ref } from 'react'
import type { LucideIcon } from 'lucide-react'
import type { ListIconName, ListIconProps } from './ListIcon.types.js'

const iconMap: Record<ListIconName, LucideIcon> = {
  palmtree: Palmtree,
  zap: Zap,
  droplets: Droplets,
  scale: Scale,
  leaf: Leaf,
  mountain: Mountain,
  sparkles: Sparkles,
  waves: Waves,
  sun: Sun,
}

const defaultItems = [
  { icon: 'palmtree', text: 'From the Islands of Fiji' },
  { icon: 'zap', text: '100% Natural Electrolytes' },
  { icon: 'droplets', text: 'Soft, Smooth Taste' },
  { icon: 'scale', text: 'Perfectly Balanced 7.7pH' },
] satisfies NonNullable<ListIconProps['items']>

export function ListIcon({ items, className, ref, ...rest }: ListIconProps) {
  const listItems = items ?? defaultItems

  if (listItems.length === 0) return null

  return (
    <section data-slot="list-icon" className={className} ref={ref as Ref<HTMLElement>} {...rest}>
      <ul data-slot="list-icon-items">
        {listItems.map((item, index) => {
          const Icon = iconMap[item.icon ?? 'palmtree']

          return (
            <li data-slot="list-icon-item" key={`${item.text ?? 'item'}-${index}`}>
              <div data-slot="list-icon-content">
                <div data-slot="list-icon-mark">
                  <Icon aria-hidden="true" focusable="false" strokeWidth={1.5} />
                </div>
                {item.text && <p data-slot="list-icon-label">{item.text}</p>}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export type { ListIconItem, ListIconName, ListIconProps } from './ListIcon.types.js'

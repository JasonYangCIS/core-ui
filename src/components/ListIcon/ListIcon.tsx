import type { Ref } from 'react'
import type { ListIconProps } from './ListIcon.types.js'

export function ListIcon({ items, className, ref, ...rest }: ListIconProps) {
  if (!items?.length) return null
  return (
    <section data-slot="list-icon" className={className} ref={ref as Ref<HTMLElement>} {...rest}>
      <ul data-slot="list-icon-items">
        {items.map((item, i) =>
          item.label ? (
            <li key={i} data-slot="list-icon-item">
              {item.icon && <div data-slot="list-icon-icon">{item.icon}</div>}
              <p data-slot="list-icon-label">{item.label}</p>
            </li>
          ) : null,
        )}
      </ul>
    </section>
  )
}

export type { ListIconProps, ListIconItem } from './ListIcon.types.js'

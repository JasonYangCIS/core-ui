import { lazy, Suspense } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import type { ListIconProps } from './ListIcon.types.js'

type IconComponent = ComponentType<{ 'aria-hidden'?: boolean }>

const iconCache = new Map<string, LazyExoticComponent<IconComponent>>()

function resolveIcon(name: string): LazyExoticComponent<IconComponent> | null {
  const loader = dynamicIconImports[name as keyof typeof dynamicIconImports]
  if (!loader) return null
  let Icon = iconCache.get(name)
  if (!Icon) {
    Icon = lazy(loader as unknown as () => Promise<{ default: IconComponent }>)
    iconCache.set(name, Icon)
  }
  return Icon
}

export function ListIcon({ items, className, ref, ...rest }: ListIconProps) {
  if (!items?.length) return null
  return (
    <ul ref={ref} className={className} data-slot="list-icon" {...rest}>
      {items.map((item, i) => {
        const Icon = item.icon ? resolveIcon(item.icon) : null
        return (
          <li key={i} data-slot="list-icon-item">
            {Icon && (
              <span data-slot="list-icon-icon">
                <Suspense fallback={null}>
                  <Icon aria-hidden={true} />
                </Suspense>
              </span>
            )}
            {item.label && <p data-slot="list-icon-label">{item.label}</p>}
          </li>
        )
      })}
    </ul>
  )
}

export type { ListIconProps, ListIconItem } from './ListIcon.types.js'

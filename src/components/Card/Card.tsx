import type { CardProps } from './Card.types.js'

export function Card({ className, children, ref, ...rest }: CardProps) {
  return (
    <div ref={ref} className={className} data-slot="card" {...rest}>
      {children}
    </div>
  )
}

export type { CardProps } from './Card.types.js'

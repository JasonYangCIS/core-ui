import type { BadgeProps, BadgeVariant } from './Badge.types.js'

export function Badge({ variant, className, children, ref, ...rest }: BadgeProps) {
  const v: BadgeVariant = variant ?? 'default'
  return (
    <span ref={ref} className={className} data-slot="badge" data-variant={v} {...rest}>
      {children}
    </span>
  )
}

export type { BadgeProps, BadgeVariant } from './Badge.types.js'

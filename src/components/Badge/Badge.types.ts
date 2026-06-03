import type { HTMLAttributes, Ref } from 'react'

export type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'success'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant | null
  ref?: Ref<HTMLSpanElement>
}

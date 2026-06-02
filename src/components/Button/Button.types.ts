import type { ButtonHTMLAttributes, Ref } from 'react'

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant | null
  size?: ButtonSize | null
  asChild?: boolean
  ref?: Ref<HTMLButtonElement>
}

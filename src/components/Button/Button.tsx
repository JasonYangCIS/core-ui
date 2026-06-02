import type { ReactElement, Ref } from 'react'
import { cloneElement, isValidElement } from 'react'
import type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './Button.types.js'

export function Button({
  variant,
  size,
  asChild = false,
  className,
  children,
  ref,
  ...rest
}: ButtonProps) {
  const v: ButtonVariant = variant ?? 'default'
  const s: ButtonSize = size ?? 'default'
  const dataAttrs = {
    'data-variant': v,
    'data-size': s,
  }

  if (asChild) {
    if (!isValidElement(children)) {
      throw new Error('Button: `asChild` requires a single React element as children.')
    }
    const child = children as ReactElement<{ className?: string; ref?: Ref<unknown> }>
    const mergedClassName =
      [child.props.className, className].filter(Boolean).join(' ') || undefined
    return cloneElement(child, {
      ...rest,
      ...dataAttrs,
      ref,
      className: mergedClassName,
    })
  }

  return (
    <button ref={ref} className={className} {...dataAttrs} {...rest}>
      {children}
    </button>
  )
}

export type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types.js'

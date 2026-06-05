import type { InputProps } from './Input.types.js'

export function Input({ className, type, ref, ...rest }: InputProps) {
  return (
    <input ref={ref} type={type} className={className} data-slot="input" {...rest} />
  )
}

export type { InputProps } from './Input.types.js'

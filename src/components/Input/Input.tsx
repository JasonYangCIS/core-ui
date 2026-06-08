import type { InputProps } from './Input.types.js'

export function Input({ className, type, ref, state, ...rest }: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      data-slot="input"
      data-state={state ?? undefined}
      {...rest}
    />
  )
}

export type { InputProps, InputState } from './Input.types.js'

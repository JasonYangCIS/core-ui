import type { InputHTMLAttributes, Ref } from 'react'

export type InputState = 'error' | 'success' | 'warning'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>
  state?: InputState | null
}

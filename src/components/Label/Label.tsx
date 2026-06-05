import * as LabelPrimitive from '@radix-ui/react-label'
import type { LabelProps } from './Label.types.js'

export function Label({ className, ref, ...rest }: LabelProps) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={className}
      data-slot="label"
      {...rest}
    />
  )
}

export type { LabelProps } from './Label.types.js'

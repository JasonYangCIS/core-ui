import type { ComponentPropsWithoutRef, Ref } from 'react'
import type * as LabelPrimitive from '@radix-ui/react-label'

export interface LabelProps
  extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  ref?: Ref<HTMLLabelElement>
}

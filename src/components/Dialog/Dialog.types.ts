import type { ComponentPropsWithoutRef, Ref } from 'react'
import type * as DialogPrimitive from '@radix-ui/react-dialog'

export interface DialogOverlayProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  ref?: Ref<HTMLDivElement>
}

export interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  ref?: Ref<HTMLDivElement>
}

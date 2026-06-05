import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { DialogContentProps, DialogOverlayProps } from './Dialog.types.js'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
export const DialogPortal = DialogPrimitive.Portal
export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description

export function DialogOverlay({ className, ref, ...rest }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={className}
      data-slot="dialog-overlay"
      {...rest}
    />
  )
}

export function DialogContent({
  className,
  children,
  ref,
  ...rest
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={className}
        data-slot="dialog-content"
        {...rest}
      >
        {children}
        <DialogPrimitive.Close aria-label="Close" data-slot="dialog-close-button">
          <CloseIcon />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

export type { DialogContentProps, DialogOverlayProps } from './Dialog.types.js'

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from './Dialog.js'

function openDialog() {
  return render(
    <Dialog defaultOpen>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogTitle>Cart</DialogTitle>
        <p>Body</p>
      </DialogContent>
    </Dialog>,
  )
}

describe('Dialog', () => {
  it('renders content when open', () => {
    openDialog()
    expect(screen.getByText('Body')).toBeInTheDocument()
  })

  it('marks the content with data-slot="dialog-content"', () => {
    openDialog()
    expect(screen.getByRole('dialog')).toHaveAttribute(
      'data-slot',
      'dialog-content',
    )
  })

  it('renders a built-in close button', () => {
    openDialog()
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute(
      'data-slot',
      'dialog-close-button',
    )
  })

  it('passes className through to the content element', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent className="consumer-class">
          <DialogTitle>T</DialogTitle>
        </DialogContent>
      </Dialog>,
    )
    expect(screen.getByRole('dialog')).toHaveClass('consumer-class')
  })
})

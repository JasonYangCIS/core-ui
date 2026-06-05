import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Label } from './Label.js'

describe('Label', () => {
  it('renders its children', () => {
    render(<Label>Discount code</Label>)
    expect(screen.getByText('Discount code')).toBeInTheDocument()
  })

  it('renders a label element', () => {
    render(<Label>X</Label>)
    expect(screen.getByText('X').tagName).toBe('LABEL')
  })

  it('marks itself with data-slot="label"', () => {
    render(<Label>X</Label>)
    expect(screen.getByText('X')).toHaveAttribute('data-slot', 'label')
  })

  it('associates with a control via htmlFor', () => {
    render(<Label htmlFor="field">X</Label>)
    expect(screen.getByText('X')).toHaveAttribute('for', 'field')
  })

  it('passes className through to the underlying element', () => {
    render(<Label className="consumer-class">X</Label>)
    expect(screen.getByText('X')).toHaveClass('consumer-class')
  })

  it('forwards ref to the underlying label', () => {
    const ref = createRef<HTMLLabelElement>()
    render(<Label ref={ref}>X</Label>)
    expect(ref.current).toBeInstanceOf(HTMLLabelElement)
  })
})

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Input } from './Input.js'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input aria-label="field" />)
    expect(screen.getByLabelText('field').tagName).toBe('INPUT')
  })

  it('marks itself with data-slot="input"', () => {
    render(<Input aria-label="field" />)
    expect(screen.getByLabelText('field')).toHaveAttribute('data-slot', 'input')
  })

  it('forwards the type attribute', () => {
    render(<Input aria-label="field" type="email" />)
    expect(screen.getByLabelText('field')).toHaveAttribute('type', 'email')
  })

  it('passes className through to the underlying element', () => {
    render(<Input aria-label="field" className="consumer-class" />)
    expect(screen.getByLabelText('field')).toHaveClass('consumer-class')
  })

  it('spreads arbitrary attributes onto the input', () => {
    render(<Input aria-label="field" placeholder="ENTER CODE" disabled />)
    const el = screen.getByLabelText('field')
    expect(el).toHaveAttribute('placeholder', 'ENTER CODE')
    expect(el).toBeDisabled()
  })

  it('forwards ref to the underlying input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input aria-label="field" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('sets data-state attribute when state prop is provided', () => {
    render(<Input aria-label="field" state="error" />)
    expect(screen.getByLabelText('field')).toHaveAttribute('data-state', 'error')
  })

  it('omits data-state attribute when state is not provided', () => {
    render(<Input aria-label="field" />)
    expect(screen.getByLabelText('field')).not.toHaveAttribute('data-state')
  })

  it('omits data-state attribute when state is null', () => {
    render(<Input aria-label="field" state={null} />)
    expect(screen.getByLabelText('field')).not.toHaveAttribute('data-state')
  })
})

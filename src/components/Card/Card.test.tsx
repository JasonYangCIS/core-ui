import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Card } from './Card.js'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Panel body</Card>)
    expect(screen.getByText('Panel body')).toBeInTheDocument()
  })

  it('marks itself with data-slot="card"', () => {
    render(<Card>X</Card>)
    expect(screen.getByText('X')).toHaveAttribute('data-slot', 'card')
  })

  it('renders a div element', () => {
    render(<Card>X</Card>)
    expect(screen.getByText('X').tagName).toBe('DIV')
  })

  it('passes className through to the underlying element', () => {
    render(<Card className="consumer-class">X</Card>)
    expect(screen.getByText('X')).toHaveClass('consumer-class')
  })

  it('spreads arbitrary attributes onto the root', () => {
    render(
      <Card role="region" aria-label="Summary">
        X
      </Card>,
    )
    const el = screen.getByRole('region', { name: 'Summary' })
    expect(el).toBeInTheDocument()
  })

  it('forwards ref to the underlying div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Card ref={ref}>X</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

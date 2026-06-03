import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge.js'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>In Stock</Badge>)
    expect(screen.getByText('In Stock')).toBeInTheDocument()
  })

  it('marks itself with data-slot="badge"', () => {
    render(<Badge>X</Badge>)
    expect(screen.getByText('X')).toHaveAttribute('data-slot', 'badge')
  })

  it('emits default data-variant when none is provided', () => {
    render(<Badge>X</Badge>)
    expect(screen.getByText('X')).toHaveAttribute('data-variant', 'default')
  })

  it('emits the chosen variant as data-variant', () => {
    render(<Badge variant="success">X</Badge>)
    expect(screen.getByText('X')).toHaveAttribute('data-variant', 'success')
  })

  it('falls back to default when Builder passes null for variant', () => {
    render(<Badge variant={null}>X</Badge>)
    expect(screen.getByText('X')).toHaveAttribute('data-variant', 'default')
  })

  it('passes className through to the underlying element', () => {
    render(<Badge className="consumer-class">X</Badge>)
    expect(screen.getByText('X')).toHaveClass('consumer-class')
  })

  it('renders a span element', () => {
    render(<Badge>X</Badge>)
    expect(screen.getByText('X').tagName).toBe('SPAN')
  })

  it('forwards ref to the underlying span', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Badge ref={ref}>X</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})

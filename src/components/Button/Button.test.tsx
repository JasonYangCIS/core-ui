import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button.js'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('emits default data-variant and data-size when none are provided', () => {
    render(<Button>X</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('data-variant', 'default')
    expect(btn).toHaveAttribute('data-size', 'default')
  })

  it('emits the chosen variant as data-variant', () => {
    render(<Button variant="outline">X</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'outline')
  })

  it('emits the chosen size as data-size', () => {
    render(<Button size="lg">X</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-size', 'lg')
  })

  it('falls back to defaults when Builder passes null for variant/size', () => {
    render(
      <Button variant={null} size={null}>
        X
      </Button>,
    )
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('data-variant', 'default')
    expect(btn).toHaveAttribute('data-size', 'default')
  })

  it('passes className through to the underlying element', () => {
    render(<Button className="consumer-class">X</Button>)
    expect(screen.getByRole('button')).toHaveClass('consumer-class')
  })

  it('forwards ref to the underlying button', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>X</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('renders the child element when asChild is set', () => {
    render(
      <Button asChild variant="outline" size="sm">
        <a href="/foo">link</a>
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'link' })
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('data-variant', 'outline')
    expect(link).toHaveAttribute('data-size', 'sm')
  })

  it('merges child className with consumer className under asChild', () => {
    render(
      <Button asChild className="from-button">
        <a href="/foo" className="from-child">
          link
        </a>
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'link' })
    expect(link.className).toContain('from-child')
    expect(link.className).toContain('from-button')
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button.js'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('defaults to the primary variant', () => {
    render(<Button>X</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'primary')
  })

  it('honors a passed variant', () => {
    render(<Button variant="secondary">X</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'secondary')
  })
})

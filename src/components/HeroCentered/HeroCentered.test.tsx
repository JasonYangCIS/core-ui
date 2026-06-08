import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { HeroCentered } from './HeroCentered.js'

describe('HeroCentered', () => {
  it('marks the root with data-slot="hero-centered"', () => {
    render(<HeroCentered />)
    expect(document.querySelector('[data-slot="hero-centered"]')).toBeInTheDocument()
  })

  it('renders the default eyebrow when no eyebrow prop is provided', () => {
    render(<HeroCentered />)
    expect(document.querySelector('[data-slot="hero-centered-eyebrow"]')).toHaveTextContent(
      'XENOSPHERE / TRANSMISSION / VOL. 01',
    )
  })

  it('renders a custom eyebrow when provided', () => {
    render(<HeroCentered eyebrow="Custom Eyebrow" />)
    expect(document.querySelector('[data-slot="hero-centered-eyebrow"]')).toHaveTextContent(
      'Custom Eyebrow',
    )
  })

  it('omits the eyebrow when eyebrow is null', () => {
    render(<HeroCentered eyebrow={null} />)
    expect(document.querySelector('[data-slot="hero-centered-eyebrow"]')).toBeNull()
  })

  it('renders two decorative eyebrow rules', () => {
    render(<HeroCentered />)
    expect(
      document.querySelectorAll('[data-slot="hero-centered-eyebrow-rule"]'),
    ).toHaveLength(2)
  })

  it('renders the heading with the last word in the accent span', () => {
    render(<HeroCentered heading="Hello World" />)
    expect(document.querySelector('[data-slot="hero-centered-heading"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="hero-centered-heading-accent"]')).toHaveTextContent(
      'World',
    )
  })

  it('renders the heading as h1 by default', () => {
    render(<HeroCentered heading="Title Word" />)
    expect(document.querySelector('[data-slot="hero-centered-heading"]')?.tagName).toBe('H1')
  })

  it('renders the heading as h2 when headingLevel="h2"', () => {
    render(<HeroCentered heading="Title Word" headingLevel="h2" />)
    expect(document.querySelector('[data-slot="hero-centered-heading"]')?.tagName).toBe('H2')
  })

  it('falls back to h1 when headingLevel is null', () => {
    render(<HeroCentered heading="Title Word" headingLevel={null} />)
    expect(document.querySelector('[data-slot="hero-centered-heading"]')?.tagName).toBe('H1')
  })

  it('omits the heading when heading is not provided', () => {
    render(<HeroCentered />)
    expect(document.querySelector('[data-slot="hero-centered-heading"]')).toBeNull()
  })

  it('renders the body with data-slot="hero-centered-body"', () => {
    render(<HeroCentered body="Some body text" />)
    expect(document.querySelector('[data-slot="hero-centered-body"]')).toHaveTextContent(
      'Some body text',
    )
  })

  it('omits the body when body is not provided', () => {
    render(<HeroCentered />)
    expect(document.querySelector('[data-slot="hero-centered-body"]')).toBeNull()
  })

  it('renders a default anchor CTA when ctaLabel and ctaHref are provided', () => {
    render(<HeroCentered ctaLabel="Shop Now" ctaHref="/shop" />)
    const cta = document.querySelector('[data-slot="hero-centered-cta"]')
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/shop')
    expect(cta).toHaveAttribute('data-variant', 'default')
    expect(cta).toHaveAttribute('data-size', 'lg')
  })

  it('renders ctaSlot instead of the default anchor when provided', () => {
    render(<HeroCentered ctaLabel="Shop" ctaHref="/shop" ctaSlot={<button>Custom CTA</button>} />)
    expect(screen.getByRole('button', { name: 'Custom CTA' })).toBeInTheDocument()
    expect(document.querySelector('[data-slot="hero-centered-cta"]')).toBeNull()
  })

  it('omits the CTA when neither ctaLabel nor ctaHref are provided', () => {
    render(<HeroCentered />)
    expect(document.querySelector('[data-slot="hero-centered-cta"]')).toBeNull()
  })

  it('passes className through to the root element', () => {
    render(<HeroCentered className="consumer-class" />)
    expect(document.querySelector('[data-slot="hero-centered"]')).toHaveClass('consumer-class')
  })

  it('forwards ref to the section root', () => {
    const ref = createRef<HTMLElement>()
    render(<HeroCentered ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

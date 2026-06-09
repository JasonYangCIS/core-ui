import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { HeroSplit } from './HeroSplit.js'

describe('HeroSplit', () => {
  it('marks the root with data-slot="hero-split"', () => {
    render(<HeroSplit />)
    expect(document.querySelector('[data-slot="hero-split"]')).toBeInTheDocument()
  })

  it('emits data-image-position="right" by default', () => {
    render(<HeroSplit />)
    expect(document.querySelector('[data-slot="hero-split"]')).toHaveAttribute(
      'data-image-position',
      'right',
    )
  })

  it('emits data-image-position="left" when imagePosition="left"', () => {
    render(<HeroSplit imagePosition="left" />)
    expect(document.querySelector('[data-slot="hero-split"]')).toHaveAttribute(
      'data-image-position',
      'left',
    )
  })

  it('renders the text column with data-slot="hero-split-text"', () => {
    render(<HeroSplit />)
    expect(document.querySelector('[data-slot="hero-split-text"]')).toBeInTheDocument()
  })

  it('renders the eyebrow when provided', () => {
    render(<HeroSplit eyebrow="Vol. 01" />)
    expect(document.querySelector('[data-slot="hero-split-eyebrow"]')).toHaveTextContent('Vol. 01')
  })

  it('omits the eyebrow when not provided', () => {
    render(<HeroSplit />)
    expect(document.querySelector('[data-slot="hero-split-eyebrow"]')).toBeNull()
  })

  it('renders a decorative eyebrow rule', () => {
    render(<HeroSplit eyebrow="Vol. 01" />)
    expect(document.querySelector('[data-slot="hero-split-eyebrow-rule"]')).toBeInTheDocument()
  })

  it('renders the heading when provided', () => {
    render(<HeroSplit heading="Enter the Zone" />)
    expect(document.querySelector('[data-slot="hero-split-heading"]')).toHaveTextContent(
      'Enter the Zone',
    )
  })

  it('renders the heading as h1 by default', () => {
    render(<HeroSplit heading="Enter the Zone" />)
    expect(document.querySelector('[data-slot="hero-split-heading"]')?.tagName).toBe('H1')
  })

  it('renders the heading as h2 when headingLevel="h2"', () => {
    render(<HeroSplit heading="Enter the Zone" headingLevel="h2" />)
    expect(document.querySelector('[data-slot="hero-split-heading"]')?.tagName).toBe('H2')
  })

  it('wraps the accent substring in data-slot="hero-split-heading-accent"', () => {
    render(<HeroSplit heading="Enter the Zone" headingAccent="Zone" />)
    expect(
      document.querySelector('[data-slot="hero-split-heading-accent"]'),
    ).toHaveTextContent('Zone')
  })

  it('renders the body text', () => {
    render(<HeroSplit body="Discover the collection." />)
    expect(document.querySelector('[data-slot="hero-split-body"]')).toHaveTextContent(
      'Discover the collection.',
    )
  })

  it('renders the image frame when imageUrl is provided', () => {
    render(<HeroSplit imageUrl="https://example.com/img.jpg" imageAlt="Hero" />)
    expect(document.querySelector('[data-slot="hero-split-image-frame"]')).toBeInTheDocument()
  })

  it('omits the image frame when neither imageUrl nor imageSlot is provided', () => {
    render(<HeroSplit />)
    expect(document.querySelector('[data-slot="hero-split-image-frame"]')).toBeNull()
  })

  it('renders corner decorations inside the image frame', () => {
    render(<HeroSplit imageUrl="https://example.com/img.jpg" />)
    expect(document.querySelector('[data-slot="corner-tl"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="corner-br"]')).toBeInTheDocument()
  })

  it('renders the fallback img when imageUrl is provided without imageSlot', () => {
    render(<HeroSplit imageUrl="https://example.com/img.jpg" imageAlt="Hero image" />)
    const img = document.querySelector('[data-slot="hero-split-image"]') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('example.com/img.jpg')
    expect(img.alt).toBe('Hero image')
  })

  it('renders imageSlot instead of the fallback img when provided', () => {
    render(
      <HeroSplit
        imageUrl="https://example.com/img.jpg"
        imageSlot={<img src="https://example.com/custom.jpg" alt="Custom" data-testid="custom-img" />}
      />,
    )
    expect(screen.getByTestId('custom-img')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="hero-split-image"]')).toBeNull()
  })

  it('sets data-has-frame-chrome when frameLabel is present', () => {
    render(<HeroSplit imageUrl="img.jpg" frameLabel="FIELD REPORT 01" />)
    expect(document.querySelector('[data-slot="hero-split-image-frame"]')).toHaveAttribute(
      'data-has-frame-chrome',
    )
  })

  it('omits data-has-frame-chrome when no frame chrome props are set', () => {
    render(<HeroSplit imageUrl="img.jpg" />)
    expect(document.querySelector('[data-slot="hero-split-image-frame"]')).not.toHaveAttribute(
      'data-has-frame-chrome',
    )
  })

  it('renders the frame label', () => {
    render(<HeroSplit imageUrl="img.jpg" frameLabel="REPORT 001" />)
    expect(document.querySelector('[data-slot="hero-split-frame-label"]')).toHaveTextContent(
      'REPORT 001',
    )
  })

  it('renders the frame foot when frameFootLeft or frameFootRight are provided', () => {
    render(<HeroSplit imageUrl="img.jpg" frameFootLeft="Left" frameFootRight="Right" />)
    expect(document.querySelector('[data-slot="hero-split-frame-foot"]')).toBeInTheDocument()
    expect(
      document.querySelector('[data-slot="hero-split-frame-foot-left"]'),
    ).toHaveTextContent('Left')
    expect(
      document.querySelector('[data-slot="hero-split-frame-foot-right"]'),
    ).toHaveTextContent('Right')
  })

  it('renders the scanlines overlay inside the image frame', () => {
    render(<HeroSplit imageUrl="img.jpg" />)
    expect(document.querySelector('[data-slot="hero-split-scanlines"]')).toBeInTheDocument()
  })

  it('renders the primary CTA as an anchor with button data attributes', () => {
    render(<HeroSplit ctaLabel="Shop Now" ctaHref="/shop" />)
    const cta = document.querySelector('[data-slot="hero-split-cta"]')
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/shop')
    expect(cta).toHaveAttribute('data-variant', 'default')
    expect(cta).toHaveAttribute('data-size', 'lg')
  })

  it('renders the secondary CTA as an anchor with outline variant', () => {
    render(<HeroSplit secondaryCtaLabel="Learn More" secondaryCtaHref="/about" />)
    const cta = document.querySelector('[data-slot="hero-split-cta-secondary"]')
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('data-variant', 'outline')
  })

  it('renders ctaSlot instead of the default CTA anchor when provided', () => {
    render(
      <HeroSplit ctaLabel="Shop" ctaHref="/shop" ctaSlot={<button>Custom CTA</button>} />,
    )
    expect(screen.getByRole('button', { name: 'Custom CTA' })).toBeInTheDocument()
    expect(document.querySelector('[data-slot="hero-split-cta"]')).toBeNull()
  })

  it('passes className through to the root element', () => {
    render(<HeroSplit className="consumer-class" />)
    expect(document.querySelector('[data-slot="hero-split"]')).toHaveClass('consumer-class')
  })

  it('forwards ref to the section root', () => {
    const ref = createRef<HTMLElement>()
    render(<HeroSplit ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

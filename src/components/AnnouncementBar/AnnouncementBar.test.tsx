import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { AnnouncementBar } from './AnnouncementBar.js'

describe('AnnouncementBar', () => {
  it('renders nothing when message is not provided', () => {
    const { container } = render(<AnnouncementBar />)
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when message is null', () => {
    const { container } = render(<AnnouncementBar message={null} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders the message text', () => {
    render(<AnnouncementBar message="Free shipping on all orders" />)
    expect(screen.getByText('Free shipping on all orders')).toBeInTheDocument()
  })

  it('marks the root with data-slot="announcement-bar"', () => {
    render(<AnnouncementBar message="Hello" />)
    expect(document.querySelector('[data-slot="announcement-bar"]')).toBeInTheDocument()
  })

  it('renders a div when no href is provided', () => {
    render(<AnnouncementBar message="Hello" />)
    const root = document.querySelector('[data-slot="announcement-bar"]')
    expect(root?.tagName).toBe('DIV')
  })

  it('renders an anchor when href is provided', () => {
    render(<AnnouncementBar message="Shop now" href="/sale" />)
    const root = document.querySelector('[data-slot="announcement-bar"]')
    expect(root?.tagName).toBe('A')
    expect(root).toHaveAttribute('href', '/sale')
  })

  it('emits data-linked on the anchor root', () => {
    render(<AnnouncementBar message="Shop now" href="/sale" />)
    const root = document.querySelector('[data-slot="announcement-bar"]')
    expect(root).toHaveAttribute('data-linked', 'true')
  })

  it('does not emit data-linked when no href', () => {
    render(<AnnouncementBar message="Hello" />)
    const root = document.querySelector('[data-slot="announcement-bar"]')
    expect(root).not.toHaveAttribute('data-linked')
  })

  it('renders glyph slots on both sides of the message', () => {
    render(<AnnouncementBar message="Hello" />)
    const glyphs = document.querySelectorAll('[data-slot="announcement-bar-glyph"]')
    expect(glyphs).toHaveLength(2)
  })

  it('renders the message in its own slot', () => {
    render(<AnnouncementBar message="Hello" />)
    expect(document.querySelector('[data-slot="announcement-bar-message"]')).toHaveTextContent('Hello')
  })

  it('passes className through to the root element', () => {
    render(<AnnouncementBar message="Hello" className="consumer-class" />)
    expect(document.querySelector('[data-slot="announcement-bar"]')).toHaveClass('consumer-class')
  })

  it('forwards ref to the div root when no href', () => {
    const ref = createRef<HTMLElement>()
    render(<AnnouncementBar message="Hello" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('forwards ref to the anchor root when href is provided', () => {
    const ref = createRef<HTMLElement>()
    render(<AnnouncementBar message="Hello" href="/sale" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement)
  })
})

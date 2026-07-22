import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { ListIcon } from './ListIcon.js'

describe('ListIcon', () => {
  it('renders nothing when items is empty', () => {
    const { container } = render(<ListIcon items={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when items is null', () => {
    const { container } = render(<ListIcon items={null} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when items is undefined', () => {
    const { container } = render(<ListIcon />)
    expect(container.firstChild).toBeNull()
  })

  it('marks the root with data-slot="list-icon"', () => {
    render(<ListIcon items={[{ label: 'Fast' }]} />)
    expect(document.querySelector('[data-slot="list-icon"]')).toBeInTheDocument()
  })

  it('renders the items list with data-slot="list-icon-items"', () => {
    render(<ListIcon items={[{ label: 'Fast' }]} />)
    expect(document.querySelector('[data-slot="list-icon-items"]')).toBeInTheDocument()
  })

  it('renders each item with data-slot="list-icon-item"', () => {
    render(
      <ListIcon
        items={[{ label: 'First' }, { label: 'Second' }]}
      />,
    )
    expect(document.querySelectorAll('[data-slot="list-icon-item"]')).toHaveLength(2)
  })

  it('skips items with a null label', () => {
    render(<ListIcon items={[{ label: null }, { label: 'Valid' }]} />)
    expect(document.querySelectorAll('[data-slot="list-icon-item"]')).toHaveLength(1)
  })

  it('renders the label text in data-slot="list-icon-label"', () => {
    render(<ListIcon items={[{ label: 'Soft, Smooth Taste' }]} />)
    expect(document.querySelector('[data-slot="list-icon-label"]')).toHaveTextContent(
      'Soft, Smooth Taste',
    )
  })

  it('renders the icon slot with data-slot="list-icon-icon" when provided', () => {
    render(<ListIcon items={[{ label: 'Fast', icon: <svg data-testid="icon" /> }]} />)
    expect(document.querySelector('[data-slot="list-icon-icon"]')).toBeInTheDocument()
    expect(document.querySelector('[data-testid="icon"]')).toBeInTheDocument()
  })

  it('omits the icon wrapper when no icon is provided', () => {
    render(<ListIcon items={[{ label: 'Fast' }]} />)
    expect(document.querySelector('[data-slot="list-icon-icon"]')).toBeNull()
  })

  it('passes className through to the root element', () => {
    render(<ListIcon items={[{ label: 'Fast' }]} className="consumer-class" />)
    expect(document.querySelector('[data-slot="list-icon"]')).toHaveClass('consumer-class')
  })

  it('forwards ref to the section root', () => {
    const ref = createRef<HTMLElement>()
    render(<ListIcon items={[{ label: 'Fast' }]} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

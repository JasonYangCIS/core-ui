import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { ListIcon } from './ListIcon.js'

describe('ListIcon', () => {
  it('renders nothing when items is empty or missing', () => {
    const { container: emptyContainer } = render(<ListIcon />)
    expect(emptyContainer).toBeEmptyDOMElement()

    const { container: noItemsContainer } = render(<ListIcon items={[]} />)
    expect(noItemsContainer).toBeEmptyDOMElement()
  })

  it('marks the root with data-slot="list-icon"', () => {
    render(<ListIcon items={[{ label: 'Fast' }]} />)
    expect(document.querySelector('[data-slot="list-icon"]')).toBeInTheDocument()
  })

  it('renders one item per entry with data-slot="list-icon-item"', () => {
    render(
      <ListIcon
        items={[{ label: 'Fast' }, { label: 'Reliable' }, { label: 'Secure' }]}
      />,
    )
    expect(document.querySelectorAll('[data-slot="list-icon-item"]')).toHaveLength(3)
  })

  it('skips items without a label', () => {
    render(<ListIcon items={[{ label: null }, { label: 'Kept' }]} />)
    expect(document.querySelectorAll('[data-slot="list-icon-item"]')).toHaveLength(1)
    expect(document.querySelector('[data-slot="list-icon-label"]')).toHaveTextContent('Kept')
  })

  it('renders the provided icon node inside data-slot="list-icon-icon"', () => {
    render(<ListIcon items={[{ label: 'Fast', icon: <svg data-testid="glyph" /> }]} />)
    const iconWrapper = document.querySelector('[data-slot="list-icon-icon"]')
    expect(iconWrapper).toBeInTheDocument()
    expect(iconWrapper?.querySelector('[data-testid="glyph"]')).toBeInTheDocument()
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

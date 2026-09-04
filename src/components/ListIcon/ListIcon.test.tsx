import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { ListIcon } from './ListIcon.js'

const ITEMS = [
  { icon: 'zap', label: 'Fast' },
  { icon: 'droplet', label: 'Pure' },
]

describe('ListIcon', () => {
  it('renders nothing when items is empty or null', () => {
    const { container: empty } = render(<ListIcon items={[]} />)
    expect(empty).toBeEmptyDOMElement()

    const { container: nullItems } = render(<ListIcon items={null} />)
    expect(nullItems).toBeEmptyDOMElement()
  })

  it('marks the list with data-slot="list-icon"', () => {
    render(<ListIcon items={ITEMS} />)
    expect(screen.getByRole('list')).toHaveAttribute('data-slot', 'list-icon')
  })

  it('renders one item per entry with its label', () => {
    render(<ListIcon items={ITEMS} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
    expect(screen.getByText('Fast')).toHaveAttribute('data-slot', 'list-icon-label')
    expect(screen.getByText('Pure')).toBeInTheDocument()
  })

  it('renders an icon wrapper for a valid icon name', async () => {
    render(<ListIcon items={[{ icon: 'zap', label: 'Fast' }]} />)
    const wrapper = await screen.findByText('Fast')
    const item = wrapper.closest('[data-slot="list-icon-item"]')
    expect(item?.querySelector('[data-slot="list-icon-icon"]')).toBeInTheDocument()
  })

  it('omits the icon wrapper when icon is null', () => {
    render(<ListIcon items={[{ icon: null, label: 'No icon' }]} />)
    const item = screen.getByText('No icon').closest('[data-slot="list-icon-item"]')
    expect(item?.querySelector('[data-slot="list-icon-icon"]')).not.toBeInTheDocument()
  })

  it('omits the icon wrapper when icon name is unknown', () => {
    render(<ListIcon items={[{ icon: 'not-a-real-icon', label: 'Bogus' }]} />)
    const item = screen.getByText('Bogus').closest('[data-slot="list-icon-item"]')
    expect(item?.querySelector('[data-slot="list-icon-icon"]')).not.toBeInTheDocument()
  })

  it('omits the label paragraph when label is null', () => {
    render(<ListIcon items={[{ icon: 'zap', label: null }]} />)
    expect(screen.queryByText(/./, { selector: '[data-slot="list-icon-label"]' })).not.toBeInTheDocument()
  })

  it('passes className through to the underlying element', () => {
    render(<ListIcon items={ITEMS} className="consumer-class" />)
    expect(screen.getByRole('list')).toHaveClass('consumer-class')
  })

  it('forwards ref to the underlying ul', () => {
    const ref = createRef<HTMLUListElement>()
    render(<ListIcon items={ITEMS} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLUListElement)
  })
})

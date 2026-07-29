import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { ListIcon } from './ListIcon.js'

describe('ListIcon', () => {
  it('renders the supplied items', () => {
    render(<ListIcon items={[{ icon: 'leaf', text: 'Naturally sourced' }]} />)

    expect(screen.getByText('Naturally sourced')).toBeInTheDocument()
    expect(document.querySelectorAll('[data-slot="list-icon-item"]')).toHaveLength(1)
  })

  it('renders the Fiji feature list by default', () => {
    render(<ListIcon />)

    expect(screen.getByText('From the Islands of Fiji')).toBeInTheDocument()
    expect(document.querySelectorAll('[data-slot="list-icon-item"]')).toHaveLength(4)
  })

  it('uses the default list when Builder passes null', () => {
    render(<ListIcon items={null} />)

    expect(document.querySelectorAll('[data-slot="list-icon-item"]')).toHaveLength(4)
  })

  it('omits the component when an empty list is supplied', () => {
    render(<ListIcon items={[]} />)

    expect(document.querySelector('[data-slot="list-icon"]')).toBeNull()
  })

  it('passes className through to the root element', () => {
    render(<ListIcon className="consumer-class" />)

    expect(document.querySelector('[data-slot="list-icon"]')).toHaveClass('consumer-class')
  })

  it('forwards ref to the section root', () => {
    const ref = createRef<HTMLElement>()
    render(<ListIcon ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { FaqList } from './FaqList.js'

describe('FaqList', () => {
  it('renders nothing when items is empty', () => {
    const { container } = render(<FaqList items={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when items is null', () => {
    const { container } = render(<FaqList items={null} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when items is undefined', () => {
    const { container } = render(<FaqList />)
    expect(container.firstChild).toBeNull()
  })

  it('marks the root with data-slot="faq-list"', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: '<p>A</p>' }]} />)
    expect(document.querySelector('[data-slot="faq-list"]')).toBeInTheDocument()
  })

  it('renders the heading when provided', () => {
    render(<FaqList heading="FAQ" items={[{ question: 'Q?', answerHtml: null }]} />)
    expect(document.querySelector('[data-slot="faq-heading"]')).toHaveTextContent('FAQ')
  })

  it('omits the heading element when heading is not provided', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: null }]} />)
    expect(document.querySelector('[data-slot="faq-heading"]')).toBeNull()
  })

  it('renders the items list with data-slot="faq-items"', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: null }]} />)
    expect(document.querySelector('[data-slot="faq-items"]')).toBeInTheDocument()
  })

  it('renders each question item with data-slot="faq-item"', () => {
    render(
      <FaqList
        items={[
          { question: 'First?', answerHtml: null },
          { question: 'Second?', answerHtml: null },
        ]}
      />,
    )
    expect(document.querySelectorAll('[data-slot="faq-item"]')).toHaveLength(2)
  })

  it('skips items with null question', () => {
    render(
      <FaqList
        items={[
          { question: null, answerHtml: '<p>A</p>' },
          { question: 'Valid?', answerHtml: null },
        ]}
      />,
    )
    expect(document.querySelectorAll('[data-slot="faq-item"]')).toHaveLength(1)
  })

  it('renders the question text in data-slot="faq-question"', () => {
    render(<FaqList items={[{ question: 'Why?', answerHtml: null }]} />)
    expect(document.querySelector('[data-slot="faq-question"]')).toHaveTextContent('Why?')
  })

  it('renders the indicator with data-slot="faq-indicator" and aria-hidden', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: null }]} />)
    const indicator = document.querySelector('[data-slot="faq-indicator"]')
    expect(indicator).toBeInTheDocument()
    expect(indicator).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the answer with data-slot="faq-answer" when answerHtml is provided', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: '<p>Answer here</p>' }]} />)
    expect(document.querySelector('[data-slot="faq-answer"]')).toBeInTheDocument()
  })

  it('omits the answer element when answerHtml is null', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: null }]} />)
    expect(document.querySelector('[data-slot="faq-answer"]')).toBeNull()
  })

  it('passes className through to the root element', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: null }]} className="consumer-class" />)
    expect(document.querySelector('[data-slot="faq-list"]')).toHaveClass('consumer-class')
  })

  it('forwards ref to the section root', () => {
    const ref = createRef<HTMLElement>()
    render(<FaqList items={[{ question: 'Q?', answerHtml: null }]} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })

  it('renders the summary with data-slot="faq-summary" inside details', () => {
    render(<FaqList items={[{ question: 'Q?', answerHtml: null }]} />)
    expect(document.querySelector('[data-slot="faq-summary"]')).toBeInTheDocument()
  })
})

import type { Ref } from 'react'
import type { FaqListProps } from './FaqList.types.js'

export function FaqList({ heading, items, className, ref, ...rest }: FaqListProps) {
  if (!items?.length) return null
  return (
    <section data-slot="faq-list" className={className} ref={ref as Ref<HTMLElement>} {...rest}>
      {heading && <h2 data-slot="faq-heading">{heading}</h2>}
      <dl data-slot="faq-items">
        {items.map((item, i) =>
          item.question ? (
            <details key={i} data-slot="faq-item">
              <summary data-slot="faq-summary">
                <dt data-slot="faq-question">{item.question}</dt>
                <span data-slot="faq-indicator" aria-hidden="true">+</span>
              </summary>
              {item.answerHtml && (
                <dd
                  data-slot="faq-answer"
                  dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                />
              )}
            </details>
          ) : null,
        )}
      </dl>
    </section>
  )
}

export type { FaqListProps, FaqItem } from './FaqList.types.js'

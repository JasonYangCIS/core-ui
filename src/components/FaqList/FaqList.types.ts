import type { HTMLAttributes, Ref } from 'react'

export interface FaqItem {
  question: string | null
  answerHtml: string | null
}

export interface FaqListProps extends HTMLAttributes<HTMLElement> {
  heading?: string | null
  items?: FaqItem[] | null
  ref?: Ref<HTMLElement>
}

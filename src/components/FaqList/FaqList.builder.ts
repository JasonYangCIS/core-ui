import type { RegisteredComponent } from '@builder.io/sdk-react'
import { FaqList } from './FaqList.js'

export const faqListConfig: RegisteredComponent = {
  component: FaqList,
  name: 'FaqList',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/list-tree.svg',
  inputs: [
    { name: 'heading', type: 'string' },
    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'question', type: 'string' },
        { name: 'answerHtml', type: 'richText' },
      ],
    },
  ],
}

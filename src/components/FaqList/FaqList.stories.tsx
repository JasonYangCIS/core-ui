import type { Meta, StoryObj } from '@storybook/react-vite'
import { FaqList } from '@jasonyangcis/core-ui'

const SAMPLE_ITEMS = [
  {
    question: 'What materials are the artifacts made from?',
    answerHtml: '<p>Each artifact is forged from reclaimed xenolithic compounds sourced across five catalogued sectors. No two pieces share the same substrate.</p>',
  },
  {
    question: 'How long does shipping take?',
    answerHtml: '<p>Standard transmission: 3–5 cycles. Expedited: 1–2 cycles. Remote sectors may require additional transit time.</p>',
  },
  {
    question: 'Can I return or exchange an artifact?',
    answerHtml: '<p>Returns are accepted within 14 cycles of delivery, provided the artifact is unactivated. See our <a href="/returns">returns protocol</a> for full details.</p>',
  },
]

const meta = {
  title: 'Marketing/FaqList',
  component: FaqList,
  tags: ['autodocs'],
  args: {
    heading: 'Frequently Asked Questions',
    items: SAMPLE_ITEMS,
  },
} satisfies Meta<typeof FaqList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoHeading: Story = {
  args: { heading: undefined },
}

export const SingleItem: Story = {
  args: {
    items: [SAMPLE_ITEMS[0]],
  },
}

export const NoItems: Story = {
  args: { items: [] },
  parameters: {
    docs: { description: { story: 'Renders nothing when items array is empty.' } },
  },
}

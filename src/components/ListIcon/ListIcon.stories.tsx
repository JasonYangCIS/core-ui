import type { Meta, StoryObj } from '@storybook/react-vite'
import { ListIcon } from '@jasonyangcis/core-ui'
import type { ListIconItem } from '@jasonyangcis/core-ui'
import './ListIcon.stories.css'

const SAMPLE_ITEMS: ListIconItem[] = [
  { icon: 'globe', label: 'From the islands of Fiji' },
  { icon: 'zap', label: '100% natural electrolytes' },
  { icon: 'droplet', label: 'Soft, smooth taste' },
  { icon: 'scale', label: 'Perfectly balanced 7.7pH' },
]

const meta = {
  title: 'Marketing/ListIcon',
  component: ListIcon,
  tags: ['autodocs'],
  args: {
    items: SAMPLE_ITEMS,
  },
} satisfies Meta<typeof ListIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoItems: Story = {
  args: { items: SAMPLE_ITEMS.slice(0, 2) },
}

export const MissingIcon: Story = {
  args: { items: [{ icon: null, label: 'No icon selected' }] },
  parameters: {
    docs: { description: { story: 'Renders the label alone when an item has no icon set.' } },
  },
}

export const NoItems: Story = {
  args: { items: [] },
  parameters: {
    docs: { description: { story: 'Renders nothing when items array is empty.' } },
  },
}

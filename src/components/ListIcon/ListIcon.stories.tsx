import type { Meta, StoryObj } from '@storybook/react-vite'
import { Droplet, Palmtree, Scale, Zap } from 'lucide-react'
import { ListIcon } from '@jasonyangcis/core-ui'
import type { ListIconItem } from '@jasonyangcis/core-ui'
import './ListIcon.stories.css'

const SAMPLE_ITEMS: ListIconItem[] = [
  { label: 'From the Islands of Fiji', icon: <Palmtree aria-hidden="true" /> },
  { label: '100% Natural Electrolytes', icon: <Zap aria-hidden="true" /> },
  { label: 'Soft, Smooth Taste', icon: <Droplet aria-hidden="true" /> },
  { label: 'Perfectly Balanced 7.7pH', icon: <Scale aria-hidden="true" /> },
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

export const WithoutIcons: Story = {
  args: {
    items: SAMPLE_ITEMS.map(({ label }) => ({ label })),
  },
}

export const SingleItem: Story = {
  args: {
    items: SAMPLE_ITEMS.slice(0, 1),
  },
}

export const NoItems: Story = {
  args: { items: [] },
  parameters: {
    docs: { description: { story: 'Renders nothing when items array is empty.' } },
  },
}

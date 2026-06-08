import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from '@jasonyangcis/core-ui'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    style: { maxWidth: '24rem', padding: '1.25rem', border: '1px solid #e4e4e7', borderRadius: '0.75rem' },
    children: 'Card content — the library ships structure only; this padding and border come from the consumer.',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

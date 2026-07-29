import type { Meta, StoryObj } from '@storybook/react-vite'
import { ListIcon } from '@jasonyangcis/core-ui'
import './ListIcon.stories.css'

const meta = {
  title: 'Components/ListIcon',
  component: ListIcon,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
} satisfies Meta<typeof ListIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomItems: Story = {
  args: {
    items: [
      { icon: 'leaf', text: 'Sustainably considered' },
      { icon: 'mountain', text: 'Naturally filtered' },
      { icon: 'sparkles', text: 'Exceptionally pure' },
    ],
  },
}

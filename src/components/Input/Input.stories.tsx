import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@jasonyangcis/core-ui'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: 'you@example.com', type: 'email' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true, value: 'disabled' } }
export const Error: Story = { args: { state: 'error', value: 'invalid@' } }
export const Success: Story = { args: { state: 'success', value: 'you@example.com' } }
export const Warning: Story = { args: { state: 'warning', value: 'you@example' } }

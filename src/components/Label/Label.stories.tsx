import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input, Label } from '@jasonyangcis/core-ui'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Email', htmlFor: 'email' },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: (args) => (
    <div>
      <Label {...args} />
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

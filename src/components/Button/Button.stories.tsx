import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from '@jasonyangcis/core-ui'
import './Button.stories.css'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
  },
  args: { children: 'Button' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Link: Story = { args: { variant: 'link' } }
export const Large: Story = { args: { size: 'lg', children: 'Large button' } }
export const Small: Story = { args: { size: 'sm', children: 'Small button' } }

// The library ships no CSS — the default variant's background comes from
// .storybook/preview.css keyed off data-variant="default". A concrete computed
// value is the only proof that the preview stylesheet actually loaded; a plain
// toBeVisible() passes even on a fully unstyled button.
export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Button' })
    await expect(getComputedStyle(button).backgroundColor).toBe(
      'rgb(24, 24, 27)',
    )
  },
}

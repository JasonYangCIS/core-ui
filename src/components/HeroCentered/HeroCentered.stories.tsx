import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeroCentered } from '@jasonyangcis/core-ui'

const meta = {
  title: 'Marketing/HeroCentered',
  component: HeroCentered,
  tags: ['autodocs'],
  argTypes: {
    headingLevel: { control: 'select', options: ['h1', 'h2'] },
  },
  args: {
    heading: 'Enter the Xenosphere',
    body: 'A curated collection of xenotechnical artifacts, forged at the intersection of matter and signal.',
    ctaLabel: 'Browse the Catalogue',
    ctaHref: '/catalogue',
    eyebrow: 'XENOSPHERE / TRANSMISSION / VOL. 01',
    headingLevel: 'h1',
  },
} satisfies Meta<typeof HeroCentered>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const H2Heading: Story = {
  args: { headingLevel: 'h2' },
}

export const NoEyebrow: Story = {
  args: { eyebrow: null },
}

export const NoCta: Story = {
  args: { ctaLabel: undefined, ctaHref: undefined },
}

export const MinimalHeadingOnly: Story = {
  args: {
    body: undefined,
    ctaLabel: undefined,
    ctaHref: undefined,
    eyebrow: null,
  },
}

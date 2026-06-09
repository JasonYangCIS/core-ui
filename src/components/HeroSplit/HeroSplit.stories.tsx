import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeroSplit } from '@jasonyangcis/core-ui'
import './HeroSplit.stories.css'

const BASE_ARGS = {
  eyebrow: 'FIELD REPORT / XENOSPHERE',
  heading: 'Obsidian Amulet',
  headingAccent: 'Amulet',
  body: 'Forged from raw xenolithic ore. Resonates at frequencies beyond known measurement. Handle with deliberate intent.',
  ctaLabel: 'Add to Cart',
  ctaHref: '/products/obsidian-amulet',
  secondaryCtaLabel: 'Learn More',
  secondaryCtaHref: '/about',
  imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9d4d?w=800&q=80',
  imageAlt: 'Obsidian artifact on dark surface',
  imagePosition: 'right' as const,
}

const meta = {
  title: 'Marketing/HeroSplit',
  component: HeroSplit,
  tags: ['autodocs'],
  argTypes: {
    headingLevel: { control: 'select', options: ['h1', 'h2'] },
    imagePosition: { control: 'select', options: ['left', 'right'] },
  },
  args: BASE_ARGS,
} satisfies Meta<typeof HeroSplit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ImageLeft: Story = {
  args: { imagePosition: 'left' },
}

export const WithFrameChrome: Story = {
  args: {
    frameLabel: 'FIELD REPORT 014',
    frameFootLeft: 'SECTOR 7-G',
    frameFootRight: 'AUTHENTICATED',
  },
}

export const NoImage: Story = {
  args: { imageUrl: undefined, imageAlt: undefined },
}

export const NoCta: Story = {
  args: { ctaLabel: undefined, ctaHref: undefined, secondaryCtaLabel: undefined, secondaryCtaHref: undefined },
}

export const H2Heading: Story = {
  args: { headingLevel: 'h2' },
}

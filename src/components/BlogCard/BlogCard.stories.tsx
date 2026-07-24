import './BlogCard.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogCard } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogCard', component: BlogCard, tags: ['autodocs'] } satisfies Meta<typeof BlogCard>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

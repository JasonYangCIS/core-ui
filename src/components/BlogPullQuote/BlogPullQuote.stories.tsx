import './BlogPullQuote.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogPullQuote } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogPullQuote', component: BlogPullQuote, tags: ['autodocs'] } satisfies Meta<typeof BlogPullQuote>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

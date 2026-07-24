import './BlogRelatedPosts.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogRelatedPosts } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogRelatedPosts', component: BlogRelatedPosts, tags: ['autodocs'] } satisfies Meta<typeof BlogRelatedPosts>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

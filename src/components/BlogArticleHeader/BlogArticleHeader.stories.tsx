import './BlogArticleHeader.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogArticleHeader } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogArticleHeader', component: BlogArticleHeader, tags: ['autodocs'] } satisfies Meta<typeof BlogArticleHeader>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

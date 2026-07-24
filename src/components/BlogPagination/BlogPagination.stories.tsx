import './BlogPagination.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogPagination } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogPagination', component: BlogPagination, tags: ['autodocs'] } satisfies Meta<typeof BlogPagination>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

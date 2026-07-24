import './BlogFilters.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogFilters } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogFilters', component: BlogFilters, tags: ['autodocs'] } satisfies Meta<typeof BlogFilters>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

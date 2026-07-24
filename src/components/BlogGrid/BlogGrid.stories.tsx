import './BlogGrid.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogGrid } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogGrid', component: BlogGrid, tags: ['autodocs'] } satisfies Meta<typeof BlogGrid>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

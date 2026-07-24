import './BlogDivider.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogDivider } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogDivider', component: BlogDivider, tags: ['autodocs'] } satisfies Meta<typeof BlogDivider>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

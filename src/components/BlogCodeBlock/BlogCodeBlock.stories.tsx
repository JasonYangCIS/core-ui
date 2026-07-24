import './BlogCodeBlock.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogCodeBlock } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogCodeBlock', component: BlogCodeBlock, tags: ['autodocs'] } satisfies Meta<typeof BlogCodeBlock>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

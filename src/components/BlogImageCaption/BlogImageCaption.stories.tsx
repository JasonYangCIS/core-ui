import './BlogImageCaption.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogImageCaption } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogImageCaption', component: BlogImageCaption, tags: ['autodocs'] } satisfies Meta<typeof BlogImageCaption>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

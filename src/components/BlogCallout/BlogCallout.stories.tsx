import './BlogCallout.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogCallout } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogCallout', component: BlogCallout, tags: ['autodocs'] } satisfies Meta<typeof BlogCallout>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

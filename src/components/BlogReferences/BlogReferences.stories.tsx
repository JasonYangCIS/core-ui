import './BlogReferences.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogReferences } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogReferences', component: BlogReferences, tags: ['autodocs'] } satisfies Meta<typeof BlogReferences>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

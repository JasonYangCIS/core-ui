import './BlogAuthorBio.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogAuthorBio } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogAuthorBio', component: BlogAuthorBio, tags: ['autodocs'] } satisfies Meta<typeof BlogAuthorBio>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

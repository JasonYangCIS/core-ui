import './BlogCta.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogCta } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogCta', component: BlogCta, tags: ['autodocs'] } satisfies Meta<typeof BlogCta>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

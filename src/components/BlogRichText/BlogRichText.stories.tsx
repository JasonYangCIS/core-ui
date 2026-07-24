import './BlogRichText.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogRichText } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogRichText', component: BlogRichText, tags: ['autodocs'] } satisfies Meta<typeof BlogRichText>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

import './BlogTable.stories.css'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlogTable } from '@jasonyangcis/core-ui'

const meta = { title: 'Editorial/BlogTable', component: BlogTable, tags: ['autodocs'] } satisfies Meta<typeof BlogTable>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

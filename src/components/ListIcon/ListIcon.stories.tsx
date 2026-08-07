import type { Meta, StoryObj } from '@storybook/react-vite'
import { ListIcon } from '@jasonyangcis/core-ui'
import './ListIcon.stories.css'

function DemoIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const ZAP = 'M13 2 3 14h7l-1 8 10-12h-7l1-8Z'
const DROPLET = 'M12 2s7 7.58 7 12a7 7 0 0 1-14 0c0-4.42 7-12 7-12Z'
const WAVES = 'M2 6c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0M2 12c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0M2 18c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0'
const SCALE = 'M12 3v18M7 7 3 15a4 4 0 0 0 8 0L7 7ZM17 7l-4 8a4 4 0 0 0 8 0l-4-8ZM5 7h14'

const meta = {
  title: 'Marketing/ListIcon',
  component: ListIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof ListIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { icon: <DemoIcon path={WAVES} />, label: 'From the islands of Fiji' },
      { icon: <DemoIcon path={ZAP} />, label: '100% natural electrolytes' },
      { icon: <DemoIcon path={DROPLET} />, label: 'Soft, smooth taste' },
      { icon: <DemoIcon path={SCALE} />, label: 'Perfectly balanced 7.7pH' },
    ],
  },
}

export const WithoutIcons: Story = {
  args: {
    items: [{ label: 'Fast' }, { label: 'Reliable' }, { label: 'Secure' }],
  },
}

export const ThreeItems: Story = {
  args: {
    items: [
      { icon: <DemoIcon path={ZAP} />, label: 'Fast' },
      { icon: <DemoIcon path={DROPLET} />, label: 'Reliable' },
      { icon: <DemoIcon path={SCALE} />, label: 'Secure' },
    ],
  },
}

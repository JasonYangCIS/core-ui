import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import './Dialog.stories.css'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@jasonyangcis/core-ui'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogDescription>
          A headless Radix dialog styled entirely by the consumer.
        </DialogDescription>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Confirm</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  ),
  // Clicking the trigger opens the dialog; Radix renders the content into a
  // portal on document.body, so query the whole document, not just the canvas.
  play: async ({ canvas, userEvent, canvasElement }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open dialog/i }))
    const body = within(canvasElement.ownerDocument.body)
    await expect(await body.findByText('Dialog title')).toBeVisible()
  },
}

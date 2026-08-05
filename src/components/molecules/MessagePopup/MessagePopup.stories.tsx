import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { MessagePopup } from './MessagePopup'

const message = (
  <div className="flex flex-col gap-1">
    <span className="font-bold">It looks empty here.</span>
    <span>
      No worries — you can quickly add products by copying a shopping list, reordering from your last
      order, or picking from our recommended products.
    </span>
  </div>
)

const meta = {
  title: 'Design System/Deprecated/MessagePopup',
  component: MessagePopup,
  args: {
    children: message,
    isOpen: true,
    icon: 'icon-info',
    onClose: fn(),
  },
} satisfies Meta<typeof MessagePopup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical open bubble. The `play` proves it is exposed as a live region (`role="status"`) and that
 * pressing the dismiss button fires `onClose` and removes the bubble.
 */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    return (
      <div className="p-8">
        <MessagePopup
          {...args}
          isOpen={open}
          onClose={() => {
            setOpen(false)
            args.onClose()
          }}
        />
      </div>
    )
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Close message' }))
    await expect(args.onClose).toHaveBeenCalled()
    await expect(canvas.queryByRole('status')).toBeNull()
  },
}

/** The three tail placements, all decorative (`aria-hidden`) — an a11y-scannable spread. */
export const ArrowPositions: Story = {
  render: (args) => (
    <div className="flex flex-col gap-10 p-8">
      <MessagePopup {...args} arrowPosition="left" />
      <MessagePopup {...args} arrowPosition="center" />
      <MessagePopup {...args} arrowPosition="right" />
    </div>
  ),
}

/** Localised dismiss control via `labels`. */
export const Localized: Story = {
  args: { labels: { close: 'Stäng' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Stäng' })).toBeInTheDocument()
  },
}

/*
 * Visual parity — reproduces `message-popup-story`, which was authored with `isOpen: false`, so the
 * legacy frame is the CLOSED (empty) state (the bubble renders nothing). The parity frame reproduces
 * that exactly. No `play` so the frame never mutates.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { isOpen: false },
  render: (args) => (
    <div style={{ margin: '2rem auto', padding: '1rem', maxWidth: '50rem' }}>
      <MessagePopup {...args} />
    </div>
  ),
}

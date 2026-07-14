import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { AlertMessage } from './AlertMessage'

const meta = {
  title: 'Design System/Molecules/AlertMessage',
  component: AlertMessage,
  args: {
    children: 'Alert message here...',
    type: 'info',
    isOpen: true,
    onClose: fn(),
  },
} satisfies Meta<typeof AlertMessage>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical info banner. The `play` proves the severity icon is named (1.4.1 — severity is not
 * colour-only) and that pressing the dismiss button fires `onClose` and removes the banner.
 */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    return <AlertMessage {...args} isOpen={open} onClose={() => { setOpen(false); args.onClose() }} />
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Information' })).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Close alert message' }))
    await expect(args.onClose).toHaveBeenCalled()
    await expect(canvas.queryByText('Alert message here...')).toBeNull()
  },
}

/** Error severity — assertive `role="alert"`; dark ink on the pink surface for AA contrast. */
export const Error: Story = {
  args: { type: 'error' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('alert')).toBeInTheDocument()
    await expect(canvas.getByRole('img', { name: 'Error' })).toBeInTheDocument()
  },
}

/** Localised control and severity names via `labels`. */
export const Localized: Story = {
  args: {
    type: 'warning',
    labels: { close: 'Stäng', warning: 'Varning' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Varning' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Stäng' })).toBeInTheDocument()
  },
}

/* Visual parity — reproduces `alert-message-story-info` (dark-green banner, white ink). */
export const VisualInfo: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { type: 'info' },
}

/* Visual parity — reproduces `alert-message-story-warning` (yellow banner, dark ink). */
export const VisualWarning: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { type: 'warning' },
}

/*
 * Visual parity — reproduces `alert-message-story-error` (pink banner). Note the intentional
 * divergence: legacy used white ink (~2.6:1, fails AA) so V2 uses dark ink, and a leading severity
 * glyph replaces the legacy invisible spacer (1.4.1). Both changes are tiny fractions of the banner.
 */
export const VisualError: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { type: 'error' },
}

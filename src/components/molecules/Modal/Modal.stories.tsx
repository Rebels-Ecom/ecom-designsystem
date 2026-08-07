import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, waitFor, within } from 'storybook/test'
import { Modal } from './Modal'

const content = (
  <div className="flex flex-col items-start gap-4 px-4">
    {/* pr-10 reserves the top-right close-button column so the wide heading wraps clear of it. */}
    <h2 className="text-h-m text-text-default pr-10">Create shopping list</h2>
    <p className="text-text-default">Give your list a name and start adding products to it.</p>
    <button
      type="button"
      className="inline-flex min-h-11 items-center rounded bg-action-primary px-4 font-cta-l text-text-on-primary"
    >
      Save list
    </button>
  </div>
)

const meta = {
  title: 'Design System/Molecules/Modal',
  component: Modal,
  args: {
    children: content,
    ariaLabel: 'Create shopping list',
    open: true,
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical open dialog — the resting open state the a11y addon scans (named, modal, close button). */
export const Default: Story = {}

/**
 * Full keyboard cycle from a trigger. The `play` opens the modal, proves focus lands on the close
 * button, that `Escape` closes it, and that focus returns to the opener (2.1.2 / 2.4.3).
 */
export const KeyboardInteraction: Story = {
  args: { open: false },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <button type="button" onClick={() => setOpen(true)}>
          Open modal
        </button>
        <Modal
          {...args}
          open={open}
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
    const trigger = canvas.getByRole('button', { name: 'Open modal' })
    await userEvent.click(trigger)
    const dialog = await canvas.findByRole('dialog', { name: 'Create shopping list' })
    const close = within(dialog).getByRole('button', { name: 'Close' })
    await waitFor(() => expect(close).toHaveFocus())
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(canvas.queryByRole('dialog')).toBeNull())
    await expect(args.onClose).toHaveBeenCalled()
    await expect(trigger).toHaveFocus()
  },
}

/** A dismissable backdrop closes on outside click; a non-dismissable one would not. */
export const Dismissable: Story = {
  args: { open: false, dismissable: true },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <button type="button" onClick={() => setOpen(true)}>
          Open modal
        </button>
        <Modal
          {...args}
          open={open}
          onClose={() => {
            setOpen(false)
            args.onClose()
          }}
        />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Open modal' }))
    await canvas.findByRole('dialog')
    fireEvent.click(canvasElement.querySelector('.z-modal-backdrop') as HTMLElement)
    await waitFor(() => expect(canvas.queryByRole('dialog')).toBeNull())
  },
}

/** Light backdrop scrim variant (dark ink content stays readable over it). */
export const LightBackdrop: Story = {
  args: { backdropType: 'light' },
}

/** Localised close control via `labels`. */
export const Localized: Story = {
  args: { labels: { close: 'Stäng' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Stäng' })).toBeInTheDocument()
  },
}

/*
 * Visual — current-only (NO baseline map). The legacy `modal-story*` frames render the modal wrapping
 * `CreateListForm`, an organism that is NOT migrated yet, so a faithful reproduction isn't possible.
 * This frame stands in with placeholder content for the review gallery; revisit once CreateListForm
 * lands, then map against `design-system-molecules-modal--modal-story*`.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

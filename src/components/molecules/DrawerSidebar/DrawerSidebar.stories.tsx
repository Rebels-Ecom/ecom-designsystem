import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { DrawerSidebar } from './DrawerSidebar'
import { Button } from '../Button'

const meta = {
  title: 'Design System/Molecules/DrawerSidebar',
  component: DrawerSidebar,
} satisfies Meta<typeof DrawerSidebar>

export default meta
type Story = StoryObj<typeof meta>

const sampleContent = (
  <>
    <h2 className="mb-4 text-h-m font-bold">Shopping cart</h2>
    <p className="mb-4 text-body text-text-default">Some content sliding in from the edge.</p>
    <Button surface="primary" type="button">
      Checkout
    </Button>
  </>
)

/**
 * Canonical modal usage: a consumer-owned trigger opens the drawer. The play test proves the full
 * dialog contract — the panel is a labelled `dialog`, focus moves to the close button on open,
 * `Escape` closes it, and focus returns to the trigger.
 */
export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    ariaLabel: 'Shopping cart',
    children: sampleContent,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button surface="primary" type="button" onClick={() => setIsOpen(true)}>
          Open drawer
        </Button>
        <DrawerSidebar {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Open drawer' })
    await userEvent.click(trigger)

    const dialog = await canvas.findByRole('dialog', { name: 'Shopping cart' })
    await expect(dialog).toBeInTheDocument()

    const closeButton = canvas.getByRole('button', { name: 'Close' })
    await waitFor(() => expect(closeButton).toHaveFocus())

    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument())
    await expect(trigger).toHaveFocus()
  },
}

/** The close button's accessible name is overridable (English default) for localisation. */
export const Localized: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    ariaLabel: 'Varukorg',
    labels: { close: 'Stäng' },
    children: sampleContent,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button surface="primary" type="button" onClick={() => setIsOpen(true)}>
          Öppna
        </Button>
        <DrawerSidebar {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Öppna' }))
    await expect(await canvas.findByRole('button', { name: 'Stäng' })).toBeInTheDocument()
  },
}

/*
 * Gallery-only Visual (no baseline map). The legacy `sliding-sidebar-story` captures the CLOSED state
 * — a bare "Open sidebar" trigger button that is NOT part of DrawerSidebar (the closed drawer renders
 * nothing), so there is nothing of the component to diff (a plain button on an empty canvas would
 * false-green under the 2% gate, gotcha-3). This frame instead shows the drawer OPEN for human review;
 * behaviour is covered by the play tests. Rendered `open` so the panel + backdrop are visible.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    isOpen: true,
    onClose: () => {},
    ariaLabel: 'Shopping cart',
    children: sampleContent,
  },
}

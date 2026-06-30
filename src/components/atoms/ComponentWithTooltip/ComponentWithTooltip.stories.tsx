import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { ComponentWithTooltip } from './ComponentWithTooltip'

const meta = {
  title: 'Design System/Atoms/ComponentWithTooltip',
  component: ComponentWithTooltip,
} satisfies Meta<typeof ComponentWithTooltip>

export default meta
type Story = StoryObj<typeof meta>

// A trigger that models correct usage: a real <button> with a visible keyboard
// focus ring (WCAG 2.2 SC 2.4.7 / 2.4.13).
const triggerClass =
  'rounded bg-action-primary px-3 py-2 text-text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'

export const Default: Story = {
  args: {
    content: 'Välj variant',
    side: 'top',
    align: 'center',
    element: (
      <button type="button" className={triggerClass}>
        Hover me
      </button>
    ),
  },
  // SC 2.1.1 (focus reveals) + 4.1.2 (aria-describedby) + 1.4.13 (Escape dismisses).
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Hover me' })

    // Keyboard users reveal it via focus...
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    const tooltip = await canvas.findByRole('tooltip')
    await expect(tooltip).toHaveTextContent('Välj variant')
    await expect(trigger).toHaveAttribute('aria-describedby', tooltip.id)

    // ...and dismiss it with Escape (immediate, no grace delay).
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument())
    // Once closed, the description link is removed too.
    await expect(trigger).not.toHaveAttribute('aria-describedby')
  },
}

export const Pink: Story = {
  args: {
    content: 'Pink tooltip',
    color: 'pink',
    side: 'bottom',
    element: (
      <button type="button" className={triggerClass}>
        Hover me
      </button>
    ),
  },
  // Opens and stays open so @storybook/addon-a11y's axe pass scans the pink
  // tooltip's text contrast (SC 1.4.3) against its surface.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.hover(canvas.getByRole('button', { name: 'Hover me' }))
    await expect(await canvas.findByRole('tooltip')).toHaveTextContent('Pink tooltip')
  },
}

// SC 1.4.13 "hoverable": leaving the trigger must not destroy the tooltip
// instantly — the close is deferred so the pointer can travel onto the tip body;
// entering the tip cancels the close.
export const Hoverable: Story = {
  args: {
    content: 'I survive the trip from trigger to tooltip',
    side: 'top',
    element: (
      <button type="button" className={triggerClass}>
        Hover me
      </button>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Hover me' })

    await userEvent.hover(trigger)
    const tip = await canvas.findByRole('tooltip')

    // Leaving the trigger does NOT remove the tip immediately (deferred close).
    await userEvent.unhover(trigger)
    await expect(canvas.queryByRole('tooltip')).toBeInTheDocument()

    // Moving onto the tip body cancels the pending close — it stays open.
    await userEvent.hover(tip)
    await expect(canvas.queryByRole('tooltip')).toBeInTheDocument()

    // Leaving the tip entirely finally closes it after the grace window.
    await userEvent.unhover(tip)
    await waitFor(() => expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument())
  },
}

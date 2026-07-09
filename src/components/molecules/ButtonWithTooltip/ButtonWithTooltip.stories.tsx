import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ButtonWithTooltip } from './ButtonWithTooltip'

const meta = {
  title: 'Design System/Molecules/ButtonWithTooltip',
  component: ButtonWithTooltip,
  args: {
    content: 'Välj variant',
    children: 'Click me',
    surface: 'secondary',
    rounded: true,
    iconRight: 'icon-layers',
    side: 'right',
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonWithTooltip>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical button + tooltip. The `play` proves the SC 1.4.13 contract: focusing the button reveals a
 * `role="tooltip"` and wires it to the button via `aria-describedby` (its visible label stays the
 * accessible name); `Escape` dismisses it.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Click me' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    const tip = await canvas.findByRole('tooltip')
    await expect(tip).toHaveTextContent('Välj variant')
    await expect(button).toHaveAttribute('aria-describedby')
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByRole('tooltip')).toBeNull()
  },
}

/** Disabled — renders without the tooltip wrapper (a disabled control can't receive hover/focus). */
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Click me' })).toBeDisabled()
    await expect(canvas.queryByRole('tooltip')).toBeNull()
  },
}

/*
 * Visual-regression frame — reproduces `button-with-tooltip-story`: the secondary, rounded "Click me"
 * button (layers icon), tooltip closed. No `play`, `layout: 'fullscreen'`. Same Button font divergence
 * + lucide glyph, under the 2% gate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

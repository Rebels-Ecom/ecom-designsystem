import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { IconButton } from './IconButton'

const meta = {
  title: 'Design System/Molecules/IconButton',
  component: IconButton,
  args: { icon: 'icon-map-pin', label: 'Store locator' },
  argTypes: {
    icon: { control: { type: 'text' } },
    size: {
      options: ['x-small', 'small', 'medium', 'large'],
      control: { type: 'select' },
    },
    surface: {
      options: ['white', 'primary'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical icon-only button. The `play` proves the required `label` is the accessible name (the
 * glyph is `aria-hidden`), that Tab reaches it and Enter fires the handler (native button keyboard
 * operation, 2.1.1).
 */
export const Default: Story = {
  args: { size: 'large', surface: 'primary', label: 'Open store locator', onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Open store locator' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    // `args` is the button|link union; narrow to the button branch before asserting the handler.
    if ('onClick' in args) await expect(args.onClick).toHaveBeenCalled()
  },
}

/**
 * Count badge. The badge is decorative (`aria-hidden`), so the accessible name stays exactly the
 * `label` — the count must be folded into `label` for assistive tech, which this story asserts.
 */
export const WithNotification: Story = {
  args: { icon: 'icon-shopping-cart', label: 'Cart, 2 items', notification: 2, size: 'large', onClick: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Cart, 2 items' })
    // Visible badge text exists but is hidden from the accessible name.
    await expect(within(button).getByText('2')).toBeInTheDocument()
    await expect(button).toHaveAccessibleName('Cart, 2 items')
  },
}

/** Counts of 100+ clamp to "99+". */
export const NotificationClamped: Story = {
  args: { icon: 'icon-shopping-cart', label: 'Cart, 99+ items', notification: 102, size: 'large', onClick: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('99+')).toBeInTheDocument()
  },
}

/**
 * Link variant — renders a real, focusable `<a href>` (4.1.2). The `play` asserts the anchor role,
 * its `href`, and that Tab reaches it.
 */
export const AsLink: Story = {
  args: { type: 'link', href: '/stores', icon: 'icon-map-pin', label: 'Find a store', size: 'large' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Find a store' })
    await expect(link).toHaveAttribute('href', '/stores')
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

/** Disabled button — exposed as `disabled` to assistive tech and skipped by pointer/keyboard. */
export const Disabled: Story = {
  args: { size: 'large', surface: 'primary', label: 'Open store locator', disabled: true, onClick: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Open store locator' })).toBeDisabled()
  },
}

/*
 * Visual-regression frames — reproduce the legacy `icon-button-story-*` baselines: a small neutral
 * chip with the map-pin glyph and the orange count badge. No `play`, `layout: 'fullscreen'`. Two
 * intentional divergences land under the 2% gate: the badge is dark-on-orange (legacy white-on-orange
 * fails AA) and the glyph is lucide vs the legacy icomoon map-pin.
 */

/** Reproduces `icon-button-story-small-button` — small white chip, map-pin, badge "2". */
export const VisualSmallButton: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { icon: 'icon-map-pin', label: 'Store locator', size: 'small', notification: 2, onClick: fn() },
}

/** Reproduces `icon-button-story-over-100-products` — same chip, badge clamped to "99+". */
export const VisualOver100Products: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { icon: 'icon-map-pin', label: 'Store locator', size: 'small', notification: 102, onClick: fn() },
}

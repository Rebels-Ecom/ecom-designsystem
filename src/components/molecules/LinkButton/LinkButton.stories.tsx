import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { LinkButton } from './LinkButton'

const meta = {
  title: 'Design System/Molecules/LinkButton',
  component: LinkButton,
  args: { children: 'Go to cart', href: '/cart', surface: 'primary', size: 'large' },
  argTypes: {
    surface: { options: ['primary', 'secondary', 'tertiary'], control: { type: 'inline-radio' } },
    size: { options: ['x-small', 'small', 'large'], control: { type: 'select' } },
  },
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * **Legacy drop-in shape (v1.6.6).** The app passes `name` (→ accessible name) and toggles `fullWidth`.
 * Locks that `name` becomes the accessible name and `fullWidth={false}` sizes to content — V2 had
 * dropped `name` and hard-coded `w-full`.
 */
export const LegacyNameAndFullWidth: Story = {
  args: { children: 'FAQ', href: '/faq', name: 'Vanliga frågor', fullWidth: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Vanliga frågor' })
    await expect(link).not.toHaveClass('w-full')
  },
}

/**
 * Canonical primary link-button. The `play` proves it is a real link (not a button): it exposes the
 * link role, carries its `href`, its visible text is the accessible name, and Tab reaches it (2.1.1).
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Go to cart' })
    await expect(link).toHaveAttribute('href', '/cart')
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

/** Secondary (outlined) surface. */
export const Secondary: Story = {
  args: { surface: 'secondary', children: 'Back to shop' },
}

/** Tertiary (orange) surface. */
export const Tertiary: Story = {
  args: { surface: 'tertiary', children: 'Explore offers' },
}

/**
 * Disabled — `href` and `onClick` are dropped, `aria-disabled` is exposed, and it leaves the tab
 * order. The `play` asserts it is no longer reachable as a link.
 */
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('link')).toBeNull()
    await expect(canvas.getByText('Go to cart')).toHaveAttribute('aria-disabled', 'true')
  },
}

/*
 * Visual-regression frame — reproduces `link-button-story` (and the identical `-go-to-cart`): a
 * full-width primary CTA bar reading "Read more here". No `play`, `layout: 'fullscreen'`. Same
 * intentional font divergence as Button (legacy referenced an undefined `--font-family-secondaryBold`,
 * so its baseline rendered in the UA font; V2 applies the brand `font-primary`) — a tiny fraction of
 * the canvas, well under the 2% gate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { children: 'Read more here', href: '/read-more', surface: 'primary', size: 'large', isExternal: true },
}

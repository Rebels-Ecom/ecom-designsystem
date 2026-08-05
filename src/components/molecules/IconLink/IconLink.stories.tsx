import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { IconLink } from './IconLink'

const meta = {
  title: 'Design System/Deprecated/IconLink',
  component: IconLink,
  args: { icon: 'icon-plus', children: 'Show all your added products', href: '/products' },
} satisfies Meta<typeof IconLink>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical icon link. The `play` proves it is one real link whose accessible name is the visible
 * label (the badge glyph is decorative), that it carries its `href`, and that Tab reaches it.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Show all your added products' })
    await expect(link).toHaveAttribute('href', '/products')
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

/*
 * Visual-regression frames — reproduce the two legacy `icon-link-story-*` frames (the label text
 * differs). No `play`, `layout: 'fullscreen'`. The label is accessible blue + underline (legacy's
 * orange fails AA) — a small centred glyph, well under the 2% gate; the badge glyph is lucide vs icomoon.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { children: 'Visa alla dina tillagda produkter', isExternal: true, href: '/to-somewhere' },
}

export const VisualRecommended: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { children: 'Visa alla rekommenderade produkter', isExternal: true, href: '/recommended' },
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { FooterTopBar } from './FooterTopBar'

const meta = {
  title: 'Design System/Molecules/FooterTopBar',
  component: FooterTopBar,
  parameters: { layout: 'fullscreen' },
  args: {
    links: [
      { type: 'login', label: 'Logga in', href: '/login', isExternal: true },
      { type: 'register', label: 'Bli e-handels kund', href: 'http://spendrups.se/kund/', isExternal: true },
      { type: 'contact', label: 'Kontakta oss', href: '/kontakta-oss', isExternal: true },
    ],
  },
} satisfies Meta<typeof FooterTopBar>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: the three quick-access links, each with its type icon. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The bar is a labelled navigation landmark…
    const nav = canvas.getByRole('navigation', { name: 'Quick links' })
    await expect(nav).toBeInTheDocument()
    // …containing three named links (the name survives even when the label is visually hidden).
    const login = canvas.getByRole('link', { name: 'Logga in' })
    expect(canvas.getByRole('link', { name: 'Bli e-handels kund' })).toBeInTheDocument()
    expect(canvas.getByRole('link', { name: 'Kontakta oss' })).toBeInTheDocument()
    expect(login).toHaveAttribute('href', '/login')
    await userEvent.tab()
    await expect(login).toHaveFocus()
  },
}

/** Overriding the `labels.nav` string relabels the navigation landmark (i18n). */
export const Localized: Story = {
  args: { labels: { nav: 'Snabblänkar' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Snabblänkar' })).toBeInTheDocument()
  },
}

/** Visual parity with the legacy `FooterTopBarStory` frame (three typed links). */
export const Visual: Story = {
  tags: ['visual'],
}

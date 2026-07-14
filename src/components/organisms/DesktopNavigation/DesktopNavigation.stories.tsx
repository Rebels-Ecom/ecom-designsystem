import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { DesktopNavigation } from './DesktopNavigation'
import type { NavItem } from '../MobileNavigation'

const categories: NavItem[] = [
  {
    name: 'Drycker',
    href: '/drycker',
    links: [
      {
        name: 'Öl',
        href: '/drycker/ol',
        links: [
          { name: 'Alla öl', href: '/drycker/ol/alla' },
          { name: 'Ale', href: '/drycker/ol/ale' },
          { name: 'Bock', href: '/drycker/ol/bock' },
          { name: 'Dubbel IPA', href: '/drycker/ol/dipa' },
        ],
      },
      {
        name: 'Vin',
        href: '/drycker/vin',
        links: [
          { name: 'Alla viner', href: '/drycker/vin/alla' },
          { name: 'Champagne', href: '/drycker/vin/champagne' },
          { name: 'Mousserande', href: '/drycker/vin/mousserande' },
        ],
      },
      {
        name: 'Sprit',
        href: '/drycker/sprit',
        links: [
          { name: 'Gin', href: '/drycker/sprit/gin' },
          { name: 'Likör', href: '/drycker/sprit/likor' },
        ],
      },
    ],
  },
  {
    name: 'Tillbehör',
    href: '/tillbehor',
    links: [
      {
        name: 'Glas',
        href: '/tillbehor/glas',
        links: [
          { name: 'Ölglas', href: '/tillbehor/glas/ol' },
          { name: 'Vinglas', href: '/tillbehor/glas/vin' },
        ],
      },
    ],
  },
  { name: 'Nyheter', href: '/nyheter', openInNewTab: true },
  { name: 'Kampanjer', href: '/kampanjer', openInNewTab: true },
]

const meta = {
  title: 'Design System/Organisms/DesktopNavigation',
  component: DesktopNavigation,
  parameters: { layout: 'fullscreen' },
  args: {
    categories,
    currentSlug: '/nyheter',
  },
} satisfies Meta<typeof DesktopNavigation>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: opens the first category's mega-menu and leaves it open (so the panel is a11y-scanned). */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument()
    // The active top-level item is exposed via aria-current, not colour alone.
    await expect(canvas.getByRole('link', { name: 'Nyheter' })).toHaveAttribute('aria-current', 'page')

    const trigger = canvas.getByRole('button', { name: 'Drycker' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    // Second-level links are now reachable.
    await expect(canvas.getByRole('link', { name: 'Öl' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Champagne' })).toBeVisible()
  },
}

/** Keyboard: Escape closes the open panel and returns focus to its trigger. */
export const KeyboardDismiss: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Drycker' })
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await userEvent.keyboard('{Escape}')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await expect(trigger).toHaveFocus()
  },
}

/** Localised landmark + close-button names (i18n). */
export const Localized: Story = {
  args: { labels: { nav: 'Huvudmeny', close: 'Stäng menyn' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Huvudmeny' })).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Drycker' }))
    await expect(canvas.getByRole('button', { name: 'Stäng menyn' })).toBeInTheDocument()
  },
}

/** Visual parity with the ONLY legacy baseline: the empty loading shimmer (`categories: []`). */
export const VisualLoading: Story = {
  tags: ['visual'],
  args: { categories: [] },
}

/** Visual: the real closed navigation bar (current-only — no legacy counterpart; the legacy story
 * only ever captured the empty loading state above). */
export const Visual: Story = {
  tags: ['visual'],
}

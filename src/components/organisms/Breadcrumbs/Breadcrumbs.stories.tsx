import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Breadcrumbs } from './Breadcrumbs'

const meta = {
  title: 'Design System/Organisms/Breadcrumbs',
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical trail. The play test proves the landmark is named, the intermediate crumbs are links,
 * and the last crumb is the current page (`aria-current="page"`, not a link).
 */
export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: 'Start', href: '/SE-sv/' },
      { label: 'Artikel', href: '/SE-sv/artikel' },
      { label: 'Små aktörer, mer hållbart?', href: '/SE-sv/artikel/hallbarhet' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
    // Intermediate crumbs are links; the current page is not.
    await expect(canvas.getAllByRole('link')).toHaveLength(2)
    await expect(
      canvas.queryByRole('link', { name: 'Små aktörer, mer hållbart?' }),
    ).not.toBeInTheDocument()
    await expect(canvas.getByText('Små aktörer, mer hållbart?')).toHaveAttribute(
      'aria-current',
      'page',
    )
  },
}

/** The navigation landmark's accessible name is overridable for localisation. */
export const Localized: Story = {
  args: {
    breadcrumbs: [
      { label: 'Start', href: '/SE-sv/' },
      { label: 'Öl', href: '/SE-sv/c/ol' },
    ],
    labels: { nav: 'Brödsmulor' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Brödsmulor' })).toBeInTheDocument()
  },
}

// Reproduces the legacy `breadcrumbs-story-with-background` / `-without-background` frames (both render
// the same "Start > Öl" trail — the legacy `image`/`title` props drove only dead code). V2 treats the
// last crumb (Öl) as the current page (no link, no trailing chevron); the "Start" link diverges orange →
// accessible blue (documented AA fix).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    breadcrumbs: [
      { label: 'Start', href: '/SE-sv/' },
      { label: 'Öl', href: '/SE-sv/c/ol' },
    ],
  },
}

// Reproduces the legacy `breadcrumbs-story-sustainability` frame (three crumbs).
export const VisualSustainability: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    breadcrumbs: [
      { label: 'Start', href: '/SE-sv/' },
      { label: 'Artikel', href: '/SE-sv/artikel' },
      { label: 'Små aktörer, mer hållbart?', href: '/SE-sv/artikel/hallbarhet' },
    ],
  },
}

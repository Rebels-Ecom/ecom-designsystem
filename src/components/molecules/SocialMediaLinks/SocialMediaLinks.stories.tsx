import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { SocialMediaLinks, type SocialMediaLinksProps } from './SocialMediaLinks'

const links: SocialMediaLinksProps['links'] = [
  { icon: 'icon-facebook', label: 'Facebook', href: 'https://www.facebook.com/spendrupsbryggeri/' },
  { icon: 'icon-instagram', label: 'Instagram', href: 'https://www.instagram.com/spendrupsbryggeri/' },
  { icon: 'icon-linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/company/spendrups-bryggeri-ab/' },
]

const meta = {
  title: 'Design System/Deprecated/SocialMediaLinks',
  component: SocialMediaLinks,
  parameters: { layout: 'fullscreen' },
  args: { links },
} satisfies Meta<typeof SocialMediaLinks>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical row of links. The `play` proves the list is a named `list` and each entry is a real,
 * distinctly-named `link`.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('list', { name: 'Social media' })).toBeInTheDocument()
    await expect(canvas.getAllByRole('link')).toHaveLength(3)
    await expect(canvas.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://www.facebook.com/spendrupsbryggeri/',
    )
  },
}

/** Localisation — the list's accessible name is overridable via `label`. */
export const Localized: Story = {
  args: { label: 'Sociala medier' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('list', { name: 'Sociala medier' })).toBeInTheDocument()
  },
}

/**
 * Visual parity with the legacy `SocialMediaStory` — the same three flush chips (Facebook,
 * Instagram, Linkedin). Mapped to the legacy baseline in `tests/visual/baseline-map.ts`.
 */
export const Visual: Story = {
  tags: ['visual'],
}

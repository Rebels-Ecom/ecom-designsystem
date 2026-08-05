import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { SocialMediaLink } from './SocialMediaLink'

const meta = {
  title: 'Design System/Molecules/SocialMediaLink',
  component: SocialMediaLink,
  parameters: { layout: 'fullscreen' },
  args: {
    icon: 'icon-facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/spendrupsbryggeri/',
  },
} satisfies Meta<typeof SocialMediaLink>

export default meta
type Story = StoryObj<typeof meta>

/**
 * **Legacy drop-in shape (v1.6.6).** The app supplies the accessible name via `title` (not `label`).
 * Locks that it still names the icon-only link — V2 required `label`, so the app's links lost their name.
 */
export const LegacyTitleProp: Story = {
  render: () => (
    <SocialMediaLink icon="icon-instagram" title="Instagram" href="https://instagram.com/spendrups" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  },
}

/** Canonical: an icon-only link whose accessible name is `label`. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Facebook' })
    await expect(link).toHaveAttribute('href', 'https://www.facebook.com/spendrupsbryggeri/')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

export const VisualFacebook: Story = {
  tags: ['visual'],
}

export const VisualInstagram: Story = {
  tags: ['visual'],
  args: {
    icon: 'icon-instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/spendrupsbryggeri/',
  },
}

export const VisualLinkedin: Story = {
  tags: ['visual'],
  args: {
    icon: 'icon-linkedin',
    label: 'Linkedin',
    href: 'https://www.linkedin.com/company/spendrups-bryggeri-ab/',
  },
}

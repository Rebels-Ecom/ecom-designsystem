import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import type { LinkComponentType } from '../../lib/link'
import { AppFooter } from './AppFooter'
import { footerTopBarLinks, linkGroups, socialLinks } from './AppFooter.fixtures'

/**
 * **AppFooter templates** — the global footer wired live. The harness owns the newsletter confirmation
 * (the app posts to a newsletter service; here a submit flips a local confirmation) so the sign-up works
 * end-to-end in Storybook. Untagged — a new composition with no legacy pixel baseline.
 */

const Link: LinkComponentType = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
)

const CONFIRMATION = 'Tack! Du är nu anmäld till vårt nyhetsbrev.'

function AppFooterHarness() {
  const [confirmation, setConfirmation] = useState<string | undefined>(undefined)
  return (
    <AppFooter
      footerTopBarLinks={footerTopBarLinks}
      linkGroups={linkGroups}
      socialLinks={socialLinks}
      onNewsletterSubmit={() => setConfirmation(CONFIRMATION)}
      newsletterConfirmation={confirmation}
      linkComponent={Link}
    />
  )
}

const meta = {
  title: 'Design System/Templates/Flow 0 — Chrome/AppFooter',
  component: AppFooter,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  // Args satisfy the typed meta only; every story renders the stateful harness (see AppHeader).
  args: {
    footerTopBarLinks,
    linkGroups,
    socialLinks,
    onNewsletterSubmit: () => {},
  },
} satisfies Meta<typeof AppFooter>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The footer with a working newsletter sign-up. The `play` submits a valid email → the field clears and
 * a polite confirmation appears; it also checks the landmark, columns and social links.
 */
export const Default: Story = {
  render: () => <AppFooterHarness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByRole('contentinfo')).toBeInTheDocument()
    // Link columns + social links compose into the footer.
    await expect(canvas.getByRole('link', { name: 'Spendrups på Facebook' })).toBeInTheDocument()

    // Newsletter sign-up: a valid email submits, clears the field, and shows a confirmation.
    const email = canvas.getByPlaceholderText('Din e-postadress')
    await userEvent.type(email, 'anna@example.se{enter}')
    await expect(canvas.getByRole('status')).toHaveTextContent('Tack!')
    await expect(email).toHaveValue('')
  },
}

/**
 * Newsletter validation — an invalid email is rejected with a `role="alert"` error and no confirmation
 * (the submit never fires).
 */
export const NewsletterError: Story = {
  render: () => <AppFooterHarness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByPlaceholderText('Din e-postadress')
    await userEvent.type(email, 'not-an-email{enter}')
    await expect(canvas.getByRole('alert')).toBeInTheDocument()
    await expect(canvas.queryByRole('status')).toBeNull()
  },
}

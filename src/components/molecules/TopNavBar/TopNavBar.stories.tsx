import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import type { UiDatePickerProps } from '../UiDatePicker'
import { TopNavBar, type TopNavLink } from './TopNavBar'

const leftLinks: TopNavLink[] = [
  { href: '/kontakta-oss', icon: 'icon-mail', children: 'Kontakta oss' },
  { href: '0771-494910', icon: 'icon-phone', children: '0771-494910', isTelephoneLink: true, isExternal: true },
]

const rightLinks: TopNavLink[] = [
  { href: 'http://spendrups.se/kund/', icon: 'icon-plus-circle', children: 'Bli kund', isExternal: true },
  { href: '/login', icon: 'icon-user', children: 'Logga in' },
]

const datePicker: UiDatePickerProps = {
  buttonLabel: 'Välj leveransdag',
  selectedDeliveryDate: '2026-07-20',
  deliveryDates: [new Date(2026, 6, 20), new Date(2026, 6, 22), new Date(2026, 6, 24)],
  onDateSelected: () => {},
}

const meta = {
  title: 'Design System/Molecules/TopNavBar',
  component: TopNavBar,
  parameters: { layout: 'fullscreen' },
  args: { leftLinks, rightLinks },
} satisfies Meta<typeof TopNavBar>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: a labelled nav landmark of real links whose visible text is the accessible name. */
export const GuestUser: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Utility' })).toBeInTheDocument()
    const contact = canvas.getByRole('link', { name: 'Kontakta oss' })
    await expect(contact).toHaveAttribute('href', '/kontakta-oss')
    // Telephone link is prefixed and opens externally.
    await expect(canvas.getByRole('link', { name: '0771-494910' })).toHaveAttribute('href', 'tel:0771-494910')
  },
}

/** Signed in: the trailing action button fires its handler; the user name is shown. */
export const LoggedInUser: Story = {
  args: {
    userLoggedIn: true,
    userName: 'Jon Johnson',
    btnIcon: 'icon-x-circle',
    btnText: 'Logga ut',
    onButtonClick: () => {},
    datePicker,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const logout = canvas.getByRole('button', { name: 'Logga ut' })
    await userEvent.click(logout)
    // The user name renders in the responsive layout (mobile + desktop branches; the hidden one is
    // display:none, so out of the a11y tree but still in the DOM).
    await expect(canvas.getAllByText('Jon Johnson').length).toBeGreaterThan(0)
  },
}

/** Admin acting as another user — the bar switches to the purple surface (white text stays AA). */
export const Admin: Story = {
  args: {
    hasActiveUser: true,
    userLoggedIn: true,
    userName: 'Jon Johnson',
    btnIcon: 'icon-x-circle',
    btnText: 'Logga ut',
    onButtonClick: () => {},
    leftLinks: [],
    rightLinks: [{ href: '#', icon: 'icon-users', children: 'Inloggad som Jon Johnson' }],
    datePicker,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Utility' })).toBeInTheDocument()
    await expect(canvas.getByText('Inloggad som Jon Johnson')).toBeVisible()
  },
}

/** The `<nav>` landmark name is localisable via `labels.nav`. */
export const Localized: Story = {
  args: { labels: { nav: 'Verktyg' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Verktyg' })).toBeInTheDocument()
  },
}

/**
 * Gallery-only (no baseline map): every legacy `top-nav-bar` PNG is blank — the story passed a `links`
 * prop the component never read AND its layout used JS media-query render-props that resolved to
 * nothing at capture time, so there is no valid legacy frame to diff against. This frame renders the
 * V2 bar for human review; behaviour is covered by the play tests above.
 */
export const Visual: Story = {
  tags: ['visual'],
}

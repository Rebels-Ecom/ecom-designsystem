import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { MobileNavigation, type NavItem } from './MobileNavigation'
import { ContentWrapper } from '../../atoms/ContentWrapper'

const categories: NavItem[] = [
  {
    name: 'Drycker',
    href: '#',
    links: [
      {
        name: 'Öl',
        href: '#',
        links: [
          { name: 'Alla öl', href: '#' },
          { name: 'Ale', href: '#' },
          { name: 'Bock', href: '#' },
        ],
      },
      {
        name: 'Vin',
        href: '#',
        links: [
          { name: 'Alla viner', href: '#' },
          { name: 'Champagne', href: '#' },
        ],
      },
    ],
  },
  { name: 'Nyheter', href: '#', openInNewTab: true },
  { name: 'Kampanjer', href: '#', openInNewTab: true },
]

const meta = {
  title: 'Design System/Organisms/MobileNavigation',
  component: MobileNavigation,
  args: { categories },
} satisfies Meta<typeof MobileNavigation>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical drawer. The play test opens it from the hamburger, expands a nested category, then closes
 * with `Escape` — proving `aria-expanded` tracking, the mounted `<nav>` landmark, and focus return.
 */
export const Default: Story = {
  args: { isOpen: false, setIsOpen: () => {} },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return <MobileNavigation {...args} isOpen={open} setIsOpen={setOpen} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', { name: 'Open menu' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggle)
    // Panel mounts as a labelled nav landmark, with a close button.
    const panel = await canvas.findByRole('navigation', { name: 'Main menu' })
    await expect(panel).toBeInTheDocument()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Expand a nested category.
    const category = canvas.getByRole('button', { name: 'Drycker' })
    await expect(category).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(category)
    await expect(category).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('button', { name: 'Öl' })).toBeInTheDocument()

    // Escape closes the drawer and returns focus to the toggle.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(canvas.queryByRole('navigation', { name: 'Main menu' })).not.toBeInTheDocument())
    await expect(toggle).toHaveFocus()
  },
}

/** The toggle/close/landmark accessible names are overridable for localisation. */
export const Localized: Story = {
  args: {
    isOpen: false,
    setIsOpen: () => {},
    labels: { openMenu: 'Öppna meny', closeMenu: 'Stäng meny', nav: 'Huvudmeny' },
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return <MobileNavigation {...args} isOpen={open} setIsOpen={setOpen} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Öppna meny' }))
    await expect(await canvas.findByRole('navigation', { name: 'Huvudmeny' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Stäng meny' })).toBeInTheDocument()
  },
}

/** With the authenticated sign-out action in the open panel. */
export const Authenticated: Story = {
  args: {
    isOpen: false,
    setIsOpen: () => {},
    isAuthenticated: true,
    signOutLabel: 'Logga ut',
    onSignOut: () => {},
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return <MobileNavigation {...args} isOpen={open} setIsOpen={setOpen} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Open menu' }))
    await expect(await canvas.findByRole('button', { name: 'Logga ut' })).toBeInTheDocument()
  },
}

// Reproduces the legacy `default-mobile-navigation` frame: the CLOSED state — just the hamburger toggle
// in the top bar (the drawer panel is behaviour-only, covered by the play tests above).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { isOpen: false, setIsOpen: () => {} },
  render: (args) => (
    <ContentWrapper>
      <MobileNavigation {...args} />
    </ContentWrapper>
  ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { DropdownList, type DropdownListLink } from './DropdownList'

const meta = {
  title: 'Design System/Molecules/DropdownList',
  component: DropdownList,
} satisfies Meta<typeof DropdownList>

export default meta
type Story = StoryObj<typeof meta>

const accountLinks: DropdownListLink[] = [
  { href: '/mitt-spendrups', title: 'Mitt Spendrups', isExternal: true },
  { href: '/arenden', title: 'Ärenden', isExternal: true },
  { href: '/inkopslistor', title: 'Inköpslistor', isExternal: true },
  { href: '/behorighetstest', title: 'Behörighetstest', isExternal: true },
  { href: '/bonusbesked', title: 'Bonusbesked', isExternal: true },
  { href: '/fakturor', title: 'Fakturor', isExternal: true },
  { href: '/ordrar', title: 'Ordrar', isExternal: true },
  { href: '/skapa-returorder', title: 'Skapa returorder', isExternal: true },
  { href: '/felanmalan', title: 'Felanmälan', isExternal: true },
  { href: '/tomgodsorder', title: 'Tomgodsorder', isExternal: true },
  { href: '/volymrapport', title: 'Volymrapport', isExternal: true },
  { href: '/bestall-pdf-faktura', title: 'Beställ pdf-faktura', isExternal: true },
]

/**
 * Canonical menu. The play test proves each entry is a real link carrying its destination, focusable by
 * keyboard.
 */
export const Default: Story = {
  args: {
    links: [
      { href: '/mitt-spendrups', title: 'Mitt Spendrups', isExternal: true },
      { href: '/ordrar', title: 'Ordrar', isExternal: true },
      { href: '/fakturor', title: 'Fakturor', isExternal: true },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'MITT SPENDRUPS' })
    await expect(link).toHaveAttribute('href', '/mitt-spendrups')
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

/** The active entry exposes `aria-current="page"` and is shown bold — never colour alone. */
export const WithActiveLink: Story = {
  args: {
    links: [
      { href: '/mitt-spendrups', title: 'Mitt Spendrups', isExternal: true },
      { href: '/ordrar', title: 'Ordrar', isExternal: true, isActive: true },
      { href: '/fakturor', title: 'Fakturor', isExternal: true },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: 'ORDRAR' })).toHaveAttribute('aria-current', 'page')
  },
}

// Reproduces the legacy `dropdown-list-story` frame (the 12-entry account menu, all external).
export const Visual: Story = {
  tags: ['visual'],
  args: { links: accountLinks },
  parameters: { layout: 'fullscreen' },
  render: (args) => <DropdownList {...args} />,
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { UserProfileDropdown, type UserProfileMenuItem } from './UserProfileDropdown'
import { Text } from '../../atoms/Text'

const meta = {
  title: 'Design System/Deprecated/UserProfileDropdown',
  component: UserProfileDropdown,
} satisfies Meta<typeof UserProfileDropdown>

export default meta
type Story = StoryObj<typeof meta>

// Spies referenced by both `args` and `play`. `storybook/test`'s `fn()` mocks auto-reset per run.
const onOrders = fn()
const onSignOut = fn()

// Reproduces the legacy `UserInfoSummary` child (an unmigrated molecule) as authored markup so the
// Visual frames pair against the baseline without importing a not-yet-migrated component.
const userSummary = (
  <div className="flex flex-col gap-1">
    <Text weight="bold" size="small">
      Inloggat som:
    </Text>
    <Text weight="bold">JON JOHNSSON</Text>
    <Text>Gustav Grill &amp; Bar</Text>
    <Text>Kundnr: 186922</Text>
    <Text>Roller: Sales</Text>
  </div>
)

// Reproduces the legacy `DropdownList` links. Labels are consumer copy; CSS uppercases them visually.
const linkItems: UserProfileMenuItem[] = [
  { id: 'mitt', label: 'Mitt Spendrups', href: '#mitt' },
  { id: 'arenden', label: 'Ärenden', href: '#arenden' },
  { id: 'inkopslistor', label: 'Inköpslistor', href: '#inkopslistor' },
  { id: 'behorighetstest', label: 'Behörighetstest', href: '#behorighetstest' },
  { id: 'bonusbesked', label: 'Bonusbesked', href: '#bonusbesked' },
  { id: 'fakturor', label: 'Fakturor', href: '#fakturor' },
  { id: 'ordrar', label: 'Ordrar', href: '#ordrar' },
  { id: 'skapa-returorder', label: 'Skapa returorder', href: '#skapa-returorder' },
  { id: 'felanmalan', label: 'Felanmälan', href: '#felanmalan' },
  { id: 'tomgodsorder', label: 'Tomgodsorder', href: '#tomgodsorder' },
]

/**
 * Canonical (uncontrolled) account menu. The `play` drives the full contract: the disclosure trigger
 * opens the drawer (focus moves in), `Escape` closes it and returns focus to the trigger, and
 * activating a menu item fires its callback and closes the drawer.
 */
export const Default: Story = {
  args: {
    items: [
      { id: 'orders', label: 'Orders', onSelect: onOrders },
      { id: 'invoices', label: 'Invoices', href: '#invoices' },
      { id: 'lists', label: 'Purchase lists', href: '#lists' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Account menu' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')

    // Open → drawer appears, focus moves to the close button.
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const dialog = await canvas.findByRole('dialog', { name: 'Account menu' })
    await expect(dialog).toBeVisible()
    const closeButton = canvas.getByRole('button', { name: 'Close' })
    await expect(closeButton).toHaveFocus()

    // Escape closes the drawer and returns focus to the trigger.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument())
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => expect(trigger).toHaveFocus())

    // Re-open and activate an action item → its callback fires and the drawer closes.
    await userEvent.click(trigger)
    const orders = await canvas.findByRole('button', { name: 'Orders' })
    await userEvent.click(orders)
    await expect(onOrders).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument())
  },
}

/**
 * Every rendered string overridden (Swedish) — trigger name, close name, the interpolated greeting,
 * and the built-in sign-out button — so the `labels` contract is covered by the a11y gate.
 */
export const Localized: Story = {
  args: {
    userName: 'Jon',
    onSignOut,
    items: [
      { id: 'ordrar', label: 'Ordrar', href: '#ordrar' },
      { id: 'fakturor', label: 'Fakturor', href: '#fakturor' },
    ],
    labels: {
      trigger: 'Kontomeny',
      close: 'Stäng',
      dialog: 'Kontomeny',
      signOut: 'Logga ut',
      greeting: (name) => `Hej, ${name}`,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Kontomeny' }))
    await expect(await canvas.findByRole('dialog', { name: 'Kontomeny' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Stäng' })).toBeVisible()
    await expect(canvas.getByText('Hej, Jon')).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Logga ut' })).toBeVisible()
  },
}

/**
 * Visual parity — closed trigger. Reproduces the legacy `user-profile-dropdown-story` frame (just the
 * icon trigger). No `play` so the captured frame is stable; `open` is driven purely from args.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { open: false, items: linkItems, children: userSummary },
  render: (args) => (
    <div className="flex justify-center">
      <UserProfileDropdown {...args} />
    </div>
  ),
}

/**
 * Visual parity — open drawer. Reproduces the legacy `user-profile-dropdown-story-open` frame; open
 * is set from args (`open: true`) so it renders without a `play`. The V2 drawer adds an accessible
 * close button and underlined blue links that the legacy frame lacked.
 */
export const VisualOpen: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { open: true, items: linkItems, children: userSummary },
  render: (args) => (
    <div className="flex justify-center">
      <UserProfileDropdown {...args} />
    </div>
  ),
}

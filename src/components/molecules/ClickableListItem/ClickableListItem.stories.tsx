import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ClickableListItem } from './ClickableListItem'

const meta = {
  title: 'Design System/Molecules/ClickableListItem',
  component: ClickableListItem,
  args: { onClick: fn() },
} satisfies Meta<typeof ClickableListItem>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical row: tab to focus, then activate — the handler fires on keyboard and pointer alike. */
export const Default: Story = {
  args: { label: 'Mina beställningar', icon: 'icon-chevron-right' },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Mina beställningar' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** Blue label variant (AA-safe) so the a11y addon scans the coloured pairing. */
export const Blue: Story = {
  args: { label: 'Visa alla', color: 'blue', icon: 'icon-arrow-right', weight: 'bold' },
}

/** Disabled rows are not operable and expose the disabled state to AT. */
export const Disabled: Story = {
  args: { label: 'Ej tillgänglig', icon: 'icon-x', disabled: true },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Ej tillgänglig' })
    await expect(button).toBeDisabled()
    await userEvent.click(button)
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

// Reproduces the legacy `clickable-list-item-loka` frame: default colour, "Click me" + icon-x.
export const Visual: Story = {
  tags: ['visual'],
  args: { label: 'Click me', icon: 'icon-x' },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
      <ClickableListItem {...args} />
    </div>
  ),
}

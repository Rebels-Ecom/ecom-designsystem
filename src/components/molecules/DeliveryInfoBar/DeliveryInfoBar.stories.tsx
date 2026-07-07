import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { DeliveryInfoBar } from './DeliveryInfoBar'

const meta = {
  title: 'Design System/Molecules/DeliveryInfoBar',
  component: DeliveryInfoBar,
  args: { onClick: fn() },
} satisfies Meta<typeof DeliveryInfoBar>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical bar. The play test proves the message is the button's accessible name and that it activates
 * from the keyboard.
 */
export const Default: Story = {
  args: {
    exists: true,
    infoText: 'Kom ihåg att lämna tillbaka era tomfat!',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Kom ihåg att lämna tillbaka era tomfat!' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** With `exists=false` the bar renders nothing at all. */
export const Hidden: Story = {
  args: { exists: false, infoText: 'Hidden message' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument()
  },
}

// Gallery-only (unmapped — the legacy `delivery-info-bar-story` PNG is blank, captured before its
// delayed entrance ran). The visual-review harness emulates `prefers-reduced-motion`, so the entrance is
// suppressed and the bar renders settled; behaviour is covered by the interaction/a11y tests.
export const Visual: Story = {
  tags: ['visual'],
  args: { exists: true, infoText: 'Kom ihåg att lämna tillbaka era tomfat!' },
  parameters: { layout: 'fullscreen' },
  render: (args) => <DeliveryInfoBar {...args} />,
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { IconWithTooltip } from './IconWithTooltip'

const meta = {
  title: 'Design System/Molecules/IconWithTooltip',
  component: IconWithTooltip,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof IconWithTooltip>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical usage: an info icon that reveals its explanation on hover/focus. */
export const WithIcon: Story = {
  args: { icon: 'icon-alert-circle', content: 'Vad betyder detta?' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Vad betyder detta?' })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    const tip = await canvas.findByRole('tooltip')
    await expect(tip).toHaveTextContent('Vad betyder detta?')
    // Dismissible via Escape (SC 1.4.13).
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument()
  },
}

/** Text-badge trigger — dark-on-orange label (accessible replacement for the legacy white-on-orange). */
export const TextBadge: Story = {
  args: { text: '?', content: 'Hjälp: så här fungerar det' },
}

/**
 * Static frame for the review gallery — reproduces the legacy `tooltip-story` trigger (closed):
 * same `icon-alert-circle` + "Icon with tooltip story". Mapped in `baseline-map.ts`. The only
 * divergence is icon size (legacy `size='sm'`; V2 dropped the size prop for a fixed larger icon),
 * a tiny top-left glyph well under the 2% gate.
 */
export const Visual: Story = {
  args: { icon: 'icon-alert-circle', content: 'Icon with tooltip story' },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
}

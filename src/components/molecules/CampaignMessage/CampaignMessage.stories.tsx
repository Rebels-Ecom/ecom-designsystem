import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { CampaignMessage } from './CampaignMessage'

const meta = {
  title: 'Design System/Molecules/CampaignMessage',
  component: CampaignMessage,
  args: {
    message: 'Du har inte upplevt kraven för kampanjen',
    ctaText: 'Lägg till produkter',
    icon: 'icon-alert-circle',
    iconColor: 'success',
  },
} satisfies Meta<typeof CampaignMessage>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical campaign message. The `play` proves the CTA is a real button whose accessible name is
 * `ctaText` and that activating it fires `onClick` (2.1.1).
 */
export const Default: Story = {
  args: { onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Lägg till produkter' }))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/**
 * Without an icon. Also asserts the accessible name keeps its original casing (uppercase is CSS-only),
 * so screen readers don't spell it out letter by letter.
 */
export const WithoutIcon: Story = {
  args: { icon: undefined },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Du har inte upplevt kraven för kampanjen')).toBeInTheDocument()
  },
}

/*
 * Visual-regression frame — reproduces `campaign-message-story`: bordered box, green alert icon,
 * uppercased message, primary CTA. No `play`, `layout: 'fullscreen'`. Button font divergence + lucide
 * glyph, under the 2% gate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { onClick: fn() },
}

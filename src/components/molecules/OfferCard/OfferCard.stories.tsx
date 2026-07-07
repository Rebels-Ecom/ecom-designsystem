import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { OfferCard } from './OfferCard'

const meta = {
  title: 'Design System/Molecules/OfferCard',
  component: OfferCard,
} satisfies Meta<typeof OfferCard>

export default meta
type Story = StoryObj<typeof meta>

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'

/**
 * Canonical tile. The play test proves the a11y contract: the heading is exposed as a heading, while the
 * feature icon is decorative — it never appears in the accessibility tree as an image.
 */
export const Default: Story = {
  args: {
    icon: 'icon-refresh-cw',
    heading: '24/7 Support',
    richText: lorem,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { name: '24/7 Support' })).toBeInTheDocument()
    // The decorative icon must not surface as an image in the a11y tree.
    await expect(canvas.queryByRole('img')).not.toBeInTheDocument()
  },
}

/** Second offer, mirroring the legacy `OfferCardStory2`. */
export const SecureDeliveries: Story = {
  args: {
    icon: 'icon-mail',
    heading: 'Säkra leveranser',
    richText: lorem,
  },
}

// Reproduces the legacy `offer-card-story-1` frame (icon-refresh-cw, "24/7 Support", lorem body).
export const Visual: Story = {
  tags: ['visual'],
  args: { icon: 'icon-refresh-cw', heading: '24/7 Support', richText: lorem },
  parameters: { layout: 'fullscreen' },
  render: (args) => <OfferCard {...args} />,
}

// Reproduces the legacy `offer-card-story-2` frame (icon-mail, "Säkra leveranser", lorem body).
export const VisualStory2: Story = {
  tags: ['visual'],
  args: { icon: 'icon-mail', heading: 'Säkra leveranser', richText: lorem },
  parameters: { layout: 'fullscreen' },
  render: (args) => <OfferCard {...args} />,
}

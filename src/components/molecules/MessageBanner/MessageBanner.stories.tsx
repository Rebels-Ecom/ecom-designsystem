import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { MessageBanner } from './MessageBanner'

const meta = {
  title: 'Design System/Molecules/MessageBanner',
  component: MessageBanner,
} satisfies Meta<typeof MessageBanner>

export default meta
type Story = StoryObj<typeof meta>

const message = ' Ditt order nr: 12345678'

/**
 * Success confirmation on the neutral surface. The play test proves the message lives in a polite live
 * region (`role="status"`) and the accent icon is decorative (absent from the a11y tree).
 */
export const Success: Story = {
  args: { type: 'success', children: message },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const status = canvas.getByRole('status')
    await expect(status).toHaveTextContent('Ditt order nr: 12345678')
    await expect(canvas.queryByRole('img')).not.toBeInTheDocument()
  },
}

/** Custom-coloured banner (dark purple) with white text — the `link` accent. */
export const Link: Story = {
  args: { type: 'link', color: '#432365', children: message },
}

// Reproduces the legacy `message-banner-story-success` frame (success icon, neutral bg, dark text).
export const Visual: Story = {
  tags: ['visual'],
  args: { type: 'success', children: message },
  parameters: { layout: 'fullscreen' },
  render: (args) => <MessageBanner {...args} />,
}

// Reproduces the legacy `message-banner-story-link` frame (purple bg #432365, white text, arrow icon).
export const VisualLink: Story = {
  tags: ['visual'],
  args: { type: 'link', color: '#432365', children: message },
  parameters: { layout: 'fullscreen' },
  render: (args) => <MessageBanner {...args} />,
}

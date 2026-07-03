import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { LoadingBar } from './LoadingBar'

const meta = {
  title: 'Design System/Atoms/LoadingBar',
  component: LoadingBar,
} satisfies Meta<typeof LoadingBar>

export default meta
type Story = StoryObj<typeof meta>

export const Announced: Story = {
  args: { name: 'Beska', value: '6', color: 'orange' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The meter exposes its value + range and is named by its visible label (4.1.2 / 1.3.1).
    const meter = canvas.getByRole('meter', { name: 'Beska' })
    await expect(meter).toHaveAttribute('aria-valuenow', '6')
    await expect(meter).toHaveAttribute('aria-valuemax', '12')
  },
}

// Second colour variant rendered so the a11y addon scans both token pairings.
export const Purple: Story = {
  args: { name: 'Sötma', value: '9', color: 'purple' },
}

// Reproduces the legacy `loading-bar-story-beska` frame: orange bar, value 6, label "Beska".
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { name: 'Beska', value: '6', color: 'orange' },
}

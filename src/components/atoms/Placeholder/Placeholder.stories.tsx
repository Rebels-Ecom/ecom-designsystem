import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Placeholder } from './Placeholder'

const meta = {
  title: 'Design System/Atoms/Placeholder',
  component: Placeholder,
} satisfies Meta<typeof Placeholder>

export default meta
type Story = StoryObj<typeof meta>

export const Heading: Story = {
  args: { type: 'heading' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Decorative skeleton is hidden from assistive tech (1.1.1): no role, no name.
    await expect(canvas.queryByRole('img')).toBeNull()
    await expect(canvasElement.querySelector('[aria-hidden="true"]')).toBeTruthy()
  },
}

export const TextBlock: Story = {
  render: () => (
    <div className="w-80">
      <Placeholder type="heading" />
      <Placeholder type="p_long" />
      <Placeholder type="p_long" />
      <Placeholder type="p_short" />
    </div>
  ),
}

export const Image: Story = {
  render: () => (
    <div className="h-40 w-64">
      <Placeholder type="image" />
    </div>
  ),
}

// Static frame for the review gallery. No legacy visual baseline exists (the legacy
// Placeholder shipped no story and no snapshot).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="w-80">
      <Placeholder type="heading" />
      <Placeholder type="p_long" />
      <Placeholder type="p_short" />
    </div>
  ),
}

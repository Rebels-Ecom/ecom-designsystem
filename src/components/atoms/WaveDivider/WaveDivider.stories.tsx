import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { WaveDivider } from './WaveDivider'

const meta = {
  title: 'Design System/Atoms/WaveDivider',
  component: WaveDivider,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    color: { control: { type: 'color' } },
  },
} satisfies Meta<typeof WaveDivider>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default divider. The `play` function asserts the graphic is hidden from assistive tech, since a
 * decorative separator must not appear in the accessibility tree (1.1.1).
 */
export const Default: Story = {
  args: { size: 'md' },
  play: async ({ canvasElement }) => {
    // Decorative: hidden from AT, so it exposes no `img`/`graphics-document` role to query.
    const svg = canvasElement.querySelector('svg')
    await expect(svg).not.toBeNull()
    await expect(svg).toHaveAttribute('aria-hidden', 'true')
    await expect(svg).toHaveAttribute('focusable', 'false')
    await expect(within(canvasElement).queryByRole('img')).toBeNull()
  },
}

/** Every width option in one frame so the sizing scale is easy to compare. */
export const Sizes: Story = {
  render: () => (
    <div>
      <WaveDivider size="sm" />
      <WaveDivider size="md" />
      <WaveDivider size="lg" />
      <WaveDivider size="xl" />
    </div>
  ),
}

/**
 * Visual-regression frame — reproduces the legacy `wave-divider-story` (a single `size='sm'`
 * divider in its default decorative-orange). No `play`, so the captured frame never mutates.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { size: 'sm' },
}

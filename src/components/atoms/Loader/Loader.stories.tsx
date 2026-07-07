import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Loader } from './Loader'

const meta = {
  title: 'Design System/Atoms/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Announced: Story = {
  args: { visible: true, text: 'Loading products', position: 'relative' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The live region exposes the loading state to assistive tech (WCAG 4.1.3).
    await expect(canvas.getByRole('status')).toHaveTextContent('Loading products')
  },
}

export const Hidden: Story = {
  args: { visible: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('status')).toBeNull()
  },
}

// Colour/size variants rendered for the a11y addon's contrast scan.
export const Orange: Story = {
  args: { visible: true, color: 'orange', size: 'xs', position: 'relative', text: 'Hämtar' },
}

// Reproduces the legacy `loader--loader-story` frame: default (sm, absolute) spinner with
// the text 'Loading'. Mapped in tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { visible: true, text: 'Loading' },
}

// Reproduces the legacy `loader-story-large` frame: a large (lg) spinner, no text. Mapped in
// tests/visual/baseline-map.ts.
export const VisualLarge: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { visible: true, size: 'lg' },
}

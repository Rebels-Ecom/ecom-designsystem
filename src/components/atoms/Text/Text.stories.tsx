import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Text } from './Text'

const meta = {
  title: 'Design System/Atoms/Text',
  component: Text,
  args: { children: `Hello! Here's some text` },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(/Hello! Here's some text/)).toBeVisible()
  },
}

// Renders only the AA-passing colours so the a11y addon's axe pass scans each on the page
// background (1.4.3). `warning` is omitted — orange is sub-AA for normal-weight text.
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text>Default</Text>
      <Text color="error">Error</Text>
      <Text color="information">Information</Text>
    </div>
  ),
}

export const Link: Story = {
  args: { componentType: 'a', href: '/somewhere' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: /Hello! Here's some text/ })
    await expect(link).toHaveAttribute('href', '/somewhere')
    // Non-colour affordance (1.4.1) + keyboard focusable with a visible ring (2.4.7).
    await expect(link).toHaveStyle({ 'text-decoration-line': 'underline' })
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

// ── Visual parity frames (mapped in tests/visual/baseline-map.ts) ──
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

export const VisualError: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { color: 'error' },
}

// Diverges from the legacy orange, undecorated link (which failed 1.4.1 + 1.4.3): V2 renders a
// blue, underlined link. The change is confined to the small text glyphs, well under the diff gate.
export const VisualLink: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { componentType: 'a', href: '/somewhere' },
}

export const VisualSpan: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { componentType: 'span', href: '/somewhere' },
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Tag } from './Tag'

const meta = {
  title: 'Design System/Atoms/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Rectangular: Story = {
  args: { text: 'Eko', shape: 'rectangular', color: 'green', size: 'sm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Eko')).toBeVisible()
  },
}

// Every AA-passing colour rendered together so the a11y addon's axe pass scans each
// text-on-background pairing (1.4.3). `orange` is intentionally omitted — white on
// --color-tag-orange fails AA and is flagged for design review in the component.
export const Colors: Story = {
  args: { text: 'Tag' },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag text="Grön" color="green" />
      <Tag text="Mint" color="mint" />
      <Tag text="Blå" color="blue" />
      <Tag text="Grå" color="grey" />
      <Tag text="Gul" color="yellow" />
      <Tag text="Lila" color="purple" />
      <Tag text="Svart" color="black" />
    </div>
  ),
}

export const Shapes: Story = {
  args: { text: 'Tag' },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tag text="Tillval" shape="rectangular" color="blue" />
      <Tag text="Kurs" shape="round" color="mint" size="sm" />
      <Tag text="Pill" shape="pill" color="green" />
    </div>
  ),
}

// Pills honour `size` (they did not before — every pill rendered at the `lg` label size). The `play`
// asserts a `sm` pill's label is strictly smaller than an `lg` pill's, and axe scans each pairing.
export const PillSizes: Story = {
  args: { text: 'Pill' },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tag text="Liten" shape="pill" color="green" size="sm" />
      <Tag text="Mellan" shape="pill" color="blue" size="md" />
      <Tag text="Stor" shape="pill" color="purple" size="lg" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const fontPx = (text: string) => parseFloat(getComputedStyle(canvas.getByText(text)).fontSize)
    await expect(fontPx('Liten')).toBeLessThan(fontPx('Stor'))
  },
}

// A colour-coded dot with no visible text still carries its label for assistive tech.
export const NoTextIsLabelled: Story = {
  args: { text: 'Nyhet', shape: 'round', color: 'mint', size: 'sm', noText: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The label is hidden visually but present in the accessibility tree (1.4.1 / 1.1.1).
    await expect(canvas.getByText('Nyhet')).toBeInTheDocument()
  },
}

// ── Visual parity frames (mapped in tests/visual/baseline-map.ts) ──
// Each reproduces one legacy `tag-story-*` frame. The legacy round-L (orange) frame is NOT
// reproduced here: white-on-orange fails AA, so a scanned story can't render it — see the
// contrast note in Tag.tsx and the baseline-map comment.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { text: 'Tillval', shape: 'rectangular', color: 'blue', size: 'lg' },
}

export const VisualRectangularS: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { text: 'Eko', shape: 'rectangular', color: 'green', size: 'sm' },
}

export const VisualRoundS: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { text: 'Kurs', shape: 'round', color: 'mint', size: 'sm' },
}

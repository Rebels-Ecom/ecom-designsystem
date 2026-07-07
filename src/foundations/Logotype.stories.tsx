import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Logotype } from '../components/molecules/Logotype'

/**
 * The Spendrups brand mark. It's a brand foundation, so its primary showcase lives here; a reference
 * entry also exists under Molecules because `Logotype` is a publicly exported component.
 */
const meta = {
  title: 'Design System/Foundations/Logotype',
  component: Logotype,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Logotype>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical usage: the responsive brand mark (compact below `md`, wordmark from `md` up). */
export const Default: Story = {
  args: { ariaLabel: 'Spendrups' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Spendrups' })).toBeInTheDocument()
  },
}

/** The three variants side by side: responsive, horizontal wordmark, compact vertical mark. */
export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Logotype variant="responsive" />
      <Logotype variant="horizontal" />
      <Logotype variant="vertical" />
    </div>
  ),
}

/** Static frame for the review gallery (deterministic bundled SVG; not mapped to a legacy baseline). */
export const Visual: Story = {
  args: { variant: 'horizontal' },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div className="p-4">
      <Logotype {...args} />
    </div>
  ),
}

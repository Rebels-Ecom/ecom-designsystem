import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Logotype } from './Logotype'

// Logotype is a publicly exported molecule, so it keeps a reference entry under Molecules for
// component discovery. Its full brand showcase (variants, visual) lives under Foundations —
// see src/foundations/Logotype.stories.tsx.
const meta = {
  title: 'Design System/Molecules/Logotype',
  component: Logotype,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Logotype>

export default meta
type Story = StoryObj<typeof meta>

/** Reference entry. The responsive brand mark; see Foundations → Logotype for all variants. */
export const Default: Story = {
  args: { ariaLabel: 'Spendrups' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Spendrups' })).toBeInTheDocument()
  },
}

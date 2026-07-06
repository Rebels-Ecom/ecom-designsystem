import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { MaxWidth } from './MaxWidth'

const meta = {
  title: 'Design System/Atoms/MaxWidth',
  component: MaxWidth,
  args: { contentMaxWidth: 'text', children: <p>Constrained content.</p> },
  argTypes: {
    contentMaxWidth: { options: ['narrow', 'wide', 'text'], control: { type: 'radio' } },
  },
} satisfies Meta<typeof MaxWidth>

export default meta
type Story = StoryObj<typeof meta>

const Panel = ({ label }: { label: string }) => (
  <div style={{ background: 'lightblue', padding: '1rem' }}>{label}</div>
)

/**
 * Default `text`-width container. The `play` function confirms the content renders and the wrapper
 * stays presentational (no role of its own), so nested content owns the a11y tree (1.3.1).
 */
export const Default: Story = {
  args: { contentMaxWidth: 'text' },
  render: (args) => (
    <MaxWidth {...args}>
      <p>This column is capped at a comfortable reading measure.</p>
    </MaxWidth>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(/comfortable reading measure/)).toBeVisible()
    await expect(canvas.queryByRole('region')).toBeNull()
  },
}

/** All three presets stacked so the caps are easy to compare. */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <MaxWidth contentMaxWidth="text">
        <Panel label="text — 52rem" />
      </MaxWidth>
      <MaxWidth contentMaxWidth="narrow">
        <Panel label="narrow — 73rem" />
      </MaxWidth>
      <MaxWidth contentMaxWidth="wide">
        <Panel label="wide — 103rem" />
      </MaxWidth>
    </div>
  ),
}

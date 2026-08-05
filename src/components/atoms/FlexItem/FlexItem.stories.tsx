import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { FlexItem } from './FlexItem'

const meta = {
  title: 'Design System/Deprecated/FlexItem',
  component: FlexItem,
  args: { children: <span>Item</span> },
} satisfies Meta<typeof FlexItem>

export default meta
type Story = StoryObj<typeof meta>

const Box = ({ label }: { label: string }) => (
  <div className="bg-surface-subdued p-4 text-body">{label}</div>
)

/**
 * Two items sharing a flex row: the second claims twice the free space (`flex: 2`) of the first
 * (`flex: 1`). The `play` function confirms the layout wrappers stay presentational — they add no
 * implicit role, so the children drive the accessibility tree (1.3.1).
 */
export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <FlexItem {...args} flex={{ sm: '1' }}>
        <Box label="Grows 1" />
      </FlexItem>
      <FlexItem flex={{ sm: '2' }}>
        <Box label="Grows 2" />
      </FlexItem>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Grows 1')).toBeVisible()
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.queryByRole('group')).toBeNull()
  },
}

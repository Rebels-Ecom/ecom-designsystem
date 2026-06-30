import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { ExpandableWrapper } from './ExpandableWrapper'

const meta = {
  title: 'Design System/Atoms/ExpandableWrapper',
  component: ExpandableWrapper,
} satisfies Meta<typeof ExpandableWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    open: true,
    children: <p className="p-4 text-text-default">Expanded content is visible.</p>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Expanded content is visible.')).toBeVisible()
  },
}

export const Collapsed: Story = {
  args: {
    open: false,
    children: <p className="p-4 text-text-default">Hidden until expanded.</p>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Content stays mounted but is hidden from assistive tech while collapsed.
    await expect(canvas.queryByText('Hidden until expanded.')).not.toBeNull()
  },
}

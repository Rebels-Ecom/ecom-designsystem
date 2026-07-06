import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { BoxWrapper } from './BoxWrapper'

const meta = {
  title: 'Design System/Atoms/BoxWrapper',
  component: BoxWrapper,
  args: { children: <p className="text-body">Boxed content</p> },
  argTypes: {
    position: { options: ['left', 'right', 'center', 'apart'], control: { type: 'select' } },
    align: {
      options: ['left', 'right', 'center', 'stretch', 'baseline'],
      control: { type: 'select' },
    },
    spacing: { options: ['xs', 'sm', 'md', 'lg', 'xl'], control: { type: 'select' } },
    backgroundColor: { options: [undefined, 'light'], control: { type: 'radio' } },
  },
} satisfies Meta<typeof BoxWrapper>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default bordered box stacking two blocks of content. The `play` function confirms the box stays
 * presentational — it exposes no landmark/role of its own, so any structure comes from the
 * children (1.3.1).
 */
export const Default: Story = {
  render: (args) => (
    <BoxWrapper {...args}>
      <p className="text-body font-bold">Section title</p>
      <p className="text-body">A boxed cluster of related content with a subtle card border.</p>
    </BoxWrapper>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Section title')).toBeVisible()
    await expect(canvas.queryByRole('group')).toBeNull()
    await expect(canvas.queryByRole('region')).toBeNull()
  },
}

/** Emphasised variant: a stronger primary-blue border on a light (white) surface. */
export const StrongBorder: Story = {
  args: { withStrongBorder: true, backgroundColor: 'light' },
  render: (args) => (
    <BoxWrapper {...args}>
      <p className="text-body">Emphasised box with a primary-blue border on a light surface.</p>
    </BoxWrapper>
  ),
}

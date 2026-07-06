import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { GroupWrapper } from './GroupWrapper'
import { Heading } from '../Heading'

const meta = {
  title: 'Design System/Atoms/GroupWrapper',
  component: GroupWrapper,
  args: { children: <span>Item</span> },
  argTypes: {
    direction: { options: ['default', 'row', 'column'], control: { type: 'radio' } },
    position: { options: ['left', 'right', 'center', 'apart'], control: { type: 'select' } },
    align: { options: ['left', 'right', 'center', 'baseline'], control: { type: 'select' } },
    spacing: { options: ['xs', 'sm', 'md', 'lg', 'xl'], control: { type: 'select' } },
  },
} satisfies Meta<typeof GroupWrapper>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default cluster of three items. The `play` function confirms the group div stays presentational —
 * it exposes no landmark/role of its own, so its children drive the accessibility tree (1.3.1).
 */
export const Default: Story = {
  args: { position: 'left', spacing: 'md', noWrap: true },
  render: (args) => (
    <GroupWrapper {...args}>
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
    </GroupWrapper>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('First')).toBeVisible()
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.queryByRole('group')).toBeNull()
  },
}

/**
 * Visual-regression frame — reproduces the legacy `group-wrapper-story`: a single `order={1}`
 * heading inside a max-width-1800 wrapper, left-positioned, `md` spacing, no-wrap. No `play`, so
 * the captured frame never mutates.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { position: 'left', spacing: 'md', noWrap: true },
  render: (args) => (
    <div style={{ margin: 'auto', maxWidth: '1800px' }}>
      <GroupWrapper {...args}>
        <Heading order={1}>Heading Component </Heading>
      </GroupWrapper>
    </div>
  ),
}

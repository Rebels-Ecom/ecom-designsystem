import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { FlexContainer } from './FlexContainer'

const meta = {
  title: 'Design System/Atoms/FlexContainer',
  component: FlexContainer,
  args: { children: <span>Item</span> },
  argTypes: {
    flexDirection: { options: ['row', 'column'], control: { type: 'radio' } },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end', 'stretch'],
      control: { type: 'select' },
    },
    justifyContent: {
      options: ['flex-start', 'center', 'flex-end', 'space-between'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof FlexContainer>

export default meta
type Story = StoryObj<typeof meta>

const Box = () => <div style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />

/**
 * Default row layout. The `play` function confirms the layout div stays presentational — it must
 * expose no landmark/role of its own, so its children drive the accessibility tree (1.3.1).
 */
export const Default: Story = {
  args: {
    flexDirection: 'row',
    gap: 1,
    wrap: false,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  render: (args) => (
    <FlexContainer {...args}>
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
    </FlexContainer>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('First')).toBeVisible()
    // Presentational container: no implicit role added by the layout div.
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.queryByRole('group')).toBeNull()
  },
}

/**
 * Visual-regression frame — reproduces the legacy `flex-container-story`: six 4rem swatches in a
 * row, 1rem gap, aligned/justified to the start. No `play`, so the captured frame never mutates.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    flexDirection: 'row',
    gap: 1,
    wrap: false,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  render: (args) => (
    <FlexContainer {...args}>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </FlexContainer>
  ),
}

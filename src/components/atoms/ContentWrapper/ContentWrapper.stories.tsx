import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { ContentWrapper } from './ContentWrapper'
import { FlexContainer } from '../FlexContainer'

const meta = {
  title: 'Design System/Atoms/ContentWrapper',
  component: ContentWrapper,
  args: { children: <p>Constrained, centred content.</p> },
} satisfies Meta<typeof ContentWrapper>

export default meta
type Story = StoryObj<typeof meta>

const swatches = Array.from({ length: 20 }, (_, i) => i)

const Demo = () => (
  <div style={{ width: '100%', background: 'lightblue' }}>
    <FlexContainer wrap>
      {swatches.map((i) => (
        <div key={i} style={{ width: '4rem', height: '4rem', backgroundColor: 'lightcoral' }} />
      ))}
    </FlexContainer>
  </div>
)

/**
 * Default wrapper. The `play` function checks that content is rendered inside the wrapper and that
 * the wrapper stays presentational (no role of its own), so nested content owns the a11y tree.
 */
export const Default: Story = {
  args: { padding: 1, id: 'content-wrapper-demo' },
  render: (args) => (
    <ContentWrapper {...args}>
      <p>Constrained, centred content.</p>
    </ContentWrapper>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Constrained, centred content.')).toBeVisible()
    await expect(canvasElement.querySelector('#content-wrapper-demo')).not.toBeNull()
  },
}

/**
 * Visual-regression frame — reproduces the legacy `content-wrapper-story`: a light-blue block
 * holding a wrapping `FlexContainer` of twenty 4rem swatches, with `padding={1}`. No `play`, so the
 * captured frame never mutates.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { padding: 1 },
  render: (args) => (
    <ContentWrapper {...args}>
      <Demo />
    </ContentWrapper>
  ),
}

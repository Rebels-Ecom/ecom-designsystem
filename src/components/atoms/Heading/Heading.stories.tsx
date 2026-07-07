import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Heading } from './Heading'

const meta = {
  title: 'Design System/Atoms/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Levels: Story = {
  args: { order: 2, children: 'Heading' },
  render: (args) => (
    <div>
      <Heading {...args} order={1}>
        Heading level 1
      </Heading>
      <Heading {...args} order={2}>
        Heading level 2
      </Heading>
      <Heading {...args} order={3}>
        Heading level 3
      </Heading>
      <Heading {...args} order={4}>
        Heading level 4
      </Heading>
      <Heading {...args} order={5}>
        Heading level 5
      </Heading>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { level: 1, name: 'Heading level 1' }),
    ).toBeInTheDocument()
    await expect(
      canvas.getByRole('heading', { level: 5, name: 'Heading level 5' }),
    ).toBeInTheDocument()
  },
}

export const Clickable: Story = {
  args: { order: 3, children: 'Click me', onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Click me' })

    button.focus()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onClick).toHaveBeenCalled()
  },
}

// Reproduces the legacy `heading--heading-story` frame — all five levels, text "Heading here"
// — for the visual-regression diff. Static (no `play`); `layout: 'fullscreen'` so it sits flush
// like the legacy capture. Mapped in tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  // `render` supplies every level explicitly; `args` is only here because Heading's required
  // props make it mandatory on the Story type.
  args: { order: 1, children: 'Heading here' },
  render: () => (
    <>
      <Heading order={1} margin={[2.5, 0]}>Heading here</Heading>
      <Heading order={2}>Heading here</Heading>
      <Heading order={3}>Heading here</Heading>
      <Heading order={4}>Heading here</Heading>
      <Heading order={5}>Heading here</Heading>
    </>
  ),
}

// Reproduces the legacy `heading-delivery-form-story` frame: all five levels with the text
// "Dina leverans uppgifter" and the order-1 default margin (legacy passed no margin here).
// Mapped in tests/visual/baseline-map.ts.
export const VisualDeliveryForm: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { order: 1, children: 'Dina leverans uppgifter' },
  render: () => (
    <>
      <Heading order={1}>Dina leverans uppgifter</Heading>
      <Heading order={2}>Dina leverans uppgifter</Heading>
      <Heading order={3}>Dina leverans uppgifter</Heading>
      <Heading order={4}>Dina leverans uppgifter</Heading>
      <Heading order={5}>Dina leverans uppgifter</Heading>
    </>
  ),
}

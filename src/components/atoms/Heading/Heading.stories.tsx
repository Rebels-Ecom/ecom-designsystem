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

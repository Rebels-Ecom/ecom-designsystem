import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { ComponentWithTooltip } from './ComponentWithTooltip'

const meta = {
  title: 'Design System/Atoms/ComponentWithTooltip',
  component: ComponentWithTooltip,
} satisfies Meta<typeof ComponentWithTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'Välj variant',
    side: 'top',
    align: 'center',
    element: (
      <button
        type="button"
        className="rounded bg-action-primary px-3 py-2 text-text-white"
      >
        Hover me
      </button>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Hover me' })

    // Keyboard users reveal it via focus...
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    const tooltip = await canvas.findByRole('tooltip')
    await expect(tooltip).toHaveTextContent('Välj variant')
    await expect(trigger).toHaveAttribute('aria-describedby', tooltip.id)

    // ...and dismiss it with Escape.
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument()
  },
}

export const Pink: Story = {
  args: {
    content: 'Pink tooltip',
    color: 'pink',
    side: 'bottom',
    element: (
      <button
        type="button"
        className="rounded bg-action-primary px-3 py-2 text-text-white"
      >
        Hover me
      </button>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.hover(canvas.getByRole('button', { name: 'Hover me' }))
    await expect(await canvas.findByRole('tooltip')).toHaveTextContent('Pink tooltip')
  },
}

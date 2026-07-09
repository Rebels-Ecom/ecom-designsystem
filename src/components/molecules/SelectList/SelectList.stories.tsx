import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { SelectList } from './SelectList'

const meta = {
  title: 'Design System/Molecules/SelectList',
  component: SelectList,
  args: {
    placeholder: 'Sortera',
    options: [
      { name: 'Fallande', value: 'fallande' },
      { name: 'Stigande', value: 'stigande' },
    ],
  },
} satisfies Meta<typeof SelectList>

export default meta
type Story = StoryObj<typeof meta>

/** Open the dropdown, pick an option and confirm the trigger reflects the selection. */
export const Default: Story = {
  args: { onClickItem: fn() },
  render: (args) => (
    <div className="min-h-72">
      <SelectList {...args} />
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Sortera' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')

    const option = canvas.getByRole('radio', { name: 'Fallande' })
    await userEvent.click(option)
    await expect(option).toBeChecked()
    await expect(args.onClickItem).toHaveBeenCalledWith({ name: 'Fallande', value: 'fallande' })
    await expect(canvas.getByRole('button', { name: 'Fallande' })).toBeInTheDocument()

    // Escape closes and returns focus to the trigger.
    await userEvent.keyboard('{Escape}')
    await expect(canvas.getByRole('button', { name: 'Fallande' })).toHaveFocus()
    await expect(canvas.queryByRole('radio', { name: 'Fallande' })).not.toBeInTheDocument()
  },
}

/** `closeOnSelect` dismisses the popup as soon as an option is chosen. */
export const CloseOnSelect: Story = {
  args: { closeOnSelect: true },
  render: (args) => (
    <div className="min-h-72">
      <SelectList {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Sortera' }))
    await userEvent.click(canvas.getByRole('radio', { name: 'Stigande' }))
    await expect(canvas.queryByRole('radio', { name: 'Stigande' })).not.toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Stigande' })).toBeInTheDocument()
  },
}

/** Static closed-trigger frame reproducing the legacy `select-list-story` baseline. */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

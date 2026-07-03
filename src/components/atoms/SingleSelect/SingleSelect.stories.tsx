import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { SingleSelect } from './SingleSelect'

const options = [
  { name: 'Pris (lågt–högt)', value: 'price-asc' },
  { name: 'Pris (högt–lågt)', value: 'price-desc' },
  { name: 'Namn', value: 'name' },
]

const meta = {
  title: 'Design System/Atoms/SingleSelect',
  component: SingleSelect,
  args: { name: 'Sortera', options, ariaLabel: 'Sortera produkter' },
} satisfies Meta<typeof SingleSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    // Native select exposes a combobox role + accessible name (4.1.2 / 3.3.2).
    const select = canvas.getByRole('combobox', { name: 'Sortera produkter' })
    await userEvent.selectOptions(select, 'name')
    await expect(select).toHaveValue('name')
    await expect(args.onChange).toHaveBeenCalled()
  },
}

// 3.2.2 — changing the selection reports the change but must not navigate or submit on its own.
export const OnInputDoesNotNavigate: Story = {
  args: { onChange: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const select = canvas.getByRole('combobox', { name: 'Sortera produkter' })
    await userEvent.selectOptions(select, 'price-desc')
    // Still on the same story: no context change occurred.
    await expect(select).toBeInTheDocument()
    await expect(select).toHaveValue('price-desc')
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('combobox', { name: 'Sortera produkter' })).toBeDisabled()
  },
}

// Static frame for the review gallery. No legacy visual baseline exists (the legacy single-select
// shipped no story and no snapshot), so it is intentionally absent from tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

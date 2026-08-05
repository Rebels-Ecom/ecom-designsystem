import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { QuantityChanger } from './QuantityChanger'

const meta = {
  title: 'Design System/Deprecated/QuantityChanger',
  component: QuantityChanger,
  args: {
    id: 'quantity',
    quantity: '1',
    onChange: fn(),
  },
} satisfies Meta<typeof QuantityChanger>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical stepper. The `play` proves the `+`/`−` buttons change the value and fire `onChange`, and
 * that the field reflects the new count.
 */
export const Default: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState('1')
    return (
      <div className="p-8">
        <QuantityChanger
          {...args}
          quantity={quantity}
          onChange={(value) => {
            setQuantity(String(value))
            args.onChange?.(value)
          }}
        />
      </div>
    )
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByRole('spinbutton', { name: 'Current quantity' })
    await userEvent.click(canvas.getByRole('button', { name: 'Increase quantity' }))
    await expect(args.onChange).toHaveBeenLastCalledWith(2)
    await expect(field).toHaveValue(2)
    await userEvent.click(canvas.getByRole('button', { name: 'Decrease quantity' }))
    await expect(args.onChange).toHaveBeenLastCalledWith(1)
    await expect(field).toHaveValue(1)
  },
}

/** Decrement is disabled at 0 so the value can never go negative. */
export const AtZero: Story = {
  args: { quantity: '0' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Decrease quantity' })).toBeDisabled()
  },
}

/** Increment is disabled once `maxQuantity` is reached. */
export const AtMax: Story = {
  args: { quantity: '5', maxQuantity: 5 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Increase quantity' })).toBeDisabled()
  },
}

/** Fully disabled — both controls and the field are inert. */
export const Disabled: Story = {
  args: { disabled: true },
}

/** Localised control names via `labels`. */
export const Localized: Story = {
  args: {
    labels: {
      group: 'Antal',
      input: 'Nuvarande antal',
      decrement: 'Minska antal',
      increment: 'Öka antal',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('group', { name: 'Antal' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Öka antal' })).toBeInTheDocument()
  },
}

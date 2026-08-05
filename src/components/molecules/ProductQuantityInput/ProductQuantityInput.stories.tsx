import { useState, type ChangeEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { ProductQuantityInput } from './ProductQuantityInput'

const meta = {
  title: 'Design System/Molecules/ProductQuantityInput',
  component: ProductQuantityInput,
  args: {
    quantityInputId: 'quantity-1105101',
    quantity: '1',
    salesUnit: 'KLI',
    itemNumberPerSalesUnit: 15,
    totalPrice: '350,10',
  },
} satisfies Meta<typeof ProductQuantityInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical quantity stepper. The `play` proves the number field is properly named (`aria-label`),
 * reachable by keyboard, and that typing updates the value while an illegal character ("e") is
 * blocked (3.3.1).
 */
export const Default: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState(args.quantity)
    return (
      <ProductQuantityInput
        {...args}
        quantity={quantity}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setQuantity(event.target.value)}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('spinbutton', { name: 'Quantity' })
    await userEvent.tab()
    await expect(input).toHaveFocus()
    await userEvent.clear(input)
    await userEvent.type(input, '4')
    await expect(input).toHaveValue(4)
    // Illegal characters are rejected — the value stays put.
    await userEvent.type(input, 'e')
    await expect(input).toHaveValue(4)
  },
}

/** Read-only presentation — no input, the quantity renders as text. */
export const Disabled: Story = {
  args: { disabled: true, quantity: '3' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('spinbutton')).toBeNull()
  },
}

/**
 * Regression guard for the falsy-zero `maxQuantity` bug: `maxQuantity={0}` must block *every* increase
 * (e.g. an out-of-stock line), not be treated as "no cap". Typing is rejected and the value stays at 0.
 */
export const MaxQuantityZero: Story = {
  args: { quantity: '0', maxQuantity: 0 },
  render: (args) => {
    const [quantity, setQuantity] = useState(args.quantity)
    return (
      <ProductQuantityInput
        {...args}
        quantity={quantity}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setQuantity(event.target.value)}
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('spinbutton', { name: 'Quantity' })
    await userEvent.type(input, '5')
    // With the cap at 0, the change is rejected and the field never leaves 0.
    await expect(input).toHaveValue(0)
  },
}

/** Price hidden — only the unit detail row shows. */
export const HiddenPrice: Story = {
  args: { hidePrice: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByText(/Price:/)).toBeNull()
  },
}

/**
 * Localised copy — every UI string overridden via `labels`, asserting the price line reflects the
 * override (proves no string is baked in).
 */
export const Localized: Story = {
  args: { labels: { quantity: 'Antal', pieces: 'styck', price: 'Pris:', currency: 'kr', times: 'x' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(/Pris: 350,10 kr/)).toBeInTheDocument()
  },
}

/*
 * Visual-regression frame — reproduces `input-quantity-story`: an empty number field (placeholder
 * "0") next to "x KLI (15 styck)" and "Pris: 350,10 kr". No `play`, `layout: 'fullscreen'`. Uses the
 * Swedish `labels` the legacy frame rendered.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    quantity: '',
    labels: { quantity: 'Antal', pieces: 'styck', price: 'Pris:', currency: 'kr', times: 'x' },
  },
}

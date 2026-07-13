import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { AddToCartButton } from './AddToCartButton'

const meta = {
  title: 'Design System/Molecules/AddToCartButton',
  component: AddToCartButton,
  args: {
    id: 'add-to-cart',
    buttonLabel: 'Add to cart',
    onAdd: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof AddToCartButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical flow: the resting add-to-cart button expands into a stepper once a quantity is set. The
 * play test proves the add button carries a visible-text accessible name, pressing it fires `onAdd`
 * and reveals the labelled stepper group, and the +/- buttons adjust the named quantity field.
 */
export const Default: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState(0)
    return (
      <AddToCartButton
        {...args}
        quantity={quantity}
        onAdd={() => {
          setQuantity(1)
          args.onAdd()
        }}
        onChange={(value) => {
          setQuantity(value)
          args.onChange?.(value)
        }}
      />
    )
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Add to cart' }))
    await expect(args.onAdd).toHaveBeenCalled()

    await expect(canvas.getByRole('group', { name: 'Quantity selector' })).toBeInTheDocument()
    const input = canvas.getByLabelText('Quantity')
    await expect(input).toHaveValue(1)

    await userEvent.click(canvas.getByRole('button', { name: 'Increase quantity' }))
    await expect(input).toHaveValue(2)
    await userEvent.click(canvas.getByRole('button', { name: 'Decrease quantity' }))
    await expect(input).toHaveValue(1)
  },
}

/** Increment stops at `maxQuantity`. */
export const MaxQuantity: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState(2)
    return <AddToCartButton {...args} quantity={quantity} maxQuantity={2} onChange={setQuantity} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Quantity')
    await expect(input).toHaveValue(2)
    await userEvent.click(canvas.getByRole('button', { name: 'Increase quantity' }))
    await expect(input).toHaveValue(2)
  },
}

/** All built-in control names are overridable (English defaults) — here localised to Swedish. */
export const Localized: Story = {
  args: {
    quantity: 1,
    labels: {
      group: 'Antalsväljare',
      quantity: 'Antal',
      increase: 'Öka antal',
      decrease: 'Minska antal',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('group', { name: 'Antalsväljare' })).toBeInTheDocument()
    await expect(canvas.getByLabelText('Antal')).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Öka antal' })).toBeInTheDocument()
  },
}

// Reproduces the legacy `add-to-cart-button` frame: the resting pill (quantity 0). The legacy story
// left `buttonLabel` empty (an unnamed button — an axe failure we can't reproduce), so this frame
// shows the real CTA label; the small white-on-blue text is a tiny delta over the empty legacy pill
// (the ~180×32px pill is <0.6% of the 1280×800 canvas, well under the 2% gate).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { quantity: 0, buttonLabel: 'Lägg i varukorg' },
}

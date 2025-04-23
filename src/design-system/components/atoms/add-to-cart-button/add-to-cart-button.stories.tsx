import type { Meta, StoryObj } from '@storybook/react'
import React, { useCallback, useState } from 'react'
import { AddToCartButton, TAddToCartButton } from './add-to-cart-button'

const meta: Meta<typeof AddToCartButton> = {
  title: 'Design System/Atoms/Add To Cart Button',
  component: AddToCartButton,
}

export default meta
type Story = StoryObj<typeof AddToCartButton>

const ButtonStoryTemplate: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState(0)
    const onClick = useCallback(() => setQuantity(1), [])

    return <AddToCartButton {...args} quantity={quantity} onClick={onClick} onChange={(val) => setQuantity(val)} />
  },
}

export const Add_To_Cart_Button = {
  ...ButtonStoryTemplate,
  args: {
    id: 'add-to-cart-button',
    quantity: 0,
  } as TAddToCartButton,
}

import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductQuantityInput } from './product-quantity-input'
import { InputTextStory } from '../../atoms/inputs/input-text/input-text.stories'
import { convertNumToStr } from '../../../../helpers/format-helper'

export default {
  title: 'Design System/Molecules/ProductQuantityInput',
  component: ProductQuantityInput,
} as ComponentMeta<typeof ProductQuantityInput>

const Template: ComponentStory<typeof ProductQuantityInput> = (args) => {
  const price = 23.34;
  const [totalPrice, setTotalPrice] = useState(convertNumToStr(price * args.itemNumberPerSalesUnit));

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
      const quantity = parseInt(e.target.value) || 1;
      setTotalPrice(convertNumToStr(price * args.itemNumberPerSalesUnit * quantity));
  }

  return (
    <>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <ProductQuantityInput {...args} onChange={handleOnChangeQuantity} totalPrice = {totalPrice}/>
      </div>
    </>
  )
}


export const InputQuantityStory = Template.bind({})
InputQuantityStory.storyName = 'Form Group with Input Quantity'
InputQuantityStory.args = {
  salesUnit: 'KLI',
  itemNumberPerSalesUnit: 15,
  quantityInputId:'1105101',
  inputProps: {
    ...InputTextStory,
    id: 'input_1',
    sizeSmall: true,
    defaultValue:'1',
    placeholder: '1'
  },
}

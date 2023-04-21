import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CartProductList } from './cart-product-list'
import { CartProductStoryBeer, CartProductStoryWine } from '../../molecules/cart-product/cart-product.stories'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'

const meta: Meta<typeof CartProductList> = {
  title: 'Design System/Organisms/CartProductList',
  component: CartProductList
};

export default meta;
type Story = StoryObj<typeof CartProductList>

const cartProducts = [
  CartProductStoryBeer.args,
  CartProductStoryWine.args,
  CartProductStoryBeer.args,
  CartProductStoryWine.args
]

const CartProductListStoryTemplate: Story = {
  render: ( args ) => {
    return (
      <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
        <CartProductList>
          { args?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={()=>{}} ></CartProduct>) }
        </CartProductList>
      </div>
    )
  }
}

export const CartProductListStory = {
  ...CartProductListStoryTemplate,
  args: { children: cartProducts }
}
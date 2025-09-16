import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { IProduct } from '../../../../types/product'
import { dummy, productCardFactory } from '../product-card/dummy-product'
import { IProductCardMiniVertical, ProductCardMiniVertical } from './product-card-mini-vertical'

const meta: Meta<typeof ProductCardMiniVertical> = {
  title: 'Design System/Molecules/ProductCardMiniVertical',
  parameters: {
    controls: { exclude: ['product', 'addToCart', 'onClickRemoveProduct', 'onChangeQuantity', 'className'] },
  },
  component: ProductCardMiniVertical,
}

export default meta
type Story = StoryObj<typeof ProductCardMiniVertical>

interface ICartItem {
  variantId: string
  quantity: number
  [key: string]: any // Allows any other properties
}

const ProductCardMiniVerticalStory: Story = {
  render: ({ ...args }) => {
    const [itemsInCart, setItemsInCart] = useState<Array<ICartItem>>([])
    const [quantities, setQuantities] = useState(Array(4).fill(0))

    const onClick = (index) => {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities]
        newQuantities[index] = 1
        return newQuantities
      })
    }

    const addToCart = (product: Partial<ICartItem>) => {
      setItemsInCart((prevItemsInCart: ICartItem[]) => {
        const newItems = [...prevItemsInCart]
        const existingItemIndex = newItems.findIndex((n) => n.partNo === product.partNo)

        if (existingItemIndex !== -1) {
          // If item exists, update its quantity
          newItems[existingItemIndex].quantity += product.quantity || 0
        } else {
          // If item doesn't exist, add it to the array
          newItems.push(product as ICartItem)
        }

        return newItems
      })
    }

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          backgroundColor: 'lightgray',
          width: '100%',
          padding: '0.5rem',
        }}
      >
        {Array.from(Array(1)).map((_, index) => {
          return (
            <ProductCardMiniVertical
              key={`${args.product.partNo}-${index}`}
              {...args}
              product={{ ...args.product }}
              variantsInCart={itemsInCart?.map((x) => ({ variantId: x.partNo, quantity: x.quantity }))}
              addToCart={(p) => addToCart(p)}
            />
          )
        })}
      </div>
    )
  },
}

const productBeerArgs: IProduct = { ...productCardFactory(dummy), totalPrice: '' }

export const Product_Card_Mini_Vertical = {
  ...ProductCardMiniVerticalStory,
  args: {
    product: {
      ...productBeerArgs,
      quantity: '0',
      priceStr: '10',
    },
    loading: false,
    linkComponent: 'a',
    hideCartButton: false,
    showPackaging: true,
    addToCart: () => {},
    addToCartBtnLabel: 'Add to cart',
    handlePackageChange: () => {},
    onCloseVariants: () => {},
    onVariantsButtonClick: () => {},
    productImage: {
      id: '',
      sources: [],
      src: '',
    },
    showFavoriteIcon: true,
    onFavoriteIconClick: () => {},
    showAddToPurchaseListIcon: true,
    productQuantityDisabled: false,
  } as IProductCardMiniVertical,
}

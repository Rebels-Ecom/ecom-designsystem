import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { IProduct } from '../../../../types/product'
import { dummy, productCardFactory } from '../product-card/dummy-product'
import { IProductCard, ProductCard } from '../product-card/product-card'
import { ProductCardMiniVertical } from './product-card-mini-vertical'

const meta: Meta<typeof ProductCardMiniVertical> = {
  title: 'Design System/Molecules/ProductCardMiniVertical',
  parameters: {
    controls: { exclude: ['product', 'addToCart', 'onClickRemoveProduct', 'onChangeQuantity', 'className'] },
  },
  component: ProductCardMiniVertical,
}

export default meta
type Story = StoryObj<typeof ProductCardMiniVertical>

const ProductCardMiniVerticalStory: Story = {
  render: ({ ...args }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [quantity, setQuantity] = useState<number>(1)

    const pictureSources = [
      {
        srcset: args.product.primaryImageUrl,
        media: '(min-width: 800px)',
        sizes: '800px',
      },
      {
        srcset: args.product.primaryImageUrl,
        media: '(min-width: 500px)',
        sizes: '500px',
      },
      {
        srcset: args.product.primaryImageUrl,
        media: '(max-width: 499px)',
        sizes: '100vw',
      },
    ]

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
        {Array.from(Array(4)).map((x) => (
          <ProductCard key={`${args.product.partNo}-${x}`} {...args} />
        ))}
      </div>
    )
  },
}

const productBeerArgs: IProduct = { ...productCardFactory(dummy), totalPrice: '' }

export const Product_Card_Mini_Vertical = {
  ...ProductCardMiniVerticalStory,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: false,
    showPackaging: true,
    addToCart: () => {},
    addToCartBtnLabel: 'Add to cart',
    cardDisplay: 'mini-vertical',
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
  } as IProductCard,
}

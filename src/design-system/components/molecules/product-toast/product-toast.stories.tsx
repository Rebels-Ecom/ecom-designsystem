import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductToast } from './product-toast'
import { CartProductStoryBeer } from '../../molecules/cart-product/cart-product.stories'
import { ProductCardListStoryLoka } from '../../organisms/product-card-list/product-card-list.stories'
import { AnimatePresence } from 'framer-motion'

const meta: Meta<typeof ProductToast> = {
  title: 'Design System/Molecules/ProductToast',
  component: ProductToast,
}

export default meta
type Story = StoryObj<typeof ProductToast>

const ProductToastStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [openToast, setToastOpen] = useState(false)

    useEffect(() => {
      const interval = setInterval(() => {
        setToastOpen(false)
      }, 3000)

      return () => {
        clearInterval(interval)
      }
    }, [])

    return (
      <div>
        <button onClick={() => setToastOpen(true)}>Add toast</button>
        <AnimatePresence>{openToast && <ProductToast {...args}></ProductToast>}</AnimatePresence>
      </div>
    )
  },
}

export const ProductToastStory = {
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    position: 'top-right',
    label: 'Tillagd i varukorgen',
  },
}

export const ProductToastStory_WithRecommendedProducts = {
  ...ProductToastStoryTemplate,
  args: {
    cartProduct: CartProductStoryBeer.args,
    recommendedProducts: ProductCardListStoryLoka.args.productCards,
    recommendedProductsTitle: 'Du kanske också gillar',
    position: 'top-right',
    label: 'Tillagd i varukorgen',
  },
}

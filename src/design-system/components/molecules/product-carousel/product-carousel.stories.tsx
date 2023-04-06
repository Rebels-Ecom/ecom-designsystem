import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCarousel } from './product-carousel'
import { ProductCardListStory } from '../../organisms/product-card-list/product-card-list.stories'

const meta: Meta<typeof ProductCarousel> = {
    title: 'Design System/Molecules/ProductCarousel',
    component: ProductCarousel
};

export default meta;
type Story = StoryObj<typeof ProductCarousel>;

const ProductCarouselStoryTemplate: Story = {
  render: ( args ) => {
    function handleAddToCart(product:any) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return(
      <div style={{ margin: 'auto', maxWidth: '77.5rem' }}>
          <ProductCarousel {...args} addToCart={handleAddToCart}/>
      </div>
    )
  }
}

const products = ProductCardListStory.args.productCards.slice(0, 10)

export const ProductCarouselStory = {
    ...ProductCarouselStoryTemplate,
    args: {
        productCards: products
    }
}
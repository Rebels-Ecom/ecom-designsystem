import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCarousel } from './product-carousel'

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

export const ProductCarouselStory = {
    ...ProductCarouselStoryTemplate,
    args: {
        productCards: []
    }
}
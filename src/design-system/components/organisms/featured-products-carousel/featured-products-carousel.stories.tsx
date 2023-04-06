import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FeaturedProductsCarousel } from './featured-products-carousel'
import { action } from '@storybook/addon-actions'
import { ProductCardListStory } from '../product-card-list/product-card-list.stories'

const meta: Meta<typeof FeaturedProductsCarousel> = {
  title: 'Design System/Organisms/FeaturedProductsCarousel',
  component: FeaturedProductsCarousel
};

export default meta;
type Story = StoryObj<typeof FeaturedProductsCarousel>

const FeaturedProductsCarouselStoryTemplate: Story = {
  render: ( args ) => {

    function handleAddToCart(product:any) {
        alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return (
        <FeaturedProductsCarousel {...args} addToCart={handleAddToCart}/>
    )
  }
}

const cardList = ProductCardListStory.args.productCards.slice(0, 10)

export const FeaturedProductsCarouselStory = {
    ...FeaturedProductsCarouselStoryTemplate,
    args: {
      title: 'Våra mest sålda',
      productCards: cardList,
      link: {
        href: '/featured-products',
        children: 'Visa alla blivande favoriter',
        isExternal: true,
      },
      linkComponent: 'a',
      addToCart: action('clicked'),
    }
  }


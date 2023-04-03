import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FeaturedProducts } from './featured-products'
import { action } from '@storybook/addon-actions'
import { ProductCardListStory } from '../../organisms/product-card-list/product-card-list.stories'

const meta: Meta<typeof FeaturedProducts> = {
  title: 'Design System/Molecules/FeaturedProducts',
  component: FeaturedProducts
};

export default meta;
type Story = StoryObj<typeof FeaturedProducts>

const FeaturedProductsStoryTemplate: Story = {
  render: ( args ) => {

    function handleAddToCart(product:any) {
        alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return (
        <FeaturedProducts {...args} addToCart={handleAddToCart}/>
    )
  }
}

const cardList = ProductCardListStory.args.productCards.slice(0, 3)

export const FeaturedProductsStory = {
    ...FeaturedProductsStoryTemplate,
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


import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductPage } from './product-page'
import { HeaderStory } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { ProductDetailsStory } from '../../organisms/product-details/product-details.stories'
import { ProductDescriptionStory } from '../../organisms/product-description/product-description.stories'

const meta: Meta<typeof ProductPage> = {
  title: 'Design System/Templates/ProductPage',
  component: ProductPage
};

export default meta;
type Story = StoryObj<typeof ProductPage>;

const ProductPageStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleAddToCart(product:any) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return(<ProductPage {...args} addToCart={handleAddToCart}/>)
  }
};



export const ProductPageStory = {
  ...ProductPageStoryTemplate,
  args: {
    header: HeaderStory.args,
    productDetails: ProductDetailsStory.args,
    productDescription: ProductDescriptionStory.args,
    footer: FooterStory.args
  }
}

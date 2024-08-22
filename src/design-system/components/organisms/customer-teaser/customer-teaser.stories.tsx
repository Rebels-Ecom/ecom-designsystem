import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CustomerTeaser } from './customer-teaser'
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories'
import { SignupTeaserStory } from '../../molecules/signup-teaser/signup-teaser.stories'

const meta: Meta<typeof CustomerTeaser> = {
  title: 'Design System/Deprecated/CustomerTeaser',
  component: CustomerTeaser
};

export default meta;
type Story = StoryObj<typeof CustomerTeaser>;

const CustomerTeaserStoryTemplate: Story = {
  render: ( args ) => {

    function handleAddToCart(product:any) {
        alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return (
        <CustomerTeaser {...args} addToCart={handleAddToCart}/>
    )
  }
};

export const CustomerTeaserStory = {
    ...CustomerTeaserStoryTemplate,
    args: {
      featuredProducts: FeaturedProductsStory.args,
      signupTeaser: SignupTeaserStory.args
    }
  }


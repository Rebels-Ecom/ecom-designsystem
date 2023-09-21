import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { ProductDetailsStory } from '../../organisms/product-details/product-details.stories'
import { ProductDescriptionStory } from '../../organisms/product-description/product-description.stories'
import { Footer, ProductDescription, ProductDetails } from '../../organisms'
import { ContentWrapper } from '../../layouts'

const meta: Meta = {
  title: 'Design System/Templates/ProductPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
};

export default meta;

// GUIDELINE for how to structure a product page
const ProductPageStoryTemplate = {
  render: ({ ...args }) => {
    function handleAddToCart(product:any) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return (
      <>
        {args.header && args.header()}
        <ContentWrapper>
          <ProductDetails {...args.productDetails} addToCart={handleAddToCart} />
          <ProductDescription {...args.productDescription} />
        </ContentWrapper>
        <Footer {...args.footer} />
      </>
    )
  }
};



export const ProductPageStory = {
  ...ProductPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    productDetails: ProductDetailsStory.args,
    productDescription: ProductDescriptionStory.args,
    footer: FooterStory.args
  }
}

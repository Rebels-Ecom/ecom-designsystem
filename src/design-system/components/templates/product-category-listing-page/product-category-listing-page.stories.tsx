import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { BreadcrumbsStoryWithBackground } from '../../organisms/breadcrumbs/breadcrumbs.stories'
import { ProductCardListStory } from '../../organisms/product-card-list/product-card-list.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { ContentWrapper } from '../../layouts'
import { Breadcrumbs, Footer, ProductCardList } from '../../organisms'

const meta: Meta = {
  title: 'Design System/Templates/ProductCategoryListingPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
};

export default meta;

// GUIDELINE for how to structure a product category listing page
const ProductCategoryListingPageStoryTemplate = {
  render: ({ ...args }) => {
    function handleAddToCart(product:any) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return (
      <>
        {args.header && args.header()}
        <ContentWrapper>
          <Breadcrumbs {...args.breadcrumbs} />
            <ProductCardList {...args.productCategoryListing} addToCart={handleAddToCart} />
        </ContentWrapper>
        <Footer {...args.footer} />
      </>
    )
  }
};

export const ProductCategoryListingPageStory = {
  ...ProductCategoryListingPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    breadcrumbs: BreadcrumbsStoryWithBackground.args,
    productCategoryListing: ProductCardListStory.args,
    footer: FooterStory.args
  }
}

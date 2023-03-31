import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCategoryListingPage } from './product-category-listing-page'
import { HeaderStory } from '../../organisms/header/header.stories'
import { BreadcrumbsStoryWithBackground } from '../../organisms/breadcrumbs/breadcrumbs.stories'
import { ProductCardListStory } from '../../organisms/product-card-list/product-card-list.stories'

const meta: Meta<typeof ProductCategoryListingPage> = {
  title: 'Design System/Templates/ProductCategoryListingPage',
  component: ProductCategoryListingPage
};

export default meta;
type Story = StoryObj<typeof ProductCategoryListingPage>;

const ProductCategoryListingPageStoryTemplate: Story = {
  render: ({ ...args }) => (<ProductCategoryListingPage {...args} />)
};

export const ProductCategoryListingPageStory = {
  ...ProductCategoryListingPageStoryTemplate,
  args: {
    header: HeaderStory.args,
    breadcrumbs: BreadcrumbsStoryWithBackground.args,
    productCategoryListing: ProductCardListStory.args,
  }
}

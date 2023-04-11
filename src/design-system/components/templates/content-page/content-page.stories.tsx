import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContentPage } from './content-page'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { BlogCardListStory_VarförSpendrups, BlogCardListStory_Samarbete } from '../../organisms/blog-card-list/blog-card-list.stories'
import { OfferCardListStory } from '../../organisms/offer-card-list/offer-card-list.stories'
import { BlogCardStoryFullWidth } from '../../molecules/blog-card/blog-card.stories'
import { TeaserStoryLeft1, TeaserStoryRight } from '../../molecules/teaser/teaser.stories'
import { HeaderStory } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { FeaturedProductsCarouselStory } from '../../organisms/featured-products-carousel/featured-products-carousel.stories'
import { CustomerTeaserStory } from '../../organisms/customer-teaser/customer-teaser.stories'

const meta: Meta<typeof ContentPage> = {
  title: 'Design System/Templates/ContentPage',
  component: ContentPage,
}

export default meta
type Story = StoryObj<typeof ContentPage>

const ContentPageStoryTemplate: Story = {
  render: ({ ...args }) => <ContentPage {...args} />,
}

export const ContentPageTemplateStory = {
  ...ContentPageStoryTemplate,
  args: {
    header: HeaderStory.args,
    hero: HeroCarouselStory.args,
    blogList_4_Col: BlogCardListStory_VarförSpendrups.args,
    featuredProducts: FeaturedProductsCarouselStory.args,
    offerCardsList: OfferCardListStory.args,
    blogFullwidth: BlogCardStoryFullWidth.args,
    customerTeaser: CustomerTeaserStory.args,
    teaserRight: TeaserStoryRight.args,
    blogList_3_Col: BlogCardListStory_Samarbete.args,
    teaserLeft: TeaserStoryLeft1.args,
    footer: FooterStory.args,
  },
}

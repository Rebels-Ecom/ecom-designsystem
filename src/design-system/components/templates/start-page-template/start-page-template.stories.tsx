import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StartPageTemplate } from './start-page-template'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { BlogCardListStory_VarförSpendrups, BlogCardListStory_Brewing, BlogCardListStory_Samarbete, BlogCardListStory_Equipmemt } from '../../organisms/blog-card-list/blog-card-list.stories'
import { OfferCardListStory } from '../../organisms/offer-card-list/offer-card-list.stories'
import { TeaserStoryLeft1, TeaserStoryRight, TeaserStoryLeft2 } from '../../molecules/teaser/teaser.stories'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { FeaturedProductsCarouselStory } from '../../organisms/featured-products-carousel/featured-products-carousel.stories'
import { CustomerTeaserStory } from '../../organisms/customer-teaser/customer-teaser.stories'
import { BlogCardStoryFullWidth } from '../../molecules/blog-card/blog-card.stories'

const meta: Meta<typeof StartPageTemplate> = {
  title: 'Design System/Templates/StartPageTemplate',
  component: StartPageTemplate
};

export default meta;
type Story = StoryObj<typeof StartPageTemplate>;

const StartPageStoryTemplate: Story = {
  render: ({ ...args }) => (<StartPageTemplate {...args} />)
};

export const StartPageTemplateStory = {
  ...StartPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    hero: HeroCarouselStory.args,
    blogList_Why_Spendrups: BlogCardListStory_VarförSpendrups.args,
    featuredProducts: FeaturedProductsCarouselStory.args,
    offerCardsList: OfferCardListStory.args,
    blogList_Spendrups_Suppliers: BlogCardListStory_Samarbete.args,
    blogFullwidth: BlogCardStoryFullWidth.args,
    customerTeaser: CustomerTeaserStory.args,
    teaserRight: TeaserStoryRight.args,
    blogList_Spendrups_Brewing: BlogCardListStory_Brewing.args,
    teaserLeft1: TeaserStoryLeft1.args,
    teaserLeft2: TeaserStoryLeft2.args,
    blogList_Spendrups_Equipment: BlogCardListStory_Equipmemt.args,
    footer:FooterStory.args
  }
}

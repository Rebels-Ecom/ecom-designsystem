import React from 'react'
import type { Meta } from '@storybook/react'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { BlogCardListStory_VarförSpendrups, BlogCardListStory_Brewing, BlogCardListStory_Samarbete, BlogCardListStory_Equipmemt } from '../../organisms/blog-card-list/blog-card-list.stories'
import { OfferCardListStory } from '../../organisms/offer-card-list/offer-card-list.stories'
import { TeaserStoryLeft1, TeaserStoryRight, TeaserStoryLeft2 } from '../../molecules/teaser/teaser.stories'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { FeaturedProductsCarouselStory } from '../../organisms/featured-products-carousel/featured-products-carousel.stories'
import { CustomerTeaserStory } from '../../organisms/customer-teaser/customer-teaser.stories'
import { BlogCardStoryFullWidth } from '../../molecules/blog-card/blog-card.stories'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { BlogCardList, CustomerTeaser, FeaturedProductsCarousel, Footer, HeroCarousel, OfferCardList } from '../../organisms'
import { BlogCard, Teaser } from '../../molecules'

const meta: Meta = {
  title: 'Design System/Templates/StartPageTemplate',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
};

export default meta;

// GUIDELINE for how to structure a start page
const StartPageStoryTemplate = {
  render: ({ ...args }) => (
    <>
      {args.header && args.header()}
      <HeroCarousel {...args.hero} />
      <ContentWrapper>
        <BlogCardList {...args.blogList_Why_Spendrups} />
        <FeaturedProductsCarousel {...args.featuredProducts} />
        <OfferCardList {...args.offerCardsList} />
        <BlogCardList {...args.blogList_Spendrups_Suppliers} />
        <BlogCard {...args.blogFullwidth} />
        <CustomerTeaser {...args.customerTeaser} />
        <Teaser {...args.teaserLeft1} />
        <BlogCardList {...args.blogList_Spendrups_Brewing} />
        <Teaser {...args.teaserRight} />
        <Teaser {...args.teaserLeft2} />
        <BlogCardList {...args.blogList_Spendrups_Equipment} />
        <FeaturedProductsCarousel {...args.featuredProducts} />
      </ContentWrapper>
      <Footer {...args.footer} />
    </>
  )
};

export const StartPage_Guest_User = {
  ...StartPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    blogList_Why_Spendrups: BlogCardListStory_Equipmemt.args,
    featuredProducts: FeaturedProductsCarouselStory.args,
    offerCardsList: OfferCardListStory.args,
    blogList_Spendrups_Suppliers: BlogCardListStory_Samarbete.args,
    blogFullwidth: BlogCardStoryFullWidth.args,
    customerTeaser: CustomerTeaserStory.args,
    teaserRight: TeaserStoryRight.args,
    blogList_Spendrups_Brewing: BlogCardListStory_Brewing.args,
    teaserLeft1: TeaserStoryLeft1.args,
    teaserLeft2: TeaserStoryLeft2.args,
    blogList_Spendrups_Equipment: BlogCardListStory_VarförSpendrups.args,
    footer:FooterStory.args
  }
}

export const StartPage_Logged_In_User = {
  ...StartPageStoryTemplate,
  args: {
    header: Standard_Header.render,
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

export const StartPage_Admin_User = {
  ...StartPageStoryTemplate,
  args: {
    header: Standard_Header.render,
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

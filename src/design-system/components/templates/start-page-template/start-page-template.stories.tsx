import React from 'react'
import type { Meta } from '@storybook/react'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { Three_Cards, Four_Cards, Full_Width } from '../../organisms/blog-card-list/blog-card-list.stories'
import { OfferCardListStory } from '../../organisms/offer-card-list/offer-card-list.stories'
import { Teaser_Round, Teaser_Square } from '../../molecules/teaser/teaser.stories'
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
    blogList_Why_Spendrups: Three_Cards.args,
    featuredProducts: FeaturedProductsCarouselStory.args,
    offerCardsList: OfferCardListStory.args,
    blogList_Spendrups_Suppliers: Four_Cards.args,
    blogFullwidth: BlogCardStoryFullWidth.args,
    customerTeaser: CustomerTeaserStory.args,
    teaserRight: Teaser_Round.args,
    blogList_Spendrups_Brewing: Full_Width.args,
    teaserLeft1: Teaser_Square.args,
    teaserLeft2: Teaser_Square.args,
    blogList_Spendrups_Equipment: Four_Cards.args,
    footer:FooterStory.args
  }
}

export const StartPage_Logged_In_User = {
  ...StartPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    blogList_Why_Spendrups: Three_Cards.args,
    featuredProducts: FeaturedProductsCarouselStory.args,
    offerCardsList: OfferCardListStory.args,
    blogList_Spendrups_Suppliers: Four_Cards.args,
    blogFullwidth: BlogCardStoryFullWidth.args,
    customerTeaser: CustomerTeaserStory.args,
    teaserRight: Teaser_Round.args,
    blogList_Spendrups_Brewing: Full_Width.args,
    teaserLeft1: Teaser_Square.args,
    teaserLeft2: Teaser_Square.args,
    blogList_Spendrups_Equipment: Four_Cards.args,
    footer:FooterStory.args
  }
}

export const StartPage_Admin_User = {
  ...StartPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    blogList_Why_Spendrups: Four_Cards.args,
    featuredProducts: Three_Cards.args,
    offerCardsList: OfferCardListStory.args,
    blogList_Spendrups_Suppliers: Four_Cards.args,
    blogFullwidth: BlogCardStoryFullWidth.args,
    customerTeaser: CustomerTeaserStory.args,
    teaserRight: Teaser_Round.args,
    blogList_Spendrups_Brewing: Full_Width.args,
    teaserLeft1: Teaser_Square.args,
    teaserLeft2: Teaser_Square.args,
    blogList_Spendrups_Equipment: Four_Cards.args,
    footer:FooterStory.args
  }
}

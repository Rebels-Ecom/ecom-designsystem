import React from 'react'
import type { Meta } from '@storybook/react'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { OfferCardListStory } from '../../organisms/offer-card-list/offer-card-list.stories'
import { Teaser_Round, Teaser_Square } from '../../molecules/teaser/teaser.stories'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { ContentWrapper } from '../../layouts'
import { Footer, HeroCarousel, OfferCardList } from '../../organisms'

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
        <OfferCardList {...args.offerCardsList} />
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
    offerCardsList: OfferCardListStory.args,
    teaserRight: Teaser_Round.args,
    teaserLeft1: Teaser_Square.args,
    teaserLeft2: Teaser_Square.args,
    footer:FooterStory.args
  }
}

export const StartPage_Logged_In_User = {
  ...StartPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    offerCardsList: OfferCardListStory.args,
    teaserRight: Teaser_Round.args,
    teaserLeft1: Teaser_Square.args,
    teaserLeft2: Teaser_Square.args,
    footer:FooterStory.args
  }
}

export const StartPage_Admin_User = {
  ...StartPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    offerCardsList: OfferCardListStory.args,
    teaserRight: Teaser_Round.args,
    teaserLeft1: Teaser_Square.args,
    teaserLeft2: Teaser_Square.args,
    footer:FooterStory.args
  }
}

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StartPageTemplate } from './start-page-template'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { BlogCardListStory_4_Columns, BlogCardListStory_3_Columns } from '../../organisms/blog-card-list/blog-card-list.stories'
import { OfferCardListStory } from '../../organisms/offer-card-list/offer-card-list.stories'
import { BlogCardStoryFullWidth } from '../../molecules/blog-card/blog-card.stories'
import { TeaserStoryLeft, TeaserStoryRight } from '../../molecules/teaser/teaser.stories'
import { HeaderStory } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'

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
    header: HeaderStory.args,
    hero: HeroCarouselStory.args,
    blogList_4_Col: BlogCardListStory_4_Columns.args,
    offerCardsList: OfferCardListStory.args,
    blogFullwidth: BlogCardStoryFullWidth.args,
    teaserRight: TeaserStoryRight.args,
    blogList_3_Col: BlogCardListStory_3_Columns.args,
    teaserLeft: TeaserStoryLeft.args,
    footer:FooterStory.args
  }
}

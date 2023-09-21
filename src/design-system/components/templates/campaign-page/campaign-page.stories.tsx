import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { ContentWrapper } from '../../layouts'
import { Footer, HeroCarousel } from '../../organisms'

const meta: Meta = {
  title: 'Design System/Templates/CampaignPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
}

export default meta

// GUIDELINE for how to structure a campaign page
const CampaignPageStoryTemplate = {
  render: ({ ...args }) => (
    <>
      {args.header()}
      <ContentWrapper>
        <HeroCarousel {...args.hero} />
      </ContentWrapper>
      <Footer {...args.footer} />
    </>
  ),
}

export const CampaignPageTemplateStory = {
  ...CampaignPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    footer: FooterStory.args,
  },
}

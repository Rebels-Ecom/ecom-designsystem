import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'
import { Footer, HeroCarousel } from '../../organisms'

const meta: Meta = {
  title: 'Design System/Templates/ChooseUserPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
}

export default meta

// GUIDELINE for how to structure a choose user page
const ChooseUserPageStoryTemplate = {
  render: ({ ...args }) => (
    <>
      {args.header && args.header()}
      <HeroCarousel {...args.hero} />
      <Footer {...args.footer} />
    </>
  ),
}

export const ChooseUserPageTemplateStory = {
  ...ChooseUserPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    hero: HeroCarouselStory.args,
    footer: FooterStory.args,
  },
}

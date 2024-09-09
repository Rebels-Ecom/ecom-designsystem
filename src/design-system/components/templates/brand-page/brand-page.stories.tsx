import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Hero } from '../../molecules'
import { Footer } from '../../organisms/footer/footer'
import { BrandDetails } from '../../organisms'
import { BrandDetailsStory } from '../../organisms/brand-details/brand-details.stories'

const meta: Meta = {
  title: 'Design System/Templates/BrandPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
}

export default meta

// GUIDELINE for how to structure a brand page
const BrandPageStoryTemplate = {
  render: ({ ...args }) => {
    return (
      <>
        {args.header()}
        <ContentWrapper>
          <BrandDetails {...BrandDetailsStory.args} />
          {args.hero && <Hero {...args.hero} />}
        </ContentWrapper>
        {args.footer && <Footer {...args.footer} />}
      </>
    )
  }
}

export const BrandPageTemplateStory = {
  ...BrandPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    footer: FooterStory.args,
  },
}

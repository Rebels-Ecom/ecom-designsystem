import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { FeaturedProductsStory_PromoBrands1 } from '../../molecules/featured-products/featured-products.stories'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { FeaturedProducts, Hero } from '../../molecules'
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
          {args.featuredProducts1 &&
            <MaxWidth contentMaxWidth={'narrow'}>
              <FeaturedProducts {...args.featuredProducts1} />
            </MaxWidth>
          }
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
    featuredProducts1: FeaturedProductsStory_PromoBrands1.args,
    footer: FooterStory.args,
  },
}

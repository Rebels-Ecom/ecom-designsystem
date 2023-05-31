import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BrandPage } from './brand-page'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { BlogCardStoryPistonhead } from '../../molecules/blog-card/blog-card.stories'
import { HeroStoryPistonhead } from '../../molecules/hero/hero.stories'
import { FeaturedProductsStory_PromoBrands1, FeaturedProductsStory_PromoBrands2 } from '../../molecules/featured-products/featured-products.stories'
import { RichTextStory, RichTextStory_Beer } from '../../organisms/rich-text/rich-text.stories'
import { BlogCardListStory_Likande_Varumarken } from '../../organisms/blog-card-list/blog-card-list.stories'

const meta: Meta<typeof BrandPage> = {
  title: 'Design System/Templates/BrandPage',
  component: BrandPage,
}

export default meta
type Story = StoryObj<typeof BrandPage>

const BrandPageStoryTemplate: Story = {
  render: ({ ...args }) => <BrandPage {...args} />,
}

export const BrandPageTemplateStory = {
  ...BrandPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    hero: HeroStoryPistonhead.args,
    blogFullwidth: BlogCardStoryPistonhead.args,
    featuredProducts1: FeaturedProductsStory_PromoBrands1.args,
    featuredProducts2: FeaturedProductsStory_PromoBrands2.args,
    richText: RichTextStory.args,
    blogList: BlogCardListStory_Likande_Varumarken.args,
    footer: FooterStory.args,
  },
}

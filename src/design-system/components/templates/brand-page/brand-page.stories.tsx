import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BrandPage } from './brand-page'
import { HeaderStory } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { BlogCardStoryPistonhead } from '../../molecules/blog-card/blog-card.stories'
import { HeroStoryPistonhead } from '../../molecules/hero/hero.stories'

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
    header: HeaderStory.args,
    hero: HeroStoryPistonhead.args,
    blogFullwidth: BlogCardStoryPistonhead.args,
    footer: FooterStory.args,
  },
}

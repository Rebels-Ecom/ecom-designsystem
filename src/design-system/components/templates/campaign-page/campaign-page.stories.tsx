import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CampaignPage } from './campaign-page'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'

const meta: Meta<typeof CampaignPage> = {
  title: 'Design System/Templates/CampaignPage',
  component: CampaignPage,
}

export default meta
type Story = StoryObj<typeof CampaignPage>

const CampaignPageStoryTemplate: Story = {
  render: ({ ...args }) => <CampaignPage {...args} />,
}

export const CampaignPageTemplateStory = {
  ...CampaignPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    hero: HeroCarouselStory.args,
    footer: FooterStory.args,
  },
}

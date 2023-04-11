import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ChooseUserPage } from './choose-user-page'
import { HeaderStory } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { HeroCarouselStory } from '../../organisms/hero-carousel/hero-carousel.stories'

const meta: Meta<typeof ChooseUserPage> = {
  title: 'Design System/Templates/ChooseUserPage',
  component: ChooseUserPage,
}

export default meta
type Story = StoryObj<typeof ChooseUserPage>

const ChooseUserPageStoryTemplate: Story = {
  render: ({ ...args }) => <ChooseUserPage {...args} />,
}

export const ChooseUserPageTemplateStory = {
  ...ChooseUserPageStoryTemplate,
  args: {
    header: HeaderStory.args,
    hero: HeroCarouselStory.args,
    footer: FooterStory.args,
  },
}

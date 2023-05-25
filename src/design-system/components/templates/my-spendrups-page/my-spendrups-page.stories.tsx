import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MySpendrupsPage } from './my-spendrups-page'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'

const meta: Meta<typeof MySpendrupsPage> = {
  title: 'Design System/Templates/MySpendrupsPage',
  component: MySpendrupsPage,
}

export default meta
type Story = StoryObj<typeof MySpendrupsPage>

const MySpendrupsPageStoryTemplate: Story = {
  render: ({ ...args }) => <MySpendrupsPage {...args} />,
}

export const MySpendrupsPageTemplateStory = {
  ...MySpendrupsPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    footer: FooterStory.args,
  },
}

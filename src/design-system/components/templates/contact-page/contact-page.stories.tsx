import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContactPage } from './contact-page'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'

const meta: Meta<typeof ContactPage> = {
  title: 'Design System/Templates/ContactPage',
  component: ContactPage,
}

export default meta
type Story = StoryObj<typeof ContactPage>

const ContactPageStoryTemplate: Story = {
  render: ({ ...args }) => <ContactPage {...args} />,
}

export const ContactPageTemplateStory = {
  ...ContactPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    footer: FooterStory.args,
  },
}

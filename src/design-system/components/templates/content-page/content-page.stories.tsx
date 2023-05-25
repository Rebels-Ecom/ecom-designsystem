import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContentPage } from './content-page'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { BreadcrumbsStory_Sustainability } from '../../organisms/breadcrumbs/breadcrumbs.stories'
import { RichTextStory, RichTextStory_Beer } from '../../organisms/rich-text/rich-text.stories'

const meta: Meta<typeof ContentPage> = {
  title: 'Design System/Templates/ContentPage',
  component: ContentPage,
}

export default meta
type Story = StoryObj<typeof ContentPage>

const ContentPageStoryTemplate: Story = {
  render: ({ ...args }) => <ContentPage {...args} />,
}

export const ContentPageTemplateStory = {
  ...ContentPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    breadcrumbs: BreadcrumbsStory_Sustainability.args,
    richText: RichTextStory.args,
    footer: FooterStory.args,
  },
}

export const ContentPageTemplateStory_Beer = {
  ...ContentPageStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    breadcrumbs: BreadcrumbsStory_Sustainability.args,
    richText: RichTextStory_Beer.args,
    footer: FooterStory.args,
  },
}

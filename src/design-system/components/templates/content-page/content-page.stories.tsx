import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { BreadcrumbsStory_Sustainability } from '../../organisms/breadcrumbs/breadcrumbs.stories'
import { RichTextStory, RichTextStory_Beer } from '../../organisms/rich-text/rich-text.stories'
import { ContentWrapper } from '../../layouts'
import { Breadcrumbs, Footer, RichText } from '../../organisms'

const meta: Meta = {
  title: 'Design System/Templates/ContentPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
}

export default meta

// GUIDELINE for how to structure a content page
const ContentPageStoryTemplate = {
  render: ({ ...args }) => (
    <>
      {args.header && args.header()}
      <ContentWrapper>
        <Breadcrumbs textWidth='narrow' {...args.breadcrumbs} />
          <RichText {...args.richText} />
      </ContentWrapper>
      <Footer {...args.footer} />
    </>
  ),
}

export const ContentPageTemplateStory = {
  ...ContentPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    breadcrumbs: BreadcrumbsStory_Sustainability.args,
    richText: RichTextStory.args,
    footer: FooterStory.args,
  },
}

export const ContentPageTemplateStory_Beer = {
  ...ContentPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    breadcrumbs: BreadcrumbsStory_Sustainability.args,
    richText: RichTextStory_Beer.args,
    footer: FooterStory.args,
  },
}

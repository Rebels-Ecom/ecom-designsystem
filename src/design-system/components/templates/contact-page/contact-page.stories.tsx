import React from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { Footer } from '../../organisms/footer/footer'

const meta: Meta = {
  title: 'Design System/Templates/ContactPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
}

export default meta

// GUIDELINE for how to structure a contact page
const ContactPageStoryTemplate = {
  render: ({ ...args }) => (
    <>
      {args.header && args.header()}
      <Footer {...args.footer} />
    </>
  ),
}

export const ContactPageTemplateStory = {
  ...ContactPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    footer: FooterStory.args,
  },
}

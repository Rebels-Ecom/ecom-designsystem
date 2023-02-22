import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SocialMediaLinks } from './social-media-links'

export default {
  title: 'Design System/Molecules/SocialMediaLinks',
  component: SocialMediaLinks,
} as ComponentMeta<typeof SocialMediaLinks>

const Template: ComponentStory<typeof SocialMediaLinks> = (args) => {
  return (<SocialMediaLinks {...args} />)
}

export const SocialMediaStory = Template.bind({})
SocialMediaStory.storyName = 'Social Media Links'
SocialMediaStory.args = {
  socialMediaLinks: [
    {
      icon:'icon-facebook',
      href: 'https://www.facebook.com/spendrupsbryggeri/',
      text: 'Facebook',
      isExternal: true,
    },
    {
      icon:'icon-instagram',
      href: 'https://www.instagram.com/spendrupsbryggeri/',
      text: 'Instagram',
      isExternal: true,
    },
    {
      icon:'icon-linkedin',
      href: 'https://www.linkedin.com/company/spendrups-bryggeri-ab/',
      text: 'Facebook',
      isExternal: true,
    },
  ],
}
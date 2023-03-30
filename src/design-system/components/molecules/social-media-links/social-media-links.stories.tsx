import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SocialMediaLinks } from './social-media-links'
import { SocialMediaLinkStoryFacebook, SocialMediaLinkStoryInstagram, SocialMediaLinkStoryLinkedin } from '../../atoms/social-media-link/social-media-link.stories';

const meta: Meta<typeof SocialMediaLinks> = {
    title: 'Design System/Molecules/SocialMediaLinks',
    component: SocialMediaLinks
  }
  
export default meta;
    type Story = StoryObj<typeof SocialMediaLinks>

const SocialMediaLinksTemplate: Story = {
    render: (args) => (<SocialMediaLinks {...args} />)
}

export const SocialMediaStory= {
    ...SocialMediaLinksTemplate,
    args: { 
        socialMediaLinks: [
          SocialMediaLinkStoryFacebook.args,
          SocialMediaLinkStoryInstagram.args,
          SocialMediaLinkStoryLinkedin.args,
        ]
    }
}


import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SocialMediaLink } from './social-media-link'

const meta: Meta<typeof SocialMediaLink> = {
    title: 'Design System/Atoms/SocialMediaLink',
    component: SocialMediaLink
  }
  
export default meta;
    type Story = StoryObj<typeof SocialMediaLink>

const SocialMediaLinkTemplate: Story = {
    render: (args) => (<SocialMediaLink {...args} />)
}

export const SocialMediaLinkStoryFacebook= {
    ...SocialMediaLinkTemplate,
    args: { 
        icon:'icon-facebook',
        href: 'https://www.facebook.com/spendrupsbryggeri/',
        title: 'Facebook',
        isExternal: true,
    }
}


export const SocialMediaLinkStoryInstagram= {
    ...SocialMediaLinkTemplate,
    args: { 
        icon:'icon-instagram',
        href: 'https://www.instagram.com/spendrupsbryggeri/',
        title: 'Instagram',
        isExternal: true,
    }
}

export const SocialMediaLinkStoryLinkedin= {
    ...SocialMediaLinkTemplate,
    args: { 
        icon:'icon-linkedin',
        href: 'https://www.linkedin.com/company/spendrups-bryggeri-ab/',
        title: 'Linkedin',
        isExternal: true,
    }
}
        
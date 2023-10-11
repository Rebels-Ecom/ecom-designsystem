import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CampaignMessage } from './campaign-message'
import { IIcon } from '../icon/icon';

const meta: Meta<typeof CampaignMessage> = {
  title: 'Design System/Atoms/CampaignMessage',
  component: CampaignMessage,
};

export default meta;
type Story = StoryObj<typeof CampaignMessage>;

const CampaignMessageStoryTemplate: Story = {
  render: (args) => {
    return (
      <CampaignMessage {...args} />
    )
  }
};

export const CampaignMessageStory = {
  ...CampaignMessageStoryTemplate,
  args: {
    message: 'Du har inte upplevt kraven för kampanjen',
    ctaText: 'Lägg till produkter',
    onClick: () => alert('clicked'),
    icon: {
      icon: 'icon-alert-circle',
    } as IIcon
  }
}

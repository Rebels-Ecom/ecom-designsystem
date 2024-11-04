import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContentWrapper } from '../../layouts/content-wrapper/content-wrapper';
import { CampaignBox } from './campaign-box'

const meta: Meta<typeof CampaignBox> = {
  title: 'Design System/Atoms/CampaignBox',
  component: CampaignBox,
};

export default meta;
type Story = StoryObj<typeof CampaignBox>;

const CampaignBoxStoryTemplate: Story = {
  render: (args) => {
    return (
      <ContentWrapper>
        <CampaignBox {...args} />
      </ContentWrapper>
    )
  }
};

export const CampaignBoxStory = {
  ...CampaignBoxStoryTemplate,
  args: {
    title: 'Campaign Title',
    description: 'Campaign Description',
    subDescription: 'Campaign SubDescription',
    color: '#9A576F',
    onClick: () => console.log('clicked')
  }
}

export const CampaignBox_Story_Limited = {
  ...CampaignBoxStoryTemplate,
  args: {
    title: 'Campaign Title',
    description: 'Campaign Description',
    subDescription: 'Campaign SubDescription',
    color: '#9A576F',
    onClick: () => console.log('clicked'),
    limited: true
  }
}

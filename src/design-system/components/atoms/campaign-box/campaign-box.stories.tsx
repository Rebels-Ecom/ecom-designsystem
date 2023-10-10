import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
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
      <>
        <CampaignBox {...args} />
      </>
    )
  }
};

export const CampaignBoxStory = {
  ...CampaignBoxStoryTemplate,
  args: {
    title: 'Campaign Title',
    description: 'Campaign Description',
    subDescription: 'Campaign SubDescription',
    color: '#9A576F'
  }
}

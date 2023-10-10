import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CampaignBanner } from './campaign-banner'

const meta: Meta<typeof CampaignBanner> = {
  title: 'Design System/Atoms/CampaignBanner',
  component: CampaignBanner,
};

export default meta;
type Story = StoryObj<typeof CampaignBanner>;

const CampaignBannerStoryTemplate: Story = {
  render: (args) => {
    return (
      <>
        <CampaignBanner {...args} />
      </>
    )
  }
};

export const CampaignBannerStory = {
  ...CampaignBannerStoryTemplate,
  args: {
    campaigns: [{
      title: 'Campaign Banner',
      color: '#9A576F',
      disabled: false,
    }, {
      title: 'Campaign Banner 2',
      color: '#3D5B49',
      disabled: false,
    }, {
      title: 'Campaign Banner 2',
      color: '#3D5B49',
      disabled: false,
    }]
  }
}

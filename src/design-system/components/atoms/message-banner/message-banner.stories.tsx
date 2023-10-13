import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MessageBanner } from './message-banner'

const meta: Meta<typeof MessageBanner> = {
  title: 'Design System/Atoms/MessageBanner',
  component: MessageBanner,
}

export default meta
type Story = StoryObj<typeof MessageBanner>

const MessageBannerStoryTemplate: Story = {
  render: ({ ...args }) => {
    const orderNumber = '12345678'
    return <MessageBanner {...args}> Ditt order nr: {orderNumber}</MessageBanner>
  },
}

export const MessageBannerStory_Success = {
  ...MessageBannerStoryTemplate,
  args: {
    type: 'success',
  },
}

export const MessageBannerStory_Information = {
  ...MessageBannerStoryTemplate,
  args: {
    type: 'information',
  },
}

export const MessageBannerStory_Link = {
  ...MessageBannerStoryTemplate,
  args: {
    type: 'link',
    color: '#432365',
  },
}

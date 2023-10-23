import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { UserInfoSummary } from './user-info-summary'

const meta: Meta<typeof UserInfoSummary> = {
  title: 'Design System/Molecules/UserInfoSummary',
  component: UserInfoSummary
}

export default meta;
type Story = StoryObj<typeof UserInfoSummary>

const UserInfoSummaryStoryTemplate: Story = {
  render: ({...args}) => {
    return(<UserInfoSummary {...args}/>)
  }
}

const infoSummaryText = {
    userName: 'Jon Johnsson',
    companyName: 'Gustav Grill & Bar',
    customerNumber: 'Kundnr: 186922',
    role: 'Roller: Sales'
}


export const UserInfoSummaryStory = {
    ...UserInfoSummaryStoryTemplate,
    args: {
        label: 'Inloggat som:',
        infoSummary: infoSummaryText
    }
}
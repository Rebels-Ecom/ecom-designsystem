import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UserProfileDropdown } from './user-profile-dropdown'
import { DropdownList } from '../dropdown-list/dropdown-list'
import { DropdownListStory } from '../dropdown-list/dropdown-list.stories'
import { UserInfoSummary } from '../user-info-summary/user-info-summary'
import { UserInfoSummaryStory } from '../user-info-summary/user-info-summary.stories'

const meta: Meta<typeof UserProfileDropdown> = {
  title: 'Design System/Molecules/UserProfileDropdown',
  component: UserProfileDropdown
}

export default meta;
type Story = StoryObj<typeof UserProfileDropdown>

const UserProfileDropdownStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
      <UserProfileDropdown isDropdownOpen={args.isDropdownOpen}> 
        {args.children}
      </UserProfileDropdown>
    </div>
  )
}

export const UserProfileDropdownStory = {
  ...UserProfileDropdownStoryTemplate,
  args: {
    isDropdownOpen: false,
    children: [
      <UserInfoSummary {...UserInfoSummaryStory.args}></UserInfoSummary>,
      <DropdownList {...DropdownListStory.args}></DropdownList>
    ]
  }
}

export const UserProfileDropdownStory_Open = {
  ...UserProfileDropdownStoryTemplate,
  args: {
    isDropdownOpen: true,
    children: [
      <UserInfoSummary {...UserInfoSummaryStory.args}></UserInfoSummary>,
      <DropdownList {...DropdownListStory.args}></DropdownList>
    ]
  }
}
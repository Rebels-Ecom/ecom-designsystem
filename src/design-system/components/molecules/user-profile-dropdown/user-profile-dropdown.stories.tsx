import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UserProfileDropdownControlled } from './user-profile-dropdown-controlled'
import { DropdownList } from '../dropdown-list/dropdown-list'
import { DropdownListStory } from '../dropdown-list/dropdown-list.stories'
import { UserInfoSummary } from '../user-info-summary/user-info-summary'
import { UserInfoSummaryStory } from '../user-info-summary/user-info-summary.stories'

const meta: Meta<typeof UserProfileDropdownControlled> = {
  title: 'Design System/Molecules/UserProfileDropdown',
  component: UserProfileDropdownControlled
}

export default meta;
type Story = StoryObj<typeof UserProfileDropdownControlled>

const UserProfileDropdownStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(args.isDropdownOpen ?? false)
    
    return (
      <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <UserProfileDropdownControlled isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}> 
          {args.children}
        </UserProfileDropdownControlled>
      </div>
  )}
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
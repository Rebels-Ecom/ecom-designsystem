import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UserProfileDropdown } from './user-profile-dropdown'
import { DropdownList } from '../dropdown-list/dropdown-list'
import { DropdownListStory } from '../dropdown-list/dropdown-list.stories'
import { UserInfoSummary } from '../user-info-summary/user-info-summary'
import { UserInfoSummaryStory } from '../user-info-summary/user-info-summary.stories'
import { Button } from '../../atoms/button/button'

const meta: Meta<typeof UserProfileDropdown> = {
  title: 'Design System/Molecules/UserProfileDropdown',
  component: UserProfileDropdown
}

export default meta;
type Story = StoryObj<typeof UserProfileDropdown>

const UserProfileDropdownStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen ] = useState<boolean>(false)
    return(
      <>
        <Button type={'button'} surface={'primary'} rounded iconRight={{icon: 'icon-settings'}} onClick={()=>setIsOpen(!isOpen)}>Mitt spendrups</Button>
        <UserProfileDropdown isOpen={isOpen} setIsOpen={setIsOpen}>
          {args.children} 
        </UserProfileDropdown>
      </>
      )
    }
}

const dropdownList = () => (
  <DropdownList {...DropdownListStory.args}></DropdownList>
)

export const UserProfileDropdownStory = {
  ...UserProfileDropdownStoryTemplate,
  args: {
    children: [
      <UserInfoSummary {...UserInfoSummaryStory.args}></UserInfoSummary>,
      <DropdownList {...DropdownListStory.args}></DropdownList>
    ]
  }
}
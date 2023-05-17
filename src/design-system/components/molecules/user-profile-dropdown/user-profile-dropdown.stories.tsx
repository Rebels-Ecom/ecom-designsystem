import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileDropdown } from './user-profile-dropdown'
import { DropdownList } from '../../atoms';
import { DropdownListStory } from '../../atoms/dropdown-list/dropdown-list.stories';

const meta: Meta<typeof UserProfileDropdown> = {
  title: 'Design System/Molecules/UserProfileDropdown',
  component: UserProfileDropdown
}

export default meta;
type Story = StoryObj<typeof UserProfileDropdown>

const UserProfileDropdownStoryTemplate: Story = {
  render: ({ ...args }) => (
    <UserProfileDropdown>
      {args.children}
    </UserProfileDropdown>)
};

const dropdownList = () => (
  <DropdownList {...DropdownListStory.args}></DropdownList>
)

export const UserProfileDropdownStory = {
  ...UserProfileDropdownStoryTemplate,
  args: {
    children: [
      <DropdownList {...DropdownListStory.args}></DropdownList>
    ]
  }
}
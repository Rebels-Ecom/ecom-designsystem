import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchNavBarLinks } from './search-nav-bar-links'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { UserProfileDropdown } from '../user-profile-dropdown/user-profile-dropdown';
import { DropdownList } from '../dropdown-list/dropdown-list';
import { DropdownListStory } from '../dropdown-list/dropdown-list.stories';
import { UserProfileDropdownStory } from '../user-profile-dropdown/user-profile-dropdown.stories';

const meta: Meta<typeof SearchNavBarLinks> = {
  title: 'Design System/Molecules/SearchNavBarLinks',
  component: SearchNavBarLinks
};

export default meta;
type Story = StoryObj<typeof SearchNavBarLinks>;

const SearchNavBarLinksStoryTemplate: Story = {
  render: ({ ...args }) => {
    function setSelectedDate(date:Date){
      console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)
    }
    function handleClickAccountBtn(){
      return(<UserProfileDropdown>
        <DropdownList links={DropdownListStory.args.links} linkComponent={'a'}></DropdownList>
      </UserProfileDropdown>)
    }
    return(<SearchNavBarLinks {...args} onClickSelectDate={setSelectedDate}/>)}
};

export const SearchNavBarLinksStory = {
  ...SearchNavBarLinksStoryTemplate,
  args: {
    datePicker: UiDatePickerStory.args
  }
}

export const SearchNavBarLinksStory_LoggedIn = {
  ...SearchNavBarLinksStoryTemplate,
  args: {
    datePicker: UiDatePickerStory.args,
    userProfileDropdown: UserProfileDropdownStory.args,
    isUserLoggedIn: true
  }
}
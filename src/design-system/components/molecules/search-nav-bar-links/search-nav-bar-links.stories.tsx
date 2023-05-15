import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchNavBarLinks } from './search-nav-bar-links'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'

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
      console.log(`Do something...`)
    }
    return(<SearchNavBarLinks {...args} onClickSelectDate={setSelectedDate} onClickMyAccountBtn={handleClickAccountBtn}/>)}
};

export const SearchNavBarLinksStory = {
  ...SearchNavBarLinksStoryTemplate,
  args: {
    datePicker: UiDatePickerStory.args
  }
}

export const SearchNavBarLinksStory_MittSpendrupsPage = {
  ...SearchNavBarLinksStoryTemplate,
  args: {
    datePicker: UiDatePickerStory.args,
    isMyAccountPage: true
  }
}
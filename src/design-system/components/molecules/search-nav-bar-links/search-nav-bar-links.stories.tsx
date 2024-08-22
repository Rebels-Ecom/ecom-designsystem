import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchNavBarLinks } from './search-nav-bar-links'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { GroupWrapper } from '../group-wrapper/group-wrapper';
import { IconButton } from '../../atoms/icon-button/icon-button';
import { UiDatePicker } from '../../atoms/ui-date-picker/ui-date-picker';
import { Button } from '../../atoms/button/button';

const meta: Meta<typeof SearchNavBarLinks> = {
  title: 'Design System/Deprecated/SearchNavBarLinks',
  component: SearchNavBarLinks
};

export default meta;
type Story = StoryObj<typeof SearchNavBarLinks>;

const SearchNavBarLinksStoryTemplate: Story = {
  render: ({ ...args }) => {
    function setSelectedDate(date:Date){
      console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)
    }
    function handleClickAccountBtn(){ console.log(`Go to my spendrups page`)}

    return(
      <SearchNavBarLinks>
         <GroupWrapper position='apart'>
          <IconButton
            type='button'
            icon='icon-heart'
            size='medium'
            isTransparent
            onClick={() => console.log('favorite clicked')}
          />
          <IconButton
            type='button'
            icon='icon-shopping-cart'
            onClick={() => console.log('Open cart sidebar')}
            size='medium'
            isTransparent
          />
      </GroupWrapper>
      <GroupWrapper position='apart'>
          <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
          <Button type={'button'} surface={'primary'} size={'x-small'} rounded iconRight={{icon: 'icon-settings'}} onClick={handleClickAccountBtn ? ()=>handleClickAccountBtn() : ()=>{}}>Mitt spendrups</Button>
      </GroupWrapper>
      </SearchNavBarLinks>)}
}

export const SearchNavBarLinksStory = {
  ...SearchNavBarLinksStoryTemplate,
  args: {
    
  }
}
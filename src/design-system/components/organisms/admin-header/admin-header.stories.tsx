import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AdminHeader } from './admin-header'
import { TopNavBarStory_Admin } from '../../molecules/top-nav-bar/top-nav-bar.stories'
import { NavigationStory } from '../../molecules/navigation/navigation.stories'
import { SearchNavBarLinks } from '../../molecules/search-nav-bar-links/search-nav-bar-links'
import { Button, IconButton, UiDatePicker } from '../../atoms'
import { GroupWrapper } from '../../molecules'
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { SearchNavBarLinksStory } from '../../molecules/search-nav-bar-links/search-nav-bar-links.stories'
import { Above, Below } from '../../layouts'
import { TabsStory } from '../../molecules/tabs/tabs.stories'
import { UserProfileDropdown } from '../../molecules/user-profile-dropdown/user-profile-dropdown'
import { UserProfileDropdownStory } from '../../molecules/user-profile-dropdown/user-profile-dropdown.stories'
import { AdminSearchNavBar } from '../../molecules/admin-search-nav-bar/admin-search-nav-bar'
import { AdminSearchNavBarStory } from '../../molecules/admin-search-nav-bar/admin-search-nav-bar.stories'
import { IResult } from '../../atoms/admin-search/admin-search'

const meta: Meta<typeof AdminHeader> = {
  title: 'Design System/Organisms/AdminHeader',
  component: AdminHeader,
}

export default meta
type Story = StoryObj<typeof AdminHeader>

const AdminHeaderStoryTemplate: Story = {
  render: (args) => {
    const onClickSearchResultItem = (item: IResult) => {console.log('Handle clicked item', item)}

    return (
      <AdminHeader>
        {({ Wrapper, GridArea }) => (
          <Wrapper>
            <GridArea area="adminSearch">
              <AdminSearchNavBar {...args.adminSearchNavBar} onClick={onClickSearchResultItem}/>
            </GridArea>
            <GridArea area="searchNavLinks">
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart'>
                        <Button type={'button'} surface={'secondary'} children={'Jon Johnson'} iconRight={{icon:'icon-user'}} rounded onClick={()=>{}}/>
                        <Button type={'button'} surface={'primary'} children={'Mitt adminkonto'} iconRight={{icon:'icon-settings'}} rounded onClick={()=>{}}/>
                    </GroupWrapper>
                  </SearchNavBarLinks>
            </GridArea>
          </Wrapper>
        )}
      </AdminHeader>
    )
  },
}

export const AdminHeaderStory = {
  ...AdminHeaderStoryTemplate,
  args: {
    adminSearchNavBar: AdminSearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
  },
}

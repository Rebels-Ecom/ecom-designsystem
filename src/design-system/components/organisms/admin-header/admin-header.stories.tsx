import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AdminHeader } from './admin-header'
import { TopNavBarStory, TopNavBarStory_Admin } from '../../molecules/top-nav-bar/top-nav-bar.stories'
import { TopNavBar } from '../../molecules/top-nav-bar/top-nav-bar'
import { Navigation } from '../../molecules/navigation/navigation'
import { NavigationStory } from '../../molecules/navigation/navigation.stories'
import { SearchNavBar } from '../../molecules/search-nav-bar/search-nav-bar'
import { SearchNavBarStory } from '../../molecules/search-nav-bar/search-nav-bar.stories'
import { Logotype } from '../../molecules/logotype/logotype'
import { SearchNavBarLinks } from '../../molecules/search-nav-bar-links/search-nav-bar-links'
import { CartSidebarStory } from '../cart-sidebar/cart-sidebar.stories'
import { CartSidebar } from '../cart-sidebar/cart-sidebar'
import { Heading, LinkButton, ToggleSwitch, Button, IconButton, UiDatePicker } from '../../atoms'
import { DrawerSidebar, GroupWrapper, CartProduct, FormGroup } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../cart-product-list/cart-product-list'
import { CartProductStoryBeer, CartProductStoryWine } from '../../molecules/cart-product/cart-product.stories'
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { SearchNavBarLinksStory } from '../../molecules/search-nav-bar-links/search-nav-bar-links.stories'
import { Above, Below } from '../../layouts'
import { TabsStory } from '../../molecules/tabs/tabs.stories'
import { Tabs } from '../../molecules/tabs/tabs'
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
    const [isOpen, setIsOpen] = React.useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
    const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
    const handleOnClick = () => setIsOpen(!isOpen)
    const onClickCartIcon = () => setIsCartSidebarOpen(true)
    const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
    const onClickMySpendrupsBtn = () => setIsDropdownOpen(!isDropdownOpen)
    const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
    const onClickSearchResultItem = (item: IResult) => {console.log('Handle clicked item', item)}
    const onClickLogOut = () => {console.log('Handle logout')}

    return (
      <>
      <AdminHeader isOpen={isOpen}>
        {({ Wrapper, MenuButton, GridArea }) => (
          <Wrapper isOpen={isOpen}>
            <GridArea area="top">
              <TopNavBar {...args.topNavBar} onClick={onClickLogOut}/>
            </GridArea>
            <GridArea area="search">
              <AdminSearchNavBar {...args.adminSearchNavBar} onClick={onClickSearchResultItem}/>
            </GridArea>
            <GridArea area="searchNavLinks">
              <Below breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart' align='center'>
                      <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
                      <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='medium' isTransparent></IconButton>
                      <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Below>
                <Above breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart'>
                        <Button type={'button'} surface={'secondary'} children={'Jon Johnson'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                        <UserProfileDropdown  {...UserProfileDropdownStory.args}></UserProfileDropdown>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Above>
            </GridArea>
            <GridArea area="btn">
              <MenuButton onClick={handleOnClick} />
            </GridArea>
            <GridArea area="nav">
              <Below breakpoint="lg">{(matches: any) => matches &&  <Tabs {...args.navigationTabs} isOpen={isOpen}></Tabs>}</Below>
              <Above breakpoint="lg">{(matches: any) => matches && <Navigation {...args.navigation} isOpen={isOpen} />}</Above>
            </GridArea>
          </Wrapper>
        )}
      </AdminHeader>
      <DrawerSidebar onClose={onClickCloseCartSidebar} isOpen={isCartSidebarOpen}>
          <CartSidebar classNames={['light']}>
              <GroupWrapper position='apart'>
                  <Heading order={3}>Kundvagn</Heading>
                  <Heading order={3}>1378,00 kr</Heading>
              </GroupWrapper>
              <GroupWrapper>
                  <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                  <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
              </GroupWrapper>
              <CartProductList>
                  { args.cartSidebar?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product}></CartProduct>) }
              </CartProductList>
              <GroupWrapper>
                  <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
              <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'}>
                  <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={()=>{}}></ToggleSwitch>
              </FormGroup>
              </GroupWrapper>
          </CartSidebar>
      </DrawerSidebar>
      </>
    )
  },
}

export const AdminHeaderStory = {
  ...AdminHeaderStoryTemplate,
  args: {
    topNavBar: TopNavBarStory_Admin.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    adminSearchNavBar: AdminSearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    headerLinkList: {
      links: [
        {
          navLinkType: 'favorites',
          href: '/favorites',
          text: 'My favorites',
          isExternal: false,
        },
        {
          navLinkType: 'cart',
          href: '/cart',
          text: 'Cart',
          isExternal: false,
        },
      ],
      linkComponent: 'a',
    },
    cartSidebar: CartProductListStory.args
  },
}

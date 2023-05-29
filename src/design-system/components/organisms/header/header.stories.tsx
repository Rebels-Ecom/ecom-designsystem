import React, { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'
import { TopNavBarStory_Admin, TopNavBarStory_Guest_User, TopNavBarStory_Logged_In_User } from '../../molecules/top-nav-bar/top-nav-bar.stories'
import { TopNavBar } from '../../molecules/top-nav-bar/top-nav-bar'
import { Navigation } from '../../molecules/navigation/navigation'
import { NavigationStory } from '../../molecules/navigation/navigation.stories'
import { SearchNavBar } from '../../molecules/search-nav-bar/search-nav-bar'
import { SearchNavBarStory } from '../../molecules/search-nav-bar/search-nav-bar.stories'
import { Logotype } from '../../molecules/logotype/logotype'
import { SearchNavBarLinks } from '../../molecules/search-nav-bar-links/search-nav-bar-links'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_vertical from '../../../../logotypes/Spendrups_logo_vertical.svg'
import { CartSidebar } from '../cart-sidebar/cart-sidebar'
import { Heading, LinkButton, ToggleSwitch, Button, IconButton, UiDatePicker } from '../../atoms'
import { DrawerSidebar, GroupWrapper, CartProduct, FormGroup, AdminSearchNavBar } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../cart-product-list/cart-product-list'
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { SearchNavBarLinksStory } from '../../molecules/search-nav-bar-links/search-nav-bar-links.stories'
import { Above, Below } from '../../layouts'
import { TabsStory } from '../../molecules/tabs/tabs.stories'
import { Tabs } from '../../molecules/tabs/tabs'
import { UserProfileDropdown } from '../../molecules/user-profile-dropdown/user-profile-dropdown'
import { UserProfileDropdownStory } from '../../molecules/user-profile-dropdown/user-profile-dropdown.stories'
import { AdminSearch, IResult } from '../../atoms/admin-search/admin-search'
import { AdminSearchStory, itemsToFilterOn } from '../../atoms/admin-search/admin-search.stories'

const meta: Meta<typeof Header> = {
  title: 'Design System/Organisms/Header',
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

const HeaderStoryTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [activeUser, setActiveUser] = React.useState({} as IResult)
    const [isAdminSearchbarOpen, setIsAdminSearchbarOpen] = React.useState<boolean>(false)
    const [query, setQuery] = React.useState<string>('')
    const [adminSearchResults, setAdminSearchResults] = React.useState<Array<any>>([])
    const [isSearchbarOpen, setIsSearchbarOpen] = React.useState(false)
    const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
    const handleOnClick = () => setIsOpen(!isOpen)
    const onClickSearchIcon = () => setIsSearchbarOpen(!isSearchbarOpen)
    const onClickCartIcon = () => setIsCartSidebarOpen(true)
    const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
    const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
    const onClickLogout = () => { console.log('Handle logout...')}
    const onClickSearchButton = () => {console.log('Handle search button click')}
    const onClickSearchResultItem = (customer:IResult) => {setActiveUser(customer)}

    useEffect(() => {
      let pattern = new RegExp(query.toLowerCase(), 'i')
      setAdminSearchResults(itemsToFilterOn.filter((item) => query && (
        (item.name && pattern.test(item.name.toLowerCase())) ||
        (item.companyName && pattern.test(item.companyName.toLowerCase())) ||
        (item.companyId && pattern.test(item.companyId.toString().toLowerCase())) ||
        (item.email && pattern.test(item.email.toLowerCase()))
        )))
    }, [query]);

    return (
      <>
      <Header isOpen={isOpen}>
        {({ Wrapper, MenuButton, GridArea }) => (
          <Wrapper isOpen={isOpen}>
            {args.isAdmin && args.adminSearch && args.adminNavLinks && 
            <>
              <GridArea area="adminSearch">
                <AdminSearch
                  {...args.adminSearch}
                  query={query}
                  setQuery={setQuery}
                  results={adminSearchResults}
                  onClick={onClickSearchButton}
                  onClickSearchResult={onClickSearchResultItem}
                  isOpen={isAdminSearchbarOpen}
                  setIsOpen={setIsAdminSearchbarOpen}
                />
              </GridArea>               
              <GridArea area="adminNavLinks">
                <SearchNavBarLinks>
                  <GroupWrapper position='apart'>
                    <Below breakpoint="lg">{(matches: any) => matches && <>
                      { activeUser?.name && <IconButton icon={'icon-user'} isLink={false} linkComponent={undefined} onClick={()=>{}} size='large' isTransparent></IconButton>}
                      <IconButton icon={'icon-settings'} isLink={false} linkComponent={undefined} onClick={()=>{}} size='large' isTransparent></IconButton>
                    </>}
                    </Below>
                    <Above breakpoint="lg">{(matches: any) => matches && <>
                      { activeUser?.name && <Button type={'button'} surface={'secondary'} children={activeUser.name} iconRight={{icon:'icon-user'}} size={'x-small'} rounded onClick={()=>{}}/>}
                      <Button type={'button'} surface={'primary'} children={'Mitt adminkonto'} iconRight={{icon:'icon-settings'}} size={'x-small'} onClick={()=>{}}/>
                    </>}</Above>
                  </GroupWrapper>
                </SearchNavBarLinks>
              </GridArea>
            </>}
            <GridArea area="top">
              <TopNavBar {...args.topNavBar} onClick={onClickLogout} onSelectDate={setSelectedDate} isAdmin={args.isAdmin} hasActiveUser={activeUser?.name && activeUser?.name.length>0}/>
            </GridArea>
            <GridArea area="logo">
              <Logotype {...args.logotype} />
            </GridArea>  
            <GridArea area="search">
              <SearchNavBar {...args.searchNavBar} isOpen={isSearchbarOpen}/>
            </GridArea>
            {args.searchNavLinks && <GridArea area="searchNavLinks">
              <Below breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart' align='center'>
                      <IconButton icon={isSearchbarOpen ? 'icon-x' : 'icon-search'} isLink={false} linkComponent={undefined} size='large' isTransparent onClick={onClickSearchIcon ? ()=>onClickSearchIcon() : ()=>{}}></IconButton>
                      <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='large' isTransparent></IconButton>
                      <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='large' isTransparent></IconButton>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Below>
                <Above breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart' align='center'>
                    <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
                    <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='medium' isTransparent></IconButton>
                    </GroupWrapper>
                    <GroupWrapper position='apart'>
                        <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
                        <UserProfileDropdown  {...UserProfileDropdownStory.args}></UserProfileDropdown>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Above>
            </GridArea>
            }
            <GridArea area="btn">
              <MenuButton onClick={handleOnClick} />
            </GridArea>
            <GridArea area="nav">
              <Below breakpoint="lg">{(matches: any) => matches &&  <>
                {args.isLoggedIn 
                  ? 
                  <Tabs {...args.navigationTabs} isOpen={isOpen}></Tabs>
                :
                  <Navigation {...args.navigation} isOpen={isOpen} />
                }
              </>}</Below>
              <Above breakpoint="lg">{(matches: any) => matches && <Navigation {...args.navigation} isOpen={isOpen} />}</Above>
            </GridArea>
          </Wrapper>
        )}
      </Header>
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

export const HeaderStory_Guest_User = {
  ...HeaderStoryTemplate,
  args: {
    topNavBar: TopNavBarStory_Guest_User.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [
          { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
          { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
        ],
      },
      linkComponent: 'a',
    },
    cartSidebar: CartProductListStory.args
  },
}

export const HeaderStory_Logged_In_User = {
  ...HeaderStoryTemplate,
  args: {
    isLoggedIn: true,
    topNavBar: TopNavBarStory_Logged_In_User.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [
          { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
          { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
        ],
      },
      linkComponent: 'a',
    },
    cartSidebar: CartProductListStory.args
  },
}

export const HeaderStory_Admin_User = {
  ...HeaderStoryTemplate,
  args: {
    isAdmin: true,
    isLoggedIn: true,
    adminSearch: AdminSearchStory.args, 
    adminNavLinks: SearchNavBarLinksStory.args,
    topNavBar: TopNavBarStory_Admin.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [
          { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
          { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
        ],
      },
      linkComponent: 'a',
    },
    cartSidebar: CartProductListStory.args
  },
}

export const HeaderStory_Admin_Selects_Customer_Flow = {
  ...HeaderStoryTemplate,
  args: {
    isAdmin: true,
    adminSearch: AdminSearchStory.args, 
    adminNavLinks: SearchNavBarLinksStory.args,
    topNavBar: TopNavBarStory_Admin.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [
          { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
          { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
        ],
      },
      linkComponent: 'a',
    },
    cartSidebar: CartProductListStory.args
  },
}

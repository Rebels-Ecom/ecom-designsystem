import React from 'react'
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
import { CartSidebarStory } from '../cart-sidebar/cart-sidebar.stories'
import { CartSidebar } from '../cart-sidebar/cart-sidebar'
import { Heading, LinkButton, ToggleSwitch, Button, IconButton, UiDatePicker } from '../../atoms'
import { DrawerSidebar, GroupWrapper, CartProduct, FormGroup, AdminSearchNavBar } from '../../molecules'
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
import { motion } from 'framer-motion'
import { AdminHeader } from '../admin-header/admin-header'
import { IResult } from '../../atoms/admin-search/admin-search'
import { AdminHeaderStory } from '../admin-header/admin-header.stories'

const meta: Meta<typeof Header> = {
  title: 'Design System/Organisms/Header',
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

const HeaderStoryTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isSearchbarOpen, setIsSearchbarOpen] = React.useState(false)
    const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
    const handleOnClick = () => setIsOpen(!isOpen)
    const onClickSearchIcon = () => setIsSearchbarOpen(!isSearchbarOpen)
    const onClickCartIcon = () => setIsCartSidebarOpen(true)
    const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
    const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
    const onClickLogout = () => { console.log('Handle logout...')}
    const onClickSearchCustomer = (customer:IResult) => {console.log('Customer clicked', customer)}

    const variants = {
      open: { y: 0, opacity: 1 },
      closed: { y: "-3.7rem", opacity: 0 },
    }

    return (
      <>
      <Header isOpen={isOpen} isAdmin={args.isAdmin}>
        {({ Wrapper, MenuButton, GridArea }) => (
          <Wrapper isOpen={isOpen}>
            {args.isAdmin && args.adminHeader && <GridArea area="adminHeader">
              <AdminHeader>
                {({ Wrapper, GridArea }) => (
                  <Wrapper>
                    <GridArea area="adminSearch">
                      <AdminSearchNavBar {...args.adminHeader.adminSearchNavBar} onClick={onClickSearchCustomer}/>
                    </GridArea>
                    <GridArea area="searchNavLinks">
                      <SearchNavBarLinks>
                        <GroupWrapper position='apart'>
                          <Below breakpoint="lg">{(matches: any) => matches && <>
                            <IconButton icon={'icon-user'} isLink={false} linkComponent={undefined} onClick={()=>{}} size='large' isTransparent></IconButton>
                            <IconButton icon={'icon-settings'} isLink={false} linkComponent={undefined} onClick={()=>{}} size='large' isTransparent></IconButton>
                          </>}
                          </Below>
                          <Above breakpoint="lg">{(matches: any) => matches && <>
                              <Button type={'button'} surface={'secondary'} children={'Jon Johnson'} iconRight={{icon:'icon-user'}} rounded onClick={()=>{}}/>
                              <Button type={'button'} surface={'primary'} children={'Mitt adminkonto'} iconRight={{icon:'icon-settings'}} onClick={()=>{}}/>
                          </>}</Above>
                        </GroupWrapper>
                      </SearchNavBarLinks>
                    </GridArea>
                  </Wrapper>
                )}
              </AdminHeader>
            </GridArea>}
            <GridArea area="top">
              <TopNavBar {...args.topNavBar} onClick={onClickLogout} onSelectDate={setSelectedDate}/>
            </GridArea>
            <GridArea area="logo">
              <Logotype {...args.logotype} />
            </GridArea>  
            <Below breakpoint="lg">{(matches: any) => matches && <> {isSearchbarOpen && 
              <GridArea area="search">
                <motion.div initial={{opacity: 0}} animate={isSearchbarOpen ? "open" : "closed"} transition={{duration: 1}} variants={variants}>
                  <SearchNavBar {...args.searchNavBar} isOpen={isSearchbarOpen}/> 
                </motion.div>
              </GridArea> } </> } 
            </Below>
            <Above breakpoint="lg">{(matches: any) => matches && 
              <GridArea area="search">
                <SearchNavBar {...args.searchNavBar} isOpen={isSearchbarOpen}/>
              </GridArea>}
            </Above>
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
              <Below breakpoint="lg">{(matches: any) => matches &&  <Tabs {...args.navigationTabs} isOpen={isOpen}></Tabs>}</Below>
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
    adminHeader: AdminHeaderStory.args, 
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

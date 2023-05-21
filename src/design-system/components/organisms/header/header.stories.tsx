import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'
import { TopNavBarStory } from '../../molecules/top-nav-bar/top-nav-bar.stories'
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

const meta: Meta<typeof Header> = {
  title: 'Design System/Organisms/Header',
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

const HeaderStoryTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
    const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
    const handleOnClick = () => setIsOpen(!isOpen)
    const onClickCartIcon = () => setIsCartSidebarOpen(true)
    const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
    const onClickMySpendrupsBtn = () => setIsDropdownOpen(!isDropdownOpen)
    const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}

    return (
      <>
      <Header isOpen={isOpen}>
        {({ Wrapper, MenuButton, GridArea }) => (
          <Wrapper isOpen={isOpen}>
            <GridArea area="top">
              <TopNavBar {...args.topNavBar} />
            </GridArea>
            <GridArea area="logo">
              <Logotype {...args.logotype} />
            </GridArea>
            <GridArea area="search">
              <SearchNavBar {...args.searchNavBar} />
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
                    <GroupWrapper position='apart' align='center'>
                    <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
                    <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='medium' isTransparent></IconButton>
                    </GroupWrapper>
                    <GroupWrapper position='apart'>
                        <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
                        <Button type={'button'} surface={'primary'} size={'x-small'} rounded iconRight={{icon: 'icon-settings'}} onClick={onClickMySpendrupsBtn ? ()=>onClickMySpendrupsBtn() : ()=>{}}>Mitt spendrups</Button>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Above>
            </GridArea>
            <GridArea area="btn">
              <MenuButton onClick={handleOnClick} />
            </GridArea>
            <GridArea area="nav">
              {/* <Navigation {...args.navigation} isOpen={isOpen} /> */}
              <Tabs {...args.navigation} isOpen={isOpen}></Tabs>
            </GridArea>
          </Wrapper>
        )}
      </Header>
      <UserProfileDropdown {...UserProfileDropdownStory.args} isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen}></UserProfileDropdown>
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

export const HeaderStory = {
  ...HeaderStoryTemplate,
  args: {
    topNavBar: TopNavBarStory.args,
    navigation: TabsStory.args,
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

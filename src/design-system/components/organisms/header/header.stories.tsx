import React, { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'
import { Navigation } from '../../molecules/navigation/navigation'
import { NavigationStory } from '../../molecules/navigation/navigation.stories'
import { SearchNavBarStory } from '../../molecules/search-nav-bar/search-nav-bar.stories'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_vertical from '../../../../logotypes/Spendrups_logo_vertical.svg'
import { CartSidebar } from '../cart-sidebar/cart-sidebar'
import { Heading, LinkButton, ToggleSwitch, Button, IconButton, UiDatePicker, MenuButton } from '../../atoms'
import { DrawerSidebar, GroupWrapper, FormGroup, TopNavBar, SearchNavBar, Logotype } from '../../molecules'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { ContentWrapper } from '../../layouts'
import { TabsStory } from '../../molecules/tabs/tabs.stories'
import { UserProfileDropdown } from '../../molecules/user-profile-dropdown/user-profile-dropdown'
import { UserProfileDropdownStory } from '../../molecules/user-profile-dropdown/user-profile-dropdown.stories'
import { AdminSearch, IResult } from '../../atoms/admin-search/admin-search'
import { AdminSearchStory, itemsToFilterOn } from '../../atoms/admin-search/admin-search.stories'
import { CartProductList } from '../cart-product-list/cart-product-list'
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'

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
      <Header
        salesTool={
          <ContentWrapper padding={[1, 0]}>
            <AdminSearch
              {...AdminSearchStory.args}
              noResultText={{text: "No result"}}
              query={query}
              setQuery={setQuery}
              results={adminSearchResults}
              onClickSearchResult={onClickSearchResultItem}
              isOpen={isAdminSearchbarOpen}
              setIsOpen={setIsAdminSearchbarOpen}
            />
          </ContentWrapper>
        }
        topNavBar={
          <TopNavBar
            links={[{children: 'test', href: '', icon: 'icon-alert-circle' }]}
            linkComponent='a'
            userLoggedIn={false}
            onClick={onClickLogout}
            onSelectDate={setSelectedDate}
            isAdmin={false}
            hasActiveUser={false}
          />
        }
        logo={<Logotype
            className=''
            linkComponent='a'
            logo={{
              src: logotype_desktop_horizontal,
              alt: 'logo',
              href: '/',
              id: 'logo',
              sources: [
                { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
                { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
              ]  
            }}
        />}
        searchBar={<SearchNavBar {...SearchNavBarStory.args} />}
        mobileActions={
          <>
            {activeUser?.name &&
              <IconButton icon={'icon-user'} isLink={false} linkComponent={undefined} onClick={()=>{}} size='large' isTransparent></IconButton>
            }
            <IconButton
              icon={isSearchbarOpen ? 'icon-x' : 'icon-search'}
              isLink={false}
              size='large'
              isTransparent={true}
              onClick={onClickSearchIcon}
            />
            <IconButton
              icon='icon-shopping-cart'
              isLink={false}
              size='large'
              isTransparent={true}
              onClick={onClickCartIcon}
            />
            <MenuButton isOpen={isOpen} onClick={handleOnClick} />
          </>
        }
        mobileNavigation={{
          isOpen,
          tab1: TabsStory.args.tabs[0].content,
          tab2: TabsStory.args.tabs[1].content,
        }}
        desktopActions={
          <>
            {activeUser?.name &&
              <IconButton icon={'icon-user'} isLink={false} linkComponent={undefined} onClick={()=>{}} size='large' isTransparent></IconButton>
            }
            <IconButton icon='icon-shopping-cart' isLink={false} onClick={onClickCartIcon} size='medium' isTransparent />
            <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
            <UserProfileDropdown  {...UserProfileDropdownStory.args}></UserProfileDropdown>
          </>
        }
        desktopNavigation={<Navigation {...NavigationStory.args} isOpen={isOpen} />}
      />
        
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
                {CartProductListStory.args?.children?.map((product: ICartProduct, i) => (
                  <CartProduct key={i} {...product}></CartProduct>
                ))}
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

export const Standard_Header = {
  ...HeaderStoryTemplate,
}

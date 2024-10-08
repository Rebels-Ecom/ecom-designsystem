import React, { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { motion } from 'framer-motion'
import { Header } from './header'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_vertical from '../../../../logotypes/Spendrups_logo_vertical.svg'
import { CartSidebar } from '../cart-sidebar/cart-sidebar'
import { Heading, LinkButton, Button, IconButton, UiDatePicker } from '../../atoms'
import {
  DrawerSidebar,
  GroupWrapper,
  TopNavBar,
  Logotype,
  MobileNavigation,
  UserInfoSummary,
  DropdownList,
  DesktopNavigation,
  DeliveryInfoBar,
} from '../../molecules'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { ContentWrapper, FlexContainer } from '../../layouts'
import { AdminSearch, IResult } from '../../atoms/admin-search/admin-search'
import { AdminSearchStory, itemsToFilterOn } from '../../atoms/admin-search/admin-search.stories'
import { DefaultMobileNavigation } from '../../molecules/navigation/mobile-navigation/mobile-navigation.stories'
import { DefaultDesktopNavigation } from '../../molecules/navigation/desktop-navigation/desktop-navigation.stories'
import { UserInfoSummaryStory } from '../../molecules/user-info-summary/user-info-summary.stories'
import { DropdownListStory } from '../../molecules/dropdown-list/dropdown-list.stories'
import { INavigation } from '../../molecules/navigation/types'

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
    const [showUserInfo, setShowUserInfo] = React.useState(false)
    const onClickSearchIcon = () => setIsSearchbarOpen(!isSearchbarOpen)
    const onClickCartIcon = () => setIsCartSidebarOpen(true)
    const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
    const setSelectedDate = (date: Date) => {
      console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)
    }
    const onClickLogout = () => {
      console.log('Handle logout...')
    }
    const onClickSearchResultItem = (customer: IResult) => {
      setActiveUser(customer)
    }

    const toggleUserInfo = () => {
      setShowUserInfo(!showUserInfo)
    }

    useEffect(() => {
      let pattern = new RegExp(query.toLowerCase(), 'i')
      setAdminSearchResults(
        itemsToFilterOn.filter(
          (item) =>
            query &&
            ((item.name && pattern.test(item.name.toLowerCase())) ||
              (item.companyName && pattern.test(item.companyName.toLowerCase())) ||
              (item.companyId && pattern.test(item.companyId.toString().toLowerCase())) ||
              (item.email && pattern.test(item.email.toLowerCase())))
        )
      )
    }, [query])

    return (
      <>
        <Header
          salesTool={
            <ContentWrapper padding={[1, 0]}>
              <AdminSearch
                {...AdminSearchStory.args}
                noResultText={{ text: 'No result' }}
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
              links={[{ children: 'test', href: '', icon: 'icon-alert-circle' }]}
              linkComponent="a"
              userLoggedIn={false}
              onClick={onClickLogout}
              onSelectDate={setSelectedDate}
              hasActiveUser={false}
            />
          }
          deliveryInfoBar={
            <DeliveryInfoBar exists={true} infoText={'Kom ihåg att lämna tillbaka era tomfat!'} onClick={() => console.log('DeliveryInfoBar clicked')} />
          }
          logo={
            <motion.div style={{ zIndex: 101 }} initial={{ x: '0vw' }} animate={{ x: isOpen ? '10vw' : '0vw', transition: { delay: 0.1 } }}>
              <a href="/" target="_self">
                <Logotype
                  src={logotype_desktop_horizontal}
                  alt="logo"
                  id="logo"
                  sources={[
                    { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
                    { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
                  ]}
                />
              </a>
            </motion.div>
          }
          mobileActions={
            <FlexContainer alignItems="center" justifyContent="flex-end" flex="1">
              {activeUser?.name && <IconButton type="button" icon="icon-user" onClick={() => {}} size="large" isTransparent />}
              <IconButton type="button" icon={isSearchbarOpen ? 'icon-x' : 'icon-search'} size="large" isTransparent onClick={onClickSearchIcon} />
              <IconButton type="button" icon="icon-shopping-cart" size="large" isTransparent onClick={onClickCartIcon} />
              <>
                <IconButton type="button" onClick={toggleUserInfo} icon="icon-user" size="medium" />
                <DrawerSidebar isOpen={showUserInfo} onClose={toggleUserInfo}>
                  <UserInfoSummary {...UserInfoSummaryStory.args} />
                  <DropdownList {...DropdownListStory.args} />
                </DrawerSidebar>
              </>
            </FlexContainer>
          }
          mobileNavigation={<MobileNavigation {...(DefaultMobileNavigation.args as INavigation)} isOpen={isOpen} setIsOpen={setIsOpen} />}
          mobileCalendar={<UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate} />}
          desktopActions={
            <>
              {activeUser?.name && <IconButton type="button" icon="icon-user" onClick={() => {}} size="large" isTransparent />}
              <IconButton type="button" icon="icon-shopping-cart" onClick={onClickCartIcon} size="medium" />
              <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
              <>
                <IconButton type="button" onClick={toggleUserInfo} icon="icon-user" size="medium" />
                <DrawerSidebar isOpen={showUserInfo} onClose={toggleUserInfo}>
                  <UserInfoSummary {...UserInfoSummaryStory.args} />
                  <DropdownList {...DropdownListStory.args} />
                </DrawerSidebar>
              </>
            </>
          }
          desktopNavigation={<DesktopNavigation {...(DefaultDesktopNavigation.args as INavigation)} />}
        />

        <DrawerSidebar onClose={onClickCloseCartSidebar} isOpen={isCartSidebarOpen}>
          <CartSidebar classNames={['light']}>
            <GroupWrapper position="apart">
              <Heading order={3}>Kundvagn</Heading>
              <Heading order={3}>1378,00 kr</Heading>
            </GroupWrapper>
            <GroupWrapper>
              <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{ icon: 'icon-layers' }} rounded onClick={() => {}} />
              <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{ icon: 'icon-package' }} rounded onClick={() => {}} />
            </GroupWrapper>
            <GroupWrapper>
              <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>
                Go to cart
              </LinkButton>
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

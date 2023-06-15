import React, { useEffect } from 'react'
import { Footer, IFooter } from '../../organisms/footer/footer'
import { IconButton, Text, Button, UiDatePicker, Heading, LinkButton, ToggleSwitch, MessagePopup, IconLink } from '../../atoms'
import { itemsToFilterOn } from '../../atoms/admin-search/admin-search.stories'
import { AdminSearch, IResult } from '../../atoms/admin-search/admin-search'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { Below, Above, ContentWrapper, MaxWidth } from '../../layouts'
import { SearchNavBarLinks, GroupWrapper, TopNavBar, Logotype, SearchNavBar, UserProfileDropdown, Tabs, Navigation, DrawerSidebar, CartProduct, FormGroup, BoxWrapper, DeliveryDateInfo, InfoSummaryBox, OrderConfirmationDetails } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { ScrollableList } from '../../molecules/scrollable-list/scrollable-list'
import { UserProfileDropdownStory } from '../../molecules/user-profile-dropdown/user-profile-dropdown.stories'
import { Header, CartSidebar, CartProductList } from '../../organisms'
import { MessagePopupStory } from '../../atoms/message-popup/message-popup.stories'
import { InfoSummaryBoxStory_ShoppingList } from '../../molecules/info-summary-box/info-summary-box.stories'
import { OrderConfirmationDetailsStory_Pricing, OrderConfirmationDetailsStory_TotalPayment } from '../../molecules/order-confirmation-details/order-confirmation-details.stories'
import { ScrollableListListStory_WithFade_2_products } from '../../molecules/scrollable-list/scrollable-list.stories'
import { ButtonProductCardStory } from '../../atoms/button/button.stories'

export interface IShoppingList {
  header: any
  children: React.ReactNode,
  footer: IFooter
}

export default function ShoppingListPage({ header, footer } : IShoppingList) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeUser, setActiveUser] = React.useState({} as IResult)
  const [isAdminSearchbarOpen, setIsAdminSearchbarOpen] = React.useState<boolean>(false)
  const [query, setQuery] = React.useState<string>('')
  const [adminSearchResults, setAdminSearchResults] = React.useState<Array<any>>([])
  const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
  const [isSearchbarOpen, setIsSearchbarOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
  const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
  const onClickSearchIcon = () => setIsSearchbarOpen(!isSearchbarOpen)
  const onClickCartIcon = () => setIsCartSidebarOpen(true)
  const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
  const onClickLogout = () => { console.log('Handle logout...')}
  const onClickSearchButton = () => {console.log('Handle search button click')}
  const onClickSearchResultItem = (customer:IResult) => {setActiveUser(customer)}
  const [isMessagePopupOpen, setIsMessagePopupOpen] = React.useState(true)

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
          {header.isAdmin && header.adminSearch && header.adminNavLinks && 
          <>
            <GridArea area="adminSearch">
                <AdminSearch
                  {...header.adminSearch}
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
                      { activeUser?.name &&  <IconButton icon={'icon-user'} isLink={false} linkComponent={undefined} onClick={()=>{}} size='large' isTransparent></IconButton>}
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
              <TopNavBar {...header.topNavBar} onClick={onClickLogout} onSelectDate={setSelectedDate} isAdmin={header.isAdmin} hasActiveUser={activeUser?.name && activeUser?.name.length>0}/>
            </GridArea>
            <GridArea area="logo">
              <Logotype {...header.logotype} />
            </GridArea>  
            <GridArea area="search">
              <SearchNavBar {...header.searchNavBar} isOpen={isSearchbarOpen}/>
            </GridArea>
            {header.searchNavLinks && <GridArea area="searchNavLinks">
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
                {header.isLoggedIn 
                  ? 
                  <Tabs {...header.navigationTabs} isOpen={isOpen}></Tabs>
                :
                  <Navigation {...header.navigation} isOpen={isOpen} />
                }
              </>}</Below>
              <Above breakpoint="lg">{(matches: any) => matches && <Navigation {...header.navigation} isOpen={isOpen} />}</Above>
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
                  { header.cartSidebar?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product}></CartProduct>) }
              </CartProductList>
              <GroupWrapper>
                  <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
              <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'}>
                  <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={()=>{}}></ToggleSwitch>
              </FormGroup>
              </GroupWrapper>
          </CartSidebar>
      </DrawerSidebar>
      <ContentWrapper>
        <MaxWidth contentMaxWidth={'narrow'}>
          <BoxWrapper spacing={'xl'}>
            <Heading order={3}>Vårfesten</Heading>
            <Text>Senast sparad:</Text>
            <DeliveryDateInfo dateLabel={'2022-06-10'}/>
            <MessagePopup isOpen={isMessagePopupOpen} onClose={()=>setIsMessagePopupOpen(!isMessagePopupOpen)} {...MessagePopupStory.args} icon={'icon-info'} arrowPosition='center'></MessagePopup>
            <InfoSummaryBox {...InfoSummaryBoxStory_ShoppingList.args}/>
            <Heading order={4} align='center'>Populära produkter som vi tror passar dig</Heading>
            <ScrollableList {...ScrollableListListStory_WithFade_2_products.args}>{ScrollableListListStory_WithFade_2_products.args.children}</ScrollableList> 
            <IconLink icon={'icon-plus'} href={'/to-somewhere'} isExternal={true} linkComponent={'a'}>Visa alla rekommenderade produkter</IconLink>
            <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground></OrderConfirmationDetails>
            <OrderConfirmationDetails {...OrderConfirmationDetailsStory_TotalPayment.args} withBackground={false}></OrderConfirmationDetails>
            <Button {...ButtonProductCardStory.args} type={'button'} surface={'primary'} size='small'></Button>
          </BoxWrapper>
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { ShoppingListPage }


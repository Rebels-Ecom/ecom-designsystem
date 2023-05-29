import React from 'react'
import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import { ITeaser, Teaser } from '../../molecules/teaser/teaser'
import { BlogCardList, IBlogCardList } from '../../organisms/blog-card-list/blog-card-list'
import { IHeroCarousel, HeroCarousel } from '../../organisms/hero-carousel/hero-carousel'
import { IOfferCardList, OfferCardList } from '../../organisms/offer-card-list/offer-card-list'
import { Navigation } from '../../molecules/navigation/navigation'
import { FeaturedProductsCarousel, IFeaturedProductsCarousel } from '../../organisms/featured-products-carousel/featured-products-carousel'
import { CustomerTeaser, ICustomerTeaser } from '../../organisms/customer-teaser/customer-teaser'
import { Above, Below, ContentWrapper, MaxWidth } from '../../layouts'
import { CartSidebar, Header } from '../../organisms'
import { CartProduct, DrawerSidebar, FormGroup, GroupWrapper, Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar, UserProfileDropdown, Tabs, AdminSearchNavBar } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'
import { Heading, LinkButton, Button, ToggleSwitch, IconButton, UiDatePicker } from '../../atoms'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { UserProfileDropdownStory } from '../../molecules/user-profile-dropdown/user-profile-dropdown.stories'
import { IResult } from '../../atoms/admin-search/admin-search'

export interface IStartPageTemplate {
  header: any
  hero: IHeroCarousel
  blogList_Why_Spendrups: IBlogCardList
  featuredProducts: IFeaturedProductsCarousel
  offerCardsList: IOfferCardList
  blogList_Spendrups_Suppliers: IBlogCardList
  blogFullwidth: IBlogCard
  customerTeaser: ICustomerTeaser
  teaserLeft1: ITeaser
  blogList_Spendrups_Brewing: IBlogCardList
  teaserRight: ITeaser
  teaserLeft2: ITeaser
  blogList_Spendrups_Equipment: IBlogCardList
  footer: IFooter
}

const StartPageTemplate = ({
  header,
  hero,
  blogList_Why_Spendrups,
  featuredProducts,
  offerCardsList,
  blogList_Spendrups_Suppliers,
  blogFullwidth,
  customerTeaser,
  teaserLeft1,
  blogList_Spendrups_Brewing,
  teaserRight,
  teaserLeft2,
  blogList_Spendrups_Equipment,
  footer,
}: IStartPageTemplate) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeUser, setActiveUser] = React.useState({} as IResult)
  const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
  const [isSearchbarOpen, setIsSearchbarOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
  const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
  const onClickSearchIcon = () => setIsSearchbarOpen(!isSearchbarOpen)
  const onClickCartIcon = () => setIsCartSidebarOpen(true)
  const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
  const onClickLogout = () => { console.log('Handle logout...')}
  const onClickSearchCustomer = (customer:IResult) => {setActiveUser(customer)}

  return (
    <>
      <Header isOpen={isOpen}>
        {({ Wrapper, MenuButton, GridArea }) => (
          <Wrapper isOpen={isOpen}>
            {header.isAdmin && header.adminSearchNavBar && header.adminNavLinks && 
            <>
              <GridArea area="adminSearch">
                <AdminSearchNavBar {...header.adminSearchNavBar} onClick={onClickSearchCustomer}/>
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
        <HeroCarousel {...hero} />
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_Why_Spendrups} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <FeaturedProductsCarousel {...featuredProducts} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <OfferCardList {...offerCardsList} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_Spendrups_Suppliers} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCard {...blogFullwidth} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <CustomerTeaser {...customerTeaser} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserLeft1} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_Spendrups_Brewing} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserRight} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserLeft2} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_Spendrups_Equipment} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <FeaturedProductsCarousel {...featuredProducts} />
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { StartPageTemplate }

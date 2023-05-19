import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { CartSidebar, Header } from '../../organisms'
import { CartProduct, DrawerSidebar, FormGroup, GroupWrapper, Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { Footer, IFooter } from '../../organisms/footer/footer'
import { IProductDetails, ProductDetails } from '../../organisms/product-details/product-details'
import { IProductDescription, ProductDescription } from '../../organisms/product-description/product-description'
import { Heading, LinkButton, ToggleSwitch, Button, IconButton, UiDatePicker } from '../../atoms'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'

export interface IProductPage {
  header: any
  productDetails: IProductDetails
  productDescription: IProductDescription
  addToCart: CallableFunction
  footer: IFooter
}

const ProductPage = ({ header, productDetails, productDescription, addToCart, footer }: IProductPage) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
  const onClickCartIcon = () => setIsCartSidebarOpen(true)
  const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
  const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
  const onClickMySpendrupsBtn = () => { console.log(`Go to my Spendrups page`)}
  return (
    <>
      <Header isOpen={isOpen}>
        {({ Wrapper, MenuButton, GridArea }) => (
          <Wrapper isOpen={isOpen}>
            <GridArea area="top">
              <TopNavBar {...header.topNavBar} />
            </GridArea>
            <GridArea area="logo">
              <Logotype {...header.logotype} />
            </GridArea>
            <GridArea area="search">
              <SearchNavBar {...header.searchNavBar} />
            </GridArea>
            <GridArea area="searchNavLinks">
              <SearchNavBarLinks>
                <GroupWrapper position='apart'>
                  <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
                  <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='medium' isTransparent></IconButton>
                </GroupWrapper>
                <GroupWrapper position='apart'>
                    <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
                    <Button type={'button'} surface={'primary'} size={'x-small'} rounded iconRight={{icon: 'icon-settings'}} onClick={onClickMySpendrupsBtn ? ()=>onClickMySpendrupsBtn() : ()=>{}}>Mitt spendrups</Button>
                </GroupWrapper>
              </SearchNavBarLinks>
            </GridArea>
            <GridArea area="btn">
              <MenuButton onClick={handleOnClick} />
            </GridArea>
            <GridArea area="nav">
              <Navigation {...header.navigation} isOpen={isOpen} />
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
        <MaxWidth contentMaxWidth={'wide'}>
          <ProductDetails {...productDetails} addToCart={addToCart} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <ProductDescription {...productDescription} />
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { ProductPage }

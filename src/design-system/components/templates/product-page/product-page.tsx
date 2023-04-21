import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { CartSidebar, Header } from '../../organisms'
import { CartProduct, DrawerSidebar, FormGroup, GroupWrapper, Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { Footer, IFooter } from '../../organisms/footer/footer'
import { IProductDetails, ProductDetails } from '../../organisms/product-details/product-details'
import { IProductDescription, ProductDescription } from '../../organisms/product-description/product-description'
import { Heading, LinkButton, ToggleSwitch, Button } from '../../atoms'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list'

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
  const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
  return (
    <>
      <Header isOpen={isOpen}>
        {({ Wrapper, Button, GridArea }) => (
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
              <NavLinks onClickCart={onClickCartIcon}/>
            </GridArea>
            <GridArea area="btn">
              <Button onClick={handleOnClick} />
            </GridArea>
            <GridArea area="nav">
              <Navigation {...header.navigation} isOpen={isOpen} />
            </GridArea>
          </Wrapper>
        )}
      </Header>
      <DrawerSidebar onClose={onClickCloseCartSidebar} isOpen={isCartSidebarOpen} position='right' size='lg'>
          <CartSidebar classNames={['light']}>
              <GroupWrapper position='apart'>
                  <Heading order={1}>Kundvagn</Heading>
                  <Heading order={1}>1378,00 kr</Heading>
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

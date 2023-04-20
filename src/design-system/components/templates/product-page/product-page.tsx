import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { CartSidebar, Header } from '../../organisms'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { Footer, IFooter } from '../../organisms/footer/footer'
import { IProductDetails, ProductDetails } from '../../organisms/product-details/product-details'
import { IProductDescription, ProductDescription } from '../../organisms/product-description/product-description'

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
      <CartSidebar {...header.cartSidebar} isOpen={isCartSidebarOpen} onClose={onClickCloseCartSidebar}></CartSidebar>
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

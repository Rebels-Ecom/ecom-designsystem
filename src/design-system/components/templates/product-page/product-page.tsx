import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { Breadcrumbs, IBreadcrumbs } from '../../organisms/breadcrumbs/breadcrumbs'
import { IProductCardList, ProductCardList } from '../../organisms/product-card-list/product-card-list'
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
  return (
    <>
      <Header>
        {({ Wrapper, Button, GridArea }: any, isOpen: boolean) => (
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
              <NavLinks />
            </GridArea>
            <GridArea area="btn">
              <Button />
            </GridArea>
            <GridArea area="nav">
              <Navigation {...header.navigation} />
            </GridArea>
          </Wrapper>
        )}
      </Header>
      <ContentWrapper>
        <MaxWidth contentMaxWidth={'wide'}>
          <ProductDetails {...productDetails} addToCart={addToCart}/>
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <ProductDescription {...productDescription}/>
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer}/>
    </>
  )
}

export { ProductPage }

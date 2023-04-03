import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { Breadcrumbs, IBreadcrumbs } from '../../organisms/breadcrumbs/breadcrumbs'
import { IProductCardList, ProductCardList } from '../../organisms/product-card-list/product-card-list'
import { Footer, IFooter } from '../../organisms/footer/footer'

export interface IProductCategoryListingPage {
  header: any
  breadcrumbs: IBreadcrumbs
  productCategoryListing: IProductCardList
  addToCart: CallableFunction
  footer: IFooter
}

const ProductCategoryListingPage = ({ header, breadcrumbs, productCategoryListing, addToCart, footer }: IProductCategoryListingPage) => {
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
        <Breadcrumbs {...breadcrumbs}/>
        <MaxWidth contentMaxWidth={'wide'}>
          <ProductCardList {...productCategoryListing} addToCart={addToCart}/>
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer}/>
    </>
  )
}

export { ProductCategoryListingPage }

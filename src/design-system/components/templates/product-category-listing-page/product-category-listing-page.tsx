import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar } from '../../molecules'
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
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
  const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
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
              <SearchNavBarLinks {...header.searchNavLinks} onClickSelectDate={setSelectedDate} />
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
      <ContentWrapper>
        <Breadcrumbs {...breadcrumbs} />
        <MaxWidth contentMaxWidth={'wide'}>
          <ProductCardList {...productCategoryListing} addToCart={addToCart} />
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { ProductCategoryListingPage }

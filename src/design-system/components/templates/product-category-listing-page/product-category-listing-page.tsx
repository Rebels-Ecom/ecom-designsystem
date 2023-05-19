import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar, GroupWrapper } from '../../molecules'
import { Breadcrumbs, IBreadcrumbs } from '../../organisms/breadcrumbs/breadcrumbs'
import { IProductCardList, ProductCardList } from '../../organisms/product-card-list/product-card-list'
import { Footer, IFooter } from '../../organisms/footer/footer'
import { IconButton, UiDatePicker, Button } from '../../atoms'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'

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
            <GridArea area="btn">
              <MenuButton onClick={handleOnClick} />
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

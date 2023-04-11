import React from 'react'
import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import { ITeaser, Teaser } from '../../molecules/teaser/teaser'
import { BlogCardList, IBlogCardList } from '../../organisms/blog-card-list/blog-card-list'
import { IHeroCarousel, HeroCarousel } from '../../organisms/hero-carousel/hero-carousel'
import { IOfferCardList, OfferCardList } from '../../organisms/offer-card-list/offer-card-list'
import { INavigation, Navigation } from '../../molecules/navigation/navigation'
import { FeaturedProductsCarousel, IFeaturedProductsCarousel } from '../../organisms/featured-products-carousel/featured-products-carousel'
import { CustomerTeaser, ICustomerTeaser } from '../../organisms/customer-teaser/customer-teaser'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'

export interface IContentPage {
  header: any
  hero: IHeroCarousel
  blogList_4_Col: IBlogCardList
  featuredProducts: IFeaturedProductsCarousel
  offerCardsList: IOfferCardList
  blogFullwidth: IBlogCard
  customerTeaser: ICustomerTeaser
  teaserRight: ITeaser
  blogList_3_Col: IBlogCardList
  teaserLeft: ITeaser
  footer: IFooter
}

const ContentPage = ({
  header,
  hero,
  blogList_4_Col,
  featuredProducts,
  offerCardsList,
  blogFullwidth,
  customerTeaser,
  teaserRight,
  blogList_3_Col,
  teaserLeft,
  footer,
}: IContentPage) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
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
              <NavLinks />
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
        <HeroCarousel {...hero} />
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_4_Col} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <FeaturedProductsCarousel {...featuredProducts} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <OfferCardList {...offerCardsList} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_3_Col} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCard {...blogFullwidth} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <CustomerTeaser {...customerTeaser} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserRight} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_3_Col} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserLeft} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_3_Col} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <FeaturedProductsCarousel {...featuredProducts} />
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { ContentPage }

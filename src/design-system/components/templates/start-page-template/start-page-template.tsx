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

export interface IStartPageTemplate {
  header: any
  hero: IHeroCarousel
  blogList_Why_Spendrups: IBlogCardList
  featuredProducts: IFeaturedProductsCarousel
  offerCardsList: IOfferCardList
  blogList_Spendrups_Suppliers: IBlogCardList
  blogFullwidth: IBlogCard
  customerTeaser: ICustomerTeaser
  teaserRight: ITeaser
  blogList_Spendrups_Brewing: IBlogCardList
  teaserLeft: ITeaser
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
  teaserRight,
  blogList_Spendrups_Brewing,
  teaserLeft,
  blogList_Spendrups_Equipment,
  footer,
}: IStartPageTemplate) => {
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
              <Navigation {...header.navigation} isOpen={isOpen} />
            </GridArea>
          </Wrapper>
        )}
      </Header>
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
          <Teaser {...teaserRight} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_Spendrups_Brewing} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserLeft} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserRight} />
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

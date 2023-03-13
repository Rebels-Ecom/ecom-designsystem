import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import { ITeaser, Teaser } from '../../molecules/teaser/teaser'
import { BlogCardList, IBlogCardList } from '../../organisms/blog-card-list/blog-card-list'
import { IHeroCarousel, HeroCarousel } from '../../organisms/hero-carousel/hero-carousel'
import { IOfferCardList, OfferCardList } from '../../organisms/offer-card-list/offer-card-list'
import { INavigation, Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'

export interface IStartPageTemplate {
  header: any
  hero: IHeroCarousel
  blogList_4_Col: IBlogCardList
  offerCardsList: IOfferCardList
  blogFullwidth: IBlogCard
  teaserRight: ITeaser
  blogList_3_Col: IBlogCardList
  teaserLeft: ITeaser
}

const StartPageTemplate = ({ header, hero, blogList_4_Col, offerCardsList, blogFullwidth, teaserRight, blogList_3_Col, teaserLeft }: IStartPageTemplate) => {
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
        <HeroCarousel {...hero} />
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_3_Col} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <OfferCardList {...offerCardsList} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCard {...blogFullwidth} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserRight} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'narrow'}>
          <Teaser {...teaserLeft} />
        </MaxWidth>
        <MaxWidth contentMaxWidth={'wide'}>
          <BlogCardList {...blogList_4_Col} />
        </MaxWidth>
      </ContentWrapper>
    </>
  )
}

export { StartPageTemplate }

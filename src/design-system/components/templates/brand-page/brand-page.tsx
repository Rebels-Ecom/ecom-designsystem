import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { Header } from '../../organisms'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import { Hero, IHero } from '../../molecules/hero/hero'

export interface ICampaign {
  header: any
  hero: IHero
  blogFullwidth: IBlogCard
  footer: IFooter
}

const BrandPage = ({ header, hero, blogFullwidth, footer }: ICampaign) => {
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
        <Hero {...hero} />
        <MaxWidth contentMaxWidth={'narrow'}>
          <BlogCard {...blogFullwidth} />
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { BrandPage }

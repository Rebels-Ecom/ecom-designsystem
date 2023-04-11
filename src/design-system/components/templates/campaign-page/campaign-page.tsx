import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { Header } from '../../organisms'
import { IHeroCarousel, HeroCarousel } from '../../organisms/hero-carousel/hero-carousel'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'
import { ContentWrapper } from '../../layouts'

export interface ICampaign {
  header: any
  hero: IHeroCarousel
  footer: IFooter
}

const CampaignPage = ({ header, footer, hero }: ICampaign) => {
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
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { CampaignPage }

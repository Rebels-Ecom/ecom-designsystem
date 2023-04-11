import { Navigation } from '../../molecules/navigation/navigation'
import { Header } from '../../organisms'
import { Logotype, NavLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'
import { ContentWrapper } from '../../layouts'

export interface ICampaign {
  header: any
  footer: IFooter
}

const BrandPage = ({ header, footer }: ICampaign) => {
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
      <Footer {...footer} />
    </>
  )
}

export { BrandPage }

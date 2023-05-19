import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { Header } from '../../organisms'
import { Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'

export interface IMySpendrupsPage {
  header: any
  footer: IFooter
}

const MySpendrupsPage = ({ header, footer }: IMySpendrupsPage) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
  const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
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
      <Footer {...footer} />
    </>
  )
}

export { MySpendrupsPage }

import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'
import { Breadcrumbs, IBreadcrumbs } from '../../organisms/breadcrumbs/breadcrumbs'
import { IRichText, RichText } from '../../organisms/rich-text/rich-text'

export interface IContentPage {
  header: any
  breadcrumbs: IBreadcrumbs
  richText: IRichText
  footer: IFooter
}

const ContentPage = ({
  header,
  breadcrumbs,
  richText,
  footer,
}: IContentPage) => {
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
        <Breadcrumbs textWidth='narrow' {...breadcrumbs} />
        <MaxWidth contentMaxWidth={'wide'}>
          <RichText {...richText} />
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { ContentPage }

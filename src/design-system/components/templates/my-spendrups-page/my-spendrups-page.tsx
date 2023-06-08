import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { Header } from '../../organisms'
import { Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar, GroupWrapper, Tabs, UserProfileDropdown, BoxWrapper } from '../../molecules'
import { IFooter, Footer } from '../../organisms/footer/footer'
import { IconButton, UiDatePicker } from '../../atoms'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { Below, Above, ContentWrapper, MaxWidth } from '../../layouts'
import { UserProfileDropdownStory } from '../../molecules/user-profile-dropdown/user-profile-dropdown.stories'

export interface IMySpendrupsPage {
  header: any
  boxMittSpendrups: any
  boxMinaFavoriter: any
  boxOvrigaTjanster: any
  boxMinSenasteOrder: any
  boxMinaOrdrar: any
  boxOvrigaOrderTjanster: any
  footer: IFooter
}

const MySpendrupsPage = ({ header, boxMittSpendrups, boxMinaFavoriter, boxOvrigaTjanster, boxMinSenasteOrder, boxMinaOrdrar,boxOvrigaOrderTjanster,  footer }: IMySpendrupsPage) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
  const [isSearchbarOpen, setIsSearchbarOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
  const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
  const onClickSearchIcon = () => setIsSearchbarOpen(!isSearchbarOpen)
  const onClickCartIcon = () => setIsCartSidebarOpen(true)
  const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
  const onClickLogout = () => { console.log('Handle logout...')}

  return (
    <>
      <Header isOpen={isOpen}>
        {({ Wrapper, MenuButton, GridArea }) => (
          <Wrapper isOpen={isOpen}>
            <GridArea area="top">
              <TopNavBar {...header.topNavBar} onClick={onClickLogout} onSelectDate={setSelectedDate}/>
            </GridArea>
            <GridArea area="logo">
              <Logotype {...header.logotype} />
            </GridArea>  
            <GridArea area="search">
              <SearchNavBar {...header.searchNavBar} isOpen={isSearchbarOpen}/>
            </GridArea>
            {header.searchNavLinks && <GridArea area="searchNavLinks">
              <Below breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart' align='center' direction='row'>
                      <IconButton icon={isSearchbarOpen ? 'icon-x' : 'icon-search'} isLink={false} linkComponent={undefined} size='large' isTransparent onClick={onClickSearchIcon ? ()=>onClickSearchIcon() : ()=>{}}></IconButton>
                      <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='large' isTransparent></IconButton>
                      <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='large' isTransparent></IconButton>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Below>
                <Above breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart' align='center' direction='row'>
                    <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
                    <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='medium' isTransparent></IconButton>
                    </GroupWrapper>
                    <GroupWrapper position='apart'>
                        <UiDatePicker {...UiDatePickerStory.args} onDateSelected={setSelectedDate}></UiDatePicker>
                        <UserProfileDropdown  {...UserProfileDropdownStory.args}></UserProfileDropdown>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Above>
            </GridArea>
            }
            <GridArea area="btn">
              <MenuButton onClick={handleOnClick} />
            </GridArea>
            <GridArea area="nav">
            <Below breakpoint="lg">{(matches: any) => matches &&  <>
                {header.isLoggedIn 
                  ? 
                  <Tabs {...header.navigationTabs} isOpen={isOpen}></Tabs>
                :
                  <Navigation {...header.navigation} isOpen={isOpen} />
                }
              </>}</Below>
              <Above breakpoint="lg">{(matches: any) => matches && <Navigation {...header.navigation} isOpen={isOpen} />}</Above>
            </GridArea>
          </Wrapper>
        )}
      </Header>
      <ContentWrapper>
        <MaxWidth contentMaxWidth={'wide'}>
          <GroupWrapper direction='default'>
            <GroupWrapper direction='column'>
              <BoxWrapper {...boxMittSpendrups} />
              <BoxWrapper {...boxMinaFavoriter} />
              <BoxWrapper {...boxOvrigaTjanster} />
            </GroupWrapper> 
            <GroupWrapper direction='column'>
              <BoxWrapper {...boxMinSenasteOrder} />
              <BoxWrapper {...boxMinaOrdrar} />
              <BoxWrapper {...boxOvrigaOrderTjanster} />
            </GroupWrapper>
          </GroupWrapper> 
        </MaxWidth>
      </ContentWrapper>
      <Footer {...footer} />
    </>
  )
}

export { MySpendrupsPage }

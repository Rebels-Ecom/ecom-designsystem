import React from 'react'
import { Navigation } from '../../molecules/navigation/navigation'
import { Above, Below, ContentWrapper, MaxWidth } from '../../layouts'
import { Header } from '../../organisms'
import { Logotype, SearchNavBarLinks, SearchNavBar, TopNavBar, GroupWrapper, Tabs, UserProfileDropdown } from '../../molecules'
import { Breadcrumbs, IBreadcrumbs } from '../../organisms/breadcrumbs/breadcrumbs'
import { IProductCardList, ProductCardList } from '../../organisms/product-card-list/product-card-list'
import { Footer, IFooter } from '../../organisms/footer/footer'
import { IconButton, UiDatePicker, Button } from '../../atoms'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories'
import { motion } from 'framer-motion'
import { UserProfileDropdownStory } from '../../molecules/user-profile-dropdown/user-profile-dropdown.stories'

export interface IProductCategoryListingPage {
  header: any
  breadcrumbs: IBreadcrumbs
  productCategoryListing: IProductCardList
  addToCart: CallableFunction
  footer: IFooter
}

const ProductCategoryListingPage = ({ header, breadcrumbs, productCategoryListing, addToCart, footer }: IProductCategoryListingPage) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isCartSidebarOpen, setIsCartSidebarOpen] = React.useState(false)
  const [isSearchbarOpen, setIsSearchbarOpen] = React.useState(false)
  const handleOnClick = () => setIsOpen(!isOpen)
  const onClickCloseCartSidebar = () => setIsCartSidebarOpen(false)
  const onClickSearchIcon = () => setIsSearchbarOpen(!isSearchbarOpen)
  const onClickCartIcon = () => setIsCartSidebarOpen(true)
  const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}
  const onClickLogout = () => { console.log('Handle logout...')}

  const variants = {
    open: { y: 0, opacity: 1 },
    closed: { y: "-3.7rem", opacity: 0 },
  }

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
            <Below breakpoint="lg">{(matches: any) => matches && <> {isSearchbarOpen && 
              <GridArea area="search">
                <motion.div initial={{opacity: 0}} animate={isSearchbarOpen ? "open" : "closed"} transition={{duration: 1}} variants={variants}>
                  <SearchNavBar {...header.searchNavBar} isOpen={isSearchbarOpen}/> 
                </motion.div>
              </GridArea> } </> } 
            </Below>
            <Above breakpoint="lg">{(matches: any) => matches && 
              <GridArea area="search">
                <SearchNavBar {...header.searchNavBar} isOpen={isSearchbarOpen}/>
              </GridArea>}
            </Above>
            {header.searchNavLinks && <GridArea area="searchNavLinks">
              <Below breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart' align='center'>
                      <IconButton icon={isSearchbarOpen ? 'icon-x' : 'icon-search'} isLink={false} linkComponent={undefined} size='large' isTransparent onClick={onClickSearchIcon ? ()=>onClickSearchIcon() : ()=>{}}></IconButton>
                      <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='large' isTransparent></IconButton>
                      <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCartIcon ? ()=>onClickCartIcon() : ()=>{}} size='large' isTransparent></IconButton>
                    </GroupWrapper>
                  </SearchNavBarLinks>}
                </Below>
                <Above breakpoint="lg">{(matches: any) => matches && 
                  <SearchNavBarLinks>
                    <GroupWrapper position='apart' align='center'>
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
              <Below breakpoint="lg">{(matches: any) => matches &&  <Tabs {...header.navigationTabs} isOpen={isOpen}></Tabs>}</Below>
              <Above breakpoint="lg">{(matches: any) => matches && <Navigation {...header.navigation} isOpen={isOpen} />}</Above>
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

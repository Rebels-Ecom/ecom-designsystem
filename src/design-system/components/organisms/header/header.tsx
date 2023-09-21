import styles from './header.module.css'
import { Above, Below, ContentWrapper, FlexContainer } from '../../layouts'
import { Tabs } from '../../molecules'

export interface IHeader {
  salesTool?: JSX.Element; // TODO: Create sales tool component
  topNavBar?: JSX.Element;
  logo?: JSX.Element;
  searchBar?: JSX.Element;
  mobileActions?: JSX.Element;
  desktopActions?: JSX.Element;
  mobileNavigation?: {
    isOpen: boolean;
    tab1: JSX.Element;
    tab2: JSX.Element;
  },
  desktopNavigation?: JSX.Element;
}

const Header = ({
  salesTool,
  topNavBar,
  logo,
  searchBar,
  mobileActions,
  desktopActions,
  mobileNavigation,
  desktopNavigation
}: IHeader) => {
  return (
    <header className={styles.header}>
      {salesTool && salesTool}
      {topNavBar && topNavBar}
      {(
        logo ||
        searchBar ||
        mobileActions ||
        desktopActions ||
        mobileNavigation ||
        desktopNavigation
      ) && (
        <>
          <Below breakpoint='lg'>
            {(matches) => matches && (
              <>
                <ContentWrapper>
                  <FlexContainer flexDirection='column'>
                    <FlexContainer alignItems='center' justifyContent='space-between' stretch>
                      {logo && logo}
                      {mobileActions && mobileActions}
                    </FlexContainer>
                    {searchBar && searchBar}
                  </FlexContainer>
                </ContentWrapper>
                <Tabs
                  isOpen={!!mobileNavigation?.isOpen}
                  tabs={[
                    {
                      id: '3',
                      tabTitle: 'Meny',
                      content: mobileNavigation?.tab1,
                    },
                    {
                      id: '4',
                      tabTitle: 'Mitt spendrups',
                      content: mobileNavigation?.tab2,
                    },
                  ]}
                />
              </>
            )}
          </Below>
          <Above breakpoint='lg'>
            {(matches) => matches && (
              <>
                <ContentWrapper padding={[1, 0]}>
                  <FlexContainer alignItems='center'>
                    {logo && logo}
                    {searchBar && searchBar}
                    {desktopActions && desktopActions}
                  </FlexContainer>
                </ContentWrapper>
                {desktopNavigation && desktopNavigation}
              </>
            )}
          </Above>
        </>
      )}
    </header>
  )
}

export { Header }

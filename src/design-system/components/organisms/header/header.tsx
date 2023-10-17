import styles from './header.module.css'
import { Above, Below, ContentWrapper, FlexContainer } from '../../layouts'
import { DropdownList, Tabs, UserInfoSummary, UserProfileDropdown } from '../../molecules'
import {UserInfoSummaryStory } from '../../molecules/user-info-summary/user-info-summary.stories'
import {DropdownListStory } from '../../molecules/dropdown-list/dropdown-list.stories'

export interface IHeader {
  salesTool?: JSX.Element; // TODO: Create sales tool component
  topNavBar?: JSX.Element;
  logo?: JSX.Element;
  mobileSearchBar?: JSX.Element;
  mobileActions?: JSX.Element;
  mobileNavigation?: JSX.Element;
  desktopSearchBar?: JSX.Element;
  desktopActions?: JSX.Element;
  desktopNavigation?: JSX.Element;
}

const Header = ({
  salesTool,
  topNavBar,
  logo,
  mobileSearchBar,
  mobileActions,
  mobileNavigation,
  desktopSearchBar,
  desktopActions,
  desktopNavigation
}: IHeader) => {
  return (
    <header className={styles.header}>
      {salesTool && salesTool}
      {topNavBar && topNavBar}
      {(
        logo ||
        mobileSearchBar ||
        mobileActions ||
        mobileNavigation ||
        desktopSearchBar ||
        desktopActions ||
        desktopNavigation
      ) && (
        <>
          <Below breakpoint='md'>
            {(matches) => matches && (
              <ContentWrapper>
                <FlexContainer flexDirection='column'>
                  <FlexContainer alignItems='center' justifyContent='space-between' stretch>
                    {logo && logo}
                    {mobileActions && mobileActions}
                    {mobileNavigation}
                  </FlexContainer>
                  {mobileSearchBar && mobileSearchBar}
                </FlexContainer>
              </ContentWrapper>
            )}
          </Below>
          <Above breakpoint='md'>
            {(matches) => matches && (
              <>
                <ContentWrapper padding={[1, 0]}>
                  <FlexContainer alignItems='center'>
                    {logo && logo}
                    {desktopSearchBar && desktopSearchBar}
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

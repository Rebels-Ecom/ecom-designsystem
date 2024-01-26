import styles from './header.module.css'
import { Above, Below, ContentWrapper, FlexContainer } from '../../layouts'

export interface IHeader {
  salesTool?: JSX.Element // TODO: Create sales tool component
  topNavBar?: JSX.Element
  deliveryInfoBar?: JSX.Element
  logo?: JSX.Element
  mobileSearchBar?: JSX.Element
  mobileActions?: JSX.Element
  mobileCalendar?: JSX.Element
  mobileNavigation?: JSX.Element
  desktopSearchBar?: JSX.Element
  desktopActions?: JSX.Element
  desktopNavigation?: JSX.Element
}

const Header = ({
  salesTool,
  topNavBar,
  deliveryInfoBar,
  logo,
  mobileSearchBar,
  mobileActions,
  mobileCalendar,
  mobileNavigation,
  desktopSearchBar,
  desktopActions,
  desktopNavigation,
}: IHeader) => {
  return (
    <>
      {salesTool && salesTool}
      {deliveryInfoBar && deliveryInfoBar}
      <header className={styles.header}>
        {(logo || mobileSearchBar || mobileActions || mobileNavigation || desktopSearchBar || desktopActions || desktopNavigation) && (
          <>
            <Below breakpoint="md">
              {(matches) =>
                matches && (
                  <>
                    {topNavBar && topNavBar}
                    <ContentWrapper>
                      <FlexContainer flexDirection="column" gap={0}>
                        <FlexContainer alignItems="center" justifyContent="space-between" stretch>
                          {logo && logo}
                          {mobileActions && mobileActions}
                          {mobileNavigation}
                        </FlexContainer>
                        {mobileSearchBar && mobileSearchBar}
                      </FlexContainer>
                    </ContentWrapper>
                    {mobileCalendar && mobileCalendar}
                  </>
                )
              }
            </Below>
            <Above breakpoint="md">
              {(matches) =>
                matches && (
                  <>
                    {topNavBar && topNavBar}
                    <ContentWrapper padding={[1, 0]}>
                      <FlexContainer alignItems="center">
                        {logo && logo}
                        {desktopSearchBar && desktopSearchBar}
                        {desktopActions && desktopActions}
                      </FlexContainer>
                    </ContentWrapper>
                    {desktopNavigation && desktopNavigation}
                  </>
                )
              }
            </Above>
          </>
        )}
      </header>
    </>
  )
}

export { Header }

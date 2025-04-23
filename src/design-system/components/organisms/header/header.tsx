import { Loader } from '../../atoms'
import { ContentWrapper, FlexContainer, mediaQueryHelper } from '../../layouts'
import { DesktopNavigation } from '../../molecules'
import styles from './header.module.css'

export interface IHeader {
  salesTool?: JSX.Element // TODO: Create sales tool component
  topNavBar?: JSX.Element
  deliveryInfoBar?: JSX.Element
  logo?: JSX.Element
  mobileActions?: JSX.Element
  mobileCalendar?: JSX.Element
  mobileNavigation?: JSX.Element
  desktopSearchBar?: JSX.Element
  desktopActions?: JSX.Element
  desktopNavigation?: JSX.Element
  loading?: boolean
}

const Header = ({
  salesTool,
  topNavBar,
  deliveryInfoBar,
  logo,
  mobileActions,
  mobileCalendar,
  mobileNavigation,
  desktopSearchBar,
  desktopActions,
  desktopNavigation,
  loading,
}: IHeader) => {
  const { isMobile, isTablet, isDesktop, isBigScreen } = mediaQueryHelper()
  return (
    <>
      {salesTool && salesTool}
      {deliveryInfoBar && deliveryInfoBar}
      <header className={styles.header}>
        {(logo || mobileActions || mobileNavigation || desktopSearchBar || desktopActions || desktopNavigation) && (
          <>
            {(isMobile || isTablet) && (
              <>
                {topNavBar && topNavBar}
                <ContentWrapper>
                  <FlexContainer flexDirection="column" gap={0}>
                    <FlexContainer alignItems="center" justifyContent="space-between" stretch>
                      {logo && logo}
                      {mobileActions && mobileActions}
                      {loading && <Loader visible position="relative" size="xs" />}
                      {!loading && mobileNavigation}
                    </FlexContainer>
                  </FlexContainer>
                </ContentWrapper>
                {mobileCalendar && mobileCalendar}
              </>
            )}
            {(isDesktop || isBigScreen) && (
              <>
                {topNavBar && topNavBar}
                <ContentWrapper padding={[1, 0]}>
                  <FlexContainer alignItems="center">
                    {logo && logo}
                    <>
                      {desktopSearchBar && desktopSearchBar}
                      {desktopActions && desktopActions}
                    </>
                  </FlexContainer>
                </ContentWrapper>
                {loading && (
                  <DesktopNavigation
                    categories={[]}
                    currentSlug="/"
                    isOpen={false}
                    linkComponent="a"
                    setIsOpen={() => {}}
                  />
                )}
                {desktopNavigation && !loading && desktopNavigation}
              </>
            )}
          </>
        )}
      </header>
    </>
  )
}

export { Header }

import { useMediaQuery } from 'react-responsive'

const mediaQueryHelper = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 47.938em)`,
  })
  const isTablet = useMediaQuery({
    query: `(min-width: 48em) and (max-width: 63.938em)`,
  })
  const isDesktop = useMediaQuery({
    query: `(min-width: 64em) and (max-width: 89.938em)`,
  })
  const isBigScreen = useMediaQuery({
    query: `(min-width: 90em)`,
  })

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
  }
}

export { mediaQueryHelper }

import { useMediaQuery } from "react-responsive";

const mediaQueryHelper = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: 48em)`
  })

  return {
    isMobile: !isDesktop,
  }
}

export {
  mediaQueryHelper
}
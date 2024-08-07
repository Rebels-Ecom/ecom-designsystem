import { ReactElement } from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import { breakpoints, Breakpoint } from '.'

/** @deprecated Use mediaQueryHelper hook instead */
const Below = ({ breakpoint, children }: { breakpoint: Breakpoint; children: (matches: boolean) => React.ReactNode }) => {
  const maxWidth = breakpoints[breakpoint]
  const matches = useMediaQuery({ maxWidth })
  if (typeof children === 'function') {
    return <MediaQuery maxWidth={maxWidth - 1}>{(matches) => children(matches) as ReactElement}</MediaQuery>
  }
  return matches ? (children as ReactElement) : null
}

export { Below }

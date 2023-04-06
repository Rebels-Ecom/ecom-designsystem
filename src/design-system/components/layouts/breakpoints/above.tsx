import { ReactElement } from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import { breakpoints, Breakpoint } from '.'

const Above = ({ breakpoint, children }: { breakpoint: Breakpoint; children: (matches: boolean) => React.ReactNode }) => {
  const minWidth = breakpoints[breakpoint]
  const matches = useMediaQuery({ minWidth })
  if (typeof children === 'function') {
    return <MediaQuery minWidth={minWidth}>{(matches) => children(matches) as ReactElement}</MediaQuery>
  }
  return matches ? (children as ReactElement) : null
}

export { Above }

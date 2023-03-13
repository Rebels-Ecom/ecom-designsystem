import { ReactElement } from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import { breakpoints, Breakpoint } from '.'

const Between = ({ betweenBreakpoints: [min, max], children }: { betweenBreakpoints: [Breakpoint, Breakpoint]; children: React.ReactNode }) => {
  const minWidth = breakpoints[min]
  const maxWidth = breakpoints[max]
  const matches = useMediaQuery({ minWidth, maxWidth })
  if (typeof children === 'function') {
    return (
      <MediaQuery minWidth={minWidth} maxWidth={maxWidth}>
        {(matches) => children(matches) as ReactElement}
      </MediaQuery>
    )
  }
  return matches ? (children as ReactElement) : null
}

export { Between }

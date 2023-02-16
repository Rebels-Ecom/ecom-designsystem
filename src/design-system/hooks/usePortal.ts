// Inspired by https://www.30secondsofcode.org/react/s/use-portal

import { useCallback, useState, useEffect, ReactNode } from 'react'
import { createPortal, unmountComponentAtNode } from 'react-dom'

interface IPortalState {
  render: (children?: any) => any
  remove: () => void
}

export const usePortal = (selector: HTMLElement | null) => {
  const [portal, setPortal] = useState<IPortalState>({
    render: () => null,
    remove: () => null,
  })

  const createPortalWithSelector = useCallback((selector: HTMLElement) => {
    const Portal = ({ children }: { children: ReactNode }) => createPortal(children, selector)
    const remove = () => unmountComponentAtNode(selector)

    return {
      render: Portal,
      remove,
    }
  }, [])

  useEffect(() => {
    if (selector) {
      portal.remove()

      const newPortal = createPortalWithSelector(selector) as unknown as IPortalState
      setPortal(newPortal)

      return () => {
        newPortal.remove()
      }
    }
  }, [selector])

  return portal.render
}

export default usePortal

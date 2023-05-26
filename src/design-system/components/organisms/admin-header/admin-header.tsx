import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import cx from 'classnames'
import styles from './admin-header.module.css'
import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target: any) => {
  const [size, setSize] = useState()

  useLayoutEffect(() => {
    setSize(target?.current?.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect))

  useEffect(() => console.log(size), [size])

  return size
}

enum Area {
  ADMIN_SEARCH = 'adminSearch',
  SEARCH_NAV_LINKS = 'searchNavLinks',
}

const GridArea = ({ children, area }: { children?: React.ReactNode; area: Area }) => {
  return (
    <div className={styles[area]} data-area={area}>
      {children}
    </div>
  )
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const target = useRef(null)
  const size = useSize(target) || { width: 0, height: 0 }

  return (
    <motion.header className={styles.adminHeader} initial={false} ref={target} custom={size?.width}>
      {children}
    </motion.header>
  )
}

const AdminHeader = ({
  children,
}: {
  adminSearchNavBar?: any
  searchNavLinks?: any
  children: ({ Wrapper, GridArea }: { Wrapper: any; GridArea: any }) => React.ReactNode
}) => {

  if (typeof children === 'function') {
    return children({ Wrapper, GridArea }) as ReactElement
  }
  return children as ReactElement
}

export { AdminHeader }

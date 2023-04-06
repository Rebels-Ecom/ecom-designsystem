import { useCycle } from 'framer-motion'
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import cx from 'classnames'
import styles from './header.module.css'
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
  TOP = 'top',
  LOGO = 'logo',
  SEARCH = 'search',
  SEARCH_NAV_LINKS = 'searchNavLinks',
  BTN = 'btn',
  NAV = 'nav',
  MOBILE_NAV = 'mobileNav',
}

const GridArea = ({ children, area }: { children?: React.ReactNode; area: Area }) => {
  return (
    <div className={styles[area]} data-area={area}>
      {children}
    </div>
  )
}

const Wrapper = ({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) => {
  const target = useRef(null)
  const size = useSize(target) || { width: 0, height: 0 }

  return (
    <motion.header className={styles.header} initial={false} animate={isOpen ? 'open' : 'closed'} ref={target} custom={size?.width}>
      {children}
    </motion.header>
  )
}

const Header = ({
  children,
}: {
  topNavBar?: any
  logotype?: any
  searchNavBar?: any
  navigation?: any
  headerLinkList?: any
  children: ({ Wrapper, Button, GridArea }: { Wrapper: any; Button: any; GridArea: any }, isOpen: any) => React.ReactNode
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const Path = (props: any) => <motion.path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />
  const Button = () => (
    <button
      id="navigation-menu-btn"
      type={'button'}
      aria-label="menu"
      aria-controls={'navigation-menu'}
      aria-expanded={isOpen}
      onClick={() => toggleOpen()}
      className={cx(styles.menuButton, isOpen && styles.open)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  )

  if (typeof children === 'function') {
    return children({ Wrapper, Button, GridArea }, isOpen) as ReactElement
  }
  return children as ReactElement
}

export { Header }

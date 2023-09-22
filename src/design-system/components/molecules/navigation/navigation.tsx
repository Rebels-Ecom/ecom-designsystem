import React from 'react'
import styles from './navigation.module.css'
import { motion } from 'framer-motion'
import { INavigationLink } from '../../../../types/links'
import { Above, Below, ContentWrapper } from '../../layouts'
import cx from 'classnames'
import { NavigationList } from '../navigation-list/navigation-list'

export interface INavigation {
  links: Array<INavigationLink>
  linkComponent: any
  isOpen: boolean
}

const sidebar = {
  open: (right = 1000) => ({
    clipPath: `circle(${1000 * 2 + 200}px at ${right}px -40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (right = 1000) => ({
    clipPath: `circle(30px at  ${right - 100}px -40px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
}

const Navigation = ({ links, linkComponent: Link, isOpen }: INavigation) => {
  return (
    <>
      {links?.length &&
        <>
          <Below breakpoint='lg'>
            {(matches: any) => matches && (
              <>
              <motion.div className={styles.background} variants={sidebar} />
              <div className={styles.mobileNavContainer}>
                <NavigationList links={links} linkComponent={Link} mobile isOpen={isOpen} />
              </div>
              </>
            )}
          </Below>
          <Above breakpoint="md">
            {(matches: any) => matches && (
              <div className={styles.navigation}>
                <ContentWrapper padding={0}>
                  <nav className={cx(styles.bar, styles.largeDeviceMenuBar)}>
                    <NavigationList links={links} linkComponent={Link} isOpen />
                  </nav>
                </ContentWrapper>
              </div>
            )}
          </Above>
        </>
      }
    </>
  )
}

export { Navigation }

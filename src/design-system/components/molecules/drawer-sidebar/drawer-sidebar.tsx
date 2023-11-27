import React, { useEffect } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import styles from './drawer-sidebar.module.css'
import { IconButton } from '../../atoms'
import cx from 'classnames';

export interface IDrawerSidebar {
  children: any
  isOpen: boolean
  onClose: (e: React.SyntheticEvent) => void
  /**
   * Defines what direction the sidebar should appear from
   * @default 'right'
   */
  from?: 'left' | 'right';
  /**
   * Defines the width of the sidebar content
   * @default 'lg'
   */
  width?: 'md' | 'lg';
}

function DrawerSidebar({ children, isOpen = false, onClose, from = 'right', width = 'lg' }: IDrawerSidebar) {
  const overlay = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  const sidebar = {
    hidden: { x: from === 'left' ? '-100%' : '100%' },
    show: { x: 0 },
  }

  const handleOnClose = (e: React.SyntheticEvent) => {
    if (e.target !== e.currentTarget) return
    onClose(e)
  }

  useEffect(() => {
    const el = document.body;

    if (el) {
      if (isOpen) {
        el.classList.add('no-scroll');
      } else {
        el.classList.remove('no-scroll');
      }
    }

    return () => el?.classList?.remove('no-scroll')
  }, [isOpen]);


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside className={styles.sidebar} variants={overlay} initial="hidden" animate="show" exit="hidden" onClick={handleOnClose}>
          <motion.div className={cx(styles.sidebarContent, styles[from], styles[width])} variants={sidebar} animate="show" initial="hidden" exit="hidden" transition={{ ease: 'easeIn' }}>
            <div className={styles.contentWrapper}>
              <IconButton
                className={styles.buttonClose}
                type='button'
                onClick={onClose}
                icon='icon-x'
                size="large"
                isTransparent
                noBorder
                noPadding
              />
              {children}
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export { DrawerSidebar }

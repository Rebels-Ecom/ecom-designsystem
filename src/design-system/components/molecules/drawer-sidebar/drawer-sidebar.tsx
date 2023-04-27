import React from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import styles from './drawer-sidebar.module.css'
import { IconButton } from '../../atoms'
import { LinkComponent } from '../../atoms/ui-link/ui-link'

export interface IDrawerSidebar {
  children: any
  isOpen: boolean
  onClose: (e: React.SyntheticEvent) => void
}

function DrawerSidebar({ children, isOpen = false, onClose }: IDrawerSidebar) {
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
    hidden: { x: '100%' },
    show: { x: 0 },
  }

  const handleOnClose = (e: React.SyntheticEvent) => {
    if (e.target !== e.currentTarget) return
    onClose(e)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside className={styles.sidebar} variants={overlay} initial="hidden" animate="show" exit="hidden" onClick={handleOnClose}>
          <motion.div className={styles.sidebarContent} variants={sidebar} animate="show" initial="hidden" exit="hidden" transition={{ ease: 'easeIn' }}>
            <div className={styles.contentWrapper}>
              <IconButton
                className={styles.buttonClose}
                onClick={onClose}
                icon={'icon-x'}
                size="large"
                isTransparent
                isLink={false}
                linkComponent={LinkComponent}
              ></IconButton>
              {children}
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export { DrawerSidebar }

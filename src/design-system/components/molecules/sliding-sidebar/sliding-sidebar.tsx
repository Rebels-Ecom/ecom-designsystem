import React from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import styles from './sliding-sidebar.module.css'
import { IconButton } from '../../atoms'
import { LinkComponent } from '../../atoms/ui-link/ui-link'

export interface ISlidingSidebar {
    children: any
    isOpen: boolean
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

function SlidingSidebar({children, isOpen=false, onClose}: ISlidingSidebar) {

  const viewPortWidth = window.innerWidth
  
  return (
    <AnimatePresence>
      {isOpen && 
        <motion.aside
          className={styles.sidebar}
          initial={{ opacity: 0, x: '100%', width: "100%", height: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          exit={{ x: '100%', transition: { ease: 'easeInOut', duration: 0.7}}}
        >
          <motion.div
            className={styles.sidebarContent}
            animate={{width: viewPortWidth<768 ? '90vw': 640}}
          >
            <div className={styles.contentWrapper}>
              <IconButton className={styles.buttonClose} onClick={onClose} icon={'icon-x'} size='large' isTransparent isLink={false} linkComponent = { LinkComponent }></IconButton>
              {children}
            </div>
          </motion.div>
        </motion.aside>
      }
    </AnimatePresence>
  )
}

export { SlidingSidebar }
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './pop-up.module.css'
import cx from 'classnames'

export type TContentPosition = 'left' | 'right' | 'center'

export interface IPopUp {
  open: boolean
  children: React.ReactNode
  contentPosition?: TContentPosition
}

function PopUp({ open, children, contentPosition = 'center' }: IPopUp) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={cx(styles.popUp, styles[contentPosition])}
          onClick={(e) => e.stopPropagation()}
          initial={{ y: '35%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1, position: 'fixed', zIndex: 995 }}
          transition={{ duration: 0.4 }}
          exit={{ y: '20%', opacity: 0, transition: { duration: 0.4 } }}
        >
          <div className={styles.content}>{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export { PopUp }

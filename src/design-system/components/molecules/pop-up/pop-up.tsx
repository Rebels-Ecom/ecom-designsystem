import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '../../atoms'
import styles from './pop-up.module.css'
import cx from 'classnames'

export type TContentPosition = 'left' | 'right' | 'center'

export interface IPopUp {
  open: boolean
  children: React.ReactNode
  onClose?: () => void
  contentPosition?: TContentPosition
}

function PopUp({ open, children, onClose, contentPosition = 'center' }: IPopUp) {
  const Dialog = ({ children, onClick }: { children: any; onClick: () => void }) => {
    return (
      <motion.div
        className={cx(styles.popUp, styles[contentPosition])}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '35%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ y: '20%', opacity: 0, transition: { duration: 0.4 } }}
      >
        {onClick && (
          <IconButton className={styles.buttonClose} onClick={onClick} icon={'icon-x'} size="large" isTransparent isLink={false} linkComponent={undefined} />
        )}
        <div className={styles.content}>{children}</div>
      </motion.div>
    )
  }

  return <AnimatePresence>{open ? <Dialog onClick={onClose ? onClose : () => {}}> {children}</Dialog> : null}</AnimatePresence>
}

export { PopUp }

import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePortal } from '../../../hooks'
import { IconButton } from '../../atoms'
import styles from './modal.module.css'
import cx from 'classnames'

export type TModalBackdrop = 'dark' | 'light'

export interface IModal {
  open: boolean
  children: React.ReactNode
  onClose: () => void
  backdropType?: TModalBackdrop
  dismissable?: boolean /** If true clicking outside the modal closes the modal.*/
  hideCloseButton?: boolean;
}

function Modal({ open, children, onClose, backdropType = 'dark', dismissable, hideCloseButton }: IModal) {
  const [selector, setSelector] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setSelector(document.getElementById('portal'))
  }, [])

  const Portal = usePortal(selector)

  const Backdrop = ({ children, onClick }: { children: any; onClick: () => void }) => {
    return (
      <motion.div
        className={cx(styles.backdrop, styles[backdropType])}
        onClick={onClick}
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    )
  }

  const Dialog = useCallback(({ children, onClick }: { children: any; onClick: () => void }) => {
    return (
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {!hideCloseButton && (
          <IconButton
            type='button'
            className={styles.buttonClose}
            onClick={onClick}
            icon='icon-x'
            size="large"
            isTransparent
            noBorder
            noPadding
          />
        )}
        {children}
      </motion.div>
    )
  }, [])

  return (
    <Portal>
      <AnimatePresence initial={false}>
        {open ? (
          <Backdrop
            onClick={() => {
              dismissable ? onClose() : () => {}
            }}
          >
            <Dialog onClick={onClose}> {children}</Dialog>
          </Backdrop>
        ) : null}
      </AnimatePresence>
    </Portal>
  )
}

export { Modal }

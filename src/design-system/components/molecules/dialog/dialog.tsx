import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cx from 'classnames'
import { Icon } from '../../atoms/icon/icon'
import { useOnClickOutside, useCloseOnEscape, useSetFocusOrder, usePortal } from '../../../hooks'

import styles from './dialog.module.css'

export type TDialogRole = 'dialog' | 'alert' | 'alertdialog'
export type TTheme = 'light' | 'dark'
export type TAnimationVariants = {
  open: any
  closed: any
}

export interface IDialog {
  children?: React.ReactNode
  role: TDialogRole
  id?: string
  ariaLabelledBy?: string
  ariaDescribedBy?: string
  hasOverlay?: boolean
  onClose: () => void
  isOpen: boolean
  animationVariants?: TAnimationVariants
  focusableElementInside?: any
  noPadding?: boolean
  hasPortal?: boolean // only present because of storybook and not getting theme correctly
  theme?: TTheme // force light theme dialog on dark pages for example
  className?: string
}

const animationDuration = 0.5

// configure together with Design
const variants = {
  open: { display: 'block' },
  closed: { display: 'none' },
}

const Dialog = ({
  id,
  role,
  children,
  ariaLabelledBy,
  ariaDescribedBy,
  hasOverlay,
  onClose,
  isOpen,
  animationVariants = variants,
  focusableElementInside,
  noPadding,
  hasPortal = true,
  theme,
  className,
}: IDialog) => {
  const dialogElement = useRef<HTMLDivElement | null>(null)
  const contentElement = useRef<HTMLDivElement | null>(null)

  useOnClickOutside({ref:contentElement, onClose})
  useSetFocusOrder(dialogElement, isOpen, focusableElementInside)
  useCloseOnEscape({onClose, isOpen})

  const Portal = usePortal(document.querySelector('body'))

  const renderDialog = () => (
    <AnimatePresence initial={false}>
      {isOpen && (
        <div
          className={cx(styles.dialog, className)}
          id={id ? id : undefined}
          role={role}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-modal="true"
          ref={dialogElement}
        >
          {hasOverlay && (
            <motion.div
              id={id}
              initial="closed"
              animate="open"
              exit="closed"
              variants={{ open: { display: 'block' }, closed: { display: 'none' } }}
              transition={{ duration: animationDuration, ease: 'easeOut' }}
            >
              <div className={styles.overlay} />
            </motion.div>
          )}
          <motion.div
            id={id}
            initial="closed"
            animate="open"
            exit="closed"
            variants={animationVariants}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
          >
            <div className={styles.innerWrapper}>
              <div className={cx(styles.content, theme, noPadding && styles.noPadding)} ref={contentElement}>
                <button className={styles.closeBtn} onClick={onClose}>
                  <Icon icon={'icon-x'} className={styles.icon} />
                </button>
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return hasPortal ? <Portal>{renderDialog()}</Portal> : renderDialog()
}

export { Dialog }

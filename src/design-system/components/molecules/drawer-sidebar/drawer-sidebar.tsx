import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useOnClickOutside } from '../../../hooks'
import { IconButton } from '../../atoms'
import styles from './drawer-sidebar.module.css'

export interface IDrawerSidebar {
  children: any
  isOpen: boolean
  onClose: (e: React.SyntheticEvent) => void
  /**
   * Defines what direction the sidebar should appear from
   * @default 'right'
   */
  from?: 'left' | 'right'
  /**
   * Defines the width of the sidebar content
   * @default 'lg'
   */
  width?: 'md' | 'lg'
  /**
   * Defines if backdrop should be hidden
   * @default false
   */
  hideOverlay?: boolean
  /**
   * Defines if body should be scrollable when sidebar is open
   * @default false
   */
  enableBackgroundScroll?: boolean
  disableCloseOnOutsideClick?: boolean
}

function DrawerSidebar({
  children,
  isOpen = false,
  onClose,
  from = 'right',
  width = 'lg',
  hideOverlay = false,
  enableBackgroundScroll = false,
  disableCloseOnOutsideClick = false,
}: IDrawerSidebar) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (enableBackgroundScroll) {
      return
    }

    const el = document.body

    if (el) {
      if (isOpen) {
        el.classList.add('no-scroll')
      } else {
        el.classList.remove('no-scroll')
      }
    }

    return () => el?.classList?.remove('no-scroll')
  }, [isOpen])

  useOnClickOutside({
    ref: contentRef,
    onClose: (e: React.SyntheticEvent) => {
      if (disableCloseOnOutsideClick) {
        return
      }

      if (hideOverlay) {
        return onClose(e)
      }
    },
  })

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.aside
            className={cx(styles.drawerSidebar, styles[from], styles[width])}
            initial={{ x: from === 'left' ? '-100vw' : '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: from === 'left' ? '-100vw' : '100vw' }}
            transition={{ type: 'tween' }}
            ref={contentRef}
          >
            <div className={styles.contentWrapper}>
              <IconButton
                className={styles.buttonClose}
                type="button"
                onClick={onClose}
                icon="icon-x"
                size="large"
                isTransparent
                noBorder
                noPadding
              />
              {children}
            </div>
          </motion.aside>
          {!hideOverlay && (
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => onClose(e)}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}

export { DrawerSidebar }

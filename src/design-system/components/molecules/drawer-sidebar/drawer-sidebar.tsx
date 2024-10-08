import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './drawer-sidebar.module.css'
import { IconButton } from '../../atoms'
import cx from 'classnames';
import { useOnClickOutside } from '../../../hooks';

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
  /**
   * Defines if backdrop should be hidden
   * @default false
   */
  hideOverlay?: boolean;
  /**
   * Defines if body should be scrollable when sidebar is open
   * @default false
   */
  enableBackgroundScroll?: boolean;
  disableCloseOnOutsideClick?: boolean;
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
  const contentRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (enableBackgroundScroll) {
      return;
    }
    
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

  useOnClickOutside({ ref: contentRef, onClose: (e: React.SyntheticEvent) => {
    if (disableCloseOnOutsideClick) {
      return;
    }

    if (hideOverlay) {
      return onClose(e);
    }
  } })

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.aside
            className={cx(styles.drawerSidebar, styles[from], styles[width])}
            variants={sidebar}
            animate="show"
            initial="hidden"
            exit="hidden"
            transition={{ ease: 'easeIn' }}
            ref={contentRef}
          >
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
          </motion.aside>
          {!hideOverlay && (
            <motion.div
              className={styles.backdrop}
              variants={overlay}
              initial="hidden"
              animate="show"
              exit="hidden"
              onClick={(e) => onClose(e)}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}

export { DrawerSidebar }

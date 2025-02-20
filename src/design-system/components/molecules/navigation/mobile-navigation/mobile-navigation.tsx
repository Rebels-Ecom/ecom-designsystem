import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from '../../../../hooks'
import { Button, Icon } from '../../../atoms'
import { INavigation, TNavCategory, TNavLink } from '../types'
import styles from './mobile-navigation.module.css'

// TODO: extract list item
interface IListItemWithLinks extends TNavCategory {
  delay?: number
  link?: never
}
type TListItemWithoutLinks = {
  name: string
  link: TNavLink
  links?: never
  delay?: number
}

const ListItem = ({
  name,
  link,
  links,
  delay,
  linkComponent: Link,
  close,
  trackNavigation,
}: (IListItemWithLinks | TListItemWithoutLinks) & {
  linkComponent: any
  close: () => void
  trackNavigation?: (target: string) => void
}) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState<'auto' | number | `${number}%`>(0)
  const [activeSecondLevel, setActiveSecondLevel] = useState<string | undefined>()
  const subMenuRef = useRef<HTMLDivElement>(null)

  const handleSecondLevelClick = (secondLinkName: string) => {
    setActiveSecondLevel((prev) => (prev === secondLinkName ? undefined : secondLinkName))
  }

  useEffect(() => {
    if (subMenuRef?.current) {
      subMenuRef.current.scrollTop = 56
    }
  }, [activeSecondLevel])

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, translateX: '10vw' }}
      animate={{ opacity: 1, translateX: 0, transition: { delay: delay ?? 0.3 } }}
      viewport={{ once: true }}
      className={styles.menuListItem}
    >
      {isLink(link) ? (
        <Link
          className={styles.menuListItemLink}
          to={link.href}
          target={link.openInNewTab ? '_blank' : '_self'}
          onClick={() => {
            close()
            trackNavigation?.(link.href)
          }}
        >
          {name}
        </Link>
      ) : (
        <button
          className={styles.menuListItemLink}
          onClick={() => {
            setHeight(height === 0 ? 'auto' : 0)
            setOpen(!open)
          }}
        >
          <span className={`${open ? styles.menuListItemLinkActive : ''}`}>{name}</span>
          <Icon className={styles.itemIcon} icon={open ? 'icon-chevron-up' : 'icon-chevron-down'} />
        </button>
      )}
      {!!links?.length ? (
        <motion.div className={styles.subMenuList} initial={{ height: 0 }} animate={{ height }}>
          {links.map((secondLink) => (
            <Fragment key={secondLink.name}>
              {isLink(secondLink) ? (
                <Link
                  className={styles.subMenuListItemLink}
                  to={secondLink.href}
                  target={secondLink.openInNewTab ? '_blank' : '_self'}
                  onClick={() => {
                    close()
                    trackNavigation?.(secondLink.href)
                  }}
                >
                  {secondLink.name}
                  <Icon className={styles.itemIcon} icon="icon-chevron-right" />
                </Link>
              ) : (
                <button className={styles.subMenuListItemLink} onClick={() => handleSecondLevelClick(secondLink.name)}>
                  <span className={`${activeSecondLevel === secondLink.name ? styles.subMenuListItemLinkActive : ''}`}>
                    {secondLink.name}
                  </span>
                  <Icon
                    className={styles.itemIcon}
                    icon={activeSecondLevel === secondLink.name ? 'icon-chevron-up' : 'icon-chevron-down'}
                  />
                </button>
              )}
              {isCategory(secondLink) && secondLink.links?.length ? (
                <motion.div
                  className={styles.subMenuList}
                  initial={{ height: 0 }}
                  animate={{ height: activeSecondLevel === secondLink.name ? 'auto' : 0 }}
                  ref={subMenuRef}
                >
                  {secondLink.links.map((thirdLink) => (
                    <Fragment key={thirdLink.name}>
                      {isLink(thirdLink) ? (
                        <Link
                          className={styles.subMenuListItemLink}
                          to={thirdLink.href}
                          target={thirdLink.openInNewTab ? '_blank' : '_self'}
                          onClick={() => {
                            close()
                            trackNavigation?.(thirdLink.href)
                          }}
                        >
                          {thirdLink.name}
                          <Icon className={styles.itemIcon} icon="icon-chevron-right" />
                        </Link>
                      ) : // TODO: add support for another level if needed
                      undefined}
                    </Fragment>
                  ))}
                </motion.div>
              ) : undefined}
            </Fragment>
          ))}
        </motion.div>
      ) : undefined}
    </motion.div>
  )
}

const MobileNavigation = ({
  categories,
  isAuthenticated,
  signOutLabel,
  onSignOut,
  actions,
  isOpen: open,
  setIsOpen: setOpen,
  linkComponent: Link,
  trackNavigation,
}: INavigation) => {
  const mobileNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = document.body

    if (el) {
      if (open) {
        el.classList.add('no-scroll')
      } else {
        el.classList.remove('no-scroll')
      }
    }
  }, [open])

  useOnClickOutside({ ref: mobileNavRef, onClose: () => setOpen(false) })

  return (
    <AnimatePresence>
      <div key="main" className={styles.mobileNavigation} ref={mobileNavRef}>
        <div className={styles.top}>
          {actions && <div className={styles.actions}>{actions}</div>}
          <div className={styles.topInner}>
            {!open && (
              <motion.button
                key="menu-btn"
                initial={{ scale: 0.2 }}
                animate={{ scale: open ? 0 : 1 }}
                exit={{ scale: 0.2 }}
                onClick={() => setOpen(true)}
                className={styles.menuButton}
                transition={{ type: 'tween' }}
                layoutId="menu-button"
              >
                <Icon className={styles.menuIcon} icon="icon-menu" />
              </motion.button>
            )}
          </div>
        </div>
        <motion.nav
          className={styles.content}
          initial={{ x: '100vw' }}
          animate={{ x: open ? '0' : '100vw' }}
          transition={{ type: 'tween' }}
        >
          <div className={styles.closeButtonContainer}>
            {open && (
              <motion.button
                key="close-btn"
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: open ? 1 : 0, opacity: 1 }}
                exit={{ scale: 0.2, opacity: 0 }}
                onClick={() => setOpen(false)}
                className={styles.menuButton}
                transition={{ type: 'tween', delay: 0.1 }}
                layoutId="menu-button"
              >
                <Icon className={cx(styles.menuIcon, styles.menuCloseIcon)} icon="icon-plus" />
              </motion.button>
            )}
          </div>
          <div className={styles.menuListWrapper}>
            <ul className={styles.menuList}>
              {categories.map((cat, i) => {
                if (isCategory(cat)) {
                  return (
                    <ListItem
                      key={cat.name}
                      linkComponent={Link}
                      name={cat.name}
                      links={cat.links}
                      delay={i * 0.1}
                      href={cat.href}
                      close={() => setOpen(false)}
                      trackNavigation={trackNavigation}
                    />
                  )
                } else if (isLink(cat)) {
                  return (
                    <ListItem
                      key={cat.name}
                      linkComponent={Link}
                      name={cat.name}
                      link={cat}
                      delay={i * 0.1}
                      close={() => setOpen(false)}
                      trackNavigation={trackNavigation}
                    />
                  )
                }
              })}
            </ul>
            {isAuthenticated && signOutLabel && onSignOut && (
              <div className={styles.signOut}>
                <Button children={signOutLabel} onClick={onSignOut} surface="x" type="button" />
              </div>
            )}
          </div>
        </motion.nav>
      </div>
      <AnimatePresence key="backdrop">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.backDrop}
          />
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

const isLink = (obj: any): obj is TNavLink => {
  return obj && !isCategory(obj)
}

const isCategory = (obj: any): obj is TNavCategory => {
  return obj && 'links' in obj
}

export { MobileNavigation }

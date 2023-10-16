import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Icon, IconButton } from '../../../atoms';
import styles from './mobile-navigation.module.css';
import cx from 'classnames';

export type TNavLink = {
  // Link text / title
  name: string;
  // Path to destination
  href: string;
  // Boolean for toggling target="_blank"
  openInNewTab?: boolean;
  // Descriptive text
  description?: string;
};

export type TNavCategory = {
  // Link text / title
  name: string;
  // Descriptive text
  description?: string;
  // Subtitle
  subtitle?: string;
  // Required sub level of links
  links: Array<TNavLink | TNavCategory>;
};

export interface INavigation {
  // Array of all your link objects
  categories: Array<TNavLink | TNavCategory>;
  // Active slug/path
  currentSlug: string;
  // inital active top level
  initial?: string;
  // User logged in status
  isAuthenticated?: boolean;
  signOutLabel?: string;
  onSignOut?: () => void;
  actions?: JSX.Element;
}


// TODO: extract list item
interface IListItemWithLinks extends TNavCategory {
  delay?: number;
  link?: never;
}
type TListItemWithoutLinks = {
  name: string;
  link: TNavLink;
  links?: never;
  delay?: number;
};

const ListItem = ({ name, link, links, delay }: IListItemWithLinks | TListItemWithoutLinks) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<'auto' | number | `${number}%`>(0);
  const [activeSecondLevel, setActiveSecondLevel] = useState<string | undefined>();

  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, translateX: '10vw' }}
      whileInView={{ opacity: 1, translateX: 0, transition: { delay: delay ?? 0.3 } }}
      viewport={{ once: true }}
      className={styles.menuListItem}
    >
      {isLink(link) ? (
        <a className={styles.menuListItemLink} href={link.href} target={link.openInNewTab ? '_blank' : '_self'}>
          {name}
        </a>
      ) : (
        <button
          className={styles.menuListItemLink}
          onClick={() => {
            setHeight(height === 0 ? 'auto' : 0);
            setOpen(!open);
          }}
        >
          <span className={`${open ? styles.menuListItemLinkActive : ''}`}>{name}</span>
          {/* <Plus className={`stroke-black ${open ? 'rotate-45' : 'rotate-0'} transition-transform`} /> */}
          <Icon className={styles.itemIcon} icon={open ? 'icon-chevron-up' : 'icon-chevron-down'} />
        </button>
      )}
      {!!links?.length ? (
        <motion.div className={styles.subMenuList} initial={{ height: 0 }} animate={{ height }}>
          {links.map((secondLink) => (
            <Fragment key={secondLink.name}>
              {isLink(secondLink) ? (
                <a className={styles.subMenuListItemLink} href={secondLink.href} target={secondLink.openInNewTab ? '_blank' : '_self'}>
                  {secondLink.name}
                  <Icon  className={styles.itemIcon} icon='icon-chevron-right' />
                </a>
              ) : (
                <button
                  className={styles.subMenuListItemLink}
                  onClick={() => {
                    setActiveSecondLevel(activeSecondLevel === secondLink.name ? '' : secondLink.name);
                  }}
                >
                  <span className={`${activeSecondLevel === secondLink.name ? styles.subMenuListItemLinkActive : ''}`}>{secondLink.name}</span>
                  <Icon className={styles.itemIcon} icon={activeSecondLevel === secondLink.name ? 'icon-chevron-up' : 'icon-chevron-down'} />
                </button>
              )}
              {isCategory(secondLink) && secondLink.links?.length ? (
                <motion.div
                  className={styles.subMenuList}
                  initial={{ height: 0 }}
                  animate={{ height: activeSecondLevel === secondLink.name ? 'auto' : 0 }}
                >
                  {secondLink.links.map((thirdLink) => (
                    <Fragment key={thirdLink.name}>
                      {isLink(thirdLink) ? (
                        <a className={styles.subMenuListItemLink} href={thirdLink.href} target={thirdLink.openInNewTab ? '_blank' : '_self'}>
                          {thirdLink.name}
                          <Icon className={styles.itemIcon} icon='icon-chevron-right' />
                        </a>
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
  );
};

const MobileNavigation = ({ categories, isAuthenticated, signOutLabel, onSignOut, actions }: INavigation) => {
  const [open, setOpen] = useState(false);
  const [distanceTop, setDistanceTop] = useState(0);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDistanceTop((mobileNavRef.current?.offsetTop ?? 0) + (mobileNavRef.current?.clientHeight ?? 0));
  }, [])

  useEffect(() => {
    const el = document.body;

    if (el) {
      if (open) {
        el.classList.add('overflow-hidden');
      } else {
        el.classList.remove('overflow-hidden');
      }
    }
  }, [open]);

  return (
    <div className={styles.mobileNavigation} ref={mobileNavRef}>
      <div className={styles.top}>
        {actions && (
          <div className={styles.actions}>{actions}</div>
        )}
        <div className={styles.topInner}>
          {/* mode="wait" */}
          <AnimatePresence initial={false} exitBeforeEnter>
            {!open && (
              <motion.button
                key="menu-btn"
                initial={{ scale: 0.2 }}
                animate={{ scale: open ? 0 : 1 }}
                exit={{ scale: 0.2 }}
                onClick={() => setOpen(true)}
                className={styles.menuButton}
              >
                <Icon className={styles.menuIcon} icon='icon-menu' />
              </motion.button>
            )}

            {open && (
              <motion.button
                key="close-btn"
                initial={{ scale: 0.2 }}
                animate={{ scale: open ? 1 : 0 }}
                exit={{ scale: 0.2 }}
                onClick={() => setOpen(false)}
                className={styles.menuButton}
              >
                <Icon className={cx(styles.menuIcon, styles.menuCloseIcon)} icon='icon-plus' />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.nav
        className={styles.content}
        initial={{ x: '100vw' }}
        animate={{ x: open ? '0' : '100vw' }}
        transition={{ type: 'tween' }}
        style={{ paddingTop: `${distanceTop}px` }}
      >
        <div className={styles.menuListWrapper}>
          <ul className={styles.menuList}>
            {categories.map((cat, i) => {
              if (isCategory(cat)) {
                return <ListItem key={cat.name} name={cat.name} links={cat.links} delay={i * 0.1} />;
              } else if (isLink(cat)) {
                return <ListItem key={cat.name} name={cat.name} link={cat} delay={i * 0.1} />;
              }
            })}
          </ul>
          {isAuthenticated && signOutLabel && onSignOut && (
            <div className={styles.signOut}>
              <Button children={signOutLabel} onClick={onSignOut} surface='x' type='button' />
            </div>
          )}
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            className={styles.backDrop}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const isLink = (obj: any): obj is TNavLink => {
  return obj && 'href' in obj;
};

const isCategory = (obj: any): obj is TNavCategory => {
  return obj && 'links' in obj;
};

export {
  MobileNavigation
};

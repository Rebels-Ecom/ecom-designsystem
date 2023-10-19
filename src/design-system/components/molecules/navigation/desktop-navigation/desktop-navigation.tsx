import { useEffect, useRef, useState } from "react";
import { INavigation, TNavCategory, TNavLink } from "../types";
import { motion } from "framer-motion";
import { Icon, IconButton } from "../../../atoms";
import styles from './desktop-navigation.module.css'
import cx from 'classnames'
import { ContentWrapper } from "../../../layouts";

const DesktopNavigation = ({ categories, currentSlug, initial }: INavigation) => {
  const [activeTopLevel, setActiveTopLevel] = useState<TNavCategory | TNavLink>();
  const [hoveredTopLevel, setHoveredTopLevel] = useState<TNavCategory | TNavLink>();
  const [activeSecondLevel, setActiveSecondLevel] = useState<TNavCategory | TNavLink | undefined>();
  const [thirdLevelHeight, setThirdLevelHeight] = useState<'auto' | number>('auto');
  const secondLevelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const x = window.innerHeight - (secondLevelRef?.current?.getBoundingClientRect()?.top ?? 0)
    setThirdLevelHeight(x);
  }, [hoveredTopLevel])

  useEffect(() => {
    const el = document.body;

    if (el) {
      if (activeTopLevel) {
        el.classList.add('no-scroll');
      } else {
        el.classList.remove('no-scroll');
      }
    }

    return () => el?.classList?.remove('no-scroll')
  }, [activeTopLevel]);


  const setActiveTabs = () => {
    const activeTab = categories.find(cat => {
      return !!currentSlug?.includes(cat.href)
    })

    setHoveredTopLevel(activeTab);
  };

  useEffect(() => {
    setActiveTabs();
  }, []);

  return (
    <nav className={styles.desktopNavigation}>
      <ContentWrapper padding={0}>
        <motion.div
          className={styles.topLevel}
          onHoverEnd={() => setActiveTabs()}
        >
          <div className={styles.topLevelLinks}>
            <motion.ul className={styles.topLevelLinkList}>
              {categories.map((cat, i) => (
                <motion.li
                  key={`${cat.name}-${i}`}
                  className={styles.topLevelLinkInner}
                  onClick={() => setHoveredTopLevel(cat)}
                  onHoverStart={() => {
                    setHoveredTopLevel(cat);
                  }}
                >
                  {hoveredTopLevel?.name === cat.name && (
                    <motion.div
                      className={styles.topLevelLinkActive}
                      layoutId="activeLink"
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                      }}
                    />
                  )}
                  {isLink(cat) && (
                    <motion.a
                      key={`${cat.name}-${i}`}
                      className={cx(styles.topLevelLink, {[styles.active]: activeTopLevel === cat})}
                      href={cat.href}
                      target={cat.openInNewTab ? '_blank' : '_self'}
                    >
                      {cat.name}
                    </motion.a>
                  )}
                  {isCategory(cat) && (
                    <motion.button
                      key={`${cat.name}-${i}`}
                      className={cx(styles.topLevelLink, {[styles.active]: activeTopLevel === cat})}
                      onClick={() => {
                        if (activeTopLevel?.name === cat.name) {
                          setActiveTopLevel(undefined)
                        } else {
                          setActiveTopLevel(cat);
                        }
                      }}
                    >
                      {cat.name}
                      <Icon icon={activeTopLevel?.name === cat.name ? "icon-chevron-up" : "icon-chevron-down"} />
                    </motion.button>
                  )}
                </motion.li>
              ))}
              <motion.div
                className={styles.closeButton}
                initial={{ scale: 0, opacity: 0 }}
                animate={activeTopLevel ? { scale: 1, opacity: 1 } : undefined}
                exit={{ transition: { delay: 0 }}}
              >
                <IconButton
                  className={styles.iconButton}
                  icon="icon-plus"
                  type="button"
                  onClick={() => setActiveTopLevel(undefined)}
                />
              </motion.div>
            </motion.ul>
          </div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: activeTopLevel?.links?.length ? 'auto' : 0 }}
            className={styles.secondLevel}
            ref={secondLevelRef}
          >
            <ContentWrapper padding={0}>
              <motion.div
                className={styles.secondLevelInner}
                style={{ height: `${thirdLevelHeight}px` }}
                initial={{ y: '-100%', opacity: 0 }}
                animate={activeTopLevel?.links?.length ? {y: '0', opacity: 1 } : { y: '-100%', opacity: 0, transition: { delay: 0.3 } } }
              >
                <motion.ul className={styles.secondLevelLinkList}>
                  {isCategory(activeTopLevel) ? (
                    activeTopLevel.links.map((link, i) => (
                      <motion.li
                        className={styles.secondLevelLinkItem}
                        key={`${link.name}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <>
                          <motion.a
                            className={cx(styles.secondLevelLink, {[styles.active]: activeSecondLevel === link})}
                            href={link.href}
                            target={link.openInNewTab ? '_blank' : '_self'}
                            onClick={() => {
                              setActiveSecondLevel(link);
                            }}
                            >
                            {link.name}
                          </motion.a>
                          <ul className={styles.thirdLevelList}>
                            {link.links?.map((thirdLevelLink, i) => (
                              <li key={`${thirdLevelLink.href}-${i}`} className={styles.thirdLeveListItem}>
                                <a
                                  href={thirdLevelLink.href}
                                  target={thirdLevelLink.openInNewTab ? '_blank' : '_self'}
                                  className={styles.thirdLevelLink}
                                >
                                  {thirdLevelLink.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      </motion.li>
                    ))
                  ) : (
                    null
                  )}
                </motion.ul>
                <motion.div className={styles.endOfList} initial={{ opacity: 0 }} animate={{ opacity: activeTopLevel ? 1 : 0 }} />
              </motion.div>
            </ContentWrapper>
          </motion.div>
        </motion.div>
      </ContentWrapper>
    </nav>
  );
};

// TODO: extract helperss

const isLink = (obj: any): obj is TNavLink => {
  return obj && !isCategory(obj);
};

const isCategory = (obj: any): obj is TNavCategory => {
  return obj && 'links' in obj;
};

export {
  DesktopNavigation
}

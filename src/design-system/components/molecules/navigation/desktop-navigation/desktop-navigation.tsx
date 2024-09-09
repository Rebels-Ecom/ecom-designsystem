import { useEffect, useRef, useState } from "react";
import { INavigation, TNavCategory, TNavLink } from "../types";
import { motion } from "framer-motion";
import { Icon, IconButton, Placeholder } from "../../../atoms";
import styles from './desktop-navigation.module.css'
import cx from 'classnames'
import { ContentWrapper, FlexContainer } from "../../../layouts";
import { useOnClickOutside } from "../../../../hooks";

const DesktopNavigation = ({
  categories,
  currentSlug,
  linkComponent: Link,
  trackNavigation
}: INavigation) => {
  const [activeTopLevel, setActiveTopLevel] = useState<TNavCategory | TNavLink>();
  const [hoveredTopLevel, setHoveredTopLevel] = useState<TNavCategory | TNavLink>();
  const [activeSecondLevel, setActiveSecondLevel] = useState<TNavCategory | TNavLink | undefined>();
  const [thirdLevelHeight, setThirdLevelHeight] = useState<'auto' | number>('auto');
  const [secondLevelWidth, setSecondLevelWidth] = useState<string | number>('auto');
  const secondLevelInnerRef = useRef<HTMLDivElement>(null);
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
    setSecondLevelWidth(`${secondLevelInnerRef?.current?.getBoundingClientRect()?.width ?? 1240}px`);
  }, []);

  useOnClickOutside({ ref: secondLevelInnerRef, onClose: (e: any) => {
    if (e?.srcElement?.classList?.contains(styles.topLevelTrigger)) {
      return;
    }

    setActiveTopLevel(undefined);
  } })

  const style: { [key: string]: string | number } = ({
    '--second-level-width': secondLevelWidth,
  })

  if (categories?.length === 0) {
    return (
      <motion.nav
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        className={cx(styles.desktopNavigation, styles.loading)}
      />
    )
  }

  return (
    <motion.nav
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      className={styles.desktopNavigation}
      style={style}
    >
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
                    <Link
                      key={`${cat.name}-${i}`}
                      className={cx(styles.topLevelLink, styles.topLevelTrigger, {[styles.active]: activeTopLevel === cat})}
                      to={cat.href}
                      target={cat.openInNewTab ? '_blank' : '_self'}
                      onClick={() => {
                        setActiveTopLevel(undefined);
                        trackNavigation?.(cat.href);
                      }}
                    >
                      {cat.name}
                    </Link>
                  )}
                  {isCategory(cat) && (
                    <motion.button
                      key={`${cat.name}-${i}`}
                      aria-label={cat.name}
                      className={cx(styles.topLevelLink, styles.topLevelTrigger, {[styles.active]: activeTopLevel === cat})}
                      onClick={() => {
                        if (activeTopLevel?.name === cat.name) {
                          setActiveTopLevel(undefined)
                        } else {
                          setActiveTopLevel(cat);
                        }
                      }}
                    >
                      {cat.name}
                      <Icon className={styles.topLevelTrigger} icon={activeTopLevel?.name === cat.name ? "icon-chevron-up" : "icon-chevron-down"} />
                    </motion.button>
                  )}
                </motion.li>
              ))}
              <motion.li
                className={styles.closeButton}
                initial={{ scale: 0, opacity: 0 }}
                animate={activeTopLevel ? { scale: 1, opacity: 1 } : undefined}
                exit={{ transition: { delay: 0 }}}
              >
                <IconButton
                  name='Close navigation'
                  className={styles.iconButton}
                  icon="icon-plus"
                  type="button"
                  onClick={() => setActiveTopLevel(undefined)}
                />
              </motion.li>
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
                ref={secondLevelInnerRef}
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
                          <Link
                            className={cx(styles.secondLevelLink, {[styles.active]: activeSecondLevel === link})}
                            to={link.href}
                            target={link.openInNewTab ? '_blank' : '_self'}
                            onClick={() => {
                              setActiveSecondLevel(link);
                              setActiveTopLevel(undefined);
                              trackNavigation?.(link.href);
                            }}
                          >
                            {link.name}
                          </Link>
                          <ul className={cx(styles.thirdLevelList, {[styles.thirdLevelListMaxWidth]: activeTopLevel?.links?.length > 3 })}>
                            {link.links?.map((thirdLevelLink, i) => (
                              <li key={`${thirdLevelLink.href}-${i}`} className={styles.thirdLeveListItem}>
                                <Link
                                  to={thirdLevelLink.href}
                                  target={thirdLevelLink.openInNewTab ? '_blank' : '_self'}
                                  className={styles.thirdLevelLink}
                                  title={thirdLevelLink.name}
                                  onClick={() => {
                                    setActiveTopLevel(undefined);
                                    trackNavigation?.(thirdLevelLink.href);
                                  }}
                                >
                                  {thirdLevelLink.name}
                                </Link>
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
              </motion.div>
            </ContentWrapper>
          </motion.div>
        </motion.div>
      </ContentWrapper>
    </motion.nav>
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

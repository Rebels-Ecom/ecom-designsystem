import { useEffect, useState } from "react";
import { INavigation, TNavCategory, TNavLink } from "../types";
import { motion } from "framer-motion";
import { Icon } from "../../../atoms";
import styles from './desktop-navigation.module.css'
import cx from 'classnames'
import { ContentWrapper } from "../../../layouts";

const DesktopNavigation = ({ categories, currentSlug, initial }: INavigation) => {
  const [activeTopLevel, setActiveTopLevel] = useState<TNavCategory | TNavLink>();
  const [hoveredTopLevel, setHoveredTopLevel] = useState<TNavCategory | TNavLink>();
  const [activeSecondLevel, setActiveSecondLevel] = useState<TNavCategory | TNavLink | undefined>();
  const [hoveredSecondLevel, setHoveredSecondLevel] = useState<TNavCategory | TNavLink | undefined>();
  const [hoveredThirdLevel, setHoveredThirdLevel] = useState<string | undefined>(undefined);

  const setActiveTabs = () => {
    const activeTab =
      categories.find((cat) => {
        if (cat.href === currentSlug) {
          return cat;
        }
        return isCategory(cat)
          ? cat.links.find((link) => {
              if (isLink(link)) {
                if (link.href === currentSlug) {
                  setActiveSecondLevel(link);
                }
                return link.href === currentSlug;
              }
              if (isCategory(link)) {
                return link.href === currentSlug ?? link.links.find((subLink) => {
                  if (isLink(subLink)) {
                    if (subLink.href === currentSlug) {
                      setActiveSecondLevel(activeSecondLevel);
                      setHoveredSecondLevel(activeSecondLevel ?? link);
                    }
                    return subLink.href === currentSlug;
                  }
                });
              }
            })
          : cat.href === currentSlug;
      }) ??
      categories.find((x) => x.name === initial) ??
      undefined;

    setActiveTopLevel(activeTab);
    setHoveredTopLevel(activeTab);
  };

  useEffect(() => {
    setActiveTabs();
  }, []);

  const getActiveSecondLevel = (tLevel?: TNavCategory | TNavLink) => {
    const top = tLevel ?? activeTopLevel;
    return isCategory(top)
      ? top.links.find((l) => (isCategory(l) ? l.links.find((sl) => (isLink(sl) ? sl.href === currentSlug : undefined)) : l.href === currentSlug))
      : undefined;
  };

  useEffect(() => {
    const el = document.body;

    if (el) {
      if (activeSecondLevel) {
        el.classList.add('overflow-hidden');
      } else {
        el.classList.remove('overflow-hidden');
      }
    }
  }, [activeSecondLevel]);

  const activeTop = hoveredTopLevel ?? activeTopLevel;

  return (
    <nav className={styles.desktopNavigation}>
      <ContentWrapper padding={0}>
        <motion.div className={styles.topLevel} onHoverEnd={() => setHoveredTopLevel(activeTopLevel)}>
          <div className={styles.topLevelLinks}>
            <motion.ul className={styles.topLevelLinkList}>
              {categories.map((cat, i) => (
                <motion.li
                  key={`${cat.name}-${i}`}
                  className={styles.topLevelLinkInner}
                  onHoverStart={() => {
                    setHoveredTopLevel(cat);
                    setHoveredSecondLevel(getActiveSecondLevel(cat));
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
                    <motion.a
                      key={`${cat.name}-${i}`}
                      className={cx(styles.topLevelLink, {[styles.active]: activeTopLevel?.name === cat.name})}
                      href={cat.href}
                      target={cat.openInNewTab ? '_blank' : '_self'}
                    >
                      {cat.name}
                      {cat.links?.length ?
                        <Icon icon="icon-chevron-down" /> : null
                      }
                    </motion.a>
                  {/* {isLink(cat) && (
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
                        setActiveTopLevel(cat);
                        setHoveredSecondLevel(getActiveSecondLevel(cat));
                      }}
                    >
                      {cat.name}
                      <Icon icon="icon-chevron-down" />
                    </motion.button>
                  )} */}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div initial={{ height: 0 }} animate={{ height: activeTop?.links?.length ? 'auto' : 0 }} className={styles.secondLevel}>
            <ContentWrapper padding={0}>
              <div className={styles.secondLevelInner}>
                <motion.ul className={styles.secondLevelLinkList}>
                  {isCategory(activeTop) ? (
                    activeTop.links.map((link, i) => (
                      <motion.li
                        className={styles.secondLevelLinkItem}
                        key={`${link.name}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onHoverStart={() => {
                          setHoveredSecondLevel(link);
                        }}
                        onHoverEnd={() => {
                          const fallBackSecondLevel = getActiveSecondLevel();
                          setHoveredSecondLevel(activeSecondLevel ?? fallBackSecondLevel);
                        }}
                      >
                        {hoveredSecondLevel?.name === link.name && (
                          <motion.div
                            className={styles.secondLevelLinkActive}
                            layoutId="activeChildLinkX"
                            transition={{
                              type: 'spring',
                              stiffness: 200,
                              damping: 20,
                            }}
                          />
                        )}
                        {isLink(link) && (
                          <motion.a
                            key={`${link.name}-${i}`}
                            className={cx(styles.secondLevelLink, {[styles.active]: activeSecondLevel === link})}
                            href={link.href}
                            target={link.openInNewTab ? '_blank' : '_self'}
                            onClick={() => {
                              setActiveSecondLevel(link);
                            }}
                          >
                            {link.name}
                          </motion.a>
                        )}
                        {isCategory(link) && (
                          <motion.button
                            key={`${link.name}-${i}`}
                            className={cx(styles.secondLevelLink, {[styles.active]: activeSecondLevel === link})}
                            onClick={() => {
                              setActiveSecondLevel(link);
                              setActiveTopLevel(hoveredTopLevel);
                            }}
                          >
                            {link.name}
                            <Icon icon="icon-chevron-down" />
                          </motion.button>
                        )}
                      </motion.li>
                    ))
                  ) : (
                    // <div style={{ height: '48px' }} />
                    null
                  )}
                </motion.ul>
              </div>
            </ContentWrapper>
          </motion.div>
        </motion.div>
        {isCategory(activeSecondLevel) ? (
          <div className={styles.thirdLevel}>
            <ContentWrapper padding={0}>
              <motion.div
                className={styles.thirdLevelInner}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0  }}
              >
                {isCategory(activeSecondLevel) && (
                  <div className={styles.thirdLevelTextWrapper}>
                    <div className={activeSecondLevel?.subtitle ? styles.titleWrapper : undefined}>
                      <h1 className={styles.title}>{activeSecondLevel?.name}</h1>
                    </div>
                  </div>
                )}
                <button
                  className={styles.closeButton}
                  onClick={() => {
                    // setActiveTopLevel(undefined)
                    // setHoveredTopLevel(undefined)
                    setActiveSecondLevel(undefined);
                    setHoveredSecondLevel(getActiveSecondLevel());
                  }}
                >
                  <Icon icon='icon-plus' className={styles.closeButtonIcon} />
                </button>
                <motion.ul className={styles.thirdLevelLinkList} onHoverEnd={() => setHoveredThirdLevel(undefined)}>
                  {activeSecondLevel.links.map((thirdLevelLink, i) => {
                    return isLink(thirdLevelLink) ? (
                      <motion.li
                        onHoverStart={() => setHoveredThirdLevel(thirdLevelLink.name)}
                        key={`${thirdLevelLink.href}-${i}`}
                        className={styles.thirdLevelLinkItem}
                      >
                        {hoveredThirdLevel === thirdLevelLink.name && (
                          <motion.div
                            layoutId="activeThirdLevel"
                            className={styles.thirdLevelLinkActive}
                            transition={{
                              type: 'spring',
                              stiffness: 200,
                              damping: 20,
                            }}
                          />
                        )}
                        <a href={thirdLevelLink.href} className={styles.thirdLevelLinkWrapper}>
                          <p className={styles.name}>{thirdLevelLink.name}</p>
                        </a>
                      </motion.li>
                    ) : undefined;
                  })}
                </motion.ul>
              </motion.div>
            </ContentWrapper>
          </div>
        ) : undefined}
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

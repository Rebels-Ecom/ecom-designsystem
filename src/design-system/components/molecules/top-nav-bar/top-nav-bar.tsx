import { useCallback } from 'react'
import { TIconNavLink } from '../../../../types/links'
import { Icon, TIcon } from '../../atoms/icon/icon'
import { IUiDatePicker, UiDatePicker } from '../../atoms/ui-date-picker/ui-date-picker'
import { ContentWrapper } from '../../layouts'
import { Above } from '../../layouts/breakpoints/above'
import { Below } from '../../layouts/breakpoints/below'
import styles from './top-nav-bar.module.css'
import cx from 'classnames'

export type TTopNavLinks = Array<TIconNavLink>

export interface ITopNavBar {
  links: TTopNavLinks
  userLoggedIn: boolean
  hasActiveUser?: boolean
  btnIcon?: TIcon
  btnText?: string
  datePicker?:IUiDatePicker
  onSelectDate?: CallableFunction
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  linkComponent: any
  userName?: string;
}

const TopNavBar = ({
  links,
  userLoggedIn=false,
  hasActiveUser=false,
  btnIcon,
  btnText,
  onClick,
  datePicker,
  onSelectDate,
  linkComponent: Link,
  userName,
}: ITopNavBar) => {

  function renderLink(link:TIconNavLink) {
    return(
      <>
        {link.isExternal
          ?
          <a href={link.isTelephoneLink ? `tel:${link.href}` : link.isMailLink ? `mailto:${link.href}` : link.href} className={styles.topNavLink} target={'_blank'}>
            {link.icon && <Icon className={styles.navIcon} icon={link.icon} />}
            <span className={cx('bodyS',
            styles.topNavText)}>{link.children}</span>
          </a>
          :
          <Link to={link.href} className={styles.topNavLink} title={link.children}>
            {link.icon && <Icon icon={link.icon} className={styles.navIcon} />}
            <span className={cx('bodyS', styles.topNavText)}>{link.children}</span>
          </Link>
        }
      </>
    )
  }

  if(!Array.isArray(links) || links.length<=0){
    return null
  }

  const linksLeft = links.slice(0, Math.ceil(links.length / 2))
  const linksRight = links.slice(- Math.floor(links.length / 2))

  const renderLeftLinks = useCallback(() => {
    return linksLeft?.map((link: TIconNavLink, index) => (
      <li key={`${link.href}-${index}`} className={styles.navLink}>
        {renderLink(link)}
      </li>
    ))
  }, [links])
  
  const renderRightLinks = useCallback(() => {
    return linksRight?.map((link: TIconNavLink, index) => (
      <li key={`${link.href}-${index}`} className={styles.navLink}>
        {renderLink(link)}
      </li>
    ))
  }, [links])

  return(
    <div className={cx(styles.topNavBar, hasActiveUser ? styles.adminTopNavBar : styles.userTopNavBar)}>
      <ContentWrapper>
        <Below breakpoint="lg">
          {(matches: any) => matches && (
            <div className={cx(styles.inner, { [styles.center]: !!userName })}>
              {userName ? (
                  <ul className={styles.navLinksWrapper}>
                    <li className={cx(styles.navLink, 'bodyS')}>
                      {userName}
                    </li>
                  </ul>
                ) : (
                  <>
                    <ul className={cx(styles.navLinksWrapper, styles.navLinksLeft)}>
                      {renderLeftLinks()}
                    </ul>
                    <ul className={cx(styles.navLinksWrapper, styles.navLinksRight)}>
                      {renderRightLinks()}
                    </ul>
                  </>
                )
              }
              {datePicker && onSelectDate && <UiDatePicker {...datePicker} onDateSelected={onSelectDate} className={styles.btnCalendar}></UiDatePicker>}
            </div>
          )}
        </Below>
        <Above breakpoint="lg">
          {(matches: any) => matches && (
            <div className={styles.inner}>
              <ul className={cx(styles.navLinksWrapper, styles.navLinksLeft)}>
                {renderLeftLinks()}
              </ul>
              <ul className={cx(styles.navLinksWrapper, styles.navLinksRight)}>
                {renderRightLinks()}
                {userLoggedIn && btnText && onClick && (
                  <button
                    className={cx(styles.topNavLink, styles.btn)}
                    onClick={onClick}
                  >
                    {btnIcon && <Icon icon={btnIcon} className={styles.navIcon}/>}
                    <span className={styles.btnText}>{btnText}</span>
                  </button>
                )}
              </ul>
            </div>
          )}
        </Above>
      </ContentWrapper>
    </div>
  )
}

export { TopNavBar }
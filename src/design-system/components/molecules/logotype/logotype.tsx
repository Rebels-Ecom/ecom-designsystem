import { Picture, IPicture } from '../../atoms/picture/picture'
import styles from './logotype.module.css'
import cx from 'classnames'

export type INavigationLogo = {
  href: string
} & IPicture

export type TLogotype = {
  logo: INavigationLogo,
  linkComponent: any,
  className: string
}

const Logotype = ({ logo, linkComponent: Link, className = '' }: TLogotype) => {
  return (
    <Link to={logo.href} className={cx(styles.linkLogo, className)}>
      <Picture {...logo} classNamePicture={styles.logoPicture} classNameImg={styles.logoImg} />
    </Link>
  )
}

export { Logotype }

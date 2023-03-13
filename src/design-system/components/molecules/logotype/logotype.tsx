import { Picture, IPicture } from '../../atoms/picture/picture'
import styles from './logotype.module.css'

export type INavigationLogo = {
  href: string
} & IPicture

const Logotype = ({ logo, linkComponent: Link }: { logo: INavigationLogo; linkComponent: any }) => {
  return (
    <Link to={logo.href} className={styles.linkLogo}>
      <Picture {...logo} classNamePicture={styles.logoPicture} classNameImg={styles.logoImg} />
    </Link>
  )
}

export { Logotype }

import cx from 'classnames'
import { ILink } from '../../../../types/links'
import styles from './footer.module.css'

export interface IFooter {
  heading?: string
  preamble?: string
  links: Array<ILink>
  linkComponent: any
}

const Footer = ({ heading, preamble, links = [], linkComponent: Link }: IFooter) => {
  return (
    <footer className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        {preamble && <p className={cx('body', styles.preamble)}>{preamble}</p>}
        {links instanceof Array && links.length && (
          <ul className={styles.linkList}>
            {links.map((link: ILink, i: number) => (
              <li key={`${link.text}-${i}`} className={styles.linkListItem}>
                {link.isExternal ? (
                  <a href={link.href} target={link.target}>
                    {link.text}
                  </a>
                ) : (
                  <Link to={link.href}>{link.text}</Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  )
}

export { Footer }

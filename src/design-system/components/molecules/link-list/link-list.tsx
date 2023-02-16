import cx from 'classnames'
import { ILink } from '../../../../types/links'
import styles from './link-list.module.css'

export type TListDirection = 'horizontal' | 'vertical'
export interface ILinkedList {
  links: Array<ILink>
  linkComponent: any
  direction: TListDirection
}

const LinkList = ({ links = [], linkComponent: Link, direction = 'vertical' }: ILinkedList) => {
  return (
    <>
      {links instanceof Array && links.length && (
        <ul className={cx(styles.linkList, direction === 'vertical' ? styles.vertical : styles.horizontal)}>
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
    </>
  )
}

export { LinkList }

import cx from 'classnames'
import { IPicture, Picture } from '../../atoms/picture/picture'
import styles from './breadcrumbs.module.css'

export type TBreadcrumb = {
    text: string,
    url: string,
} 

export interface IBreadcrumbs {
  className?: string
  title?: string
  image?: IPicture
  breadcrumbs: Array<TBreadcrumb>
  linkComponent: any
  location: string
}

const Breadcrumbs = ({title, image, breadcrumbs, className, linkComponent: Link, location }: IBreadcrumbs ) => {
    return (
        <div className={cx(styles.breadcrumbsContainer, className ? className : '')}>
            { image && <Picture {...image} classNamePicture={styles.breadcrumbsPicture} classNameImg={styles.breadcrumbsImg} /> }
            <div className={styles.textContainer}>
                {title && <h2 className={styles.title} >{title}</h2>}
                <ul className={styles.list}>
                    {breadcrumbs.map((breadcrumb)=>(
                        <Link key={breadcrumb.url} href={breadcrumb.url} className={cx(styles.listItem, location===breadcrumb.url ? styles.listItemActive : '')}>{breadcrumb.text}</Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { Breadcrumbs }

import cx from 'classnames'
import { UILink } from '../../atoms/ui-link/ui-link'
import { IPicture, Picture } from '../../atoms/picture/picture'
import styles from './breadcrumbs.module.css'
import { ILink } from '../../../../types/links'

export type TBreadcrumb = {
    children: string,
    href: string,
} 

export interface IBreadcrumbs {
  className?: string
  title?: string
  image?: IPicture
  breadcrumbs: Array<TBreadcrumb>
  linkComponent: ILink
  location: string
}

const Breadcrumbs = ({title, image, breadcrumbs, className, location }: IBreadcrumbs ) => {
    return (
        <div className={cx(styles.breadcrumbsContainer, className ? className : '')}>
            { image && <Picture {...image} classNamePicture={styles.breadcrumbsPicture} classNameImg={styles.breadcrumbsImg} /> }
            <div className={styles.textContainer}>
                {title && <h2 className={styles.title} >{title}</h2>}
                <ul className={styles.list}>
                    {breadcrumbs.map((breadcrumb)=>(
                        <UILink {...breadcrumb} onSurface={'transparent'} size={'default'} className={cx(styles.listItem, location===breadcrumb.href ? styles.listItemActive : '')}>
                            {breadcrumb.children}
                        </UILink>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { Breadcrumbs }

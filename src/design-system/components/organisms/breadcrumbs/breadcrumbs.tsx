import cx from 'classnames'
import { UILink } from '../../atoms/ui-link/ui-link'
import { IPicture, Picture } from '../../atoms/picture/picture'
import styles from './breadcrumbs.module.css'
import { ILink } from '../../../../types/links'
import { ContentWrapper } from '../../layouts'

export type TBreadcrumbsTextWidth = 'wide' | 'narrow'

export type TBreadcrumb = {
    children: string;
    href: string;
    active?: boolean;
} 

export interface IBreadcrumbs {
  className?: string
  title?: string
  image?: IPicture
  breadcrumbs: Array<TBreadcrumb>
  linkComponent: ILink
  location: string
  textWidth?: TBreadcrumbsTextWidth
}

const Breadcrumbs = ({title, image, breadcrumbs, className, location, textWidth='wide' }: IBreadcrumbs ) => {
    return (
        <div
            className={cx(
                styles.breadcrumbsContainer,
                className ? className : '',
                {
                    [styles.minHeight]: image?.src
                }
            )}
        >
            { image && <Picture {...image} classNamePicture={styles.breadcrumbsPicture} classNameImg={styles.breadcrumbsImg} /> }
            <ContentWrapper>
                <>
                    {image?.src && title && <h2 className={cx(styles.title, styles[textWidth])} >{title}</h2>}
                    <ul className={cx(styles.list, styles[textWidth])}>
                        {breadcrumbs.map((breadcrumb) => (
                            <UILink
                                key={breadcrumb.href}
                                href={breadcrumb.active ? '' : breadcrumb.href}
                                onSurface='transparent'
                                isExternal={!breadcrumb.active}
                                size={'default'}
                                className={cx(styles.listItem, breadcrumb.active ? styles.listItemActive : '')}
                            >
                                {breadcrumb.children}
                            </UILink>
                        ))}
                    </ul>
                </>
            </ContentWrapper>
        </div>
    )
}

export { Breadcrumbs }

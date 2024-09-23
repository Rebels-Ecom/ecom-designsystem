import cx from 'classnames'
import { UILink } from '../../atoms/ui-link/ui-link'
import { IPicture, Picture } from '../../atoms/picture/picture'
import styles from './breadcrumbs.module.css'
import { ILink } from '../../../../types/links'
import { ContentWrapper, FlexContainer } from '../../layouts'
import { Icon } from '../../atoms'

export type TBreadcrumbsTextWidth = 'wide' | 'narrow'

export type TBreadcrumb = {
    children: string;
    href?: string;
    active?: boolean;
} 

export interface IBreadcrumbs {
  className?: string
  title?: string
  image?: IPicture
  breadcrumbs: Array<TBreadcrumb>
  linkComponent: any;
  location: string
  textWidth?: TBreadcrumbsTextWidth
}

// TODO: clean up
const Breadcrumbs = ({title, image, breadcrumbs, className, location, textWidth='wide', linkComponent: Link }: IBreadcrumbs ) => {
    return (
        <ContentWrapper>
            <FlexContainer gap={0.5}>
                {breadcrumbs.map((breadcrumb) => breadcrumb?.href ? (
                    <Link key={breadcrumb.href} to={breadcrumb.href} className={styles.breadcrumb} aria-label={`Go to ${breadcrumb.children === 'Start' ? 'Spendrups homepage' : breadcrumb.children}`}>
                        <span className={cx(styles.breadcrumbText, {[styles.underline]: !breadcrumb.active})}>{breadcrumb.children}</span>
                        {!breadcrumb.active && <Icon icon='icon-chevron-right' />}
                    </Link>
                ) : (
                    <span key='last-breadcrumb' className={cx(styles.breadcrumb, styles.lastBreadcrumb)}>
                        <span className={cx(styles.breadcrumbText, {[styles.underline]: !breadcrumb.active})}>{breadcrumb.children}</span>
                        {!breadcrumb.active && <Icon icon='icon-chevron-right' />}
                    </span>
                ))}
            </FlexContainer>
        </ContentWrapper>
    )
    // (
    //     <div
    //         className={cx(
    //             styles.breadcrumbsContainer,
    //             className ? className : '',
    //             {
    //                 [styles.minHeight]: image?.src
    //             }
    //         )}
    //     >
    //         { image && <Picture {...image} classNamePicture={styles.breadcrumbsPicture} classNameImg={styles.breadcrumbsImg} /> }
    //         <ContentWrapper>
    //             <>
    //                 {image?.src && title && <h2 className={cx(styles.title, styles[textWidth])} >{title}</h2>}
    //                 <div className={cx(styles.list, styles[textWidth])}>
    //                     {breadcrumbs.map((breadcrumb) => (
    //                         <UILink
    //                             key={breadcrumb.href}
    //                             href={breadcrumb.active ? '' : breadcrumb.href}
    //                             onSurface='transparent'
    //                             isExternal={!breadcrumb.active}
    //                             className={cx(styles.listItem, {[styles.listItemActive]: breadcrumb.active })}
    //                             noUnderline={breadcrumb.active}
    //                         >
    //                             {breadcrumb.children}
    //                         </UILink>
    //                     ))}
    //                 </div>
    //             </>
    //         </ContentWrapper>
    //     </div>
    // )
}

export { Breadcrumbs }

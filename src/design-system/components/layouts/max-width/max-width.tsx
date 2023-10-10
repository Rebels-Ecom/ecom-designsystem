import styles from './max-width.module.css'
import cx from 'classnames'

export type TContentMaxWidth = 'narrow' | 'wide' | 'text'

export interface IMaxWidth {
    children: React.ReactNode,
    contentMaxWidth: TContentMaxWidth
    noPadding?: boolean;
    noMargin?: boolean;
}

const MaxWidth = ({ children, contentMaxWidth, noPadding, noMargin } : IMaxWidth ) => {
    return(
        <div className={cx(styles.maxWidth, styles[contentMaxWidth], {
            [styles.noPadding]: noPadding,
            [styles.noMargin]: noMargin,
        })}>
            {children}
        </div>
    )
}

export { MaxWidth }
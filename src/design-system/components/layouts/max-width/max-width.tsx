import styles from './max-width.module.css'
import cx from 'classnames'

export type TContentMaxWidth = 'narrow' | 'wide'

export interface IMaxWidth {
    children: React.ReactNode,
    contentMaxWidth: TContentMaxWidth
}

const MaxWidth = ({ children, contentMaxWidth } : IMaxWidth ) => {
    return(
        <div className={cx(styles.maxWidth, styles[contentMaxWidth])}>
            {children}
        </div>
    )
}

export { MaxWidth }
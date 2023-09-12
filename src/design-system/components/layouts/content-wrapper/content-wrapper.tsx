import { PropsWithChildren, useMemo } from 'react';
import styles from './content-wrapper.module.css'
import cx from 'classnames';

type TContentWrapper = {
    // TODO: add support for padding
    /**
     * Sets the padding prop in rem
     * Takes either a single string, e.g. "1" or an array of string, e.g. ["1", "0"] or ["1", "0", "0", "1"] (top, right, bottom, left)
     * @default '0'
     */
    padding?: Array<string> | string;
}

// TODO: rename to ResponsiveWrapper?
const ContentWrapper = ({ padding, children, ...props}: PropsWithChildren<TContentWrapper>) => {
    const paddingValue = useMemo(() => {
        if (!padding) {
          return "";
        }
    
        if (typeof padding === "string") {
          return `${padding}rem`;
        }
    
        return padding.map(p => `${p}rem`).join(' ');

      }, [padding]);

    return(
        <div className={cx(styles.contentWrapper)} style={{ padding: paddingValue}}>
            {children}
        </div>
    )
}

export { ContentWrapper }
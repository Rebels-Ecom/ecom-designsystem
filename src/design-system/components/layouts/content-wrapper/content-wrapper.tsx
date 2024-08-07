import { PropsWithChildren, useMemo } from 'react';
import styles from './content-wrapper.module.css'
import cx from 'classnames';

type TContentWrapper = {
  id?: string;
  /**
   * Sets the padding prop in rem
   * Takes either a single number, e.g. 1 or an array of numbers, e.g. [1, 0] or [1, 0, 0, 1] (top, right, bottom, left)
   * Default is undefined, and therefore decided by styles/css
   * @default undefined
  */
  padding?: Array<number> | number;
}

// TODO: rename to ResponsiveWrapper?
const ContentWrapper = ({ padding, id = '', children }: PropsWithChildren<TContentWrapper>) => {
    const paddingValue = useMemo(() => {
        if (!padding && padding !== 0) {
          return "";
        }
    
        if (typeof padding === "number") {
          return `${padding}rem`;
        }
    
        return padding.map(p => `${p}rem`).join(' ');

      }, [padding]);

    return(
        <div id={id} className={cx(styles.contentWrapper)} style={{ padding: paddingValue}}>
            {children}
        </div>
    )
}

export { ContentWrapper }
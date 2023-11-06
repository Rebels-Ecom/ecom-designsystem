import cx from 'classnames';
import styles from './flex-item.module.css'
import { PropsWithChildren } from 'react';

export type TFlexItem = {
  /**
   * Defines the flex property per breakpoint
   */
  flex: {
    sm?: string;
    md?: string;
    lg?: string;
  };
  className?: string;
}

const FlexItem = ({ flex, className = '', children }: PropsWithChildren<TFlexItem>) => {
  const style: { [key: string]: string } = ({
    '--flex-sm': flex.sm ?? '1',
    '--flex-md': flex.md ?? '1',
    '--flex-lg': flex.lg ?? '1',
  })

  return (
    <div className={cx(styles.flexItem, className)} style={style}>
      {children && children}
    </div>
  )
}

export {
  FlexItem
}

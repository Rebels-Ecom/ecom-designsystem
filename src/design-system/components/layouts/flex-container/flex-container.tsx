import { PropsWithChildren, useMemo } from "react";
import classNames from "classnames";

import styles from './flex-container.module.css'

export type TFlexContainer = {
  /**
   * optional custom className
   * @default undefined
   */
  className?: string;
  /**
   * sets the flex-direction property
   * @default row
   */
  flexDirection?: 'row' | 'column';
  /**
   * sets the flex property, e.g. '1' or '1 0 auto'
   * @default '1'
   */
  flex?: string;
  /**
   * sets the gap property in rem
   * @default 1rem
   */
  gap?: number;
  /**
   * sets the flex-wrap property to wrap
   * @default false
   */
  wrap?: boolean;
  /**
   * sets the alignItems property
   * @default flex-start
   */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  /**
   * sets the justifyContent property
   * @default flex-start
   */
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  /**
   * sets align-self: stretch;
   */
  stretch?: boolean;
  /**
   * defines a min height in rem
   * @default 0
   */
  minHeight?: number; 
};

const FlexContainer = ({
  className,
  flexDirection = 'row',
  flex = '1',
  gap = 1,
  wrap,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  stretch,
  minHeight = 0,
  ...props
}: PropsWithChildren<TFlexContainer>) => {
  const style: { [key: string]: string } = ({
    '--flex': flex,
    '--gap': `${gap.toString()}rem`,
    '--align-items': alignItems,
    '--justify-content': justifyContent,
    '--min-height': `${minHeight}rem`,
  })
    
  return (
    <div
      style={style}
      className={classNames(className, styles.flexContainer, styles[flexDirection],
        {
          [styles.wrap]: wrap,
          [styles.stretch]: stretch
        }
      )}
    >
      {props.children}
    </div>
  );
};

export { FlexContainer }

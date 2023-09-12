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
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  /**
   * sets the justifyContent property
   * @default flex-start
   */
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
};

const FlexContainer = ({
  className,
  flexDirection = 'row',
  gap = 1,
  wrap,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  ...props
}: PropsWithChildren<TFlexContainer>) => {
  const style: { [key: string]: string } = ({
    '--gap': `${gap.toString()}rem`,
    '--align-items': alignItems,
    '--justify-content': justifyContent,
  })
    
  return (
    <div
      style={style}
      className={classNames(className, styles.flexContainer, styles[flexDirection],
        {
          [styles.wrap]: wrap,
        }
      //   {
      //   [`${rootClassName}--grow`]: props.grow,
      //   [`${rootClassName}--grow-equal`]: props.growEqual,
      //   [`${rootClassName}--center`]: props.center,
      //   [`${rootClassName}--center-items`]: props.centerItems,
      //   [`${rootClassName}--space-between`]: props.spaceBetween,
      //   [`${rootClassName}--justify-content-${props.justifyContent}`]:
      //     props.justifyContent !== undefined,
      //   [`${rootClassName}--align-items-${props.alignItems}`]:
      //     props.alignItems !== undefined,
      // }
      )}
    >
      {props.children}
    </div>
  );
};

export { FlexContainer }

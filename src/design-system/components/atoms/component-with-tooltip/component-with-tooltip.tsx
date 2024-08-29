import * as Tooltip from '@radix-ui/react-tooltip';
import cx from 'classnames';
import styles from './component-with-tooltip.module.css';
import { cloneElement, ReactElement } from 'react';

interface IComponentWithTooltip<T> {
  element: ReactElement; // Change to ReactElement
  content?: string;
  wrapperClassName?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'end' | 'start' | 'center';
}

const ComponentWithTooltip = <T,>({
  content,
  wrapperClassName,
  side,
  align,
  element: Element,
}: IComponentWithTooltip<T>) => {
  return !content ? Element : (
    <div className={cx(styles.componentWithTooltip, wrapperClassName)}>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div style={{ display: 'inline-block' }}>
              {Element}
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={styles.content}
              sideOffset={0}
              side={side ?? 'top'}
              align={align}
            >
              <span>{content}</span>
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}

export {
  ComponentWithTooltip
}
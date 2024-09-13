import * as Tooltip from '@radix-ui/react-tooltip';
import cx from 'classnames';
import styles from './component-with-tooltip.module.css';
import { cloneElement, ReactElement } from 'react';

interface IComponentWithTooltip {
  element: ReactElement;
  content?: string;
  wrapperClassName?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'end' | 'start' | 'center';
  color?: 'black' | 'pink'; // Add more as needed
}

const ComponentWithTooltip = ({
  content,
  wrapperClassName,
  side,
  align,
  element: Element,
  color = 'black'
}: IComponentWithTooltip) => {
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
              className={cx(styles.content, styles[color])}
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
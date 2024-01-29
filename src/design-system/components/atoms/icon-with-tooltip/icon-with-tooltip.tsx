import * as Tooltip from '@radix-ui/react-tooltip';
import { IIcon, Icon } from '../icon/icon';
import styles from './icon-with-tooltip.module.css';
import cx from 'classnames';

type TWithIcon = {
  icon: IIcon;
  text?: never;
}

type TWithOutIcon = {
  text: string;
  icon?: never;
}

type TTooltip = {
  content: string;
  className?: string;
} & (TWithIcon | TWithOutIcon)

const IconWithTooltip = ({ content, className, ...props }: TTooltip) => {
  return (
    <div className={cx(styles.iconWithTooltip, className)}>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className={styles.triggerButton}>
              {props.icon && (
                <Icon
                  {...props.icon}
                  size='large'
                />
              )} 
              {props.text && (
                <span className={styles.text}>{props.text}</span>
              )}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={styles.content}
              sideOffset={5}
              side={'top'}
              // align={'center'}
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
  IconWithTooltip
}


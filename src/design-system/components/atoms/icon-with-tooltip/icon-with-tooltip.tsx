import * as Tooltip from '@radix-ui/react-tooltip';
import { IIcon, Icon } from '../icon/icon';
import styles from './icon-with-tooltip.module.css';
import cx from 'classnames';

type TTooltip = {
  content: string;
  icon: IIcon;
  className?: string;
}
const IconWithTooltip = ({ content, icon, className }: TTooltip) => {
  return (
    <div className={cx(styles.iconWithTooltip, className)}>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className={styles.triggerButton}>
              <Icon
                {...icon}
                size='large'
              />
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


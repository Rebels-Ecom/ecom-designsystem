import * as Tooltip from '@radix-ui/react-tooltip';
import cx from 'classnames';
import styles from './button-with-tooltip.module.css';
import { Button, IButton } from '../button/button';

interface IButtonWithTooltip extends IButton {
  content: string;
  wrapperClassName?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'end' | 'start' | 'center';
}

const ButtonWithTooltip = ({ content, wrapperClassName, className, side, align, disabled, ...props }: IButtonWithTooltip) => {
  return disabled ? (
    <Button
        {...props}
        disabled
        className={className}
      />
  ) : (
    <div className={cx(styles.buttonWithTooltip, wrapperClassName)}>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button
              {...props}
              className={className}
            />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={styles.content}
              sideOffset={5}
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
  ButtonWithTooltip
}
import cx from 'classnames'
import styles from './alert-box.module.css'
import { Button } from '../button/button'
import { Icon } from '../icon/icon'
import { Text } from '../text/text'
import { Placeholder } from '../placeholder/placeholder'

export type TBoxColor = 'error' | 'warning' | 'information'
export type TAlertBox = {
  title: string
  buttonText?: string
  color?: TBoxColor
  className?: string
  onClick?: () => void
  loading?: boolean
  minHeight?: boolean
}

const AlertBox = ({ title, buttonText, color = 'error', className, onClick, loading, minHeight }: TAlertBox) => {
  if (loading) {
    return (
      <div
        className={cx(
          styles.alertBox,
          styles[`background-${color}`],
          {[styles.loading]: loading},
          {[styles.minHeight]: minHeight},
          className ? className : '',
        )}
      >
        <Placeholder type='p_short' />
        <Placeholder type='heading' />
        <Placeholder type='p_long' />
      </div>
    )
  }
  return (
    <div className={cx(styles.alertBox, styles[`background-${color}`], {[styles.minHeight]: minHeight}, className ? className : '')}>
      <Icon className={cx(styles.icon, styles[`background-${color}`])} icon={color === 'information' ? 'icon-info' : 'icon-alert-circle'}></Icon>
      <Text size='small'>{title}</Text>
      {buttonText && onClick && (
        <Button type='button' surface='primary' onClick={onClick} size="xx-small">
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export { AlertBox }

import cx from 'classnames'
import styles from './alert-box.module.css'
import { Button } from '../button/button'
import { Icon } from '../icon/icon'
import { Text } from '../text/text'

export type TBoxColor = 'error' | 'warning' | 'information'
export type TAlertBox = {
  title: string
  buttonText?: string
  color?: TBoxColor
  className?: string
  onClick?: () => void
}

const AlertBox = ({ title, buttonText, color = 'error', className, onClick }: TAlertBox) => {
  return (
    <div className={cx(styles.alertBox, styles[`background-${color}`], className ? className : '')}>
      <Icon className={cx(styles.icon, styles[`background-${color}`])} icon={color === 'information' ? 'icon-info' : 'icon-alert-circle'}></Icon>
      <Text>{title}</Text>
      {buttonText && onClick && (
        <Button type={'button'} surface={'primary'} onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export { AlertBox }

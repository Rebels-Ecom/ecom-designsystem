import { ContentWrapper } from '../../layouts';
import { Button } from '../button/button';
import { Icon } from '../icon/icon'
import styles from './cookie-bar.module.css'

export type TCookieBar = {
  buttonLabel: string;
  text: string;
  linkComponent: JSX.Element,
  onClick: () => void;
}

const CookieBar = ({ buttonLabel, text, linkComponent, onClick  }: TCookieBar) => {
  return (
    <div className={styles.cookieBar}>
      <ContentWrapper>
        <div className={styles.content}>
          <Icon className={styles.icon} icon='icon-info' />
          <p className={styles.text}>{text} {linkComponent}</p>
          <Button type='button' surface='tertiary' onClick={onClick}>{buttonLabel}</Button>
        </div>
      </ContentWrapper>
    </div>
  )
}

export {
  CookieBar
}
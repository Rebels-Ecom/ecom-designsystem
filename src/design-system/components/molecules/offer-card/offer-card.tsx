import cx from 'classnames'
import styles from './offer-card.module.css'
import { TIcon, Icon } from '../../atoms/icon/icon'

export interface IOfferCard {
  icon: TIcon
  heading: string
  text: string
}

const OfferCard = ({ icon, heading, text }: IOfferCard) => {
  return (
    <div className={styles.offerCard}>
      <Icon icon={icon} className={styles.icon}></Icon>
      <h4 className={styles.heading}>{heading}</h4>
      <p className={cx(styles.text, 'body')} dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

export { OfferCard }

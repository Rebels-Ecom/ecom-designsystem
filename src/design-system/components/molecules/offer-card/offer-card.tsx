import cx from 'classnames'
import styles from './offer-card.module.css'
import { TIcon, Icon } from '../../atoms/icon/icon'
import { RichTextProps } from '../../../../types/other';

export interface IOfferCard {
  icon: TIcon;
  heading: string;
  richText?: React.FC<RichTextProps>;
}

const OfferCard = ({ icon, heading, richText }: IOfferCard) => {
  return (
    <div className={styles.offerCard}>
      <Icon icon={icon} className={styles.icon}></Icon>
      <h4 className={styles.heading}>{heading}</h4>
      {richText && richText}
    </div>
  )
}

export { OfferCard }

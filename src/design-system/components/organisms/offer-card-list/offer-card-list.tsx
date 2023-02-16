import styles from './offer-card-list.module.css'
import { IOfferCard, OfferCard } from '../../molecules/offer-card/offer-card'

export interface IOfferCardList {
  list: Array<IOfferCard>
}

const OfferCardList = ({ list }: IOfferCardList) => {
  return (
    <ul className={styles.list}>
      {list.slice(0, 4).map((listItem: IOfferCard, index: number) => (
        <li key={index} className={styles.listItem}>
          <OfferCard {...listItem} />
        </li>
      ))}
    </ul>
  )
}

export { OfferCardList }

import styles from './offer-card-list.module.css'
import { IOfferCard, OfferCard } from '../../molecules/offer-card/offer-card'
import { Above, Below, ContentWrapper } from '../../layouts'
import { SwipeList, SwipeListItem } from '../swipe-list/swipe-list'

export interface IOfferCardList {
  list: Array<IOfferCard>
}

const OfferCardList = ({ list }: IOfferCardList) => {
  return (
    <>
      <Below breakpoint='md'>
        {(matches: any) => matches && (
          <SwipeList>
            {list.slice(0, 4).map((listItem: IOfferCard, index: number) => (
              <SwipeListItem key={index}>
                <OfferCard {...listItem} />
              </SwipeListItem>
            ))}
          </SwipeList>
        )}
      </Below>
      <Above breakpoint='md'>
        {(matches) => matches && (
          <ContentWrapper>
            <ul className={styles.list}>
              {list.slice(0, 4).map((listItem: IOfferCard, index: number) => (
                <li key={index} className={styles.listItem}>
                  <OfferCard {...listItem} />
                </li>
              ))}
            </ul>
          </ContentWrapper>
        )}
      </Above>
    </>
  )
}

export { OfferCardList }

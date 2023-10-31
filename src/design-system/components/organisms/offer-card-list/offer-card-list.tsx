import { IOfferCard, OfferCard } from '../../molecules/offer-card/offer-card'
import { Above, Below, ContentWrapper } from '../../layouts'
import { SwipeList, SwipeListItem } from '../swipe-list/swipe-list'
import { Carousel, CarouselItem } from '../carousel/carousel'

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
            <Carousel>
              {list.map((listItem: IOfferCard, index: number) => (
                <CarouselItem>
                  <OfferCard {...listItem} />
                </CarouselItem>
              ))}
            </Carousel>
          </ContentWrapper>
        )}
      </Above>
    </>
  )
}

export { OfferCardList }

import { IOfferCard, OfferCard } from '../../molecules/offer-card/offer-card'
import { ContentWrapper } from '../../layouts'
import { Carousel, CarouselItem } from '../carousel/carousel'

export interface IOfferCardList {
  list: Array<IOfferCard>,
  maxPerPage?: number,
}

const OfferCardList = ({ list }: IOfferCardList) => {
  return (
    <ContentWrapper>
      <Carousel breakpoints={{ lg: { perPage: 4, perMove: 1, hideArrows: false }}}>
        {list.map((listItem: IOfferCard, index: number) => (
          <CarouselItem key={index}>
            <OfferCard {...listItem} />
          </CarouselItem>
        ))}
      </Carousel>
    </ContentWrapper>
  )
}

export { OfferCardList }

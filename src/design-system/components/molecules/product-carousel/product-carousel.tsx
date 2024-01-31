import { ProductCard, TProductCard } from '../product-card/product-card'
import { Carousel } from '../../organisms'
import { CarouselItem } from '../../organisms/carousel/carousel'
import { ContentWrapper } from '../../layouts'

export interface IProductCarousel {
  productCards: Array<TProductCard>
  addToCart: CallableFunction
}

const ProductCarousel = ({ productCards, addToCart }: IProductCarousel) => {
  return (
    <ContentWrapper>
      <Carousel
        splideProps={{
          options: {
            gap: '1rem',
            autoplay: 'pause',
            pauseOnHover: true,
            intersection: {
              inView: {
                autoplay: true,
              },
              outView: {
                autoplay: false,
              },
            },
          },
        }}
        offsetArrows
      >
        {productCards.map((productCard: TProductCard, index: number) => {
          return (
            <CarouselItem key={index}>
              <ProductCard {...productCard} addToCart={addToCart} />
            </CarouselItem>
          )
        })}
      </Carousel>
    </ContentWrapper>
  )
}

export { ProductCarousel }

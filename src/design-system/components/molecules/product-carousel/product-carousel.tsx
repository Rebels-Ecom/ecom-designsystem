import { ProductCard, TProductCard } from '../product-card/product-card'
import { Carousel } from '../../organisms'
import { CarouselItem } from '../../organisms/carousel/carousel'
import { mediaQueryHelper } from '../../layouts/breakpoints/hooks'

export interface IProductCarousel {
  productCards: Array<TProductCard>
  addToCart: CallableFunction
}

const ProductCarousel = ({ productCards, addToCart }: IProductCarousel) => {
  const { isMobile } = mediaQueryHelper();

  const renderProductCards = () => productCards?.map((productCard: TProductCard, index: number) => (
    <CarouselItem key={index}>
      <ProductCard {...productCard} addToCart={addToCart} />
    </CarouselItem>
  ));

  return (
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
      padding={isMobile ? '2rem' : undefined}
      breakpoints={isMobile ? {
        sm: {
          hideArrows: true,
        }
      } : undefined}
    >
      {renderProductCards()}
    </Carousel>
  )
}

export { ProductCarousel }

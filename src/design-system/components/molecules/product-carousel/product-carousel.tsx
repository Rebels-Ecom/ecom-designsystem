import { ProductCard, TProductCard } from '../product-card/product-card'
import { Carousel } from '../../organisms'
import { CarouselItem } from '../../organisms/carousel/carousel'
import { mediaQueryHelper } from '../../layouts/breakpoints/hooks'

export interface IProductCarousel extends Pick<TProductCard, 'productArea'> {
  productCards: Array<TProductCard>
  addToCart: CallableFunction
  productsPerPageMobile?: number
  productsPerPageTablet?: number
  productsPerPageDesktop?: number
  arrowsBottom?: boolean
  offsetArrows?: boolean
}

const ProductCarousel = ({
  productCards,
  addToCart,
  productsPerPageMobile = 1,
  productsPerPageTablet = 2,
  productsPerPageDesktop = 4,
  arrowsBottom,
  offsetArrows,
  productArea
}: IProductCarousel) => {
  const { isMobile } = mediaQueryHelper()

  const renderProductCards = () =>
    productCards?.map((productCard: TProductCard, index: number) => (
      <CarouselItem key={index}>
        <ProductCard {...productCard} addToCart={addToCart} productArea={productArea} />
      </CarouselItem>
    ))

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
      arrowsBottom={arrowsBottom}
      offsetArrows={offsetArrows}
      padding={isMobile ? '2rem' : undefined}
      breakpoints={
        isMobile
          ? {
              sm: {
                hideArrows: true,
                perPage: productsPerPageMobile,
              },
            }
          : {
              md: {
                perPage: productsPerPageTablet,
              },
              lg: {
                perPage: productsPerPageDesktop,
              },
            }
      }
    >
      {renderProductCards()}
    </Carousel>
  )
}

export { ProductCarousel }

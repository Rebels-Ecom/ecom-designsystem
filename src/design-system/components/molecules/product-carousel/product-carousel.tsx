import { IProduct } from '../../../../types/product'
import { mediaQueryHelper } from '../../layouts/breakpoints/hooks'
import { Carousel } from '../../organisms'
import { CarouselItem } from '../../organisms/carousel/carousel'
import { ProductCardMiniVertical } from '../product-card-mini-vertical/product-card-mini-vertical'
import { ProductCard, TProductCard } from '../product-card/product-card'

export interface IProductCarousel extends Pick<TProductCard, 'productArea'> {
  productCards: Array<TProductCard>
  addToCart: CallableFunction
  productsPerPageMobile?: number
  productsPerPageTablet?: number
  productsPerPageDesktop?: number
  arrowsBottom?: boolean
  offsetArrows?: boolean
  noPadding?: boolean
  onNavigation?: CallableFunction
}

const ProductCarousel = ({
  productCards,
  addToCart,
  productsPerPageMobile = 1,
  productsPerPageTablet = 2,
  productsPerPageDesktop = 4,
  arrowsBottom,
  offsetArrows,
  productArea,
  noPadding,
  onNavigation,
}: IProductCarousel) => {
  const { isMobile } = mediaQueryHelper()

  const renderProductCards = () =>
    productCards?.map((productCard: TProductCard, index: number) => (
      <CarouselItem key={index}>
        {isMobile ? (
          <ProductCardMiniVertical
            {...productCard}
            addToCart={(p: IProduct) => addToCart(p, index)}
            onClick={undefined}
            onChangeQuantity={(p: IProduct) => addToCart(p, index)}
            productArea={productArea}
            imagePriority={{
              loading: index < 4 ? 'eager' : 'lazy',
              fetchPriority: index < 4 ? 'high' : 'low',
            }}
          />
        ) : (
          <ProductCard
            {...productCard}
            addToCart={(p: IProduct) => addToCart(p, index)}
            productArea={productArea}
            imagePriority={{
              loading: index < 4 ? 'eager' : 'lazy',
              fetchPriority: index < 4 ? 'high' : 'low',
            }}
          />
        )}
      </CarouselItem>
    ))

  return (
    <Carousel
      splideProps={{
        options: {
          gap: isMobile ? '0.5rem' : '1rem',
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
      onNavigation={onNavigation}
      onSlideChange={onNavigation}
      arrowsBottom={arrowsBottom}
      offsetArrows={offsetArrows}
      padding={isMobile && !noPadding ? '1rem' : undefined}
      breakpoints={
        isMobile
          ? {
              sm: {
                perPage: productsPerPageMobile,
                perMove: productsPerPageMobile,
              },
            }
          : {
              md: {
                perPage: productsPerPageTablet,
                perMove: productsPerPageTablet,
              },
              lg: {
                perPage: productsPerPageDesktop,
                perMove: productsPerPageDesktop,
              },
            }
      }
    >
      {renderProductCards()}
    </Carousel>
  )
}

export { ProductCarousel }

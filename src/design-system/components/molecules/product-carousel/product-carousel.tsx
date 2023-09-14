import { useEffect, useState, useRef } from 'react'
import styles from './product-carousel.module.css'
import cx from 'classnames'
import useSwipe from '../../../hooks/useSwipe'
import { ProductCard, TProductCard } from '../product-card/product-card'
import { useCalculateSize } from '../../../hooks/useCalculateSize'

export interface IProductCarousel { 
    productCards: Array<TProductCard>
    addToCart: CallableFunction
}

const ProductCarousel = ({ productCards, addToCart }: IProductCarousel) => {
  const [currentIndex, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const carouselSize = useCalculateSize(carouselRef) || { width: 0, height: 0 }
  const cardWidth: number = 270
  const numberOfSlides: number = carouselSize?.width && Math.ceil((productCards.length * cardWidth)/carouselSize.width)

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        slideRight()
      }
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const slideRight = () => {
    setCurrent(numberOfSlides && currentIndex === numberOfSlides - 1 ? 0 : currentIndex + 1)
  }

  const slideLeft = () => {
    setCurrent(numberOfSlides && currentIndex === 0 ? numberOfSlides - 1 : currentIndex - 1)
  }

  const swipeHandlers = useSwipe({ onSwipedLeft: () => slideRight(), onSwipedRight: () => slideLeft() })

  return (
     <div ref={carouselRef} className={styles.productCarousel} onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
        <div className={styles.carouselContentWrapper} {...swipeHandlers}>
          <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {productCards.map((productCard: TProductCard, index: number) => {
              return <ProductCard key={index} {...productCard} addToCart={addToCart} />
            })}
          </div>
        </div>
      <div className={styles.carouselPagination}>
        {Array.from(Array(numberOfSlides), (_: any, index: number) => {
          return(
            <div
              key={index}
              className={index === currentIndex ? cx(styles.paginationIndicator, styles.paginationIndicatorActive) : cx(styles.paginationIndicator)}
              onClick={() => setCurrent(index)}
            />
          )
        })}
      </div>
    </div>
  )
}

export { ProductCarousel }

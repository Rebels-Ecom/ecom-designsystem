import React, { useEffect, useState, useRef } from 'react'
import styles from './product-carousel.module.css'
import cx from 'classnames'
import useSwipe from '../../../hooks/useSwipe'
import { IProductCard, ProductCard } from '../product-card/product-card'

export interface IProductCarousel {
    productCards: Array<IProductCard>
    addToCart: CallableFunction
}

const ProductCarousel = ({ productCards, addToCart }: IProductCarousel) => {
  const [currentIndex, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

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

//   useEffect(() => {
//     console.log('width', carouselRef.current ? carouselRef.current.offsetWidth : 0);
//   }, [carouselRef.current]);


// let width = carouselRef.current && carouselRef.current.offsetWidth
// window.addEventListener("resize", e => (width = carouselRef.current && carouselRef.current.offsetWidth));
// console.log('WIDTH', width, carouselRef.current?.clientWidth)

  
//   const carouselWidth = 390;
//   const cardNumber = productCards.length;
//   const cardWidth = 300;
//   const slideNumber = carouselWidth && Math.ceil((cardNumber*cardWidth)/carouselWidth);
//   console.log('SLIDE NUMBER', slideNumber)

//   const slideRight = () => {
//     setCurrent(slideNumber && currentIndex === slideNumber - 1 ? 0 : currentIndex + 1)
//   }

//   const slideLeft = () => {
//     setCurrent(slideNumber && currentIndex === 0 ? slideNumber - 1 : currentIndex - 1)
//   }

  const slideRight = () => {
    setCurrent(currentIndex === productCards.length - 1 ? 0 : currentIndex + 1)
  }

  const slideLeft = () => {
    setCurrent(currentIndex === 0 ? productCards.length - 1 : currentIndex - 1)
  }

  const swipeHandlers = useSwipe({ onSwipedLeft: () => slideRight(), onSwipedRight: () => slideLeft() })

  return (
    <>
     <div ref={carouselRef} className={styles.productCarousel} onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(false)}>
        <div className={styles.carouselContentWrapper} {...swipeHandlers}>
          <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {productCards.map((productCard: IProductCard, index: number) => {
              return <ProductCard key={index} {...productCard} addToCart={addToCart} />
            })}
          </div>
        </div>
      <div className={styles.carouselPagination}>
        {productCards.map((_: IProductCard, index: number) => {
          return (
            <div
              key={index}
              className={index === currentIndex ? cx(styles.paginationIndicator, styles.paginationIndicatorActive) : cx(styles.paginationIndicator)}
              onClick={() => setCurrent(index)}
            />
          )
        })}
      </div>
    </div>
    </>
  )
}

export { ProductCarousel }

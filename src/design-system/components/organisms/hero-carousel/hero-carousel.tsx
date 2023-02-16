import { useEffect, useState } from 'react'
import { IHero, Hero } from '../../molecules/hero/hero'
import styles from './hero-carousel.module.css'
import cx from 'classnames'
import useSwipe from '../../../hooks/useSwipe'

export interface IHeroCarousel {
  heroComponents: Array<IHero>
}

const HeroCarousel = ({ heroComponents }: IHeroCarousel) => {
  const [currentIndex, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

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
    setCurrent(currentIndex === heroComponents.length - 1 ? 0 : currentIndex + 1)
  }

  const slideLeft = () => {
    setCurrent(currentIndex === 0 ? heroComponents.length - 1 : currentIndex - 1)
  }

  const swipeHandlers = useSwipe({ onSwipedLeft: () => slideRight(), onSwipedRight: () => slideLeft() })

  return (
    <div className={styles.heroCarousel} onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
      <div className={styles.carouselContentWrapper} {...swipeHandlers}>
        <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {heroComponents.map((hero: IHero, index: number) => {
            return <Hero key={index} {...hero} fetchPriority={index === 0 ? 'high' : 'auto'} loading={index === 0 ? 'eager' : 'lazy'} />
          })}
        </div>
      </div>
      <div className={styles.carouselPagination}>
        {heroComponents.map((_: IHero, index: number) => {
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
  )
}

export { HeroCarousel }

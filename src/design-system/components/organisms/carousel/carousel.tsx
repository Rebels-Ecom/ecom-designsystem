import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Intersection } from '@splidejs/splide-extension-intersection'
import cx from 'classnames'
import { Children, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Icon } from '../../atoms'
import styles from './carousel.module.css'
import { ICarousel } from './types'

export const CarouselItem = (props: PropsWithChildren<{}>) => (
  <SplideSlide className={styles.slide}>{props.children}</SplideSlide>
)

const Carousel = ({
  className = '',
  breakpoints,
  splideProps,
  padding,
  offsetArrows,
  arrowsBottom,
  trackClassName,
  noGrid,
  onNavigation,
  zeroOffset,
  lightArrows,
  onSlideChange,
  hidePagination,
  ...props
}: PropsWithChildren<ICarousel>) => {
  const noOfChildren = Children?.count(props.children) ?? 0
  const minChildrenToDisplayArrows = splideProps?.options?.direction === 'ttb' ? 2 : 1
  const ref = useRef<Splide | null>(null)
  const [userInitiated, setUserInitiated] = useState(false)

  useEffect(() => {
    const splide = ref.current?.splide

    const handleMoved = (index: number) => {
      if (userInitiated) {
        onNavigation?.(index)
        setUserInitiated(false)
      }
    }

    if (splide) {
      splide.on('moved', handleMoved)
    }

    return () => {
      if (splide) {
        splide.off('moved')
      }
    }
  }, [userInitiated])

  const goToPrev = () => {
    setUserInitiated(true)
  }

  const goToNext = () => {
    setUserInitiated(true)
  }

  const handleSlideChange = (_: any, newIndex: number) => {
    onSlideChange?.(newIndex)
  }

  return (
    <Splide
      ref={ref}
      hasTrack={!!splideProps?.hasTrack}
      className={cx(styles.carousel, className, { [styles.noGrid]: noGrid })}
      onMoved={handleSlideChange}
      options={{
        ...splideProps?.options,
        drag: noOfChildren > minChildrenToDisplayArrows,
        arrows: noOfChildren > minChildrenToDisplayArrows,
        pagination: !hidePagination,
        classes: {
          arrow: cx('splide__arrow', styles.arrow, { [styles.offset]: offsetArrows }),
          next: cx(
            'splide__arrow splide__arrow--next',
            styles.arrow,
            styles.right,
            arrowsBottom && styles.arrowBottom,
            {
              [styles.hasPadding]: !!padding,
              [styles.offset]: offsetArrows,
            }
          ),
          prev: cx('splide__arrow splide__arrow--prev', styles.arrow, styles.left, arrowsBottom && styles.arrowBottom, {
            [styles.hasPadding]: !!padding,
          }),
          pagination: cx('splide__pagination splide__pagination--ltr', styles.pagination, {
            [styles.hidePagination]: !!padding && noOfChildren > 14,
          }),
          page: cx('splide__pagination__page', styles.page),
        },
        mediaQuery: 'min',
        gap: splideProps?.options?.gap ?? '1rem',
        padding: padding,
        breakpoints: {
          1024: {
            perPage: breakpoints?.lg?.perPage ?? 4,
            perMove: breakpoints?.lg?.perMove ?? 1,
            arrows: noOfChildren > minChildrenToDisplayArrows ? !!!breakpoints?.lg?.hideArrows : false,
            focus: breakpoints?.lg?.dotPerItem ? 0 : undefined,
          },
          768: {
            perPage: breakpoints?.md?.perPage ?? 2,
            perMove: breakpoints?.md?.perMove ?? 1,
            arrows: noOfChildren > minChildrenToDisplayArrows ? !!!breakpoints?.md?.hideArrows : false,
            focus: breakpoints?.md?.dotPerItem ? 0 : undefined,
          },
          576: {
            perPage: breakpoints?.sm?.perPage ?? 1,
            perMove: breakpoints?.sm?.perMove ?? 1,
            arrows: noOfChildren > minChildrenToDisplayArrows ? !!!breakpoints?.sm?.hideArrows : false,
            focus: breakpoints?.sm?.dotPerItem ? 0 : undefined,
          },
          300: {
            perPage: breakpoints?.sm?.perPage ?? 1,
            perMove: breakpoints?.sm?.perMove ?? 1,
            arrows: noOfChildren > minChildrenToDisplayArrows ? !!!breakpoints?.sm?.hideArrows : false,
            focus: breakpoints?.sm?.dotPerItem ? 0 : undefined,
          },
        },
      }}
      extensions={{ Intersection }}
    >
      <SplideTrack className={trackClassName}>{props.children}</SplideTrack>
      {noOfChildren > minChildrenToDisplayArrows && (
        <div className="splide__arrows">
          <button
            className={cx('splide__arrow splide__arrow--prev', styles.arrow, styles.left, {
              [styles.hasPadding]: !!padding,
              [styles.arrowBottom]: arrowsBottom,
              [styles.offset]: offsetArrows,
              [styles.zeroOffset]: zeroOffset,
              [styles.lightArrows]: lightArrows,
            })}
            onClick={goToPrev}
          >
            <Icon
              icon={splideProps?.options?.direction === 'ttb' ? 'icon-chevron-up' : 'icon-chevron-left'}
              size="large"
            />
          </button>
          <button
            className={cx('splide__arrow splide__arrow--next', styles.arrow, styles.right, {
              [styles.hasPadding]: !!padding,
              [styles.arrowBottom]: arrowsBottom,
              [styles.offset]: offsetArrows,
              [styles.zeroOffset]: zeroOffset,
              [styles.lightArrows]: lightArrows,
            })}
            onClick={goToNext}
          >
            <Icon
              icon={splideProps?.options?.direction === 'ttb' ? 'icon-chevron-down' : 'icon-chevron-right'}
              size="large"
            />
          </button>
        </div>
      )}
    </Splide>
  )
}

export { Carousel }

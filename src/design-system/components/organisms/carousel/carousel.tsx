import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Intersection } from '@splidejs/splide-extension-intersection'
import '@splidejs/react-splide/css'
import { Children, PropsWithChildren } from 'react'
import styles from './carousel.module.css'
import cx from 'classnames'
import { ICarousel } from './types'

export const CarouselItem = (props: PropsWithChildren<{}> & {
  marginBottom?: string;
}) => {
  const style: { [key: string]: string } = ({
    '--slide-margin-bottom': props.marginBottom ?? '0'
  })
return <SplideSlide className={styles.slide} style={style}>{props.children}</SplideSlide>}

const Carousel = ({ className = '', breakpoints, splideProps, padding, offsetArrows, arrowsBottom, ...props }: PropsWithChildren<ICarousel>) => {
  const noOfChildren = Children?.count(props.children)

  return (
    <Splide
      hasTrack={!!splideProps?.hasTrack}
      className={cx(styles.carousel, className)}
      options={{
        ...splideProps?.options,
        classes: {
          arrow: cx('splide__arrow', styles.arrow, { [styles.offset]: offsetArrows }),
          next: cx('splide__arrow splide__arrow--next', styles.arrow, styles.right, arrowsBottom && styles.arrowBottom, { [styles.hasPadding]: !!padding }),
          prev: cx('splide__arrow splide__arrow--prev', styles.arrow, styles.left, arrowsBottom && styles.arrowBottom, { [styles.hasPadding]: !!padding }),
          pagination: cx('splide__pagination splide__pagination--ltr', styles.pagination, { [styles.hidePagination]: !!padding && noOfChildren > 14 }),
          page: cx('splide__pagination__page your-class-page', styles.page),
        },
        mediaQuery: 'min',
        gap: splideProps?.options?.gap ?? '1rem',
        padding: padding,
        breakpoints: {
          1024: {
            perPage: breakpoints?.lg?.perPage ?? 4,
            perMove: breakpoints?.lg?.perMove ?? 1,
            arrows: noOfChildren > 1 ? !!!breakpoints?.lg?.hideArrows : false,
            focus: breakpoints?.lg?.dotPerItem ? 0 : undefined,
          },
          768: {
            perPage: breakpoints?.md?.perPage ?? 2,
            perMove: breakpoints?.md?.perMove ?? 1,
            arrows: noOfChildren > 1 ? !!!breakpoints?.md?.hideArrows: false,
            focus: breakpoints?.md?.dotPerItem ? 0 : undefined,
          },
          576: {
            perPage: breakpoints?.sm?.perPage ?? 1,
            perMove: breakpoints?.sm?.perMove ?? 1,
            arrows: noOfChildren > 1 ? !!!breakpoints?.sm?.hideArrows : false,
            focus: breakpoints?.sm?.dotPerItem ? 0 : undefined,
          },
        },
      }}
      extensions={{ Intersection }}
    >
      <SplideTrack>{props.children}</SplideTrack>
    </Splide>
  )
}

export { Carousel }

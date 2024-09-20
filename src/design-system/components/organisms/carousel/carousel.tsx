import { Splide, SplideSlide, SplideTrack, SplideHTMLAttributes } from '@splidejs/react-splide'
import { Intersection } from '@splidejs/splide-extension-intersection'
import '@splidejs/react-splide/css'
import { Children, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from './carousel.module.css'
import cx from 'classnames'
import { ICarousel } from './types'
import { Icon, IconButton } from '../../atoms'

export const CarouselItem = (props: PropsWithChildren<{}>) => <SplideSlide className={styles.slide}>{props.children}</SplideSlide>


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
  ...props
 }: PropsWithChildren<ICarousel>) => {
  const noOfChildren = Children?.count(props.children) ?? 0;
  const ref = useRef<Splide | null>(null);
  const [userInitiated, setUserInitiated] = useState(false);

  useEffect(() => {
    const splide = ref.current?.splide;

    const handleMoved = (index: number) => {
      if (userInitiated) {
        onNavigation?.(index);
        setUserInitiated(false);
      }
    };

    if (splide) {
      splide.on('moved', handleMoved);
    }

    return () => {
      if (splide) {
        splide.off('moved');
      }
    };
  }, [userInitiated]);

  const goToPrev = () => {
    setUserInitiated(true);
  };
  
  const goToNext = () => {
    setUserInitiated(true);
  };

  return (
    <Splide
      ref={ref}
      hasTrack={!!splideProps?.hasTrack}
      className={cx(styles.carousel, className, { [styles.noGrid]: noGrid })}
      options={{
        ...splideProps?.options,
        drag: noOfChildren > 1,
        arrows: noOfChildren > 1,
        classes: {
          arrow: cx('splide__arrow', styles.arrow, {[styles.offset]: offsetArrows }),
          next: cx('splide__arrow splide__arrow--next', styles.arrow, styles.right, arrowsBottom && styles.arrowBottom, {
            [styles.hasPadding]: !!padding,
            [styles.offset]: offsetArrows
          }),
          prev: cx('splide__arrow splide__arrow--prev', styles.arrow, styles.left, arrowsBottom && styles.arrowBottom, { [styles.hasPadding]: !!padding }),
          pagination: cx('splide__pagination splide__pagination--ltr', styles.pagination, { [styles.hidePagination]: !!padding && noOfChildren > 14 }),
          page: cx('splide__pagination__page', styles.page),
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
      <SplideTrack className={trackClassName}>
        {props.children}
      </SplideTrack>
      {noOfChildren > 1 && (
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
            ><Icon icon='icon-chevron-left' size='large' /></button>
          <button
            className={cx('splide__arrow splide__arrow--next', styles.arrow, styles.right, {
              [styles.hasPadding]: !!padding,
              [styles.arrowBottom]: arrowsBottom,
              [styles.offset]: offsetArrows,
              [styles.zeroOffset]: zeroOffset,
              [styles.lightArrows]: lightArrows,
            })}
            onClick={goToNext}
          ><Icon icon='icon-chevron-right' size='large' /></button>
        </div>
      )}
    </Splide>
  )
}

export { Carousel }

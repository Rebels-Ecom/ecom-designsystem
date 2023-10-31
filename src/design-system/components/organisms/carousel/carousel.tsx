import { Splide, SplideSlide, SplideProps } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { PropsWithChildren } from 'react';
import styles from './carousel.module.css';
import cx from 'classnames';

export const CarouselItem =  (props: PropsWithChildren<{}>) => <SplideSlide>{props.children}</SplideSlide>

export interface ICarousel extends SplideProps {
  maxPerPage?: number;
}

const Carousel = ({options, maxPerPage, className = '', ...props}: PropsWithChildren<ICarousel>) => {
  return (
    <Splide
      className={cx(styles.carousel, className)}
      options={{
        mediaQuery: 'min',
        perMove: 1,
        gap: '1rem',
        breakpoints: {
          1024: {
            perPage: maxPerPage ?? 4,
          },
          768: {
            perPage: 2,
        
          },
          576: {
            perPage: 1,
      
          },
        }
      }}
    >
      {props.children}
    </Splide>
  )
}

export {
  Carousel
}

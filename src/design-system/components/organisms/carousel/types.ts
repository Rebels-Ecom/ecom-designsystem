import { SplideProps } from '@splidejs/react-splide';

type TCarouselBreakpoint = {
  /**
   * Determines the number of slides to display in a page
   */
  perPage?: number;
  /**
   * Determines the number of slides to move at once
   */
  perMove?: number;
  /**
   * If true, now arrows will be displayed
   */
  hideArrows?: boolean;
  /**
   * If true, pagination will show one dot per item
   */
  dotPerItem?: boolean;
}
export type TCarouselBreakpoints = {
  sm?: TCarouselBreakpoint,
  md?: TCarouselBreakpoint,
  lg?: TCarouselBreakpoint
}

export interface ICarousel {
  className?: string;
  trackClassName?: string;
  splideProps?: SplideProps;
  breakpoints?: TCarouselBreakpoints;
  /**
   * Determines if arrows should be placed outside of carousel
   */
  offsetArrows?: boolean;
  arrowsBottom?:boolean;
  padding?: number | string | {
    left?: number | string;
    right?: number | string;
  } | {
      top?: number | string;
      bottom?: number | string;
  };
}
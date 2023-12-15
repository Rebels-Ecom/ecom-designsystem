import { IHero, Hero } from '../../molecules/hero/hero'
import { Carousel, CarouselItem } from '../carousel/carousel'

export interface IHeroCarousel {
  heroComponents: Array<IHero>
  onSlideChange?: (index: number, prev: number) => void;
}

const HeroCarousel = ({ heroComponents, onSlideChange }: IHeroCarousel) => {
  const handleChange = (_: any, index: any, prev: any) => {
    onSlideChange?.(index, prev);
  }
  return (
    <Carousel
      splideProps={{
        options: {
          autoplay: true,
          pauseOnHover: true,
          gap: 0,
          type: 'loop'
        }
      }}
      onChange={handleChange}
      breakpoints={{
        lg: {
          perPage: 1,
        },
        md: {
          perPage: 1,
        },
      }}
    >
      {heroComponents.map((hero: IHero, index: number) => {
        return (
          <CarouselItem key={index}>
            <Hero {...hero} fetchPriority={index === 0 ? 'high' : 'auto'} loading={index === 0 ? 'eager' : 'lazy'} />
          </CarouselItem>)
      })}
    </Carousel>
  )
}

export { HeroCarousel }

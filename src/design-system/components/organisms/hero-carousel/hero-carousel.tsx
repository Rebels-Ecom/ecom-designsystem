import { Hero, IHero } from '../../molecules/hero/hero'
import { Carousel, CarouselItem } from '../carousel/carousel'

export interface IHeroCarousel {
  heroComponents: Array<IHero>
  autoplay?: boolean
  onSlideChange?: CallableFunction
}

const HeroCarousel = ({ heroComponents, autoplay = true, onSlideChange }: IHeroCarousel) => {
  return (
    <Carousel
      onSlideChange={onSlideChange}
      onNavigation={onSlideChange}
      splideProps={{
        options: {
          autoplay: autoplay,
          pauseOnHover: true,
          gap: 0,
          type: 'loop',
        },
      }}
      breakpoints={{
        lg: {
          perPage: 1,
        },
        md: {
          perPage: 1,
        },
      }}
      lightArrows
    >
      {heroComponents.map((hero: IHero, index: number) => {
        return (
          <CarouselItem key={index}>
            <Hero {...hero} fetchPriority="high" loading="eager" />
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}

export { HeroCarousel }

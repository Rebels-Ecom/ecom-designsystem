import { IHero, Hero } from '../../molecules/hero/hero'
import { Carousel, CarouselItem } from '../carousel/carousel'

export interface IHeroCarousel {
  heroComponents: Array<IHero>
  autoplay?: boolean
}

const HeroCarousel = ({ heroComponents, autoplay = true }: IHeroCarousel) => {

  return (
    <Carousel
      splideProps={{
        options: {
          autoplay: autoplay,
          pauseOnHover: true,
          gap: 0,
          type: 'loop'
        }
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
            <Hero {...hero} fetchPriority={index === 0 ? 'high' : 'auto'} loading={index === 0 ? 'eager' : 'lazy'} />
          </CarouselItem>)
      })}
    </Carousel>
  )
}

export { HeroCarousel }

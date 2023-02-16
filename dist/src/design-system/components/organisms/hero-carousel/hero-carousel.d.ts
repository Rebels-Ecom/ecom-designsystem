/// <reference types="react" />
import { IHero } from '../../molecules/hero/hero';
export interface IHeroCarousel {
    heroComponents: Array<IHero>;
}
declare const HeroCarousel: ({ heroComponents }: IHeroCarousel) => JSX.Element;
export { HeroCarousel };

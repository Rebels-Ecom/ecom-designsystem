/// <reference types="react" />
import { IBlogCard } from '../../molecules/blog-card/blog-card';
import { ITeaser } from '../../molecules/teaser/teaser';
import { IBlogCardList } from '../../organisms/blog-card-list/blog-card-list';
import { IHeroCarousel } from '../../organisms/hero-carousel/hero-carousel';
import { IOfferCardList } from '../../organisms/offer-card-list/offer-card-list';
import { INavigation } from '../../molecules/navigation/navigation';
export interface IStartPageTemplate {
    navigation: INavigation;
    hero: IHeroCarousel;
    blogList_4_Col: IBlogCardList;
    offerCardsList: IOfferCardList;
    blogFullwidth: IBlogCard;
    teaserRight: ITeaser;
    blogList_3_Col: IBlogCardList;
    teaserLeft: ITeaser;
}
declare const StartPageTemplate: ({ navigation, hero, blogList_4_Col, offerCardsList, blogFullwidth, teaserRight, blogList_3_Col, teaserLeft }: IStartPageTemplate) => JSX.Element;
export { StartPageTemplate };

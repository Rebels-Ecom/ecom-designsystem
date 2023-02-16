/// <reference types="react" />
import { IOfferCard } from '../../molecules/offer-card/offer-card';
export interface IOfferCardList {
    list: Array<IOfferCard>;
}
declare const OfferCardList: ({ list }: IOfferCardList) => JSX.Element;
export { OfferCardList };

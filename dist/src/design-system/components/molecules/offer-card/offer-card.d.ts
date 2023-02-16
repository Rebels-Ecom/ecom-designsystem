/// <reference types="react" />
import { TIcon } from '../../atoms/icon/icon';
export interface IOfferCard {
    icon: TIcon;
    heading: string;
    text: string;
}
declare const OfferCard: ({ icon, heading, text }: IOfferCard) => JSX.Element;
export { OfferCard };

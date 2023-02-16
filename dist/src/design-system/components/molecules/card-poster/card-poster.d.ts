/// <reference types="react" />
import { IPicture } from '../../atoms/picture/picture';
import { ILink } from '../../../../types/links';
export type TCardPosterSurface = 'decorativeOne' | 'decorativeTwo';
export interface ICardPoster {
    image?: IPicture;
    surface?: TCardPosterSurface;
    heading: string;
    preamble?: string;
    description?: string;
    link?: ILink;
}
declare const CardPoster: ({ image, surface, heading, preamble, description, link }: ICardPoster) => JSX.Element;
export { CardPoster };

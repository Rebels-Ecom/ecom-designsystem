/// <reference types="react" />
import { ILink } from '../../../../types/links';
import { IPicture } from '../../atoms/picture/picture';
export type TobjectFit = 'contain' | 'cover' | 'fill';
export interface ICard_16_9 {
    heading?: string;
    preamble?: string;
    link?: ILink;
    image?: IPicture;
    imageFit?: TobjectFit;
}
declare const Card_16_9: ({ heading, preamble, link, image, imageFit }: ICard_16_9) => JSX.Element;
export { Card_16_9 };

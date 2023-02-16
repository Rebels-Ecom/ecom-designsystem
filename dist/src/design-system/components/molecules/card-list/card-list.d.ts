/// <reference types="react" />
import { ILink } from '../../../../types/links';
export type TCardListSurface = 'decorativeOne' | 'decorativeTwo';
export type TCardFormat = '1:1' | '1:2';
export interface ICardList {
    surface: TCardListSurface;
    list: Array<string>;
    preamble: string;
    format: TCardFormat;
    link: ILink;
}
declare const CardList: ({ surface, list, preamble, format, link }: ICardList) => JSX.Element;
export { CardList };

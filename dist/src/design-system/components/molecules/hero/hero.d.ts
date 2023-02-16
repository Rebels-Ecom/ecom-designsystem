/// <reference types="react" />
import { IPicture, TPictureFetchPriority, TPictureLoading } from '../../atoms/picture/picture';
import { ILink } from '../../../../types/links';
export type alignContent = 'left' | 'right' | 'center';
export type heroTheme = 'light' | 'dark';
export interface IHero {
    image: IPicture;
    topHeading?: string;
    heading: string;
    preamble?: string;
    alignContent?: alignContent;
    link?: ILink;
    heroTheme?: heroTheme;
    fetchPriority?: TPictureFetchPriority;
    loading?: TPictureLoading;
}
declare const Hero: ({ topHeading, heading, preamble, image, alignContent, link, heroTheme, fetchPriority, loading }: IHero) => JSX.Element;
export { Hero };

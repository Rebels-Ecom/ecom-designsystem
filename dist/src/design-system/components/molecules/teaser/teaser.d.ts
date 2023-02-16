/// <reference types="react" />
import { ILink } from '../../../../types/links';
import { IPicture } from '../../atoms/picture/picture';
import { ITag } from '../../atoms/tag/tag';
export type TImagePosition = 'left' | 'right';
export type TTagPosition = 'left' | 'right';
export interface ITeaser {
    heading: string;
    preamble?: string;
    text: string;
    image: IPicture;
    imagePosition: TImagePosition;
    tag?: ITag;
    tagPosition?: TTagPosition;
    linkButton: ILink;
    fullWidth?: boolean;
}
declare const Teaser: ({ heading, preamble, text, image, imagePosition, tag, tagPosition, linkButton, fullWidth }: ITeaser) => JSX.Element;
export { Teaser };

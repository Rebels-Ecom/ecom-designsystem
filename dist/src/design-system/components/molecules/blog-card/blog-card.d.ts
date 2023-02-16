/// <reference types="react" />
import { IPicture } from '../../atoms/picture/picture';
import { ILink } from '../../../../types/links';
import { ITag } from '../../atoms/tag/tag';
export interface IBlogCard {
    image?: IPicture;
    tag?: ITag;
    heading?: string;
    text: string;
    link?: ILink;
    fullWidth?: boolean;
}
declare const BlogCard: ({ image, tag, heading, text, link, fullWidth }: IBlogCard) => JSX.Element;
export { BlogCard };

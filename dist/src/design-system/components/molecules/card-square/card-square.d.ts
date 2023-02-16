/// <reference types="react" />
import { IPicture } from '../../atoms/picture/picture';
import { ILink } from '../../../../types/links';
import { TSurface } from '../../../../types/surface';
export interface ICardSquare {
    surface?: TSurface;
    image?: IPicture;
    heading: string;
    preamble?: string;
    description?: string;
    link?: ILink;
}
declare const CardSquare: ({ surface, image, heading, preamble, description, link }: ICardSquare) => JSX.Element;
export { CardSquare };

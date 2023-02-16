/// <reference types="react" />
import { IPicture } from '../../atoms/picture/picture';
export interface ICardImage {
    className?: string;
    image: IPicture;
    heading: string;
    articleId: string;
    country: string;
    packaging: string;
    unitPriceStr: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
declare const CardImage: ({ className, image, heading, articleId, country, packaging, unitPriceStr, onClick }: ICardImage) => JSX.Element;
export { CardImage };

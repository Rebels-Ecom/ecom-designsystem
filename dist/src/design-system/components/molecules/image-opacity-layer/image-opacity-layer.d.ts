/// <reference types="react" />
import { IPicture } from '../../atoms/picture/picture';
export interface IImageOpacityLayer {
    image: IPicture;
    contain?: boolean;
}
declare const ImageOpacityLayer: ({ image, contain }: IImageOpacityLayer) => JSX.Element;
export { ImageOpacityLayer };

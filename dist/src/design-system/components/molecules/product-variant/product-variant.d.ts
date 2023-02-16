/// <reference types="react" />
import { IPicture } from "../../atoms/picture/picture";
export interface IProductVariant {
    productName: string;
    variantName: string;
    variantId: string;
    country: string;
    listPricePerUnitString: string;
    salesUnit: string;
    image: IPicture;
    onChange: CallableFunction;
    checked: boolean;
}
declare const ProductVariant: ({ image, productName, variantName, variantId, country, listPricePerUnitString, onChange, checked }: IProductVariant) => JSX.Element;
export { ProductVariant };

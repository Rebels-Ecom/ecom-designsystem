/// <reference types="react" />
import { IProductVariant } from '../product-variant/product-variant';
export interface IProductVariantList {
    className?: string;
    variantsList: Array<IProductVariant>;
    onVariantSelect: CallableFunction;
    selectedVariantId: string;
}
declare const ProductVariantList: ({ className, variantsList, onVariantSelect, selectedVariantId }: IProductVariantList) => JSX.Element;
export { ProductVariantList };

/// <reference types="react" />
import { IButton } from '../../atoms/button/button';
import { IProduct } from '../../../../types/product';
export interface IProductCard extends IProduct {
    product: IProduct;
    button: IButton;
    addToCart: CallableFunction;
}
declare const ProductCard: ({ productId, productName, productImageUrl, country, packaging, priceStr, price, salesUnit, itemNumberPerSalesUnit, productVariantList, button, addToCart }: IProductCard) => JSX.Element;
export { ProductCard };

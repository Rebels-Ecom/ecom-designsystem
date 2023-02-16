/// <reference types="react" />
import { IProductCard } from '../../molecules/product-card/product-card';
export type TMaxColumns = 3 | 4;
export interface IProductCardList {
    productCards: Array<IProductCard>;
    maxColumns: TMaxColumns;
}
declare const ProductCardList: ({ productCards, maxColumns }: IProductCardList) => JSX.Element;
export { ProductCardList };

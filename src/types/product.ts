import { IProductVariant } from "../design-system/components/molecules/product-variant/product-variant";

export interface IProduct {
    productId: string,
    productName: string,
    productImageUrl: string,
    country: string,
    packaging: string,
    priceStr: string,
    price:number,
    salesUnit:string,
    itemNumberPerSalesUnit: number,
    productVariantList: Array<IProductVariant>
}
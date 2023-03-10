import { IProductVariant } from '../design-system/components/molecules/product-variant/product-variant'
import { ITag } from '../design-system/components/atoms/tag/tag'

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
    tags: Array<ITag>
}
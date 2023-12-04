import { IProductVariant } from '../design-system/components/molecules/product-variant/product-variant'
import { ITag } from '../design-system/components/atoms/tag/tag'

export interface IProduct {
    productId: string,
    productName: string,
    productUrl?: string,
    productImageUrl: string,
    country?: string,
    packaging: string,
    priceStr: string,
    price:number,
    salesUnit:string,
    itemNumberPerSalesUnit: number,
    quantity: string,
    totalPrice: string,
    productVariantList: Array<IProductVariant>
    tags?: Array<ITag>
    sellerOnly?: boolean
    isLimitedProduct?: boolean
    isAccessoryPotItem?: boolean

    //Translation labels
    productIdLabel?: string
    pieceLabel?: string
    currencyLabel?: string
    priceLabel?: string
    addToCartLabel?: string
    quantityPerPackageLabel?: string
    aLabel?: string
    packagePerPalletLabel1?: string
    packagePerPalletLabel2?: string

}
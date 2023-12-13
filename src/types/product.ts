import { IProductVariant } from '../design-system/components/molecules/product-variant/product-variant'
import { ITag } from '../design-system/components/atoms/tag/tag'

export interface IProduct {
    partNo: string,
    productName: string,
    productUrl?: string,
    productImageUrl: string,
    productDescription?: string
    country?: string,
    packaging: string,
    price:number,
    priceStr: string,
    pricePerUnit: number,
    pricePerUnitString: string,
    packagePrice: number,
    packagePriceString: string,
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
    partNoLabel?: string
    unitLabel?: string
    currencyLabel?: string
    priceLabel?: string
    addToCartLabel?: string
    quantityPerPackageLabel?: string
    aLabel?: string
    packagePerPalletLabel1?: string
    packagePerPalletLabel2?: string

}
import { IProductVariant } from '../design-system/components/molecules/product-variant/product-variant'
import { ITag } from '../design-system/components/atoms/tag/tag'
import { TCampaignBox } from '../design-system/components/atoms/campaign-box/campaign-box'

export interface IProduct {
    partNo: string,
    productName: string,
    productUrl?: string,
    primaryImageUrl: string,
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
    outOfStock?: boolean
    tags?: Array<ITag>
    sellerOnly?: boolean
    activeCampaign?: TCampaignBox
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
    outOfStockLabel?: string
}
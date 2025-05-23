import { getProductPicture } from '../../../../helpers/picture-helper'

function productCardFactory(productItem: any = {}) {
  const [product] = productItem?.Variants || []

  return {
    partNo: product?.PartNo || productItem?.PartNo,
    productName: productItem?.Name,
    productUrl: productItem?.ProductUrl,
    productCategoryId: productItem?.Category,
    categoryName:
      product?.CategoryName || productItem?.CategoryName || productItem?.CategoryString || productItem?.Category,
    productBrand: product?.Brand || productItem?.Brand || productItem?.BrandName,
    brandName: product?.Brand || productItem?.Brand || productItem?.BrandName,
    primaryImageUrl: product?.PrimaryImageUrl || productItem?.PrimaryImageUrl,
    productDescription: productItem?.FullDescription,
    country:
      Array.isArray(productItem?.ShortTexts) && productItem?.ShortTexts.length
        ? productItem?.ShortTexts[0]
        : Array.isArray(product?.ShortTexts) && product?.ShortTexts.length
        ? product.ShortTexts[0]
        : '',
    packaging: product?.VariantFullName,
    price: product?.PricePerUnit || productItem?.PricePerUnit,
    priceStr: product?.PricePerUnitString || productItem?.PricePerUnitString || '0',
    pricePerUnit: product?.PricePerUnit || productItem?.PricePerUnit,
    pricePerUnitString: product?.PricePerUnitString || productItem?.PricePerUnitString || '0',
    packagePrice: productItem?.PackagePrice,
    packagePriceString: productItem?.PackagePriceString || '0',
    quantity: productItem?.Quantity ? productItem?.Quantity : 0,
    salesUnit: product?.SalesUnit || productItem?.SalesUnit,
    itemNumberPerSalesUnit: product?.UnitsPerBaseUnit || productItem?.UnitsPerBaseUnit,
    tags: product?.Tags?.map((tag: any = {}) => {
      return {
        text: tag.Text || tag.text,
        shape: tag.Shape ? tag.Shape : 'pill',
        color: tag.Class || tag.class,
      }
    }),
    productVariantList: productItem?.Variants?.map((variant: any) => {
      const [firstVariant] = productItem?.Variants
      const image = getProductPicture(variant?.PartNo, variant.PrimaryImageUrl)
      return {
        activeCampaign: variant?.ActiveCampaign,
        productName: productItem?.Name,
        variantName: variant.VariantFullName || variant.VariantName,
        variantId: variant?.PartNo,
        country: Array.isArray(variant.ShortTexts) && variant.ShortTexts.length ? variant.ShortTexts[0] : '',
        price: variant.PricePerUnit,
        priceStr: variant.PricePerUnitString || '0',
        pricePerUnit: variant.PricePerUnit,
        pricePerUnitString: variant.PricePerUnitString || '0',
        salesUnit: variant.SalesUnit,
        sellerOnly: variant.SellerOnly,
        isAccessoryPotItem: variant.AccessoryPotVariant,
        itemNumberPerSalesUnit: variant.UnitsPerBaseUnit,
        image,
        checked: firstVariant?.PartNo ? variant.VariantId === firstVariant?.PartNo : false,
        tags: variant?.Tags?.map((tag: any = {}) => {
          return {
            text: tag.Text || tag.text,
            shape: tag.Shape ? tag.Shape : 'pill',
            color: tag.Class || tag.class,
          }
        }),
        onChange: () => {},
        partNoLabel: 'Artikelnr',
        unitLabel: 'st',
        currencyLabel: 'kr',
      }
    }),
    productDetail: {},
    sortIndex: productItem?.SortIndex,
    activeCampaign: productItem?.ActiveCampaign,
    isCampaignProduct: productItem?.CampaignProduct,
    isLimitedProduct: productItem?.LimitedProduct,
    isAccessoryPotItem: productItem?.AccessoryPotItem,
    sellerOnly: productItem?.SellerOnly,
    showPrice: productItem?.ShowPrice,
    simulatedPrice: productItem?.SimulatedPrice,
    accessoryProductFlag: productItem?.AccessoryProductFlag,

    //New fields added for campaigns
    campaignTitle: productItem?.ActiveCampaign?.CampaignTitle,
    sumString: productItem?.SumString,
    confirmedDeliveryDate: productItem?.ConfirmedDeliveryDate,
    errorStatus: productItem?.ErrorStatus,
    confirmedQuantity: productItem?.ConfirmedQuantity,
    showQuantityMsg: productItem?.ShowQuantityMsg,
    showErrorLine: productItem?.ShowErrorLine,
    externalId: productItem?.ExternalId,
    discount: productItem?.Discount,
    priceCode: productItem?.PriceCode,
    outOfStock: productItem?.ShowQuantityMsg,
    useAccessoryCredits: productItem?.UseAccessoryCredits,
    showDeliveryDate: productItem?.ShowDeliveryDate,
    insertOnNewLine: productItem?.InsertOnNewLine,
    netPriceBeforeDiscount: productItem?.NetPriceBeforeDiscount,
    //Translation labels
    partNoLabel: 'Artikelnr',
    unitLabel: 'st',
    currencyLabel: 'kr',
    priceLabel: 'Listpris',
    addToCartLabel: 'Lägg till i varukorg',
    outOfStockLabel: productItem?.ConfirmedQuantity > 0 ? 'Ej tillräckligt' : 'Ej i lager',
    limitedLabel: 'Limited',
  }
}

const dummy = {
  FirstVariantName: '33cl Engångsglas',
  PricePerUnit: 22.844166666666666,
  PricePerUnitString: '22,84',
  Name: 'Wisby Pils 5,0 EKO',
  ProductUrl: '/Product/1125111',
  IsHit: true,
  IsProduct: true,
  PrimaryImageUrl: 'https://spendrups.cdn.storm.io/f58dafe9-ce3c-4005-aaa3-488dfca1a1ca',
  PartNo: '1125111',
  LimitedProduct: false,
  CampaignProduct: false,
  ActiveCampaign: null,
  Tags: [
    {
      Text: 'Eko',
      Class: 'green',
      ExternalId: '10755',
    },
    {
      Text: 'Nyhet',
      Class: 'black',
      ExternalId: '10755',
    },
  ],
  SellerOnly: true,
  AccessoryPotVariant: true,
  ShortTexts: ['Sverige'],
  Variants: [
    {
      Name: '33cl Engångsglas',
      VariantFullName: '33cl Engångsglas',
      PartNo: '1125111',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/f58dafe9-ce3c-4005-aaa3-488dfca1a1ca',
      SalesUnit: 'Kolli',
      UnitsPerBaseUnit: 24,
      Tags: [
        {
          Text: 'Eko',
          Class: 'green',
          ExternalId: '10755',
        },
        {
          Text: 'Nyhet',
          Class: 'black',
          ExternalId: '10755',
        },
      ],
      ShortTexts: ['Sverige'],
      PricePerUnit: 22.844166666666666,
      PricePerUnitString: '22,84',
      SellerOnly: true,
      AccessoryPotVariant: true,
      ActiveCampaign: null,
    },
    {
      Name: '30l FAT',
      VariantFullName: '30l FAT',
      PartNo: '1125191',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/e02e9f3e-e272-40eb-bf46-7d36404631a3',
      SalesUnit: 'Kolli',
      UnitsPerBaseUnit: 1,
      Tags: [
        {
          Text: 'Eko',
          Class: 'green',
          ExternalId: '10755',
        },
        {
          Text: 'Vegan',
          Class: 'purple',
          ExternalId: '16267',
        },
      ],
      ShortTexts: ['Sverige'],
      PricePerUnit: 1962.66,
      PricePerUnitString: '1962,66',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
    {
      Name: '1l FAT',
      VariantFullName: '1l FAT',
      PartNo: '1125192',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/e02e9f3e-e272-40eb-bf46-7d36404631a3',
      SalesUnit: 'Kolli',
      UnitsPerBaseUnit: 1,
      Tags: [
        {
          Text: 'Eko',
          Class: 'green',
          ExternalId: '10755',
        },
        {
          Text: 'Vegan',
          Class: 'purple',
          ExternalId: '16267',
        },
      ],
      ShortTexts: ['Sverige'],
      PricePerUnit: 1000,
      PricePerUnitString: '1000,00',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
  ],
  Desc: '',
  SalesUnit: 'Kolli',
  UnitsPerBaseUnit: 24,
  AccessoryPotItem: true,
  ModelName: '33cl Engångsglas',
  CategoryName: 'Öl',
  BrandName: 'Spendrups',
}

const dummyBeerProduct = {
  FirstVariantName: '',
  ListPricePerUnit: 22.677,
  ListPricePerUnitString: '22,68',
  DisplayName: 'Norrlands Guld Export 5,3',
  ProductUrl: '/Product/1105101',
  IsHit: true,
  IsProduct: true,
  PrimaryImageUrl: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb',
  ExternalId: '1105101',
  LimitedProduct: false,
  CampaignProduct: false,
  ActiveCampaign: null,
  Tags: [{ Shape: 'pill', Text: 'Vegan', Class: 'green' }],
  SellerOnly: true,
  ShortTexts: ['Sverige'],
  Variants: [
    {
      Name: '50cl Returglas',
      VariantFullName: '50cl Returglas',
      VariantId: '1105101',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 15,
      Tags: [
        { Shape: 'pill', Text: 'Vegan', Class: 'purple' },
        { Shape: 'pill', Text: 'Nyhet', Class: 'black' },
      ],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 22.677,
      ListPricePerUnitString: '22,68',
      SellerOnly: true,
      AccessoryPotVariant: true,
      ActiveCampaign: null,
    },
    {
      Name: '33cl Engångsglas',
      VariantFullName: '33cl Engångsglas',
      VariantId: '1105111',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/fca77f23-eacc-4b53-b1b4-9df3620154b4',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 24,
      Tags: [],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 16.209,
      ListPricePerUnitString: '16,21',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
    {
      Name: '33cl PET',
      VariantFullName: '33cl PET',
      VariantId: '1152339',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/57aafd54-e882-418f-8f2f-f43e98bf75e6',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 24,
      Tags: [],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 16.219,
      ListPricePerUnitString: '16,22',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
    {
      Name: '50cl PET',
      VariantFullName: '50cl PET',
      VariantId: '1152340',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/c873d755-c034-44b2-b599-b45eb67e5c71',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 24,
      Tags: [],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 23.645,
      ListPricePerUnitString: '23,65',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
    {
      Name: '30l FAT',
      VariantFullName: '30l FAT',
      VariantId: '1105191',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/09a0cd7a-ea94-4730-a46d-a36ef0669ec7',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 1,
      Tags: [],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 1404.44,
      ListPricePerUnitString: '1404,44',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
    {
      Name: '33cl Burk',
      VariantFullName: '33cl Burk',
      VariantId: '1147921',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/a9a46999-1348-480e-909a-c33a8cb7974c',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 24,
      Tags: [],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 15.561,
      ListPricePerUnitString: '15,56',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
    {
      Name: '50cl Burk',
      VariantFullName: '50cl Burk',
      VariantId: '1146323',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/985e24c0-c1de-4a30-9d2b-5928c858b514',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 24,
      Tags: [],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 22.933,
      ListPricePerUnitString: '22,93',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
  ],
  Desc: '',
  SalesUnit: 'KLI',
  UnitsPerBaseUnit: 15,
  AccessoryPotItem: false,
  ModelName: '50cl Returglas',
  CategoryName: 'Öl',
  BrandName: 'Norrlands Guld',
}

const dummyWineProduct = {
  FirstVariantName: '',
  ListPricePerUnit: 136,
  ListPricePerUnitString: '136',
  DisplayName: 'El Esteco Malbec',
  ProductUrl: '/Product/2543824',
  IsHit: true,
  IsProduct: true,
  PrimaryImageUrl: 'https://spendrups.cdn.storm.io/b2ded0dd-7eb5-4983-9d91-24b948468246',
  ExternalId: '2543824',
  LimitedProduct: false,
  CampaignProduct: false,
  ActiveCampaign: null,
  Tags: [
    {
      Text: 'Eko',
      Class: 'green',
      ExternalId: '10756',
    },
    {
      Text: 'Fairtrade',
      Class: 'blue',
      ExternalId: '10756',
    },
    {
      Text: 'Vegan',
      Class: 'purple',
      ExternalId: '16267',
    },
    {
      Text: 'Le Tag',
      Class: 'purple',
      ExternalId: '16269',
    },
    {
      Text: 'Eko',
      Class: 'purple',
      ExternalId: '16269',
    },
  ],
  SellerOnly: true,
  ShortTexts: ['Argentina'],
  Variants: [
    {
      Name: '75cl Engångsglas',
      VariantFullName: '75cl Engångsglas',
      VariantId: '2543824',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/b2ded0dd-7eb5-4983-9d91-24b948468246',
      SalesUnit: 'ST',
      UnitsPerBaseUnit: 1,
      Tags: [
        {
          Text: 'Alkoholfri',
          Class: 'green',
          ExternalId: '10755',
        },
        {
          Text: 'Fairtrade',
          Class: 'blue',
          ExternalId: '10756',
        },
        {
          Text: 'Nyhet',
          Class: 'purple',
          ExternalId: '16267',
        },
        {
          Text: 'Le Tag',
          Class: 'purple',
          ExternalId: '16269',
        },
        {
          Text: 'Eko',
          Class: 'purple',
          ExternalId: '16269',
        },
      ],
      ShortTexts: ['Argentina'],
      ListPricePerUnit: 136,
      ListPricePerUnitString: '136',
      SellerOnly: true,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
    {
      Name: '75cl Engångsglas',
      VariantFullName: '75cl Engångsglas',
      VariantId: '2543814',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/b2ded0dd-7eb5-4983-9d91-24b948468246',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 6,
      Tags: [
        {
          Text: 'Eko',
          Class: 'green',
          ExternalId: '10755',
        },
        {
          Text: 'Fairtrade',
          Class: 'blue',
          ExternalId: '10756',
        },
        {
          Text: 'Vegan',
          Class: 'purple',
          ExternalId: '16267',
        },
      ],
      ShortTexts: ['Argentina'],
      ListPricePerUnit: 136,
      ListPricePerUnitString: '136',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
  ],
  Desc: '',
  SalesUnit: 'ST',
  UnitsPerBaseUnit: 1,
  AccessoryPotItem: false,
  ModelName: '75cl Engångsglas',
  CategoryName: 'Vin',
  BrandName: 'Övriga',
}

const dummyProductNoVariants = {
  FirstVariantName: '',
  ListPricePerUnit: 22.677,
  ListPricePerUnitString: '22,68',
  DisplayName: 'Norrlands Guld Export 5,3',
  ProductUrl: '/Product/1105101',
  IsHit: true,
  IsProduct: true,
  PrimaryImageUrl: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb',
  ExternalId: '1105101',
  LimitedProduct: false,
  CampaignProduct: false,
  ActiveCampaign: null,
  Tags: [],
  SellerOnly: false,
  ShortTexts: ['Sverige'],
  Variants: [
    {
      Name: '50cl Returglas',
      VariantFullName: '50cl Returglas',
      VariantId: '1105101',
      PrimaryImageUrl: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb',
      SalesUnit: 'KLI',
      UnitsPerBaseUnit: 15,
      Tags: [],
      ShortTexts: ['Sverige'],
      ListPricePerUnit: 22.677,
      ListPricePerUnitString: '22,68',
      SellerOnly: false,
      AccessoryPotVariant: false,
      ActiveCampaign: null,
    },
  ],
  Desc: '',
  SalesUnit: 'KLI',
  UnitsPerBaseUnit: 15,
  AccessoryPotItem: false,
  ModelName: '50cl Returglas',
  CategoryName: 'Öl',
  BrandName: 'Norrlands Guld',
}

export { dummy, dummyBeerProduct, dummyProductNoVariants, dummyWineProduct, productCardFactory }

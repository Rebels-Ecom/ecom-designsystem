import{j as a,r as X}from"./jsx-runtime-03333307.js";import{P as Y}from"./product-quantity-input-356a0492.js";import{g as Z}from"./picture-helper-dd6bd3b8.js";import{c as y}from"./index-09749a66.js";import{P as ee}from"./picture-6b702374.js";import{I as re}from"./icon-button-c6bda5d8.js";import{L as ae}from"./loader-5c06d14e.js";import{f as ne}from"./defaultFallbackImage-b43581a6.js";import{c as te}from"./format-helper-580ef2bc.js";import{IconButtonStory_RemoveProduct as A}from"./icon-button.stories-0430e042.js";const ie="_cartProduct_vvr88_1",le="_whiteBackground_vvr88_15",se="_imageWrapper_vvr88_20",oe="_quantityInput_vvr88_32",ce="_contentWrapper_vvr88_54",ue="_headingWrapper_vvr88_60",de="_heading_vvr88_60",me="_textGray_vvr88_77",pe="_textPurple_vvr88_83",ge="_cardPicture_vvr88_90",Pe="_cardImage_vvr88_98",ye="_iconLink_vvr88_108",t={cartProduct:ie,whiteBackground:le,imageWrapper:se,quantityInput:oe,contentWrapper:ce,headingWrapper:ue,heading:de,textGray:me,textPurple:pe,cardPicture:ge,cardImage:Pe,iconLink:ye},v=({product:n,iconButton:e,onClickRemoveProduct:i,className:r,loading:d=!1,linkComponent:f,hidePrice:b,onClick:F,whiteBackground:R})=>{const{partNo:l,productName:h,productUrl:p,primaryImageUrl:$,country:g,packaging:P,priceStr:T,quantity:K,salesUnit:D,itemNumberPerSalesUnit:z,totalPrice:G,currencyLabel:M,unitLabel:S}=n,H=Z(l,$,"64");function Q(J){i&&i(J)}return a.jsx("div",{className:y(t.cartProduct,r||"",{[t.whiteBackground]:R}),children:d?a.jsx(ae,{visible:d,text:"Loading"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:t.imageWrapper,children:a.jsx(ee,{...H,classNamePicture:t.cardPicture,classNameImg:`${t.cardImage}`,fallbackImageUrl:ne})}),a.jsxs("div",{className:t.contentWrapper,children:[p&&f?a.jsx(f,{to:p,href:p,className:t.headingWrapper,onClick:F,children:a.jsx("h5",{className:t.heading,children:h})}):a.jsx("h5",{className:t.heading,children:h}),a.jsx("p",{className:y(t.textPurple,"bodyS"),children:b?P:`${P?`${P}:`:""} ${T?`${T} ${M??""}/${S?S.toLowerCase():""}`:""}`}),(g!==""||l!=="")&&a.jsx("p",{className:y(t.textGray,"bodyS"),children:`${l?`Art.nr. ${l}`:""} ${g&&`- ${g}`}`}),a.jsx(Y,{className:t.quantityInput,salesUnit:D,itemNumberPerSalesUnit:z,totalPrice:G,quantity:K,quantityInputId:l,disabled:!0,disabledNoBorder:!0,hidePrice:b})]}),i&&e&&a.jsx("div",{className:t.iconLink,children:a.jsx(re,{...e,type:"button",onClick:()=>Q(l),name:"Remove product"})})]})})};v.__docgenInfo={description:"@deprecated Use ProductCard instead",methods:[],displayName:"CartProduct",props:{partNo:{required:!0,tsType:{name:"string"},description:""},productName:{required:!0,tsType:{name:"string"},description:""},productUrl:{required:!1,tsType:{name:"string"},description:""},primaryImageUrl:{required:!0,tsType:{name:"string"},description:""},productDescription:{required:!1,tsType:{name:"string"},description:""},country:{required:!1,tsType:{name:"string"},description:""},packaging:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},priceStr:{required:!0,tsType:{name:"string"},description:""},pricePerUnit:{required:!0,tsType:{name:"number"},description:""},pricePerUnitString:{required:!0,tsType:{name:"string"},description:""},packagePrice:{required:!0,tsType:{name:"number"},description:""},packagePriceString:{required:!0,tsType:{name:"string"},description:""},salesUnit:{required:!0,tsType:{name:"string"},description:""},itemNumberPerSalesUnit:{required:!0,tsType:{name:"number"},description:""},quantity:{required:!0,tsType:{name:"string"},description:""},totalPrice:{required:!0,tsType:{name:"string"},description:""},productVariantList:{required:!0,tsType:{name:"Array",elements:[{name:"IProductVariant"}],raw:"Array<IProductVariant>"},description:""},outOfStock:{required:!1,tsType:{name:"boolean"},description:""},tags:{required:!1,tsType:{name:"Array",elements:[{name:"ITag"}],raw:"Array<ITag>"},description:""},sellerOnly:{required:!1,tsType:{name:"boolean"},description:""},activeCampaign:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string;
  description?: string;
  subDescription?: string;
  color?: string;
  onClick?: () => void;
  loading?: boolean;
  btnLabel?: string;
  limited?: boolean;
  hideSelectBtn?: boolean;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"subDescription",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"btnLabel",value:{name:"string",required:!1}},{key:"limited",value:{name:"boolean",required:!1}},{key:"hideSelectBtn",value:{name:"boolean",required:!1}}]}},description:""},isLimitedProduct:{required:!1,tsType:{name:"boolean"},description:""},isAccessoryPotItem:{required:!1,tsType:{name:"boolean"},description:""},partNoLabel:{required:!1,tsType:{name:"string"},description:""},unitLabel:{required:!1,tsType:{name:"string"},description:""},currencyLabel:{required:!1,tsType:{name:"string"},description:""},priceLabel:{required:!1,tsType:{name:"string"},description:""},addToCartLabel:{required:!1,tsType:{name:"string"},description:""},quantityPerPackageLabel:{required:!1,tsType:{name:"string"},description:""},aLabel:{required:!1,tsType:{name:"string"},description:""},packagePerPalletLabel1:{required:!1,tsType:{name:"string"},description:""},packagePerPalletLabel2:{required:!1,tsType:{name:"string"},description:""},outOfStockLabel:{required:!1,tsType:{name:"string"},description:""},limitedLabel:{required:!1,tsType:{name:"string"},description:""},product:{required:!0,tsType:{name:"IProduct"},description:""},iconButton:{required:!1,tsType:{name:"intersection",raw:`{
  type: 'link' | 'button' // TODO: remove link option
  icon: TIcon
  name?: string
  size?: TIconButtonSize
  isTransparent?: boolean
  className?: string
  noPadding?: boolean
  noBorder?: boolean
  round?: boolean
  disabled?: boolean
  /**
   * If a positive number (1-99) has been provided a number  will be displayed in a notification format
   * @default undefined
   */
  notification?: number
  weight?: 'normal' | 'bold'
  surface?: 'primary' | 'white'
  animate?: 'default' | 'loading' | 'updated'
} & (TWithLink | TWithoutLink)`,elements:[{name:"signature",type:"object",raw:`{
  type: 'link' | 'button' // TODO: remove link option
  icon: TIcon
  name?: string
  size?: TIconButtonSize
  isTransparent?: boolean
  className?: string
  noPadding?: boolean
  noBorder?: boolean
  round?: boolean
  disabled?: boolean
  /**
   * If a positive number (1-99) has been provided a number  will be displayed in a notification format
   * @default undefined
   */
  notification?: number
  weight?: 'normal' | 'bold'
  surface?: 'primary' | 'white'
  animate?: 'default' | 'loading' | 'updated'
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'link' | 'button'",elements:[{name:"literal",value:"'link'"},{name:"literal",value:"'button'"}],required:!0}},{key:"icon",value:{name:"union",raw:`| 'icon-alert-circle'\r
| 'icon-bell'\r
| 'icon-arrow-right'\r
| 'icon-mail'\r
| 'icon-map-pin'\r
| 'icon-menu'\r
| 'icon-x'\r
| 'icon-phone'\r
| 'icon-refresh-cw'\r
| 'icon-search'\r
| 'icon-x-circle'\r
| 'icon-plus-circle'\r
| 'icon-plus'\r
| 'icon-chevron-up'\r
| 'icon-chevron-down'\r
| 'icon-chevron-left'\r
| 'icon-chevron-right'\r
| 'icon-chevrons-left'\r
| 'icon-chevrons-right'\r
| 'icon-layers'\r
| 'icon-check'\r
| 'icon-check-circle'\r
| 'icon-user'\r
| 'icon-heart'\r
| 'icon-shopping-cart'\r
| 'icon-award'\r
| 'icon-package'\r
| 'icon-users'\r
| 'icon-facebook'\r
| 'icon-instagram'\r
| 'icon-linkedin'\r
| 'icon-clipboard'\r
| 'icon-download'\r
| 'icon-calendar'\r
| 'icon-settings'\r
| 'icon-info'\r
| 'icon-play'\r
| 'icon-archive'\r
| 'icon-file'\r
| 'icon-file-text'\r
| 'icon-message-circle'\r
| 'icon-share'\r
| 'icon-arrow-down-circle'\r
| 'icon-trash'\r
| 'icon-trash-2'\r
| 'icon-edit'\r
| 'icon-truck'\r
| 'icon-share-2'\r
| 'icon-heart-o'\r
| 'icon-heart1'\r
| 'icon-file-plus'\r
| 'icon-eye'\r
| 'icon-save'\r
| 'icon-alert-triangle'\r
| 'icon-trash-2'\r
| 'icon-minus-circle'\r
| 'icon-minus'`,elements:[{name:"literal",value:"'icon-alert-circle'"},{name:"literal",value:"'icon-bell'"},{name:"literal",value:"'icon-arrow-right'"},{name:"literal",value:"'icon-mail'"},{name:"literal",value:"'icon-map-pin'"},{name:"literal",value:"'icon-menu'"},{name:"literal",value:"'icon-x'"},{name:"literal",value:"'icon-phone'"},{name:"literal",value:"'icon-refresh-cw'"},{name:"literal",value:"'icon-search'"},{name:"literal",value:"'icon-x-circle'"},{name:"literal",value:"'icon-plus-circle'"},{name:"literal",value:"'icon-plus'"},{name:"literal",value:"'icon-chevron-up'"},{name:"literal",value:"'icon-chevron-down'"},{name:"literal",value:"'icon-chevron-left'"},{name:"literal",value:"'icon-chevron-right'"},{name:"literal",value:"'icon-chevrons-left'"},{name:"literal",value:"'icon-chevrons-right'"},{name:"literal",value:"'icon-layers'"},{name:"literal",value:"'icon-check'"},{name:"literal",value:"'icon-check-circle'"},{name:"literal",value:"'icon-user'"},{name:"literal",value:"'icon-heart'"},{name:"literal",value:"'icon-shopping-cart'"},{name:"literal",value:"'icon-award'"},{name:"literal",value:"'icon-package'"},{name:"literal",value:"'icon-users'"},{name:"literal",value:"'icon-facebook'"},{name:"literal",value:"'icon-instagram'"},{name:"literal",value:"'icon-linkedin'"},{name:"literal",value:"'icon-clipboard'"},{name:"literal",value:"'icon-download'"},{name:"literal",value:"'icon-calendar'"},{name:"literal",value:"'icon-settings'"},{name:"literal",value:"'icon-info'"},{name:"literal",value:"'icon-play'"},{name:"literal",value:"'icon-archive'"},{name:"literal",value:"'icon-file'"},{name:"literal",value:"'icon-file-text'"},{name:"literal",value:"'icon-message-circle'"},{name:"literal",value:"'icon-share'"},{name:"literal",value:"'icon-arrow-down-circle'"},{name:"literal",value:"'icon-trash'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-edit'"},{name:"literal",value:"'icon-truck'"},{name:"literal",value:"'icon-share-2'"},{name:"literal",value:"'icon-heart-o'"},{name:"literal",value:"'icon-heart1'"},{name:"literal",value:"'icon-file-plus'"},{name:"literal",value:"'icon-eye'"},{name:"literal",value:"'icon-save'"},{name:"literal",value:"'icon-alert-triangle'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-minus-circle'"},{name:"literal",value:"'icon-minus'"}],required:!0}},{key:"name",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:"'x-small' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1}},{key:"isTransparent",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"noPadding",value:{name:"boolean",required:!1}},{key:"noBorder",value:{name:"boolean",required:!1}},{key:"round",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"notification",value:{name:"number",required:!1},description:`If a positive number (1-99) has been provided a number  will be displayed in a notification format
@default undefined`},{key:"weight",value:{name:"union",raw:"'normal' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'bold'"}],required:!1}},{key:"surface",value:{name:"union",raw:"'primary' | 'white'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'white'"}],required:!1}},{key:"animate",value:{name:"union",raw:"'default' | 'loading' | 'updated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'updated'"}],required:!1}}]}},{name:"unknown"}]},description:""},onClickRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},className:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},linkComponent:{required:!1,tsType:{name:"any"},description:""},hidePrice:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"CallableFunction"},description:""},whiteBackground:{required:!1,tsType:{name:"boolean"},description:""}}};const ve={FirstVariantName:"",ListPricePerUnit:22.677,ListPricePerUnitString:"22,68",DisplayName:"Norrlands Guld Export 5,3",ProductUrl:"/Product/1105101",IsHit:!0,IsProduct:!0,PrimaryImageUrl:"https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb",ExternalId:"1105101",LimitedProduct:!1,CampaignProduct:!1,ActiveCampaign:null,Tags:[],SellerOnly:!1,ShortTexts:["Sverige"],Variants:[{Name:"50cl Returglas",VariantFullName:"50cl Returglas",VariantId:"1105101",PrimaryImageUrl:"https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb",SalesUnit:"KLI",UnitsPerBaseUnit:15,Tags:[],ShortTexts:["Sverige"],ListPricePerUnit:22.677,ListPricePerUnitString:"22,68",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"33cl Engångsglas",VariantFullName:"33cl Engångsglas",VariantId:"1105111",PrimaryImageUrl:"https://spendrups.cdn.storm.io/fca77f23-eacc-4b53-b1b4-9df3620154b4",SalesUnit:"KLI",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],ListPricePerUnit:16.209,ListPricePerUnitString:"16,21",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"33cl PET",VariantFullName:"33cl PET",VariantId:"1152339",PrimaryImageUrl:"https://spendrups.cdn.storm.io/57aafd54-e882-418f-8f2f-f43e98bf75e6",SalesUnit:"KLI",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],ListPricePerUnit:16.219,ListPricePerUnitString:"16,22",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"50cl PET",VariantFullName:"50cl PET",VariantId:"1152340",PrimaryImageUrl:"https://spendrups.cdn.storm.io/c873d755-c034-44b2-b599-b45eb67e5c71",SalesUnit:"KLI",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],ListPricePerUnit:23.645,ListPricePerUnitString:"23,65",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"30l FAT",VariantFullName:"30l FAT",VariantId:"1105191",PrimaryImageUrl:"https://spendrups.cdn.storm.io/09a0cd7a-ea94-4730-a46d-a36ef0669ec7",SalesUnit:"KLI",UnitsPerBaseUnit:1,Tags:[],ShortTexts:["Sverige"],ListPricePerUnit:1404.44,ListPricePerUnitString:"1404,44",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"33cl Burk",VariantFullName:"33cl Burk",VariantId:"1147921",PrimaryImageUrl:"https://spendrups.cdn.storm.io/a9a46999-1348-480e-909a-c33a8cb7974c",SalesUnit:"KLI",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],ListPricePerUnit:15.561,ListPricePerUnitString:"15,56",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"50cl Burk",VariantFullName:"50cl Burk",VariantId:"1146323",PrimaryImageUrl:"https://spendrups.cdn.storm.io/985e24c0-c1de-4a30-9d2b-5928c858b514",SalesUnit:"KLI",UnitsPerBaseUnit:24,Tags:[],ShortTexts:["Sverige"],ListPricePerUnit:22.933,ListPricePerUnitString:"22,93",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null}],Desc:"",SalesUnit:"KLI",UnitsPerBaseUnit:15,AccessoryPotItem:!1,ModelName:"50cl Returglas",CategoryName:"Öl",BrandName:"Norrlands Guld"},fe={FirstVariantName:"",ListPricePerUnit:136,ListPricePerUnitString:"136",DisplayName:"El Esteco Malbec",ProductUrl:"/Product/2543824",IsHit:!0,IsProduct:!0,PrimaryImageUrl:"https://spendrups.cdn.storm.io/b2ded0dd-7eb5-4983-9d91-24b948468246",ExternalId:"2543824",LimitedProduct:!1,CampaignProduct:!1,ActiveCampaign:null,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],SellerOnly:!0,ShortTexts:["Argentina"],Variants:[{Name:"75cl Engångsglas",VariantFullName:"75cl Engångsglas",VariantId:"2543824",PrimaryImageUrl:"https://spendrups.cdn.storm.io/b2ded0dd-7eb5-4983-9d91-24b948468246",SalesUnit:"ST",UnitsPerBaseUnit:1,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],ShortTexts:["Argentina"],ListPricePerUnit:136,ListPricePerUnitString:"136",SellerOnly:!0,AccessoryPotVariant:!1,ActiveCampaign:null},{Name:"75cl Engångsglas",VariantFullName:"75cl Engångsglas",VariantId:"2543814",PrimaryImageUrl:"https://spendrups.cdn.storm.io/b2ded0dd-7eb5-4983-9d91-24b948468246",SalesUnit:"KLI",UnitsPerBaseUnit:6,Tags:[{Text:"Eko",Class:"green",ExternalId:"10755"},{Text:"Fairtrade",Class:"blue",ExternalId:"10756"},{Text:"Vegan",Class:"purple",ExternalId:"16267"}],ShortTexts:["Argentina"],ListPricePerUnit:136,ListPricePerUnitString:"136",SellerOnly:!1,AccessoryPotVariant:!1,ActiveCampaign:null}],Desc:"",SalesUnit:"ST",UnitsPerBaseUnit:1,AccessoryPotItem:!1,ModelName:"75cl Engångsglas",CategoryName:"Vin",BrandName:"Övriga"},be={title:"Design System/Molecules/CartProduct",component:v},m={render:({...n})=>{const[e,i]=X.useState(!1);function r(d){console.log("Removing the product with id:",d),i(!0)}return a.jsx(v,{...n,loading:e,onClickRemoveProduct:r})}};function E(n){return n.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function he(n,e){const i=e[0].VariantId;return e.map(r=>({productName:n,variantName:r.Name,variantId:r.VariantId,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",listPricePerUnitString:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,imageUrl:r.PrimaryImageUrl,checked:r.VariantId===i,tags:E(r.Tags),onChange:()=>{}}))}function O(n){const e=n.Variants[0];return{partNo:e.VariantId,productName:n.DisplayName,productUrl:n.ProductUrl,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:E(e.Tags),quantity:"1",totalPrice:te(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:he(n.DisplayName,n.Variants),packagePrice:10,packagePriceString:"10",pricePerUnit:1,pricePerUnitString:"1"}}const W=O(ve),j=O(fe),s={...m,args:{product:W,iconButton:A.args,loading:!1,linkComponent:"a"}},o={...m,args:{product:j,iconButton:A.args,loading:!0,linkComponent:"a"}},c={...m,args:{product:W,loading:!1,linkComponent:"a"}},u={...m,args:{product:j,loading:!1,linkComponent:"a"}};var U,I,k;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...CartProductStoryTemplate,
  args: {
    product: productBeerArgs,
    iconButton: IconButtonStory_RemoveProduct.args,
    loading: false,
    linkComponent: 'a'
  }
}`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var x,q,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...CartProductStoryTemplate,
  args: {
    product: productWineArgs,
    iconButton: IconButtonStory_RemoveProduct.args,
    loading: true,
    linkComponent: 'a'
  }
}`,...(C=(q=o.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var L,N,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...CartProductStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a'
  }
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var B,V,w;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...CartProductStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a'
  }
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const Te=["CartProductStoryBeer","CartProductStoryWine","CartProduct_OrderConfirmation_Beer","CartProduct_OrderConfirmation_Wine"],Be=Object.freeze(Object.defineProperty({__proto__:null,CartProductStoryBeer:s,CartProductStoryWine:o,CartProduct_OrderConfirmation_Beer:c,CartProduct_OrderConfirmation_Wine:u,__namedExportsOrder:Te,default:be},Symbol.toStringTag,{value:"Module"}));export{s as C,o as a,v as b,c,u as d,Be as e};

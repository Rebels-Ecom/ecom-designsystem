import{r as g,j as v}from"./jsx-runtime-03333307.js";import{g as oe}from"./picture-helper-e0ae1ee4.js";import{c as l}from"./format-helper-a8a0bc10.js";import{f as se}from"./defaultFallbackImage-b43581a6.js";import{P as le}from"./product-card-horizontal-e676849e.js";import{P as ue}from"./product-card-vertical-7c0fdb9d.js";import{P as de}from"./product-card-restricted-f8da8185.js";function ce({cardDisplay:u,isRestrictedUser:q,product:T,loading:j,buttonLoading:z,disabled:L,addToCart:R,addToCartBtnLabel:E,hideCartButton:A,hidePrice:B,onChangeQuantity:b,productQuantityDisabled:P,defaultQuantity:i,onRemoveProduct:C,hideRemoveButton:D,showFavoriteIcon:H,favoriteProductsIds:_,onFavoriteIconClick:$,showAddToPurchaseListIcon:h,onSaveToPurchaseListClick:I,border:G,displaySmallImage:J,linkComponent:K,className:M,maxQuantity:d,alertBox:k,onClick:W,debounceQuantityVal:X,productArea:F,imagePriority:o,showPackaging:Y,tooltips:Z,isAddingToFavorites:Q,onVariantsButtonClick:c,onVariantChange:p}){if(!u)throw new Error("cardDisplay must be assigned");const{partNo:U,primaryImageUrl:V,pricePerUnit:r,itemNumberPerSalesUnit:w,quantity:t,priceStr:S,activeCampaign:N}=T,[ee,m]=g.useState(!1),[a,y]=g.useState({...T,productImage:oe(U,V,"120",void 0,o==null?void 0:o.loading,o==null?void 0:o.fetchPriority),quantity:s(t),pricePerUnit:r&&isFinite(r)?r:0,totalPrice:l((r&&isFinite(r)?r:0)*w*(i??s(t)?parseInt(i??s(t)):0)),selectedVariantId:U});g.useEffect(()=>{y(e=>({...e,quantity:s(t),priceStr:S,pricePerUnit:r&&isFinite(r)?r:0,totalPrice:l((r&&isFinite(r)?r:0)*w*(i??s(t)?parseInt(i??s(t)):0)),activeCampaign:N}))},[t,S,r,N]);function x(e){if(d&&e>d)return;const n={...a,quantity:e.toString(),totalPrice:l(a.pricePerUnit*a.itemNumberPerSalesUnit*e)};b?b(n):y(n)}function s(e){const n=parseInt(e);return!e||isNaN(n)?"1":n<0?"0":e}function re(){m(!0),c==null||c()}function ae(){m(!1)}function ne(e){C&&C(e)}function te(e){const n=a.partNo===e.variantId?parseInt(a.quantity):1;y(ie=>{const O={...ie,partNo:e.variantId,productImage:e.image??se,packaging:e.variantName,price:e.price,priceStr:e.priceStr,pricePerUnit:e.pricePerUnit&&isFinite(e.pricePerUnit)?e.pricePerUnit:0,pricePerUnitString:e.pricePerUnitString,salesUnit:e.salesUnit,itemNumberPerSalesUnit:e.itemNumberPerSalesUnit,totalPrice:l(e.price*e.itemNumberPerSalesUnit*n),quantity:n.toString(),selectedVariantId:e.variantId,sellerOnly:e.sellerOnly,activeCampaign:e.activeCampaign,productUrl:`/Product/${e.variantId}`};return p==null||p(O),O}),m(!1)}const f={product:a,loading:j,buttonLoading:z,disabled:L,addToCart:R,addToCartBtnLabel:E,hideCartButton:A,hidePrice:B,linkComponent:K,className:M,onClick:W,productImage:a.productImage,variantsOpen:ee,onVariantsButtonClick:re,handlePackageChange:te,selectedVariantId:a.selectedVariantId,onCloseVariants:ae,tooltips:Z,showFavoriteIcon:H,favoriteProductsIds:_,onFavoriteIconClick:$,isAddingToFavorites:Q};return u==="horizontal"?v.jsx(le,{...f,isRestrictedUser:q,cardDisplay:"horizontal",onChangeQuantity:x,productQuantityDisabled:P,defaultQuantity:i,onClickRemoveProduct:ne,hideRemoveButton:D,showAddToPurchaseListIcon:h,onSaveToPurchaseListClick:I,border:G,displaySmallImage:J,maxQuantity:d,alertBox:k,debounceQuantityVal:X,productArea:F,showPackaging:Y}):u==="vertical"?q?v.jsx(de,{cardDisplay:"vertical",...f}):v.jsx(ue,{cardDisplay:"vertical",...f,onChangeQuantity:x,productQuantityDisabled:P,defaultQuantity:i,showAddToPurchaseListIcon:h,onSaveToPurchaseListClick:I,alertBox:k,productArea:F}):null}ce.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{productImage:{required:!0,tsType:{name:"IPicture"},description:""},cardDisplay:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""},isRestrictedUser:{required:!1,tsType:{name:"boolean"},description:""},product:{required:!0,tsType:{name:"IProduct"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},buttonLoading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},hidePrice:{required:!1,tsType:{name:"boolean"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},addToCartBtnLabel:{required:!0,tsType:{name:"string"},description:""},hideCartButton:{required:!1,tsType:{name:"boolean"},description:""},onChangeQuantity:{required:!1,tsType:{name:"CallableFunction"},description:""},productQuantityDisabled:{required:!1,tsType:{name:"boolean"},description:""},defaultQuantity:{required:!1,tsType:{name:"string"},description:`Sets a custom default quantity to start from
@default 0`},onRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},hideRemoveButton:{required:!1,tsType:{name:"boolean"},description:""},showFavoriteIcon:{required:!1,tsType:{name:"boolean"},description:""},favoriteProductsIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},onFavoriteIconClick:{required:!1,tsType:{name:"CallableFunction"},description:""},isAddingToFavorites:{required:!1,tsType:{name:"boolean"},description:""},showAddToPurchaseListIcon:{required:!1,tsType:{name:"boolean"},description:""},onSaveToPurchaseListClick:{required:!1,tsType:{name:"CallableFunction"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},displaySmallImage:{required:!1,tsType:{name:"boolean"},description:""},linkComponent:{required:!1,tsType:{name:"any"},description:""},className:{required:!1,tsType:{name:"string"},description:""},maxQuantity:{required:!1,tsType:{name:"number"},description:""},alertBox:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string
  buttonText?: string
  color?: TBoxColor
  className?: string
  onClick?: () => void
  loading?: boolean
  minHeight?: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"buttonText",value:{name:"string",required:!1}},{key:"color",value:{name:"union",raw:"'error' | 'warning' | 'information'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'information'"}],required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"minHeight",value:{name:"boolean",required:!1}}]}},description:""},onClick:{required:!1,tsType:{name:"CallableFunction"},description:""},debounceQuantityVal:{required:!1,tsType:{name:"number"},description:""},productArea:{required:!1,tsType:{name:"union",raw:"'category' | 'recommended' | 'details' | 'cart' | 'inspiration'",elements:[{name:"literal",value:"'category'"},{name:"literal",value:"'recommended'"},{name:"literal",value:"'details'"},{name:"literal",value:"'cart'"},{name:"literal",value:"'inspiration'"}]},description:""},imagePriority:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  fetchPriority: 'auto' | 'high' | 'low',
  loading: 'eager' | 'lazy',
}`,signature:{properties:[{key:"fetchPriority",value:{name:"union",raw:"'auto' | 'high' | 'low'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'high'"},{name:"literal",value:"'low'"}],required:!0}},{key:"loading",value:{name:"union",raw:"'eager' | 'lazy'",elements:[{name:"literal",value:"'eager'"},{name:"literal",value:"'lazy'"}],required:!0}}]}},description:""},variantsOpen:{required:!1,tsType:{name:"boolean"},description:""},handlePackageChange:{required:!0,tsType:{name:"CallableFunction"},description:""},selectedVariantId:{required:!1,tsType:{name:"string"},description:""},onVariantsButtonClick:{required:!0,tsType:{name:"CallableFunction"},description:""},onVariantChange:{required:!1,tsType:{name:"CallableFunction"},description:""},onCloseVariants:{required:!0,tsType:{name:"CallableFunction"},description:""},tooltips:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  addToFavorites?: string;
  removeFromFavorites?: string;
  addToPurchaseList?: string;
  changeVariant?: string;
  sellerOnly?: string;
  accessoryPotItem?: string;
}`,signature:{properties:[{key:"addToFavorites",value:{name:"string",required:!1}},{key:"removeFromFavorites",value:{name:"string",required:!1}},{key:"addToPurchaseList",value:{name:"string",required:!1}},{key:"changeVariant",value:{name:"string",required:!1}},{key:"sellerOnly",value:{name:"string",required:!1}},{key:"accessoryPotItem",value:{name:"string",required:!1}}]}},description:""}}};export{ce as P};
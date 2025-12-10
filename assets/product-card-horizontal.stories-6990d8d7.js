import{r as u,j as g}from"./jsx-runtime-03333307.js";import{d as h}from"./dummy-product-213464fa.js";import{P as m}from"./horiztonal-variants-2989fb1a.js";import"./picture-helper-dd6bd3b8.js";import"./defaultFallbackImage-b43581a6.js";import"./format-helper-580ef2bc.js";import"./index-09749a66.js";import"./product-quantity-input-16f4e0c1.js";import"./input-text-e1680c6c.js";import"./form-helper-af1dc92c.js";import"./icon-a32914e5.js";import"./tags-list-30883e29.js";import"./tag-8d2e34a8.js";import"./debounce-input-b07add8b.js";import"./generic-helper-ddbede2e.js";import"./debounce-27b61785.js";import"./isSymbol-9d21be03.js";import"./useOnClickOutside-9d2c35bb.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./carousel-c1935f6a.js";import"./hooks-0265167d.js";import"./react-responsive-c4f2314e.js";import"./flex-container-7aff6506.js";import"./icon-with-tooltip-bfa653e5.js";import"./index-9d35675b.js";import"./index-145cfc81.js";import"./index-821951ec.js";import"./icon-button-aa68e962.js";import"./ui-link-974ac70a.js";import"./component-with-tooltip-5f7975e6.js";import"./placeholder-3cf73146.js";import"./picture-6b702374.js";import"./button-856a03f5.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";import"./alert-box-ef10dec6.js";import"./text-fc9325ee.js";import"./product-card-restricted-154b410f.js";import"./product-variant-list-e94c245b.js";import"./product-variant-ddb95308.js";import"./radio-button-a10aef08.js";import"./index-61679f6b.js";import"./product-card-vertical-2e4eeed6.js";import"./button-with-tooltip-60517234.js";const mr={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:m},C={render:({...o})=>{const[r,t]=u.useState(!1);function i(a){console.log("Removing the product with id:",a),t(!0)}function c(a){console.log("Current quantity:",a)}function e(a){console.log("Showing toast with product...")}return g.jsx(m,{...o,cardDisplay:"horizontal",removingProduct:r,loading:o.loading??r,addToCart:e,onChangeQuantity:c,onClickRemoveProduct:i})}};function l(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function P(o,r){return r.map((t,i)=>{var e;return{checked:((e=r==null?void 0:r[0])==null?void 0:e.VariantId)===t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"Sweden",currencyLabel:"kr",image:{id:`x-${i}`,src:t.PrimaryImageUrl,sources:[]},onChange:()=>{},partNoLabel:"x",priceStr:t.ListPricePerUnitString,productName:o,sellerOnly:!1,unitLabel:"x",variantId:t.VariantId,variantName:t.Name,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,tags:l(t.Tags)}})}function y(o){const r=o.Variants[0];return{partNo:r.VariantId,itemNumberPerSalesUnit:1,packagePrice:1,packagePriceString:"1",packaging:"33cl Engångsglas",price:1,pricePerUnit:1,pricePerUnitString:"1",priceStr:"1",primaryImageUrl:"https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb",productName:o.DisplayName,quantity:"1",salesUnit:"st",totalPrice:"1",activeCampaign:void 0,country:"Sweden",partNoLabel:"Art.nr.",priceLabel:"Pris",aLabel:"à",currencyLabel:"kr",productVariantList:P(o.DisplayName,o.Variants),unitLabel:"kolli",tags:l(r.Tags)}}const S=y(h),n={...C,args:{product:S,loading:!1,linkComponent:"a",hideCartButton:!1,showPackaging:!0,addToCart:()=>{},addToCartBtnLabel:"Add to cart",cardDisplay:"horizontal",handlePackageChange:()=>{},onCloseVariants:()=>{},onVariantsButtonClick:()=>{},productImage:{id:"",sources:[],src:""},showFavoriteIcon:!0,onFavoriteIconClick:()=>{},showAddToPurchaseListIcon:!0,productQuantityDisabled:!0}};var s,d,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: ({
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: false,
    showPackaging: true,
    addToCart: () => {},
    addToCartBtnLabel: 'Add to cart',
    cardDisplay: 'horizontal',
    handlePackageChange: () => {},
    onCloseVariants: () => {},
    onVariantsButtonClick: () => {},
    productImage: {
      id: '',
      sources: [],
      src: ''
    },
    showFavoriteIcon: true,
    onFavoriteIconClick: () => {},
    showAddToPurchaseListIcon: true,
    productQuantityDisabled: true
  } as IProductCard)
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const lr=["Product_Card_Horizontal"];export{n as Product_Card_Horizontal,lr as __namedExportsOrder,mr as default};

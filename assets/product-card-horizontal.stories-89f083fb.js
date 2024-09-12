import{r as u,j as g}from"./jsx-runtime-03333307.js";import{d as h}from"./dummy-product-d82fa475.js";import{P as m}from"./product-card-e0e290e3.js";import"./picture-helper-e0ae1ee4.js";import"./format-helper-a8a0bc10.js";import"./defaultFallbackImage-b43581a6.js";import"./product-quantity-input-b87eabed.js";import"./input-text-0d02e73b.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";import"./icon-cf6ebd85.js";import"./tags-list-dcc30c34.js";import"./tag-84e76236.js";import"./debounce-input-f51e0718.js";import"./generic-helper-87eaa4e8.js";import"./debounce-27b61785.js";import"./isSymbol-9d21be03.js";import"./flex-container-7aff6506.js";import"./icon-with-tooltip-a95bbda3.js";import"./index-9d35675b.js";import"./index-145cfc81.js";import"./index-821951ec.js";import"./picture-36d51213.js";import"./useOnClickOutside-9d2c35bb.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./carousel-906f834b.js";import"./hooks-0265167d.js";import"./react-responsive-c4f2314e.js";import"./icon-button-17f29ede.js";import"./ui-link-2df8a5b4.js";import"./placeholder-7c72702c.js";import"./alert-box-29cffed7.js";import"./button-8e3f9b10.js";import"./button.module-a43725bf.js";import"./loader-5c06d14e.js";import"./text-1a10703e.js";import"./component-with-tooltip-74101d4d.js";import"./product-card-vertical-1e614df7.js";import"./product-variant-list-74d44cb2.js";import"./product-variant-4b0f7d1f.js";import"./radio-button-a10aef08.js";import"./index-61679f6b.js";import"./button-with-tooltip-55b8a1cc.js";import"./product-card-restricted-51bb09d6.js";const mr={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:m},C={render:({...o})=>{const[r,t]=u.useState(!1);function i(a){console.log("Removing the product with id:",a),t(!0)}function c(a){console.log("Current quantity:",a)}function e(a){console.log("Showing toast with product...")}return g.jsx(m,{...o,cardDisplay:"horizontal",removingProduct:r,loading:o.loading??r,addToCart:e,onChangeQuantity:c,onClickRemoveProduct:i})}};function l(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function P(o,r){return r.map((t,i)=>{var e;return{checked:((e=r==null?void 0:r[0])==null?void 0:e.VariantId)===t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"Sweden",currencyLabel:"kr",image:{id:`x-${i}`,src:t.PrimaryImageUrl,sources:[]},onChange:()=>{},partNoLabel:"x",priceStr:t.ListPricePerUnitString,productName:o,sellerOnly:!1,unitLabel:"x",variantId:t.VariantId,variantName:t.Name,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,tags:l(t.Tags)}})}function y(o){const r=o.Variants[0];return{partNo:r.VariantId,itemNumberPerSalesUnit:1,packagePrice:1,packagePriceString:"1",packaging:"33cl Engångsglas",price:1,pricePerUnit:1,pricePerUnitString:"1",priceStr:"1",primaryImageUrl:"https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb",productName:o.DisplayName,quantity:"1",salesUnit:"st",totalPrice:"1",activeCampaign:void 0,country:"Sweden",partNoLabel:"Art.nr.",priceLabel:"Pris",aLabel:"à",currencyLabel:"kr",productVariantList:P(o.DisplayName,o.Variants),unitLabel:"kolli",tags:l(r.Tags)}}const S=y(h),n={...C,args:{product:S,loading:!1,linkComponent:"a",hideCartButton:!1,showPackaging:!0,addToCart:()=>{},addToCartBtnLabel:"Add to cart",cardDisplay:"horizontal",handlePackageChange:()=>{},onCloseVariants:()=>{},onVariantsButtonClick:()=>{},productImage:{id:"",sources:[],src:""},showFavoriteIcon:!0,onFavoriteIconClick:()=>{},showAddToPurchaseListIcon:!0,productQuantityDisabled:!0}};var s,d,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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

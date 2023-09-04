import{r as I}from"./index-6f814c40.js";import{P as T}from"./product-card-horizontal-91c2f3af.js";import{d as V,a as _}from"./dummy-product-92e9cf71.js";import{c as N}from"./format-helper-6b4b1091.js";import{a as W}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./product-quantity-input-0c8d0bb8.js";import"./input-text-da894f75.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-7e598265.js";import"./picture-helper-86177d87.js";import"./defaultFallbackImage-b43581a6.js";import"./tags-list-f8e9454d.js";import"./tag-cf40f1b7.js";import"./loader-2ea78344.js";import"./placeholder-be41db54.js";import"./picture-1385f78c.js";import"./divider-lines-9d28c35d.js";import"./icon-button-b8bc13de.js";import"./ui-link-edaab2a0.js";import"./button-90dd05d4.js";import"./button.module-06f91d76.js";const nr={title:"Design System/Molecules/ProductCardHorizontal",component:T},c={render:({...o})=>{const[r,d]=I.useState(!1);function t(e){console.log("Removing the product with id:",e),d(!0)}function k(e){console.log("Current quantity:",e)}function A(e){console.log("Showing toast with product...")}return W(T,{...o,loading:r,addToCart:A,onChangeQuantity:k,onClickRemoveProduct:t})}};function B(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function L(o,r){const d=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===d,tags:B(t.Tags),onChange:()=>{}}))}function z(o){const r=o.Variants[0];return{productId:r.VariantId,productName:o.DisplayName,productUrl:o.ProductUrl,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:B(r.Tags),quantity:"1",totalPrice:N(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:L(o.DisplayName,o.Variants)}}const H=z(V),x=z(_),n={...c,args:{product:H,loading:!1,linkComponent:"a",hideCartButton:!0}},a={...c,args:{product:x,loading:!0,linkComponent:"a"}},i={...c,args:{product:H,loading:!1,linkComponent:"a",hideRemoveButton:!0}},s={...c,args:{product:x,loading:!1,linkComponent:"a"}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: true
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var l,g,P;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: true,
    linkComponent: 'a'
  }
}`,...(P=(g=a.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var C,S,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideRemoveButton: true
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,f,U;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a'
  }
}`,...(U=(f=s.parameters)==null?void 0:f.docs)==null?void 0:U.source}}};const ar=["CartProductStoryBeer","ProductCardHorizontalStoryWine","ProductCardHorizontal_OrderConfirmation_Beer","ProductCardHorizontal_OrderConfirmation_Wine"];export{n as CartProductStoryBeer,a as ProductCardHorizontalStoryWine,i as ProductCardHorizontal_OrderConfirmation_Beer,s as ProductCardHorizontal_OrderConfirmation_Wine,ar as __namedExportsOrder,nr as default};
//# sourceMappingURL=product-card-horizontal.stories-e5a6211a.js.map

import{r as I}from"./index-6f814c40.js";import{P as T}from"./product-card-horizontal-821895ce.js";import{b as N,a as V}from"./dummy-product-117119f6.js";import{c as _}from"./format-helper-6b4b1091.js";import{a as W}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./product-quantity-input-c54edf51.js";import"./input-text-4314ba0f.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-af819d0c.js";import"./picture-helper-86177d87.js";import"./defaultFallbackImage-b43581a6.js";import"./tags-list-c02b4de0.js";import"./tag-4d467d25.js";import"./loader-ce89f5e5.js";import"./placeholder-13465f94.js";import"./divider-lines-71f4f756.js";import"./picture-097a8d40.js";import"./icon-button-c17d8174.js";import"./ui-link-1bd4bf5e.js";import"./motion-354a1bac.js";import"./button-df2f483d.js";import"./button.module-3bdf7fd3.js";const ar={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCartButton","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:T},d={render:({...o})=>{const[r,c]=I.useState(!1);function t(e){console.log("Removing the product with id:",e),c(!0)}function k(e){console.log("Current quantity:",e)}function A(e){console.log("Showing toast with product...")}return W(T,{...o,removingProduct:o.removingProduct,loading:o.loading??r,addToCart:A,onChangeQuantity:k,onClickRemoveProduct:t})}};function B(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function L(o,r){const c=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===c,tags:B(t.Tags),onChange:()=>{}}))}function x(o){const r=o.Variants[0];return{productId:r.VariantId,productName:o.DisplayName,productUrl:o.ProductUrl,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:B(r.Tags),quantity:"1",totalPrice:_(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:L(o.DisplayName,o.Variants)}}const z=x(N),H=x(V),n={...d,args:{product:z,loading:!1,linkComponent:"a",hideCartButton:!0}},a={...d,args:{product:H,loading:!0,linkComponent:"a"}},i={...d,args:{product:z,loading:!1,linkComponent:"a",hideRemoveButton:!0}},s={...d,args:{product:H,loading:!1,linkComponent:"a"}};var m,u,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: true
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,g,P;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(U=(f=s.parameters)==null?void 0:f.docs)==null?void 0:U.source}}};const ir=["CartProductStoryBeer","ProductCardHorizontalStoryWine","ProductCardHorizontal_OrderConfirmation_Beer","ProductCardHorizontal_OrderConfirmation_Wine"];export{n as CartProductStoryBeer,a as ProductCardHorizontalStoryWine,i as ProductCardHorizontal_OrderConfirmation_Beer,s as ProductCardHorizontal_OrderConfirmation_Wine,ir as __namedExportsOrder,ar as default};
//# sourceMappingURL=product-card-horizontal.stories-84bce410.js.map

import{r as I}from"./index-6f814c40.js";import{P as T}from"./product-card-horizontal-ee0cf65e.js";import{b as N,a as V}from"./dummy-product-117119f6.js";import{c as _}from"./format-helper-6b4b1091.js";import{a as W}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./product-quantity-input-e815c7e9.js";import"./input-text-e07cfb54.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-0e1526c5.js";import"./picture-helper-86177d87.js";import"./defaultFallbackImage-b43581a6.js";import"./tags-list-f8e9454d.js";import"./tag-cf40f1b7.js";import"./loader-2ea78344.js";import"./placeholder-be41db54.js";import"./divider-lines-71f4f756.js";import"./picture-097a8d40.js";import"./icon-button-2ff9e2ed.js";import"./ui-link-8e83d4a8.js";import"./button-5413bed3.js";import"./button.module-1c01dc69.js";const nr={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCartButton","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:T},d={render:({...o})=>{const[r,c]=I.useState(!1);function t(e){console.log("Removing the product with id:",e),c(!0)}function k(e){console.log("Current quantity:",e)}function A(e){console.log("Showing toast with product...")}return W(T,{...o,removingProduct:o.removingProduct,loading:o.loading??r,addToCart:A,onChangeQuantity:k,onClickRemoveProduct:t})}};function B(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function L(o,r){const c=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===c,tags:B(t.Tags),onChange:()=>{}}))}function x(o){const r=o.Variants[0];return{productId:r.VariantId,productName:o.DisplayName,productUrl:o.ProductUrl,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:B(r.Tags),quantity:"1",totalPrice:_(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:L(o.DisplayName,o.Variants)}}const z=x(N),H=x(V),n={...d,args:{product:z,loading:!1,linkComponent:"a",hideCartButton:!0}},a={...d,args:{product:H,loading:!0,linkComponent:"a"}},i={...d,args:{product:z,loading:!1,linkComponent:"a",hideRemoveButton:!0}},s={...d,args:{product:H,loading:!1,linkComponent:"a"}};var u,m,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: true
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,g,P;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
//# sourceMappingURL=product-card-horizontal.stories-f2c63333.js.map

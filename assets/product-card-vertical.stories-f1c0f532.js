import{P as V}from"./product-card-vertical-8c2e562f.js";import{c as C}from"./format-helper-6b4b1091.js";import{a as I,d as N}from"./dummy-product-117119f6.js";import{PictureStoryBeer as f}from"./picture.stories-818ab1c7.js";import{a as x}from"./jsx-runtime-76c5c2e2.js";import"./product-quantity-input-2d54494a.js";import"./input-text-92e9fb9d.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-99d60fba.js";import"./defaultFallbackImage-b43581a6.js";import"./product-variant-list-e7399d66.js";import"./button-67240aa6.js";import"./button.module-3bdf7fd3.js";import"./loader-ce89f5e5.js";import"./product-variant-1409f12c.js";import"./divider-lines-71f4f756.js";import"./radio-button-14f33c2f.js";import"./picture-097a8d40.js";import"./picture-helper-86177d87.js";import"./tags-list-c02b4de0.js";import"./tag-4d467d25.js";import"./placeholder-13465f94.js";import"./pang-f66faff3.js";const tr={title:"Design System/Molecules/ProductCardVertical",component:V},s={render:({...e})=>{function r(c){console.log("Showing toast with product...")}return x(V,{...e,addToCart:r})}};function y(e){return e.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function A(e,r){const c=r[0].VariantId;return r.map(t=>({productName:e,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===c,tags:y(t.Tags),onChange:()=>{}}))}function U(e){const r=e.Variants[0];return{productId:r.VariantId,productUrl:e.ProductUrl,productName:e.DisplayName,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:y(r.Tags),quantity:"1",totalPrice:C(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:A(e.DisplayName,e.Variants)}}const L=U(I),T=U(N),h=f.args,o={...s,args:{product:L,productImage:h}},a={...s,args:{product:T,productImage:h}},i={...s,args:{product:T,loading:!0}};var n,d,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productNoVariantsArgs,
    productImage: productImage
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,P,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productNoVariantsArgs,
    loading: true
  }
}`,...(S=(P=i.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const er=["ProductCardVerticalStory","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Loading"];export{o as ProductCardVerticalStory,i as ProductCardVerticalStory_Loading,a as ProductCardVerticalStory_NoVariants,er as __namedExportsOrder,tr as default};
//# sourceMappingURL=product-card-vertical.stories-f1c0f532.js.map

import{P as V}from"./product-card-vertical-647053c0.js";import{c as C}from"./format-helper-6b4b1091.js";import{a as I,d as N}from"./dummy-product-117119f6.js";import{PictureStoryBeer as f}from"./picture.stories-05fb3950.js";import{a as x}from"./jsx-runtime-76c5c2e2.js";import"./product-quantity-input-c54edf51.js";import"./input-text-4314ba0f.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-af819d0c.js";import"./defaultFallbackImage-b43581a6.js";import"./product-variant-list-f2b6d6a3.js";import"./button-603bb392.js";import"./button.module-1c01dc69.js";import"./product-variant-1409f12c.js";import"./divider-lines-71f4f756.js";import"./radio-button-14f33c2f.js";import"./picture-097a8d40.js";import"./picture-helper-86177d87.js";import"./tags-list-68a0cb66.js";import"./tag-dd67dc89.js";import"./placeholder-be41db54.js";const v={title:"Design System/Molecules/ProductCardVertical",component:V},s={render:({...e})=>{function r(c){console.log("Showing toast with product...")}return x(V,{...e,addToCart:r})}};function y(e){return e.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function A(e,r){const c=r[0].VariantId;return r.map(t=>({productName:e,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===c,tags:y(t.Tags),onChange:()=>{}}))}function U(e){const r=e.Variants[0];return{productId:r.VariantId,productUrl:e.ProductUrl,productName:e.DisplayName,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:y(r.Tags),quantity:"1",totalPrice:C(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:A(e.DisplayName,e.Variants)}}const L=U(I),T=U(N),h=f.args,o={...s,args:{product:L,productImage:h}},a={...s,args:{product:T,productImage:h}},i={...s,args:{product:T,loading:!0}};var n,d,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(S=(P=i.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const rr=["ProductCardVerticalStory","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Loading"];export{o as ProductCardVerticalStory,i as ProductCardVerticalStory_Loading,a as ProductCardVerticalStory_NoVariants,rr as __namedExportsOrder,v as default};
//# sourceMappingURL=product-card-vertical.stories-4475ee3a.js.map

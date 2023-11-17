import{P as N}from"./product-card-vertical-9ad4a3f0.js";import{c as _}from"./format-helper-6b4b1091.js";import{a as x,d as w}from"./dummy-product-117119f6.js";import{PictureStoryBeer as W}from"./picture.stories-818ab1c7.js";import{a as k}from"./jsx-runtime-76c5c2e2.js";import"./product-quantity-input-162cd148.js";import"./input-text-68824efb.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-17f6a5b2.js";import"./defaultFallbackImage-b43581a6.js";import"./product-variant-list-c0391167.js";import"./button-689f1284.js";import"./button.module-3bdf7fd3.js";import"./loader-ce89f5e5.js";import"./product-variant-1409f12c.js";import"./divider-lines-71f4f756.js";import"./radio-button-14f33c2f.js";import"./picture-097a8d40.js";import"./picture-helper-86177d87.js";import"./tags-list-c02b4de0.js";import"./tag-4d467d25.js";import"./placeholder-13465f94.js";import"./icon-button-1f1dd6ef.js";import"./ui-link-da2491c1.js";import"./motion-354a1bac.js";import"./pang-f66faff3.js";const mr={title:"Design System/Molecules/ProductCardVertical",component:N},e={render:({...o})=>{function r(p){console.log("Showing toast with product...")}return k(N,{...o,addToCart:r})}};function f(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function B(o,r){const p=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===p,tags:f(t.Tags),onChange:()=>{}}))}function L(o){const r=o.Variants[0];return{productId:r.VariantId,productUrl:o.ProductUrl,productName:o.DisplayName,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:f(r.Tags),quantity:"1",totalPrice:_(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:B(o.DisplayName,o.Variants)}}const u=L(x),b=L(w),a=W.args,c={...e,args:{product:u,productImage:a}},s={...e,args:{product:b,productImage:a}},i={...e,args:{product:u,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!0}},n={...e,args:{product:u,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!1}},d={...e,args:{product:u,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!0,showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var m,l,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage
  }
}`,...(g=(l=c.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var P,S,I;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productNoVariantsArgs,
    productImage: productImage
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var V,h,y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true,
    isFavoriteIconActive: true
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,T,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true,
    isFavoriteIconActive: false
  }
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var U,v,F;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true,
    isFavoriteIconActive: true,
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: () => {
      console.log('Add to purchase list...');
    }
  }
}`,...(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const lr=["ProductCardVerticalStory","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Favorite_Active","ProductCardVerticalStory_Favorite","ProductCardVerticalStory_AddToPurchaseList"];export{c as ProductCardVerticalStory,d as ProductCardVerticalStory_AddToPurchaseList,n as ProductCardVerticalStory_Favorite,i as ProductCardVerticalStory_Favorite_Active,s as ProductCardVerticalStory_NoVariants,lr as __namedExportsOrder,mr as default};
//# sourceMappingURL=product-card-vertical.stories-674a1abe.js.map

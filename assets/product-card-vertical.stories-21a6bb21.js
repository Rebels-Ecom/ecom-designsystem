import{P as N}from"./product-card-vertical-b2782479.js";import{c as _}from"./format-helper-6b4b1091.js";import{a as x,b as w}from"./dummy-product-92e9cf71.js";import{PictureStoryBeer as W}from"./picture.stories-b9fdbc7d.js";import{j as k}from"./jsx-runtime-a3a6c0b8.js";import"./product-quantity-input-701dd205.js";import"./input-text-03d26b16.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./form-helper-ce65ae5e.js";import"./icon-b918f330.js";import"./defaultFallbackImage-b43581a6.js";import"./product-variant-list-4cc188f1.js";import"./button-93555bd8.js";import"./button.module-d4e6cb42.js";import"./loader-72deb8c4.js";import"./product-variant-2a30c4d0.js";import"./radio-button-611b19a6.js";import"./picture-78f09330.js";import"./tags-list-5108b032.js";import"./tag-fac2d6a3.js";import"./placeholder-0f82f781.js";import"./icon-button-b65e8e62.js";import"./ui-link-90f48b0d.js";import"./motion-54668070.js";import"./pang-f66faff3.js";const dr={title:"Design System/Molecules/ProductCardVertical",component:N},o={render:({...e})=>{function r(p){console.log("Showing toast with product...")}return k(N,{...e,addToCart:r})}};function f(e){return e.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function B(e,r){const p=r[0].VariantId;return r.map(t=>({productName:e,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===p,tags:f(t.Tags),onChange:()=>{}}))}function L(e){const r=e.Variants[0];return{partNo:r.VariantId,productUrl:e.ProductUrl,productName:e.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:f(r.Tags),quantity:"1",totalPrice:_(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:B(e.DisplayName,e.Variants)}}const u=L(x),b=L(w),a=W.args,c={...o,args:{product:u,productImage:a}},s={...o,args:{product:b,productImage:a}},i={...o,args:{product:u,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!0}},n={...o,args:{product:u,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!1}},d={...o,args:{product:u,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!0,showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var m,l,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(F=(v=d.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const ur=["ProductCardVerticalStory","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Favorite_Active","ProductCardVerticalStory_Favorite","ProductCardVerticalStory_AddToPurchaseList"];export{c as ProductCardVerticalStory,d as ProductCardVerticalStory_AddToPurchaseList,n as ProductCardVerticalStory_Favorite,i as ProductCardVerticalStory_Favorite_Active,s as ProductCardVerticalStory_NoVariants,ur as __namedExportsOrder,dr as default};

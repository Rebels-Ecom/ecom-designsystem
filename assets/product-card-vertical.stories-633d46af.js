import{P as w}from"./product-card-vertical-f9179942.js";import{c as v}from"./format-helper-a8a0bc10.js";import{a as k,b as B}from"./dummy-product-d82fa475.js";import{PictureStoryBeer as b}from"./picture.stories-7b565e38.js";import{j as E}from"./jsx-runtime-03333307.js";import"./product-quantity-input-e9877bb0.js";import"./input-text-6778a0ec.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";import"./icon-e3522fc5.js";import"./defaultFallbackImage-b43581a6.js";import"./product-variant-list-c4ffb0be.js";import"./product-variant-9f1ad844.js";import"./radio-button-8c0d660d.js";import"./picture-99a9456d.js";import"./flex-container-7aff6506.js";import"./icon-with-tooltip-f1c3a3e7.js";import"./index-145cfc81.js";import"./index-821951ec.js";import"./useOnClickOutside-9d2c35bb.js";import"./icon-button-4ba5bdac.js";import"./ui-link-94ae867e.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./index-61679f6b.js";import"./tags-list-dcc30c34.js";import"./tag-84e76236.js";import"./placeholder-5b523d99.js";import"./button-1a287b34.js";import"./button.module-16a60bae.js";import"./loader-5c06d14e.js";import"./Content9-b09c4254.js";import"./pang-f66faff3.js";const Ir={title:"Design System/Molecules/ProductCardVertical",component:w},e={render:({...o})=>{function r(m){console.log("Showing toast with product...")}return E.jsx(w,{...o,addToCart:r})}};function W(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function K(o,r){const m=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===m,tags:W(t.Tags),onChange:()=>{}}))}function j(o){const r=o.Variants[0];return{partNo:r.VariantId,productUrl:o.ProductUrl,productName:o.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:W(r.Tags),quantity:"1",totalPrice:v(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:K(o.DisplayName,o.Variants)}}const c=j(k),q=j(B),a=b.args,s={...e,args:{product:c,productImage:a}},i={...e,args:{product:c,productImage:a,campaign:{title:"Kampanj",color:"#9A576F"}}},n={...e,args:{product:q,productImage:a}},d={...e,args:{product:c,productImage:a,showFavoriteIcon:!0}},p={...e,args:{product:c,productImage:a,showFavoriteIcon:!0}},u={...e,args:{product:c,productImage:a,showFavoriteIcon:!0,showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var l,g,P;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage
  }
}`,...(P=(g=s.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var S,V,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(y=(V=i.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var h,I,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productNoVariantsArgs,
    productImage: productImage
  }
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var T,A,U;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true
  }
}`,...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var N,x,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true
  }
}`,...(F=(x=p.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var L,_,f;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true,
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: () => {
      console.log('Add to purchase list...');
    }
  }
}`,...(f=(_=u.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const Cr=["ProductCardVerticalStory","ProductCardVerticalStoryWithCampaign","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Favorite_Active","ProductCardVerticalStory_Favorite","ProductCardVerticalStory_AddToPurchaseList"];export{s as ProductCardVerticalStory,i as ProductCardVerticalStoryWithCampaign,u as ProductCardVerticalStory_AddToPurchaseList,p as ProductCardVerticalStory_Favorite,d as ProductCardVerticalStory_Favorite_Active,n as ProductCardVerticalStory_NoVariants,Cr as __namedExportsOrder,Ir as default};
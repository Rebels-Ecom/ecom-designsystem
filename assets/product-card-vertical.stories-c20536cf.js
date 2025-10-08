import{P as w}from"./product-card-vertical-594b07e1.js";import{c as v}from"./format-helper-580ef2bc.js";import{b as k,c as B}from"./dummy-product-213464fa.js";import{PictureStoryBeer as b}from"./picture.stories-3150d164.js";import{j as E}from"./jsx-runtime-03333307.js";import"./index-09749a66.js";import"./defaultFallbackImage-b43581a6.js";import"./product-quantity-input-16f4e0c1.js";import"./input-text-e1680c6c.js";import"./form-helper-af1dc92c.js";import"./icon-a32914e5.js";import"./product-variant-list-5d20a178.js";import"./product-variant-ddb95308.js";import"./radio-button-a10aef08.js";import"./picture-6b702374.js";import"./flex-container-7aff6506.js";import"./icon-with-tooltip-bfa653e5.js";import"./index-9d35675b.js";import"./index-145cfc81.js";import"./index-821951ec.js";import"./useOnClickOutside-9d2c35bb.js";import"./icon-button-aa68e962.js";import"./ui-link-974ac70a.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./index-61679f6b.js";import"./tags-list-30883e29.js";import"./tag-8d2e34a8.js";import"./placeholder-3cf73146.js";import"./button-with-tooltip-73094a66.js";import"./button-1de8d46b.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";import"./component-with-tooltip-5f7975e6.js";import"./picture-helper-dd6bd3b8.js";import"./Content9-b09c4254.js";import"./pang-f66faff3.js";const Ur={title:"Design System/Molecules/ProductCardVertical",component:w},e={render:({...o})=>{function r(u){console.log("Showing toast with product...")}return E.jsx(w,{...o,addToCart:r})}};function W(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function K(o,r){const u=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===u,tags:W(t.Tags),onChange:()=>{}}))}function j(o){const r=o.Variants[0];return{partNo:r.VariantId,productUrl:o.ProductUrl,productName:o.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:W(r.Tags),quantity:"1",totalPrice:v(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:K(o.DisplayName,o.Variants)}}const c=j(k),q=j(B),a=b.args,s={...e,args:{product:c,productImage:a}},i={...e,args:{product:c,productImage:a,campaign:{title:"Kampanj",color:"#9A576F"}}},n={...e,args:{product:q,productImage:a}},d={...e,args:{product:c,productImage:a,showFavoriteIcon:!0}},p={...e,args:{product:c,productImage:a,showFavoriteIcon:!0}},m={...e,args:{product:c,productImage:a,showFavoriteIcon:!0,showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var l,g,P;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(F=(x=p.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var L,_,f;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(f=(_=m.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const Nr=["ProductCardVerticalStory","ProductCardVerticalStoryWithCampaign","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Favorite_Active","ProductCardVerticalStory_Favorite","ProductCardVerticalStory_AddToPurchaseList"];export{s as ProductCardVerticalStory,i as ProductCardVerticalStoryWithCampaign,m as ProductCardVerticalStory_AddToPurchaseList,p as ProductCardVerticalStory_Favorite,d as ProductCardVerticalStory_Favorite_Active,n as ProductCardVerticalStory_NoVariants,Nr as __namedExportsOrder,Ur as default};

import{P as x}from"./product-card-vertical-5943d5a0.js";import{c as j}from"./format-helper-6b4b1091.js";import{a as k,b as B}from"./dummy-product-d82fa475.js";import{PictureStoryBeer as b}from"./picture.stories-fb612c6c.js";import{j as K}from"./jsx-runtime-a3a6c0b8.js";import"./product-quantity-input-2bd64f9e.js";import"./input-text-82d8ab72.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./form-helper-af1dc92c.js";import"./icon-5fefd509.js";import"./defaultFallbackImage-b43581a6.js";import"./product-variant-list-857a537c.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./loader-72deb8c4.js";import"./product-variant-e1a5ff52.js";import"./radio-button-f4956d18.js";import"./picture-7e21d28d.js";import"./flex-container-145d4933.js";import"./icon-with-tooltip-d80949f5.js";import"./extends-98964cd2.js";import"./index-79d56f34.js";import"./useOnClickOutside-338168d6.js";import"./tags-list-3f7fda62.js";import"./tag-fac2d6a3.js";import"./placeholder-0f82f781.js";import"./icon-button-c1cc9278.js";import"./ui-link-a18343fc.js";import"./motion-54668070.js";import"./pang-f66faff3.js";const Vr={title:"Design System/Molecules/ProductCardVertical",component:x},e={render:({...o})=>{function r(m){console.log("Showing toast with product...")}return K(x,{...o,addToCart:r})}};function w(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function q(o,r){const m=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===m,tags:w(t.Tags),onChange:()=>{}}))}function W(o){const r=o.Variants[0];return{partNo:r.VariantId,productUrl:o.ProductUrl,productName:o.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:w(r.Tags),quantity:"1",totalPrice:j(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:q(o.DisplayName,o.Variants)}}const c=W(k),E=W(B),a=b.args,i={...e,args:{product:c,productImage:a}},s={...e,args:{product:c,productImage:a,campaign:{title:"Kampanj",color:"#9A576F"}}},n={...e,args:{product:E,productImage:a}},d={...e,args:{product:c,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!0}},p={...e,args:{product:c,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!1}},u={...e,args:{product:c,productImage:a,showFavoriteIcon:!0,isFavoriteIconActive:!0,showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var l,g,P;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage
  }
}`,...(P=(g=i.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var S,I,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(V=(I=s.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var y,h,A;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productNoVariantsArgs,
    productImage: productImage
  }
}`,...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var C,T,U;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true,
    isFavoriteIconActive: true
  }
}`,...(U=(T=d.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var F,v,N;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true,
    isFavoriteIconActive: false
  }
}`,...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var f,L,_;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(_=(L=u.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const yr=["ProductCardVerticalStory","ProductCardVerticalStoryWithCampaign","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Favorite_Active","ProductCardVerticalStory_Favorite","ProductCardVerticalStory_AddToPurchaseList"];export{i as ProductCardVerticalStory,s as ProductCardVerticalStoryWithCampaign,u as ProductCardVerticalStory_AddToPurchaseList,p as ProductCardVerticalStory_Favorite,d as ProductCardVerticalStory_Favorite_Active,n as ProductCardVerticalStory_NoVariants,yr as __namedExportsOrder,Vr as default};
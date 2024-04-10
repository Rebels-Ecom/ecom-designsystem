import{P as w}from"./product-card-vertical-abad3f44.js";import{c as j}from"./format-helper-6b4b1091.js";import{a as k,b as B}from"./dummy-product-d82fa475.js";import{PictureStoryBeer as b}from"./picture.stories-fb612c6c.js";import{j as K}from"./jsx-runtime-a3a6c0b8.js";import"./product-quantity-input-650dae44.js";import"./input-text-832858aa.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./form-helper-af1dc92c.js";import"./icon-5fefd509.js";import"./defaultFallbackImage-b43581a6.js";import"./product-variant-list-68b16aee.js";import"./product-variant-04ff73a4.js";import"./radio-button-ac06a94c.js";import"./picture-7e21d28d.js";import"./flex-container-145d4933.js";import"./icon-with-tooltip-d80949f5.js";import"./extends-98964cd2.js";import"./index-79d56f34.js";import"./useOnClickOutside-338168d6.js";import"./icon-button-4b52a229.js";import"./ui-link-a18343fc.js";import"./motion-54668070.js";import"./index-4058f88b.js";import"./tags-list-3f7fda62.js";import"./tag-fac2d6a3.js";import"./placeholder-0f82f781.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./loader-72deb8c4.js";import"./pang-f66faff3.js";const hr={title:"Design System/Molecules/ProductCardVertical",component:w},e={render:({...o})=>{function r(m){console.log("Showing toast with product...")}return K(w,{...o,addToCart:r})}};function W(o){return o.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function q(o,r){const m=r[0].VariantId;return r.map(t=>({productName:o,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===m,tags:W(t.Tags),onChange:()=>{}}))}function v(o){const r=o.Variants[0];return{partNo:r.VariantId,productUrl:o.ProductUrl,productName:o.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:W(r.Tags),quantity:"1",totalPrice:j(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:q(o.DisplayName,o.Variants)}}const c=v(k),E=v(B),a=b.args,s={...e,args:{product:c,productImage:a}},i={...e,args:{product:c,productImage:a,campaign:{title:"Kampanj",color:"#9A576F"}}},n={...e,args:{product:E,productImage:a}},d={...e,args:{product:c,productImage:a,showFavoriteIcon:!0}},p={...e,args:{product:c,productImage:a,showFavoriteIcon:!0}},u={...e,args:{product:c,productImage:a,showFavoriteIcon:!0,showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var l,g,P;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var N,F,L;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true
  }
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var _,f,x;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(x=(f=u.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Ir=["ProductCardVerticalStory","ProductCardVerticalStoryWithCampaign","ProductCardVerticalStory_NoVariants","ProductCardVerticalStory_Favorite_Active","ProductCardVerticalStory_Favorite","ProductCardVerticalStory_AddToPurchaseList"];export{s as ProductCardVerticalStory,i as ProductCardVerticalStoryWithCampaign,u as ProductCardVerticalStory_AddToPurchaseList,p as ProductCardVerticalStory_Favorite,d as ProductCardVerticalStory_Favorite_Active,n as ProductCardVerticalStory_NoVariants,Ir as __namedExportsOrder,hr as default};

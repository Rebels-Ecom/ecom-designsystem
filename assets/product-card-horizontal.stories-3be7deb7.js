import{r as O,j}from"./jsx-runtime-a3a6c0b8.js";import{P as _}from"./product-card-horizontal-e1925b4b.js";import{d as F,a as Q}from"./dummy-product-d82fa475.js";import{c as b}from"./format-helper-6b4b1091.js";import"./_commonjsHelpers-de833af9.js";import"./product-quantity-input-2bd64f9e.js";import"./input-text-82d8ab72.js";import"./index-a587463d.js";import"./form-helper-af1dc92c.js";import"./icon-5fefd509.js";import"./picture-helper-51da5c7d.js";import"./defaultFallbackImage-b43581a6.js";import"./tags-list-3f7fda62.js";import"./tag-fac2d6a3.js";import"./loader-72deb8c4.js";import"./placeholder-0f82f781.js";import"./picture-7e21d28d.js";import"./flex-container-145d4933.js";import"./icon-with-tooltip-d80949f5.js";import"./extends-98964cd2.js";import"./index-79d56f34.js";import"./alert-box-f6b70b16.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./text-e8b57ff8.js";import"./icon-button-c1cc9278.js";import"./ui-link-a18343fc.js";import"./motion-54668070.js";const Sr={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:_},e={render:({...t})=>{const[r,p]=O.useState(!1);function o(n){console.log("Removing the product with id:",n),p(!0)}function R(n){console.log("Current quantity:",n)}function w(n){console.log("Showing toast with product...")}return j(_,{...t,removingProduct:t.removingProduct,loading:t.loading??r,addToCart:w,onChangeQuantity:R,onClickRemoveProduct:o})}};function I(t){return t.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function q(t,r){const p=r[0].VariantId;return r.map(o=>({productName:t,variantName:o.Name,variantId:o.VariantId,country:Array.isArray(o.ShortTexts)&&o.ShortTexts.length?o.ShortTexts[0]:"",priceStr:o.ListPricePerUnitString,price:o.ListPricePerUnit,salesUnit:o.SalesUnit,itemNumberPerSalesUnit:o.UnitsPerBaseUnit,imageUrl:o.PrimaryImageUrl,checked:o.VariantId===p,tags:I(o.Tags),onChange:()=>{}}))}function N(t){const r=t.Variants[0];return{partNo:r.VariantId,productName:t.DisplayName,productUrl:t.ProductUrl,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:I(r.Tags),quantity:"1",totalPrice:b(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:q(t.DisplayName,t.Variants)}}const V=N(F),m=N(Q),a={...e,args:{product:V,loading:!1,linkComponent:"a",hideCartButton:!0}},i={...e,args:{product:m,loading:!0,linkComponent:"a"}},s={...e,args:{product:m,linkComponent:"a",campaign:{title:"Kampanj",color:"#9A576F"}}},c={...e,args:{product:V,loading:!1,linkComponent:"a",hideRemoveButton:!0}},d={...e,args:{product:m,loading:!1,linkComponent:"a"}},u={...e,args:{product:m,loading:!1,linkComponent:"a",showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var l,g,P;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: true
  }
}`,...(P=(g=a.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var C,S,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: true,
    linkComponent: 'a'
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,T,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    linkComponent: 'a',
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var U,A,z;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideRemoveButton: true
  }
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var H,k,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a'
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var x,L,W;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a',
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: () => {
      console.log('Add to purchase list...');
    }
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const hr=["CartProductStoryBeer","ProductCardHorizontalStoryWine","ProductCardHorizontalStoryWithCampaign","ProductCardHorizontal_OrderConfirmation_Beer","ProductCardHorizontal_OrderConfirmation_Wine","ProductCardHorizontal_AddToPurchaseList"];export{a as CartProductStoryBeer,i as ProductCardHorizontalStoryWine,s as ProductCardHorizontalStoryWithCampaign,u as ProductCardHorizontal_AddToPurchaseList,c as ProductCardHorizontal_OrderConfirmation_Beer,d as ProductCardHorizontal_OrderConfirmation_Wine,hr as __namedExportsOrder,Sr as default};

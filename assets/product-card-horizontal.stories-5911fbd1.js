import{r as w,j as O}from"./jsx-runtime-03333307.js";import{P as _}from"./product-card-horizontal-d3d54b07.js";import{d as E,a as F}from"./dummy-product-d82fa475.js";import{c as Q}from"./format-helper-a8a0bc10.js";import"./product-quantity-input-c49ab939.js";import"./input-text-6778a0ec.js";import"./index-09749a66.js";import"./form-helper-af1dc92c.js";import"./icon-e3522fc5.js";import"./picture-helper-e0ae1ee4.js";import"./defaultFallbackImage-b43581a6.js";import"./tags-list-dcc30c34.js";import"./tag-84e76236.js";import"./debounce-input-dba14012.js";import"./generic-helper-87eaa4e8.js";import"./debounce-27b61785.js";import"./isSymbol-9d21be03.js";import"./hooks-0265167d.js";import"./react-responsive-c4f2314e.js";import"./flex-container-7aff6506.js";import"./icon-with-tooltip-5f8a0afd.js";import"./index-9d35675b.js";import"./index-145cfc81.js";import"./index-821951ec.js";import"./placeholder-7c72702c.js";import"./picture-d7d6bf69.js";import"./alert-box-094c6fa5.js";import"./button-ae86c7d5.js";import"./button.module-16a60bae.js";import"./loader-5c06d14e.js";import"./text-002528fe.js";import"./icon-button-4ba5bdac.js";import"./ui-link-94ae867e.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";const zr={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:_},e={render:({...t})=>{const[r,u]=w.useState(!1);function o(n){console.log("Removing the product with id:",n),u(!0)}function R(n){console.log("Current quantity:",n)}function j(n){console.log("Showing toast with product...")}return O.jsx(_,{...t,removingProduct:t.removingProduct,loading:t.loading??r,addToCart:j,onChangeQuantity:R,onClickRemoveProduct:o})}};function I(t){return t.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function b(t,r){const u=r[0].VariantId;return r.map(o=>({productName:t,variantName:o.Name,variantId:o.VariantId,country:Array.isArray(o.ShortTexts)&&o.ShortTexts.length?o.ShortTexts[0]:"",priceStr:o.ListPricePerUnitString,price:o.ListPricePerUnit,salesUnit:o.SalesUnit,itemNumberPerSalesUnit:o.UnitsPerBaseUnit,imageUrl:o.PrimaryImageUrl,checked:o.VariantId===u,tags:I(o.Tags),onChange:()=>{}}))}function N(t){const r=t.Variants[0];return{partNo:r.VariantId,productName:t.DisplayName,productUrl:t.ProductUrl,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:I(r.Tags),quantity:"1",totalPrice:Q(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:b(t.DisplayName,t.Variants)}}const V=N(E),p=N(F),a={...e,args:{product:V,loading:!1,linkComponent:"a",hideCartButton:!0}},i={...e,args:{product:p,loading:!0,linkComponent:"a"}},s={...e,args:{product:p,linkComponent:"a",campaign:{title:"Kampanj",color:"#9A576F"}}},c={...e,args:{product:V,loading:!1,linkComponent:"a",hideRemoveButton:!0}},d={...e,args:{product:p,loading:!1,linkComponent:"a"}},m={...e,args:{product:p,loading:!1,linkComponent:"a",showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var l,g,P;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var H,k,x;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a'
  }
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,L,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(L=m.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const Hr=["CartProductStoryBeer","ProductCardHorizontalStoryWine","ProductCardHorizontalStoryWithCampaign","ProductCardHorizontal_OrderConfirmation_Beer","ProductCardHorizontal_OrderConfirmation_Wine","ProductCardHorizontal_AddToPurchaseList"];export{a as CartProductStoryBeer,i as ProductCardHorizontalStoryWine,s as ProductCardHorizontalStoryWithCampaign,m as ProductCardHorizontal_AddToPurchaseList,c as ProductCardHorizontal_OrderConfirmation_Beer,d as ProductCardHorizontal_OrderConfirmation_Wine,Hr as __namedExportsOrder,zr as default};

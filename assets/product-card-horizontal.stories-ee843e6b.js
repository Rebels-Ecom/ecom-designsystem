import{r as V,j as W}from"./jsx-runtime-a3a6c0b8.js";import{P as B}from"./product-card-horizontal-6a585dc1.js";import{b as R,a as w}from"./dummy-product-117119f6.js";import{c as O}from"./format-helper-6b4b1091.js";import"./_commonjsHelpers-de833af9.js";import"./product-quantity-input-701dd205.js";import"./input-text-03d26b16.js";import"./index-a587463d.js";import"./form-helper-ce65ae5e.js";import"./icon-b918f330.js";import"./picture-helper-1d1954b7.js";import"./defaultFallbackImage-b43581a6.js";import"./tags-list-5108b032.js";import"./tag-fac2d6a3.js";import"./loader-72deb8c4.js";import"./placeholder-0f82f781.js";import"./picture-78f09330.js";import"./icon-button-b65e8e62.js";import"./ui-link-90f48b0d.js";import"./motion-54668070.js";import"./button-93555bd8.js";import"./button.module-d4e6cb42.js";const sr={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:B},e={render:({...t})=>{const[r,u]=V.useState(!1);function o(n){console.log("Removing the product with id:",n),u(!0)}function I(n){console.log("Current quantity:",n)}function N(n){console.log("Showing toast with product...")}return W(B,{...t,removingProduct:t.removingProduct,loading:t.loading??r,addToCart:N,onChangeQuantity:I,onClickRemoveProduct:o})}};function x(t){return t.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function b(t,r){const u=r[0].VariantId;return r.map(o=>({productName:t,variantName:o.Name,variantId:o.VariantId,country:Array.isArray(o.ShortTexts)&&o.ShortTexts.length?o.ShortTexts[0]:"",priceStr:o.ListPricePerUnitString,price:o.ListPricePerUnit,salesUnit:o.SalesUnit,itemNumberPerSalesUnit:o.UnitsPerBaseUnit,imageUrl:o.PrimaryImageUrl,checked:o.VariantId===u,tags:x(o.Tags),onChange:()=>{}}))}function L(t){const r=t.Variants[0];return{partNo:r.VariantId,productName:t.DisplayName,productUrl:t.ProductUrl,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:x(r.Tags),quantity:"1",totalPrice:O(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:b(t.DisplayName,t.Variants)}}const _=L(R),l=L(w),a={...e,args:{product:_,loading:!1,linkComponent:"a",hideCartButton:!0}},i={...e,args:{product:l,loading:!0,linkComponent:"a"}},s={...e,args:{product:_,loading:!1,linkComponent:"a",hideRemoveButton:!0}},c={...e,args:{product:l,loading:!1,linkComponent:"a"}},d={...e,args:{product:l,loading:!1,linkComponent:"a",showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: true
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var P,C,h;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: true,
    linkComponent: 'a'
  }
}`,...(h=(C=i.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var S,y,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideRemoveButton: true
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,U,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a'
  }
}`,...(A=(U=c.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var k,z,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(z=d.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const cr=["CartProductStoryBeer","ProductCardHorizontalStoryWine","ProductCardHorizontal_OrderConfirmation_Beer","ProductCardHorizontal_OrderConfirmation_Wine","ProductCardHorizontal_AddToPurchaseList"];export{a as CartProductStoryBeer,i as ProductCardHorizontalStoryWine,d as ProductCardHorizontal_AddToPurchaseList,s as ProductCardHorizontal_OrderConfirmation_Beer,c as ProductCardHorizontal_OrderConfirmation_Wine,cr as __namedExportsOrder,sr as default};

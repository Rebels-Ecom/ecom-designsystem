import{r as V}from"./index-6f814c40.js";import{P as H}from"./product-card-horizontal-5d3dcf65.js";import{b as W,a as R}from"./dummy-product-117119f6.js";import{c as w}from"./format-helper-6b4b1091.js";import{a as O}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./product-quantity-input-7224f21b.js";import"./input-text-743ac2c6.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-456a804f.js";import"./picture-helper-86177d87.js";import"./defaultFallbackImage-b43581a6.js";import"./tags-list-c02b4de0.js";import"./tag-4d467d25.js";import"./loader-ce89f5e5.js";import"./placeholder-13465f94.js";import"./divider-lines-71f4f756.js";import"./picture-097a8d40.js";import"./icon-button-c7c840d1.js";import"./ui-link-ec26e515.js";import"./motion-354a1bac.js";import"./button-bc254079.js";import"./button.module-3bdf7fd3.js";const dr={title:"Design System/Molecules/ProductCardHorizontal",parameters:{controls:{exclude:["product","addToCartButton","addToCart","onClickRemoveProduct","onChangeQuantity","className"]}},component:H},e={render:({...t})=>{const[r,u]=V.useState(!1);function o(n){console.log("Removing the product with id:",n),u(!0)}function _(n){console.log("Current quantity:",n)}function N(n){console.log("Showing toast with product...")}return O(H,{...t,removingProduct:t.removingProduct,loading:t.loading??r,addToCart:N,onChangeQuantity:_,onClickRemoveProduct:o})}};function x(t){return t.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function b(t,r){const u=r[0].VariantId;return r.map(o=>({productName:t,variantName:o.Name,variantId:o.VariantId,country:Array.isArray(o.ShortTexts)&&o.ShortTexts.length?o.ShortTexts[0]:"",listPricePerUnitString:o.ListPricePerUnitString,price:o.ListPricePerUnit,salesUnit:o.SalesUnit,itemNumberPerSalesUnit:o.UnitsPerBaseUnit,imageUrl:o.PrimaryImageUrl,checked:o.VariantId===u,tags:x(o.Tags),onChange:()=>{}}))}function L(t){const r=t.Variants[0];return{productId:r.VariantId,productName:t.DisplayName,productUrl:t.ProductUrl,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:x(r.Tags),quantity:"1",totalPrice:w(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:b(t.DisplayName,t.Variants)}}const I=L(W),l=L(R),a={...e,args:{product:I,loading:!1,linkComponent:"a",hideCartButton:!0}},i={...e,args:{product:l,loading:!0,linkComponent:"a"}},s={...e,args:{product:I,loading:!1,linkComponent:"a",hideRemoveButton:!0}},c={...e,args:{product:l,loading:!1,linkComponent:"a"}},d={...e,args:{product:l,loading:!1,linkComponent:"a",showAddToPurchaseListIcon:!0,onSaveToPurchaseListClick:()=>{console.log("Add to purchase list...")}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(A=(U=c.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var k,z,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ur=["CartProductStoryBeer","ProductCardHorizontalStoryWine","ProductCardHorizontal_OrderConfirmation_Beer","ProductCardHorizontal_OrderConfirmation_Wine","ProductCardHorizontal_AddToPurchaseList"];export{a as CartProductStoryBeer,i as ProductCardHorizontalStoryWine,d as ProductCardHorizontal_AddToPurchaseList,s as ProductCardHorizontal_OrderConfirmation_Beer,c as ProductCardHorizontal_OrderConfirmation_Wine,ur as __namedExportsOrder,dr as default};
//# sourceMappingURL=product-card-horizontal.stories-b303b76f.js.map

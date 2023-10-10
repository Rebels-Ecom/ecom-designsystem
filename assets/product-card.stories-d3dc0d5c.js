import{P as n}from"./product-card-321c7ce0.js";import{c as N}from"./format-helper-6b4b1091.js";import{d as A,a as L}from"./dummy-product-117119f6.js";import{g as u}from"./picture-helper-86177d87.js";import{a as s}from"./jsx-runtime-76c5c2e2.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-24a98b7a.js";import"./product-quantity-input-e815c7e9.js";import"./input-text-e07cfb54.js";import"./index-74f03c09.js";import"./form-helper-ce65ae5e.js";import"./icon-0e1526c5.js";import"./tags-list-f8e9454d.js";import"./tag-cf40f1b7.js";import"./loader-2ea78344.js";import"./placeholder-be41db54.js";import"./divider-lines-71f4f756.js";import"./picture-097a8d40.js";import"./icon-button-9d46a25b.js";import"./ui-link-8e83d4a8.js";import"./button-314e4000.js";import"./button.module-42bc270d.js";import"./product-card-vertical-f2980b17.js";import"./product-variant-list-ab83b6ba.js";import"./product-variant-1409f12c.js";import"./radio-button-14f33c2f.js";function V(t){return t.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function x(t,r){const k=r[0].VariantId;return r.map(a=>({productName:t,variantName:a.Name,variantId:a.VariantId,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",listPricePerUnitString:a.ListPricePerUnitString,price:a.ListPricePerUnit,salesUnit:a.SalesUnit,itemNumberPerSalesUnit:a.UnitsPerBaseUnit,imageUrl:a.PrimaryImageUrl,checked:a.VariantId===k,tags:V(a.Tags),onChange:()=>{}}))}function B(t){const r=t.Variants[0];return{productId:r.VariantId,productUrl:t.ProductUrl,productName:t.DisplayName,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:V(r.Tags),quantity:"1",totalPrice:N(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:x(t.DisplayName,t.Variants)}}const p=B(A),e=B(L),or={title:"Design System/Molecules/ProductCard",component:n,parameters:{controls:{exclude:["product","addToCart","addToCartButton","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","changePackagingButton","selectedVariantId","onClickRemoveProduct"]}}},o={render:t=>s(n,{...t}),args:{cardDisplay:"vertical",product:e,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:u(e.productId,e.productImageUrl),hideCartButton:!1}},d={render:t=>s(n,{...t}),args:{cardDisplay:"vertical",product:p,defaultQuantity:"4",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:u(e.productId,e.productImageUrl)}},i={render:t=>s(n,{...t}),args:{cardDisplay:"vertical",product:p,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:u(e.productId,e.productImageUrl)}},c={render:t=>s(n,{...t}),args:{cardDisplay:"horizontal",product:p,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},loading:!1}};var l,g,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productWineArgs,
    defaultQuantity: '',
    addToCart: () => {},
    addToCartButton: {
      children: 'Lägg till',
      surface: 'primary',
      type: 'button'
    },
    handlePackageChange: () => {},
    loading: false,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.productId, productWineArgs.productImageUrl),
    hideCartButton: false
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var P,y,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productNoVariantsArgs,
    defaultQuantity: '4',
    addToCart: () => {},
    addToCartButton: {
      children: 'Lägg till',
      surface: 'primary',
      type: 'button'
    },
    handlePackageChange: () => {},
    loading: false,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.productId, productWineArgs.productImageUrl)
  }
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var h,f,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productNoVariantsArgs,
    addToCart: () => {},
    addToCartButton: {
      children: 'Lägg till',
      surface: 'primary',
      type: 'button'
    },
    handlePackageChange: () => {},
    loading: true,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.productId, productWineArgs.productImageUrl)
  }
}`,...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var S,U,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'horizontal',
    product: productNoVariantsArgs,
    defaultQuantity: '',
    addToCart: () => {},
    addToCartButton: {
      children: 'Lägg till',
      surface: 'primary',
      type: 'button'
    },
    loading: false
  }
}`,...(T=(U=c.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};const dr=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"];export{o as ProductCardStory,c as ProductCardStory_Horizontal,i as ProductCardStory_Loading,d as ProductCardStory_NoVariants,dr as __namedExportsOrder,or as default};
//# sourceMappingURL=product-card.stories-d3dc0d5c.js.map

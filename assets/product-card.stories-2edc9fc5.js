import{P as o}from"./product-card-699e7030.js";import{c as k}from"./format-helper-6b4b1091.js";import{d as x,a as B}from"./dummy-product-2b5b59bc.js";import{g as p}from"./picture-helper-1d1954b7.js";import{j as d}from"./jsx-runtime-a3a6c0b8.js";import"./defaultFallbackImage-b43581a6.js";import"./product-card-horizontal-fb05b21c.js";import"./product-quantity-input-289618f1.js";import"./input-text-aa9063aa.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./form-helper-ce65ae5e.js";import"./icon-5fefd509.js";import"./tags-list-5108b032.js";import"./tag-fac2d6a3.js";import"./loader-72deb8c4.js";import"./placeholder-0f82f781.js";import"./picture-7e21d28d.js";import"./icon-button-4986945f.js";import"./ui-link-a18343fc.js";import"./motion-54668070.js";import"./button-8a1c536b.js";import"./button.module-d4e6cb42.js";import"./product-card-vertical-3575fa71.js";import"./product-variant-list-019e3375.js";import"./product-variant-3f6157eb.js";import"./radio-button-f4956d18.js";function A(a){return a.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function W(a,r){const T=r[0].VariantId;return r.map(t=>({productName:a,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===T,tags:A(t.Tags),onChange:()=>{}}))}function f(a){const r=a.Variants[0];return{partNo:r.VariantId,productUrl:a.ProductUrl,productName:a.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:A(r.Tags),quantity:"1",totalPrice:k(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:W(a.DisplayName,a.Variants)}}const u=f(x),e=f(B),or={title:"Design System/Molecules/ProductCard",component:o,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},n={render:a=>d(o,{...a}),args:{cardDisplay:"vertical",product:e,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(e.partNo,e.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},i={render:a=>d(o,{...a}),args:{cardDisplay:"vertical",product:u,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(e.partNo,e.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},s={render:a=>d(o,{...a}),args:{cardDisplay:"vertical",product:u,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:p(e.partNo,e.primaryImageUrl)}},c={render:a=>d(o,{...a}),args:{cardDisplay:"horizontal",product:u,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var m,l,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productWineArgs,
    addToCart: () => {},
    handlePackageChange: () => {},
    loading: false,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.primaryImageUrl),
    hideCartButton: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var P,C,y;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productNoVariantsArgs,
    defaultQuantity: '4',
    addToCart: () => {},
    handlePackageChange: () => {},
    loading: false,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.primaryImageUrl),
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var h,S,U;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productNoVariantsArgs,
    addToCart: () => {},
    handlePackageChange: () => {},
    loading: true,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.primaryImageUrl)
  }
}`,...(U=(S=s.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var V,N,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'horizontal',
    product: productNoVariantsArgs,
    addToCart: () => {},
    loading: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const nr=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"];export{n as ProductCardStory,c as ProductCardStory_Horizontal,s as ProductCardStory_Loading,i as ProductCardStory_NoVariants,nr as __namedExportsOrder,or as default};

import{P as e}from"./horiztonal-variants-d26c5eca.js";import{c as T}from"./format-helper-580ef2bc.js";import{c as k,b as x}from"./dummy-product-213464fa.js";import{g as p}from"./picture-helper-dd6bd3b8.js";import{j as m}from"./jsx-runtime-03333307.js";import"./defaultFallbackImage-b43581a6.js";import"./index-09749a66.js";import"./product-quantity-input-16f4e0c1.js";import"./input-text-e1680c6c.js";import"./form-helper-af1dc92c.js";import"./icon-a32914e5.js";import"./tags-list-30883e29.js";import"./tag-8d2e34a8.js";import"./debounce-input-e697c8a3.js";import"./generic-helper-ddbede2e.js";import"./debounce-27b61785.js";import"./isSymbol-9d21be03.js";import"./useOnClickOutside-9d2c35bb.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";import"./carousel-c1935f6a.js";import"./hooks-0265167d.js";import"./react-responsive-c4f2314e.js";import"./flex-container-7aff6506.js";import"./icon-with-tooltip-bfa653e5.js";import"./index-9d35675b.js";import"./index-145cfc81.js";import"./index-821951ec.js";import"./icon-button-aa68e962.js";import"./ui-link-974ac70a.js";import"./component-with-tooltip-5f7975e6.js";import"./placeholder-3cf73146.js";import"./picture-6b702374.js";import"./button-856a03f5.js";import"./loader-5c06d14e.js";import"./button.module-867d0823.js";import"./alert-box-ef10dec6.js";import"./text-fc9325ee.js";import"./product-card-restricted-154b410f.js";import"./product-variant-list-e94c245b.js";import"./product-variant-ddb95308.js";import"./radio-button-a10aef08.js";import"./index-61679f6b.js";import"./product-card-vertical-2e4eeed6.js";import"./button-with-tooltip-60517234.js";function B(t){return t.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function j(t,r){const n=r[0].VariantId;return r.map(a=>({productName:t,variantName:a.Name,variantId:a.VariantId,checked:a.VariantId===n,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",priceStr:a.ListPricePerUnitString,image:p(a.VariantId,a.PrimaryImageUrl)}))}function N(t){const r=t.Variants[0];return{partNo:r.VariantId,productUrl:t.ProductUrl,productName:t.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:B(r.Tags),quantity:"1",totalPrice:T(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:Array.from({length:10},()=>{var n;return(n=j(t.DisplayName,t.Variants))==null?void 0:n[0]})}}const U=N(k),o=N(x),fr={title:"Design System/Molecules/ProductCard",component:e,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},i={render:t=>m.jsx(e,{...t}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.partNo,o.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},s={render:t=>m.jsx(e,{...t}),args:{cardDisplay:"vertical",product:U,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.partNo,o.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:t=>m.jsx(e,{...t}),args:{cardDisplay:"vertical",product:U,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:p(o.partNo,o.primaryImageUrl)}},d={render:t=>m.jsx(e,{...t}),args:{cardDisplay:"horizontal",product:o,addToCart:()=>{},loading:!1,addToCartBtnLabel:"Lägg i varukorg",variantsOpen:!1}};var u,l,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var P,C,y;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var h,S,V;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(V=(S=c.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var I,f,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'horizontal',
    product: productWineArgs,
    addToCart: () => {},
    loading: false,
    addToCartBtnLabel: 'Lägg i varukorg',
    variantsOpen: false
    // campaign: {
    //   title: 'Kampanj',
    //   color: '#9A576F',
    // },
  }
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Ar=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"];export{i as ProductCardStory,d as ProductCardStory_Horizontal,c as ProductCardStory_Loading,s as ProductCardStory_NoVariants,Ar as __namedExportsOrder,fr as default};

import{r as x}from"./index-6f814c40.js";import{g as p}from"./picture-helper-86177d87.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as oe}from"./defaultFallbackImage-b43581a6.js";import{P as ie}from"./product-card-horizontal-34761d85.js";import{P as ue}from"./product-card-vertical-92fcb338.js";import{a as u}from"./jsx-runtime-76c5c2e2.js";import{d as de,a as le}from"./dummy-product-117119f6.js";function i({cardDisplay:r,product:e,addToCartButton:m,addToCart:a,hideCartButton:V,onChangeQuantity:h,onRemoveProduct:S,hideRemoveButton:J,productQuantityDisabled:U,loading:b,changePackagingButton:X,linkComponent:k,className:B,defaultQuantity:g,campaign:q,border:Y,disabled:T,buttonLoading:N}){if(!r)throw new Error("cardDisplay must be assigned");const{productId:v,productImageUrl:Z,price:$,itemNumberPerSalesUnit:ee,quantity:y}=e,[re,A]=x.useState(!1),[n,_]=x.useState({...e,productImage:p(v,Z),quantity:y||"1",totalPrice:C($*ee*(g??y?parseInt(g??y):0)),selectedVariantId:v});function L(t){_(f=>{const P={...f,quantity:t.toString(),totalPrice:C(n.price*n.itemNumberPerSalesUnit*t)};return h==null||h(P),P})}function te(){A(!0)}function ae(t){S&&S(t)}function ne(t){const f=n.productId===t.variantId?parseInt(n.quantity):1;_(P=>({...P,productId:t.variantId,productImage:p(t.variantId,t.imageUrl?t.imageUrl:oe),country:t.country,packaging:t.variantName,priceStr:t.listPricePerUnitString,price:t.price,salesUnit:t.salesUnit,itemNumberPerSalesUnit:t.itemNumberPerSalesUnit,totalPrice:C(t.price*t.itemNumberPerSalesUnit*f),quantity:f.toString(),selectedVariantId:t.variantId})),A(!1)}return r==="horizontal"?u(ie,{cardDisplay:"horizontal",loading:b,product:n,onChangeQuantity:L,productQuantityDisabled:U,addToCartButton:m,addToCart:a,onClickRemoveProduct:ae,linkComponent:k,hideRemoveButton:J,className:B,hideCartButton:V,defaultQuantity:g,campaign:q,border:Y,disabled:T,buttonLoading:N}):r==="vertical"?u(ue,{cardDisplay:"vertical",loading:b,product:n,productImage:n.productImage,onChangeQuantity:L,productQuantityDisabled:U,addToCartButton:m,addToCart:a,changePackagingButton:X,onVariantsButtonClick:te,variantsOpen:re,selectedVariantId:n.selectedVariantId,handlePackageChange:ne,linkComponent:k,className:B,hideCartButton:V,defaultQuantity:g,campaign:q,disabled:T,buttonLoading:N}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},addToCartButton:{defaultValue:null,description:"",name:"addToCartButton",required:!0,type:{name:"IButton"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},changePackagingButton:{defaultValue:null,description:"",name:"changePackagingButton",required:!1,type:{name:"IButton"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function M(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function ce(r,e){const m=e[0].VariantId;return e.map(a=>({productName:r,variantName:a.Name,variantId:a.VariantId,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",listPricePerUnitString:a.ListPricePerUnitString,price:a.ListPricePerUnit,salesUnit:a.SalesUnit,itemNumberPerSalesUnit:a.UnitsPerBaseUnit,imageUrl:a.PrimaryImageUrl,checked:a.VariantId===m,tags:M(a.Tags),onChange:()=>{}}))}function G(r){const e=r.Variants[0];return{productId:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,productImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:M(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:ce(r.DisplayName,r.Variants)}}const I=G(de),o=G(le),se={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","addToCartButton","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","changePackagingButton","selectedVariantId","onClickRemoveProduct"]}}},d={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:o,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},l={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,defaultQuantity:"4",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl)}},s={render:r=>u(i,{...r}),args:{cardDisplay:"horizontal",product:I,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var F,D,j;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    hideCartButton: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(j=(D=d.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var z,O,R;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    productImage: getProductPicture(productWineArgs.productId, productWineArgs.productImageUrl),
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,Q,K;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var w,E,H;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    loading: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(H=(E=s.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const pe=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],Ve=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:d,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:l,__namedExportsOrder:pe,default:se},Symbol.toStringTag,{value:"Module"}));export{i as P,d as a,s as b,Ve as p};
//# sourceMappingURL=product-card.stories-280b1422.js.map

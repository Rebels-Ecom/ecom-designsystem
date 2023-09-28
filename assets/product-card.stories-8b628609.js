import{r as _}from"./index-6f814c40.js";import{g as p}from"./picture-helper-86177d87.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as re}from"./defaultFallbackImage-b43581a6.js";import{P as te}from"./product-card-horizontal-cd0f8219.js";import{P as ae}from"./product-card-vertical-7979784c.js";import{a as u}from"./jsx-runtime-76c5c2e2.js";import{d as ne,a as oe}from"./dummy-product-117119f6.js";function i({cardDisplay:r,product:e,addToCartButton:m,addToCart:a,hideCartButton:V,onChangeQuantity:h,onRemoveProduct:S,hideRemoveButton:M,productQuantityDisabled:U,loading:k,changePackagingButton:G,linkComponent:B,className:b,defaultQuantity:g}){if(!r)throw new Error("cardDisplay must be assigned");const{productId:T,productImageUrl:J,price:K,itemNumberPerSalesUnit:X,quantity:y}=e,[Y,q]=_.useState(!1),[n,N]=_.useState({...e,productImage:p(T,J),quantity:y||"1",totalPrice:C(K*X*(g??y?parseInt(g??y):0)),selectedVariantId:T});function v(t){N(P=>{const f={...P,quantity:t.toString(),totalPrice:C(n.price*n.itemNumberPerSalesUnit*t)};return h==null||h(f),f})}function Z(){q(!0)}function $(t){S&&S(t)}function ee(t){const P=n.productId===t.variantId?parseInt(n.quantity):1;N(f=>({...f,productId:t.variantId,productImage:p(t.variantId,t.imageUrl?t.imageUrl:re),country:t.country,packaging:t.variantName,priceStr:t.listPricePerUnitString,price:t.price,salesUnit:t.salesUnit,itemNumberPerSalesUnit:t.itemNumberPerSalesUnit,totalPrice:C(t.price*t.itemNumberPerSalesUnit*P),quantity:P.toString(),selectedVariantId:t.variantId})),q(!1)}return r==="horizontal"?u(te,{cardDisplay:"horizontal",loading:k,product:n,onChangeQuantity:v,productQuantityDisabled:U,addToCartButton:m,addToCart:a,onClickRemoveProduct:$,linkComponent:B,hideRemoveButton:M,className:b,hideCartButton:V,defaultQuantity:g}):r==="vertical"?u(ae,{cardDisplay:"vertical",loading:k,product:n,productImage:n.productImage,onChangeQuantity:v,productQuantityDisabled:U,addToCartButton:m,addToCart:a,changePackagingButton:G,onVariantsButtonClick:Z,variantsOpen:Y,selectedVariantId:n.selectedVariantId,handlePackageChange:ee,linkComponent:B,className:b,hideCartButton:V,defaultQuantity:g}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},addToCartButton:{defaultValue:null,description:"",name:"addToCartButton",required:!0,type:{name:"IButton"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},changePackagingButton:{defaultValue:null,description:"",name:"changePackagingButton",required:!1,type:{name:"IButton"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function E(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function ie(r,e){const m=e[0].VariantId;return e.map(a=>({productName:r,variantName:a.Name,variantId:a.VariantId,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",listPricePerUnitString:a.ListPricePerUnitString,price:a.ListPricePerUnit,salesUnit:a.SalesUnit,itemNumberPerSalesUnit:a.UnitsPerBaseUnit,imageUrl:a.PrimaryImageUrl,checked:a.VariantId===m,tags:E(a.Tags),onChange:()=>{}}))}function H(r){const e=r.Variants[0];return{productId:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,productImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:E(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:ie(r.DisplayName,r.Variants)}}const I=H(ne),o=H(oe),ue={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","addToCartButton","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","changePackagingButton","selectedVariantId","onClickRemoveProduct"]}}},d={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:o,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),hideCartButton:!1}},l={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,defaultQuantity:"4",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl)}},c={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl)}},s={render:r=>u(i,{...r}),args:{cardDisplay:"horizontal",product:I,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},loading:!1}};var L,A,x;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(A=d.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var D,z,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var R,W,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var Q,j,w;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const de=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],fe=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:d,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:l,__namedExportsOrder:de,default:ue},Symbol.toStringTag,{value:"Module"}));export{i as P,d as a,fe as p};
//# sourceMappingURL=product-card.stories-8b628609.js.map

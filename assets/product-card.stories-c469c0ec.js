import{r as _}from"./index-6f814c40.js";import{g as p}from"./picture-helper-86177d87.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as ae}from"./defaultFallbackImage-b43581a6.js";import{P as ne}from"./product-card-horizontal-ee0cf65e.js";import{P as oe}from"./product-card-vertical-9b843bbd.js";import{a as u}from"./jsx-runtime-76c5c2e2.js";import{d as ie,a as ue}from"./dummy-product-117119f6.js";function i({cardDisplay:r,product:e,addToCartButton:m,addToCart:a,hideCartButton:V,onChangeQuantity:h,onRemoveProduct:S,hideRemoveButton:M,productQuantityDisabled:U,loading:b,changePackagingButton:G,linkComponent:k,className:B,defaultQuantity:g,campaign:T,border:J}){if(!r)throw new Error("cardDisplay must be assigned");const{productId:q,productImageUrl:X,price:Y,itemNumberPerSalesUnit:Z,quantity:y}=e,[$,N]=_.useState(!1),[n,v]=_.useState({...e,productImage:p(q,X),quantity:y||"1",totalPrice:C(Y*Z*(g??y?parseInt(g??y):0)),selectedVariantId:q});function A(t){v(P=>{const f={...P,quantity:t.toString(),totalPrice:C(n.price*n.itemNumberPerSalesUnit*t)};return h==null||h(f),f})}function ee(){N(!0)}function re(t){S&&S(t)}function te(t){const P=n.productId===t.variantId?parseInt(n.quantity):1;v(f=>({...f,productId:t.variantId,productImage:p(t.variantId,t.imageUrl?t.imageUrl:ae),country:t.country,packaging:t.variantName,priceStr:t.listPricePerUnitString,price:t.price,salesUnit:t.salesUnit,itemNumberPerSalesUnit:t.itemNumberPerSalesUnit,totalPrice:C(t.price*t.itemNumberPerSalesUnit*P),quantity:P.toString(),selectedVariantId:t.variantId})),N(!1)}return r==="horizontal"?u(ne,{cardDisplay:"horizontal",loading:b,product:n,onChangeQuantity:A,productQuantityDisabled:U,addToCartButton:m,addToCart:a,onClickRemoveProduct:re,linkComponent:k,hideRemoveButton:M,className:B,hideCartButton:V,defaultQuantity:g,campaign:T,border:J}):r==="vertical"?u(oe,{cardDisplay:"vertical",loading:b,product:n,productImage:n.productImage,onChangeQuantity:A,productQuantityDisabled:U,addToCartButton:m,addToCart:a,changePackagingButton:G,onVariantsButtonClick:ee,variantsOpen:$,selectedVariantId:n.selectedVariantId,handlePackageChange:te,linkComponent:k,className:B,hideCartButton:V,defaultQuantity:g,campaign:T}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},addToCartButton:{defaultValue:null,description:"",name:"addToCartButton",required:!0,type:{name:"IButton"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},changePackagingButton:{defaultValue:null,description:"",name:"changePackagingButton",required:!1,type:{name:"IButton"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function E(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function de(r,e){const m=e[0].VariantId;return e.map(a=>({productName:r,variantName:a.Name,variantId:a.VariantId,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",listPricePerUnitString:a.ListPricePerUnitString,price:a.ListPricePerUnit,salesUnit:a.SalesUnit,itemNumberPerSalesUnit:a.UnitsPerBaseUnit,imageUrl:a.PrimaryImageUrl,checked:a.VariantId===m,tags:E(a.Tags),onChange:()=>{}}))}function H(r){const e=r.Variants[0];return{productId:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,productImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:E(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:de(r.DisplayName,r.Variants)}}const I=H(ie),o=H(ue),le={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","addToCartButton","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","changePackagingButton","selectedVariantId","onClickRemoveProduct"]}}},d={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:o,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},l={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,defaultQuantity:"4",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl)}},s={render:r=>u(i,{...r}),args:{cardDisplay:"horizontal",product:I,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var L,x,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var D,j,z;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var O,R,W;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var Q,K,w;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(w=(K=s.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};const ce=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],he=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:d,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:l,__namedExportsOrder:ce,default:le},Symbol.toStringTag,{value:"Module"}));export{i as P,d as a,s as b,he as p};
//# sourceMappingURL=product-card.stories-c469c0ec.js.map

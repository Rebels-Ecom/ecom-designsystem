import{r as R}from"./index-6f814c40.js";import{g as p}from"./picture-helper-86177d87.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as se}from"./defaultFallbackImage-b43581a6.js";import{P as pe}from"./product-card-horizontal-ce82c054.js";import{P as me}from"./product-card-vertical-9b499217.js";import{a as u}from"./jsx-runtime-76c5c2e2.js";import{d as ge,a as fe}from"./dummy-product-117119f6.js";function i({cardDisplay:r,product:e,addToCartButton:m,addToCart:t,hideCartButton:V,onChangeQuantity:h,onRemoveProduct:b,hideRemoveButton:re,productQuantityDisabled:S,loading:U,changePackagingButton:ae,linkComponent:k,className:q,defaultQuantity:g,campaign:T,border:te,disabled:B,buttonLoading:v,limitedProductText:N,showFavoriteIcon:A,isFavoriteIconActive:_,onFavoriteIconClick:L,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:x}){if(!r)throw new Error("cardDisplay must be assigned");const{productId:D,productImageUrl:ne,price:oe,itemNumberPerSalesUnit:ie,quantity:f}=e,[ue,j]=R.useState(!1),[n,z]=R.useState({...e,productImage:p(D,ne),quantity:f||"1",totalPrice:C(oe*ie*(g??f?parseInt(g??f):0)),selectedVariantId:D});function O(a){z(y=>{const P={...y,quantity:a.toString(),totalPrice:C(n.price*n.itemNumberPerSalesUnit*a)};return h==null||h(P),P})}function le(){j(!0)}function de(a){b&&b(a)}function ce(a){const y=n.productId===a.variantId?parseInt(n.quantity):1;z(P=>({...P,productId:a.variantId,productImage:p(a.variantId,a.imageUrl?a.imageUrl:se),country:a.country,packaging:a.variantName,priceStr:a.listPricePerUnitString,price:a.price,salesUnit:a.salesUnit,itemNumberPerSalesUnit:a.itemNumberPerSalesUnit,totalPrice:C(a.price*a.itemNumberPerSalesUnit*y),quantity:y.toString(),selectedVariantId:a.variantId})),j(!1)}return r==="horizontal"?u(pe,{cardDisplay:"horizontal",loading:U,product:n,onChangeQuantity:O,productQuantityDisabled:S,addToCartButton:m,addToCart:t,onClickRemoveProduct:de,linkComponent:k,hideRemoveButton:re,className:q,hideCartButton:V,defaultQuantity:g,campaign:T,border:te,disabled:B,buttonLoading:v,limitedProductText:N,showFavoriteIcon:A,isFavoriteIconActive:_,onFavoriteIconClick:L,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:x}):r==="vertical"?u(me,{cardDisplay:"vertical",loading:U,product:n,productImage:n.productImage,onChangeQuantity:O,productQuantityDisabled:S,addToCartButton:m,addToCart:t,changePackagingButton:ae,onVariantsButtonClick:le,variantsOpen:ue,selectedVariantId:n.selectedVariantId,handlePackageChange:ce,linkComponent:k,className:q,hideCartButton:V,defaultQuantity:g,campaign:T,disabled:B,buttonLoading:v,limitedProductText:N,showFavoriteIcon:A,isFavoriteIconActive:_,onFavoriteIconClick:L,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:x}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},addToCartButton:{defaultValue:null,description:"",name:"addToCartButton",required:!0,type:{name:"IButton"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},changePackagingButton:{defaultValue:null,description:"",name:"changePackagingButton",required:!1,type:{name:"IButton"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function $(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function ye(r,e){const m=e[0].VariantId;return e.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===m,tags:$(t.Tags),onChange:()=>{}}))}function ee(r){const e=r.Variants[0];return{productId:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,productImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:$(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:ye(r.DisplayName,r.Variants)}}const I=ee(ge),o=ee(fe),Pe={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","addToCartButton","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","changePackagingButton","selectedVariantId","onClickRemoveProduct"]}}},l={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},d={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,defaultQuantity:"4",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>u(i,{...r}),args:{cardDisplay:"vertical",product:I,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl)}},s={render:r=>u(i,{...r}),args:{cardDisplay:"horizontal",product:I,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var W,K,w;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productWineArgs,
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
}`,...(w=(K=l.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var E,H,Q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(Q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var M,G,J;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'horizontal',
    product: productNoVariantsArgs,
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
}`,...(Z=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ce=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],Te=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:l,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:d,__namedExportsOrder:Ce,default:Pe},Symbol.toStringTag,{value:"Module"}));export{i as P,l as a,s as b,Te as p};
//# sourceMappingURL=product-card.stories-8b36a45a.js.map

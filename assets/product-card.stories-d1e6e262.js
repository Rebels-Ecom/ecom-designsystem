import{r as R}from"./index-6f814c40.js";import{g as C}from"./picture-helper-86177d87.js";import{c as y}from"./format-helper-6b4b1091.js";import{f as se}from"./defaultFallbackImage-b43581a6.js";import{P as pe}from"./product-card-horizontal-a70aa011.js";import{P as me}from"./product-card-vertical-380a5ace.js";import{a as l}from"./jsx-runtime-76c5c2e2.js";import{d as ge,a as Pe}from"./dummy-product-117119f6.js";function i({cardDisplay:r,product:e,loading:p,buttonLoading:t,disabled:h,addToCart:S,addToCartBtnLabel:b,hideCartButton:U,onChangeQuantity:I,productQuantityDisabled:q,defaultQuantity:m,onRemoveProduct:k,hideRemoveButton:re,listPriceLabel:ae,campaign:v,limitedProductText:N,showFavoriteIcon:T,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:B,onSaveToPurchaseListClick:F,border:te,linkComponent:L,className:x}){if(!r)throw new Error("cardDisplay must be assigned");const{productId:D,productImageUrl:ne,price:oe,itemNumberPerSalesUnit:ie,quantity:g}=e,[le,j]=R.useState(!1),[n,z]=R.useState({...e,productImage:C(D,ne),quantity:g||"1",totalPrice:y(oe*ie*(m??g?parseInt(m??g):0)),selectedVariantId:D});function O(a){z(P=>{const f={...P,quantity:a.toString(),totalPrice:y(n.price*n.itemNumberPerSalesUnit*a)};return I==null||I(f),f})}function de(){j(!0)}function ue(a){k&&k(a)}function ce(a){const P=n.productId===a.variantId?parseInt(n.quantity):1;z(f=>({...f,productId:a.variantId,productImage:a.image??se,packaging:a.variantName,priceStr:a.listPricePerUnitString,price:a.price,salesUnit:a.salesUnit,itemNumberPerSalesUnit:a.itemNumberPerSalesUnit,totalPrice:y(a.price*a.itemNumberPerSalesUnit*P),quantity:P.toString(),selectedVariantId:a.variantId})),j(!1)}return r==="horizontal"?l(pe,{cardDisplay:"horizontal",product:n,loading:p,buttonLoading:t,disabled:h,addToCart:S,addToCartBtnLabel:b,hideCartButton:U,onChangeQuantity:O,productQuantityDisabled:q,defaultQuantity:m,onClickRemoveProduct:ue,hideRemoveButton:re,campaign:v,limitedProductText:N,showFavoriteIcon:T,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:B,onSaveToPurchaseListClick:F,border:te,linkComponent:L,className:x}):r==="vertical"?l(me,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:p,buttonLoading:t,disabled:h,variantsOpen:le,onVariantsButtonClick:de,handlePackageChange:ce,selectedVariantId:n.selectedVariantId,addToCart:S,addToCartBtnLabel:b,hideCartButton:U,onChangeQuantity:O,productQuantityDisabled:q,defaultQuantity:m,listPriceLabel:ae,campaign:v,limitedProductText:N,showFavoriteIcon:T,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:B,onSaveToPurchaseListClick:F,linkComponent:L,className:x}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},listPriceLabel:{defaultValue:null,description:"",name:"listPriceLabel",required:!1,type:{name:"string"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function $(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function fe(r,e){const p=e[0].VariantId;return e.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",listPricePerUnitString:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===p,tags:$(t.Tags),onChange:()=>{}}))}function ee(r){const e=r.Variants[0];return{productId:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,productImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:$(e.Tags),quantity:"1",totalPrice:y(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:fe(r.DisplayName,r.Variants)}}const V=ee(ge),o=ee(Pe),ye={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},d={render:r=>l(i,{...r}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(o.productId,o.productImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},u={render:r=>l(i,{...r}),args:{cardDisplay:"vertical",product:V,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(o.productId,o.productImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>l(i,{...r}),args:{cardDisplay:"vertical",product:V,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:C(o.productId,o.productImageUrl)}},s={render:r=>l(i,{...r}),args:{cardDisplay:"horizontal",product:V,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var W,K,w;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    productImage: getProductPicture(productWineArgs.productId, productWineArgs.productImageUrl),
    hideCartButton: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(w=(K=d.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var E,H,Q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    productImage: getProductPicture(productWineArgs.productId, productWineArgs.productImageUrl),
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(Q=(H=u.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var M,G,J;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    loading: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(Z=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ce=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],ve=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:d,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:u,__namedExportsOrder:Ce,default:ye},Symbol.toStringTag,{value:"Module"}));export{i as P,d as a,s as b,ve as p};
//# sourceMappingURL=product-card.stories-d1e6e262.js.map

import{r as K,j as l}from"./jsx-runtime-a3a6c0b8.js";import{g as V}from"./picture-helper-1d1954b7.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as me}from"./defaultFallbackImage-b43581a6.js";import{P as ge}from"./product-card-horizontal-41cea787.js";import{P as fe}from"./product-card-vertical-b954f89b.js";import{b as Pe,a as ye}from"./dummy-product-d82fa475.js";function i({cardDisplay:r,product:e,loading:p,buttonLoading:t,disabled:S,addToCart:U,addToCartBtnLabel:b,hideCartButton:q,hidePrice:k,onChangeQuantity:h,productQuantityDisabled:N,defaultQuantity:m,onRemoveProduct:v,hideRemoveButton:te,campaign:T,limitedProductText:A,showFavoriteIcon:_,isFavoriteIconActive:B,onFavoriteIconClick:F,showAddToPurchaseListIcon:x,onSaveToPurchaseListClick:L,border:ne,displaySmallImage:oe,linkComponent:D,className:O,maxQuantity:g}){if(!r)throw new Error("cardDisplay must be assigned");const{partNo:j,primaryImageUrl:ie,pricePerUnit:le,itemNumberPerSalesUnit:ue,quantity:f}=e,[de,z]=K.useState(!1),[n,R]=K.useState({...e,productImage:V(j,ie),quantity:f||"1",totalPrice:C(le*ue*(m??f?parseInt(m??f):0)),selectedVariantId:j});function W(a){g&&a>g||R(P=>{const y={...P,quantity:a.toString(),totalPrice:C(n.pricePerUnit*n.itemNumberPerSalesUnit*a)};return h==null||h(y),y})}function se(){z(!0)}function ce(a){v&&v(a)}function pe(a){const P=n.partNo===a.variantId?parseInt(n.quantity):1;R(y=>({...y,partNo:a.variantId,productImage:a.image??me,packaging:a.variantName,price:a.price,priceStr:a.priceStr,pricePerUnit:a.pricePerUnit,pricePerUnitString:a.pricePerUnitString,salesUnit:a.salesUnit,itemNumberPerSalesUnit:a.itemNumberPerSalesUnit,totalPrice:C(a.price*a.itemNumberPerSalesUnit*P),quantity:P.toString(),selectedVariantId:a.variantId,sellerOnly:a.sellerOnly,productUrl:`/Product/${a.variantId}`})),z(!1)}return r==="horizontal"?l(ge,{cardDisplay:"horizontal",product:n,loading:p,buttonLoading:t,disabled:S,addToCart:U,addToCartBtnLabel:b,hideCartButton:q,hidePrice:k,onChangeQuantity:W,productQuantityDisabled:N,defaultQuantity:m,onClickRemoveProduct:ce,hideRemoveButton:te,campaign:T,limitedProductText:A,showFavoriteIcon:_,isFavoriteIconActive:B,onFavoriteIconClick:F,showAddToPurchaseListIcon:x,onSaveToPurchaseListClick:L,border:ne,displaySmallImage:oe,linkComponent:D,className:O,maxQuantity:g}):r==="vertical"?l(fe,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:p,buttonLoading:t,disabled:S,variantsOpen:de,onVariantsButtonClick:se,handlePackageChange:pe,selectedVariantId:n.selectedVariantId,addToCart:U,addToCartBtnLabel:b,hideCartButton:q,hidePrice:k,onChangeQuantity:W,productQuantityDisabled:N,defaultQuantity:m,campaign:T,limitedProductText:A,showFavoriteIcon:_,isFavoriteIconActive:B,onFavoriteIconClick:F,showAddToPurchaseListIcon:x,onSaveToPurchaseListClick:L,linkComponent:D,className:O,maxQuantity:g}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function re(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Ce(r,e){const p=e[0].VariantId;return e.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===p,tags:re(t.Tags),onChange:()=>{}}))}function ae(r){const e=r.Variants[0];return{partNo:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:re(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Ce(r.DisplayName,r.Variants)}}const I=ae(Pe),o=ae(ye),Ve={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},u={render:r=>l(i,{...r}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(o.partNo,o.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},d={render:r=>l(i,{...r}),args:{cardDisplay:"vertical",product:I,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(o.partNo,o.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},s={render:r=>l(i,{...r}),args:{cardDisplay:"vertical",product:I,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:V(o.partNo,o.primaryImageUrl)}},c={render:r=>l(i,{...r}),args:{cardDisplay:"horizontal",product:I,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var w,E,H;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,Q,$;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var G,J,X;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=s.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const he=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],ve=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:u,ProductCardStory_Horizontal:c,ProductCardStory_Loading:s,ProductCardStory_NoVariants:d,__namedExportsOrder:he,default:Ve},Symbol.toStringTag,{value:"Module"}));export{i as P,c as a,u as b,ve as p};

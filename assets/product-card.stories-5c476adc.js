import{r as _,j as i}from"./jsx-runtime-a3a6c0b8.js";import{g as C}from"./picture-helper-1d1954b7.js";import{c as P}from"./format-helper-6b4b1091.js";import{f as ye}from"./defaultFallbackImage-b43581a6.js";import{P as Pe}from"./product-card-horizontal-3b8fb0af.js";import{P as Ce}from"./product-card-vertical-730bcc4c.js";import{P as Ve}from"./product-card-restricted-7c55355b.js";import{b as he,a as Ie}from"./dummy-product-d82fa475.js";function u({cardDisplay:r,isRestrictedUser:a,product:g,loading:t,buttonLoading:V,disabled:h,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,onChangeQuantity:F,productQuantityDisabled:x,defaultQuantity:f,onRemoveProduct:D,hideRemoveButton:ue,limitedProductText:O,showFavoriteIcon:R,isFavoriteIconActive:j,onFavoriteIconClick:L,showAddToPurchaseListIcon:z,onSaveToPurchaseListClick:W,border:de,displaySmallImage:se,linkComponent:b,className:k,maxQuantity:y,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v}){if(!r)throw new Error("cardDisplay must be assigned");const{partNo:K,primaryImageUrl:ce,pricePerUnit:pe,itemNumberPerSalesUnit:me,quantity:o}=g,[w,A]=_.useState(!1),[n,T]=_.useState({...g,productImage:C(K,ce),quantity:o||"1",totalPrice:P(pe*me*(f??o?parseInt(f??o):0)),selectedVariantId:K});_.useEffect(()=>{T(e=>({...e,quantity:o||"1"}))},[o]);function E(e){if(y&&e>y)return;const d={...n,quantity:e.toString(),totalPrice:P(n.pricePerUnit*n.itemNumberPerSalesUnit*e)};F?F(d):T(d)}function Q(){A(!0)}function H(){A(!1)}function ge(e){D&&D(e)}function M(e){const d=n.partNo===e.variantId?parseInt(n.quantity):1;T(fe=>({...fe,partNo:e.variantId,productImage:e.image??ye,packaging:e.variantName,price:e.price,priceStr:e.priceStr,pricePerUnit:e.pricePerUnit,pricePerUnitString:e.pricePerUnitString,salesUnit:e.salesUnit,itemNumberPerSalesUnit:e.itemNumberPerSalesUnit,totalPrice:P(e.price*e.itemNumberPerSalesUnit*d),quantity:d.toString(),selectedVariantId:e.variantId,sellerOnly:e.sellerOnly,activeCampaign:e.activeCampaign,productUrl:`/Product/${e.variantId}`})),A(!1)}return r==="horizontal"?i(Pe,{cardDisplay:"horizontal",product:n,loading:t,buttonLoading:V,disabled:h,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,onChangeQuantity:E,productQuantityDisabled:x,defaultQuantity:f,onClickRemoveProduct:ge,hideRemoveButton:ue,limitedProductText:O,showFavoriteIcon:R,isFavoriteIconActive:j,onFavoriteIconClick:L,showAddToPurchaseListIcon:z,onSaveToPurchaseListClick:W,border:de,displaySmallImage:se,linkComponent:b,className:k,maxQuantity:y,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v}):r==="vertical"?a?i(Ve,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:V,disabled:h,variantsOpen:w,onVariantsButtonClick:Q,handlePackageChange:M,selectedVariantId:n.selectedVariantId,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,linkComponent:b,className:k,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v,onCloseVariants:H}):i(Ce,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:V,disabled:h,variantsOpen:w,onVariantsButtonClick:Q,handlePackageChange:M,selectedVariantId:n.selectedVariantId,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,onChangeQuantity:E,productQuantityDisabled:x,defaultQuantity:f,limitedProductText:O,showFavoriteIcon:R,isFavoriteIconActive:j,onFavoriteIconClick:L,showAddToPurchaseListIcon:z,onSaveToPurchaseListClick:W,linkComponent:b,className:k,maxQuantity:y,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v,onCloseVariants:H}):null}try{u.displayName="ProductCard",u.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isRestrictedUser:{defaultValue:null,description:"",name:"isRestrictedUser",required:!1,type:{name:"boolean"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},accessoryPotItemTooltipText:{defaultValue:null,description:"",name:"accessoryPotItemTooltipText",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onCloseVariants:{defaultValue:null,description:"",name:"onCloseVariants",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function ie(r){return r.map(a=>({text:a.Text,shape:a.Shape?a.Shape:"pill",color:a.Class}))}function Se(r,a){const g=a[0].VariantId;return a.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===g,tags:ie(t.Tags),onChange:()=>{}}))}function le(r){const a=r.Variants[0];return{partNo:a.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,primaryImageUrl:a.PrimaryImageUrl,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",packaging:a.VariantFullName,priceStr:a.ListPricePerUnitString,price:a.ListPricePerUnit,salesUnit:a.SalesUnit,itemNumberPerSalesUnit:a.UnitsPerBaseUnit,tags:ie(a.Tags),quantity:"1",totalPrice:P(a.ListPricePerUnit*a.UnitsPerBaseUnit),productVariantList:Se(r.DisplayName,r.Variants)}}const B=le(he),l=le(Ie),Ue={title:"Design System/Molecules/ProductCard",component:u,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},s={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:l,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(l.partNo,l.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:B,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(l.partNo,l.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},p={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:B,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:C(l.partNo,l.primaryImageUrl)}},m={render:r=>i(u,{...r}),args:{cardDisplay:"horizontal",product:B,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var $,G,J;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=s.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,oe;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const qe=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],Fe=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:s,ProductCardStory_Horizontal:m,ProductCardStory_Loading:p,ProductCardStory_NoVariants:c,__namedExportsOrder:qe,default:Ue},Symbol.toStringTag,{value:"Module"}));export{u as P,m as a,s as b,Fe as p};

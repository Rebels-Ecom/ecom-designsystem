import{r as q,j as u}from"./jsx-runtime-a3a6c0b8.js";import{g as V}from"./picture-helper-1d1954b7.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as ye}from"./defaultFallbackImage-b43581a6.js";import{P as Pe}from"./product-card-horizontal-f3242eff.js";import{P as Ce}from"./product-card-vertical-905a25d4.js";import{b as Ve,a as he}from"./dummy-product-d82fa475.js";function l({cardDisplay:r,product:e,loading:m,buttonLoading:t,disabled:b,addToCart:k,addToCartBtnLabel:N,hideCartButton:v,hidePrice:T,onChangeQuantity:h,productQuantityDisabled:A,defaultQuantity:g,onRemoveProduct:_,hideRemoveButton:oe,campaign:B,limitedProductText:F,showFavoriteIcon:x,isFavoriteIconActive:L,onFavoriteIconClick:O,showAddToPurchaseListIcon:D,onSaveToPurchaseListClick:j,border:ie,displaySmallImage:le,linkComponent:z,className:R,maxQuantity:f,sellerOnlyTooltipText:W,accessoryPotItemTooltipText:K}){if(!r)throw new Error("cardDisplay must be assigned");const{partNo:w,primaryImageUrl:ue,pricePerUnit:de,itemNumberPerSalesUnit:se,quantity:o}=e,[ce,I]=q.useState(!1),[n,S]=q.useState({...e,productImage:V(w,ue),quantity:o||"1",totalPrice:C(de*se*(g??o?parseInt(g??o):0)),selectedVariantId:w});q.useEffect(()=>{S(a=>({...a,quantity:o||"1"}))},[o]);function E(a){f&&a>f||S(y=>{const P={...y,quantity:a.toString(),totalPrice:C(n.pricePerUnit*n.itemNumberPerSalesUnit*a)};return h==null||h(P),P})}function pe(){I(!0)}function me(){I(!1)}function ge(a){_&&_(a)}function fe(a){const y=n.partNo===a.variantId?parseInt(n.quantity):1;S(P=>({...P,partNo:a.variantId,productImage:a.image??ye,packaging:a.variantName,price:a.price,priceStr:a.priceStr,pricePerUnit:a.pricePerUnit,pricePerUnitString:a.pricePerUnitString,salesUnit:a.salesUnit,itemNumberPerSalesUnit:a.itemNumberPerSalesUnit,totalPrice:C(a.price*a.itemNumberPerSalesUnit*y),quantity:y.toString(),selectedVariantId:a.variantId,sellerOnly:a.sellerOnly,productUrl:`/Product/${a.variantId}`})),I(!1)}return r==="horizontal"?u(Pe,{cardDisplay:"horizontal",product:n,loading:m,buttonLoading:t,disabled:b,addToCart:k,addToCartBtnLabel:N,hideCartButton:v,hidePrice:T,onChangeQuantity:E,productQuantityDisabled:A,defaultQuantity:g,onClickRemoveProduct:ge,hideRemoveButton:oe,campaign:B,limitedProductText:F,showFavoriteIcon:x,isFavoriteIconActive:L,onFavoriteIconClick:O,showAddToPurchaseListIcon:D,onSaveToPurchaseListClick:j,border:ie,displaySmallImage:le,linkComponent:z,className:R,maxQuantity:f,sellerOnlyTooltipText:W,accessoryPotItemTooltipText:K}):r==="vertical"?u(Ce,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:m,buttonLoading:t,disabled:b,variantsOpen:ce,onVariantsButtonClick:pe,handlePackageChange:fe,selectedVariantId:n.selectedVariantId,addToCart:k,addToCartBtnLabel:N,hideCartButton:v,hidePrice:T,onChangeQuantity:E,productQuantityDisabled:A,defaultQuantity:g,campaign:B,limitedProductText:F,showFavoriteIcon:x,isFavoriteIconActive:L,onFavoriteIconClick:O,showAddToPurchaseListIcon:D,onSaveToPurchaseListClick:j,linkComponent:z,className:R,maxQuantity:f,sellerOnlyTooltipText:W,accessoryPotItemTooltipText:K,onCloseVariants:me}):null}try{l.displayName="ProductCard",l.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},accessoryPotItemTooltipText:{defaultValue:null,description:"",name:"accessoryPotItemTooltipText",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onCloseVariants:{defaultValue:null,description:"",name:"onCloseVariants",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function te(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Ie(r,e){const m=e[0].VariantId;return e.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===m,tags:te(t.Tags),onChange:()=>{}}))}function ne(r){const e=r.Variants[0];return{partNo:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:te(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Ie(r.DisplayName,r.Variants)}}const U=ne(Ve),i=ne(he),Se={title:"Design System/Molecules/ProductCard",component:l,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},d={render:r=>u(l,{...r}),args:{cardDisplay:"vertical",product:i,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(i.partNo,i.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},s={render:r=>u(l,{...r}),args:{cardDisplay:"vertical",product:U,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(i.partNo,i.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>u(l,{...r}),args:{cardDisplay:"vertical",product:U,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:V(i.partNo,i.primaryImageUrl)}},p={render:r=>u(l,{...r}),args:{cardDisplay:"horizontal",product:U,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var H,M,Q;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var $,G,J;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=s.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const qe=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],_e=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:d,ProductCardStory_Horizontal:p,ProductCardStory_Loading:c,ProductCardStory_NoVariants:s,__namedExportsOrder:qe,default:Se},Symbol.toStringTag,{value:"Module"}));export{l as P,p as a,d as b,_e as p};

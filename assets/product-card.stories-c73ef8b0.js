import{r as F,j as i}from"./jsx-runtime-a3a6c0b8.js";import{g as V}from"./picture-helper-1d1954b7.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as Pe}from"./defaultFallbackImage-b43581a6.js";import{P as Ce}from"./product-card-horizontal-bc722d1f.js";import{P as Ve}from"./product-card-vertical-b98723af.js";import{P as Ie}from"./product-card-restricted-239bc7cf.js";import{b as he,a as Se}from"./dummy-product-d82fa475.js";function u({cardDisplay:r,isRestrictedUser:e,product:m,loading:t,buttonLoading:I,disabled:h,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,onChangeQuantity:k,productQuantityDisabled:D,defaultQuantity:g,onRemoveProduct:O,hideRemoveButton:se,campaign:R,limitedProductText:j,showFavoriteIcon:L,isFavoriteIconActive:z,onFavoriteIconClick:W,showAddToPurchaseListIcon:K,onSaveToPurchaseListClick:w,border:ce,displaySmallImage:pe,linkComponent:N,className:v,maxQuantity:f,sellerOnlyTooltipText:A,accessoryPotItemTooltipText:T}){if(!r)throw new Error("cardDisplay must be assigned");const{partNo:E,primaryImageUrl:me,pricePerUnit:ge,itemNumberPerSalesUnit:fe,quantity:o}=m,[H,_]=F.useState(!1),[n,B]=F.useState({...m,productImage:V(E,me),quantity:o||"1",totalPrice:C(ge*fe*(g??o?parseInt(g??o):0)),selectedVariantId:E});F.useEffect(()=>{B(a=>({...a,quantity:o||"1"}))},[o]);function M(a){f&&a>f||B(y=>{const P={...y,quantity:a.toString(),totalPrice:C(n.pricePerUnit*n.itemNumberPerSalesUnit*a)};return k==null||k(P),P})}function Q(){_(!0)}function $(){_(!1)}function ye(a){O&&O(a)}function G(a){const y=n.partNo===a.variantId?parseInt(n.quantity):1;B(P=>({...P,partNo:a.variantId,productImage:a.image??Pe,packaging:a.variantName,price:a.price,priceStr:a.priceStr,pricePerUnit:a.pricePerUnit,pricePerUnitString:a.pricePerUnitString,salesUnit:a.salesUnit,itemNumberPerSalesUnit:a.itemNumberPerSalesUnit,totalPrice:C(a.price*a.itemNumberPerSalesUnit*y),quantity:y.toString(),selectedVariantId:a.variantId,sellerOnly:a.sellerOnly,productUrl:`/Product/${a.variantId}`})),_(!1)}return r==="horizontal"?i(Ce,{cardDisplay:"horizontal",product:n,loading:t,buttonLoading:I,disabled:h,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,onChangeQuantity:M,productQuantityDisabled:D,defaultQuantity:g,onClickRemoveProduct:ye,hideRemoveButton:se,campaign:R,limitedProductText:j,showFavoriteIcon:L,isFavoriteIconActive:z,onFavoriteIconClick:W,showAddToPurchaseListIcon:K,onSaveToPurchaseListClick:w,border:ce,displaySmallImage:pe,linkComponent:N,className:v,maxQuantity:f,sellerOnlyTooltipText:A,accessoryPotItemTooltipText:T}):r==="vertical"?e?i(Ie,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:I,disabled:h,variantsOpen:H,onVariantsButtonClick:Q,handlePackageChange:G,selectedVariantId:n.selectedVariantId,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,linkComponent:N,className:v,sellerOnlyTooltipText:A,accessoryPotItemTooltipText:T,onCloseVariants:$}):i(Ve,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:I,disabled:h,variantsOpen:H,onVariantsButtonClick:Q,handlePackageChange:G,selectedVariantId:n.selectedVariantId,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,onChangeQuantity:M,productQuantityDisabled:D,defaultQuantity:g,campaign:R,limitedProductText:j,showFavoriteIcon:L,isFavoriteIconActive:z,onFavoriteIconClick:W,showAddToPurchaseListIcon:K,onSaveToPurchaseListClick:w,linkComponent:N,className:v,maxQuantity:f,sellerOnlyTooltipText:A,accessoryPotItemTooltipText:T,onCloseVariants:$}):null}try{u.displayName="ProductCard",u.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isRestrictedUser:{defaultValue:null,description:"",name:"isRestrictedUser",required:!1,type:{name:"boolean"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},accessoryPotItemTooltipText:{defaultValue:null,description:"",name:"accessoryPotItemTooltipText",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onCloseVariants:{defaultValue:null,description:"",name:"onCloseVariants",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function ue(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Ue(r,e){const m=e[0].VariantId;return e.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===m,tags:ue(t.Tags),onChange:()=>{}}))}function de(r){const e=r.Variants[0];return{partNo:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:ue(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Ue(r.DisplayName,r.Variants)}}const x=de(he),l=de(Se),qe={title:"Design System/Molecules/ProductCard",component:u,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},d={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:l,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(l.partNo,l.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},s={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:x,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(l.partNo,l.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:x,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:V(l.partNo,l.primaryImageUrl)}},p={render:r=>i(u,{...r}),args:{cardDisplay:"horizontal",product:x,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var J,X,Y;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=s.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,ne;c.parameters={...c.parameters,docs:{...(re=c.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ie,le;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const be=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],xe=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:d,ProductCardStory_Horizontal:p,ProductCardStory_Loading:c,ProductCardStory_NoVariants:s,__namedExportsOrder:be,default:qe},Symbol.toStringTag,{value:"Module"}));export{u as P,p as a,d as b,xe as p};

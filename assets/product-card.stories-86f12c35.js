import{r as _,j as i}from"./jsx-runtime-a3a6c0b8.js";import{g as C}from"./picture-helper-1d1954b7.js";import{c as P}from"./format-helper-6b4b1091.js";import{f as Pe}from"./defaultFallbackImage-b43581a6.js";import{P as Ce}from"./product-card-horizontal-bc722d1f.js";import{P as Ve}from"./product-card-vertical-b98723af.js";import{P as he}from"./product-card-restricted-239bc7cf.js";import{b as Ie,a as Se}from"./dummy-product-d82fa475.js";function u({cardDisplay:r,isRestrictedUser:e,product:g,loading:t,buttonLoading:V,disabled:h,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,onChangeQuantity:F,productQuantityDisabled:x,defaultQuantity:f,onRemoveProduct:D,hideRemoveButton:de,campaign:O,limitedProductText:R,showFavoriteIcon:j,isFavoriteIconActive:L,onFavoriteIconClick:z,showAddToPurchaseListIcon:W,onSaveToPurchaseListClick:K,border:se,displaySmallImage:ce,linkComponent:b,className:k,maxQuantity:y,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v}){if(!r)throw new Error("cardDisplay must be assigned");const{partNo:w,primaryImageUrl:pe,pricePerUnit:me,itemNumberPerSalesUnit:ge,quantity:o}=g,[E,A]=_.useState(!1),[n,T]=_.useState({...g,productImage:C(w,pe),quantity:o||"1",totalPrice:P(me*ge*(f??o?parseInt(f??o):0)),selectedVariantId:w});_.useEffect(()=>{T(a=>({...a,quantity:o||"1"}))},[o]);function Q(a){if(y&&a>y)return;const d={...n,quantity:a.toString(),totalPrice:P(n.pricePerUnit*n.itemNumberPerSalesUnit*a)};F?F(d):T(d)}function H(){A(!0)}function M(){A(!1)}function fe(a){D&&D(a)}function $(a){const d=n.partNo===a.variantId?parseInt(n.quantity):1;T(ye=>({...ye,partNo:a.variantId,productImage:a.image??Pe,packaging:a.variantName,price:a.price,priceStr:a.priceStr,pricePerUnit:a.pricePerUnit,pricePerUnitString:a.pricePerUnitString,salesUnit:a.salesUnit,itemNumberPerSalesUnit:a.itemNumberPerSalesUnit,totalPrice:P(a.price*a.itemNumberPerSalesUnit*d),quantity:d.toString(),selectedVariantId:a.variantId,sellerOnly:a.sellerOnly,productUrl:`/Product/${a.variantId}`})),A(!1)}return r==="horizontal"?i(Ce,{cardDisplay:"horizontal",product:n,loading:t,buttonLoading:V,disabled:h,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,onChangeQuantity:Q,productQuantityDisabled:x,defaultQuantity:f,onClickRemoveProduct:fe,hideRemoveButton:de,campaign:O,limitedProductText:R,showFavoriteIcon:j,isFavoriteIconActive:L,onFavoriteIconClick:z,showAddToPurchaseListIcon:W,onSaveToPurchaseListClick:K,border:se,displaySmallImage:ce,linkComponent:b,className:k,maxQuantity:y,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v}):r==="vertical"?e?i(he,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:V,disabled:h,variantsOpen:E,onVariantsButtonClick:H,handlePackageChange:$,selectedVariantId:n.selectedVariantId,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,linkComponent:b,className:k,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v,onCloseVariants:M}):i(Ve,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:V,disabled:h,variantsOpen:E,onVariantsButtonClick:H,handlePackageChange:$,selectedVariantId:n.selectedVariantId,addToCart:I,addToCartBtnLabel:S,hideCartButton:U,hidePrice:q,onChangeQuantity:Q,productQuantityDisabled:x,defaultQuantity:f,campaign:O,limitedProductText:R,showFavoriteIcon:j,isFavoriteIconActive:L,onFavoriteIconClick:z,showAddToPurchaseListIcon:W,onSaveToPurchaseListClick:K,linkComponent:b,className:k,maxQuantity:y,sellerOnlyTooltipText:N,accessoryPotItemTooltipText:v,onCloseVariants:M}):null}try{u.displayName="ProductCard",u.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isRestrictedUser:{defaultValue:null,description:"",name:"isRestrictedUser",required:!1,type:{name:"boolean"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},accessoryPotItemTooltipText:{defaultValue:null,description:"",name:"accessoryPotItemTooltipText",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onCloseVariants:{defaultValue:null,description:"",name:"onCloseVariants",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function le(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Ue(r,e){const g=e[0].VariantId;return e.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===g,tags:le(t.Tags),onChange:()=>{}}))}function ue(r){const e=r.Variants[0];return{partNo:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:le(e.Tags),quantity:"1",totalPrice:P(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Ue(r.DisplayName,r.Variants)}}const B=ue(Ie),l=ue(Se),qe={title:"Design System/Molecules/ProductCard",component:u,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},s={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:l,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(l.partNo,l.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:B,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(l.partNo,l.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},p={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:B,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:C(l.partNo,l.primaryImageUrl)}},m={render:r=>i(u,{...r}),args:{cardDisplay:"horizontal",product:B,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var G,J,X;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=s.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(re=p.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,oe,ie;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const be=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],xe=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:s,ProductCardStory_Horizontal:m,ProductCardStory_Loading:p,ProductCardStory_NoVariants:c,__namedExportsOrder:be,default:qe},Symbol.toStringTag,{value:"Module"}));export{u as P,m as a,s as b,xe as p};

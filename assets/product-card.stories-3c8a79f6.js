import{r as K,j as l}from"./jsx-runtime-a3a6c0b8.js";import{g as C}from"./picture-helper-1d1954b7.js";import{c as y}from"./format-helper-6b4b1091.js";import{f as me}from"./defaultFallbackImage-b43581a6.js";import{P as ge}from"./product-card-horizontal-47eaa1b9.js";import{P as fe}from"./product-card-vertical-ef2149da.js";import{b as Pe,a as ye}from"./dummy-product-d82fa475.js";function i({cardDisplay:a,product:e,loading:p,buttonLoading:t,disabled:I,addToCart:S,addToCartBtnLabel:U,hideCartButton:b,hidePrice:q,onChangeQuantity:V,productQuantityDisabled:k,defaultQuantity:m,onRemoveProduct:N,hideRemoveButton:te,campaign:v,limitedProductText:T,showFavoriteIcon:A,isFavoriteIconActive:_,onFavoriteIconClick:B,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:x,border:ne,displaySmallImage:oe,linkComponent:L,className:D,maxQuantity:j}){if(!a)throw new Error("cardDisplay must be assigned");const{partNo:z,primaryImageUrl:ie,pricePerUnit:le,itemNumberPerSalesUnit:ue,quantity:g}=e,[de,O]=K.useState(!1),[n,R]=K.useState({...e,productImage:C(z,ie),quantity:g||"1",totalPrice:y(le*ue*(m??g?parseInt(m??g):0)),selectedVariantId:z});function W(r){j&&r>j||R(f=>{const P={...f,quantity:r.toString(),totalPrice:y(n.pricePerUnit*n.itemNumberPerSalesUnit*r)};return V==null||V(P),P})}function ce(){O(!0)}function se(r){N&&N(r)}function pe(r){const f=n.partNo===r.variantId?parseInt(n.quantity):1;R(P=>({...P,partNo:r.variantId,productImage:r.image??me,packaging:r.variantName,price:r.price,priceStr:r.priceStr,pricePerUnit:r.pricePerUnit,pricePerUnitString:r.pricePerUnitString,salesUnit:r.salesUnit,itemNumberPerSalesUnit:r.itemNumberPerSalesUnit,totalPrice:y(r.price*r.itemNumberPerSalesUnit*f),quantity:f.toString(),selectedVariantId:r.variantId,productUrl:`/Product/${r.variantId}`})),O(!1)}return a==="horizontal"?l(ge,{cardDisplay:"horizontal",product:n,loading:p,buttonLoading:t,disabled:I,addToCart:S,addToCartBtnLabel:U,hideCartButton:b,hidePrice:q,onChangeQuantity:W,productQuantityDisabled:k,defaultQuantity:m,onClickRemoveProduct:se,hideRemoveButton:te,campaign:v,limitedProductText:T,showFavoriteIcon:A,isFavoriteIconActive:_,onFavoriteIconClick:B,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:x,border:ne,displaySmallImage:oe,linkComponent:L,className:D}):a==="vertical"?l(fe,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:p,buttonLoading:t,disabled:I,variantsOpen:de,onVariantsButtonClick:ce,handlePackageChange:pe,selectedVariantId:n.selectedVariantId,addToCart:S,addToCartBtnLabel:U,hideCartButton:b,hidePrice:q,onChangeQuantity:W,productQuantityDisabled:k,defaultQuantity:m,campaign:v,limitedProductText:T,showFavoriteIcon:A,isFavoriteIconActive:_,onFavoriteIconClick:B,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:x,linkComponent:L,className:D}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function ae(a){return a.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Ce(a,e){const p=e[0].VariantId;return e.map(t=>({productName:a,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===p,tags:ae(t.Tags),onChange:()=>{}}))}function re(a){const e=a.Variants[0];return{partNo:e.VariantId,productUrl:a.ProductUrl,productName:a.DisplayName,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:ae(e.Tags),quantity:"1",totalPrice:y(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Ce(a.DisplayName,a.Variants)}}const h=re(Pe),o=re(ye),Ve={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},u={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(o.partNo,o.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},d={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:h,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(o.partNo,o.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:h,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:C(o.partNo,o.primaryImageUrl)}},s={render:a=>l(i,{...a}),args:{cardDisplay:"horizontal",product:h,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var w,E,H;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var Q,M,$;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var G,J,X;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=c.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const he=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],ve=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:u,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:d,__namedExportsOrder:he,default:Ve},Symbol.toStringTag,{value:"Module"}));export{i as P,s as a,u as b,ve as p};

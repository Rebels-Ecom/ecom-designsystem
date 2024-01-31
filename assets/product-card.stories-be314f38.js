import{r as E,j as l}from"./jsx-runtime-a3a6c0b8.js";import{g as V}from"./picture-helper-1d1954b7.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as ye}from"./defaultFallbackImage-b43581a6.js";import{P as Pe}from"./product-card-horizontal-e4b89333.js";import{P as Ce}from"./product-card-vertical-d7be6886.js";import{b as Ve,a as he}from"./dummy-product-d82fa475.js";function i({cardDisplay:a,product:e,loading:p,buttonLoading:t,disabled:U,addToCart:b,addToCartBtnLabel:q,hideCartButton:k,hidePrice:N,onChangeQuantity:h,productQuantityDisabled:v,defaultQuantity:m,onRemoveProduct:T,hideRemoveButton:oe,campaign:A,limitedProductText:_,showFavoriteIcon:B,isFavoriteIconActive:F,onFavoriteIconClick:x,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:O,border:ie,displaySmallImage:le,linkComponent:D,className:j,maxQuantity:g,sellerOnlyTooltipText:z,accessoryPotItemTooltipText:R}){if(!a)throw new Error("cardDisplay must be assigned");const{partNo:W,primaryImageUrl:ue,pricePerUnit:de,itemNumberPerSalesUnit:se,quantity:f}=e,[ce,I]=E.useState(!1),[n,K]=E.useState({...e,productImage:V(W,ue),quantity:f||"1",totalPrice:C(de*se*(m??f?parseInt(m??f):0)),selectedVariantId:W});function w(r){g&&r>g||K(y=>{const P={...y,quantity:r.toString(),totalPrice:C(n.pricePerUnit*n.itemNumberPerSalesUnit*r)};return h==null||h(P),P})}function pe(){I(!0)}function me(){I(!1)}function ge(r){T&&T(r)}function fe(r){const y=n.partNo===r.variantId?parseInt(n.quantity):1;K(P=>({...P,partNo:r.variantId,productImage:r.image??ye,packaging:r.variantName,price:r.price,priceStr:r.priceStr,pricePerUnit:r.pricePerUnit,pricePerUnitString:r.pricePerUnitString,salesUnit:r.salesUnit,itemNumberPerSalesUnit:r.itemNumberPerSalesUnit,totalPrice:C(r.price*r.itemNumberPerSalesUnit*y),quantity:y.toString(),selectedVariantId:r.variantId,sellerOnly:r.sellerOnly,productUrl:`/Product/${r.variantId}`})),I(!1)}return a==="horizontal"?l(Pe,{cardDisplay:"horizontal",product:n,loading:p,buttonLoading:t,disabled:U,addToCart:b,addToCartBtnLabel:q,hideCartButton:k,hidePrice:N,onChangeQuantity:w,productQuantityDisabled:v,defaultQuantity:m,onClickRemoveProduct:ge,hideRemoveButton:oe,campaign:A,limitedProductText:_,showFavoriteIcon:B,isFavoriteIconActive:F,onFavoriteIconClick:x,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:O,border:ie,displaySmallImage:le,linkComponent:D,className:j,maxQuantity:g,sellerOnlyTooltipText:z,accessoryPotItemTooltipText:R}):a==="vertical"?l(Ce,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:p,buttonLoading:t,disabled:U,variantsOpen:ce,onVariantsButtonClick:pe,handlePackageChange:fe,selectedVariantId:n.selectedVariantId,addToCart:b,addToCartBtnLabel:q,hideCartButton:k,hidePrice:N,onChangeQuantity:w,productQuantityDisabled:v,defaultQuantity:m,campaign:A,limitedProductText:_,showFavoriteIcon:B,isFavoriteIconActive:F,onFavoriteIconClick:x,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:O,linkComponent:D,className:j,maxQuantity:g,sellerOnlyTooltipText:z,accessoryPotItemTooltipText:R,onCloseVariants:me}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},accessoryPotItemTooltipText:{defaultValue:null,description:"",name:"accessoryPotItemTooltipText",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onCloseVariants:{defaultValue:null,description:"",name:"onCloseVariants",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function te(a){return a.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Ie(a,e){const p=e[0].VariantId;return e.map(t=>({productName:a,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===p,tags:te(t.Tags),onChange:()=>{}}))}function ne(a){const e=a.Variants[0];return{partNo:e.VariantId,productUrl:a.ProductUrl,productName:a.DisplayName,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:te(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Ie(a.DisplayName,a.Variants)}}const S=ne(Ve),o=ne(he),Se={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},u={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(o.partNo,o.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},d={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:S,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(o.partNo,o.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},s={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:S,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:V(o.partNo,o.primaryImageUrl)}},c={render:a=>l(i,{...a}),args:{cardDisplay:"horizontal",product:S,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var H,M,Q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var $,G,J;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Ue=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],_e=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:u,ProductCardStory_Horizontal:c,ProductCardStory_Loading:s,ProductCardStory_NoVariants:d,__namedExportsOrder:Ue,default:Se},Symbol.toStringTag,{value:"Module"}));export{i as P,c as a,u as b,_e as p};

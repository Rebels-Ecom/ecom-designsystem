import{r as R,j as l}from"./jsx-runtime-a3a6c0b8.js";import{g as C}from"./picture-helper-86177d87.js";import{c as y}from"./format-helper-6b4b1091.js";import{f as se}from"./defaultFallbackImage-b43581a6.js";import{P as pe}from"./product-card-horizontal-e91a1ee9.js";import{P as me}from"./product-card-vertical-e9e60e91.js";import{b as ge,a as fe}from"./dummy-product-92e9cf71.js";function i({cardDisplay:a,product:e,loading:p,buttonLoading:t,disabled:I,addToCart:S,addToCartBtnLabel:b,hideCartButton:q,onChangeQuantity:V,productQuantityDisabled:U,defaultQuantity:m,onRemoveProduct:k,hideRemoveButton:ae,listPriceLabel:re,campaign:N,limitedProductText:v,showFavoriteIcon:T,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:B,onSaveToPurchaseListClick:F,border:te,linkComponent:L,className:x}){if(!a)throw new Error("cardDisplay must be assigned");const{partNo:D,productImageUrl:ne,price:oe,itemNumberPerSalesUnit:ie,quantity:g}=e,[le,j]=R.useState(!1),[n,z]=R.useState({...e,productImage:C(D,ne),quantity:g||"1",totalPrice:y(oe*ie*(m??g?parseInt(m??g):0)),selectedVariantId:D});function O(r){z(f=>{const P={...f,quantity:r.toString(),totalPrice:y(n.price*n.itemNumberPerSalesUnit*r)};return V==null||V(P),P})}function ue(){j(!0)}function de(r){k&&k(r)}function ce(r){const f=n.partNo===r.variantId?parseInt(n.quantity):1;z(P=>({...P,partNo:r.variantId,productImage:r.image??se,packaging:r.variantName,priceStr:r.priceStr,price:r.price,salesUnit:r.salesUnit,itemNumberPerSalesUnit:r.itemNumberPerSalesUnit,totalPrice:y(r.price*r.itemNumberPerSalesUnit*f),quantity:f.toString(),selectedVariantId:r.variantId,productUrl:`/Product/${r.variantId}`})),j(!1)}return a==="horizontal"?l(pe,{cardDisplay:"horizontal",product:n,loading:p,buttonLoading:t,disabled:I,addToCart:S,addToCartBtnLabel:b,hideCartButton:q,onChangeQuantity:O,productQuantityDisabled:U,defaultQuantity:m,onClickRemoveProduct:de,hideRemoveButton:ae,campaign:N,limitedProductText:v,showFavoriteIcon:T,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:B,onSaveToPurchaseListClick:F,border:te,linkComponent:L,className:x}):a==="vertical"?l(me,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:p,buttonLoading:t,disabled:I,variantsOpen:le,onVariantsButtonClick:ue,handlePackageChange:ce,selectedVariantId:n.selectedVariantId,addToCart:S,addToCartBtnLabel:b,hideCartButton:q,onChangeQuantity:O,productQuantityDisabled:U,defaultQuantity:m,listPriceLabel:re,campaign:N,limitedProductText:v,showFavoriteIcon:T,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:B,onSaveToPurchaseListClick:F,linkComponent:L,className:x}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},listPriceLabel:{defaultValue:null,description:"",name:"listPriceLabel",required:!1,type:{name:"string"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function Z(a){return a.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Pe(a,e){const p=e[0].VariantId;return e.map(t=>({productName:a,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===p,tags:Z(t.Tags),onChange:()=>{}}))}function ee(a){const e=a.Variants[0];return{partNo:e.VariantId,productUrl:a.ProductUrl,productName:a.DisplayName,productImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:Z(e.Tags),quantity:"1",totalPrice:y(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Pe(a.DisplayName,a.Variants)}}const h=ee(ge),o=ee(fe),ye={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},u={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(o.partNo,o.productImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},d={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:h,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:C(o.partNo,o.productImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:a=>l(i,{...a}),args:{cardDisplay:"vertical",product:h,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:C(o.partNo,o.productImageUrl)}},s={render:a=>l(i,{...a}),args:{cardDisplay:"horizontal",product:h,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var W,K,w;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.productImageUrl),
    hideCartButton: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(w=(K=u.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var E,H,Q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.productImageUrl),
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    }
  }
}`,...(Q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var M,$,G;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.productImageUrl)
  }
}`,...(G=($=c.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,X,Y;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=s.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ce=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],ke=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:u,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:d,__namedExportsOrder:Ce,default:ye},Symbol.toStringTag,{value:"Module"}));export{i as P,s as a,u as b,ke as p};

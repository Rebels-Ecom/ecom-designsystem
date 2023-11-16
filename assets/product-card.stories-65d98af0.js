import{r as O}from"./index-6f814c40.js";import{g as p}from"./picture-helper-86177d87.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as ce}from"./defaultFallbackImage-b43581a6.js";import{P as se}from"./product-card-horizontal-5d3dcf65.js";import{P as pe}from"./product-card-vertical-a3472c63.js";import{a as u}from"./jsx-runtime-76c5c2e2.js";import{d as me,a as ge}from"./dummy-product-117119f6.js";function i({cardDisplay:a,product:e,addToCartButton:m,addToCart:r,hideCartButton:V,onChangeQuantity:h,onRemoveProduct:b,hideRemoveButton:ee,productQuantityDisabled:S,loading:U,changePackagingButton:ae,linkComponent:k,className:q,defaultQuantity:g,campaign:B,border:te,disabled:T,buttonLoading:v,showFavoriteIcon:N,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:F}){if(!a)throw new Error("cardDisplay must be assigned");const{productId:x,productImageUrl:re,price:ne,itemNumberPerSalesUnit:oe,quantity:f}=e,[ie,D]=O.useState(!1),[n,j]=O.useState({...e,productImage:p(x,re),quantity:f||"1",totalPrice:C(ne*oe*(g??f?parseInt(g??f):0)),selectedVariantId:x});function z(t){j(y=>{const P={...y,quantity:t.toString(),totalPrice:C(n.price*n.itemNumberPerSalesUnit*t)};return h==null||h(P),P})}function ue(){D(!0)}function le(t){b&&b(t)}function de(t){const y=n.productId===t.variantId?parseInt(n.quantity):1;j(P=>({...P,productId:t.variantId,productImage:p(t.variantId,t.imageUrl?t.imageUrl:ce),country:t.country,packaging:t.variantName,priceStr:t.listPricePerUnitString,price:t.price,salesUnit:t.salesUnit,itemNumberPerSalesUnit:t.itemNumberPerSalesUnit,totalPrice:C(t.price*t.itemNumberPerSalesUnit*y),quantity:y.toString(),selectedVariantId:t.variantId})),D(!1)}return a==="horizontal"?u(se,{cardDisplay:"horizontal",loading:U,product:n,onChangeQuantity:z,productQuantityDisabled:S,addToCartButton:m,addToCart:r,onClickRemoveProduct:le,linkComponent:k,hideRemoveButton:ee,className:q,hideCartButton:V,defaultQuantity:g,campaign:B,border:te,disabled:T,buttonLoading:v,showFavoriteIcon:N,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:F}):a==="vertical"?u(pe,{cardDisplay:"vertical",loading:U,product:n,productImage:n.productImage,onChangeQuantity:z,productQuantityDisabled:S,addToCartButton:m,addToCart:r,changePackagingButton:ae,onVariantsButtonClick:ue,variantsOpen:ie,selectedVariantId:n.selectedVariantId,handlePackageChange:de,linkComponent:k,className:q,hideCartButton:V,defaultQuantity:g,campaign:B,disabled:T,buttonLoading:v,showFavoriteIcon:N,isFavoriteIconActive:A,onFavoriteIconClick:_,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:F}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},addToCartButton:{defaultValue:null,description:"",name:"addToCartButton",required:!0,type:{name:"IButton"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},changePackagingButton:{defaultValue:null,description:"",name:"changePackagingButton",required:!1,type:{name:"IButton"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function Z(a){return a.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function fe(a,e){const m=e[0].VariantId;return e.map(r=>({productName:a,variantName:r.Name,variantId:r.VariantId,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",listPricePerUnitString:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,imageUrl:r.PrimaryImageUrl,checked:r.VariantId===m,tags:Z(r.Tags),onChange:()=>{}}))}function $(a){const e=a.Variants[0];return{productId:e.VariantId,productUrl:a.ProductUrl,productName:a.DisplayName,productImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:Z(e.Tags),quantity:"1",totalPrice:C(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:fe(a.DisplayName,a.Variants)}}const I=$(me),o=$(ge),ye={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","addToCartButton","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","changePackagingButton","selectedVariantId","onClickRemoveProduct"]}}},l={render:a=>u(i,{...a}),args:{cardDisplay:"vertical",product:o,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},d={render:a=>u(i,{...a}),args:{cardDisplay:"vertical",product:I,defaultQuantity:"4",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},c={render:a=>u(i,{...a}),args:{cardDisplay:"vertical",product:I,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:p(o.productId,o.productImageUrl)}},s={render:a=>u(i,{...a}),args:{cardDisplay:"horizontal",product:I,defaultQuantity:"",addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var R,W,Q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productWineArgs,
    defaultQuantity: '',
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
}`,...(Q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};var K,w,E;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var H,M,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(M=c.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,X,Y;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'horizontal',
    product: productNoVariantsArgs,
    defaultQuantity: '',
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
}`,...(Y=(X=s.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Pe=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],qe=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:l,ProductCardStory_Horizontal:s,ProductCardStory_Loading:c,ProductCardStory_NoVariants:d,__namedExportsOrder:Pe,default:ye},Symbol.toStringTag,{value:"Module"}));export{i as P,l as a,s as b,qe as p};
//# sourceMappingURL=product-card.stories-65d98af0.js.map

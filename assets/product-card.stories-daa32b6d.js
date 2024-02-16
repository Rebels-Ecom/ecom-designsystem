import{r as B,j as i}from"./jsx-runtime-a3a6c0b8.js";import{g as V}from"./picture-helper-1d1954b7.js";import{c}from"./format-helper-6b4b1091.js";import{f as Pe}from"./defaultFallbackImage-b43581a6.js";import{P as Ce}from"./product-card-horizontal-1e4ab549.js";import{P as Ve}from"./product-card-vertical-cbfb3e97.js";import{P as he}from"./product-card-restricted-7c55355b.js";import{b as Ie,a as Se}from"./dummy-product-d82fa475.js";function u({cardDisplay:r,isRestrictedUser:e,product:y,loading:t,buttonLoading:h,disabled:I,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,onChangeQuantity:x,productQuantityDisabled:D,defaultQuantity:d,onRemoveProduct:O,hideRemoveButton:ce,limitedProductText:R,showFavoriteIcon:j,isFavoriteIconActive:L,onFavoriteIconClick:z,showAddToPurchaseListIcon:W,onSaveToPurchaseListClick:K,border:pe,displaySmallImage:me,linkComponent:k,className:N,maxQuantity:P,sellerOnlyTooltipText:v,accessoryPotItemTooltipText:A}){if(!r)throw new Error("cardDisplay must be assigned");const{partNo:w,primaryImageUrl:ge,pricePerUnit:C,itemNumberPerSalesUnit:E,quantity:o,priceStr:H}=y,[M,T]=B.useState(!1),[n,_]=B.useState({...y,productImage:V(w,ge),quantity:o||"1",totalPrice:c(C*E*(d??o?parseInt(d??o):0)),selectedVariantId:w});B.useEffect(()=>{_(a=>({...a,quantity:o||"1",priceStr:H,pricePerUnit:C,totalPrice:c(C*E*(d??o?parseInt(d??o):0))}))},[o,H,C]);function Q(a){if(P&&a>P)return;const s={...n,quantity:a.toString(),totalPrice:c(n.pricePerUnit*n.itemNumberPerSalesUnit*a)};x?x(s):_(s)}function $(){T(!0)}function G(){T(!1)}function fe(a){O&&O(a)}function J(a){const s=n.partNo===a.variantId?parseInt(n.quantity):1;_(ye=>({...ye,partNo:a.variantId,productImage:a.image??Pe,packaging:a.variantName,price:a.price,priceStr:a.priceStr,pricePerUnit:a.pricePerUnit,pricePerUnitString:a.pricePerUnitString,salesUnit:a.salesUnit,itemNumberPerSalesUnit:a.itemNumberPerSalesUnit,totalPrice:c(a.price*a.itemNumberPerSalesUnit*s),quantity:s.toString(),selectedVariantId:a.variantId,sellerOnly:a.sellerOnly,activeCampaign:a.activeCampaign,productUrl:`/Product/${a.variantId}`})),T(!1)}return r==="horizontal"?i(Ce,{isRestrictedUser:e,cardDisplay:"horizontal",product:n,loading:t,buttonLoading:h,disabled:I,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,onChangeQuantity:Q,productQuantityDisabled:D,defaultQuantity:d,onClickRemoveProduct:fe,hideRemoveButton:ce,limitedProductText:R,showFavoriteIcon:j,isFavoriteIconActive:L,onFavoriteIconClick:z,showAddToPurchaseListIcon:W,onSaveToPurchaseListClick:K,border:pe,displaySmallImage:me,linkComponent:k,className:N,maxQuantity:P,sellerOnlyTooltipText:v,accessoryPotItemTooltipText:A}):r==="vertical"?e?i(he,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:h,disabled:I,variantsOpen:M,onVariantsButtonClick:$,handlePackageChange:J,selectedVariantId:n.selectedVariantId,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,linkComponent:k,className:N,sellerOnlyTooltipText:v,accessoryPotItemTooltipText:A,onCloseVariants:G}):i(Ve,{cardDisplay:"vertical",product:n,productImage:n.productImage,loading:t,buttonLoading:h,disabled:I,variantsOpen:M,onVariantsButtonClick:$,handlePackageChange:J,selectedVariantId:n.selectedVariantId,addToCart:S,addToCartBtnLabel:U,hideCartButton:q,hidePrice:b,onChangeQuantity:Q,productQuantityDisabled:D,defaultQuantity:d,limitedProductText:R,showFavoriteIcon:j,isFavoriteIconActive:L,onFavoriteIconClick:z,showAddToPurchaseListIcon:W,onSaveToPurchaseListClick:K,linkComponent:k,className:N,maxQuantity:P,sellerOnlyTooltipText:v,accessoryPotItemTooltipText:A,onCloseVariants:G}):null}try{u.displayName="ProductCard",u.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},isRestrictedUser:{defaultValue:null,description:"",name:"isRestrictedUser",required:!1,type:{name:"boolean"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:null,description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},accessoryPotItemTooltipText:{defaultValue:null,description:"",name:"accessoryPotItemTooltipText",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onCloseVariants:{defaultValue:null,description:"",name:"onCloseVariants",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function de(r){return r.map(e=>({text:e.Text,shape:e.Shape?e.Shape:"pill",color:e.Class}))}function Ue(r,e){const y=e[0].VariantId;return e.map(t=>({productName:r,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===y,tags:de(t.Tags),onChange:()=>{}}))}function se(r){const e=r.Variants[0];return{partNo:e.VariantId,productUrl:r.ProductUrl,productName:r.DisplayName,primaryImageUrl:e.PrimaryImageUrl,country:Array.isArray(e.ShortTexts)&&e.ShortTexts.length?e.ShortTexts[0]:"",packaging:e.VariantFullName,priceStr:e.ListPricePerUnitString,price:e.ListPricePerUnit,salesUnit:e.SalesUnit,itemNumberPerSalesUnit:e.UnitsPerBaseUnit,tags:de(e.Tags),quantity:"1",totalPrice:c(e.ListPricePerUnit*e.UnitsPerBaseUnit),productVariantList:Ue(r.DisplayName,r.Variants)}}const F=se(Ie),l=se(Se),qe={title:"Design System/Molecules/ProductCard",component:u,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},p={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:l,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(l.partNo,l.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},m={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:F,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:V(l.partNo,l.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},g={render:r=>i(u,{...r}),args:{cardDisplay:"vertical",product:F,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:V(l.partNo,l.primaryImageUrl)}},f={render:r=>i(u,{...r}),args:{cardDisplay:"horizontal",product:F,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,oe;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,le,ue;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};const be=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],xe=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:p,ProductCardStory_Horizontal:f,ProductCardStory_Loading:g,ProductCardStory_NoVariants:m,__namedExportsOrder:be,default:qe},Symbol.toStringTag,{value:"Module"}));export{u as P,f as a,p as b,xe as p};

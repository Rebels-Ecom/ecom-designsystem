import{r as v}from"./index-6f814c40.js";import{g as m}from"./picture-helper-86177d87.js";import{c as C}from"./format-helper-6b4b1091.js";import{f as rr}from"./defaultFallbackImage-b43581a6.js";import{P as er}from"./product-card-horizontal-3b46ddaf.js";import{P as tr}from"./product-card-vertical-3eb8c779.js";import{a as d}from"./jsx-runtime-76c5c2e2.js";import{d as ar,a as nr}from"./dummy-product-117119f6.js";function i({cardDisplay:e,product:r,addToCartButton:g,addToCart:a,hideCartButton:I,onChangeQuantity:f,onRemoveProduct:V,hideRemoveButton:M,productQuantityDisabled:S,loading:U,changePackagingButton:Q,linkComponent:k,className:B}){if(!e)throw new Error("cardDisplay must be assigned");const{productId:b,productImageUrl:G,price:J,itemNumberPerSalesUnit:K,quantity:P}=r,[X,T]=v.useState(!1),[n,q]=v.useState({...r,productImage:m(b,G),quantity:P||"1",totalPrice:C(J*K*(P?parseInt(P):1)),selectedVariantId:b});function N(t){q(y=>{const u={...y,quantity:t.toString(),totalPrice:C(n.price*n.itemNumberPerSalesUnit*t)};return console.log(u),f==null||f(u),u})}function Y(){T(!0)}function Z(t){V&&V(t)}function $(t){const y=n.productId===t.variantId?parseInt(n.quantity):1;q(u=>({...u,productId:t.variantId,productImage:m(t.variantId,t.imageUrl?t.imageUrl:rr),country:t.country,packaging:t.variantName,priceStr:t.listPricePerUnitString,price:t.price,salesUnit:t.salesUnit,itemNumberPerSalesUnit:t.itemNumberPerSalesUnit,totalPrice:C(t.price*t.itemNumberPerSalesUnit*y),quantity:y.toString(),selectedVariantId:t.variantId})),T(!1)}return e==="horizontal"?d(er,{cardDisplay:"horizontal",loading:U,product:n,onChangeQuantity:N,productQuantityDisabled:S,addToCartButton:g,addToCart:a,onClickRemoveProduct:Z,linkComponent:k,hideRemoveButton:M,className:B,hideCartButton:I}):e==="vertical"?d(tr,{cardDisplay:"vertical",loading:U,product:n,productImage:n.productImage,onChangeQuantity:N,productQuantityDisabled:S,addToCartButton:g,addToCart:a,changePackagingButton:Q,onVariantsButtonClick:Y,variantsOpen:X,selectedVariantId:n.selectedVariantId,handlePackageChange:$,linkComponent:k,className:B,hideCartButton:I}):null}try{i.displayName="ProductCard",i.__docgenInfo={description:"",displayName:"ProductCard",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},addToCartButton:{defaultValue:null,description:"",name:"addToCartButton",required:!0,type:{name:"IButton"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},changePackagingButton:{defaultValue:null,description:"",name:"changePackagingButton",required:!1,type:{name:"IButton"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}function E(e){return e.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function or(e,r){const g=r[0].VariantId;return r.map(a=>({productName:e,variantName:a.Name,variantId:a.VariantId,country:Array.isArray(a.ShortTexts)&&a.ShortTexts.length?a.ShortTexts[0]:"",listPricePerUnitString:a.ListPricePerUnitString,price:a.ListPricePerUnit,salesUnit:a.SalesUnit,itemNumberPerSalesUnit:a.UnitsPerBaseUnit,imageUrl:a.PrimaryImageUrl,checked:a.VariantId===g,tags:E(a.Tags),onChange:()=>{}}))}function H(e){const r=e.Variants[0];return{productId:r.VariantId,productUrl:e.ProductUrl,productName:e.DisplayName,productImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:E(r.Tags),quantity:"1",totalPrice:C(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:or(e.DisplayName,e.Variants)}}const h=H(ar),o=H(nr),ir={title:"Design System/Molecules/ProductCard",component:i,parameters:{controls:{exclude:["product","addToCart","addToCartButton","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","changePackagingButton","selectedVariantId","onClickRemoveProduct"]}}},l={render:e=>d(i,{...e}),args:{cardDisplay:"vertical",product:o,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:m(o.productId,o.productImageUrl),hideCartButton:!1}},c={render:e=>d(i,{...e}),args:{cardDisplay:"vertical",product:h,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:m(o.productId,o.productImageUrl)}},s={render:e=>d(i,{...e}),args:{cardDisplay:"vertical",product:h,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:m(o.productId,o.productImageUrl)}},p={render:e=>d(i,{...e}),args:{cardDisplay:"horizontal",product:h,addToCart:()=>{},addToCartButton:{children:"Lägg till",surface:"primary",type:"button"},loading:!1}};var _,L,A;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'vertical',
    product: productWineArgs,
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
    hideCartButton: false
  }
}`,...(A=(L=l.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var x,D,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    loading: false,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.productId, productWineArgs.productImageUrl)
  }
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var O,R,W;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(W=(R=s.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var F,j,w;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'horizontal',
    product: productNoVariantsArgs,
    addToCart: () => {},
    addToCartButton: {
      children: 'Lägg till',
      surface: 'primary',
      type: 'button'
    },
    loading: false
  }
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const dr=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],yr=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:l,ProductCardStory_Horizontal:p,ProductCardStory_Loading:s,ProductCardStory_NoVariants:c,__namedExportsOrder:dr,default:ir},Symbol.toStringTag,{value:"Module"}));export{i as P,l as a,yr as p};
//# sourceMappingURL=product-card.stories-f666fae9.js.map

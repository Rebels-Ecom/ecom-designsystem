import{r as B,j as l}from"./jsx-runtime-03333307.js";import{g as U}from"./picture-helper-e0ae1ee4.js";import{c as g}from"./format-helper-a8a0bc10.js";import{f as Se}from"./defaultFallbackImage-b43581a6.js";import{P as ve}from"./product-card-horizontal-c87002a5.js";import{P as Ie}from"./product-card-vertical-dfbf9455.js";import{P as be}from"./product-card-restricted-f792a34d.js";import{b as ke,a as Ne}from"./dummy-product-d82fa475.js";function m({cardDisplay:a,isRestrictedUser:r,product:h,loading:t,buttonLoading:q,disabled:S,addToCart:v,addToCartBtnLabel:I,hideCartButton:b,hidePrice:k,onChangeQuantity:z,productQuantityDisabled:D,defaultQuantity:d,onRemoveProduct:O,hideRemoveButton:fe,showFavoriteIcon:W,favoriteProductsIds:R,onFavoriteIconClick:K,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:E,border:Pe,displaySmallImage:Ce,linkComponent:N,className:A,maxQuantity:T,sellerOnlyTooltipText:V,accessoryPotItemTooltipText:x,alertBox:H,onClick:j,debounceQuantityVal:he,productArea:M,imagePriority:u}){if(!a)throw new Error("cardDisplay must be assigned");const{partNo:Q,primaryImageUrl:Te,pricePerUnit:n,itemNumberPerSalesUnit:$,quantity:s,priceStr:G,activeCampaign:J}=h,[X,F]=B.useState(!1),[i,w]=B.useState({...h,productImage:U(Q,Te,"120",void 0,u==null?void 0:u.loading,u==null?void 0:u.fetchPriority),quantity:p(s),pricePerUnit:n&&isFinite(n)?n:0,totalPrice:g((n&&isFinite(n)?n:0)*$*(d??p(s)?parseInt(d??p(s)):0)),selectedVariantId:Q});B.useEffect(()=>{w(e=>({...e,quantity:p(s),priceStr:G,pricePerUnit:n&&isFinite(n)?n:0,totalPrice:g((n&&isFinite(n)?n:0)*$*(d??p(s)?parseInt(d??p(s)):0)),activeCampaign:J}))},[s,G,n,J]);function Y(e){if(T&&e>T)return;const o={...i,quantity:e.toString(),totalPrice:g(i.pricePerUnit*i.itemNumberPerSalesUnit*e)};z?z(o):w(o)}function p(e){const o=parseInt(e);return!e||isNaN(o)?"1":o<0?"0":e}function Z(){F(!0)}function ee(){F(!1)}function Ue(e){O&&O(e)}function re(e){const o=i.partNo===e.variantId?parseInt(i.quantity):1;w(qe=>({...qe,partNo:e.variantId,productImage:e.image??Se,packaging:e.variantName,price:e.price,priceStr:e.priceStr,pricePerUnit:e.pricePerUnit&&isFinite(e.pricePerUnit)?e.pricePerUnit:0,pricePerUnitString:e.pricePerUnitString,salesUnit:e.salesUnit,itemNumberPerSalesUnit:e.itemNumberPerSalesUnit,totalPrice:g(e.price*e.itemNumberPerSalesUnit*o),quantity:o.toString(),selectedVariantId:e.variantId,sellerOnly:e.sellerOnly,activeCampaign:e.activeCampaign,productUrl:`/Product/${e.variantId}`})),F(!1)}return a==="horizontal"?l.jsx(ve,{isRestrictedUser:r,cardDisplay:"horizontal",product:i,loading:t,buttonLoading:q,disabled:S,addToCart:v,addToCartBtnLabel:I,hideCartButton:b,hidePrice:k,onChangeQuantity:Y,productQuantityDisabled:D,defaultQuantity:d,onClickRemoveProduct:Ue,hideRemoveButton:fe,showFavoriteIcon:W,favoriteProductsIds:R,onFavoriteIconClick:K,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:E,border:Pe,displaySmallImage:Ce,linkComponent:N,className:A,maxQuantity:T,sellerOnlyTooltipText:V,accessoryPotItemTooltipText:x,alertBox:H,onClick:j,debounceQuantityVal:he,productArea:M}):a==="vertical"?r?l.jsx(be,{cardDisplay:"vertical",product:i,productImage:i.productImage,loading:t,buttonLoading:q,disabled:S,variantsOpen:X,onVariantsButtonClick:Z,handlePackageChange:re,selectedVariantId:i.selectedVariantId,addToCart:v,addToCartBtnLabel:I,hideCartButton:b,hidePrice:k,linkComponent:N,className:A,sellerOnlyTooltipText:V,accessoryPotItemTooltipText:x,onCloseVariants:ee,onClick:j}):l.jsx(Ie,{cardDisplay:"vertical",product:i,productImage:i.productImage,loading:t,buttonLoading:q,disabled:S,variantsOpen:X,onVariantsButtonClick:Z,handlePackageChange:re,selectedVariantId:i.selectedVariantId,addToCart:v,addToCartBtnLabel:I,hideCartButton:b,hidePrice:k,onChangeQuantity:Y,productQuantityDisabled:D,defaultQuantity:d,showFavoriteIcon:W,favoriteProductsIds:R,onFavoriteIconClick:K,showAddToPurchaseListIcon:L,onSaveToPurchaseListClick:E,linkComponent:N,className:A,maxQuantity:T,sellerOnlyTooltipText:V,accessoryPotItemTooltipText:x,onCloseVariants:ee,alertBox:H,onClick:j,productArea:M}):null}m.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{cardDisplay:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""},isRestrictedUser:{required:!1,tsType:{name:"boolean"},description:""},product:{required:!0,tsType:{name:"IProduct"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},buttonLoading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},hidePrice:{required:!1,tsType:{name:"boolean"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},addToCartBtnLabel:{required:!0,tsType:{name:"string"},description:""},hideCartButton:{required:!1,tsType:{name:"boolean"},description:""},onChangeQuantity:{required:!1,tsType:{name:"CallableFunction"},description:""},productQuantityDisabled:{required:!1,tsType:{name:"boolean"},description:""},defaultQuantity:{required:!1,tsType:{name:"string"},description:`Sets a custom default quantity to start from
@default 0`},onRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},hideRemoveButton:{required:!1,tsType:{name:"boolean"},description:""},showFavoriteIcon:{required:!1,tsType:{name:"boolean"},description:""},favoriteProductsIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},onFavoriteIconClick:{required:!1,tsType:{name:"CallableFunction"},description:""},showAddToPurchaseListIcon:{required:!1,tsType:{name:"boolean"},description:""},onSaveToPurchaseListClick:{required:!1,tsType:{name:"CallableFunction"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},displaySmallImage:{required:!1,tsType:{name:"boolean"},description:""},linkComponent:{required:!1,tsType:{name:"any"},description:""},className:{required:!1,tsType:{name:"string"},description:""},maxQuantity:{required:!1,tsType:{name:"number"},description:""},sellerOnlyTooltipText:{required:!1,tsType:{name:"string"},description:""},accessoryPotItemTooltipText:{required:!1,tsType:{name:"string"},description:""},alertBox:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title: string
  buttonText?: string
  color?: TBoxColor
  className?: string
  onClick?: () => void
  loading?: boolean
  minHeight?: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"buttonText",value:{name:"string",required:!1}},{key:"color",value:{name:"union",raw:"'error' | 'warning' | 'information'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'information'"}],required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"minHeight",value:{name:"boolean",required:!1}}]}},description:""},onClick:{required:!1,tsType:{name:"CallableFunction"},description:""},debounceQuantityVal:{required:!1,tsType:{name:"number"},description:""},productArea:{required:!1,tsType:{name:"union",raw:"'category' | 'recommended' | 'details' | 'cart' | 'inspiration'",elements:[{name:"literal",value:"'category'"},{name:"literal",value:"'recommended'"},{name:"literal",value:"'details'"},{name:"literal",value:"'cart'"},{name:"literal",value:"'inspiration'"}]},description:""},imagePriority:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  fetchPriority: 'auto' | 'high' | 'low',
  loading: 'eager' | 'lazy',
}`,signature:{properties:[{key:"fetchPriority",value:{name:"union",raw:"'auto' | 'high' | 'low'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'high'"},{name:"literal",value:"'low'"}],required:!0}},{key:"loading",value:{name:"union",raw:"'eager' | 'lazy'",elements:[{name:"literal",value:"'eager'"},{name:"literal",value:"'lazy'"}],required:!0}}]}},description:""}}};function ge(a){return a.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function Ae(a,r){const h=r[0].VariantId;return r.map(t=>({productName:a,variantName:t.Name,variantId:t.VariantId,country:Array.isArray(t.ShortTexts)&&t.ShortTexts.length?t.ShortTexts[0]:"",priceStr:t.ListPricePerUnitString,price:t.ListPricePerUnit,salesUnit:t.SalesUnit,itemNumberPerSalesUnit:t.UnitsPerBaseUnit,imageUrl:t.PrimaryImageUrl,checked:t.VariantId===h,tags:ge(t.Tags),onChange:()=>{}}))}function ye(a){const r=a.Variants[0];return{partNo:r.VariantId,productUrl:a.ProductUrl,productName:a.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:ge(r.Tags),quantity:"1",totalPrice:g(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:Ae(a.DisplayName,a.Variants)}}const _=ye(ke),c=ye(Ne),Ve={title:"Design System/Molecules/ProductCard",component:m,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},y={render:a=>l.jsx(m,{...a}),args:{cardDisplay:"vertical",product:c,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:U(c.partNo,c.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},f={render:a=>l.jsx(m,{...a}),args:{cardDisplay:"vertical",product:_,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:U(c.partNo,c.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},P={render:a=>l.jsx(m,{...a}),args:{cardDisplay:"vertical",product:_,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:U(c.partNo,c.primaryImageUrl)}},C={render:a=>l.jsx(m,{...a}),args:{cardDisplay:"horizontal",product:_,addToCart:()=>{},loading:!1,campaign:{title:"Kampanj",color:"#9A576F"}}};var ae,te,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,oe,se;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ce,de;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const xe=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],We=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:y,ProductCardStory_Horizontal:C,ProductCardStory_Loading:P,ProductCardStory_NoVariants:f,__namedExportsOrder:xe,default:Ve},Symbol.toStringTag,{value:"Module"}));export{m as P,C as a,y as b,We as p};

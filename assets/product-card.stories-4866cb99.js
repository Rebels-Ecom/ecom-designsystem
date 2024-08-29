import{r as k,j as c}from"./jsx-runtime-03333307.js";import{g as T}from"./picture-helper-e0ae1ee4.js";import{c as y}from"./format-helper-a8a0bc10.js";import{f as Ie}from"./defaultFallbackImage-b43581a6.js";import{P as ke}from"./product-card-horizontal-762a2152.js";import{P as Se}from"./product-card-vertical-7d68cbeb.js";import{P as Ue}from"./product-card-restricted-e3071edc.js";import{b as Ne,a as Fe}from"./dummy-product-d82fa475.js";function g({cardDisplay:a,isRestrictedUser:r,product:l,loading:n,buttonLoading:Y,disabled:Z,addToCart:ee,addToCartBtnLabel:re,hideCartButton:ae,hidePrice:te,onChangeQuantity:S,productQuantityDisabled:U,defaultQuantity:u,onRemoveProduct:N,hideRemoveButton:ne,showFavoriteIcon:ie,favoriteProductsIds:oe,onFavoriteIconClick:se,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:A,border:le,displaySmallImage:de,linkComponent:ce,className:ue,maxQuantity:h,alertBox:V,onClick:pe,debounceQuantityVal:me,productArea:x,imagePriority:p,showPackaging:ge,tooltips:ye,isAddingToFavorites:fe}){if(!a)throw new Error("cardDisplay must be assigned");const{partNo:B,primaryImageUrl:Pe,pricePerUnit:t,itemNumberPerSalesUnit:j,quantity:d,priceStr:w,activeCampaign:L}=l,[Ce,q]=k.useState(!1),[i,b]=k.useState({...l,productImage:T(B,Pe,"120",void 0,p==null?void 0:p.loading,p==null?void 0:p.fetchPriority),quantity:m(d),pricePerUnit:t&&isFinite(t)?t:0,totalPrice:y((t&&isFinite(t)?t:0)*j*(u??m(d)?parseInt(u??m(d)):0)),selectedVariantId:B});k.useEffect(()=>{b(e=>({...e,quantity:m(d),priceStr:w,pricePerUnit:t&&isFinite(t)?t:0,totalPrice:y((t&&isFinite(t)?t:0)*j*(u??m(d)?parseInt(u??m(d)):0)),activeCampaign:L}))},[d,w,t,L]);function _(e){if(h&&e>h)return;const o={...i,quantity:e.toString(),totalPrice:y(i.pricePerUnit*i.itemNumberPerSalesUnit*e)};S?S(o):b(o)}function m(e){const o=parseInt(e);return!e||isNaN(o)?"1":o<0?"0":e}function ve(){q(!0)}function Te(){q(!1)}function he(e){N&&N(e)}function qe(e){const o=i.partNo===e.variantId?parseInt(i.quantity):1;b(be=>({...be,partNo:e.variantId,productImage:e.image??Ie,packaging:e.variantName,price:e.price,priceStr:e.priceStr,pricePerUnit:e.pricePerUnit&&isFinite(e.pricePerUnit)?e.pricePerUnit:0,pricePerUnitString:e.pricePerUnitString,salesUnit:e.salesUnit,itemNumberPerSalesUnit:e.itemNumberPerSalesUnit,totalPrice:y(e.price*e.itemNumberPerSalesUnit*o),quantity:o.toString(),selectedVariantId:e.variantId,sellerOnly:e.sellerOnly,activeCampaign:e.activeCampaign,productUrl:`/Product/${e.variantId}`})),q(!1)}const I={product:i,loading:n,buttonLoading:Y,disabled:Z,addToCart:ee,addToCartBtnLabel:re,hideCartButton:ae,hidePrice:te,linkComponent:ce,className:ue,onClick:pe,productImage:i.productImage,variantsOpen:Ce,onVariantsButtonClick:ve,handlePackageChange:qe,selectedVariantId:i.selectedVariantId,onCloseVariants:Te,tooltips:ye,showFavoriteIcon:ie,favoriteProductsIds:oe,onFavoriteIconClick:se,isAddingToFavorites:fe};return a==="horizontal"?c.jsx(ke,{...I,isRestrictedUser:r,cardDisplay:"horizontal",onChangeQuantity:_,productQuantityDisabled:U,defaultQuantity:u,onClickRemoveProduct:he,hideRemoveButton:ne,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:A,border:le,displaySmallImage:de,maxQuantity:h,alertBox:V,debounceQuantityVal:me,productArea:x,showPackaging:ge}):a==="vertical"?r?c.jsx(Ue,{cardDisplay:"vertical",...I}):c.jsx(Se,{cardDisplay:"vertical",...I,onChangeQuantity:_,productQuantityDisabled:U,defaultQuantity:u,showAddToPurchaseListIcon:F,onSaveToPurchaseListClick:A,alertBox:V,productArea:x}):null}g.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{productImage:{required:!0,tsType:{name:"IPicture"},description:""},cardDisplay:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""},isRestrictedUser:{required:!1,tsType:{name:"boolean"},description:""},product:{required:!0,tsType:{name:"IProduct"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""},buttonLoading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},hidePrice:{required:!1,tsType:{name:"boolean"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},addToCartBtnLabel:{required:!0,tsType:{name:"string"},description:""},hideCartButton:{required:!1,tsType:{name:"boolean"},description:""},onChangeQuantity:{required:!1,tsType:{name:"CallableFunction"},description:""},productQuantityDisabled:{required:!1,tsType:{name:"boolean"},description:""},defaultQuantity:{required:!1,tsType:{name:"string"},description:`Sets a custom default quantity to start from
@default 0`},onRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},hideRemoveButton:{required:!1,tsType:{name:"boolean"},description:""},showFavoriteIcon:{required:!1,tsType:{name:"boolean"},description:""},favoriteProductsIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},onFavoriteIconClick:{required:!1,tsType:{name:"CallableFunction"},description:""},isAddingToFavorites:{required:!1,tsType:{name:"boolean"},description:""},showAddToPurchaseListIcon:{required:!1,tsType:{name:"boolean"},description:""},onSaveToPurchaseListClick:{required:!1,tsType:{name:"CallableFunction"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},displaySmallImage:{required:!1,tsType:{name:"boolean"},description:""},linkComponent:{required:!1,tsType:{name:"any"},description:""},className:{required:!1,tsType:{name:"string"},description:""},maxQuantity:{required:!1,tsType:{name:"number"},description:""},alertBox:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fetchPriority",value:{name:"union",raw:"'auto' | 'high' | 'low'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'high'"},{name:"literal",value:"'low'"}],required:!0}},{key:"loading",value:{name:"union",raw:"'eager' | 'lazy'",elements:[{name:"literal",value:"'eager'"},{name:"literal",value:"'lazy'"}],required:!0}}]}},description:""},variantsOpen:{required:!1,tsType:{name:"boolean"},description:""},handlePackageChange:{required:!0,tsType:{name:"CallableFunction"},description:""},selectedVariantId:{required:!1,tsType:{name:"string"},description:""},onVariantsButtonClick:{required:!0,tsType:{name:"CallableFunction"},description:""},onCloseVariants:{required:!0,tsType:{name:"CallableFunction"},description:""},tooltips:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  addToFavorites?: string;
  removeFromFavorites?: string;
  addToPurchaseList?: string;
  changeVariant?: string;
  sellerOnly?: string;
  accessoryPotItem?: string;
}`,signature:{properties:[{key:"addToFavorites",value:{name:"string",required:!1}},{key:"removeFromFavorites",value:{name:"string",required:!1}},{key:"addToPurchaseList",value:{name:"string",required:!1}},{key:"changeVariant",value:{name:"string",required:!1}},{key:"sellerOnly",value:{name:"string",required:!1}},{key:"accessoryPotItem",value:{name:"string",required:!1}}]}},description:""}}};function Ae(a){return a.map(r=>({text:r.Text,shape:r.Shape?r.Shape:"pill",color:r.Class}))}function Ve(a,r){const l=r[0].VariantId;return r.map(n=>({productName:a,variantName:n.Name,variantId:n.VariantId,checked:n.VariantId===l,country:Array.isArray(n.ShortTexts)&&n.ShortTexts.length?n.ShortTexts[0]:"",priceStr:n.ListPricePerUnitString,image:T(n.VariantId,n.PrimaryImageUrl)}))}function J(a){const r=a.Variants[0];return{partNo:r.VariantId,productUrl:a.ProductUrl,productName:a.DisplayName,primaryImageUrl:r.PrimaryImageUrl,country:Array.isArray(r.ShortTexts)&&r.ShortTexts.length?r.ShortTexts[0]:"",packaging:r.VariantFullName,priceStr:r.ListPricePerUnitString,price:r.ListPricePerUnit,salesUnit:r.SalesUnit,itemNumberPerSalesUnit:r.UnitsPerBaseUnit,tags:Ae(r.Tags),quantity:"1",totalPrice:y(r.ListPricePerUnit*r.UnitsPerBaseUnit),productVariantList:Array.from({length:10},()=>{var l;return(l=Ve(a.DisplayName,a.Variants))==null?void 0:l[0]})}}const X=J(Ne),s=J(Fe),xe={title:"Design System/Molecules/ProductCard",component:g,parameters:{controls:{exclude:["product","addToCart","onChangeQuantity","handlePackageChange","onVariantsButtonClick","productImage","linkComponent","onRemoveProduct","className","selectedVariantId","onClickRemoveProduct"]}}},f={render:a=>c.jsx(g,{...a}),args:{cardDisplay:"vertical",product:s,addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:T(s.partNo,s.primaryImageUrl),hideCartButton:!1,campaign:{title:"Kampanj",color:"#9A576F"}}},P={render:a=>c.jsx(g,{...a}),args:{cardDisplay:"vertical",product:X,defaultQuantity:"4",addToCart:()=>{},handlePackageChange:()=>{},loading:!1,onVariantsButtonClick:()=>{},productImage:T(s.partNo,s.primaryImageUrl),campaign:{title:"Kampanj",color:"#9A576F"}}},C={render:a=>c.jsx(g,{...a}),args:{cardDisplay:"vertical",product:X,addToCart:()=>{},handlePackageChange:()=>{},loading:!0,onVariantsButtonClick:()=>{},productImage:T(s.partNo,s.primaryImageUrl)}},v={render:a=>c.jsx(g,{...a}),args:{cardDisplay:"horizontal",product:s,addToCart:()=>{},loading:!1,addToCartBtnLabel:"Lägg i varukorg",variantsOpen:!1}};var O,z,D;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(z=f.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var W,R,E;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(R=P.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var H,K,M;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(K=C.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,$,G;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    return <ProductCard {...args} />;
  },
  args: {
    cardDisplay: 'horizontal',
    product: productWineArgs,
    addToCart: () => {},
    loading: false,
    addToCartBtnLabel: 'Lägg i varukorg',
    variantsOpen: false
    // campaign: {
    //   title: 'Kampanj',
    //   color: '#9A576F',
    // },
  }
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const Be=["ProductCardStory","ProductCardStory_NoVariants","ProductCardStory_Loading","ProductCardStory_Horizontal"],Re=Object.freeze(Object.defineProperty({__proto__:null,ProductCardStory:f,ProductCardStory_Horizontal:v,ProductCardStory_Loading:C,ProductCardStory_NoVariants:P,__namedExportsOrder:Be,default:xe},Symbol.toStringTag,{value:"Module"}));export{g as P,v as a,f as b,Re as p};

import{P as ge}from"./product-quantity-input-e9877bb0.js";import{g as he}from"./picture-helper-e0ae1ee4.js";import{f as D}from"./defaultFallbackImage-b43581a6.js";import{c as n}from"./index-09749a66.js";import{T as fe}from"./tags-list-dcc30c34.js";import{D as be}from"./debounce-input-e57aaaba.js";import{j as e}from"./jsx-runtime-03333307.js";import{m as ye}from"./hooks-0265167d.js";import{F as V}from"./flex-container-7aff6506.js";import{I as Q}from"./icon-with-tooltip-f1c3a3e7.js";import{I as R}from"./icon-e3522fc5.js";import{P as l}from"./placeholder-5b523d99.js";import{P as M}from"./picture-99a9456d.js";import{A as _e}from"./alert-box-3804668d.js";import{B as xe}from"./button-1a287b34.js";import{I as G}from"./icon-button-4ba5bdac.js";const ve="_productCardHorizontal_hvrbg_1",qe="_border_hvrbg_16",Te="_campaign_hvrbg_22",je="_campaignBox_hvrbg_29",Pe="_iconLink_hvrbg_44",Ie="_limitedProduct_hvrbg_52",Ne="_limitedBox_hvrbg_59",ke="_withExtraPadding_hvrbg_73",Be="_outOfStockProduct_hvrbg_84",Ce="_outOfStockBox_hvrbg_91",Fe="_picture_hvrbg_112",we="_smallPicture_hvrbg_123",Le="_image_hvrbg_130",We="_smallImage_hvrbg_143",Se="_content_hvrbg_150",ze="_mainLink_hvrbg_160",$e="_heading_hvrbg_169",Oe="_cardInfoWrapper_hvrbg_177",Ae="_alertBox_hvrbg_189",He="_subTitle_hvrbg_196",Ee="_caption_hvrbg_202",Ue="_buttonsWrapper_hvrbg_216",De="_productCardBtn_hvrbg_232",Ve="_cartBtnIcon_hvrbg_236",Qe="_imageWrapperPlaceholder_hvrbg_246",Re="_placeholderContent_hvrbg_253",Me="_standardIcon_hvrbg_257",r={productCardHorizontal:ve,border:qe,campaign:Te,campaignBox:je,iconLink:Pe,limitedProduct:Ie,limitedBox:Ne,withExtraPadding:ke,outOfStockProduct:Be,outOfStockBox:Ce,picture:Fe,smallPicture:we,image:Le,smallImage:We,content:Se,mainLink:ze,heading:$e,cardInfoWrapper:Oe,alertBox:Ae,subTitle:He,caption:Ee,buttonsWrapper:Ue,productCardBtn:De,cartBtnIcon:Ve,imageWrapperPlaceholder:Qe,placeholderContent:Re,standardIcon:Me},Ge=({product:q,loading:t=!1,addToCart:J,addToCartBtnLabel:T,hideCartButton:K,hidePrice:h,onClickRemoveProduct:f,hideRemoveButton:j,removingProduct:Je,onChangeQuantity:c,productQuantityDisabled:P,linkComponent:d,className:X="",defaultQuantity:I,buttonLoading:N,disabled:Y,border:Ke=!1,displaySmallImage:u=!1,showAddToPurchaseListIcon:Z,onSaveToPurchaseListClick:k,maxQuantity:B,sellerOnlyTooltipText:C,accessoryPotItemTooltipText:F,isRestrictedUser:b,alertBox:w,onClick:L,debounceQuantityVal:W,productArea:S})=>{const{activeCampaign:a,partNo:o,partNoLabel:ee,productName:z,productUrl:i,primaryImageUrl:re,tags:y,isLimitedProduct:_,country:x,priceStr:$,totalPrice:O,quantity:v,outOfStock:m,salesUnit:A,itemNumberPerSalesUnit:H,priceLabel:ae,currencyLabel:te,unitLabel:E,outOfStockLabel:p,limitedLabel:g,sellerOnly:ne,isAccessoryPotItem:oe}=q,{isMobile:ie,isTablet:se}=ye(),U=he(o,re,ie||se?"120":"64");function le(s){f&&f(s)}function ce(s){const pe=parseInt(s.target.value)||0;c&&c(pe)}function de(s){c&&c(parseInt(s))}const ue={"--campaign-color":(a==null?void 0:a.color)??"#FFF","--limited-product-color":_&&g?"#F08A00":"#FFF","--out-of-stock-product-color":m&&p?"#e4b6c3":"#FFF"},me=e.jsxs(V,{alignItems:"center",gap:.5,minHeight:2.25,children:[ne&&e.jsx(e.Fragment,{children:C?e.jsx(Q,{content:C,icon:{icon:"icon-eye"}}):e.jsx(R,{icon:"icon-eye",size:"large"})}),oe&&e.jsx(e.Fragment,{children:F?e.jsx(Q,{content:F,text:"S"}):e.jsx("span",{className:r.standardIcon,children:"S"})}),Array.isArray(y)&&y.length?e.jsx(fe,{tagsList:y}):null]});return e.jsxs("div",{className:n(r.productCardHorizontal,X,{[r.campaign]:(a==null?void 0:a.title)&&!t,[r.limitedProduct]:!a&&_&&g&&!t,[r.outOfStockProduct]:!a&&m&&p&&!t}),style:ue,children:[!m&&(a==null?void 0:a.title)&&!t&&e.jsx("div",{className:r.campaignBox,children:a.title}),!a&&_&&g&&!t&&e.jsx("div",{className:n(r.limitedBox,{[r.withExtraPadding]:!j}),children:g}),m&&p&&!t&&e.jsx("div",{className:r.outOfStockBox,children:p}),t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:n(r.imageWrapper,r.imageWrapperPlaceholder),children:e.jsx(l,{type:"image"})}),e.jsxs("div",{className:r.placeholderContent,children:[e.jsx(l,{type:"heading"}),e.jsx(l,{type:"p_long"}),e.jsx(l,{type:"p_short"}),e.jsx(l,{type:"p_short"})]})]}):e.jsxs(e.Fragment,{children:[i&&d?e.jsx(d,{to:i,href:i,className:r.imageWrapper,onClick:L,children:e.jsx(M,{...U,classNamePicture:n(r.picture,u&&r.smallPicture),classNameImg:n(r.image,u&&r.smallImage),fallbackImageUrl:D})}):e.jsx("div",{className:r.imageWrapper,children:e.jsx(M,{...U,classNamePicture:n(r.picture,u&&r.smallPicture),classNameImg:n(r.image,u&&r.smallImage),fallbackImageUrl:D})}),e.jsxs(V,{flexDirection:"column",className:r.content,gap:.25,children:[me,i&&d?e.jsx(d,{to:i,href:i,className:r.mainLink,onClick:L,children:e.jsx("h5",{className:r.heading,children:z})}):e.jsx("h5",{className:r.heading,children:z}),e.jsxs("div",{className:r.cardInfoWrapper,children:[e.jsxs("div",{children:[!h&&!b&&e.jsx("p",{className:n(r.subTitle,"bodyS"),children:`${ae}: ${$?`${$} ${te??""}/${E?E.toLowerCase():""}`:""}`}),(x!==""||o!=="")&&!b&&e.jsx("p",{className:n(r.caption,"bodyS"),children:`${o?`${ee} ${o}`:""} ${x&&`- ${x}`}`}),!b&&e.jsx(e.Fragment,{children:W?e.jsx(be,{debounceVal:W,debouncedEvent:de,salesUnit:A,itemNumberPerSalesUnit:H,totalPrice:O,quantity:I??v,quantityInputId:`${o}-${S}`,maxQuantity:B,disabled:P,hidePrice:h}):e.jsx(ge,{className:r.quantityInput,salesUnit:A,itemNumberPerSalesUnit:H,totalPrice:O,quantity:I??v,quantityInputId:`${o}-${S}`,onChange:ce,disabled:P,maxQuantity:B,hidePrice:h})})]}),w&&e.jsx(_e,{className:r.alertBox,...w}),K?null:e.jsxs("div",{className:r.buttonsWrapper,children:[e.jsxs(xe,{type:"button",surface:"primary",className:t?"":r.productCardBtn,size:"x-small",onClick:()=>J(q),disabled:N||t||Y||v<="0",loading:N,name:T,children:[e.jsx(R,{icon:"icon-shopping-cart",className:r.cartBtnIcon}),e.jsx("span",{className:r.cartBtnText,children:T})]}),Z&&k&&e.jsx(G,{type:"button",icon:"icon-file-plus",className:r.purchaseListIcon,onClick:()=>k(o),size:"large",isTransparent:!0,noBorder:!0,noPadding:!0,name:"Add to purchase list"})]})]})]}),!j&&f&&e.jsx("div",{className:r.iconLink,children:e.jsx(G,{className:r.iconBtn,type:"button",icon:"icon-x-circle",onClick:()=>le(o),isTransparent:!0,noBorder:!0,size:"large",name:"Remove product"})})]})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"ProductCardHorizontal",props:{cardDisplay:{required:!0,tsType:{name:"literal",value:"'horizontal'"},description:""},isRestrictedUser:{required:!1,tsType:{name:"boolean"},description:""},product:{required:!0,tsType:{name:"IProduct"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLoading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},hidePrice:{required:!1,tsType:{name:"boolean"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},addToCartBtnLabel:{required:!0,tsType:{name:"string"},description:""},hideCartButton:{required:!1,tsType:{name:"boolean"},description:""},onChangeQuantity:{required:!1,tsType:{name:"CallableFunction"},description:""},productQuantityDisabled:{required:!1,tsType:{name:"boolean"},description:""},defaultQuantity:{required:!1,tsType:{name:"string"},description:`Sets a custom default quantity to start from
@default 0`},onRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},hideRemoveButton:{required:!1,tsType:{name:"boolean"},description:""},showFavoriteIcon:{required:!1,tsType:{name:"boolean"},description:""},favoriteProductsIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},onFavoriteIconClick:{required:!1,tsType:{name:"CallableFunction"},description:""},showAddToPurchaseListIcon:{required:!1,tsType:{name:"boolean"},description:""},onSaveToPurchaseListClick:{required:!1,tsType:{name:"CallableFunction"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},displaySmallImage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},linkComponent:{required:!1,tsType:{name:"any"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},maxQuantity:{required:!1,tsType:{name:"number"},description:""},sellerOnlyTooltipText:{required:!1,tsType:{name:"string"},description:""},accessoryPotItemTooltipText:{required:!1,tsType:{name:"string"},description:""},alertBox:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fetchPriority",value:{name:"union",raw:"'auto' | 'high' | 'low'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'high'"},{name:"literal",value:"'low'"}],required:!0}},{key:"loading",value:{name:"union",raw:"'eager' | 'lazy'",elements:[{name:"literal",value:"'eager'"},{name:"literal",value:"'lazy'"}],required:!0}}]}},description:""},onClickRemoveProduct:{required:!1,tsType:{name:"CallableFunction"},description:""},removingProduct:{required:!1,tsType:{name:"boolean"},description:""}}};export{Ge as P};
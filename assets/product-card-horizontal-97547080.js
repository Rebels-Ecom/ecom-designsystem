import{P as pe}from"./product-quantity-input-30964b6b.js";import{g as fe}from"./picture-helper-51da5c7d.js";import{f as D}from"./defaultFallbackImage-b43581a6.js";import{c as l}from"./index-a587463d.js";import{T as be}from"./tags-list-3f7fda62.js";import{D as _e}from"./debounce-input-f5a56ea0.js";import{a as n,j as e,F as c}from"./jsx-runtime-a3a6c0b8.js";import{L as ye}from"./loader-81f0d221.js";import{P as s}from"./placeholder-0f82f781.js";import{P as Q}from"./picture-7e21d28d.js";import{F as he}from"./flex-container-145d4933.js";import{I as E}from"./icon-with-tooltip-d80949f5.js";import{I as R}from"./icon-5fefd509.js";import{A as ge}from"./alert-box-c18b3f0c.js";import{I as j}from"./icon-button-f9728073.js";import{B as xe}from"./button-97f3af74.js";const Ie="_productCardHorizontal_1tbx6_1",Pe="_border_1tbx6_16",qe="_campaign_1tbx6_22",Be="_campaignBox_1tbx6_29",Ce="_iconLink_1tbx6_44",Ne="_limitedProduct_1tbx6_52",Ve="_limitedBox_1tbx6_59",ve="_withExtraPadding_1tbx6_73",ke="_outOfStockProduct_1tbx6_84",Fe="_outOfStockBox_1tbx6_91",Le="_picture_1tbx6_112",Te="_image_1tbx6_121",Se="_smallImage_1tbx6_128",We="_content_1tbx6_134",Oe="_mainLink_1tbx6_144",ze="_heading_1tbx6_153",Ae="_cardInfoWrapper_1tbx6_161",$e="_alertBox_1tbx6_171",we="_subTitle_1tbx6_178",He="_caption_1tbx6_184",Ue="_buttonsWrapper_1tbx6_196",De="_productCardBtn_1tbx6_212",Qe="_cartBtnIcon_1tbx6_216",Ee="_imageWrapperPlaceholder_1tbx6_226",Re="_placeholderContent_1tbx6_233",a={productCardHorizontal:Ie,border:Pe,campaign:qe,campaignBox:Be,iconLink:Ce,limitedProduct:Ne,limitedBox:Ve,withExtraPadding:ve,outOfStockProduct:ke,outOfStockBox:Fe,picture:Le,image:Te,smallImage:Se,content:We,mainLink:Oe,heading:ze,cardInfoWrapper:Ae,alertBox:$e,subTitle:we,caption:He,buttonsWrapper:Ue,productCardBtn:De,cartBtnIcon:Qe,imageWrapperPlaceholder:Ee,placeholderContent:Re},G=({product:_,loading:r=!1,addToCart:J,addToCartBtnLabel:K,hideCartButton:M,hidePrice:X,onClickRemoveProduct:y,hideRemoveButton:q,removingProduct:Y,onChangeQuantity:u,productQuantityDisabled:B,linkComponent:m,className:Z="",defaultQuantity:C,buttonLoading:N,disabled:ee,border:je=!1,displaySmallImage:V=!1,showAddToPurchaseListIcon:ae,onSaveToPurchaseListClick:v,maxQuantity:k,sellerOnlyTooltipText:F,accessoryPotItemTooltipText:L,isRestrictedUser:h,alertBox:T,onClick:S,debounceQuantityVal:W})=>{const{activeCampaign:t,partNo:o,partNoLabel:te,productName:O,productUrl:i,primaryImageUrl:ne,tags:g,isLimitedProduct:x,country:I,priceStr:z,totalPrice:A,quantity:P,outOfStock:p,salesUnit:$,itemNumberPerSalesUnit:w,priceLabel:re,currencyLabel:oe,unitLabel:H,outOfStockLabel:f,limitedLabel:b,sellerOnly:le,isAccessoryPotItem:ie}=_,U=fe(o,ne,"96");function ce(d){y&&y(d)}function de(d){const me=parseInt(d.target.value)||0;u&&u(me)}function se(d){u&&u(parseInt(d))}const ue={"--campaign-color":(t==null?void 0:t.color)??"#FFF","--limited-product-color":x&&b?"#F08A00":"#FFF","--out-of-stock-product-color":p&&f?"#e4b6c3":"#FFF"};return n("div",{className:l(a.productCardHorizontal,Z,{[a.campaign]:(t==null?void 0:t.title)&&!r},{[a.limitedProduct]:!t&&x&&b&&!r},{[a.outOfStockProduct]:!t&&p&&f&&!r}),style:ue,children:[!p&&(t==null?void 0:t.title)&&!r&&e("div",{className:a.campaignBox,children:t.title}),!t&&x&&b&&!r&&e("div",{className:l(a.limitedBox,q?"":a.withExtraPadding),children:b}),p&&f&&!r&&e("div",{className:a.outOfStockBox,children:f}),Y?e(ye,{visible:!0,text:"Loading"}):e(c,{children:r?n(c,{children:[e("div",{className:l(a.imageWrapper,a.imageWrapperPlaceholder),children:e(s,{type:"image"})}),n("div",{className:a.placeholderContent,children:[e(s,{type:"heading"}),e(s,{type:"p_long"}),e(s,{type:"p_short"}),e(s,{type:"p_short"})]})]}):n(c,{children:[i&&m?e(m,{to:i,href:i,className:a.imageWrapper,onClick:S,children:e(Q,{...U,classNamePicture:a.picture,classNameImg:l(a.image,V&&a.smallImage),fallbackImageUrl:D})}):e("div",{className:a.imageWrapper,children:e(Q,{...U,classNamePicture:a.picture,classNameImg:l(a.image,V&&a.smallImage),fallbackImageUrl:D})}),n("div",{className:a.content,children:[n(he,{alignItems:"center",gap:.5,minHeight:2.25,children:[le&&e(c,{children:F?e(E,{content:F,icon:{icon:"icon-eye"}}):e(R,{icon:"icon-eye",size:"large"})}),ie&&e(c,{children:L?e(E,{content:L,text:"S"}):e("span",{children:e("b",{style:{fontSize:"1.2rem"},children:"S"})})}),Array.isArray(g)&&g.length?e(be,{tagsList:g}):null]}),i&&m?e(m,{to:i,href:i,className:a.mainLink,onClick:S,children:e("h5",{className:a.heading,children:O})}):e("h5",{className:a.heading,children:O}),n("div",{className:a.cardInfoWrapper,children:[n("div",{children:[!X&&!h&&e("p",{className:l(a.subTitle,"bodyS"),children:`${re}: ${z?`${z} ${oe??""}/${H?H.toLowerCase():""}`:""}`}),(I!==""||o!=="")&&!h&&e("p",{className:l(a.caption,"bodyS"),children:`${o?`${te} ${o}`:""} ${I&&`- ${I}`}`}),!h&&e(c,{children:W?e(_e,{debounceVal:W,debouncedEvent:se,salesUnit:$,itemNumberPerSalesUnit:w,totalPrice:A,quantity:C??P,quantityInputId:o,maxQuantity:k,disabled:B}):e(pe,{className:a.quantityInput,salesUnit:$,itemNumberPerSalesUnit:w,totalPrice:A,quantity:C??P,quantityInputId:o,onChange:de,disabled:B,maxQuantity:k})})]}),T&&e(ge,{className:a.alertBox,...T})]})]}),!q&&y&&e("div",{className:a.iconLink,children:e(j,{className:a.iconBtn,type:"button",icon:"icon-x-circle",onClick:()=>ce(o),isTransparent:!0,noBorder:!0,size:"large"})}),M?null:n("div",{className:a.buttonsWrapper,children:[n(xe,{type:"button",surface:"primary",className:r?"":a.productCardBtn,size:"x-small",onClick:()=>J(_),disabled:N||r||ee||P<="0",loading:N,children:[e(R,{icon:"icon-shopping-cart",className:a.cartBtnIcon}),e("span",{className:a.cartBtnText,children:K})]}),ae&&v&&e(j,{type:"button",icon:"icon-file-plus",className:a.purchaseListIcon,onClick:()=>v(o),size:"large",isTransparent:!0,noBorder:!0,noPadding:!0})]})]})})]})};try{G.displayName="ProductCardHorizontal",G.__docgenInfo={description:"",displayName:"ProductCardHorizontal",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:'"horizontal"'}},isRestrictedUser:{defaultValue:null,description:"",name:"isRestrictedUser",required:!1,type:{name:"boolean"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},displaySmallImage:{defaultValue:{value:"false"},description:"",name:"displaySmallImage",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},maxQuantity:{defaultValue:null,description:"",name:"maxQuantity",required:!1,type:{name:"number"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},accessoryPotItemTooltipText:{defaultValue:null,description:"",name:"accessoryPotItemTooltipText",required:!1,type:{name:"string"}},alertBox:{defaultValue:null,description:"",name:"alertBox",required:!1,type:{name:"TAlertBox"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"CallableFunction"}},debounceQuantityVal:{defaultValue:null,description:"",name:"debounceQuantityVal",required:!1,type:{name:"number"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}export{G as P};
import{P as K}from"./product-quantity-input-289618f1.js";import{g as M}from"./picture-helper-1d1954b7.js";import{f as X}from"./defaultFallbackImage-b43581a6.js";import{c as l}from"./index-a587463d.js";import{T as Y}from"./tags-list-5108b032.js";import{a as r,j as e,F as f}from"./jsx-runtime-a3a6c0b8.js";import{L as Z}from"./loader-72deb8c4.js";import{P as o}from"./placeholder-0f82f781.js";import{P as ee}from"./picture-7e21d28d.js";import{I as v}from"./icon-button-c1cc9278.js";import{B as ae}from"./button-369dade1.js";import{I as te}from"./icon-5fefd509.js";const ne="_productCardHorizontal_1fbqe_1",re="_border_1fbqe_16",oe="_campaign_1fbqe_22",le="_campaignBox_1fbqe_29",ie="_iconLink_1fbqe_45",de="_picture_1fbqe_54",ce="_image_1fbqe_63",ue="_content_1fbqe_70",se="_mainLink_1fbqe_80",pe="_heading_1fbqe_89",me="_subTitle_1fbqe_97",fe="_caption_1fbqe_103",be="_buttonsWrapper_1fbqe_115",ye="_productCardBtn_1fbqe_131",_e="_cartBtnIcon_1fbqe_135",he="_imageWrapperPlaceholder_1fbqe_145",qe="_placeholderContent_1fbqe_152",a={productCardHorizontal:ne,border:re,campaign:oe,campaignBox:le,iconLink:ie,picture:de,image:ce,content:ue,mainLink:se,heading:pe,subTitle:me,caption:fe,buttonsWrapper:be,productCardBtn:ye,cartBtnIcon:_e,imageWrapperPlaceholder:he,placeholderContent:qe},I=({product:i,loading:d=!1,addToCart:N,addToCartBtnLabel:V,hideCartButton:B,hidePrice:L,onClickRemoveProduct:c,hideRemoveButton:k,removingProduct:T,onChangeQuantity:b,productQuantityDisabled:F,linkComponent:y,className:x="",defaultQuantity:z,campaign:t,buttonLoading:_,disabled:$,border:W=!1,showAddToPurchaseListIcon:H,onSaveToPurchaseListClick:h})=>{const{partNo:n,partNoLabel:Q,productName:q,productUrl:u,primaryImageUrl:A,tags:s,country:p,packaging:ge,priceStr:g,totalPrice:S,quantity:C,salesUnit:U,itemNumberPerSalesUnit:w,priceLabel:R,currencyLabel:D,unitLabel:P}=i,j=M(n,A);function O(m){c&&c(m)}function E(m){const J=parseInt(m.target.value)||0;b&&b(J)}const G={"--campaign-color":(t==null?void 0:t.color)??"#FFF"};return r("div",{className:l(a.productCardHorizontal,x,{[a.campaign]:t==null?void 0:t.title,[a.border]:W}),style:G,children:[(t==null?void 0:t.title)&&e("div",{className:a.campaignBox,children:t.title}),T?e(Z,{visible:!0,text:"Loading"}):e(f,{children:d?r(f,{children:[e("div",{className:l(a.imageWrapper,a.imageWrapperPlaceholder),children:e(o,{type:"image"})}),r("div",{className:a.placeholderContent,children:[e(o,{type:"heading"}),e(o,{type:"p_long"}),e(o,{type:"p_short"}),e(o,{type:"p_short"})]})]}):r(f,{children:[e(ee,{...j,classNamePicture:a.picture,classNameImg:`${a.image}`,fallbackImageUrl:X}),r("div",{className:a.content,children:[Array.isArray(s)&&s.length?e(Y,{tagsList:s}):null,u&&y?e(y,{to:u,href:u,className:a.mainLink,children:e("h5",{className:a.heading,children:q})}):e("h5",{className:a.heading,children:q}),!L&&e("p",{className:l(a.subTitle,"bodyS"),children:`${R}: ${g?`${g} ${D??""}/${P?P.toLowerCase():""}`:""}`}),(p!==""||n!=="")&&e("p",{className:l(a.caption,"bodyS"),children:`${n?`${Q} ${n}`:""} ${p&&`- ${p}`}`}),e(K,{className:a.quantityInput,salesUnit:U,itemNumberPerSalesUnit:w,totalPrice:S,quantity:z??C,quantityInputId:n,onChange:E,disabled:F})]}),!k&&c&&e("div",{className:a.iconLink,children:e(v,{type:"button",icon:"icon-x-circle",onClick:()=>O(n),isTransparent:!0,noBorder:!0,size:"large"})}),B?null:r("div",{className:a.buttonsWrapper,children:[H&&h&&e(v,{type:"button",icon:"icon-file-plus",className:a.purchaseListIcon,onClick:()=>h(n),size:"large",isTransparent:!0,noBorder:!0,noPadding:!0}),r(ae,{type:"button",surface:"primary",className:d?"":a.productCardBtn,size:"x-small",onClick:()=>N(i),disabled:_||d||$||C<="0",loading:_,children:[e(te,{icon:"icon-shopping-cart",className:a.cartBtnIcon}),e("span",{className:a.cartBtnText,children:V})]})]})]})})]})};try{I.displayName="ProductCardHorizontal",I.__docgenInfo={description:"",displayName:"ProductCardHorizontal",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:'"horizontal"'}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClickRemoveProduct:{defaultValue:null,description:"",name:"onClickRemoveProduct",required:!1,type:{name:"CallableFunction"}},removingProduct:{defaultValue:null,description:"",name:"removingProduct",required:!1,type:{name:"boolean"}}}}}catch{}export{I as P};
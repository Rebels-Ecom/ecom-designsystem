import{P as le}from"./product-quantity-input-289618f1.js";import{f as F}from"./defaultFallbackImage-b43581a6.js";import{c as s}from"./index-a587463d.js";import{P as ie}from"./product-variant-list-633fe6f6.js";import{T as oe}from"./tags-list-5108b032.js";import{j as e,a as i,F as ce}from"./jsx-runtime-a3a6c0b8.js";import{I as de}from"./icon-5fefd509.js";import{P as r}from"./placeholder-0f82f781.js";import{P as x}from"./picture-7e21d28d.js";import{B as W}from"./button-369dade1.js";import{I as L}from"./icon-button-c1cc9278.js";const ue="_productCardVertical_hh8c3_1",se="_campaign_hh8c3_19",pe="_campaignBox_hh8c3_26",me="_iconLink_hh8c3_44",he="_limitedProduct_hh8c3_51",fe="_limitedBox_hh8c3_58",ye="_imageWrapper_hh8c3_83",_e="_cardPicture_hh8c3_94",ge="_cardImage_hh8c3_101",Ce="_cardContent_hh8c3_112",be="_placeholderContent_hh8c3_112",Pe="_tagsWrapper_hh8c3_123",Ve="_headingWrapper_hh8c3_131",Ie="_heading_hh8c3_131",ve="_textGray_hh8c3_146",qe="_textPurple_hh8c3_151",Be="_productCardInput_hh8c3_157",Ne="_productCardBtn_hh8c3_161",ke="_hiddenPackagingBtn_hh8c3_165",Fe="_cartButtonWrapper_hh8c3_180",xe="_favoriteIconActive_hh8c3_187",a={productCardVertical:ue,campaign:se,campaignBox:pe,iconLink:me,limitedProduct:he,limitedBox:fe,imageWrapper:ye,cardPicture:_e,cardImage:ge,cardContent:Ce,placeholderContent:be,tagsWrapper:Pe,headingWrapper:Ve,heading:Ie,textGray:ve,textPurple:qe,productCardInput:Be,productCardBtn:Ne,hiddenPackagingBtn:ke,cartButtonWrapper:Fe,favoriteIconActive:xe},A=({product:p,loading:n=!1,hideCartButton:$,addToCart:T,addToCartBtnLabel:S,onChangeQuantity:f,productQuantityDisabled:Q,linkComponent:o,variantsOpen:U,handlePackageChange:w,selectedVariantId:y,productImage:_,onVariantsButtonClick:g,className:C,defaultQuantity:D,campaign:t,disabled:R,buttonLoading:b,limitedProductText:c,showFavoriteIcon:z,isFavoriteIconActive:P,onFavoriteIconClick:V,showAddToPurchaseListIcon:G,onSaveToPurchaseListClick:I})=>{const{partNo:d,partNoLabel:O,productName:v,productUrl:l,productVariantList:m,country:q,packaging:j,priceStr:E,totalPrice:H,quantity:B,salesUnit:J,itemNumberPerSalesUnit:K,tags:u,isLimitedProduct:h,sellerOnly:M,isAccessoryPotItem:X,priceLabel:Y,currencyLabel:Z,unitLabel:N}=p,k=!m||m.length<=1;function ee(re){const ne=parseInt(re.target.value)||0;f&&f(ne)}function ae(){g&&g()}const te={"--campaign-color":(t==null?void 0:t.color)??"#FFF","--limited-product-color":h&&c?"#F08A00":"#FFF"};return U&&y?e(ie,{className:a.productCardVertical,variantsList:m,onVariantSelect:w,selectedVariantId:y}):i("div",{className:s(a.productCardVertical,C||"",{[a.campaign]:t==null?void 0:t.title},{[a.limitedProduct]:!t&&h&&c}),style:te,children:[(t==null?void 0:t.title)&&e("div",{className:a.campaignBox,children:t.title}),!t&&h&&c&&e("div",{className:a.limitedBox,children:c}),i("div",{className:a.tagsWrapper,children:[M&&e(de,{icon:"icon-eye",size:"large"}),X&&e("span",{children:e("b",{style:{fontSize:"1.2rem"},children:"S"})}),n?e(r,{type:"tags"}):Array.isArray(u)&&u.length?e(oe,{tagsList:t?u.slice(0,3):u}):null]}),n?e(r,{type:"image"}):e(ce,{children:l&&o?e(o,{to:l,href:l,className:a.imageWrapper,children:e(x,{..._,classNamePicture:a.cardPicture,classNameImg:`${a.cardImage}`,fallbackImageUrl:F})}):e("div",{className:a.imageWrapper,children:e(x,{..._,classNamePicture:a.cardPicture,classNameImg:`${a.cardImage}`,fallbackImageUrl:F})})}),n?i("div",{className:a.placeholderContent,children:[e(r,{type:"heading"}),e(r,{type:"heading"}),e(r,{type:"heading"}),e(r,{type:"p_long"}),e(r,{type:"p_long"})]}):i("div",{className:`${a.cardContent}`,children:[l&&o?e(o,{to:l,href:l,className:a.headingWrapper,children:e("h5",{className:a.heading,children:v})}):e("h5",{className:a.heading,children:v}),e("p",{className:s(a.textGray,"bodyS"),children:`${O} ${d} ${q&&`- ${q}`}`}),e("p",{className:s(a.textPurple,"bodyS"),children:`${Y}: ${E} ${Z??""}/${N?N.toLowerCase():""}`})]}),e(W,{type:"button",surface:"secondary",iconRight:k?void 0:{icon:"icon-layers"},rounded:!0,fullWidth:!0,onClick:()=>ae(),disabled:n||k,children:j}),n?i("div",{className:a.placeholderContent,children:[e(r,{type:"p_long"}),e(r,{type:"p_long"})]}):e(le,{className:a.productCardInput,salesUnit:J,itemNumberPerSalesUnit:K,totalPrice:H,quantity:D??B,quantityInputId:d,disabled:Q,onChange:ee}),!$&&i("div",{className:a.cartButtonWrapper,children:[e(W,{type:"button",surface:"primary",className:n?"":a.productCardBtn,fullWidth:!0,onClick:()=>T(p),disabled:b||n||R||B==="0",loading:b,children:S}),G&&I&&e(L,{type:"button",icon:"icon-file-plus",className:a.purchaseListIcon,onClick:()=>I(d),size:"large",isTransparent:!0,noBorder:!0,noPadding:!0}),z&&V&&e(L,{type:"button",icon:P?"icon-heart1":"icon-heart-o",className:s(a.favoriteIcon,P?a.favoriteIconActive:""),onClick:()=>V(d),size:"large",isTransparent:!0,noBorder:!0,noPadding:!0})]})]})};try{A.displayName="ProductCardVertical",A.__docgenInfo={description:"",displayName:"ProductCardVertical",props:{cardDisplay:{defaultValue:null,description:"",name:"cardDisplay",required:!0,type:{name:'"vertical"'}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"IProduct"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},buttonLoading:{defaultValue:null,description:"",name:"buttonLoading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hidePrice:{defaultValue:null,description:"",name:"hidePrice",required:!1,type:{name:"boolean"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},addToCartBtnLabel:{defaultValue:null,description:"",name:"addToCartBtnLabel",required:!0,type:{name:"string"}},hideCartButton:{defaultValue:null,description:"",name:"hideCartButton",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"CallableFunction"}},productQuantityDisabled:{defaultValue:null,description:"",name:"productQuantityDisabled",required:!1,type:{name:"boolean"}},defaultQuantity:{defaultValue:{value:"0"},description:"Sets a custom default quantity to start from",name:"defaultQuantity",required:!1,type:{name:"string"}},onRemoveProduct:{defaultValue:null,description:"",name:"onRemoveProduct",required:!1,type:{name:"CallableFunction"}},hideRemoveButton:{defaultValue:null,description:"",name:"hideRemoveButton",required:!1,type:{name:"boolean"}},campaign:{defaultValue:null,description:"",name:"campaign",required:!1,type:{name:"{ title: string; color: string; }"}},limitedProductText:{defaultValue:null,description:"",name:"limitedProductText",required:!1,type:{name:"string"}},showFavoriteIcon:{defaultValue:null,description:"",name:"showFavoriteIcon",required:!1,type:{name:"boolean"}},isFavoriteIconActive:{defaultValue:null,description:"",name:"isFavoriteIconActive",required:!1,type:{name:"boolean"}},onFavoriteIconClick:{defaultValue:null,description:"",name:"onFavoriteIconClick",required:!1,type:{name:"CallableFunction"}},showAddToPurchaseListIcon:{defaultValue:null,description:"",name:"showAddToPurchaseListIcon",required:!1,type:{name:"boolean"}},onSaveToPurchaseListClick:{defaultValue:null,description:"",name:"onSaveToPurchaseListClick",required:!1,type:{name:"CallableFunction"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},productImage:{defaultValue:null,description:"",name:"productImage",required:!0,type:{name:"IPicture"}},variantsOpen:{defaultValue:null,description:"",name:"variantsOpen",required:!1,type:{name:"boolean"}},handlePackageChange:{defaultValue:null,description:"",name:"handlePackageChange",required:!0,type:{name:"CallableFunction"}},selectedVariantId:{defaultValue:null,description:"",name:"selectedVariantId",required:!1,type:{name:"string"}},onVariantsButtonClick:{defaultValue:null,description:"",name:"onVariantsButtonClick",required:!0,type:{name:"CallableFunction"}}}}}catch{}export{A as P};
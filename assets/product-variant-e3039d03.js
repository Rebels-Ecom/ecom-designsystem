import{R as b}from"./radio-button-ac06a94c.js";import{P as x}from"./picture-7e21d28d.js";import{c}from"./index-a587463d.js";import{f as P}from"./defaultFallbackImage-b43581a6.js";import{a as t,j as r,F as d}from"./jsx-runtime-a3a6c0b8.js";import{F as s}from"./flex-container-145d4933.js";import{I as W}from"./icon-with-tooltip-4ffb0da0.js";import{I as $}from"./icon-5fefd509.js";const I="_productVariant_dny8g_1",R="_imageWrapper_dny8g_16",v="_contentWrapper_dny8g_25",L="_picture_dny8g_29",U="_image_dny8g_16",F="_heading_dny8g_47",j="_textGray_dny8g_52",w="_textPurple_dny8g_57",C="_topRow_dny8g_63",G="_radioWrapper_dny8g_74",e={productVariant:I,imageWrapper:R,contentWrapper:v,picture:L,image:U,heading:F,textGray:j,textPurple:w,topRow:C,radioWrapper:G},p=({image:i,productName:m,variantName:l,variantId:a,country:o,priceStr:g,onChange:y,onClick:n,checked:_,partNoLabel:f,currencyLabel:h,unitLabel:V,sellerOnly:N,sellerOnlyTooltipText:u,isRestrictedUser:q})=>t("button",{className:e.productVariant,onClick:()=>n==null?void 0:n(a),children:[t(s,{stretch:!0,justifyContent:"flex-end",alignItems:"center",className:e.topRow,children:[N&&r(d,{children:u?r(W,{content:u,icon:{icon:"icon-eye"}}):r($,{icon:"icon-eye",size:"large"})}),r("div",{className:e.radioWrapper,children:r(b,{id:a,name:`variant-radio-${m}`,checked:_,value:a,onChange:y})})]}),t(s,{stretch:!0,alignItems:"center",children:[t("div",{className:e.imageWrapper,children:[r(x,{...i,classNamePicture:e.picture,classNameImg:`${e.image}`,fallbackImageUrl:P})," "]}),t("div",{className:`${e.contentWrapper}`,children:[r("p",{className:e.heading,children:l}),!q&&t(d,{children:[r("p",{className:c(e.textGray,"bodyS"),children:`${f} ${a} ${o&&`- ${o}`}`}),r("p",{className:c(e.textPurple,"bodyS"),children:`${l}: ${g} ${h}/${V}`})]})]})]})]});try{p.displayName="ProductVariant",p.__docgenInfo={description:"",displayName:"ProductVariant",props:{productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},variantName:{defaultValue:null,description:"",name:"variantName",required:!0,type:{name:"string"}},variantId:{defaultValue:null,description:"",name:"variantId",required:!0,type:{name:"string"}},country:{defaultValue:null,description:"",name:"country",required:!0,type:{name:"string"}},priceStr:{defaultValue:null,description:"",name:"priceStr",required:!0,type:{name:"string"}},salesUnit:{defaultValue:null,description:"",name:"salesUnit",required:!0,type:{name:"string"}},sellerOnly:{defaultValue:null,description:"",name:"sellerOnly",required:!0,type:{name:"boolean"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"CallableFunction"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((partNo: string) => void)"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},partNoLabel:{defaultValue:null,description:"",name:"partNoLabel",required:!0,type:{name:"string"}},unitLabel:{defaultValue:null,description:"",name:"unitLabel",required:!0,type:{name:"string"}},currencyLabel:{defaultValue:null,description:"",name:"currencyLabel",required:!0,type:{name:"string"}},sellerOnlyTooltipText:{defaultValue:null,description:"",name:"sellerOnlyTooltipText",required:!1,type:{name:"string"}},isRestrictedUser:{defaultValue:null,description:"",name:"isRestrictedUser",required:!1,type:{name:"boolean"}}}}}catch{}export{p as P};
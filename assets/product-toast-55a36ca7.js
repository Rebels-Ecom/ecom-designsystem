import{r as o,j as t,a as n}from"./jsx-runtime-a3a6c0b8.js";import{c as g}from"./index-a587463d.js";import{b as f}from"./cart-product.stories-e3336369.js";import{T as q}from"./text-cdc0625f.js";import{m as w}from"./hooks-740d1016.js";import{u as x}from"./useOnClickOutside-338168d6.js";import{m as N}from"./motion-54668070.js";import{I as l}from"./icon-button-1fa38b3d.js";const k="_toastContainer_11wrv_1",I="_toast_11wrv_1",T="_buttonWrapper_11wrv_45",W="_buttonsWrapper_11wrv_50",B="_header_11wrv_55",P="_cartIcon_11wrv_65",V="_divider_11wrv_72",j="_iconBtnClose_11wrv_79",r={toastContainer:k,"top-right":"_top-right_11wrv_16","top-left":"_top-left_11wrv_21",toast:I,buttonWrapper:T,buttonsWrapper:W,header:B,cartIcon:P,divider:V,iconBtnClose:j},_=o.forwardRef(({cartProduct:a,setIsOpen:s,children:u,position:v="top-left",className:d,label:i,notification:e},y)=>{const p=o.useRef(null),{isMobile:c,isTablet:m,isDesktop:b,isBigScreen:C}=w(),h=o.useCallback(()=>{s&&s(!1)},[s]);return a?(x({ref:p,onClose:h}),t(N.div,{ref:p,animate:{x:0},initial:{x:"100%"},exit:{x:"100%"},transition:{duration:.2,ease:"easeIn"},className:g(d||r.toastContainer,r[v]),children:n("div",{className:r.toast,ref:y,children:[s&&n("div",{className:c||m?r.buttonWrapper:r.buttonsWrapper,children:[((e==null?void 0:e.quantity)||(e==null?void 0:e.quantity)===0)&&(c||m)&&t(l,{type:"button",notification:e.quantity,onClick:e.onClick,icon:"icon-shopping-cart",size:"medium",className:r.cartIcon,disabled:a.loading}),t(l,{type:"button",className:r.iconBtnClose,onClick:()=>s(!1),icon:"icon-x",size:"large",isTransparent:!0,noPadding:!0,noBorder:!0})]}),n("div",{className:r.header,children:[((e==null?void 0:e.quantity)||(e==null?void 0:e.quantity)===0)&&(b||C)&&t(l,{type:"button",notification:e.quantity,onClick:e.onClick,icon:"icon-shopping-cart",size:"medium",className:r.cartIcon,disabled:a.loading}),i&&t(q,{align:"center",weight:"bold",children:i})]}),t(f,{...a,hidePrice:!0}),u&&t("hr",{className:r.divider}),u]})})):null});try{_.displayName="ProductToast",_.__docgenInfo={description:"",displayName:"ProductToast",props:{cartProduct:{defaultValue:null,description:"",name:"cartProduct",required:!0,type:{name:"ICartProduct"}},notification:{defaultValue:null,description:"",name:"notification",required:!1,type:{name:"{ quantity: number; onClick: (data?: any) => void; }"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!1,type:{name:"((isOpen: boolean) => void)"}},position:{defaultValue:{value:"top-left"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{_ as P};
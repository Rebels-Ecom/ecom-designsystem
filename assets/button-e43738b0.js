import{r as x}from"./index-6f814c40.js";import{c as s}from"./index-74f03c09.js";import{I as i}from"./icon-7e598265.js";import{b as a}from"./button.module-42bc270d.js";import{j as B,a as l}from"./jsx-runtime-76c5c2e2.js";function c(e){switch(e){case"secondary":return"secondaryButton";case"tertiary":return"tertiaryButton";case"primary":default:return"primaryButton"}}function u(e){switch(e){case"xx-small":return"cta-xxs";case"x-small":return"cta-xs";case"large":return"cta-l";case"small":default:return"cta-s"}}const d=x.forwardRef(({surface:e="primary",size:m="small",type:p="button",children:t,iconLeft:r,iconRight:n,fullWidth:f,rounded:y,disabled:_,onClick:v,id:o,className:g},b)=>t?B("button",{ref:b,id:o||void 0,type:p,className:s(a.buttonDefault,u(m),a[e],f&&a.fullWidth,y&&a.rounded,g),disabled:_,onClick:v,children:[r&&l(i,{icon:r.icon}),t&&l("span",{className:s(a.buttonContent,r&&a.contentRight,n&&a.contentLeft),children:t}),n&&l(i,{icon:n.icon})]}):null);try{c.displayName="getButtonSurface",c.__docgenInfo={description:"",displayName:"getButtonSurface",props:{}}}catch{}try{u.displayName="getButtonSize",u.__docgenInfo={description:"",displayName:"getButtonSize",props:{}}}catch{}try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},surface:{defaultValue:{value:"primary"},description:"Decides the style of the button",name:"surface",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"x"'}]}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"IIcon"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"IIcon"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"x-small"'},{value:'"xx-small"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{d as B};
//# sourceMappingURL=button-e43738b0.js.map
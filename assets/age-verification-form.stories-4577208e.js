import{j as e,r as p}from"./jsx-runtime-03333307.js";import{l}from"./Spendrups_logo_horizontal-038b757f.js";import{l as h}from"./Spendrups_logo_vertical-4f973801.js";import{B as x}from"./button-8e3f9b10.js";import{F as n}from"./flex-container-7aff6506.js";import{H as _}from"./heading-ba18f9a9.js";import{T as d}from"./text-1a10703e.js";import{m as j}from"./motion-9380e2c6.js";import{M as C}from"./modal-a73af886.js";import{L as F}from"./logotype-2d701602.js";import"./index-09749a66.js";import"./icon-cf6ebd85.js";import"./button.module-a43725bf.js";import"./loader-5c06d14e.js";import"./tslib.es6-4d885d63.js";import"./index-821951ec.js";import"./icon-button-876cd016.js";import"./ui-link-9ccf406a.js";import"./index-61679f6b.js";import"./picture-b42c0b1b.js";const V="_ageVerificationForm_fa9fe_1",M="_actionsWrapper_fa9fe_5",S="_description_fa9fe_17",T="_errorContainer_fa9fe_21",A="_errorMessage_fa9fe_25",o={ageVerificationForm:V,actionsWrapper:M,description:S,errorContainer:T,errorMessage:A},m=({title:a,description:r,errorMessage:t,actions:c})=>e.jsxs(n,{className:o.ageVerificationForm,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2,children:[a&&e.jsx(_,{order:3,noMargin:!0,align:"center",children:a}),e.jsx(d,{className:o.description,align:"center",children:r}),e.jsxs(n,{flexDirection:"column",alignItems:"center",stretch:!0,children:[e.jsx(n,{className:o.actionsWrapper,stretch:!0,alignItems:"center",justifyContent:"center",children:c.map((i,y)=>e.jsx(x,{...i},y))}),e.jsx("div",{className:o.errorContainer,children:t&&e.jsx(j.div,{className:o.errorMessage,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(d,{color:"error",align:"center",children:t})})})]})]});m.__docgenInfo={description:"",methods:[],displayName:"AgeVerificationForm",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"IButton"}],raw:"IButton[]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};const U={title:"Design System/Molecules/Age Verification Form",component:m},I={render:a=>{const[r,t]=p.useState(!0),[c,i]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{surface:"primary",type:"button",onClick:()=>t(!r),children:r?"Close":"Open"}),e.jsx(C,{open:r,onClose:()=>t(!1),hideCloseButton:!0,children:e.jsxs(n,{stretch:!0,alignItems:"center",justifyContent:"center",flexDirection:"column",gap:2,children:[e.jsx(F,{src:l,alt:"logo",id:"logo",sources:[{srcset:h,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]}),e.jsx(m,{actions:[{children:"Jag är under 20 år",surface:"primary",type:"button",onClick:()=>i(!0)},{children:"Jag har fyllt 20 år",surface:"primary",type:"button",onClick:()=>i(!1)}],title:"Title",description:"description",errorMessage:c?"Error message":void 0})]})})]})}},s={...I,args:{}};var f,g,u;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...AgeVerificationFormStoryTemplate,
  args: {}
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const X=["AgeVerificationFormStory"];export{s as AgeVerificationFormStory,X as __namedExportsOrder,U as default};
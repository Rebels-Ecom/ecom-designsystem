import{I as o}from"./icon-cf6ebd85.js";import{C as a}from"./content-wrapper-adfa8526.js";import{j as e}from"./jsx-runtime-03333307.js";import{m as n}from"./motion-9380e2c6.js";const c="_deliveryInfoBar_1tgjg_1",d="_icon_1tgjg_16",l="_text_1tgjg_16",t={deliveryInfoBar:c,icon:d,text:l},p=({exists:r,infoText:i,onClick:s})=>r?e.jsx(n.div,{initial:{opacity:0,translateY:"-50px"},animate:{opacity:1,translateY:0},transition:{delay:.5,type:"spring",duration:.3},children:e.jsx(a,{padding:[.25,2.5],children:e.jsx("div",{className:t.deliveryInfoBar,children:e.jsxs(n.button,{whileTap:{scale:.95},className:t.button,onClick:s,children:[e.jsx(o,{className:t.icon,icon:"icon-truck"}),e.jsx("span",{className:t.text,children:i})]})})})}):null;p.__docgenInfo={description:"",methods:[],displayName:"DeliveryInfoBar",props:{exists:{required:!0,tsType:{name:"boolean"},description:""},infoText:{required:!0,tsType:{name:"string"},description:""},altText:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{p as D};
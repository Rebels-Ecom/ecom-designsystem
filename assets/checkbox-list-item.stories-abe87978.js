import{j as e,r as L}from"./jsx-runtime-03333307.js";import{C as _}from"./checkbox-892e3305.js";import{T as x}from"./text-002528fe.js";import{H as h}from"./heading-ba18f9a9.js";const y="_checkboxListItem_1tyfj_1",j="_itemWrapper_1tyfj_10",i={checkboxListItem:y,itemWrapper:j};function a({children:s,id:n,name:o,value:g,checked:b,onChange:I}){return s?e.jsxs("div",{className:i.checkboxListItem,children:[e.jsx("div",{className:i.itemWrapper,children:s}),e.jsx(_,{id:n,name:o,value:g,checked:b,onChange:I})]}):null}a.__docgenInfo={description:"",methods:[],displayName:"CheckboxListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const C={title:"Design System/Molecules/CheckboxListItem",component:a},k={render:({...s})=>{const[n,o]=L.useState(!1);return e.jsx("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e.jsx(a,{...s,onChange:()=>o(!n)})})}},f=e.jsxs(e.Fragment,{children:[e.jsx(h,{order:5,noMargin:!0,children:"Loka stilla naturell 12 pack 50cl pet"}),e.jsx(x,{children:"Art.nr: 1224345"})]}),T=e.jsxs(e.Fragment,{children:[e.jsx(h,{order:5,noMargin:!0,children:"Heineken 5% 50cl engångsglas"}),e.jsx(x,{children:"Art.nr: 115112"})]}),t={...k,args:{children:f,id:"1224345",name:"1224345",value:"1224345"}},r={...k,args:{children:T,id:"115112",name:"115112",value:"115112"}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...CheckboxListItemStoryTemplate,
  args: {
    children: checkboxItemLoka,
    id: '1224345',
    name: '1224345',
    value: '1224345'
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...CheckboxListItemStoryTemplate,
  args: {
    children: checkboxItemHeineken,
    id: '115112',
    name: '115112',
    value: '115112'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const v=["CheckboxListItem_Loka","CheckboxListItem_Heineken"],R=Object.freeze(Object.defineProperty({__proto__:null,CheckboxListItem_Heineken:r,CheckboxListItem_Loka:t,__namedExportsOrder:v,default:C},Symbol.toStringTag,{value:"Module"}));export{r as C,t as a,a as b,R as c};

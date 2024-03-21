import{a as c,j as e,r as y,F as k}from"./jsx-runtime-a3a6c0b8.js";import{C as f}from"./checkbox-9e8e27d1.js";import{T as x}from"./text-cdc0625f.js";import{H as b}from"./heading-47d2ab87.js";const C="_checkboxListItem_1tyfj_1",v="_itemWrapper_1tyfj_10",i={checkboxListItem:C,itemWrapper:v};function a({children:t,id:o,name:s,value:_,checked:I,onChange:L}){return t?c("div",{className:i.checkboxListItem,children:[e("div",{className:i.itemWrapper,children:t}),e(f,{id:o,name:s,value:_,checked:I,onChange:L})]}):null}try{a.displayName="CheckboxListItem",a.__docgenInfo={description:"",displayName:"CheckboxListItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}}}}}catch{}const S={title:"Design System/Molecules/CheckboxListItem",component:a},g={render:({...t})=>{const[o,s]=y.useState(!1);return e("div",{style:{margin:"3rem auto",maxWidth:"1800px"},children:e(a,{...t,onChange:()=>s(!o)})})}},j=c(k,{children:[e(b,{order:5,noMargin:!0,children:"Loka stilla naturell 12 pack 50cl pet"}),e(x,{children:"Art.nr: 1224345"})]}),H=c(k,{children:[e(b,{order:5,noMargin:!0,children:"Heineken 5% 50cl engångsglas"}),e(x,{children:"Art.nr: 115112"})]}),r={...g,args:{children:j,id:"1224345",name:"1224345",value:"1224345"}},n={...g,args:{children:H,id:"115112",name:"115112",value:"115112"}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...CheckboxListItemStoryTemplate,
  args: {
    children: checkboxItemLoka,
    id: '1224345',
    name: '1224345',
    value: '1224345'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...CheckboxListItemStoryTemplate,
  args: {
    children: checkboxItemHeineken,
    id: '115112',
    name: '115112',
    value: '115112'
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const T=["CheckboxListItem_Loka","CheckboxListItem_Heineken"],N=Object.freeze(Object.defineProperty({__proto__:null,CheckboxListItem_Heineken:n,CheckboxListItem_Loka:r,__namedExportsOrder:T,default:S},Symbol.toStringTag,{value:"Module"}));export{n as C,r as a,a as b,N as c};

import{j as e,r as g}from"./jsx-runtime-03333307.js";import{c as u}from"./index-09749a66.js";import{D as p,a as v}from"./delivery-form.stories-dfcc50d9.js";import{B as D}from"./button-adba1f05.js";import{T as o}from"./text-1a10703e.js";import{Heading_DeliveryForm_Story as m}from"./heading.stories-d29505ed.js";import{H as f}from"./heading-ba18f9a9.js";import{F as x}from"./flex-container-7aff6506.js";import{C as h}from"./checkbox-0ec5ac00.js";const _="_cartDeliveryDetails_1qx56_1",j="_contentWrapper_1qx56_10",S="_overlay_1qx56_18",n={cartDeliveryDetails:_,contentWrapper:j,overlay:S};function i({children:a,className:r,loading:s=!1}){return e.jsxs("div",{className:u(n.cartDeliveryDetails,r||""),children:[s&&e.jsx("div",{className:n.overlay}),e.jsx("div",{className:n.contentWrapper,children:a})]})}i.__docgenInfo={description:"",methods:[],displayName:"CartDeliveryDetails",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Design System/Organisms/CartDeliveryDetails",component:i},C={render:({...a})=>{const[r,s]=g.useState(!1);function y(){alert("Start checkout process...")}return e.jsx("div",{style:{margin:"auto",position:"relative"},children:e.jsxs(i,{loading:a.loading,children:[e.jsx(f,{order:3,children:m.args.children}),e.jsx(v,{...p.args}),e.jsxs(x,{alignItems:"center",gap:.5,children:[e.jsx(h,{id:"terms-and-conditions",name:"terms-and-conditions",value:`${r}`,checked:r,onChange:()=>s(!r),other:{"aria-label":"Terms and conditions"}}),e.jsx(o,{size:"small",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:"Terms and conditions"}})})]}),e.jsx(o,{children:'Genom att klicka på "Lägg beställning" godkänner jag Villkor för Spendrups Shoppingtjänst och bekräftar att jag har läst Spendrups Dataskyddsinformation och Cookiepolicy. Jag godkänner villkoren för Spendrups AB.'}),e.jsx(o,{componentType:"a",href:"/kopevillkor",underline:!0,children:"Spendrups köpevillkor"}),e.jsx(D,{children:"Button",type:"button",surface:"primary",onClick:y})]})})}},t={...C,args:{loading:!1,...m.args,...p.args}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...CartDeliveryDetailsStoryTemplate,
  args: {
    loading: false,
    ...Heading_DeliveryForm_Story.args,
    ...DeliveryFormStory.args
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const T=["CartDeliveryDetailsStory"],O=Object.freeze(Object.defineProperty({__proto__:null,CartDeliveryDetailsStory:t,__namedExportsOrder:T,default:k},Symbol.toStringTag,{value:"Module"}));export{t as C,i as a,O as c};
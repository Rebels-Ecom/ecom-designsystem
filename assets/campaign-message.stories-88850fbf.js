import{B as g}from"./button-8e3f9b10.js";import{I as l}from"./icon-cf6ebd85.js";import{j as e}from"./jsx-runtime-03333307.js";import"./index-09749a66.js";import"./button.module-a43725bf.js";import"./loader-5c06d14e.js";const u="_campaignMessage_409vb_1",d="_icon_409vb_13",_="_message_409vb_17",x="_button_409vb_32",s={campaignMessage:u,icon:d,message:_,button:x},t=({message:n,ctaText:m,icon:r,onClick:p})=>e.jsxs("div",{className:s.campaignMessage,children:[r&&e.jsx(l,{...r,className:s.icon}),e.jsx("span",{className:s.message,children:n}),e.jsx(g,{className:s.button,surface:"primary",type:"button",onClick:p,size:"x-small",children:e.jsx("span",{children:m})})]});t.__docgenInfo={description:"",methods:[],displayName:"CampaignMessage",props:{message:{required:!0,tsType:{name:"string"},description:""},ctaText:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"IIcon"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const b={title:"Design System/Atoms/CampaignMessage",component:t},y={render:n=>e.jsx(t,{...n})},a={...y,args:{message:"Du har inte upplevt kraven för kampanjen",ctaText:"Lägg till produkter",onClick:()=>alert("clicked"),icon:{icon:"icon-alert-circle",color:"success"}}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...CampaignMessageStoryTemplate,
  args: {
    message: 'Du har inte upplevt kraven för kampanjen',
    ctaText: 'Lägg till produkter',
    onClick: () => alert('clicked'),
    icon: ({
      icon: 'icon-alert-circle',
      color: 'success'
    } as IIcon)
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const T=["CampaignMessageStory"];export{a as CampaignMessageStory,T as __namedExportsOrder,b as default};

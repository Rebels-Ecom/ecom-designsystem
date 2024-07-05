import{B as g}from"./button-ae86c7d5.js";import{I as l}from"./icon-e3522fc5.js";import{j as e}from"./jsx-runtime-03333307.js";import"./index-09749a66.js";import"./button.module-16a60bae.js";import"./loader-5c06d14e.js";const d="_campaignMessage_409vb_1",u="_icon_409vb_13",_="_message_409vb_17",y="_button_409vb_32",s={campaignMessage:d,icon:u,message:_,button:y},t=({message:n,ctaText:m,icon:r,onClick:p})=>e.jsxs("div",{className:s.campaignMessage,children:[r&&e.jsx(l,{...r,className:s.icon}),e.jsx("span",{className:s.message,children:n}),e.jsx(g,{className:s.button,surface:"primary",type:"button",onClick:p,children:e.jsx("span",{children:m})})]});t.__docgenInfo={description:"",methods:[],displayName:"CampaignMessage",props:{message:{required:!0,tsType:{name:"string"},description:""},ctaText:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"IIcon"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const b={title:"Design System/Atoms/CampaignMessage",component:t},x={render:n=>e.jsx(t,{...n})},a={...x,args:{message:"Du har inte upplevt kraven för kampanjen",ctaText:"Lägg till produkter",onClick:()=>alert("clicked"),icon:{icon:"icon-alert-circle"}}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...CampaignMessageStoryTemplate,
  args: {
    message: 'Du har inte upplevt kraven för kampanjen',
    ctaText: 'Lägg till produkter',
    onClick: () => alert('clicked'),
    icon: ({
      icon: 'icon-alert-circle'
    } as IIcon)
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const T=["CampaignMessageStory"];export{a as CampaignMessageStory,T as __namedExportsOrder,b as default};

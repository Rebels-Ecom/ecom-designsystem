import{B as l}from"./button-97f3af74.js";import{I as g}from"./icon-5fefd509.js";import{a as u,j as e}from"./jsx-runtime-a3a6c0b8.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./button.module-16a60bae.js";import"./loader-81f0d221.js";const d="_campaignMessage_409vb_1",_="_icon_409vb_13",y="_message_409vb_17",f="_button_409vb_32",s={campaignMessage:d,icon:_,message:y,button:f},t=({message:a,ctaText:m,icon:r,onClick:p})=>u("div",{className:s.campaignMessage,children:[r&&e(g,{...r,className:s.icon}),e("span",{className:s.message,children:a}),e(l,{className:s.button,surface:"primary",type:"button",onClick:p,children:e("span",{children:m})})]});try{t.displayName="CampaignMessage",t.__docgenInfo={description:"",displayName:"CampaignMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},ctaText:{defaultValue:null,description:"",name:"ctaText",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const N={title:"Design System/Atoms/CampaignMessage",component:t},k={render:a=>e(t,{...a})},n={...k,args:{message:"Du har inte upplevt kraven för kampanjen",ctaText:"Lägg till produkter",onClick:()=>alert("clicked"),icon:{icon:"icon-alert-circle"}}};var o,i,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...CampaignMessageStoryTemplate,
  args: {
    message: 'Du har inte upplevt kraven för kampanjen',
    ctaText: 'Lägg till produkter',
    onClick: () => alert('clicked'),
    icon: ({
      icon: 'icon-alert-circle'
    } as IIcon)
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const S=["CampaignMessageStory"];export{n as CampaignMessageStory,S as __namedExportsOrder,N as default};

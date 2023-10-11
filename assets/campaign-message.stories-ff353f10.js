import{B as l}from"./button-314e4000.js";import{I as g}from"./icon-0e1526c5.js";import{j as u,a as e}from"./jsx-runtime-76c5c2e2.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./button.module-42bc270d.js";const d="_campaignMessage_409vb_1",_="_icon_409vb_13",y="_message_409vb_17",f="_button_409vb_32",s={campaignMessage:d,icon:_,message:y,button:f},t=({message:a,ctaText:m,icon:r,onClick:p})=>u("div",{className:s.campaignMessage,children:[r&&e(g,{...r,className:s.icon}),e("span",{className:s.message,children:a}),e(l,{className:s.button,surface:"primary",type:"button",onClick:p,children:e("span",{children:m})})]});try{t.displayName="CampaignMessage",t.__docgenInfo={description:"",displayName:"CampaignMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},ctaText:{defaultValue:null,description:"",name:"ctaText",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const N={title:"Design System/Atoms/CampaignMessage",component:t},k={render:a=>e(t,{...a})},n={...k,args:{message:"Du har inte upplevt kraven för kampanjen",ctaText:"Lägg till produkter",onClick:()=>alert("clicked"),icon:{icon:"icon-alert-circle"}}};var o,i,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
//# sourceMappingURL=campaign-message.stories-ff353f10.js.map

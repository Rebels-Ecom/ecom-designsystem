import{R as S}from"./index-6f814c40.js";import{I as x}from"./icon-af819d0c.js";import{I as z}from"./icon-button-e655845d.js";import{c as I}from"./index-74f03c09.js";import{a as t,j as w}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./ui-link-1bd4bf5e.js";import"./motion-354a1bac.js";const v="_alertMessage_x2zza_1",h="_contentWrapper_x2zza_7",O="_info_x2zza_18",W="_warning_x2zza_22",T="_error_x2zza_26",i={alertMessage:v,contentWrapper:h,info:O,warning:W,error:T};function C(e){switch(e){case"info":return"icon-info";case"warning":return"icon-alert-circle";case"error":return"icon-alert-circle";default:return"icon-info"}}function o({children:e,type:r,isOpen:c,onClose:A}){return c?t("div",{className:I(i.alertMessage,i[r]),children:w("div",{className:i.contentWrapper,children:[r&&t(x,{icon:C(r)}),t("span",{children:e}),t(z,{type:"button",onClick:A,icon:"icon-x",size:"large",isTransparent:!0,noBorder:!0})]})}):null}try{o.displayName="AlertMessage",o.__docgenInfo={description:"",displayName:"AlertMessage",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const k={title:"Design System/Atoms/AlertMessage",component:o},l={render:({...e})=>{const[r,c]=S.useState(!0);return t(o,{isOpen:r,onClose:()=>c(!r),...e,children:"Alert message here..."})}},s={...l,args:{type:"info"}},a={...l,args:{type:"warning"}},n={...l,args:{type:"error"}};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'info'
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,d,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'warning'
  }
}`,...(_=(d=a.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};var y,f,M;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'error'
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};const D=["AlertMessageStory_Info","AlertMessageStory_Warning","AlertMessageStory_Error"];export{n as AlertMessageStory_Error,s as AlertMessageStory_Info,a as AlertMessageStory_Warning,D as __namedExportsOrder,k as default};
//# sourceMappingURL=alert-message.stories-45fa328e.js.map

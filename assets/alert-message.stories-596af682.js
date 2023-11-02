import{R as w}from"./index-6f814c40.js";import{I as p}from"./icon-button-c17d8174.js";import{C as v}from"./content-wrapper-19d15755.js";import{c as I}from"./index-74f03c09.js";import{a as e,j as b}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./ui-link-1bd4bf5e.js";import"./icon-af819d0c.js";import"./motion-354a1bac.js";const x="_alertMessage_1f44f_1",C="_wrapper_1f44f_7",h="_info_1f44f_14",N="_warning_1f44f_19",O="_error_1f44f_24",T="_invisibleSpacerItem_1f44f_29",s={alertMessage:x,wrapper:C,info:h,warning:N,error:O,invisibleSpacerItem:T,"info-icon":"_info-icon_1f44f_34","warning-icon":"_warning-icon_1f44f_40","error-icon":"_error-icon_1f44f_46"};function i({children:t,type:r,isOpen:l,onClose:A}){return l?e("div",{className:I(s.alertMessage,s[r]),children:e(v,{children:b("div",{className:s.wrapper,children:[e(p,{className:s.invisibleSpacerItem,type:"button",icon:"icon-x",size:"small",onClick:()=>{}}),e("span",{children:t}),e(p,{className:s[`${r}-icon`],type:"button",onClick:A,icon:"icon-x",size:"small",round:!0,noBorder:!0})]})})}):null}try{i.displayName="AlertMessage",i.__docgenInfo={description:"",displayName:"AlertMessage",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const D={title:"Design System/Atoms/AlertMessage",component:i},c={render:({...t})=>{const[r,l]=w.useState(!0);return e(i,{isOpen:r,onClose:()=>l(!r),...t,children:"Alert message here..."})}},a={...c,args:{type:"info"}},n={...c,args:{type:"warning"}},o={...c,args:{type:"error"}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'info'
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var _,f,d;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'warning'
  }
}`,...(d=(f=n.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var y,M,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'error'
  }
}`,...(S=(M=o.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const $=["AlertMessageStory_Info","AlertMessageStory_Warning","AlertMessageStory_Error"];export{o as AlertMessageStory_Error,a as AlertMessageStory_Info,n as AlertMessageStory_Warning,$ as __namedExportsOrder,D as default};
//# sourceMappingURL=alert-message.stories-596af682.js.map

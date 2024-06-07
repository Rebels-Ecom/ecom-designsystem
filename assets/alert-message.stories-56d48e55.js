import{j as e,a as w,R as v}from"./jsx-runtime-a3a6c0b8.js";import{I as p}from"./icon-button-9255179d.js";import{C as I}from"./content-wrapper-c985da24.js";import{c as C}from"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./ui-link-13fe156c.js";import"./icon-5fefd509.js";import"./motion-54668070.js";const b="_alertMessage_1f44f_1",x="_wrapper_1f44f_7",h="_info_1f44f_14",N="_warning_1f44f_19",O="_error_1f44f_24",T="_invisibleSpacerItem_1f44f_29",s={alertMessage:b,wrapper:x,info:h,warning:N,error:O,invisibleSpacerItem:T,"info-icon":"_info-icon_1f44f_34","warning-icon":"_warning-icon_1f44f_40","error-icon":"_error-icon_1f44f_46"};function i({children:a,type:r,isOpen:l,onClose:A}){return l?e("div",{className:C(s.alertMessage,s[r]),children:e(I,{children:w("div",{className:s.wrapper,children:[e(p,{className:s.invisibleSpacerItem,type:"button",icon:"icon-x",size:"small",onClick:()=>{}}),e("span",{children:a}),e(p,{className:s[`${r}-icon`],type:"button",onClick:A,icon:"icon-x",size:"small",round:!0,noBorder:!0,name:"Close alert message"})]})})}):null}try{i.displayName="AlertMessage",i.__docgenInfo={description:"",displayName:"AlertMessage",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const R={title:"Design System/Atoms/AlertMessage",component:i},c={render:({...a})=>{const[r,l]=v.useState(!0);return e(i,{isOpen:r,onClose:()=>l(!r),...a,children:"Alert message here..."})}},n={...c,args:{type:"info"}},t={...c,args:{type:"warning"}},o={...c,args:{type:"error"}};var m,g,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'info'
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var _,f,d;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'warning'
  }
}`,...(d=(f=t.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var y,M,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'error'
  }
}`,...(S=(M=o.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const D=["AlertMessageStory_Info","AlertMessageStory_Warning","AlertMessageStory_Error"];export{o as AlertMessageStory_Error,n as AlertMessageStory_Info,t as AlertMessageStory_Warning,D as __namedExportsOrder,R as default};

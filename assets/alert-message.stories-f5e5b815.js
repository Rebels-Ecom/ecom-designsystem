import{j as e,R as w}from"./jsx-runtime-03333307.js";import{I as l}from"./icon-button-876cd016.js";import{C as x}from"./content-wrapper-adfa8526.js";import{c as v}from"./index-09749a66.js";import"./ui-link-9ccf406a.js";import"./icon-cf6ebd85.js";import"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";const I="_alertMessage_1f44f_1",j="_wrapper_1f44f_7",T="_info_1f44f_14",b="_warning_1f44f_19",h="_error_1f44f_24",C="_invisibleSpacerItem_1f44f_29",s={alertMessage:I,wrapper:j,info:T,warning:b,error:h,invisibleSpacerItem:C,"info-icon":"_info-icon_1f44f_34","warning-icon":"_warning-icon_1f44f_40","error-icon":"_error-icon_1f44f_46"};function c({children:o,type:r,isOpen:i,onClose:A}){return i?e.jsx("div",{className:v(s.alertMessage,s[r]),children:e.jsx(x,{children:e.jsxs("div",{className:s.wrapper,children:[e.jsx(l,{className:s.invisibleSpacerItem,type:"button",icon:"icon-x",size:"small",onClick:()=>{}}),e.jsx("span",{children:o}),e.jsx(l,{className:s[`${r}-icon`],type:"button",onClick:A,icon:"icon-x",size:"small",round:!0,noBorder:!0,name:"Close alert message"})]})})}):null}c.__docgenInfo={description:"",methods:[],displayName:"AlertMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!0,tsType:{name:"union",raw:"'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const B={title:"Design System/Atoms/AlertMessage",component:c},p={render:({...o})=>{const[r,i]=w.useState(!0);return e.jsx(c,{isOpen:r,onClose:()=>i(!r),...o,children:"Alert message here..."})}},n={...p,args:{type:"info"}},t={...p,args:{type:"warning"}},a={...p,args:{type:"error"}};var m,g,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'info'
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,f,_;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'warning'
  }
}`,...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var y,M,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...AlertMessageStoryTemplate,
  args: {
    type: 'error'
  }
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const D=["AlertMessageStory_Info","AlertMessageStory_Warning","AlertMessageStory_Error"];export{a as AlertMessageStory_Error,n as AlertMessageStory_Info,t as AlertMessageStory_Warning,D as __namedExportsOrder,B as default};

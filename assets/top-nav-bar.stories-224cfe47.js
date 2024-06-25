import{T as A}from"./top-nav-bar-5c0014a9.js";import{U as t}from"./ui-date-picker.stories-44cde4f2.js";import{j as E}from"./jsx-runtime-03333307.js";import"./icon-e3522fc5.js";import"./index-09749a66.js";import"./below-c0fccb92.js";import"./react-responsive-c4f2314e.js";import"./content-wrapper-adfa8526.js";import"./isNativeReflectConstruct-fe36982f.js";import"./index-821951ec.js";import"./button-1a287b34.js";import"./button.module-16a60bae.js";import"./loader-5c06d14e.js";import"./useOnClickOutside-9d2c35bb.js";const z={title:"Design System/Molecules/Top Nav Bar",component:A},a={render:({..._})=>{function y(){console.log("Navigate to login page...")}const B=L=>{console.log(`Trigger set delivery day - ${L.toISOString().split("T")[0]}`)};return E.jsx(A,{..._,onClick:y,onSelectDate:B})}},e={links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"http://spendrups.se/kund/",icon:"icon-plus-circle",children:"Bli kund",isExternal:!0},{href:"/login",icon:"icon-user",children:"Logga in",isExternal:!1}],linkComponent:"a"},i="Jon Johnsson",I={userLoggedIn:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},U={userLoggedIn:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},J={userLoggedIn:!0,hasActiveUser:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},r={...a,args:{...e}},n={...a,args:{...I}},o={...a,args:{...U}},s={...a,args:{...J}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  links: ([{
    href: '/kontakta-oss',
    icon: 'icon-mail',
    children: 'Kontakta oss',
    isExternal: false
  }, {
    isTelephoneLink: true,
    href: '0771-494910',
    icon: 'icon-phone',
    children: '0771-494910',
    isExternal: true
  }, {
    href: 'http://spendrups.se/kund/',
    icon: 'icon-plus-circle',
    children: 'Bli kund',
    isExternal: true
  }, {
    href: '/login',
    icon: 'icon-user',
    children: 'Logga in',
    isExternal: false
  }] as TTopNavLinks),
  linkComponent: 'a'
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,h,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgsLoggedIn
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,T,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var f,x,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin_HasActiveUser
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const F=["topNavArgs","TopNavBarStory_Guest_User","TopNavBarStory_Logged_In_User","TopNavBarStory_Admin","TopNavBarStory_AdminHasActiveUser"];export{o as TopNavBarStory_Admin,s as TopNavBarStory_AdminHasActiveUser,r as TopNavBarStory_Guest_User,n as TopNavBarStory_Logged_In_User,F as __namedExportsOrder,z as default,e as topNavArgs};

import{T as A}from"./top-nav-bar-ebc15d7d.js";import{U as t}from"./ui-date-picker.stories-f7bccbec.js";import{j as L}from"./jsx-runtime-a3a6c0b8.js";import"./icon-5fefd509.js";import"./index-a587463d.js";import"./_commonjsHelpers-de833af9.js";import"./below-e3c1f628.js";import"./content-wrapper-c985da24.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-79d56f34.js";import"./button-369dade1.js";import"./button.module-16a60bae.js";import"./loader-72deb8c4.js";import"./useOnClickOutside-338168d6.js";const F={title:"Design System/Molecules/Top Nav Bar",component:A},a={render:({..._})=>{function y(){console.log("Navigate to login page...")}return L(A,{..._,onClick:y,onSelectDate:B=>{console.log(`Trigger set delivery day - ${B.toISOString().split("T")[0]}`)}})}},e={links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"http://spendrups.se/kund/",icon:"icon-plus-circle",children:"Bli kund",isExternal:!0},{href:"/login",icon:"icon-user",children:"Logga in",isExternal:!1}],linkComponent:"a"},i="Jon Johnsson",E={userLoggedIn:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},I={userLoggedIn:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},U={userLoggedIn:!0,hasActiveUser:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},r={...a,args:{...e}},n={...a,args:{...E}},o={...a,args:{...I}},s={...a,args:{...U}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var f,S,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin_HasActiveUser
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const Q=["topNavArgs","TopNavBarStory_Guest_User","TopNavBarStory_Logged_In_User","TopNavBarStory_Admin","TopNavBarStory_AdminHasActiveUser"];export{o as TopNavBarStory_Admin,s as TopNavBarStory_AdminHasActiveUser,r as TopNavBarStory_Guest_User,n as TopNavBarStory_Logged_In_User,Q as __namedExportsOrder,F as default,e as topNavArgs};
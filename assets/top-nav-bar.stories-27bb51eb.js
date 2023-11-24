import{T as x}from"./top-nav-bar-0b3dd2c2.js";import{U as t}from"./ui-date-picker.stories-cf211ca6.js";import{a as L}from"./jsx-runtime-76c5c2e2.js";import"./icon-db71b6f0.js";import"./index-74f03c09.js";import"./below-25cbe62a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6f814c40.js";import"./content-wrapper-19d15755.js";import"./isNativeReflectConstruct-0525dbfe.js";import"./index-6de6b113.js";import"./button-2f92d37b.js";import"./button.module-3bdf7fd3.js";import"./loader-ce89f5e5.js";const F={title:"Design System/Molecules/Top Nav Bar",component:x},a={render:({..._})=>{function y(){console.log("Navigate to login page...")}return L(x,{..._,onClick:y,onSelectDate:B=>{console.log(`Trigger set delivery day - ${B.toISOString().split("T")[0]}`)}})}},e={links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"http://spendrups.se/kund/",icon:"icon-plus-circle",children:"Bli kund",isExternal:!0},{href:"/login",icon:"icon-user",children:"Logga in",isExternal:!1}],linkComponent:"a"},i="Jon Johnsson",E={userLoggedIn:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},I={userLoggedIn:!0,isAdmin:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},U={userLoggedIn:!0,isAdmin:!0,hasActiveUser:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:t.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${i}`,isExternal:!1}],linkComponent:"a"},r={...a,args:{...e}},n={...a,args:{...E}},o={...a,args:{...I}},s={...a,args:{...U}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgsLoggedIn
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,T,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var f,S,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin_HasActiveUser
  }
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const Q=["topNavArgs","TopNavBarStory_Guest_User","TopNavBarStory_Logged_In_User","TopNavBarStory_Admin","TopNavBarStory_AdminHasActiveUser"];export{o as TopNavBarStory_Admin,s as TopNavBarStory_AdminHasActiveUser,r as TopNavBarStory_Guest_User,n as TopNavBarStory_Logged_In_User,Q as __namedExportsOrder,F as default,e as topNavArgs};
//# sourceMappingURL=top-nav-bar.stories-27bb51eb.js.map

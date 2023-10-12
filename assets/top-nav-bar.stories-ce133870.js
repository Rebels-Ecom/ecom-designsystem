import{I as _}from"./icon-0e1526c5.js";import{U as A,a as b}from"./ui-date-picker.stories-1d5edca6.js";import{B as S,A as I}from"./below-e3aa399e.js";import{c as o}from"./index-74f03c09.js";import{a,j as s,F as c}from"./jsx-runtime-76c5c2e2.js";import{C as z}from"./content-wrapper-854859bc.js";const Q="_topNavBar_wg50s_1",X="_adminTopNavBar_wg50s_5",Y="_userTopNavBar_wg50s_9",Z="_inner_wg50s_13",ee="_navLinksWrapper_wg50s_19",ne="_navLink_wg50s_19",ae="_topNavLink_wg50s_31",re="_active_wg50s_45",oe="_navIcon_wg50s_59",se="_btn_wg50s_63",ie="_btnText_wg50s_72",te="_btnCalendar_wg50s_79",e={topNavBar:Q,adminTopNavBar:X,userTopNavBar:Y,inner:Z,navLinksWrapper:ee,navLink:ne,topNavLink:ae,active:re,navIcon:oe,btn:se,btnText:ie,btnCalendar:te},k=({links:r,userLoggedIn:v=!1,isAdmin:x=!1,hasActiveUser:L=!1,btnIcon:m,btnText:h,onClick:g,datePicker:N,onSelectDate:f,linkComponent:F})=>{function y(n){return a(c,{children:n.isExternal?s("a",{href:n.isTelephoneLink?`tel:${n.href}`:n.isMailLink?`mailto:${n.href}`:n.href,className:e.topNavLink,target:"_blank",children:[n.icon&&a(_,{className:e.navIcon,icon:n.icon}),a("span",{className:o("bodyS",e.topNavText),children:n.children})]}):s(F,{to:n.href,className:e.topNavLink,title:n.children,children:[n.icon&&a(_,{icon:n.icon,className:e.navIcon}),a("span",{className:o("bodyS",e.topNavText),children:n.children})]})})}if(!Array.isArray(r)||r.length<=0)return null;const K=r.slice(0,Math.ceil(r.length/2)),R=r.slice(-Math.floor(r.length/2));return a("div",{className:o(e.topNavBar,L?e.adminTopNavBar:e.userTopNavBar),children:a(z,{children:a("div",{className:e.inner,children:x?s("ul",{className:o(e.navLinksWrapper,e.navLinksRight),children:[r.map((n,i)=>a("li",{className:e.navLink,children:y(n)},`${n.href}-${i}`)),a(S,{breakpoint:"lg",children:n=>n&&a(c,{children:N&&f&&a(A,{...N,onDateSelected:f,className:e.btnCalendar})})}),v&&h&&g&&s("button",{className:o(e.topNavLink,e.btn),onClick:g,children:[" ",m&&a(_,{icon:m,className:e.navIcon}),a("span",{className:e.btnText,children:h})]})]}):s(c,{children:[a(I,{breakpoint:"lg",children:n=>n&&a("ul",{className:o(e.navLinksWrapper,e.navLinksLeft),children:K.map((i,G)=>a("li",{className:e.navLink,children:y(i)},`${i.href}-${G}`))})}),s("ul",{className:o(e.navLinksWrapper,e.navLinksRight),children:[R.map((n,i)=>a("li",{className:e.navLink,children:y(n)},`${n.href}-${i}`)),a(S,{breakpoint:"lg",children:n=>n&&a(c,{children:N&&f&&a(A,{...N,onDateSelected:f,className:e.btnCalendar})})}),a(I,{breakpoint:"lg",children:n=>n&&a(c,{children:v&&h&&g&&s("button",{className:o(e.topNavLink,e.btn),onClick:g,children:[" ",m&&a(_,{icon:m,className:e.navIcon}),a("span",{className:e.btnText,children:h})]})})})]})]})})})})};try{k.displayName="TopNavBar",k.__docgenInfo={description:"",displayName:"TopNavBar",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"TTopNavLinks"}},userLoggedIn:{defaultValue:{value:"false"},description:"",name:"userLoggedIn",required:!1,type:{name:"boolean"}},isAdmin:{defaultValue:{value:"false"},description:"",name:"isAdmin",required:!1,type:{name:"boolean"}},hasActiveUser:{defaultValue:{value:"false"},description:"",name:"hasActiveUser",required:!1,type:{name:"boolean"}},btnIcon:{defaultValue:null,description:"",name:"btnIcon",required:!1,type:{name:"enum",value:[{value:'"icon-alert-circle"'},{value:'"icon-bell"'},{value:'"icon-arrow-right"'},{value:'"icon-mail"'},{value:'"icon-map-pin"'},{value:'"icon-menu"'},{value:'"icon-x"'},{value:'"icon-phone"'},{value:'"icon-refresh-cw"'},{value:'"icon-search"'},{value:'"icon-x-circle"'},{value:'"icon-plus-circle"'},{value:'"icon-plus"'},{value:'"icon-chevron-up"'},{value:'"icon-chevron-down"'},{value:'"icon-chevron-left"'},{value:'"icon-chevron-right"'},{value:'"icon-chevrons-left"'},{value:'"icon-chevrons-right"'},{value:'"icon-layers"'},{value:'"icon-check"'},{value:'"icon-check-circle"'},{value:'"icon-user"'},{value:'"icon-heart"'},{value:'"icon-shopping-cart"'},{value:'"icon-award"'},{value:'"icon-package"'},{value:'"icon-users"'},{value:'"icon-facebook"'},{value:'"icon-instagram"'},{value:'"icon-linkedin"'},{value:'"icon-clipboard"'},{value:'"icon-download"'},{value:'"icon-calendar"'},{value:'"icon-settings"'},{value:'"icon-info"'},{value:'"icon-play"'},{value:'"icon-archive"'},{value:'"icon-file"'},{value:'"icon-file-text"'},{value:'"icon-message-circle"'},{value:'"icon-share"'},{value:'"icon-arrow-down-circle"'},{value:'"icon-trash"'},{value:'"icon-trash-2"'},{value:'"icon-edit"'}]}},btnText:{defaultValue:null,description:"",name:"btnText",required:!1,type:{name:"string"}},datePicker:{defaultValue:null,description:"",name:"datePicker",required:!1,type:{name:"IUiDatePicker"}},onSelectDate:{defaultValue:null,description:"",name:"onSelectDate",required:!1,type:{name:"CallableFunction"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}}}}}catch{}const ce={title:"Design System/Molecules/Top Nav Bar",component:k},T={render:({...r})=>{function v(){console.log("Navigate to login page...")}return a(k,{...r,onClick:v,onSelectDate:L=>{console.log(`Trigger set delivery day - ${L.toISOString().split("T")[0]}`)}})}},t={links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"http://spendrups.se/kund/",icon:"icon-plus-circle",children:"Bli kund",isExternal:!0},{href:"/login",icon:"icon-user",children:"Logga in",isExternal:!1}],linkComponent:"a"},B="Jon Johnsson",le={userLoggedIn:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:b.args,links:[{href:"/kontakta-oss",icon:"icon-mail",children:"Kontakta oss",isExternal:!1},{isTelephoneLink:!0,href:"0771-494910",icon:"icon-phone",children:"0771-494910",isExternal:!0},{href:"#",icon:"icon-users",children:`Inloggad som ${B}`,isExternal:!1}],linkComponent:"a"},ue={userLoggedIn:!0,isAdmin:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:b.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${B}`,isExternal:!1}],linkComponent:"a"},pe={userLoggedIn:!0,isAdmin:!0,hasActiveUser:!0,userName:"Jon Johnson",btnIcon:"icon-x-circle",btnText:"Logga ut",datePicker:b.args,links:[{href:"#",icon:"icon-users",children:`Inloggad som ${B}`,isExternal:!1}],linkComponent:"a"},l={...T,args:{...t}},u={...T,args:{...le}},p={...T,args:{...ue}},d={...T,args:{...pe}};var w,C,E;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var U,$,q;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs
  }
}`,...(q=($=l.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var V,D,J;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgsLoggedIn
  }
}`,...(J=(D=u.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var M,W,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin
  }
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var P,j,O;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin_HasActiveUser
  }
}`,...(O=(j=d.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const de=["topNavArgs","TopNavBarStory_Guest_User","TopNavBarStory_Logged_In_User","TopNavBarStory_Admin","TopNavBarStory_AdminHasActiveUser"],_e=Object.freeze(Object.defineProperty({__proto__:null,TopNavBarStory_Admin:p,TopNavBarStory_AdminHasActiveUser:d,TopNavBarStory_Guest_User:l,TopNavBarStory_Logged_In_User:u,__namedExportsOrder:de,default:ce,topNavArgs:t},Symbol.toStringTag,{value:"Module"}));export{l as T,k as a,_e as t};
//# sourceMappingURL=top-nav-bar.stories-ce133870.js.map

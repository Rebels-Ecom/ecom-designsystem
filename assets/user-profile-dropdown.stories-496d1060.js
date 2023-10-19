import{r as y}from"./index-6f814c40.js";import{u as g}from"./useOnClickOutside-47d3035a.js";import{j as O,a as r}from"./jsx-runtime-76c5c2e2.js";import{I as P}from"./icon-button-da898f55.js";import{D as w,a as D}from"./dropdown-list.stories-817c2300.js";import{U as S,a as _}from"./user-info-summary.stories-7b9bc87c.js";const I="_userProfileDropdown_ktynu_1",h="_button_ktynu_11",C="_dropdown_ktynu_22",i={userProfileDropdown:I,button:h,dropdown:C};function a({children:o,isOpen:e,onClick:t}){const d=y.useRef(null);return g({ref:d,onClose:()=>e?t():void 0}),O("div",{className:i.userProfileDropdown,ref:d,children:[r(P,{type:"button",icon:"icon-user",onClick:t,size:"medium"}),e&&r("div",{className:i.dropdown,children:o})]})}try{a.displayName="UserProfileDropdownControlled",a.__docgenInfo={description:"",displayName:"UserProfileDropdownControlled",props:{isDropdownOpen:{defaultValue:null,description:"",name:"isDropdownOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const b={title:"Design System/Molecules/UserProfileDropdown",component:a},U={render:({...o})=>{const[e,t]=y.useState(o.isDropdownOpen??!1);return r("div",{style:{margin:"auto",display:"flex",justifyContent:"center"},children:r(a,{isOpen:e,onClick:()=>t(!e),children:o.children})})}},n={...U,args:{isDropdownOpen:!1,children:[r(S,{..._.args}),r(w,{...D.args})]}},s={...U,args:{isDropdownOpen:!0,children:[r(S,{..._.args}),r(w,{...D.args})]}};var p,l,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...UserProfileDropdownStoryTemplate,
  args: {
    isDropdownOpen: false,
    children: [<UserInfoSummary {...UserInfoSummaryStory.args}></UserInfoSummary>, <DropdownList {...DropdownListStory.args}></DropdownList>]
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,m,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...UserProfileDropdownStoryTemplate,
  args: {
    isDropdownOpen: true,
    children: [<UserInfoSummary {...UserInfoSummaryStory.args}></UserInfoSummary>, <DropdownList {...DropdownListStory.args}></DropdownList>]
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const L=["UserProfileDropdownStory","UserProfileDropdownStory_Open"],E=Object.freeze(Object.defineProperty({__proto__:null,UserProfileDropdownStory:n,UserProfileDropdownStory_Open:s,__namedExportsOrder:L,default:b},Symbol.toStringTag,{value:"Module"}));export{n as U,i as s,E as u};
//# sourceMappingURL=user-profile-dropdown.stories-496d1060.js.map

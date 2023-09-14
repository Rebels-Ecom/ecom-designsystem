import{r as p}from"./index-6f814c40.js";import{u as O}from"./useOnClickOutside-47d3035a.js";import{B as h}from"./button-29550c01.js";import{j as b,a as r}from"./jsx-runtime-76c5c2e2.js";import{D,a as S}from"./dropdown-list.stories-817c2300.js";import{U as _,a as g}from"./user-info-summary.stories-7b9bc87c.js";const I="_userProfileDropdown_1e039_1",L="_button_1e039_11",j="_dropdown_1e039_21",i={userProfileDropdown:I,button:L,dropdown:j};function n({children:o,isDropdownOpen:d}){const[t,a]=p.useState(d||!1),l=p.useRef(null),P=p.useCallback(()=>{!t&&a(!1)},[a]);return O({ref:l,onClose:P}),b("div",{className:i.userProfileDropdown,ref:l,children:[r(h,{className:i.button,type:"button",surface:"primary",rounded:!0,iconRight:{icon:"icon-settings"},onClick:()=>a(!t),children:"Mitt spendrups"}),t&&r("div",{className:i.dropdown,children:o})]})}try{n.displayName="UserProfileDropdown",n.__docgenInfo={description:"",displayName:"UserProfileDropdown",props:{isDropdownOpen:{defaultValue:null,description:"",name:"isDropdownOpen",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Design System/Molecules/UserProfileDropdown",component:n},U={render:({...o})=>r("div",{style:{margin:"auto",display:"flex",justifyContent:"center"},children:r(n,{isDropdownOpen:o.isDropdownOpen,children:o.children})})},e={...U,args:{isDropdownOpen:!1,children:[r(_,{...g.args}),r(D,{...S.args})]}},s={...U,args:{isDropdownOpen:!0,children:[r(_,{...g.args}),r(D,{...S.args})]}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...UserProfileDropdownStoryTemplate,
  args: {
    isDropdownOpen: false,
    children: [<UserInfoSummary {...UserInfoSummaryStory.args}></UserInfoSummary>, <DropdownList {...DropdownListStory.args}></DropdownList>]
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,w,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...UserProfileDropdownStoryTemplate,
  args: {
    isDropdownOpen: true,
    children: [<UserInfoSummary {...UserInfoSummaryStory.args}></UserInfoSummary>, <DropdownList {...DropdownListStory.args}></DropdownList>]
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const C=["UserProfileDropdownStory","UserProfileDropdownStory_Open"],B=Object.freeze(Object.defineProperty({__proto__:null,UserProfileDropdownStory:e,UserProfileDropdownStory_Open:s,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{n as U,e as a,B as u};
//# sourceMappingURL=user-profile-dropdown.stories-fdbce72e.js.map

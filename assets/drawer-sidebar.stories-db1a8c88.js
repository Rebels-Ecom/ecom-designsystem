import{r as l,a as c,j as t}from"./jsx-runtime-a3a6c0b8.js";import{D as n}from"./drawer-sidebar-d3b36277.js";import"./_commonjsHelpers-de833af9.js";import"./index-a587463d.js";import"./index-4058f88b.js";import"./motion-54668070.js";import"./icon-button-9255179d.js";import"./ui-link-13fe156c.js";import"./icon-5fefd509.js";const I={title:"Design System/Molecules/DrawerSidebar",component:n},m={render:({...s})=>{const[d,r]=l.useState(!1);function p(){r(!0)}function S(){r(!1)}return c("div",{style:{margin:"auto",position:"relative"},children:[t("button",{style:{position:"absolute",top:"4rem"},onClick:p,children:"Open sidebar"}),t(n,{isOpen:d,children:s.children,onClose:S})]})}},e={...m,args:{children:"HERE COMES SOME STUFF SLIDING IN..."}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DrawerSidebarStoryTemplate,
  args: {
    children: 'HERE COMES SOME STUFF SLIDING IN...'
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["SlidingSidebarStory"];export{e as SlidingSidebarStory,x as __namedExportsOrder,I as default};

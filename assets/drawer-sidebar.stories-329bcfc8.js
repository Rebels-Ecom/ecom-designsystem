import{r as l,j as r}from"./jsx-runtime-03333307.js";import{D as s}from"./drawer-sidebar-63df5b87.js";import"./index-09749a66.js";import"./index-61679f6b.js";import"./tslib.es6-4d885d63.js";import"./motion-9380e2c6.js";import"./icon-button-4ba5bdac.js";import"./ui-link-94ae867e.js";import"./icon-e3522fc5.js";const g={title:"Design System/Molecules/DrawerSidebar",component:s},m={render:({...n})=>{const[d,t]=l.useState(!1);function p(){t(!0)}function S(){t(!1)}return r.jsxs("div",{style:{margin:"auto",position:"relative"},children:[r.jsx("button",{style:{position:"absolute",top:"4rem"},onClick:p,children:"Open sidebar"}),r.jsx(s,{isOpen:d,children:n.children,onClose:S})]})}},e={...m,args:{children:"HERE COMES SOME STUFF SLIDING IN..."}};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DrawerSidebarStoryTemplate,
  args: {
    children: 'HERE COMES SOME STUFF SLIDING IN...'
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const y=["SlidingSidebarStory"];export{e as SlidingSidebarStory,y as __namedExportsOrder,g as default};
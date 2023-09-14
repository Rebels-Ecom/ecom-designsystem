import{r as i}from"./index-6f814c40.js";import{M as r}from"./menu-button-1902350e.js";import{a as c}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-74f03c09.js";import"./motion-354a1bac.js";const g={title:"Design System/Atoms/MenuButton",component:r,parameters:{controls:{exclude:["onClick"]}}},e={render:a=>{const[n,p]=i.useState(!1);return c(r,{...a,onClick:()=>{console.log(n),p(!n)},isOpen:n})},args:{onClick:()=>{},isOpen:!1}};var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <MenuButton {...args} onClick={() => {
      console.log(isOpen);
      setIsOpen(!isOpen);
    }} isOpen={isOpen} />;
  },
  args: {
    onClick: () => {},
    isOpen: false
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const M=["MenuButtonStory"];export{e as MenuButtonStory,M as __namedExportsOrder,g as default};
//# sourceMappingURL=menu-button.stories-dd1a0b94.js.map

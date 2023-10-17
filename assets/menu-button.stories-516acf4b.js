import{r as l}from"./index-6f814c40.js";import{c as d}from"./index-74f03c09.js";import{a as n,j as m}from"./jsx-runtime-76c5c2e2.js";import{m as _}from"./motion-354a1bac.js";import"./_commonjsHelpers-042e6b4d.js";const g="_menuButton_v4dvx_1",v="_open_v4dvx_11",f="_icon_v4dvx_14",r={menuButton:g,open:v,icon:f},a=e=>n(_.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...e}),s=({isOpen:e,onClick:t})=>n("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":e,onClick:t,className:d(r.menuButton,e&&r.open),children:m("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[n(a,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}},animate:e?"open":"closed"}),n(a,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},animate:e?"open":"closed",transition:{duration:.1}}),n(a,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}},animate:e?"open":"closed"})]})});try{s.displayName="MenuButton",s.__docgenInfo={description:"",displayName:"MenuButton",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const h={title:"Design System/Atoms/MenuButton",component:s,parameters:{controls:{exclude:["onClick"]}}},o={render:e=>{const[t,u]=l.useState(!1);return n(s,{...e,onClick:()=>{console.log(t),u(!t)},isOpen:t})},args:{onClick:()=>{},isOpen:!1}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["MenuButtonStory"];export{o as MenuButtonStory,k as __namedExportsOrder,h as default};
//# sourceMappingURL=menu-button.stories-516acf4b.js.map

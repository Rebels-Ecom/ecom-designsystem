import{j as e,r as d}from"./jsx-runtime-03333307.js";import{c as m}from"./index-09749a66.js";import{m as l}from"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";const x="_menuButton_v4dvx_1",g="_open_v4dvx_11",v="_icon_v4dvx_14",a={menuButton:x,open:g,icon:v},s=n=>e.jsx(l.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...n}),r=({isOpen:n,onClick:t})=>e.jsx("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":n,onClick:t,className:m(a.menuButton,n&&a.open),children:e.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e.jsx(s,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}},animate:n?"open":"closed"}),e.jsx(s,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},animate:n?"open":"closed",transition:{duration:.1}}),e.jsx(s,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}},animate:n?"open":"closed"})]})});r.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const M={title:"Design System/Atoms/MenuButton",component:r,parameters:{controls:{exclude:["onClick"]}}},o={render:n=>{const[t,u]=d.useState(!1);return e.jsx(r,{...n,onClick:()=>{console.log(t),u(!t)},isOpen:t})},args:{onClick:()=>{},isOpen:!1}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const h=["MenuButtonStory"];export{o as MenuButtonStory,h as __namedExportsOrder,M as default};

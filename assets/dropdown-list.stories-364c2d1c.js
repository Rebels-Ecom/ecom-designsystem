import{j as t}from"./jsx-runtime-03333307.js";import{A as m}from"./index-61679f6b.js";import{m as o}from"./motion-9380e2c6.js";const f="_linkList_1y7xc_1",x="_listItem_1y7xc_10",k="_active_1y7xc_26",r={linkList:f,listItem:x,active:k},g={open:{transition:{staggerChildren:.03,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},y={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}},duration:.2},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}};function s({links:i,linkComponent:h}){return t.jsx(m,{children:t.jsx(o.ul,{className:r.linkList,variants:g,exit:"closed",initial:"closed",animate:"open",children:i.map((e,u)=>{var a,l;return t.jsx(o.li,{className:r.listItem,variants:y,children:e.isExternal?t.jsx("a",{href:e.href,target:e.target,title:e.title,className:r.linkItem,children:(a=e.title)==null?void 0:a.toUpperCase()}):t.jsx(h,{field:e,target:e.target,title:e.title,activeClassName:r.active,className:r.linkItem,children:(l=e.title)==null?void 0:l.toUpperCase()})},u)})})})}s.__docgenInfo={description:"",methods:[],displayName:"DropdownList",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"INavigationLink"}],raw:"Array<INavigationLink>"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""}}};const E={title:"Design System/Molecules/DropdownList",component:s},_={render:({...i})=>t.jsx(s,{...i})},n={..._,args:{links:[{href:"/mitt-spendrups",title:"Mitt Spendrups",children:"Mitt Spendrups",isExternal:!0},{href:"/arenden",title:"Ärenden",children:"Ärenden",isExternal:!0},{href:"/inkopslistor",title:"Inköpslistor",children:"Inköpslistor",isExternal:!0},{href:"/behorighetstest",title:"Behörighetstest",children:"Behörighetstest",isExternal:!0},{href:"/bonusbesked",title:"Bonusbesked",children:"Bonusbesked",isExternal:!0},{href:"/fakturor",title:"Fakturor",children:"Fakturor",isExternal:!0},{href:"/ordrar",title:"Ordrar",children:"Ordrar",isExternal:!0},{href:"/skapa-returorder",title:"Skapa returorder",children:"Skapa returorder",isExternal:!0},{href:"/felanmalan",title:"Felanmälan",children:"Felanmälan",isExternal:!0},{href:"/tomgodsorder",title:"Tomgodsorder",children:"Tomgodsorder",isExternal:!0},{href:"/volymrapport",title:"Volymrapport",children:"Volymrapport",isExternal:!0},{href:"/bestall-pdf-faktura",title:"Beställ pdf-faktura",children:"Beställ pdf-faktura",isExternal:!0}],linkComponent:"a"}};var d,p,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DropdownListStoryTemplate,
  args: {
    links: [{
      href: '/mitt-spendrups',
      title: 'Mitt Spendrups',
      children: 'Mitt Spendrups',
      isExternal: true
    }, {
      href: '/arenden',
      title: 'Ärenden',
      children: 'Ärenden',
      isExternal: true
    }, {
      href: '/inkopslistor',
      title: 'Inköpslistor',
      children: 'Inköpslistor',
      isExternal: true
    }, {
      href: '/behorighetstest',
      title: 'Behörighetstest',
      children: 'Behörighetstest',
      isExternal: true
    }, {
      href: '/bonusbesked',
      title: 'Bonusbesked',
      children: 'Bonusbesked',
      isExternal: true
    }, {
      href: '/fakturor',
      title: 'Fakturor',
      children: 'Fakturor',
      isExternal: true
    }, {
      href: '/ordrar',
      title: 'Ordrar',
      children: 'Ordrar',
      isExternal: true
    }, {
      href: '/skapa-returorder',
      title: 'Skapa returorder',
      children: 'Skapa returorder',
      isExternal: true
    }, {
      href: '/felanmalan',
      title: 'Felanmälan',
      children: 'Felanmälan',
      isExternal: true
    }, {
      href: '/tomgodsorder',
      title: 'Tomgodsorder',
      children: 'Tomgodsorder',
      isExternal: true
    }, {
      href: '/volymrapport',
      title: 'Volymrapport',
      children: 'Volymrapport',
      isExternal: true
    }, {
      href: '/bestall-pdf-faktura',
      title: 'Beställ pdf-faktura',
      children: 'Beställ pdf-faktura',
      isExternal: true
    }],
    linkComponent: 'a'
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const S=["DropdownListStory"],I=Object.freeze(Object.defineProperty({__proto__:null,DropdownListStory:n,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{s as D,n as a,I as d};

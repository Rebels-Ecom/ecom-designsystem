import{j as t}from"./jsx-runtime-a3a6c0b8.js";import{A as m}from"./index-4058f88b.js";import{m as o}from"./motion-54668070.js";const f="_linkList_1y7xc_1",k="_listItem_1y7xc_10",x="_active_1y7xc_26",r={linkList:f,listItem:k,active:x},y={open:{transition:{staggerChildren:.03,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},g={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}},duration:.2},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}};function s({links:i,linkComponent:u}){return t(m,{children:t(o.ul,{className:r.linkList,variants:y,exit:"closed",initial:"closed",animate:"open",children:i.map((e,h)=>{var a,l;return t(o.li,{className:r.listItem,variants:g,children:e.isExternal?t("a",{href:e.href,target:e.target,title:e.title,className:r.linkItem,children:(a=e.title)==null?void 0:a.toUpperCase()}):t(u,{field:e,target:e.target,title:e.title,activeClassName:r.active,className:r.linkItem,children:(l=e.title)==null?void 0:l.toUpperCase()})},h)})})})}try{s.displayName="DropdownList",s.__docgenInfo={description:"",displayName:"DropdownList",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"INavigationLink[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}}}}}catch{}const E={title:"Design System/Molecules/DropdownList",component:s},_={render:({...i})=>t(s,{...i})},n={..._,args:{links:[{href:"/mitt-spendrups",title:"Mitt Spendrups",children:"Mitt Spendrups",isExternal:!0},{href:"/arenden",title:"Ärenden",children:"Ärenden",isExternal:!0},{href:"/inkopslistor",title:"Inköpslistor",children:"Inköpslistor",isExternal:!0},{href:"/behorighetstest",title:"Behörighetstest",children:"Behörighetstest",isExternal:!0},{href:"/bonusbesked",title:"Bonusbesked",children:"Bonusbesked",isExternal:!0},{href:"/fakturor",title:"Fakturor",children:"Fakturor",isExternal:!0},{href:"/ordrar",title:"Ordrar",children:"Ordrar",isExternal:!0},{href:"/skapa-returorder",title:"Skapa returorder",children:"Skapa returorder",isExternal:!0},{href:"/felanmalan",title:"Felanmälan",children:"Felanmälan",isExternal:!0},{href:"/tomgodsorder",title:"Tomgodsorder",children:"Tomgodsorder",isExternal:!0},{href:"/volymrapport",title:"Volymrapport",children:"Volymrapport",isExternal:!0},{href:"/bestall-pdf-faktura",title:"Beställ pdf-faktura",children:"Beställ pdf-faktura",isExternal:!0}],linkComponent:"a"}};var d,p,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const S=["DropdownListStory"],B=Object.freeze(Object.defineProperty({__proto__:null,DropdownListStory:n,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{s as D,n as a,B as d};
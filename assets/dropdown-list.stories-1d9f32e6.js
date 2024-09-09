import{j as t}from"./jsx-runtime-03333307.js";const c="_linkList_1ch0d_1",m="_listItem_1ch0d_14",f="_active_1ch0d_30",r={linkList:c,listItem:m,active:f};function i({links:s,linkComponent:h}){return t.jsx("ul",{className:r.linkList,children:s.map((e,u)=>{var l,a;return t.jsx("li",{className:r.listItem,children:e.isExternal?t.jsx("a",{href:e.href,target:e.target,title:e.title,className:r.linkItem,children:(l=e.title)==null?void 0:l.toUpperCase()}):t.jsx(h,{field:e,target:e.target,title:e.title,activeClassName:r.active,className:r.linkItem,children:(a=e.title)==null?void 0:a.toUpperCase()})},u)})})}i.__docgenInfo={description:"",methods:[],displayName:"DropdownList",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"INavigationLink"}],raw:"Array<INavigationLink>"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""}}};const k={title:"Design System/Molecules/DropdownList",component:i},x={render:({...s})=>t.jsx(i,{...s})},n={...x,args:{links:[{href:"/mitt-spendrups",title:"Mitt Spendrups",children:"Mitt Spendrups",isExternal:!0},{href:"/arenden",title:"Ärenden",children:"Ärenden",isExternal:!0},{href:"/inkopslistor",title:"Inköpslistor",children:"Inköpslistor",isExternal:!0},{href:"/behorighetstest",title:"Behörighetstest",children:"Behörighetstest",isExternal:!0},{href:"/bonusbesked",title:"Bonusbesked",children:"Bonusbesked",isExternal:!0},{href:"/fakturor",title:"Fakturor",children:"Fakturor",isExternal:!0},{href:"/ordrar",title:"Ordrar",children:"Ordrar",isExternal:!0},{href:"/skapa-returorder",title:"Skapa returorder",children:"Skapa returorder",isExternal:!0},{href:"/felanmalan",title:"Felanmälan",children:"Felanmälan",isExternal:!0},{href:"/tomgodsorder",title:"Tomgodsorder",children:"Tomgodsorder",isExternal:!0},{href:"/volymrapport",title:"Volymrapport",children:"Volymrapport",isExternal:!0},{href:"/bestall-pdf-faktura",title:"Beställ pdf-faktura",children:"Beställ pdf-faktura",isExternal:!0}],linkComponent:"a"}};var o,d,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const E=["DropdownListStory"],y=Object.freeze(Object.defineProperty({__proto__:null,DropdownListStory:n,__namedExportsOrder:E,default:k},Symbol.toStringTag,{value:"Module"}));export{i as D,n as a,y as d};

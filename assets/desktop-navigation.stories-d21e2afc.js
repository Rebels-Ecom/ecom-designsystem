import{r as s}from"./index-6f814c40.js";import{c as v}from"./index-74f03c09.js";import{a as t,j as m,F as $}from"./jsx-runtime-76c5c2e2.js";import{C as N}from"./content-wrapper-19d15755.js";import{m as a}from"./motion-354a1bac.js";import{I as T}from"./icon-456a804f.js";import{I as E}from"./icon-button-c7c840d1.js";const M="_desktopNavigation_1bfk9_1",P="_topLevel_1bfk9_7",G="_topLevelLinks_1bfk9_12",H="_topLevelLinkList_1bfk9_16",j="_topLevelLinkInner_1bfk9_23",W="_topLevelLinkActive_1bfk9_26",J="_topLevelLink_1bfk9_12",K="_active_1bfk9_51",z="_secondLevel_1bfk9_59",R="_secondLevelInner_1bfk9_68",Q="_endOfList_1bfk9_75",U="_logoWrapper_1bfk9_84",X="_secondLevelLinkList_1bfk9_88",Y="_secondLevelLinkItem_1bfk9_99",Z="_secondLevelLinkActive_1bfk9_103",ee="_secondLevelLink_1bfk9_88",ne="_thirdLevelList_1bfk9_143",ie="_thirdLeveListItem_1bfk9_152",te="_thirdLevelLink_1bfk9_157",oe="_closeButton_1bfk9_168",ae="_iconButton_1bfk9_173",n={desktopNavigation:M,topLevel:P,topLevelLinks:G,topLevelLinkList:H,topLevelLinkInner:j,topLevelLinkActive:W,topLevelLink:J,active:K,secondLevel:z,secondLevelInner:R,endOfList:Q,logoWrapper:U,secondLevelLinkList:X,secondLevelLinkItem:Y,secondLevelLinkActive:Z,secondLevelLink:ee,thirdLevelList:ne,thirdLeveListItem:ie,thirdLevelLink:te,closeButton:oe,iconButton:ae},h=({categories:r,currentSlug:L,initial:de})=>{var I,y;const[i,g]=s.useState(),[u,k]=s.useState(),[C,V]=s.useState(),[w,x]=s.useState("auto"),p=s.useRef(null);s.useEffect(()=>{var o,l;const e=window.innerHeight-(((l=(o=p==null?void 0:p.current)==null?void 0:o.getBoundingClientRect())==null?void 0:l.top)??0);x(e)},[u]),s.useEffect(()=>{const e=document.body;return e&&(i?e.classList.add("no-scroll"):e.classList.remove("no-scroll")),()=>{var o;return(o=e==null?void 0:e.classList)==null?void 0:o.remove("no-scroll")}},[i]);const _=()=>{const e=r.find(o=>!!(L!=null&&L.includes(o.href)));k(e)};return s.useEffect(()=>{_()},[]),t("nav",{className:n.desktopNavigation,children:t(N,{padding:0,children:m(a.div,{className:n.topLevel,onHoverEnd:()=>_(),children:[t("div",{className:n.topLevelLinks,children:m(a.ul,{className:n.topLevelLinkList,children:[r.map((e,o)=>m(a.li,{className:n.topLevelLinkInner,onClick:()=>k(e),onHoverStart:()=>{k(e)},children:[(u==null?void 0:u.name)===e.name&&t(a.div,{className:n.topLevelLinkActive,layoutId:"activeLink",transition:{type:"spring",stiffness:200,damping:20}}),re(e)&&t(a.a,{className:v(n.topLevelLink,{[n.active]:i===e}),href:e.href,target:e.openInNewTab?"_blank":"_self",children:e.name},`${e.name}-${o}`),b(e)&&m(a.button,{className:v(n.topLevelLink,{[n.active]:i===e}),onClick:()=>{(i==null?void 0:i.name)===e.name?g(void 0):g(e)},children:[e.name,t(T,{icon:(i==null?void 0:i.name)===e.name?"icon-chevron-up":"icon-chevron-down"})]},`${e.name}-${o}`)]},`${e.name}-${o}`)),t(a.div,{className:n.closeButton,initial:{scale:0,opacity:0},animate:i?{scale:1,opacity:1}:void 0,exit:{transition:{delay:0}},children:t(E,{className:n.iconButton,icon:"icon-plus",type:"button",onClick:()=>g(void 0)})})]})}),t(a.div,{initial:{height:0},animate:{height:(I=i==null?void 0:i.links)!=null&&I.length?"auto":0},className:n.secondLevel,ref:p,children:t(N,{padding:0,children:m(a.div,{className:n.secondLevelInner,style:{height:`${w}px`},initial:{y:"-100%",opacity:0},animate:(y=i==null?void 0:i.links)!=null&&y.length?{y:"0",opacity:1}:{y:"-100%",opacity:0,transition:{delay:.3}},children:[t(a.ul,{className:n.secondLevelLinkList,children:b(i)?i.links.map((e,o)=>{var l;return t(a.li,{className:n.secondLevelLinkItem,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:m($,{children:[t(a.a,{className:v(n.secondLevelLink,{[n.active]:C===e}),href:e.href,target:e.openInNewTab?"_blank":"_self",onClick:()=>{V(e)},children:e.name}),t("ul",{className:n.thirdLevelList,children:(l=e.links)==null?void 0:l.map((f,F)=>t("li",{className:n.thirdLeveListItem,children:t("a",{href:f.href,target:f.openInNewTab?"_blank":"_self",className:n.thirdLevelLink,children:f.name})},`${f.href}-${F}`))})]})},`${e.name}-${o}`)}):null}),t(a.div,{className:n.endOfList,initial:{opacity:0},animate:{opacity:i?1:0}})]})})})]})})})},re=r=>r&&!b(r),b=r=>r&&"links"in r;try{h.displayName="DesktopNavigation",h.__docgenInfo={description:"",displayName:"DesktopNavigation",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(val: boolean) => void"}},categories:{defaultValue:null,description:"",name:"categories",required:!0,type:{name:"(TNavLink | TNavCategory)[]"}},currentSlug:{defaultValue:null,description:"",name:"currentSlug",required:!0,type:{name:"string"}},initial:{defaultValue:null,description:"",name:"initial",required:!1,type:{name:"string"}},isAuthenticated:{defaultValue:null,description:"",name:"isAuthenticated",required:!1,type:{name:"boolean"}},signOutLabel:{defaultValue:null,description:"",name:"signOutLabel",required:!1,type:{name:"string"}},onSignOut:{defaultValue:null,description:"",name:"onSignOut",required:!1,type:{name:"(() => void)"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Element"}}}}}catch{}const d=[{name:"Drycker",href:"#",openInNewTab:!0,links:[{name:"Öl",href:"#",links:[{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"},{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"},{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"}]},{name:"Vin",href:"#",links:[{name:"Alla viner",href:"#"},{name:"Alkoholfritt",href:"#"},{name:"Champagne",href:"#"},{name:"Glögg",href:"#"},{name:"Mousserande",href:"#"}]},{name:"Sprit",href:"#",links:[{name:"Brand och Cognac",href:"#"},{name:"Calvados",href:"#"},{name:"Gin",href:"#"},{name:"Grappa",href:"#"},{name:"Likör",href:"#"}]},{name:"Övrigt",href:"#",links:[{name:"Cider",href:"#"},{name:"Läsk",href:"#"},{name:"Vatten",href:"#"},{name:"FAB / Blanddryck",href:"#"},{name:"Energidryck",href:"#"},{name:"Fruktdryck",href:"#"},{name:"Mixers",href:"#"},{name:"Stilldrink / Juice",href:"#"},{name:"Övrigt",href:"#"}]}]},{name:"Tillbehör",href:"#",links:[{name:"Item 1",href:"#",subtitle:"Information",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Mitt Spendrups",href:"#mitt-spendrups",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Item 2",description:"Lorem.",href:"#item-2"},{name:"Item 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-3"},{name:"Item 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-4"}]},{name:"Item 2",href:"#",subtitle:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Item 2-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-1"},{name:"Item 2-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-2"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"},{name:"Item 2-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-1"},{name:"Item 2-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-2"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"}]},{name:"Item 3",href:"#"}]},{name:"Nyheter",href:"#",openInNewTab:!0},{name:"Kampanjer",href:"#",openInNewTab:!0}],se={title:"Design System/Molecules/DesktopNavigation",component:h,tags:["autodocs"],parameters:{padding:!1}},c={render:r=>t(h,{...r}),args:{categories:d,isAuthenticated:!0,signOutLabel:"Logga ut",onSignOut:()=>alert("Logging out")}};var q,A,B;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`[{
  name: 'Drycker',
  href: '#',
  openInNewTab: true,
  links: [{
    name: 'Öl',
    href: '#',
    links: [{
      name: 'Alla öl',
      href: '#'
    }, {
      name: 'Ale',
      href: '#'
    }, {
      name: 'Bock',
      href: '#'
    }, {
      name: 'Dubbel IPA',
      href: '#'
    }, {
      name: 'Färsköl',
      href: '#'
    }, {
      name: 'Alla öl',
      href: '#'
    }, {
      name: 'Ale',
      href: '#'
    }, {
      name: 'Bock',
      href: '#'
    }, {
      name: 'Dubbel IPA',
      href: '#'
    }, {
      name: 'Färsköl',
      href: '#'
    }, {
      name: 'Alla öl',
      href: '#'
    }, {
      name: 'Ale',
      href: '#'
    }, {
      name: 'Bock',
      href: '#'
    }, {
      name: 'Dubbel IPA',
      href: '#'
    }, {
      name: 'Färsköl',
      href: '#'
    }]
  }, {
    name: 'Vin',
    href: '#',
    links: [{
      name: 'Alla viner',
      href: '#'
    }, {
      name: 'Alkoholfritt',
      href: '#'
    }, {
      name: 'Champagne',
      href: '#'
    }, {
      name: 'Glögg',
      href: '#'
    }, {
      name: 'Mousserande',
      href: '#'
    }]
  }, {
    name: 'Sprit',
    href: '#',
    links: [{
      name: 'Brand och Cognac',
      href: '#'
    }, {
      name: 'Calvados',
      href: '#'
    }, {
      name: 'Gin',
      href: '#'
    }, {
      name: 'Grappa',
      href: '#'
    }, {
      name: 'Likör',
      href: '#'
    }]
  }, {
    name: 'Övrigt',
    href: '#',
    links: [{
      name: 'Cider',
      href: '#'
    }, {
      name: 'Läsk',
      href: '#'
    }, {
      name: 'Vatten',
      href: '#'
    }, {
      name: 'FAB / Blanddryck',
      href: '#'
    }, {
      name: 'Energidryck',
      href: '#'
    }, {
      name: 'Fruktdryck',
      href: '#'
    }, {
      name: 'Mixers',
      href: '#'
    }, {
      name: 'Stilldrink / Juice',
      href: '#'
    }, {
      name: 'Övrigt',
      href: '#'
    }]
  }]
}, {
  name: 'Tillbehör',
  href: '#',
  links: [{
    name: 'Item 1',
    href: '#',
    subtitle: 'Information',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    links: [{
      name: 'Mitt Spendrups',
      href: '#mitt-spendrups',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      name: 'Item 2',
      description: 'Lorem.',
      href: '#item-2'
    }, {
      name: 'Item 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-3'
    }, {
      name: 'Item 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-4'
    }]
  }, {
    name: 'Item 2',
    href: '#',
    subtitle: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    links: [{
      name: 'Item 2-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-1'
    }, {
      name: 'Item 2-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-2'
    }, {
      name: 'Item 2-3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-3'
    }, {
      name: 'Item 2-4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-4'
    }, {
      name: 'Item 2-5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-5'
    }, {
      name: 'Item 2-6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-6'
    }, {
      name: 'Item 2-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-1'
    }, {
      name: 'Item 2-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-2'
    }, {
      name: 'Item 2-3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-3'
    }, {
      name: 'Item 2-4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-4'
    }, {
      name: 'Item 2-5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-5'
    }, {
      name: 'Item 2-6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      href: '#item-2-6'
    }]
  }, {
    name: 'Item 3',
    href: '#'
  }]
}, {
  name: 'Nyheter',
  href: '#',
  openInNewTab: true
}, {
  name: 'Kampanjer',
  href: '#',
  openInNewTab: true
}]`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var S,D,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <DesktopNavigation {...args} />;
  },
  args: {
    categories,
    isAuthenticated: true,
    signOutLabel: 'Logga ut',
    onSignOut: () => alert('Logging out')
  }
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const me=["categories","DefaultDesktopNavigation"],ge=Object.freeze(Object.defineProperty({__proto__:null,DefaultDesktopNavigation:c,__namedExportsOrder:me,categories:d,default:se},Symbol.toStringTag,{value:"Module"}));export{h as D,c as a,d as c,ge as d};
//# sourceMappingURL=desktop-navigation.stories-d21e2afc.js.map

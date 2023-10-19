import{r as s}from"./index-6f814c40.js";import{c as k}from"./index-74f03c09.js";import{a as t,j as m,F as $}from"./jsx-runtime-76c5c2e2.js";import{C as N}from"./content-wrapper-854859bc.js";import{m as a}from"./motion-354a1bac.js";import{I as T}from"./icon-af819d0c.js";import{I as E}from"./icon-button-da898f55.js";const M="_desktopNavigation_lp7dy_1",P="_topLevel_lp7dy_6",G="_topLevelLinks_lp7dy_11",H="_topLevelLinkList_lp7dy_15",j="_topLevelLinkInner_lp7dy_22",W="_topLevelLinkActive_lp7dy_25",J="_topLevelLink_lp7dy_11",K="_active_lp7dy_50",z="_secondLevel_lp7dy_58",R="_secondLevelInner_lp7dy_67",Q="_endOfList_lp7dy_74",U="_logoWrapper_lp7dy_83",X="_secondLevelLinkList_lp7dy_87",Y="_secondLevelLinkItem_lp7dy_99",Z="_secondLevelLinkActive_lp7dy_103",ee="_secondLevelLink_lp7dy_87",ne="_thirdLevelList_lp7dy_143",ie="_thirdLeveListItem_lp7dy_152",te="_thirdLevelLink_lp7dy_157",oe="_closeButton_lp7dy_168",ae="_iconButton_lp7dy_173",n={desktopNavigation:M,topLevel:P,topLevelLinks:G,topLevelLinkList:H,topLevelLinkInner:j,topLevelLinkActive:W,topLevelLink:J,active:K,secondLevel:z,secondLevelInner:R,endOfList:Q,logoWrapper:U,secondLevelLinkList:X,secondLevelLinkItem:Y,secondLevelLinkActive:Z,secondLevelLink:ee,thirdLevelList:ne,thirdLeveListItem:ie,thirdLevelLink:te,closeButton:oe,iconButton:ae},f=({categories:r,currentSlug:L,initial:de})=>{var I,y;const[i,g]=s.useState(),[u,v]=s.useState(),[C,V]=s.useState(),[w,x]=s.useState("auto"),p=s.useRef(null);s.useEffect(()=>{var o,l;const e=window.innerHeight-(((l=(o=p==null?void 0:p.current)==null?void 0:o.getBoundingClientRect())==null?void 0:l.top)??0);x(e)},[u]),s.useEffect(()=>{const e=document.body;return e&&(i?e.classList.add("no-scroll"):e.classList.remove("no-scroll")),()=>{var o;return(o=e==null?void 0:e.classList)==null?void 0:o.remove("no-scroll")}},[i]);const b=()=>{const e=r.find(o=>!!(L!=null&&L.includes(o.href)));v(e)};return s.useEffect(()=>{b()},[]),t("nav",{className:n.desktopNavigation,children:t(N,{padding:0,children:m(a.div,{className:n.topLevel,onHoverEnd:()=>b(),children:[t("div",{className:n.topLevelLinks,children:m(a.ul,{className:n.topLevelLinkList,children:[r.map((e,o)=>m(a.li,{className:n.topLevelLinkInner,onClick:()=>v(e),onHoverStart:()=>{v(e)},children:[(u==null?void 0:u.name)===e.name&&t(a.div,{className:n.topLevelLinkActive,layoutId:"activeLink",transition:{type:"spring",stiffness:200,damping:20}}),re(e)&&t(a.a,{className:k(n.topLevelLink,{[n.active]:i===e}),href:e.href,target:e.openInNewTab?"_blank":"_self",children:e.name},`${e.name}-${o}`),_(e)&&m(a.button,{className:k(n.topLevelLink,{[n.active]:i===e}),onClick:()=>{(i==null?void 0:i.name)===e.name?g(void 0):g(e)},children:[e.name,t(T,{icon:(i==null?void 0:i.name)===e.name?"icon-chevron-up":"icon-chevron-down"})]},`${e.name}-${o}`)]},`${e.name}-${o}`)),t(a.div,{className:n.closeButton,initial:{scale:0,opacity:0},animate:i?{scale:1,opacity:1}:void 0,exit:{transition:{delay:0}},children:t(E,{className:n.iconButton,icon:"icon-plus",type:"button",onClick:()=>g(void 0)})})]})}),t(a.div,{initial:{height:0},animate:{height:(I=i==null?void 0:i.links)!=null&&I.length?"auto":0},className:n.secondLevel,ref:p,children:t(N,{padding:0,children:m(a.div,{className:n.secondLevelInner,style:{height:`${w}px`},initial:{y:"-100%",opacity:0},animate:(y=i==null?void 0:i.links)!=null&&y.length?{y:"0",opacity:1}:{y:"-100%",opacity:0,transition:{delay:.3}},children:[t(a.ul,{className:n.secondLevelLinkList,children:_(i)?i.links.map((e,o)=>{var l;return t(a.li,{className:n.secondLevelLinkItem,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:m($,{children:[t(a.a,{className:k(n.secondLevelLink,{[n.active]:C===e}),href:e.href,target:e.openInNewTab?"_blank":"_self",onClick:()=>{V(e)},children:e.name}),t("ul",{className:n.thirdLevelList,children:(l=e.links)==null?void 0:l.map((h,F)=>t("li",{className:n.thirdLeveListItem,children:t("a",{href:h.href,target:h.openInNewTab?"_blank":"_self",className:n.thirdLevelLink,children:h.name})},`${h.href}-${F}`))})]})},`${e.name}-${o}`)}):null}),t(a.div,{className:n.endOfList,initial:{opacity:0},animate:{opacity:i?1:0}})]})})})]})})})},re=r=>r&&!_(r),_=r=>r&&"links"in r;try{f.displayName="DesktopNavigation",f.__docgenInfo={description:"",displayName:"DesktopNavigation",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(val: boolean) => void"}},categories:{defaultValue:null,description:"",name:"categories",required:!0,type:{name:"(TNavLink | TNavCategory)[]"}},currentSlug:{defaultValue:null,description:"",name:"currentSlug",required:!0,type:{name:"string"}},initial:{defaultValue:null,description:"",name:"initial",required:!1,type:{name:"string"}},isAuthenticated:{defaultValue:null,description:"",name:"isAuthenticated",required:!1,type:{name:"boolean"}},signOutLabel:{defaultValue:null,description:"",name:"signOutLabel",required:!1,type:{name:"string"}},onSignOut:{defaultValue:null,description:"",name:"onSignOut",required:!1,type:{name:"(() => void)"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Element"}}}}}catch{}const d=[{name:"Drycker",href:"#",openInNewTab:!0,links:[{name:"Öl",href:"#",links:[{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"},{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"},{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"}]},{name:"Vin",href:"#",links:[{name:"Alla viner",href:"#"},{name:"Alkoholfritt",href:"#"},{name:"Champagne",href:"#"},{name:"Glögg",href:"#"},{name:"Mousserande",href:"#"}]},{name:"Sprit",href:"#",links:[{name:"Brand och Cognac",href:"#"},{name:"Calvados",href:"#"},{name:"Gin",href:"#"},{name:"Grappa",href:"#"},{name:"Likör",href:"#"}]},{name:"Övrigt",href:"#",links:[{name:"Cider",href:"#"},{name:"Läsk",href:"#"},{name:"Vatten",href:"#"},{name:"FAB / Blanddryck",href:"#"},{name:"Energidryck",href:"#"},{name:"Fruktdryck",href:"#"},{name:"Mixers",href:"#"},{name:"Stilldrink / Juice",href:"#"},{name:"Övrigt",href:"#"}]}]},{name:"Tillbehör",href:"#",links:[{name:"Item 1",href:"#",subtitle:"Information",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Mitt Spendrups",href:"#mitt-spendrups",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Item 2",description:"Lorem.",href:"#item-2"},{name:"Item 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-3"},{name:"Item 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-4"}]},{name:"Item 2",href:"#",subtitle:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Item 2-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-1"},{name:"Item 2-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-2"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"},{name:"Item 2-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-1"},{name:"Item 2-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-2"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"}]},{name:"Item 3",href:"#"}]},{name:"Nyheter",href:"#",openInNewTab:!0},{name:"Kampanjer",href:"#",openInNewTab:!0}],se={title:"Design System/Molecules/DesktopNavigation",component:f,tags:["autodocs"],parameters:{padding:!1}},c={render:r=>t(f,{...r}),args:{categories:d,isAuthenticated:!0,signOutLabel:"Logga ut",onSignOut:()=>alert("Logging out")}};var q,A,B;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`[{
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
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const me=["categories","DefaultDesktopNavigation"],ge=Object.freeze(Object.defineProperty({__proto__:null,DefaultDesktopNavigation:c,__namedExportsOrder:me,categories:d,default:se},Symbol.toStringTag,{value:"Module"}));export{f as D,c as a,d as c,ge as d};
//# sourceMappingURL=desktop-navigation.stories-cddf511b.js.map

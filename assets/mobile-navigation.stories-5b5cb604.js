import{r as s}from"./index-6f814c40.js";import{c as S}from"./index-74f03c09.js";import{j as a,a as i}from"./jsx-runtime-76c5c2e2.js";import{A as N}from"./index-b3e0e324.js";import{m as u}from"./motion-354a1bac.js";import{I as c}from"./icon-0e1526c5.js";import{B as O}from"./button-5413bed3.js";const A="_mobileNavigation_k24kw_1",x="_top_k24kw_7",T="_actions_k24kw_15",C="_topInner_k24kw_23",D="_menuButton_k24kw_26",B="_menuIcon_k24kw_38",V="_menuCloseIcon_k24kw_42",E="_content_k24kw_49",H="_menuListWrapper_k24kw_62",W="_menuList_k24kw_62",$="_menuListItem_k24kw_72",j="_menuListItemLink_k24kw_81",F="_menuListItemLinkActive_k24kw_94",P="_subMenuList_k24kw_101",R="_subMenuListItemLink_k24kw_108",X="_subMenuListItemLinkActive_k24kw_122",z="_itemIcon_k24kw_130",G="_signOut_k24kw_135",J="_backDrop_k24kw_142",t={mobileNavigation:A,top:x,actions:T,topInner:C,menuButton:D,menuIcon:B,menuCloseIcon:V,content:E,menuListWrapper:H,menuList:W,menuListItem:$,menuListItemLink:j,menuListItemLinkActive:F,subMenuList:P,subMenuListItemLink:R,subMenuListItemLinkActive:X,itemIcon:z,signOut:G,backDrop:J},q=({name:n,link:p,links:r,delay:b})=>{const[d,o]=s.useState(!1),[g,k]=s.useState(0),[l,f]=s.useState();return a(u.div,{initial:{opacity:0,translateX:"10vw"},whileInView:{opacity:1,translateX:0,transition:{delay:b??.3}},viewport:{once:!0},className:t.menuListItem,children:[L(p)?i("a",{className:t.menuListItemLink,href:p.href,target:p.openInNewTab?"_blank":"_self",children:n}):a("button",{className:t.menuListItemLink,onClick:()=>{k(g===0?"auto":0),o(!d)},children:[i("span",{className:`${d?t.menuListItemLinkActive:""}`,children:n}),i(c,{className:t.itemIcon,icon:d?"icon-chevron-up":"icon-chevron-down"})]}),r!=null&&r.length?i(u.div,{className:t.subMenuList,initial:{height:0},animate:{height:g},children:r.map(e=>{var m;return a(s.Fragment,{children:[L(e)?a("a",{className:t.subMenuListItemLink,href:e.href,target:e.openInNewTab?"_blank":"_self",children:[e.name,i(c,{className:t.itemIcon,icon:"icon-chevron-right"})]}):a("button",{className:t.subMenuListItemLink,onClick:()=>{f(l===e.name?"":e.name)},children:[i("span",{className:`${l===e.name?t.subMenuListItemLinkActive:""}`,children:e.name}),i(c,{className:t.itemIcon,icon:l===e.name?"icon-chevron-up":"icon-chevron-down"})]}),v(e)&&((m=e.links)!=null&&m.length)?i(u.div,{className:t.subMenuList,initial:{height:0},animate:{height:l===e.name?"auto":0},children:e.links.map(h=>i(s.Fragment,{children:L(h)?a("a",{className:t.subMenuListItemLink,href:h.href,target:h.openInNewTab?"_blank":"_self",children:[h.name,i(c,{className:t.itemIcon,icon:"icon-chevron-right"})]}):void 0},h.name))}):void 0]},e.name)})}):void 0]},n)},_=({categories:n,isAuthenticated:p,signOutLabel:r,onSignOut:b,actions:d})=>{const[o,g]=s.useState(!1),[k,l]=s.useState(0),f=s.useRef(null);return s.useEffect(()=>{var e,m;l((((e=f.current)==null?void 0:e.offsetTop)??0)+((((m=f.current)==null?void 0:m.clientHeight)??0)+16))},[]),s.useEffect(()=>{const e=document.body;e&&(o?e.classList.add("no-scroll"):e.classList.remove("no-scroll"))},[o]),a("div",{className:t.mobileNavigation,ref:f,children:[a("div",{className:t.top,children:[d&&i("div",{className:t.actions,children:d}),i("div",{className:t.topInner,children:a(N,{initial:!1,exitBeforeEnter:!0,children:[!o&&i(u.button,{initial:{scale:.2},animate:{scale:o?0:1},exit:{scale:.2},onClick:()=>g(!0),className:t.menuButton,children:i(c,{className:t.menuIcon,icon:"icon-menu"})},"menu-btn"),o&&i(u.button,{initial:{scale:.2},animate:{scale:o?1:0},exit:{scale:.2},onClick:()=>g(!1),className:t.menuButton,children:i(c,{className:S(t.menuIcon,t.menuCloseIcon),icon:"icon-plus"})},"close-btn")]})})]}),i(u.nav,{className:t.content,initial:{x:"100vw"},animate:{x:o?"0":"100vw"},transition:{type:"tween"},style:{paddingTop:`${k}px`},children:a("div",{className:t.menuListWrapper,children:[i("ul",{className:t.menuList,children:n.map((e,m)=>{if(v(e))return i(q,{name:e.name,links:e.links,delay:m*.1,href:e.href},e.name);if(L(e))return i(q,{name:e.name,link:e,delay:m*.1},e.name)})}),p&&r&&b&&i("div",{className:t.signOut,children:i(O,{children:r,onClick:b,surface:"x",type:"button"})})]})}),i(N,{children:o&&i(u.div,{initial:{opacity:0},animate:{opacity:.75},exit:{opacity:0},className:t.backDrop})})]})},L=n=>n&&!v(n),v=n=>n&&"links"in n;try{_.displayName="MobileNavigation",_.__docgenInfo={description:"",displayName:"MobileNavigation",props:{categories:{defaultValue:null,description:"",name:"categories",required:!0,type:{name:"(TNavLink | TNavCategory)[]"}},currentSlug:{defaultValue:null,description:"",name:"currentSlug",required:!0,type:{name:"string"}},initial:{defaultValue:null,description:"",name:"initial",required:!1,type:{name:"string"}},isAuthenticated:{defaultValue:null,description:"",name:"isAuthenticated",required:!1,type:{name:"boolean"}},signOutLabel:{defaultValue:null,description:"",name:"signOutLabel",required:!1,type:{name:"string"}},onSignOut:{defaultValue:null,description:"",name:"onSignOut",required:!1,type:{name:"(() => void)"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Element"}}}}}catch{}const K={title:"Design System/Molecules/MobileNavigation",component:_,tags:["autodocs"],parameters:{padding:!1}},I={render:n=>i(_,{...n}),args:{currentSlug:"/",categories:[{name:"Spendrups",href:"#",openInNewTab:!0},{name:"Om oss",href:"#",openInNewTab:!0},{name:"Hello",href:"#",links:[{name:"Item 1",subtitle:"Information",href:"#",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Mitt Spendrups",href:"#mitt-spendrups",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Item 2",description:"Lorem.",href:"#item-2"},{name:"Item 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-3"},{name:"Item 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-4",links:[{name:"Item 4-1",href:"#item-4-1"},{name:"Item 4-2",href:"#item-4-2"},{name:"Item 4-3",href:"#item-4-3"},{name:"Item 4-4",href:"#item-4-4"}]}]},{name:"Item 2",href:"#",subtitle:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Item 2-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-1"},{name:"Item 2-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-2"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"}]}]}],isAuthenticated:!0,signOutLabel:"Logga ut",onSignOut:()=>alert("Logging out")}};var w,y,M;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return <MobileNavigation {...args} />;
  },
  args: {
    currentSlug: '/',
    categories: [{
      name: 'Spendrups',
      href: '#',
      openInNewTab: true
    }, {
      name: 'Om oss',
      href: '#',
      openInNewTab: true
    }, {
      name: 'Hello',
      href: '#',
      links: [{
        name: 'Item 1',
        subtitle: 'Information',
        href: '#',
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
          href: '#item-4',
          links: [{
            name: 'Item 4-1',
            href: '#item-4-1'
          }, {
            name: 'Item 4-2',
            href: '#item-4-2'
          }, {
            name: 'Item 4-3',
            href: '#item-4-3'
          }, {
            name: 'Item 4-4',
            href: '#item-4-4'
          }]
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
      }]
    }],
    isAuthenticated: true,
    signOutLabel: 'Logga ut',
    onSignOut: () => alert('Logging out')
  }
}`,...(M=(y=I.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const Q=["DefaultMobileNavigation"],oe=Object.freeze(Object.defineProperty({__proto__:null,DefaultMobileNavigation:I,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{I as D,_ as M,oe as m};
//# sourceMappingURL=mobile-navigation.stories-5b5cb604.js.map

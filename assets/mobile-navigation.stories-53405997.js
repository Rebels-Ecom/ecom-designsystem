import{r as o,j as e}from"./jsx-runtime-03333307.js";import{c as A}from"./index-09749a66.js";import{u as w}from"./useOnClickOutside-9d2c35bb.js";import{A as x}from"./index-61679f6b.js";import{m as c}from"./motion-9380e2c6.js";import{I as f}from"./icon-cf6ebd85.js";import{B as M}from"./button-8e3f9b10.js";import{C as O}from"./content-wrapper-adfa8526.js";const S="_mobileNavigation_debmq_1",B="_top_debmq_7",D="_actions_debmq_15",E="_topInner_debmq_23",P="_menuButton_debmq_26",F="_menuIcon_debmq_39",W="_menuCloseIcon_debmq_43",R="_content_debmq_50",$="_menuListWrapper_debmq_64",G="_menuList_debmq_64",X="_menuListItem_debmq_79",H="_menuListItemLink_debmq_88",J="_menuListItemLinkActive_debmq_101",V="_subMenuList_debmq_108",z="_subMenuListItemLink_debmq_115",K="_subMenuListItemLinkActive_debmq_129",Q="_itemIcon_debmq_137",U="_signOut_debmq_142",Y="_backDrop_debmq_149",n={mobileNavigation:S,top:B,actions:D,topInner:E,menuButton:P,menuIcon:F,menuCloseIcon:W,content:R,menuListWrapper:$,menuList:G,menuListItem:X,menuListItemLink:H,menuListItemLinkActive:J,subMenuList:V,subMenuListItemLink:z,subMenuListItemLinkActive:K,itemIcon:Q,signOut:U,backDrop:Y},N=({name:s,link:u,links:m,delay:b,linkComponent:d,close:r,trackNavigation:a})=>{const[p,I]=o.useState(!1),[v,L]=o.useState(0),[l,i]=o.useState();return e.jsxs(c.div,{initial:{opacity:0,translateX:"10vw"},animate:{opacity:1,translateX:0,transition:{delay:b??.3}},viewport:{once:!0},className:n.menuListItem,children:[_(u)?e.jsx(d,{className:n.menuListItemLink,to:u.href,target:u.openInNewTab?"_blank":"_self",onClick:()=>{r(),a==null||a(u.href)},children:s}):e.jsxs("button",{className:n.menuListItemLink,onClick:()=>{L(v===0?"auto":0),I(!p)},children:[e.jsx("span",{className:`${p?n.menuListItemLinkActive:""}`,children:s}),e.jsx(f,{className:n.itemIcon,icon:p?"icon-chevron-up":"icon-chevron-down"})]}),m!=null&&m.length?e.jsx(c.div,{className:n.subMenuList,initial:{height:0},animate:{height:v},children:m.map(t=>{var q;return e.jsxs(o.Fragment,{children:[_(t)?e.jsxs(d,{className:n.subMenuListItemLink,to:t.href,target:t.openInNewTab?"_blank":"_self",onClick:()=>{r(),a==null||a(t.href)},children:[t.name,e.jsx(f,{className:n.itemIcon,icon:"icon-chevron-right"})]}):e.jsxs("button",{className:n.subMenuListItemLink,onClick:()=>{i(l===t.name?"":t.name)},children:[e.jsx("span",{className:`${l===t.name?n.subMenuListItemLinkActive:""}`,children:t.name}),e.jsx(f,{className:n.itemIcon,icon:l===t.name?"icon-chevron-up":"icon-chevron-down"})]}),k(t)&&((q=t.links)!=null&&q.length)?e.jsx(c.div,{className:n.subMenuList,initial:{height:0},animate:{height:l===t.name?"auto":0},children:t.links.map(g=>e.jsx(o.Fragment,{children:_(g)?e.jsxs(d,{className:n.subMenuListItemLink,to:g.href,target:g.openInNewTab?"_blank":"_self",onClick:()=>{r(),a==null||a(g.href)},children:[g.name,e.jsx(f,{className:n.itemIcon,icon:"icon-chevron-right"})]}):void 0},g.name))}):void 0]},t.name)})}):void 0]},s)},y=({categories:s,isAuthenticated:u,signOutLabel:m,onSignOut:b,actions:d,isOpen:r,setIsOpen:a,linkComponent:p,trackNavigation:I})=>{const[v,L]=o.useState(0),l=o.useRef(null);return o.useEffect(()=>{var i,t;L((((i=l.current)==null?void 0:i.getBoundingClientRect().y)??0)+((((t=l.current)==null?void 0:t.clientHeight)??0)+16))},[r]),o.useEffect(()=>{const i=document.body;i&&(r?i.classList.add("no-scroll"):i.classList.remove("no-scroll"))},[r]),w({ref:l,onClose:()=>a(!1)}),e.jsxs("div",{className:n.mobileNavigation,ref:l,children:[e.jsxs("div",{className:n.top,children:[d&&e.jsx("div",{className:n.actions,children:d}),e.jsx("div",{className:n.topInner,children:e.jsxs(x,{initial:!1,exitBeforeEnter:!0,children:[!r&&e.jsx(c.button,{initial:{scale:.2},animate:{scale:r?0:1},exit:{scale:.2},onClick:()=>a(!0),className:n.menuButton,children:e.jsx(f,{className:n.menuIcon,icon:"icon-menu"})},"menu-btn"),r&&e.jsx(c.button,{initial:{scale:.2},animate:{scale:r?1:0},exit:{scale:.2},onClick:()=>a(!1),className:n.menuButton,children:e.jsx(f,{className:A(n.menuIcon,n.menuCloseIcon),icon:"icon-plus"})},"close-btn")]})})]}),e.jsx(c.nav,{className:n.content,initial:{x:"100vw"},animate:{x:r?"0":"100vw"},transition:{type:"tween"},style:{paddingTop:`${v}px`},children:e.jsxs("div",{className:n.menuListWrapper,children:[e.jsx("ul",{className:n.menuList,children:s.map((i,t)=>{if(k(i))return e.jsx(N,{linkComponent:p,name:i.name,links:i.links,delay:t*.1,href:i.href,close:()=>a(!1),trackNavigation:I},i.name);if(_(i))return e.jsx(N,{linkComponent:p,name:i.name,link:i,delay:t*.1,close:()=>a(!1),trackNavigation:I},i.name)})}),u&&m&&b&&e.jsx("div",{className:n.signOut,children:e.jsx(M,{children:m,onClick:b,surface:"x",type:"button"})})]})}),e.jsx(x,{children:r&&e.jsx(c.div,{initial:{opacity:0},animate:{opacity:.75},exit:{opacity:0},className:n.backDrop})})]})},_=s=>s&&!k(s),k=s=>s&&"links"in s;y.__docgenInfo={description:"",methods:[],displayName:"MobileNavigation",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"val"}],return:{name:"void"}}},description:""},categories:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"TNavLink | TNavCategory",elements:[{name:"signature",type:"object",raw:`{
  // Link text / title
  name: string;
  // Path to destination
  href: string;
  // Boolean for toggling target="_blank"
  openInNewTab?: boolean;
  // Descriptive text
  description?: string;
  links?: never;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"openInNewTab",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"links",value:{name:"never",required:!1}}]}},{name:"signature",type:"object",raw:`{
  // Link text / title
  name: string;
  // Path to destination
  href: string;
  // Boolean for toggling target="_blank"
  openInNewTab?: boolean;
  // Descriptive text
  description?: string;
  // Subtitle
  subtitle?: string;
  // Required sub level of links
  links: Array<TNavLink | TNavCategory>;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"openInNewTab",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"string",required:!1}},{key:"links",value:{name:"Array",elements:[{name:"union",raw:"TNavLink | TNavCategory",elements:[{name:"signature",type:"object",raw:`{
  // Link text / title
  name: string;
  // Path to destination
  href: string;
  // Boolean for toggling target="_blank"
  openInNewTab?: boolean;
  // Descriptive text
  description?: string;
  links?: never;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"openInNewTab",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"links",value:{name:"never",required:!1}}]}},{name:"TNavCategory"}]}],raw:"Array<TNavLink | TNavCategory>",required:!0}}]}}]}],raw:"Array<TNavLink | TNavCategory>"},description:""},currentSlug:{required:!0,tsType:{name:"string"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""},initial:{required:!1,tsType:{name:"string"},description:""},isAuthenticated:{required:!1,tsType:{name:"boolean"},description:""},signOutLabel:{required:!1,tsType:{name:"string"},description:""},onSignOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actions:{required:!1,tsType:{name:"JSX.Element"},description:""},trackNavigation:{required:!1,tsType:{name:"signature",type:"function",raw:"(target: string) => void",signature:{arguments:[{type:{name:"string"},name:"target"}],return:{name:"void"}}},description:""}}};const Z=[{name:"Drycker",href:"#",openInNewTab:!0,links:[{name:"Öl",href:"#",links:[{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"},{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"},{name:"Alla öl",href:"#"},{name:"Ale",href:"#"},{name:"Bock",href:"#"},{name:"Dubbel IPA",href:"#"},{name:"Färsköl",href:"#"}]},{name:"Vin",href:"#",links:[{name:"Alla viner",href:"#"},{name:"Alkoholfritt",href:"#"},{name:"Champagne",href:"#"},{name:"Glögg",href:"#"},{name:"Mousserande",href:"#"}]},{name:"Sprit",href:"#",links:[{name:"Brand och Cognac",href:"#"},{name:"Calvados",href:"#"},{name:"Gin",href:"#"},{name:"Grappa",href:"#"},{name:"Likör",href:"#"}]},{name:"Övrigt",href:"#",links:[{name:"Cider",href:"#"},{name:"Läsk",href:"#"},{name:"Vatten",href:"#"},{name:"FAB / Blanddryck",href:"#"},{name:"Energidryck",href:"#"},{name:"Fruktdryck",href:"#"},{name:"Mixers",href:"#"},{name:"Stilldrink / Juice",href:"#"},{name:"Övrigt",href:"#"}]}]},{name:"Tillbehör",href:"#",links:[{name:"Item 1",href:"#",subtitle:"Information",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Mitt Spendrups",href:"#mitt-spendrups",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Item 2",description:"Lorem.",href:"#item-2"},{name:"Item 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-3"},{name:"Item 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-4"}]},{name:"Item 2",href:"#",subtitle:"Lorem ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",links:[{name:"Item 2-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-1"},{name:"Item 2-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-2"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"},{name:"Item 2-1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-1"},{name:"Item 2-2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-2"},{name:"Item 2-3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-3"},{name:"Item 2-4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-4"},{name:"Item 2-5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-5"},{name:"Item 2-6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",href:"#item-2-6"}]},{name:"Item 3",href:"#"}]},{name:"Nyheter",href:"#",openInNewTab:!0},{name:"Kampanjer",href:"#",openInNewTab:!0}],ee={title:"Design System/Molecules/MobileNavigation",component:y,tags:["autodocs"],parameters:{padding:!1}},h={render:s=>{const[u,m]=o.useState(!1);return e.jsx(O,{children:e.jsx(y,{...s,linkComponent:"a",isOpen:u,setIsOpen:m})})},args:{currentSlug:"/",categories:Z,linkComponent:"a",isAuthenticated:!0,signOutLabel:"Logga ut",onSignOut:()=>alert("Logging out")}};var j,C,T;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <ContentWrapper>
        <MobileNavigation {...args} linkComponent='a' isOpen={isOpen} setIsOpen={setIsOpen} />
      </ContentWrapper>;
  },
  args: {
    currentSlug: '/',
    categories,
    linkComponent: 'a',
    isAuthenticated: true,
    signOutLabel: 'Logga ut',
    onSignOut: () => alert('Logging out')
  }
}`,...(T=(C=h.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const ne=["DefaultMobileNavigation"],ue=Object.freeze(Object.defineProperty({__proto__:null,DefaultMobileNavigation:h,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{h as D,y as M,ue as m};
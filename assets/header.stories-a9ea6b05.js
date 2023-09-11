import{r as N,R as p}from"./index-6f814c40.js";import{c as fa}from"./index-74f03c09.js";import{u as Na}from"./index-cb7985c3.js";import{a,j as o,F as S}from"./jsx-runtime-76c5c2e2.js";import{m as ia}from"./motion-354a1bac.js";import{T as La,a as ba,b as U,c as Ba}from"./top-nav-bar.stories-edd555ff.js";import{a as L,N as j}from"./navigation.stories-4a77d175.js";import{S as b,a as Ca}from"./search-nav-bar.stories-fc7d7a6b.js";import{L as Ta}from"./logotype-f3b15a0f.js";import{S as h,a as R}from"./search-nav-bar-links.stories-aafb4333.js";import{l}from"./Spendrups_logo_horizontal-038b757f.js";import{C as xa}from"./cart-sidebar-4baa0967.js";import{C as wa}from"./cart-product-list-a1b9ae6a.js";import{CartProductListStory as B}from"./cart-product-list.stories-ffbb483c.js";import{U as Aa,a as Ia}from"./ui-date-picker.stories-4e952f0e.js";import{b as C,T as Ha}from"./tabs.stories-b8752fb7.js";import{U as za,a as Oa}from"./user-profile-dropdown.stories-4a9978e9.js";import{A as ca,a as Ra,i as Pa,b as qa}from"./admin-search.stories-e404b8fe.js";import{G as m}from"./group-wrapper-53e2b69f.js";import{B as P,A as q}from"./below-1d00122a.js";import{I as g}from"./icon-button-b8bc13de.js";import{B as I}from"./button-90dd05d4.js";import{D as Ua}from"./drawer-sidebar-644efc19.js";import{H as W}from"./heading-3f08a059.js";import{b as Va}from"./cart-product.stories-695510de.js";import{L as Da}from"./link-button-caf985fe.js";import{F as Ma}from"./form-group-90a35cf8.js";import{T as Ea}from"./toggle-switch-f3cc1685.js";const Fa="_header_1n43h_1",ja="_navigationOpen_1n43h_59",Wa="_menuButton_1n43h_73",Ga="_open_1n43h_93",Ka="_icon_1n43h_97",Qa="_adminSearch_1n43h_125",$a="_adminNavLinks_1n43h_169",Ja="_top_1n43h_195",Xa="_logo_1n43h_207",Ya="_placeholder_1n43h_207",Za="_search_1n43h_207",ae="_searchNavLinks_1n43h_207",ee="_nav_1n43h_59",ne="_btn_1n43h_313",re="_mobileNav_1n43h_339",H={header:Fa,navigationOpen:ja,menuButton:Wa,open:Ga,icon:Ka,adminSearch:Qa,adminNavLinks:$a,top:Ja,logo:Xa,placeholder:Ya,search:Za,searchNavLinks:ae,nav:ee,btn:ne,mobileNav:re},oe=e=>{const[r,s]=N.useState();return N.useLayoutEffect(()=>{var n;s((n=e==null?void 0:e.current)==null?void 0:n.getBoundingClientRect())},[e]),Na(e,n=>s(n.contentRect)),N.useEffect(()=>console.log(r),[r]),r},te=({children:e,area:r})=>a("div",{className:H[r],"data-area":r,children:e}),se=({children:e,isOpen:r})=>{const s=N.useRef(null),n=oe(s)||{width:0,height:0};return a(ia.header,{className:H.header,initial:!1,animate:r?"open":"closed",ref:s,custom:n==null?void 0:n.width,children:e})},z=({children:e,isOpen:r})=>{const s=u=>a(ia.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...u}),n=({onClick:u})=>a("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":r,onClick:u,className:fa(H.menuButton,r&&H.open),children:o("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[a(s,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),a(s,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),a(s,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})});return typeof e=="function"?e({Wrapper:se,MenuButton:n,GridArea:te}):e};try{z.displayName="Header",z.__docgenInfo={description:"",displayName:"Header",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isAdmin:{defaultValue:null,description:"",name:"isAdmin",required:!1,type:{name:"boolean"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!1,type:{name:"boolean"}},adminSearch:{defaultValue:null,description:"",name:"adminSearch",required:!1,type:{name:"any"}},adminNavLinks:{defaultValue:null,description:"",name:"adminNavLinks",required:!1,type:{name:"any"}},topNavBar:{defaultValue:null,description:"",name:"topNavBar",required:!1,type:{name:"any"}},logotype:{defaultValue:null,description:"",name:"logotype",required:!1,type:{name:"any"}},searchNavBar:{defaultValue:null,description:"",name:"searchNavBar",required:!1,type:{name:"any"}},searchNavLinks:{defaultValue:null,description:"",name:"searchNavLinks",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"any"}},navigationTabs:{defaultValue:null,description:"",name:"navigationTabs",required:!1,type:{name:"any"}},cartSidebar:{defaultValue:null,description:"",name:"cartSidebar",required:!1,type:{name:"any"}}}}}catch{}const T=""+new URL("Spendrups_logo_vertical-f58d5291.svg",import.meta.url).href,ie={title:"Design System/Organisms/Header",component:z},x={render:e=>{var E,F;const[r,s]=p.useState(!1),[n,u]=p.useState({}),[la,da]=p.useState(!1),[w,pa]=p.useState(""),[ma,ga]=p.useState([]),[O,ha]=p.useState(!1),[ua,V]=p.useState(!1),Sa=()=>s(!r),D=()=>ha(!O),A=()=>V(!0),ya=()=>V(!1),M=t=>{console.log(`Trigger set delivery day - ${t.toISOString().split("T")[0]}`)},va=()=>{console.log("Handle logout...")},_a=()=>{console.log("Handle search button click")},ka=t=>{u(t)};return N.useEffect(()=>{let t=new RegExp(w.toLowerCase(),"i");ga(Pa.filter(c=>w&&(c.name&&t.test(c.name.toLowerCase())||c.companyName&&t.test(c.companyName.toLowerCase())||c.companyId&&t.test(c.companyId.toString().toLowerCase())||c.email&&t.test(c.email.toLowerCase()))))},[w]),o(S,{children:[a(z,{isOpen:r,children:({Wrapper:t,MenuButton:c,GridArea:d})=>o(t,{isOpen:r,children:[e.isAdmin&&e.adminSearch&&e.adminNavLinks&&o(S,{children:[a(d,{area:"adminSearch",children:a(qa,{...e.adminSearch,query:w,setQuery:pa,results:ma,onClick:_a,onClickSearchResult:ka,isOpen:la,setIsOpen:da})}),a(d,{area:"adminNavLinks",children:a(R,{children:o(m,{position:"apart",direction:"row",children:[a(P,{breakpoint:"lg",children:i=>i&&o(S,{children:[(n==null?void 0:n.name)&&a(g,{icon:"icon-user",isLink:!1,linkComponent:void 0,onClick:()=>{},size:"large",isTransparent:!0}),a(g,{icon:"icon-settings",isLink:!1,linkComponent:void 0,onClick:()=>{},size:"large",isTransparent:!0})]})}),a(q,{breakpoint:"lg",children:i=>i&&o(S,{children:[(n==null?void 0:n.name)&&a(I,{type:"button",surface:"secondary",children:n.name,iconRight:{icon:"icon-user"},size:"x-small",rounded:!0,onClick:()=>{}}),a(I,{type:"button",surface:"primary",children:"Mitt adminkonto",iconRight:{icon:"icon-settings"},size:"x-small",onClick:()=>{}})]})})]})})})]}),a(d,{area:"top",children:a(Ba,{...e.topNavBar,onClick:va,onSelectDate:M,isAdmin:e.isAdmin,hasActiveUser:(n==null?void 0:n.name)&&(n==null?void 0:n.name.length)>0})}),a(d,{area:"logo",children:a(Ta,{...e.logotype})}),a(d,{area:"search",children:a(Ca,{...e.searchNavBar,isOpen:O})}),e.searchNavLinks&&o(d,{area:"searchNavLinks",children:[a(P,{breakpoint:"lg",children:i=>i&&a(R,{children:o(m,{position:"apart",align:"center",direction:"row",children:[a(g,{icon:O?"icon-x":"icon-search",isLink:!1,linkComponent:void 0,size:"large",isTransparent:!0,onClick:D?()=>D():()=>{}}),a(g,{icon:"icon-heart",isLink:!1,linkComponent:void 0,size:"large",isTransparent:!0}),a(g,{icon:"icon-shopping-cart",isLink:!1,linkComponent:void 0,onClick:A?()=>A():()=>{},size:"large",isTransparent:!0})]})})}),a(q,{breakpoint:"lg",children:i=>i&&o(R,{children:[o(m,{position:"apart",align:"center",direction:"row",children:[a(g,{icon:"icon-heart",isLink:!1,linkComponent:void 0,size:"medium",isTransparent:!0}),a(g,{icon:"icon-shopping-cart",isLink:!1,linkComponent:void 0,onClick:A?()=>A():()=>{},size:"medium",isTransparent:!0})]}),o(m,{position:"apart",children:[a(Aa,{...Ia.args,onDateSelected:M}),a(za,{...Oa.args})]})]})})]}),a(d,{area:"btn",children:a(c,{onClick:Sa})}),o(d,{area:"nav",children:[a(P,{breakpoint:"lg",children:i=>i&&a(S,{children:e.isLoggedIn?a(Ha,{...e.navigationTabs,isOpen:r}):a(j,{...e.navigation,isOpen:r})})}),a(q,{breakpoint:"lg",children:i=>i&&a(j,{...e.navigation,isOpen:r})})]})]})}),a(Ua,{onClose:ya,isOpen:ua,children:o(xa,{classNames:["light"],children:[o(m,{position:"apart",children:[a(W,{order:3,children:"Kundvagn"}),a(W,{order:3,children:"1378,00 kr"})]}),o(m,{children:[a(I,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),a(I,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),a(wa,{children:(F=(E=e.cartSidebar)==null?void 0:E.children)==null?void 0:F.map(t=>a(Va,{...t},Math.random()))}),o(m,{children:[a(Da,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),a(Ma,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",children:a(Ea,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},y={...x,args:{topNavBar:La.args,navigation:L.args,navigationTabs:C.args,searchNavBar:b.args,logotype:{logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:T,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:B.args}},v={...x,args:{isLoggedIn:!0,topNavBar:ba.args,navigation:L.args,navigationTabs:C.args,searchNavBar:b.args,searchNavLinks:h.args,logotype:{logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:T,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:B.args}},_={...x,args:{isAdmin:!0,isLoggedIn:!0,adminSearch:ca.args,adminNavLinks:h.args,topNavBar:U.args,navigation:L.args,navigationTabs:C.args,searchNavBar:b.args,searchNavLinks:h.args,logotype:{logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:T,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:B.args}},k={...x,args:{isAdmin:!0,isLoggedIn:!0,adminSearch:Ra.args,adminNavLinks:h.args,topNavBar:U.args,navigation:L.args,navigationTabs:C.args,searchNavBar:b.args,searchNavLinks:h.args,logotype:{logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:T,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:B.args}},f={...x,args:{isAdmin:!0,adminSearch:ca.args,adminNavLinks:h.args,topNavBar:U.args,navigation:L.args,navigationTabs:C.args,searchNavBar:b.args,searchNavLinks:h.args,logotype:{logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:T,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:B.args}};var G,K,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...HeaderStoryTemplate,
  args: {
    topNavBar: TopNavBarStory_Guest_User.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [{
          srcset: logotype_mobile_vertical,
          media: \`(max-width: 767px)\`
        }, {
          srcset: logotype_desktop_horizontal,
          media: \`(min-width: 768px)\`
        }]
      },
      linkComponent: 'a'
    },
    cartSidebar: CartProductListStory.args
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,J,X;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...HeaderStoryTemplate,
  args: {
    isLoggedIn: true,
    topNavBar: TopNavBarStory_Logged_In_User.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [{
          srcset: logotype_mobile_vertical,
          media: \`(max-width: 767px)\`
        }, {
          srcset: logotype_desktop_horizontal,
          media: \`(min-width: 768px)\`
        }]
      },
      linkComponent: 'a'
    },
    cartSidebar: CartProductListStory.args
  }
}`,...(X=(J=v.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,aa;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...HeaderStoryTemplate,
  args: {
    isAdmin: true,
    isLoggedIn: true,
    adminSearch: AdminSearchStory.args,
    adminNavLinks: SearchNavBarLinksStory.args,
    topNavBar: TopNavBarStory_Admin.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [{
          srcset: logotype_mobile_vertical,
          media: \`(max-width: 767px)\`
        }, {
          srcset: logotype_desktop_horizontal,
          media: \`(min-width: 768px)\`
        }]
      },
      linkComponent: 'a'
    },
    cartSidebar: CartProductListStory.args
  }
}`,...(aa=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};var ea,na,ra;k.parameters={...k.parameters,docs:{...(ea=k.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  ...HeaderStoryTemplate,
  args: {
    isAdmin: true,
    isLoggedIn: true,
    adminSearch: AdminSearchStory_Loading.args,
    adminNavLinks: SearchNavBarLinksStory.args,
    topNavBar: TopNavBarStory_Admin.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [{
          srcset: logotype_mobile_vertical,
          media: \`(max-width: 767px)\`
        }, {
          srcset: logotype_desktop_horizontal,
          media: \`(min-width: 768px)\`
        }]
      },
      linkComponent: 'a'
    },
    cartSidebar: CartProductListStory.args
  }
}`,...(ra=(na=k.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var oa,ta,sa;f.parameters={...f.parameters,docs:{...(oa=f.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  ...HeaderStoryTemplate,
  args: {
    isAdmin: true,
    adminSearch: AdminSearchStory.args,
    adminNavLinks: SearchNavBarLinksStory.args,
    topNavBar: TopNavBarStory_Admin.args,
    navigation: NavigationStory.args,
    navigationTabs: TabsStory.args,
    searchNavBar: SearchNavBarStory.args,
    searchNavLinks: SearchNavBarLinksStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [{
          srcset: logotype_mobile_vertical,
          media: \`(max-width: 767px)\`
        }, {
          srcset: logotype_desktop_horizontal,
          media: \`(min-width: 768px)\`
        }]
      },
      linkComponent: 'a'
    },
    cartSidebar: CartProductListStory.args
  }
}`,...(sa=(ta=f.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};const ce=["HeaderStory_Guest_User","HeaderStory_Logged_In_User","HeaderStory_Admin_User","HeaderStory_Admin_Search_Loading","HeaderStory_Admin_Selects_Customer_Flow"],qe=Object.freeze(Object.defineProperty({__proto__:null,HeaderStory_Admin_Search_Loading:k,HeaderStory_Admin_Selects_Customer_Flow:f,HeaderStory_Admin_User:_,HeaderStory_Guest_User:y,HeaderStory_Logged_In_User:v,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{z as H,v as a,y as b,_ as c,qe as h};
//# sourceMappingURL=header.stories-a9ea6b05.js.map

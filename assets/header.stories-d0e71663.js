import{r as S,R as d}from"./index-6f814c40.js";import{c as ta}from"./index-74f03c09.js";import{u as sa}from"./index-cb7985c3.js";import{a,j as t,F as C}from"./jsx-runtime-76c5c2e2.js";import{m as Y}from"./motion-354a1bac.js";import{T as ia,a as ca,b as A,c as da}from"./top-nav-bar.stories-3a6594fb.js";import{a as v,N as la}from"./navigation.stories-d8b33716.js";import{S as _,a as z}from"./search-nav-bar.stories-5a21108f.js";import{L as pa}from"./logotype-4ba6f46a.js";import{S as l,a as O}from"./search-nav-bar-links.stories-148e0408.js";import{l as i}from"./Spendrups_logo_horizontal-038b757f.js";import{CartProductListStory as y}from"./cart-product-list.stories-aa8a7057.js";import{U as ma,a as ga}from"./ui-date-picker.stories-377a191d.js";import{b as N,T as ua}from"./tabs.stories-63d148b1.js";import{U as ha,a as Sa}from"./user-profile-dropdown.stories-fdbce72e.js";import{A as Z,a as va,i as _a}from"./admin-search.stories-e404b8fe.js";import{B as ya,A as Na}from"./below-1d00122a.js";import{C as U}from"./content-wrapper-92228f88.js";import{F as x}from"./flex-container-33d3c799.js";import{I as b}from"./icon-button-b8bc13de.js";import{M as fa}from"./menu-button-1902350e.js";import{G as q}from"./group-wrapper-53e2b69f.js";const ka="_header_6h9s9_1",La="_inner_6h9s9_15",ba="_menuButton_6h9s9_131",Ba="_open_6h9s9_151",Ta="_icon_6h9s9_155",Ca="_adminSearch_6h9s9_183",xa="_adminNavLinks_6h9s9_227",wa="_top_6h9s9_253",Aa="_logo_6h9s9_265",Ia="_placeholder_6h9s9_265",Ha="_search_6h9s9_265",za="_searchNavLinks_6h9s9_265",Oa="_nav_6h9s9_117",Ua="_btn_6h9s9_371",qa="_mobileNav_6h9s9_397",B={header:ka,inner:La,menuButton:ba,open:Ba,icon:Ta,adminSearch:Ca,adminNavLinks:xa,top:wa,logo:Aa,placeholder:Ia,search:Ha,searchNavLinks:za,nav:Oa,btn:Ua,mobileNav:qa},Pa=e=>{const[n,o]=S.useState();return S.useLayoutEffect(()=>{var r;o((r=e==null?void 0:e.current)==null?void 0:r.getBoundingClientRect())},[e]),sa(e,r=>o(r.contentRect)),S.useEffect(()=>console.log(n),[n]),n},Va=({children:e,area:n})=>a("div",{className:B[n],"data-area":n,children:e}),Ra=({children:e,isOpen:n})=>{const o=S.useRef(null),r=Pa(o)||{width:0,height:0};return a(Y.header,{className:B.header,initial:!1,animate:n?"open":"closed",ref:o,custom:r==null?void 0:r.width,children:e})},w=({children:e,isOpen:n})=>{const o=L=>a(Y.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...L}),r=({onClick:L})=>a("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":n,onClick:L,className:ta(B.menuButton,n&&B.open),children:t("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[a(o,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),a(o,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),a(o,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})});return typeof e=="function"?e({Wrapper:Ra,MenuButton:r,GridArea:Va}):e};try{w.displayName="Header",w.__docgenInfo={description:"",displayName:"Header",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},isAdmin:{defaultValue:null,description:"",name:"isAdmin",required:!1,type:{name:"boolean"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!1,type:{name:"boolean"}},adminSearch:{defaultValue:null,description:"",name:"adminSearch",required:!1,type:{name:"any"}},adminNavLinks:{defaultValue:null,description:"",name:"adminNavLinks",required:!1,type:{name:"any"}},topNavBar:{defaultValue:null,description:"",name:"topNavBar",required:!1,type:{name:"any"}},logotype:{defaultValue:null,description:"",name:"logotype",required:!1,type:{name:"any"}},searchNavBar:{defaultValue:null,description:"",name:"searchNavBar",required:!1,type:{name:"any"}},searchNavLinks:{defaultValue:null,description:"",name:"searchNavLinks",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"any"}},navigationTabs:{defaultValue:null,description:"",name:"navigationTabs",required:!1,type:{name:"any"}},cartSidebar:{defaultValue:null,description:"",name:"cartSidebar",required:!1,type:{name:"any"}}}}}catch{}const f=""+new URL("Spendrups_logo_vertical-f58d5291.svg",import.meta.url).href,Da={title:"Design System/Organisms/Header",component:w},k={render:e=>{const[n,o]=d.useState(!1),[r,L]=d.useState({});d.useState(!1);const[T,Fa]=d.useState(""),[Ga,aa]=d.useState([]),[ea,ja]=d.useState(!1),[Ea,ra]=d.useState(!1),na=()=>o(!n),I=()=>ra(!0),H=s=>{console.log(`Trigger set delivery day - ${s.toISOString().split("T")[0]}`)},oa=()=>{console.log("Handle logout...")};return S.useEffect(()=>{let s=new RegExp(T.toLowerCase(),"i");aa(_a.filter(c=>T&&(c.name&&s.test(c.name.toLowerCase())||c.companyName&&s.test(c.companyName.toLowerCase())||c.companyId&&s.test(c.companyId.toString().toLowerCase())||c.email&&s.test(c.email.toLowerCase()))))},[T]),a("header",{style:{backgroundColor:"var(--sub-nav-background)",position:"sticky",top:0,width:"100%",zIndex:99999},children:t(C,{children:[a(da,{...e.topNavBar,onClick:oa,onSelectDate:H,isAdmin:e.isAdmin,hasActiveUser:(r==null?void 0:r.name)&&(r==null?void 0:r.name.length)>0}),a(ya,{breakpoint:"lg",children:s=>s&&t(C,{children:[a(U,{padding:1,children:t(x,{flexDirection:"column",children:[t(x,{alignItems:"center",justifyContent:"space-between",stretch:!0,children:[a(pa,{...e.logotype}),t(O,{children:[a(b,{icon:"icon-user",isLink:!1,linkComponent:void 0,onClick:()=>{},size:"large",isTransparent:!0}),a(b,{icon:"icon-settings",isLink:!1,linkComponent:void 0,onClick:()=>{},size:"large",isTransparent:!0}),a(fa,{onClick:na,isOpen:n})]})]}),a(z,{...e.searchNavBar,isOpen:!0})]})}),a(ua,{...e.navigationTabs,isOpen:n})]})}),a(Na,{breakpoint:"lg",children:s=>s&&t(C,{children:[a(U,{padding:[1,0],children:t(x,{children:[a(z,{...e.searchNavBar,isOpen:ea}),t(O,{children:[t(q,{position:"apart",align:"center",direction:"row",children:[a(b,{icon:"icon-heart",isLink:!1,linkComponent:void 0,size:"medium",isTransparent:!0}),a(b,{icon:"icon-shopping-cart",isLink:!1,linkComponent:void 0,onClick:I?()=>I():()=>{},size:"medium",isTransparent:!0})]}),t(q,{position:"apart",children:[a(ma,{...ga.args,onDateSelected:H}),a(ha,{...Sa.args})]})]})]})}),a(la,{...e.navigation,isOpen:n})]})})]})})}},p={...k,args:{topNavBar:ia.args,navigation:v.args,navigationTabs:N.args,searchNavBar:_.args,logotype:{logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:f,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:y.args}},m={...k,args:{isLoggedIn:!0,topNavBar:ca.args,navigation:v.args,navigationTabs:N.args,searchNavBar:_.args,searchNavLinks:l.args,logotype:{logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:f,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:y.args}},g={...k,args:{isAdmin:!0,isLoggedIn:!0,adminSearch:Z.args,adminNavLinks:l.args,topNavBar:A.args,navigation:v.args,navigationTabs:N.args,searchNavBar:_.args,searchNavLinks:l.args,logotype:{logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:f,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:y.args}},u={...k,args:{isAdmin:!0,isLoggedIn:!0,adminSearch:va.args,adminNavLinks:l.args,topNavBar:A.args,navigation:v.args,navigationTabs:N.args,searchNavBar:_.args,searchNavLinks:l.args,logotype:{logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:f,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:y.args}},h={...k,args:{isAdmin:!0,adminSearch:Z.args,adminNavLinks:l.args,topNavBar:A.args,navigation:v.args,navigationTabs:N.args,searchNavBar:_.args,searchNavLinks:l.args,logotype:{logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:f,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},linkComponent:"a"},cartSidebar:y.args}};var P,V,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(V=p.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var D,M,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var G,j,E;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(E=(j=g.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var W,Q,$;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var J,K,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Ma=["HeaderStory_Guest_User","HeaderStory_Logged_In_User","HeaderStory_Admin_User","HeaderStory_Admin_Search_Loading","HeaderStory_Admin_Selects_Customer_Flow"],ue=Object.freeze(Object.defineProperty({__proto__:null,HeaderStory_Admin_Search_Loading:u,HeaderStory_Admin_Selects_Customer_Flow:h,HeaderStory_Admin_User:g,HeaderStory_Guest_User:p,HeaderStory_Logged_In_User:m,__namedExportsOrder:Ma,default:Da},Symbol.toStringTag,{value:"Module"}));export{w as H,m as a,p as b,g as c,ue as h};
//# sourceMappingURL=header.stories-d0e71663.js.map

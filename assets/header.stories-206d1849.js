import{r as c,R as y}from"./index-6f814c40.js";import{c as L}from"./index-74f03c09.js";import{u as N}from"./index-cb7985c3.js";import{a as e,j as m}from"./jsx-runtime-76c5c2e2.js";import{m as f,N as k,a as S}from"./navigation.stories-27c53d6b.js";import{T as b,a as B}from"./top-nav-bar.stories-db120716.js";import{S as x,a as q}from"./search-nav-bar.stories-0ada2952.js";import{L as j}from"./logotype-9db7e6da.js";import{I as u}from"./icon-375c4d56.js";import{l as O}from"./Spendrups_logo_desktop_horizontal-1d0ea7ab.js";const T="_header_jq92d_1",w="_navigationOpen_jq92d_51",C="_menuButton_jq92d_65",H="_open_jq92d_85",I="_icon_jq92d_89",E="_top_jq92d_117",M="_logo_jq92d_129",R="_search_jq92d_129",z="_searchNavLinks_jq92d_129",V="_nav_jq92d_51",P="_btn_jq92d_201",U="_mobileNav_jq92d_227",l={header:T,navigationOpen:w,menuButton:C,open:H,icon:I,top:E,logo:M,search:R,searchNavLinks:z,nav:V,btn:P,mobileNav:U},W=a=>{const[n,t]=c.useState();return c.useLayoutEffect(()=>{var o;t((o=a==null?void 0:a.current)==null?void 0:o.getBoundingClientRect())},[a]),N(a,o=>t(o.contentRect)),c.useEffect(()=>console.log(n),[n]),n},D=({children:a,area:n})=>e("div",{className:l[n],"data-area":n,children:a}),$=({children:a,isOpen:n})=>{const t=c.useRef(null),o=W(t)||{width:0,height:0};return e(f.header,{className:l.header,initial:!1,animate:n?"open":"closed",ref:t,custom:o==null?void 0:o.width,children:a})},p=({children:a,isOpen:n})=>{const t=s=>e(f.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...s}),o=({onClick:s})=>e("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":n,onClick:s,className:L(l.menuButton,n&&l.open),children:m("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e(t,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),e(t,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),e(t,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})});return typeof a=="function"?a({Wrapper:$,Button:o,GridArea:D}):a};try{p.displayName="Header",p.__docgenInfo={description:"",displayName:"Header",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},topNavBar:{defaultValue:null,description:"",name:"topNavBar",required:!1,type:{name:"any"}},logotype:{defaultValue:null,description:"",name:"logotype",required:!1,type:{name:"any"}},searchNavBar:{defaultValue:null,description:"",name:"searchNavBar",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"any"}},headerLinkList:{defaultValue:null,description:"",name:"headerLinkList",required:!1,type:{name:"any"}}}}}catch{}const F="_navLinks_1gomt_1",J="_navLinksIcon_1gomt_7",d={navLinks:F,navLinksIcon:J},K=()=>m("div",{className:d.navLinks,children:[e(u,{icon:"icon-heart",className:d.navLinksIcon}),e(u,{icon:"icon-shopping-cart",className:d.navLinksIcon})]}),Q=""+new URL("Spendrups_logo_mobile_vertical-86d2fa6e.svg",import.meta.url).href,X=""+new URL("Spendrups_logo_mobile_horizontal-cd1c493b.svg",import.meta.url).href,Y={title:"Design System/Organisms/Header",component:p},Z={render:a=>{const[n,t]=y.useState(!1),o=()=>t(!n);return e(p,{isOpen:n,children:({Wrapper:s,Button:g,GridArea:r})=>m(s,{isOpen:n,children:[e(r,{area:"top",children:e(B,{...a.topNavBar})}),e(r,{area:"logo",children:e(j,{...a.logotype})}),e(r,{area:"search",children:e(q,{...a.searchNavBar})}),e(r,{area:"searchNavLinks",children:e(K,{})}),e(r,{area:"btn",children:e(g,{onClick:o})}),e(r,{area:"nav",children:e(S,{...a.navigation,isOpen:n})})]})})}},i={...Z,args:{topNavBar:b.args,navigation:k.args,searchNavBar:x.args,logotype:{logo:{src:O,alt:"logo",href:"/",id:"logo",sources:[{srcset:Q,media:"(max-width: 767px)"},{srcset:X,media:"(min-width: 768px)"}]},linkComponent:"a"},headerLinkList:{links:[{navLinkType:"favorites",href:"/favorites",text:"My favorites",isExternal:!1},{navLinkType:"cart",href:"/cart",text:"Cart",isExternal:!1}],linkComponent:"a"}}};var _,v,h;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...HeaderStoryTemplate,
  args: {
    topNavBar: TopNavBarStory.args,
    navigation: NavigationStory.args,
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
          srcset: logotype_mobile_horiontal,
          media: \`(min-width: 768px)\`
        }]
      },
      linkComponent: 'a'
    },
    headerLinkList: {
      links: [{
        navLinkType: 'favorites',
        href: '/favorites',
        text: 'My favorites',
        isExternal: false
      }, {
        navLinkType: 'cart',
        href: '/cart',
        text: 'Cart',
        isExternal: false
      }],
      linkComponent: 'a'
    }
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const A=["HeaderStory"],le=Object.freeze(Object.defineProperty({__proto__:null,HeaderStory:i,__namedExportsOrder:A,default:Y},Symbol.toStringTag,{value:"Module"}));export{p as H,K as N,i as a,le as h};
//# sourceMappingURL=header.stories-206d1849.js.map

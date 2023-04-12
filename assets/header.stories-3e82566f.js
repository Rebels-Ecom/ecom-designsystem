import{r as c,R as N}from"./index-6f814c40.js";import{c as L}from"./index-74f03c09.js";import{u as k}from"./index-cb7985c3.js";import{a as e,j as m}from"./jsx-runtime-76c5c2e2.js";import{m as g,N as B,a as S}from"./navigation.stories-de61779a.js";import{T as x,a as b}from"./top-nav-bar.stories-db120716.js";import{S as q,a as j}from"./search-nav-bar.stories-b61fe7c3.js";import{L as O}from"./logotype-9675048d.js";import{I as u}from"./icon-375c4d56.js";import{l as v}from"./Spendrups_logo_horizontal-038b757f.js";const T="_header_jq92d_1",w="_navigationOpen_jq92d_51",C="_menuButton_jq92d_65",H="_open_jq92d_85",I="_icon_jq92d_89",E="_top_jq92d_117",M="_logo_jq92d_129",z="_search_jq92d_129",R="_searchNavLinks_jq92d_129",V="_nav_jq92d_51",P="_btn_jq92d_201",W="_mobileNav_jq92d_227",l={header:T,navigationOpen:w,menuButton:C,open:H,icon:I,top:E,logo:M,search:z,searchNavLinks:R,nav:V,btn:P,mobileNav:W},D=a=>{const[n,o]=c.useState();return c.useLayoutEffect(()=>{var t;o((t=a==null?void 0:a.current)==null?void 0:t.getBoundingClientRect())},[a]),k(a,t=>o(t.contentRect)),c.useEffect(()=>console.log(n),[n]),n},U=({children:a,area:n})=>e("div",{className:l[n],"data-area":n,children:a}),$=({children:a,isOpen:n})=>{const o=c.useRef(null),t=D(o)||{width:0,height:0};return e(g.header,{className:l.header,initial:!1,animate:n?"open":"closed",ref:o,custom:t==null?void 0:t.width,children:a})},p=({children:a,isOpen:n})=>{const o=s=>e(g.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...s}),t=({onClick:s})=>e("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":n,onClick:s,className:L(l.menuButton,n&&l.open),children:m("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e(o,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),e(o,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),e(o,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})});return typeof a=="function"?a({Wrapper:$,Button:t,GridArea:U}):a};try{p.displayName="Header",p.__docgenInfo={description:"",displayName:"Header",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},topNavBar:{defaultValue:null,description:"",name:"topNavBar",required:!1,type:{name:"any"}},logotype:{defaultValue:null,description:"",name:"logotype",required:!1,type:{name:"any"}},searchNavBar:{defaultValue:null,description:"",name:"searchNavBar",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"any"}},headerLinkList:{defaultValue:null,description:"",name:"headerLinkList",required:!1,type:{name:"any"}}}}}catch{}const F="_navLinks_1gomt_1",J="_navLinksIcon_1gomt_7",d={navLinks:F,navLinksIcon:J},K=()=>m("div",{className:d.navLinks,children:[e(u,{icon:"icon-heart",className:d.navLinksIcon}),e(u,{icon:"icon-shopping-cart",className:d.navLinksIcon})]}),Q=""+new URL("Spendrups_logo_vertical-f58d5291.svg",import.meta.url).href,X={title:"Design System/Organisms/Header",component:p},Y={render:a=>{const[n,o]=N.useState(!1),t=()=>o(!n);return e(p,{isOpen:n,children:({Wrapper:s,Button:y,GridArea:r})=>m(s,{isOpen:n,children:[e(r,{area:"top",children:e(b,{...a.topNavBar})}),e(r,{area:"logo",children:e(O,{...a.logotype})}),e(r,{area:"search",children:e(j,{...a.searchNavBar})}),e(r,{area:"searchNavLinks",children:e(K,{})}),e(r,{area:"btn",children:e(y,{onClick:t})}),e(r,{area:"nav",children:e(S,{...a.navigation,isOpen:n})})]})})}},i={...Y,args:{topNavBar:x.args,navigation:B.args,searchNavBar:q.args,logotype:{logo:{src:v,alt:"logo",href:"/",id:"logo",sources:[{srcset:Q,media:"(max-width: 767px)"},{srcset:v,media:"(min-width: 768px)"}]},linkComponent:"a"},headerLinkList:{links:[{navLinkType:"favorites",href:"/favorites",text:"My favorites",isExternal:!1},{navLinkType:"cart",href:"/cart",text:"Cart",isExternal:!1}],linkComponent:"a"}}};var _,h,f;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
          srcset: logotype_desktop_horizontal,
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
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Z=["HeaderStory"],ce=Object.freeze(Object.defineProperty({__proto__:null,HeaderStory:i,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{p as H,K as N,i as a,ce as h};
//# sourceMappingURL=header.stories-3e82566f.js.map

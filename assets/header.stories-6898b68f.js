import{r}from"./index-6f814c40.js";import{c as N}from"./index-74f03c09.js";import{u as k}from"./index-cb7985c3.js";import{a as n,j as m}from"./jsx-runtime-76c5c2e2.js";import{_ as v,a as b,m as y,N as S,b as B}from"./navigation.stories-9d3b149b.js";import{T as x,a as j}from"./top-nav-bar.stories-db120716.js";import{S as q,a as w}from"./search-nav-bar.stories-a9309dae.js";import{L as C}from"./logotype-9db7e6da.js";import{I as _}from"./icon-375c4d56.js";import{l as T}from"./Spendrups_logo_desktop_horizontal-1d0ea7ab.js";const H=(e,t,o)=>{const a=t-e;return((o-e)%a+a)%a+e};function I(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=r.useRef(0),a=v(r.useState(e[o.current]),2),s=a[0],p=a[1],L=r.useCallback(function(u){o.current=typeof u!="number"?H(0,e.length,o.current+1):u,p(e[o.current])},b([e.length],v(e),!1));return[s,L]}const O="_header_jq92d_1",z="_navigationOpen_jq92d_51",E="_menuButton_jq92d_65",M="_open_jq92d_85",R="_icon_jq92d_89",V="_top_jq92d_117",P="_logo_jq92d_129",U="_search_jq92d_129",W="_searchNavLinks_jq92d_129",D="_nav_jq92d_51",$="_btn_jq92d_201",F="_mobileNav_jq92d_227",c={header:O,navigationOpen:z,menuButton:E,open:M,icon:R,top:V,logo:P,search:U,searchNavLinks:W,nav:D,btn:$,mobileNav:F},J=e=>{const[t,o]=r.useState();return r.useLayoutEffect(()=>{var a;o((a=e==null?void 0:e.current)==null?void 0:a.getBoundingClientRect())},[e]),k(e,a=>o(a.contentRect)),r.useEffect(()=>console.log(t),[t]),t},K=({children:e,area:t})=>n("div",{className:c[t],"data-area":t,children:e}),Q=({children:e,isOpen:t})=>{const o=r.useRef(null),a=J(o)||{width:0,height:0};return n(y.header,{className:c.header,initial:!1,animate:t?"open":"closed",ref:o,custom:a==null?void 0:a.width,children:e})},l=({children:e})=>{const[t,o]=I(!1,!0),a=p=>n(y.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...p}),s=()=>n("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":t,onClick:()=>o(),className:N(c.menuButton,t&&c.open),children:m("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[n(a,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),n(a,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),n(a,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})});return typeof e=="function"?e({Wrapper:Q,Button:s,GridArea:K},t):e};try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{topNavBar:{defaultValue:null,description:"",name:"topNavBar",required:!1,type:{name:"any"}},logotype:{defaultValue:null,description:"",name:"logotype",required:!1,type:{name:"any"}},searchNavBar:{defaultValue:null,description:"",name:"searchNavBar",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"any"}},headerLinkList:{defaultValue:null,description:"",name:"headerLinkList",required:!1,type:{name:"any"}}}}}catch{}const X="_navLinks_1gomt_1",Y="_navLinksIcon_1gomt_7",d={navLinks:X,navLinksIcon:Y},Z=()=>m("div",{className:d.navLinks,children:[n(_,{icon:"icon-heart",className:d.navLinksIcon}),n(_,{icon:"icon-shopping-cart",className:d.navLinksIcon})]}),A=""+new URL("Spendrups_logo_mobile_vertical-86d2fa6e.svg",import.meta.url).href,G=""+new URL("Spendrups_logo_mobile_horizontal-cd1c493b.svg",import.meta.url).href,ee={title:"Design System/Organisms/Header",component:l},ae={render:e=>n(l,{children:({Wrapper:t,Button:o,GridArea:a},s)=>m(t,{isOpen:s,children:[n(a,{area:"top",children:n(j,{...e.topNavBar})}),n(a,{area:"logo",children:n(C,{...e.logotype})}),n(a,{area:"search",children:n(w,{...e.searchNavBar})}),n(a,{area:"searchNavLinks",children:n(Z,{})}),n(a,{area:"btn",children:n(o,{})}),n(a,{area:"nav",children:n(B,{...e.navigation,isOpen:s})})]})})},i={...ae,args:{topNavBar:x.args,navigation:S.args,searchNavBar:q.args,logotype:{logo:{src:T,alt:"logo",href:"/",id:"logo",sources:[{srcset:A,media:"(max-width: 767px)"},{srcset:G,media:"(min-width: 768px)"}]},linkComponent:"a"},headerLinkList:{links:[{navLinkType:"favorites",href:"/favorites",text:"My favorites",isExternal:!1},{navLinkType:"cart",href:"/cart",text:"Cart",isExternal:!1}],linkComponent:"a"}}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ne=["HeaderStory"],ue=Object.freeze(Object.defineProperty({__proto__:null,HeaderStory:i,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{l as H,Z as N,i as a,ue as h};
//# sourceMappingURL=header.stories-6898b68f.js.map

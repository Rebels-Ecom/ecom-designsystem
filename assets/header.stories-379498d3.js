import{r as l,R as _}from"./index-6f814c40.js";import{c as j}from"./index-74f03c09.js";import{u as T}from"./index-cb7985c3.js";import{j as o,a as e,F as O}from"./jsx-runtime-76c5c2e2.js";import{m as b}from"./index-bacfeb97.js";import{T as H,a as w}from"./top-nav-bar.stories-07bb92db.js";import{N as E,a as z}from"./navigation.stories-e5321186.js";import{S as M,a as R}from"./search-nav-bar.stories-c685be95.js";import{L as I}from"./logotype-f3b15a0f.js";import{I as g}from"./icon-button-c73945f1.js";import{l as y}from"./Spendrups_logo_horizontal-038b757f.js";import{C as V}from"./cart-sidebar-4baa0967.js";import{C as P,a as F}from"./cart-product-list.stories-621eec58.js";import{D}from"./drawer-sidebar-cee9680d.js";import{G as u}from"./group-wrapper-8dd6fc40.js";import{H as k}from"./heading-6b05711d.js";import{B as L}from"./button-b550aacc.js";import{a as W}from"./cart-product.stories-3b2b3c29.js";import{L as K}from"./link-button-80edf68b.js";import{F as U}from"./form-group-2e5fc1d5.js";import{T as $}from"./toggle-switch-3de5b197.js";const G="_navLinks_191cd_1",J={navLinks:G},h=({onClickCart:a})=>o("div",{className:J.navLinks,children:[e(g,{icon:"icon-heart",isLink:!1,linkComponent:void 0,size:"medium",isTransparent:!0}),e(g,{icon:"icon-shopping-cart",isLink:!1,linkComponent:void 0,onClick:a?()=>a():()=>{},size:"medium",isTransparent:!0})]});try{h.displayName="NavLinks",h.__docgenInfo={description:"",displayName:"NavLinks",props:{onClickCart:{defaultValue:null,description:"",name:"onClickCart",required:!1,type:{name:"CallableFunction"}}}}}catch{}const Q="_header_jq92d_1",X="_navigationOpen_jq92d_51",Y="_menuButton_jq92d_65",Z="_open_jq92d_85",A="_icon_jq92d_89",ee="_top_jq92d_117",ae="_logo_jq92d_129",ne="_search_jq92d_129",te="_searchNavLinks_jq92d_129",re="_nav_jq92d_51",oe="_btn_jq92d_201",ie="_mobileNav_jq92d_227",d={header:Q,navigationOpen:X,menuButton:Y,open:Z,icon:A,top:ee,logo:ae,search:ne,searchNavLinks:te,nav:re,btn:oe,mobileNav:ie},se=a=>{const[n,r]=l.useState();return l.useLayoutEffect(()=>{var t;r((t=a==null?void 0:a.current)==null?void 0:t.getBoundingClientRect())},[a]),T(a,t=>r(t.contentRect)),l.useEffect(()=>console.log(n),[n]),n},ce=({children:a,area:n})=>e("div",{className:d[n],"data-area":n,children:a}),le=({children:a,isOpen:n})=>{const r=l.useRef(null),t=se(r)||{width:0,height:0};return e(b.header,{className:d.header,initial:!1,animate:n?"open":"closed",ref:r,custom:t==null?void 0:t.width,children:a})},p=({children:a,isOpen:n})=>{const r=i=>e(b.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...i}),t=({onClick:i})=>e("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":n,onClick:i,className:j(d.menuButton,n&&d.open),children:o("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e(r,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),e(r,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),e(r,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})});return typeof a=="function"?a({Wrapper:le,Button:t,GridArea:ce}):a};try{p.displayName="Header",p.__docgenInfo={description:"",displayName:"Header",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},topNavBar:{defaultValue:null,description:"",name:"topNavBar",required:!1,type:{name:"any"}},logotype:{defaultValue:null,description:"",name:"logotype",required:!1,type:{name:"any"}},searchNavBar:{defaultValue:null,description:"",name:"searchNavBar",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"any"}},headerLinkList:{defaultValue:null,description:"",name:"headerLinkList",required:!1,type:{name:"any"}},cartSidebar:{defaultValue:null,description:"",name:"cartSidebar",required:!1,type:{name:"any"}}}}}catch{}const de=""+new URL("Spendrups_logo_vertical-f58d5291.svg",import.meta.url).href,pe={title:"Design System/Organisms/Header",component:p},me={render:a=>{var f,v;const[n,r]=_.useState(!1),[t,i]=_.useState(!1),B=()=>r(!n),x=()=>i(!0);return o(O,{children:[e(p,{isOpen:n,children:({Wrapper:m,Button:q,GridArea:s})=>o(m,{isOpen:n,children:[e(s,{area:"top",children:e(w,{...a.topNavBar})}),e(s,{area:"logo",children:e(I,{...a.logotype})}),e(s,{area:"search",children:e(R,{...a.searchNavBar})}),e(s,{area:"searchNavLinks",children:e(h,{onClickCart:x})}),e(s,{area:"btn",children:e(q,{onClick:B})}),e(s,{area:"nav",children:e(z,{...a.navigation,isOpen:n})})]})}),e(D,{onClose:()=>i(!1),isOpen:t,children:o(V,{classNames:["light"],children:[o(u,{position:"apart",children:[e(k,{order:3,children:"Kundvagn"}),e(k,{order:3,children:"1378,00 kr"})]}),o(u,{children:[e(L,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),e(L,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),e(F,{children:(v=(f=a.cartSidebar)==null?void 0:f.children)==null?void 0:v.map(m=>e(W,{...m},Math.random()))}),o(u,{children:[e(K,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),e(U,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",children:e($,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},c={...me,args:{topNavBar:H.args,navigation:E.args,searchNavBar:M.args,logotype:{logo:{src:y,alt:"logo",href:"/",id:"logo",sources:[{srcset:de,media:"(max-width: 767px)"},{srcset:y,media:"(min-width: 768px)"}]},linkComponent:"a"},headerLinkList:{links:[{navLinkType:"favorites",href:"/favorites",text:"My favorites",isExternal:!1},{navLinkType:"cart",href:"/cart",text:"Cart",isExternal:!1}],linkComponent:"a"},cartSidebar:P.args}};var N,S,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    },
    cartSidebar: CartProductListStory.args
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const ue=["HeaderStory"],Me=Object.freeze(Object.defineProperty({__proto__:null,HeaderStory:c,__namedExportsOrder:ue,default:pe},Symbol.toStringTag,{value:"Module"}));export{p as H,h as N,c as a,Me as h};
//# sourceMappingURL=header.stories-379498d3.js.map

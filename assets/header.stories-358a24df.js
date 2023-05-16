import{r as d,R as g}from"./index-6f814c40.js";import{c as j}from"./index-74f03c09.js";import{u as O}from"./index-cb7985c3.js";import{a as e,j as o,F as T}from"./jsx-runtime-76c5c2e2.js";import{m as L}from"./index-bacfeb97.js";import{T as H,a as w}from"./top-nav-bar.stories-25da37d1.js";import{N as E,a as M}from"./navigation.stories-dae31221.js";import{S as R,a as V}from"./search-nav-bar.stories-185c15c1.js";import{L as z}from"./logotype-f3b15a0f.js";import{S as P,a as I}from"./search-nav-bar-links.stories-fb46a9e7.js";import{l as v}from"./Spendrups_logo_horizontal-038b757f.js";import{C as D}from"./cart-sidebar-4baa0967.js";import{C as F}from"./cart-product-list-a1b9ae6a.js";import{CartProductListStory as W}from"./cart-product-list.stories-46dddbc7.js";import{D as K}from"./drawer-sidebar-7a8d13e3.js";import{G as u}from"./group-wrapper-a93e0b46.js";import{H as y}from"./heading-43e58b60.js";import{B as _}from"./button-c74bbcb5.js";import{a as U}from"./cart-product.stories-00eff095.js";import{L as $}from"./link-button-2405d582.js";import{F as G}from"./form-group-d97f30fc.js";import{T as J}from"./toggle-switch-3de5b197.js";const Q="_header_jq92d_1",X="_navigationOpen_jq92d_51",Y="_menuButton_jq92d_65",Z="_open_jq92d_85",A="_icon_jq92d_89",ee="_top_jq92d_117",ae="_logo_jq92d_129",re="_search_jq92d_129",te="_searchNavLinks_jq92d_129",ne="_nav_jq92d_51",oe="_btn_jq92d_201",se="_mobileNav_jq92d_227",p={header:Q,navigationOpen:X,menuButton:Y,open:Z,icon:A,top:ee,logo:ae,search:re,searchNavLinks:te,nav:ne,btn:oe,mobileNav:se},ie=a=>{const[r,n]=d.useState();return d.useLayoutEffect(()=>{var t;n((t=a==null?void 0:a.current)==null?void 0:t.getBoundingClientRect())},[a]),O(a,t=>n(t.contentRect)),d.useEffect(()=>console.log(r),[r]),r},ce=({children:a,area:r})=>e("div",{className:p[r],"data-area":r,children:a}),le=({children:a,isOpen:r})=>{const n=d.useRef(null),t=ie(n)||{width:0,height:0};return e(L.header,{className:p.header,initial:!1,animate:r?"open":"closed",ref:n,custom:t==null?void 0:t.width,children:a})},m=({children:a,isOpen:r})=>{const n=s=>e(L.path,{fill:"transparent",strokeWidth:"3",strokeLinecap:"round",...s}),t=({onClick:s})=>e("button",{id:"navigation-menu-btn",type:"button","aria-label":"menu","aria-controls":"navigation-menu","aria-expanded":r,onClick:s,className:j(p.menuButton,r&&p.open),children:o("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[e(n,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),e(n,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),e(n,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})});return typeof a=="function"?a({Wrapper:le,Button:t,GridArea:ce}):a};try{m.displayName="Header",m.__docgenInfo={description:"",displayName:"Header",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},topNavBar:{defaultValue:null,description:"",name:"topNavBar",required:!1,type:{name:"any"}},logotype:{defaultValue:null,description:"",name:"logotype",required:!1,type:{name:"any"}},searchNavBar:{defaultValue:null,description:"",name:"searchNavBar",required:!1,type:{name:"any"}},searchNavLinks:{defaultValue:null,description:"",name:"searchNavLinks",required:!1,type:{name:"any"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"any"}},headerLinkList:{defaultValue:null,description:"",name:"headerLinkList",required:!1,type:{name:"any"}},cartSidebar:{defaultValue:null,description:"",name:"cartSidebar",required:!1,type:{name:"any"}}}}}catch{}const de=""+new URL("Spendrups_logo_vertical-f58d5291.svg",import.meta.url).href,pe={title:"Design System/Organisms/Header",component:m},me={render:a=>{var h,f;const[r,n]=g.useState(!1),[t,s]=g.useState(!1),b=()=>n(!r),B=()=>s(!0),C=()=>s(!1),x=c=>{console.log(`Trigger set delivery day - ${c.toISOString().split("T")[0]}`)};return o(T,{children:[e(m,{isOpen:r,children:({Wrapper:c,Button:q,GridArea:i})=>o(c,{isOpen:r,children:[e(i,{area:"top",children:e(w,{...a.topNavBar})}),e(i,{area:"logo",children:e(z,{...a.logotype})}),e(i,{area:"search",children:e(V,{...a.searchNavBar})}),e(i,{area:"searchNavLinks",children:e(I,{...a.searchNavLinks,onClickCart:B,onClickSelectDate:x,isMyAccountPage:!0})}),e(i,{area:"btn",children:e(q,{onClick:b})}),e(i,{area:"nav",children:e(M,{...a.navigation,isOpen:r})})]})}),e(K,{onClose:C,isOpen:t,children:o(D,{classNames:["light"],children:[o(u,{position:"apart",children:[e(y,{order:3,children:"Kundvagn"}),e(y,{order:3,children:"1378,00 kr"})]}),o(u,{children:[e(_,{type:"button",surface:"secondary",children:"Hämta inköpslista",iconRight:{icon:"icon-layers"},rounded:!0,onClick:()=>{}}),e(_,{type:"button",surface:"secondary",children:"Senaste order",iconRight:{icon:"icon-package"},rounded:!0,onClick:()=>{}})]}),e(F,{children:(f=(h=a.cartSidebar)==null?void 0:h.children)==null?void 0:f.map(c=>e(U,{...c},Math.random()))}),o(u,{children:[e($,{surface:"primary",isExternal:!0,href:"?path=/story/design-system-organisms-cart--cart-story",children:"Go to cart"}),e(G,{label:"Spara som inköpslista",formElementId:"toggle-save-shopping-list",children:e(J,{id:"toggle-save-shopping-list",onChangeToggle:()=>{}})})]})]})})]})}},l={...me,args:{topNavBar:H.args,navigation:E.args,searchNavBar:R.args,searchNavLinks:P.args,logotype:{logo:{src:v,alt:"logo",href:"/",id:"logo",sources:[{srcset:de,media:"(max-width: 767px)"},{srcset:v,media:"(min-width: 768px)"}]},linkComponent:"a"},headerLinkList:{links:[{navLinkType:"favorites",href:"/favorites",text:"My favorites",isExternal:!1},{navLinkType:"cart",href:"/cart",text:"Cart",isExternal:!1}],linkComponent:"a"},cartSidebar:W.args}};var S,k,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...HeaderStoryTemplate,
  args: {
    topNavBar: TopNavBarStory.args,
    navigation: NavigationStory.args,
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
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const ue=["HeaderStory"],Re=Object.freeze(Object.defineProperty({__proto__:null,HeaderStory:l,__namedExportsOrder:ue,default:pe},Symbol.toStringTag,{value:"Module"}));export{m as H,l as a,Re as h};
//# sourceMappingURL=header.stories-358a24df.js.map

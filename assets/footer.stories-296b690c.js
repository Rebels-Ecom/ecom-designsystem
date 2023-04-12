import{N as I}from"./newsletter-f23f9830.js";import{r as p}from"./index-6f814c40.js";import{F as v,a as w}from"./footer-top-bar.stories-006c2796.js";import{L as S}from"./logotype-9675048d.js";import{j as c,F as N,a as e}from"./jsx-runtime-76c5c2e2.js";import{S as g}from"./social-media-link-74c91d5d.js";import{l as f}from"./Spendrups_logo_horizontal-038b757f.js";const C="_footer_1gti9_1",V="_footerLeft_1gti9_13",T="_linkLogo_1gti9_22",M="_newsletter_1gti9_27",A="_linkList_1gti9_31",R="_linkListItem_1gti9_49",q="_links_1gti9_64",P="_linkItem_1gti9_76",O="_innerWrapper_1gti9_80",j="_socialMediaIcon_1gti9_98",$="_addressContainer_1gti9_103",z="_bottomBar_1gti9_111",G="_socialMediaIconContainer_1gti9_121",n={footer:C,footerLeft:V,linkLogo:T,newsletter:M,linkList:A,linkListItem:R,links:q,linkItem:P,innerWrapper:O,socialMediaIcon:j,addressContainer:$,bottomBar:z,socialMediaIconContainer:G},K=({logo:r,address:i,addressLabel:o,children:s,linkComponent:t,newsletterId:l,newsletterPlaceholder:a})=>{const[k,u]=p.useState(!1),[m,E]=p.useState(""),[L,b]=p.useState(!1),B=F=>{alert(`You signed up for Spendrups newsletter, with email: ${F}`)};return c("div",{className:n.footerLeft,children:[r&&e(S,{className:n.linkLogo,logo:r,linkComponent:t}),e(I,{id:l,inputValue:m,setInputValue:E,isErroneous:L,setIsFocused:u,setIsErroneous:b,placeholder:a,signupForNewsletter:B,className:n.newsletter}),c("div",{className:n.addressContainer,children:[e("p",{children:o}),e("p",{children:i})]}),e("div",{className:n.socialMediaIconContainer,children:s})]})},D=({footerLinks:r,linkComponent:i})=>!Array.isArray(r)||!r.length?null:e("ul",{className:n.linkList,children:r.map((o,s)=>c("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:o.title}),Array.isArray(o.links)&&o.links&&e("ul",{className:n.links,children:o.links.map((t,l)=>e("li",{className:n.linkItem,children:t.isExternal?e("a",{href:t.href,target:t.target,className:"body",children:t.children}):e(i,{to:t.href,children:t.children})},`${t.children}-${l}`))})]},`${o.title}-${s}`))}),W=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),h=({footerTopBarLinks:r,logo:i,address:o,addressLabel:s,children:t,links:l=[],linkComponent:a,newsletterId:k,newsletterPlaceholder:u,bottomBarText:m})=>c(N,{children:[e(v,{footerTopBarLinks:r,linkComponent:a}),c("footer",{className:n.footer,children:[e(K,{logo:i,address:o,addressLabel:s,linkComponent:a,newsletterId:k,newsletterPlaceholder:u,children:t}),e(D,{footerLinks:l,linkComponent:a})]}),e(W,{bottomBarText:m})]});try{h.displayName="Footer",h.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"INavigationLogo"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const Y={title:"Design System/Organisms/Footer",component:h},H={render:r=>e(h,{...r})},d={...H,args:{footerTopBarLinks:w.args.footerTopBarLinks,logo:{src:f,alt:"logo",href:"/",id:"logo",sources:[{srcset:f,media:"(max-width: 767px)"},{srcset:f,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(g,{icon:"icon-facebook",children:void 0,href:""}),e(g,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var _,x,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...FooterTemplate,
  args: {
    footerTopBarLinks: FooterTopBarStory.args.footerTopBarLinks,
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [{
        srcset: logotype_mobile_horiontal,
        media: \`(max-width: 767px)\`
      }, {
        srcset: logotype_desktop_horizontal,
        media: \`(min-width: 768px)\`
      }]
    },
    addressLabel: 'Besöksadress: ',
    address: 'Huvudkontoret Vårby Allé 39, 143 30 Vårby',
    children: [<SocialMediaLink icon={'icon-facebook'} children={undefined} href={''} />, <SocialMediaLink icon={'icon-instagram'} children={undefined} href={''} />],
    newsletterId: 'footerNewsLetterId',
    newsletterPlaceholder: 'Skriv din email address',
    links: [{
      title: 'Kategorier',
      links: [{
        href: '/#ol',
        children: 'Öl',
        isExternal: true
      }, {
        href: '/#vin',
        children: 'Vin',
        isExternal: true
      }, {
        href: '/#sprit',
        children: 'Sprit',
        isExternal: true
      }, {
        href: '/#cider',
        children: 'Cider',
        isExternal: true
      }, {
        href: '/#blanddryck',
        children: 'FAB / Blanddryck',
        isExternal: true
      }, {
        href: '/#vatten',
        children: 'Vatten',
        isExternal: true
      }, {
        href: '/#lask',
        children: 'Läsk',
        isExternal: true
      }, {
        href: '/#fruktdryck',
        children: 'Fruktdryck',
        isExternal: true
      }, {
        href: '/#mixers',
        children: 'Mixers',
        isExternal: true
      }, {
        href: '/#ovriga-produkter',
        children: 'Övriga produkter',
        isExternal: true
      }]
    }, {
      title: 'Konto',
      links: [{
        href: '/#mitt-konto',
        children: 'Mitt konto',
        isExternal: true
      }, {
        href: '/#faktoror',
        children: 'Faktoror',
        isExternal: true
      }, {
        href: '/#returer',
        children: 'Returer',
        isExternal: true
      }, {
        href: '/#orderhistorik',
        children: 'Orderhistorik',
        isExternal: true
      }, {
        href: '/#favoriter',
        children: 'Inköpslistor / Favoriter',
        isExternal: true
      }]
    }, {
      title: 'Sidor',
      links: [{
        href: '/#blogg',
        children: 'Blogg',
        isExternal: true
      }, {
        href: '/#webshop',
        children: 'Våran webshop',
        isExternal: true
      }]
    }],
    linkComponent: 'a',
    bottomBarText: '© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved'
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const U=["FooterStory"],te=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:d,__namedExportsOrder:U,default:Y},Symbol.toStringTag,{value:"Module"}));export{h as F,d as a,te as f};
//# sourceMappingURL=footer.stories-296b690c.js.map

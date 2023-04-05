import{P as F}from"./picture-8799a0b4.js";import{N as v}from"./newsletter-db2d67d1.js";import{r as p}from"./index-6f814c40.js";import{F as w,a as N}from"./footer-top-bar.stories-f4bbc1f5.js";import{j as c,F as S,a as e}from"./jsx-runtime-76c5c2e2.js";import{S as x}from"./social-media-link-3e7ee4f3.js";import{l as f}from"./Spendrups_logo_desktop_horizontal-1d0ea7ab.js";const C="_footer_uzxrh_1",V="_footerLeft_uzxrh_13",T="_newsletter_uzxrh_22",z="_linkList_uzxrh_26",M="_linkListItem_uzxrh_44",P="_links_uzxrh_59",A="_linkItem_uzxrh_71",R="_innerWrapper_uzxrh_75",q="_linkListItem2_uzxrh_93",O="_socialMediaIcon_uzxrh_115",j="_addressContainer_uzxrh_120",$="_bottomBar_uzxrh_128",G="_socialMediaIconContainer_uzxrh_138",n={footer:C,footerLeft:V,newsletter:T,linkList:z,linkListItem:M,links:P,linkItem:A,innerWrapper:R,linkListItem2:q,socialMediaIcon:O,addressContainer:j,bottomBar:$,socialMediaIconContainer:G},K=({logo:r,address:i,addressLabel:o,children:s,linkComponent:t,newsletterId:l,newsletterPlaceholder:a})=>{const[k,h]=p.useState(!1),[m,E]=p.useState(""),[L,I]=p.useState(!1),b=B=>{alert(`You signed up for Spendrups newsletter, with email: ${B}`)};return c("div",{className:n.footerLeft,children:[r&&e(t,{to:r.href,className:n.linkLogo,children:e(F,{...r,classNamePicture:n.logoPicture,classNameImg:n.logoImg})}),e(v,{id:l,inputValue:m,setInputValue:E,isErroneous:L,setIsFocused:h,setIsErroneous:I,placeholder:a,signupForNewsletter:b,className:n.newsletter}),c("div",{className:n.addressContainer,children:[e("p",{children:o}),e("p",{children:i})]}),e("div",{className:n.socialMediaIconContainer,children:s})]})},D=({footerLinks:r,linkComponent:i})=>!Array.isArray(r)||!r.length?null:e("ul",{className:n.linkList,children:r.map((o,s)=>c("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:o.title}),Array.isArray(o.links)&&o.links&&e("ul",{className:n.links,children:o.links.map((t,l)=>e("li",{className:n.linkItem,children:t.isExternal?e("a",{href:t.href,target:t.target,className:"body",children:t.children}):e(i,{to:t.href,children:t.children})},`${t.children}-${l}`))})]},`${o.title}-${s}`))}),W=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),u=({footerTopBarLinks:r,logo:i,address:o,addressLabel:s,children:t,links:l=[],linkComponent:a,newsletterId:k,newsletterPlaceholder:h,bottomBarText:m})=>c(S,{children:[e(w,{footerTopBarLinks:r,linkComponent:a}),c("footer",{className:n.footer,children:[e(K,{logo:i,address:o,addressLabel:s,linkComponent:a,newsletterId:k,newsletterPlaceholder:h,children:t}),e(D,{footerLinks:l,linkComponent:a})]}),e(W,{bottomBarText:m})]});try{u.displayName="Footer",u.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"INavigationLogo"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const Y={title:"Design System/Organisms/Footer",component:u},H={render:r=>e(u,{...r})},d={...H,args:{footerTopBarLinks:N.args.footerTopBarLinks,logo:{src:f,alt:"logo",href:"/",id:"logo",sources:[{srcset:f,media:"(max-width: 767px)"},{srcset:f,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(x,{icon:"icon-facebook",children:void 0,href:""}),e(x,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var _,g,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const U=["FooterStory"],te=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:d,__namedExportsOrder:U,default:Y},Symbol.toStringTag,{value:"Module"}));export{u as F,d as a,te as f};
//# sourceMappingURL=footer.stories-9045a300.js.map

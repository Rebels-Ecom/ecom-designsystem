import{P as b}from"./picture-8799a0b4.js";import{N as S}from"./newsletter-db2d67d1.js";import{r as m}from"./index-6f814c40.js";import{F as B,a as F}from"./footer-top-bar.stories-9ae35ba5.js";import{j as c,F as w,a as e}from"./jsx-runtime-76c5c2e2.js";import{S as k}from"./social-media-link-18a5ed37.js";const N="_footer_uzxrh_1",C="_footerLeft_uzxrh_13",V="_newsletter_uzxrh_22",z="_linkList_uzxrh_26",T="_linkListItem_uzxrh_44",M="_links_uzxrh_59",P="_linkItem_uzxrh_71",A="_innerWrapper_uzxrh_75",R="_linkListItem2_uzxrh_93",q="_socialMediaIcon_uzxrh_115",O="_addressContainer_uzxrh_120",j="_bottomBar_uzxrh_128",$="_socialMediaIconContainer_uzxrh_138",n={footer:N,footerLeft:C,newsletter:V,linkList:z,linkListItem:T,links:M,linkItem:P,innerWrapper:A,linkListItem2:R,socialMediaIcon:q,addressContainer:O,bottomBar:j,socialMediaIconContainer:$},G=({logo:r,address:i,addressLabel:o,children:s,linkComponent:t,newsletterId:l,newsletterPlaceholder:a})=>{const[f,h]=m.useState(!1),[p,y]=m.useState(""),[E,L]=m.useState(!1),I=v=>{alert(`You signed up for Spendrups newsletter, with email: ${v}`)};return c("div",{className:n.footerLeft,children:[r&&e(t,{to:r.href,className:n.linkLogo,children:e(b,{...r,classNamePicture:n.logoPicture,classNameImg:n.logoImg})}),e(S,{id:l,inputValue:p,setInputValue:y,isErroneous:E,setIsFocused:h,setIsErroneous:L,placeholder:a,signupForNewsletter:I,className:n.newsletter}),c("div",{className:n.addressContainer,children:[e("p",{children:o}),e("p",{children:i})]}),e("div",{className:n.socialMediaIconContainer,children:s})]})},K=({footerLinks:r,linkComponent:i})=>!Array.isArray(r)||!r.length?null:e("ul",{className:n.linkList,children:r.map((o,s)=>c("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:o.title}),Array.isArray(o.links)&&o.links&&e("ul",{className:n.links,children:o.links.map((t,l)=>e("li",{className:n.linkItem,children:t.isExternal?e("a",{href:t.href,target:t.target,className:"body",children:t.children}):e(i,{to:t.href,children:t.children})},`${t.children}-${l}`))})]},`${o.title}-${s}`))}),D=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),u=({footerTopBarLinks:r,logo:i,address:o,addressLabel:s,children:t,links:l=[],linkComponent:a,newsletterId:f,newsletterPlaceholder:h,bottomBarText:p})=>c(w,{children:[e(B,{footerTopBarLinks:r,linkComponent:a}),c("footer",{className:n.footer,children:[e(G,{logo:i,address:o,addressLabel:s,linkComponent:a,newsletterId:f,newsletterPlaceholder:h,children:t}),e(K,{footerLinks:l,linkComponent:a})]}),e(D,{bottomBarText:p})]});try{u.displayName="Footer",u.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"INavigationLogo"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const W={title:"Design System/Organisms/Footer",component:u},Y={render:r=>e(u,{...r})},d={...Y,args:{footerTopBarLinks:F.args.footerTopBarLinks,logo:{src:"/logotypes/Spendrups_logo_desktop_horizontal.svg",alt:"logo",href:"/",id:"logo",sources:[{srcset:"/logotypes/Spendrups_logo_mobile_horizontal.svg",media:"(max-width: 767px)"},{srcset:"/logotypes/Spendrups_logo_desktop_horizontal.svg",media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(k,{icon:"icon-facebook",children:void 0,href:""}),e(k,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var _,g,x;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...FooterTemplate,
  args: {
    footerTopBarLinks: FooterTopBarStory.args.footerTopBarLinks,
    logo: {
      src: '/logotypes/Spendrups_logo_desktop_horizontal.svg',
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [{
        srcset: '/logotypes/Spendrups_logo_mobile_horizontal.svg',
        media: \`(max-width: 767px)\`
      }, {
        srcset: '/logotypes/Spendrups_logo_desktop_horizontal.svg',
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
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const H=["FooterStory"],re=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:d,__namedExportsOrder:H,default:W},Symbol.toStringTag,{value:"Module"}));export{u as F,d as a,re as f};
//# sourceMappingURL=footer.stories-4733a3d8.js.map

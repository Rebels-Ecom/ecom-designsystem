import{N as C}from"./newsletter-4adc4c2d.js";import{r as _}from"./index-6f814c40.js";import{F as R,a as S}from"./footer-top-bar.stories-20b3ee0f.js";import{L as A}from"./logotype-f3b15a0f.js";import{j as u,F as j,a as e}from"./jsx-runtime-76c5c2e2.js";import{S as m}from"./social-media-link-e6466fff.js";import{l as i}from"./Spendrups_logo_horizontal-038b757f.js";const M="_footer_wc0ji_1",P="_footerLeft_wc0ji_13",q="_logoLink_wc0ji_22",G="_newsletter_wc0ji_27",z="_linkList_wc0ji_31",O="_linkListItem_wc0ji_49",U="_links_wc0ji_64",D="_linkItem_wc0ji_76",Y="_innerWrapper_wc0ji_80",$="_socialMediaIcon_wc0ji_98",H="_addressContainer_wc0ji_103",K="_bottomBar_wc0ji_111",W="_socialMediaIconContainer_wc0ji_121",n={footer:M,footerLeft:P,logoLink:q,newsletter:G,linkList:z,linkListItem:O,links:U,linkItem:D,innerWrapper:Y,socialMediaIcon:$,addressContainer:H,bottomBar:K,socialMediaIconContainer:W},J=({logo:r,address:s,addressLabel:o,children:a,linkComponent:t,showNewsletter:l=!1,newsletterId:d,newsletterPlaceholder:f})=>{const[x,k]=_.useState(!1),[g,F]=_.useState(""),[I,N]=_.useState(!1),T=V=>{alert(`You signed up for Spendrups newsletter, with email: ${V}`)};return u("div",{className:n.footerLeft,children:[r&&e(A,{logo:r,linkComponent:t,className:n.logoLink}),l&&e(C,{id:d,inputValue:g,setInputValue:F,isErroneous:I,setIsFocused:k,setIsErroneous:N,placeholder:f,signupForNewsletter:T,className:n.newsletter}),u("div",{className:n.addressContainer,children:[e("p",{children:o}),e("p",{children:s})]}),e("div",{className:n.socialMediaIconContainer,children:a})]})},Q=({footerLinks:r,linkComponent:s})=>!Array.isArray(r)||r.length===0?null:e("ul",{className:n.linkList,children:r.map((o,a)=>u("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:o.title}),Array.isArray(o.links)&&o.links&&e("ul",{className:n.links,children:o.links.map((t,l)=>e("li",{className:n.linkItem,children:t.isExternal?e("a",{href:t.href,target:t.target,className:"body",children:t.children}):e(s,{to:t.href,children:t.children})},`${t.children}-${l}`))})]},`${o.title}-${a}`))}),X=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),p=({footerTopBarLinks:r,logo:s,address:o,addressLabel:a,children:t,links:l=[],linkComponent:d,showNewsletter:f,newsletterId:x,newsletterPlaceholder:k,bottomBarText:g})=>u(j,{children:[e(R,{footerTopBarLinks:r,linkComponent:d}),u("footer",{className:n.footer,children:[e(J,{logo:s,address:o,addressLabel:a,linkComponent:d,showNewsletter:f,newsletterId:x,newsletterPlaceholder:k,children:t}),e(Q,{footerLinks:l,linkComponent:d})]}),e(X,{bottomBarText:g})]});try{p.displayName="Footer",p.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"INavigationLogo"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},showNewsletter:{defaultValue:{value:"false"},description:"",name:"showNewsletter",required:!1,type:{name:"boolean"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const Z={title:"Design System/Organisms/Footer",component:p},v={render:r=>e(p,{...r})},c={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:i,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",children:void 0,href:""}),e(m,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},h={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:i,alt:"logo",href:"/",id:"logo",sources:[{srcset:i,media:"(max-width: 767px)"},{srcset:i,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e(m,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var w,y,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var E,L,B;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    children: [<SocialMediaLink icon={'icon-facebook'} href={'https://www.facebook.com/spendrupsbryggeri/'} children={'Facebook'} isExternal={true} />, <SocialMediaLink icon={'icon-instagram'} children={undefined} href={''} />],
    showNewsletter: false,
    newsletterId: 'footerNewsLetterId',
    newsletterPlaceholder: 'Skriv din email address',
    links: [],
    linkComponent: 'a',
    bottomBarText: '© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved'
  }
}`,...(B=(L=h.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const ee=["FooterStory","FooterStory_AnonymousUser"],le=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:h,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{p as F,c as a,le as f};
//# sourceMappingURL=footer.stories-4eaf9547.js.map

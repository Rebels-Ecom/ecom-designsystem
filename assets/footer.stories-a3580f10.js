import{N as V}from"./newsletter-f0a0852a.js";import{r as _}from"./index-6f814c40.js";import{F as R,a as S}from"./footer-top-bar.stories-1c99d269.js";import{L as A}from"./logotype-4ba6f46a.js";import{j as u,F as M,a as e}from"./jsx-runtime-76c5c2e2.js";import{C as P}from"./content-wrapper-1d622804.js";import{S as m}from"./social-media-link-50a3f858.js";import{l as a}from"./Spendrups_logo_horizontal-038b757f.js";const q="_footer_b1knr_1",G="_inner_b1knr_5",z="_footerLeft_b1knr_18",O="_logoLink_b1knr_27",U="_newsletter_b1knr_32",j="_linkList_b1knr_36",D="_linkListItem_b1knr_54",Y="_links_b1knr_69",$="_linkItem_b1knr_81",H="_innerWrapper_b1knr_85",K="_socialMediaIcon_b1knr_103",W="_addressContainer_b1knr_108",J="_bottomBar_b1knr_116",Q="_socialMediaIconContainer_b1knr_126",n={footer:q,inner:G,footerLeft:z,logoLink:O,newsletter:U,linkList:j,linkListItem:D,links:Y,linkItem:$,innerWrapper:H,socialMediaIcon:K,addressContainer:W,bottomBar:J,socialMediaIconContainer:Q},X=({logo:r,address:l,addressLabel:o,children:d,linkComponent:s,showNewsletter:t=!1,newsletterId:i,newsletterPlaceholder:k})=>{const[x,f]=_.useState(!1),[g,F]=_.useState(""),[I,N]=_.useState(!1),T=C=>{alert(`You signed up for Spendrups newsletter, with email: ${C}`)};return u("div",{className:n.footerLeft,children:[r&&e(A,{logo:r,linkComponent:s,className:n.logoLink}),t&&e(V,{id:i,inputValue:g,setInputValue:F,isErroneous:I,setIsFocused:f,setIsErroneous:N,placeholder:k,signupForNewsletter:T,className:n.newsletter}),u("div",{className:n.addressContainer,children:[e("p",{children:o}),e("p",{children:l})]}),e("div",{className:n.socialMediaIconContainer,children:d})]})},Z=({footerLinks:r,linkComponent:l})=>!Array.isArray(r)||r.length===0?null:e("ul",{className:n.linkList,children:r.map((o,d)=>{var s;return Array.isArray(o.links)&&((s=o.links)!=null&&s.length)?u("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:o.title}),e("ul",{className:n.links,children:o.links.map((t,i)=>e("li",{className:n.linkItem,children:t.isExternal?e("a",{href:t.href,target:t.target,className:"body",children:t.children}):e(l,{to:t.href,children:t.children})},`${t.children}-${i}`))})]},`${o.title}-${d}`):null})}),ee=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),p=({footerTopBarLinks:r,logo:l,address:o,addressLabel:d,children:s,links:t=[],linkComponent:i,showNewsletter:k,newsletterId:x,newsletterPlaceholder:f,bottomBarText:g})=>u(M,{children:[e(R,{footerTopBarLinks:r,linkComponent:i}),e("footer",{className:n.footer,children:e(P,{children:u("div",{className:n.inner,children:[e(X,{logo:l,address:o,addressLabel:d,linkComponent:i,showNewsletter:k,newsletterId:x,newsletterPlaceholder:f,children:s}),e(Z,{footerLinks:t,linkComponent:i})]})})}),e(ee,{bottomBarText:g})]});try{p.displayName="Footer",p.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"INavigationLogo"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},showNewsletter:{defaultValue:{value:"false"},description:"",name:"showNewsletter",required:!1,type:{name:"boolean"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const re={title:"Design System/Organisms/Footer",component:p},v={render:r=>e(p,{...r})},c={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",children:void 0,href:""}),e(m,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},h={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e(m,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var b,y,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var E,L,B;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(L=h.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const ne=["FooterStory","FooterStory_AnonymousUser"],he=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:h,__namedExportsOrder:ne,default:re},Symbol.toStringTag,{value:"Module"}));export{c as F,p as a,he as f};
//# sourceMappingURL=footer.stories-a3580f10.js.map

import{N as C}from"./newsletter-35e1739c.js";import{r as _}from"./index-6f814c40.js";import{F as q,a as S}from"./footer-top-bar.stories-e466782e.js";import{L as R}from"./logotype-2914ab84.js";import{j as u,F as A,a as e}from"./jsx-runtime-76c5c2e2.js";import{C as M}from"./content-wrapper-19d15755.js";import{S as p}from"./social-media-link-865fc83f.js";import{l as s}from"./Spendrups_logo_horizontal-038b757f.js";const P="_footer_1qkd2_1",G="_inner_1qkd2_5",z="_footerLeft_1qkd2_18",O="_newsletter_1qkd2_27",U="_linkList_1qkd2_31",j="_linkListItem_1qkd2_49",D="_links_1qkd2_64",Y="_linkItem_1qkd2_76",$="_innerWrapper_1qkd2_80",H="_socialMediaIcon_1qkd2_98",K="_addressContainer_1qkd2_103",W="_bottomBar_1qkd2_111",J="_socialMediaIconContainer_1qkd2_121",n={footer:P,inner:G,footerLeft:z,newsletter:O,linkList:U,linkListItem:j,links:D,linkItem:Y,innerWrapper:$,socialMediaIcon:H,addressContainer:K,bottomBar:W,socialMediaIconContainer:J},Q=({logo:r,address:a,addressLabel:o,children:l,linkComponent:d,showNewsletter:t=!1,newsletterId:i,newsletterPlaceholder:k})=>{const[x,f]=_.useState(!1),[g,F]=_.useState(""),[I,N]=_.useState(!1),T=V=>{alert(`You signed up for Spendrups newsletter, with email: ${V}`)};return u("div",{className:n.footerLeft,children:[r&&e(R,{...r}),t&&e(C,{id:i,inputValue:g,setInputValue:F,isErroneous:I,setIsFocused:f,setIsErroneous:N,placeholder:k,signupForNewsletter:T,className:n.newsletter}),u("div",{className:n.addressContainer,children:[e("p",{children:o}),e("p",{children:a})]}),e("div",{className:n.socialMediaIconContainer,children:l})]})},X=({footerLinks:r,linkComponent:a})=>!Array.isArray(r)||r.length===0?null:e("ul",{className:n.linkList,children:r.map((o,l)=>{var d;return Array.isArray(o.links)&&((d=o.links)!=null&&d.length)?u("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:o.title}),e("ul",{className:n.links,children:o.links.map((t,i)=>e("li",{className:n.linkItem,children:t.isExternal?e("a",{href:t.href,target:t.target,className:"body",children:t.children}):e(a,{to:t.href,children:t.children})},`${t.children}-${i}`))})]},`${o.title}-${l}`):null})}),Z=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),m=({footerTopBarLinks:r,logo:a,address:o,addressLabel:l,children:d,links:t=[],linkComponent:i,showNewsletter:k,newsletterId:x,newsletterPlaceholder:f,bottomBarText:g})=>u(A,{children:[e(q,{footerTopBarLinks:r,linkComponent:i}),e("footer",{className:n.footer,children:e(M,{children:u("div",{className:n.inner,children:[e(Q,{logo:a,address:o,addressLabel:l,linkComponent:i,showNewsletter:k,newsletterId:x,newsletterPlaceholder:f,children:d}),e(X,{footerLinks:t,linkComponent:i})]})})}),e(Z,{bottomBarText:g})]});try{m.displayName="Footer",m.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"IPicture"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},showNewsletter:{defaultValue:{value:"false"},description:"",name:"showNewsletter",required:!1,type:{name:"boolean"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const ee={title:"Design System/Organisms/Footer",component:m},v={render:r=>e(m,{...r})},c={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:s,alt:"logo",href:"/",id:"logo",sources:[{srcset:s,media:"(max-width: 767px)"},{srcset:s,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(p,{icon:"icon-facebook",children:void 0,href:""}),e(p,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},h={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:s,alt:"logo",href:"/",id:"logo",sources:[{srcset:s,media:"(max-width: 767px)"},{srcset:s,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(p,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e(p,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var y,w,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(w=c.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var E,B,L;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(B=h.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const re=["FooterStory","FooterStory_AnonymousUser"],ce=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:h,__namedExportsOrder:re,default:ee},Symbol.toStringTag,{value:"Module"}));export{c as F,m as a,ce as f};
//# sourceMappingURL=footer.stories-168e24c2.js.map

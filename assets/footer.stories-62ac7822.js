import{N as R}from"./newsletter-67e1fa88.js";import{a as h,F as A,j as e,r as _}from"./jsx-runtime-a3a6c0b8.js";import{F as M,a as S}from"./footer-top-bar.stories-0257042c.js";import{L as P}from"./logotype-1eb74b8f.js";import{C as q}from"./content-wrapper-c985da24.js";import{S as m}from"./social-media-link-5425a339.js";import{l}from"./Spendrups_logo_horizontal-038b757f.js";const G="_footer_1nku8_1",$="_inner_1nku8_5",z="_footerLeft_1nku8_22",O="_newsletter_1nku8_31",U="_linkList_1nku8_35",j="_linkListItem_1nku8_53",D="_links_1nku8_68",Y="_linksInTwoColumns_1nku8_77",H="_linkItem_1nku8_87",K="_innerWrapper_1nku8_91",W="_socialMediaIcon_1nku8_109",J="_addressContainer_1nku8_114",Q="_bottomBar_1nku8_122",X="_socialMediaIconContainer_1nku8_137",n={footer:G,inner:$,footerLeft:z,newsletter:O,linkList:U,linkListItem:j,links:D,linksInTwoColumns:Y,linkItem:H,innerWrapper:K,socialMediaIcon:W,addressContainer:J,bottomBar:Q,socialMediaIconContainer:X},Z=({logo:r,address:s,addressLabel:t,children:a,linkComponent:d,showNewsletter:o=!1,newsletterId:i,newsletterPlaceholder:k})=>{const[x,f]=_.useState(!1),[g,F]=_.useState(""),[N,C]=_.useState(!1),T=V=>{alert(`You signed up for Spendrups newsletter, with email: ${V}`)};return h("div",{className:n.footerLeft,children:[r&&e(P,{...r}),o&&e(R,{id:i,inputValue:g,setInputValue:F,isErroneous:N,setIsFocused:f,setIsErroneous:C,placeholder:k,signupForNewsletter:T,className:n.newsletter}),h("div",{className:n.addressContainer,children:[e("p",{children:t}),e("p",{children:s})]}),e("div",{className:n.socialMediaIconContainer,children:a})]})},ee=({footerLinks:r,linkComponent:s})=>!Array.isArray(r)||r.length===0?null:e("ul",{className:n.linkList,children:r.map((t,a)=>{var d;return Array.isArray(t.links)&&((d=t.links)!=null&&d.length)?h("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:t.title}),t.links.length<5?e("ul",{className:n.links,children:t.links.map((o,i)=>e(y,{link:o,linkComponent:s},`${o.children}-${i}`))}):e("div",{className:n.links,children:e("ul",{className:n.linksInTwoColumns,children:t.links.map((o,i)=>e(y,{link:o,linkComponent:s},`${o.children}-${i}`))})})]},`${t.title}-${a}`):null})}),y=({link:r,linkComponent:s})=>e("li",{className:n.linkItem,children:r.isExternal?e("a",{href:r.href,target:r.target,className:"body",children:r.children}):e(s,{to:r.href,children:r.children})}),re=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),p=({footerTopBarLinks:r,logo:s,address:t,addressLabel:a,children:d,links:o=[],linkComponent:i,showNewsletter:k,newsletterId:x,newsletterPlaceholder:f,bottomBarText:g})=>h(A,{children:[e(M,{footerTopBarLinks:r,linkComponent:i}),e("footer",{className:n.footer,children:e(q,{children:h("div",{className:n.inner,children:[e(Z,{logo:s,address:t,addressLabel:a,linkComponent:i,showNewsletter:k,newsletterId:x,newsletterPlaceholder:f,children:d}),e(ee,{footerLinks:o,linkComponent:i})]})})}),e(re,{bottomBarText:g})]});try{p.displayName="Footer",p.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"IPicture"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},showNewsletter:{defaultValue:{value:"false"},description:"",name:"showNewsletter",required:!1,type:{name:"boolean"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const ne={title:"Design System/Organisms/Footer",component:p},v={render:r=>e(p,{...r})},c={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:l,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",children:void 0,href:""}),e(m,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},u={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:l,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e(m,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var w,b,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(b=c.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var B,L,I;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(L=u.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const te=["FooterStory","FooterStory_AnonymousUser"],ue=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:u,__namedExportsOrder:te,default:ne},Symbol.toStringTag,{value:"Module"}));export{c as F,p as a,ue as f};

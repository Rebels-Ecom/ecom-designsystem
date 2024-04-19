import{N as R}from"./newsletter-8eba8fae.js";import{a as u,F as A,j as e,r as _}from"./jsx-runtime-a3a6c0b8.js";import{F as M,a as S}from"./footer-top-bar.stories-2faf7164.js";import{L as P}from"./logotype-564a64e9.js";import{C as q}from"./content-wrapper-c985da24.js";import{S as m}from"./social-media-link-2e2c68f6.js";import{l}from"./Spendrups_logo_horizontal-038b757f.js";const G="_footer_1fkwc_1",$="_inner_1fkwc_5",z="_footerLeft_1fkwc_22",O="_newsletter_1fkwc_31",U="_linkList_1fkwc_35",j="_linkListItem_1fkwc_53",D="_links_1fkwc_68",Y="_linksInTwoColumns_1fkwc_77",H="_linkItem_1fkwc_83",K="_innerWrapper_1fkwc_87",W="_socialMediaIcon_1fkwc_105",J="_addressContainer_1fkwc_110",Q="_bottomBar_1fkwc_118",X="_socialMediaIconContainer_1fkwc_133",n={footer:G,inner:$,footerLeft:z,newsletter:O,linkList:U,linkListItem:j,links:D,linksInTwoColumns:Y,linkItem:H,innerWrapper:K,socialMediaIcon:W,addressContainer:J,bottomBar:Q,socialMediaIconContainer:X},Z=({logo:r,address:s,addressLabel:t,children:a,linkComponent:d,showNewsletter:o=!1,newsletterId:i,newsletterPlaceholder:f})=>{const[w,k]=_.useState(!1),[g,F]=_.useState(""),[C,N]=_.useState(!1),T=V=>{alert(`You signed up for Spendrups newsletter, with email: ${V}`)};return u("div",{className:n.footerLeft,children:[r&&e(P,{...r,width:154,height:36}),o&&e(R,{id:i,inputValue:g,setInputValue:F,isErroneous:C,setIsFocused:k,setIsErroneous:N,placeholder:f,signupForNewsletter:T,className:n.newsletter}),u("div",{className:n.addressContainer,children:[e("p",{children:t}),e("p",{children:s})]}),e("div",{className:n.socialMediaIconContainer,children:a})]})},ee=({footerLinks:r,linkComponent:s})=>!Array.isArray(r)||r.length===0?null:e("ul",{className:n.linkList,children:r.map((t,a)=>{var d;return Array.isArray(t.links)&&((d=t.links)!=null&&d.length)?u("li",{className:n.linkListItem,children:[e("h5",{className:n.linkListTitle,children:t.title}),e("ul",{className:n.links,children:t.links.length<5?t.links.map((o,i)=>e(x,{link:o,linkComponent:s},`${o.children}-${i}`)):e("div",{className:n.linksInTwoColumns,children:t.links.map((o,i)=>e(x,{link:o,linkComponent:s},`${o.children}-${i}`))})})]},`${t.title}-${a}`):null})}),x=({link:r,linkComponent:s})=>e("li",{className:n.linkItem,children:r.isExternal?e("a",{href:r.href,target:r.target,className:"body",children:r.children}):e(s,{to:r.href,children:r.children})}),re=({bottomBarText:r})=>e("div",{className:n.bottomBar,children:r}),p=({footerTopBarLinks:r,logo:s,address:t,addressLabel:a,children:d,links:o=[],linkComponent:i,showNewsletter:f,newsletterId:w,newsletterPlaceholder:k,bottomBarText:g})=>u(A,{children:[e(M,{footerTopBarLinks:r,linkComponent:i}),e("footer",{className:n.footer,children:e(q,{children:u("div",{className:n.inner,children:[e(Z,{logo:s,address:t,addressLabel:a,linkComponent:i,showNewsletter:f,newsletterId:w,newsletterPlaceholder:k,children:d}),e(ee,{footerLinks:o,linkComponent:i})]})})}),e(re,{bottomBarText:g})]});try{p.displayName="Footer",p.__docgenInfo={description:"",displayName:"Footer",props:{footerTopBarLinks:{defaultValue:null,description:"",name:"footerTopBarLinks",required:!0,type:{name:"TNavLink[]"}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"TFooterLinksList[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"IPicture"}},addressLabel:{defaultValue:null,description:"",name:"addressLabel",required:!0,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},showNewsletter:{defaultValue:{value:"false"},description:"",name:"showNewsletter",required:!1,type:{name:"boolean"}},newsletterId:{defaultValue:null,description:"",name:"newsletterId",required:!0,type:{name:"string"}},newsletterPlaceholder:{defaultValue:null,description:"",name:"newsletterPlaceholder",required:!0,type:{name:"string"}},bottomBarText:{defaultValue:null,description:"",name:"bottomBarText",required:!0,type:{name:"string"}}}}}catch{}const ne={title:"Design System/Organisms/Footer",component:p},v={render:r=>e(p,{...r})},c={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:l,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",children:void 0,href:""}),e(m,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},h={...v,args:{footerTopBarLinks:S.args.footerTopBarLinks,logo:{src:l,alt:"logo",href:"/",id:"logo",sources:[{srcset:l,media:"(max-width: 767px)"},{srcset:l,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e(m,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e(m,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var y,b,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(b=c.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var B,L,I;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(L=h.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const te=["FooterStory","FooterStory_AnonymousUser"],he=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:h,__namedExportsOrder:te,default:ne},Symbol.toStringTag,{value:"Module"}));export{c as F,p as a,he as f};

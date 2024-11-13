import{N as C}from"./newsletter-d8c50ab0.js";import{j as e,r as x}from"./jsx-runtime-03333307.js";import{F as A,a as I}from"./footer-top-bar.stories-f0e0a422.js";import{c as R}from"./index-09749a66.js";import{C as M}from"./content-wrapper-adfa8526.js";import{S as u}from"./social-media-link-871839d2.js";import{l as d}from"./Spendrups_logo_horizontal-038b757f.js";const V="_footer_tdhs7_1",q="_inner_tdhs7_5",P="_footerLeft_tdhs7_22",G="_newsletter_tdhs7_31",$="_linkList_tdhs7_35",U="_logo_tdhs7_53",z="_linkListItem_tdhs7_57",O="_links_tdhs7_72",D="_linksInTwoColumns_tdhs7_81",Y="_linkItem_tdhs7_91",H="_innerWrapper_tdhs7_95",K="_socialMediaIcon_tdhs7_113",W="_addressContainer_tdhs7_118",J="_bottomBar_tdhs7_126",Q="_socialMediaIconContainer_tdhs7_141",n={footer:V,inner:q,footerLeft:P,newsletter:G,linkList:$,logo:U,linkListItem:z,links:O,linksInTwoColumns:D,linkItem:Y,innerWrapper:H,socialMediaIcon:K,addressContainer:W,bottomBar:J,socialMediaIconContainer:Q},X=({logo:r,address:s,addressLabel:i,children:o,linkComponent:m,showNewsletter:l=!1,newsletterId:t,newsletterPlaceholder:a})=>{const[y,p]=x.useState(!1),[k,f]=x.useState(""),[S,j]=x.useState(!1),F=N=>{alert(`You signed up for Spendrups newsletter, with email: ${N}`)};return e.jsxs("div",{className:n.footerLeft,children:[r&&r,l&&e.jsx(C,{id:t,inputValue:k,setInputValue:f,isErroneous:S,setIsFocused:p,setIsErroneous:j,placeholder:a,signupForNewsletter:F,className:n.newsletter}),e.jsxs("div",{className:n.addressContainer,children:[e.jsx("p",{children:i}),e.jsx("p",{children:s})]}),e.jsx("div",{className:n.socialMediaIconContainer,children:o})]})},Z=({footerLinks:r,linkComponent:s,trackFooterLink:i})=>!Array.isArray(r)||r.length===0?null:e.jsx("ul",{className:n.linkList,children:r.map((o,m)=>{var l;return Array.isArray(o.links)&&((l=o.links)!=null&&l.length)?e.jsxs("li",{className:n.linkListItem,children:[e.jsx("h3",{className:R(n.linkListTitle,"h5"),children:o.title}),o.links.length<5?e.jsx("ul",{className:n.links,children:o.links.map((t,a)=>e.jsx(_,{link:t,linkComponent:s},`${t.children}-${a}`))}):e.jsx("div",{className:n.links,children:e.jsx("ul",{className:n.linksInTwoColumns,children:o.links.map((t,a)=>e.jsx(_,{link:t,linkComponent:s,...t,trackFooterLink:i},`${t.children}-${a}`))})})]},`${o.title}-${m}`):null})}),_=({link:r,linkComponent:s,trackFooterLink:i})=>e.jsx("li",{className:n.linkItem,children:r.isExternal?e.jsx("a",{href:r.href,target:r.target,className:"body","aria-label":`Go to ${r.children}`,children:r.children}):e.jsx(s,{to:r.href,onClick:i,"aria-label":`Go to ${r.children}`,children:r.children})}),ee=({bottomBarText:r})=>e.jsx("div",{className:n.bottomBar,children:r}),g=({footerTopBarLinks:r,logo:s,address:i,addressLabel:o,children:m,links:l=[],linkComponent:t,showNewsletter:a,newsletterId:y,newsletterPlaceholder:p,bottomBarText:k,trackFooterLink:f})=>e.jsxs(e.Fragment,{children:[e.jsx(A,{footerTopBarLinks:r,linkComponent:t}),e.jsx("footer",{className:n.footer,children:e.jsx(M,{children:e.jsxs("div",{className:n.inner,children:[e.jsx(X,{logo:s,address:i,addressLabel:o,linkComponent:t,showNewsletter:a,newsletterId:y,newsletterPlaceholder:p,children:m}),e.jsx(Z,{footerLinks:l,linkComponent:t,trackFooterLink:f})]})})}),e.jsx(ee,{bottomBarText:k})]});g.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{footerTopBarLinks:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"{ navLinkType: TNavLinkType } & ILink",elements:[{name:"signature",type:"object",raw:"{ navLinkType: TNavLinkType }",signature:{properties:[{key:"navLinkType",value:{name:"union",raw:"'email' | 'telephone' | 'login' | 'register' | 'logout' | 'loggedInUser' | 'favorites' | 'cart'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'telephone'"},{name:"literal",value:"'login'"},{name:"literal",value:"'register'"},{name:"literal",value:"'logout'"},{name:"literal",value:"'loggedInUser'"},{name:"literal",value:"'favorites'"},{name:"literal",value:"'cart'"}],required:!0}}]}},{name:"ILink"}]}],raw:"Array<TNavLink>"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string
  links: Array<ILink>
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"ILink"}],raw:"Array<ILink>",required:!0}}]}}],raw:"Array<TFooterLinksList>"},description:"",defaultValue:{value:"[]",computed:!1}},linkComponent:{required:!0,tsType:{name:"any"},description:""},logo:{required:!0,tsType:{name:"IPicture"},description:""},addressLabel:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},showNewsletter:{required:!0,tsType:{name:"boolean"},description:""},newsletterId:{required:!0,tsType:{name:"string"},description:""},newsletterPlaceholder:{required:!0,tsType:{name:"string"},description:""},bottomBarText:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trackFooterLink:{required:!1,tsType:{name:"CallableFunction"},description:""}}};const re={title:"Design System/Organisms/Footer",component:g},B={render:r=>e.jsx(g,{...r})},c={...B,args:{footerTopBarLinks:I.args.footerTopBarLinks,logo:{src:d,alt:"logo",href:"/",id:"logo",sources:[{srcset:d,media:"(max-width: 767px)"},{srcset:d,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e.jsx(u,{icon:"icon-facebook",children:void 0,href:""}),e.jsx(u,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},h={...B,args:{footerTopBarLinks:I.args.footerTopBarLinks,logo:{src:d,alt:"logo",href:"/",id:"logo",sources:[{srcset:d,media:"(max-width: 767px)"},{srcset:d,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e.jsx(u,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e.jsx(u,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var w,v,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var L,E,T;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(E=h.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const ne=["FooterStory","FooterStory_AnonymousUser"],ce=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:h,__namedExportsOrder:ne,default:re},Symbol.toStringTag,{value:"Module"}));export{c as F,g as a,ce as f};

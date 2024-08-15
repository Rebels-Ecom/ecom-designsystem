import{N as C}from"./newsletter-ecb2b9cc.js";import{j as e,r as f}from"./jsx-runtime-03333307.js";import{F as A,a as I}from"./footer-top-bar.stories-3f5af768.js";import{L as R}from"./logotype-96bfbc3c.js";import{C as M}from"./content-wrapper-adfa8526.js";import{S as m}from"./social-media-link-9326d8e4.js";import{l as a}from"./Spendrups_logo_horizontal-038b757f.js";const V="_footer_tdhs7_1",P="_inner_tdhs7_5",q="_footerLeft_tdhs7_22",G="_newsletter_tdhs7_31",U="_linkList_tdhs7_35",$="_logo_tdhs7_53",z="_linkListItem_tdhs7_57",O="_links_tdhs7_72",D="_linksInTwoColumns_tdhs7_81",Y="_linkItem_tdhs7_91",H="_innerWrapper_tdhs7_95",K="_socialMediaIcon_tdhs7_113",W="_addressContainer_tdhs7_118",J="_bottomBar_tdhs7_126",Q="_socialMediaIconContainer_tdhs7_141",n={footer:V,inner:P,footerLeft:q,newsletter:G,linkList:U,logo:$,linkListItem:z,links:O,linksInTwoColumns:D,linkItem:Y,innerWrapper:H,socialMediaIcon:K,addressContainer:W,bottomBar:J,socialMediaIconContainer:Q},X=({logo:r,address:i,addressLabel:t,children:l,linkComponent:d,showNewsletter:o=!1,newsletterId:s,newsletterPlaceholder:u})=>{const[x,p]=f.useState(!1),[k,B]=f.useState(""),[j,S]=f.useState(!1),N=F=>{alert(`You signed up for Spendrups newsletter, with email: ${F}`)};return e.jsxs("div",{className:n.footerLeft,children:[r&&e.jsx(R,{...r,height:32,width:136,classNameImg:n.logo}),o&&e.jsx(C,{id:s,inputValue:k,setInputValue:B,isErroneous:j,setIsFocused:p,setIsErroneous:S,placeholder:u,signupForNewsletter:N,className:n.newsletter}),e.jsxs("div",{className:n.addressContainer,children:[e.jsx("p",{children:t}),e.jsx("p",{children:i})]}),e.jsx("div",{className:n.socialMediaIconContainer,children:l})]})},Z=({footerLinks:r,linkComponent:i})=>!Array.isArray(r)||r.length===0?null:e.jsx("ul",{className:n.linkList,children:r.map((t,l)=>{var d;return Array.isArray(t.links)&&((d=t.links)!=null&&d.length)?e.jsxs("li",{className:n.linkListItem,children:[e.jsx("h5",{className:n.linkListTitle,children:t.title}),t.links.length<5?e.jsx("ul",{className:n.links,children:t.links.map((o,s)=>e.jsx(y,{link:o,linkComponent:i},`${o.children}-${s}`))}):e.jsx("div",{className:n.links,children:e.jsx("ul",{className:n.linksInTwoColumns,children:t.links.map((o,s)=>e.jsx(y,{link:o,linkComponent:i},`${o.children}-${s}`))})})]},`${t.title}-${l}`):null})}),y=({link:r,linkComponent:i})=>e.jsx("li",{className:n.linkItem,children:r.isExternal?e.jsx("a",{href:r.href,target:r.target,className:"body",children:r.children}):e.jsx(i,{to:r.href,children:r.children})}),ee=({bottomBarText:r})=>e.jsx("div",{className:n.bottomBar,children:r}),g=({footerTopBarLinks:r,logo:i,address:t,addressLabel:l,children:d,links:o=[],linkComponent:s,showNewsletter:u,newsletterId:x,newsletterPlaceholder:p,bottomBarText:k})=>e.jsxs(e.Fragment,{children:[e.jsx(A,{footerTopBarLinks:r,linkComponent:s}),e.jsx("footer",{className:n.footer,children:e.jsx(M,{children:e.jsxs("div",{className:n.inner,children:[e.jsx(X,{logo:i,address:t,addressLabel:l,linkComponent:s,showNewsletter:u,newsletterId:x,newsletterPlaceholder:p,children:d}),e.jsx(Z,{footerLinks:o,linkComponent:s})]})})}),e.jsx(ee,{bottomBarText:k})]});g.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{footerTopBarLinks:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"{ navLinkType: TNavLinkType } & ILink",elements:[{name:"signature",type:"object",raw:"{ navLinkType: TNavLinkType }",signature:{properties:[{key:"navLinkType",value:{name:"union",raw:"'email' | 'telephone' | 'login' | 'register' | 'logout' | 'loggedInUser' | 'favorites' | 'cart'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'telephone'"},{name:"literal",value:"'login'"},{name:"literal",value:"'register'"},{name:"literal",value:"'logout'"},{name:"literal",value:"'loggedInUser'"},{name:"literal",value:"'favorites'"},{name:"literal",value:"'cart'"}],required:!0}}]}},{name:"ILink"}]}],raw:"Array<TNavLink>"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string
  links: Array<ILink>
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"ILink"}],raw:"Array<ILink>",required:!0}}]}}],raw:"Array<TFooterLinksList>"},description:"",defaultValue:{value:"[]",computed:!1}},linkComponent:{required:!0,tsType:{name:"any"},description:""},logo:{required:!0,tsType:{name:"IPicture"},description:""},addressLabel:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},showNewsletter:{required:!0,tsType:{name:"boolean"},description:""},newsletterId:{required:!0,tsType:{name:"string"},description:""},newsletterPlaceholder:{required:!0,tsType:{name:"string"},description:""},bottomBarText:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const re={title:"Design System/Organisms/Footer",component:g},T={render:r=>e.jsx(g,{...r})},c={...T,args:{footerTopBarLinks:I.args.footerTopBarLinks,logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e.jsx(m,{icon:"icon-facebook",children:void 0,href:""}),e.jsx(m,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},h={...T,args:{footerTopBarLinks:I.args.footerTopBarLinks,logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e.jsx(m,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e.jsx(m,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var _,w,v;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var L,E,b;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=(E=h.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const ne=["FooterStory","FooterStory_AnonymousUser"],ce=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:h,__namedExportsOrder:ne,default:re},Symbol.toStringTag,{value:"Module"}));export{c as F,g as a,ce as f};

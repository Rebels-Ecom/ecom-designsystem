import{N as C}from"./newsletter-cd13c52b.js";import{j as e,r as f}from"./jsx-runtime-03333307.js";import{F as A,a as T}from"./footer-top-bar.stories-0ed98e63.js";import{L as R}from"./logotype-be1d1890.js";import{C as M}from"./content-wrapper-adfa8526.js";import{S as h}from"./social-media-link-061f80e3.js";import{l as a}from"./Spendrups_logo_horizontal-038b757f.js";const V="_footer_1nku8_1",P="_inner_1nku8_5",q="_footerLeft_1nku8_22",G="_newsletter_1nku8_31",U="_linkList_1nku8_35",$="_linkListItem_1nku8_53",z="_links_1nku8_68",O="_linksInTwoColumns_1nku8_77",D="_linkItem_1nku8_87",Y="_innerWrapper_1nku8_91",H="_socialMediaIcon_1nku8_109",K="_addressContainer_1nku8_114",W="_bottomBar_1nku8_122",J="_socialMediaIconContainer_1nku8_137",n={footer:V,inner:P,footerLeft:q,newsletter:G,linkList:U,linkListItem:$,links:z,linksInTwoColumns:O,linkItem:D,innerWrapper:Y,socialMediaIcon:H,addressContainer:K,bottomBar:W,socialMediaIconContainer:J},Q=({logo:r,address:i,addressLabel:t,children:l,linkComponent:d,showNewsletter:o=!1,newsletterId:s,newsletterPlaceholder:m})=>{const[g,p]=f.useState(!1),[k,B]=f.useState(""),[j,S]=f.useState(!1),F=N=>{alert(`You signed up for Spendrups newsletter, with email: ${N}`)};return e.jsxs("div",{className:n.footerLeft,children:[r&&e.jsx(R,{...r}),o&&e.jsx(C,{id:s,inputValue:k,setInputValue:B,isErroneous:j,setIsFocused:p,setIsErroneous:S,placeholder:m,signupForNewsletter:F,className:n.newsletter}),e.jsxs("div",{className:n.addressContainer,children:[e.jsx("p",{children:t}),e.jsx("p",{children:i})]}),e.jsx("div",{className:n.socialMediaIconContainer,children:l})]})},X=({footerLinks:r,linkComponent:i})=>!Array.isArray(r)||r.length===0?null:e.jsx("ul",{className:n.linkList,children:r.map((t,l)=>{var d;return Array.isArray(t.links)&&((d=t.links)!=null&&d.length)?e.jsxs("li",{className:n.linkListItem,children:[e.jsx("h5",{className:n.linkListTitle,children:t.title}),t.links.length<5?e.jsx("ul",{className:n.links,children:t.links.map((o,s)=>e.jsx(y,{link:o,linkComponent:i},`${o.children}-${s}`))}):e.jsx("div",{className:n.links,children:e.jsx("ul",{className:n.linksInTwoColumns,children:t.links.map((o,s)=>e.jsx(y,{link:o,linkComponent:i},`${o.children}-${s}`))})})]},`${t.title}-${l}`):null})}),y=({link:r,linkComponent:i})=>e.jsx("li",{className:n.linkItem,children:r.isExternal?e.jsx("a",{href:r.href,target:r.target,className:"body",children:r.children}):e.jsx(i,{to:r.href,children:r.children})}),Z=({bottomBarText:r})=>e.jsx("div",{className:n.bottomBar,children:r}),x=({footerTopBarLinks:r,logo:i,address:t,addressLabel:l,children:d,links:o=[],linkComponent:s,showNewsletter:m,newsletterId:g,newsletterPlaceholder:p,bottomBarText:k})=>e.jsxs(e.Fragment,{children:[e.jsx(A,{footerTopBarLinks:r,linkComponent:s}),e.jsx("footer",{className:n.footer,children:e.jsx(M,{children:e.jsxs("div",{className:n.inner,children:[e.jsx(Q,{logo:i,address:t,addressLabel:l,linkComponent:s,showNewsletter:m,newsletterId:g,newsletterPlaceholder:p,children:d}),e.jsx(X,{footerLinks:o,linkComponent:s})]})})}),e.jsx(Z,{bottomBarText:k})]});x.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{footerTopBarLinks:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"{ navLinkType: TNavLinkType } & ILink",elements:[{name:"signature",type:"object",raw:"{ navLinkType: TNavLinkType }",signature:{properties:[{key:"navLinkType",value:{name:"union",raw:"'email' | 'telephone' | 'login' | 'register' | 'logout' | 'loggedInUser' | 'favorites' | 'cart'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'telephone'"},{name:"literal",value:"'login'"},{name:"literal",value:"'register'"},{name:"literal",value:"'logout'"},{name:"literal",value:"'loggedInUser'"},{name:"literal",value:"'favorites'"},{name:"literal",value:"'cart'"}],required:!0}}]}},{name:"ILink"}]}],raw:"Array<TNavLink>"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string
  links: Array<ILink>
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"ILink"}],raw:"Array<ILink>",required:!0}}]}}],raw:"Array<TFooterLinksList>"},description:"",defaultValue:{value:"[]",computed:!1}},linkComponent:{required:!0,tsType:{name:"any"},description:""},logo:{required:!0,tsType:{name:"IPicture"},description:""},addressLabel:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},showNewsletter:{required:!0,tsType:{name:"boolean"},description:""},newsletterId:{required:!0,tsType:{name:"string"},description:""},newsletterPlaceholder:{required:!0,tsType:{name:"string"},description:""},bottomBarText:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ee={title:"Design System/Organisms/Footer",component:x},I={render:r=>e.jsx(x,{...r})},c={...I,args:{footerTopBarLinks:T.args.footerTopBarLinks,logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e.jsx(h,{icon:"icon-facebook",children:void 0,href:""}),e.jsx(h,{icon:"icon-instagram",children:void 0,href:""})],newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[{title:"Kategorier",links:[{href:"/#ol",children:"Öl",isExternal:!0},{href:"/#vin",children:"Vin",isExternal:!0},{href:"/#sprit",children:"Sprit",isExternal:!0},{href:"/#cider",children:"Cider",isExternal:!0},{href:"/#blanddryck",children:"FAB / Blanddryck",isExternal:!0},{href:"/#vatten",children:"Vatten",isExternal:!0},{href:"/#lask",children:"Läsk",isExternal:!0},{href:"/#fruktdryck",children:"Fruktdryck",isExternal:!0},{href:"/#mixers",children:"Mixers",isExternal:!0},{href:"/#ovriga-produkter",children:"Övriga produkter",isExternal:!0}]},{title:"Konto",links:[{href:"/#mitt-konto",children:"Mitt konto",isExternal:!0},{href:"/#faktoror",children:"Faktoror",isExternal:!0},{href:"/#returer",children:"Returer",isExternal:!0},{href:"/#orderhistorik",children:"Orderhistorik",isExternal:!0},{href:"/#favoriter",children:"Inköpslistor / Favoriter",isExternal:!0}]},{title:"Sidor",links:[{href:"/#blogg",children:"Blogg",isExternal:!0},{href:"/#webshop",children:"Våran webshop",isExternal:!0}]}],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}},u={...I,args:{footerTopBarLinks:T.args.footerTopBarLinks,logo:{src:a,alt:"logo",href:"/",id:"logo",sources:[{srcset:a,media:"(max-width: 767px)"},{srcset:a,media:"(min-width: 768px)"}]},addressLabel:"Besöksadress: ",address:"Huvudkontoret Vårby Allé 39, 143 30 Vårby",children:[e.jsx(h,{icon:"icon-facebook",href:"https://www.facebook.com/spendrupsbryggeri/",children:"Facebook",isExternal:!0}),e.jsx(h,{icon:"icon-instagram",children:void 0,href:""})],showNewsletter:!1,newsletterId:"footerNewsLetterId",newsletterPlaceholder:"Skriv din email address",links:[],linkComponent:"a",bottomBarText:"© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved"}};var _,w,v;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var L,E,b;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(b=(E=u.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const re=["FooterStory","FooterStory_AnonymousUser"],de=Object.freeze(Object.defineProperty({__proto__:null,FooterStory:c,FooterStory_AnonymousUser:u,__namedExportsOrder:re,default:ee},Symbol.toStringTag,{value:"Module"}));export{c as F,x as a,de as f};

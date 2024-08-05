import{B as d}from"./button-e2072245.js";import{I as g}from"./icon-cf6ebd85.js";import{L as k}from"./link-button-90dc1b3c.js";import{j as e}from"./jsx-runtime-03333307.js";import{a as p}from"./chunk-MZXVCX43-aa6c8130.js";const h="_signupTeaser_v0qqk_1",f="_buttonWrapper_v0qqk_12",b="_richText_v0qqk_30",n={signupTeaser:h,buttonWrapper:f,richText:b};function i({heading:t,shoppingListButton:a,favoriteButton:s,richText:m,signupLink:o}){return e.jsxs("div",{className:n.signupTeaser,children:[e.jsx("h2",{className:n.heading,children:t}),e.jsxs("div",{className:n.buttonWrapper,children:[e.jsx(d,{...a,type:"button",surface:"primary",rounded:!0,children:a.children}),e.jsxs(d,{...s,type:"button",surface:"primary",rounded:!0,children:[" ",s.children]})]}),e.jsxs("div",{className:n.richText,children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:m}}),e.jsx(g,{icon:"icon-heart"})]}),o&&e.jsx(k,{...o,surface:"primary"})]})}i.__docgenInfo={description:"",methods:[],displayName:"SignupTeaser",props:{heading:{required:!0,tsType:{name:"string"},description:""},shoppingListButton:{required:!0,tsType:{name:"IButton"},description:""},favoriteButton:{required:!0,tsType:{name:"IButton"},description:""},richText:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"IIcon"},description:""},signupLink:{required:!0,tsType:{name:"ILinkButton"},description:""}}};const y={title:"Design System/Molecules/SignupTeaser",component:i},T={render:({...t})=>e.jsx("div",{style:{margin:"2rem auto",padding:"1rem",maxWidth:"50rem"},children:e.jsx(i,{...t})})},r={...T,args:{heading:"Smidiga köp med din inköplista",richText:"<p><b>Bli företagskund idag!</b></p><p>För en smidig hantering av dina framtida ordrar så borde du passa på att <a href={/inkoplistan}>skapa upp din första inköpslista</a> Det är ett smidigt verktyg för att du så snabbt som möjligt ska kunna beställa dom där återkommande ordrarna som så ofta behövs. Kanske till den där sommarfesten?</p><p>Din inköpslistor hanterar du sedan enkelt på <a href={/mina-sidor}>mina sidor</a></p><p><b>Du kan enkelt lägga till en produkt i en lista eller som en favorit genom att klicka på hjärtat på produkt kortet</b></p>",shoppingListButton:{id:"button_shopping",disabled:!0,surface:"primary",children:"Inköpslistor",iconRight:{icon:"icon-clipboard"},onClick:p("clicked")},favoriteButton:{id:"button_favorite",disabled:!0,surface:"primary",children:"Produkter",iconRight:{icon:"icon-heart"},onClick:p("clicked")},signupLink:{surface:"primary",children:"Bli kund idag",href:"/register",isExternal:!0,target:null,title:"Bli kund idag"}}};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...SignupTeaserStoryTemplate,
  args: {
    heading: 'Smidiga köp med din inköplista',
    richText: '<p><b>Bli företagskund idag!</b></p><p>För en smidig hantering av dina framtida ordrar så borde du passa på att <a href={/inkoplistan}>skapa upp din första inköpslista</a> Det är ett smidigt verktyg för att du så snabbt som möjligt ska kunna beställa dom där återkommande ordrarna som så ofta behövs. Kanske till den där sommarfesten?</p><p>Din inköpslistor hanterar du sedan enkelt på <a href={/mina-sidor}>mina sidor</a></p><p><b>Du kan enkelt lägga till en produkt i en lista eller som en favorit genom att klicka på hjärtat på produkt kortet</b></p>',
    shoppingListButton: {
      id: 'button_shopping',
      disabled: true,
      surface: 'primary',
      children: 'Inköpslistor',
      iconRight: {
        icon: 'icon-clipboard'
      },
      onClick: action('clicked')
    },
    favoriteButton: {
      id: 'button_favorite',
      disabled: true,
      surface: 'primary',
      children: 'Produkter',
      iconRight: {
        icon: 'icon-heart'
      },
      onClick: action('clicked')
    },
    signupLink: {
      surface: 'primary',
      children: 'Bli kund idag',
      href: '/register',
      isExternal: true,
      target: null,
      title: 'Bli kund idag'
    }
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const x=["SignupTeaserStory"],q=Object.freeze(Object.defineProperty({__proto__:null,SignupTeaserStory:r,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{i as S,r as a,q as s};

import{B as p}from"./button-97f3af74.js";import{I as k}from"./icon-5fefd509.js";import{L as h}from"./link-button-8d451f62.js";import{a as t,j as e}from"./jsx-runtime-a3a6c0b8.js";import{a as l}from"./chunk-WFFRPTHA-a68c42c5.js";const f="_signupTeaser_v0qqk_1",b="_buttonWrapper_v0qqk_12",y="_richText_v0qqk_30",i={signupTeaser:f,buttonWrapper:b,richText:y};function a({heading:r,shoppingListButton:s,favoriteButton:o,richText:g,signupLink:d}){return t("div",{className:i.signupTeaser,children:[e("h2",{className:i.heading,children:r}),t("div",{className:i.buttonWrapper,children:[e(p,{...s,type:"button",surface:"primary",rounded:!0,children:s.children}),t(p,{...o,type:"button",surface:"primary",rounded:!0,children:[" ",o.children]})]}),t("div",{className:i.richText,children:[e("p",{dangerouslySetInnerHTML:{__html:g}}),e(k,{icon:"icon-heart"})]}),d&&e(h,{...d,surface:"primary"})]})}try{a.displayName="SignupTeaser",a.__docgenInfo={description:"",displayName:"SignupTeaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},shoppingListButton:{defaultValue:null,description:"",name:"shoppingListButton",required:!0,type:{name:"IButton"}},favoriteButton:{defaultValue:null,description:"",name:"favoriteButton",required:!0,type:{name:"IButton"}},richText:{defaultValue:null,description:"",name:"richText",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}},signupLink:{defaultValue:null,description:"",name:"signupLink",required:!0,type:{name:"ILinkButton"}}}}}catch{}const _={title:"Design System/Molecules/SignupTeaser",component:a},T={render:({...r})=>e("div",{style:{margin:"2rem auto",padding:"1rem",maxWidth:"50rem"},children:e(a,{...r})})},n={...T,args:{heading:"Smidiga köp med din inköplista",richText:"<p><b>Bli företagskund idag!</b></p><p>För en smidig hantering av dina framtida ordrar så borde du passa på att <a href={/inkoplistan}>skapa upp din första inköpslista</a> Det är ett smidigt verktyg för att du så snabbt som möjligt ska kunna beställa dom där återkommande ordrarna som så ofta behövs. Kanske till den där sommarfesten?</p><p>Din inköpslistor hanterar du sedan enkelt på <a href={/mina-sidor}>mina sidor</a></p><p><b>Du kan enkelt lägga till en produkt i en lista eller som en favorit genom att klicka på hjärtat på produkt kortet</b></p>",shoppingListButton:{id:"button_shopping",disabled:!0,surface:"primary",children:"Inköpslistor",iconRight:{icon:"icon-clipboard"},onClick:l("clicked")},favoriteButton:{id:"button_favorite",disabled:!0,surface:"primary",children:"Produkter",iconRight:{icon:"icon-heart"},onClick:l("clicked")},signupLink:{surface:"primary",children:"Bli kund idag",href:"/register",isExternal:!0,target:null,title:"Bli kund idag"}}};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const v=["SignupTeaserStory"],L=Object.freeze(Object.defineProperty({__proto__:null,SignupTeaserStory:n,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{a as S,n as a,L as s};

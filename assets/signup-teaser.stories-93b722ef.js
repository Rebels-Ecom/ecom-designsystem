import{B as l}from"./button-08ef97ed.js";import{I as k}from"./icon-375c4d56.js";import{L as h}from"./link-button-4fc3076d.js";import{j as t,a as e}from"./jsx-runtime-76c5c2e2.js";import"./index-db2bed09.js";import{a as p}from"./chunk-NX5DM7EF-906d95d8.js";const f="_signupTeaser_8n5nm_1",b="_buttonWrapper_8n5nm_12",y="_richText_8n5nm_28",i={signupTeaser:f,buttonWrapper:b,richText:y};function a({heading:r,shoppingListButton:s,favoriteButton:o,richText:g,signupLink:d}){return t("div",{className:i.signupTeaser,children:[e("h2",{className:i.heading,children:r}),t("div",{className:i.buttonWrapper,children:[e(l,{...s,type:"button",surface:"primary",rounded:!0,children:s.children}),t(l,{...o,type:"button",surface:"primary",rounded:!0,children:[" ",o.children]})]}),t("div",{className:i.richText,children:[e("p",{dangerouslySetInnerHTML:{__html:g}}),e(k,{icon:"icon-heart"})]}),d&&e(h,{...d,surface:"primary"})]})}try{a.displayName="SignupTeaser",a.__docgenInfo={description:"",displayName:"SignupTeaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},shoppingListButton:{defaultValue:null,description:"",name:"shoppingListButton",required:!0,type:{name:"IButton"}},favoriteButton:{defaultValue:null,description:"",name:"favoriteButton",required:!0,type:{name:"IButton"}},richText:{defaultValue:null,description:"",name:"richText",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IIcon"}},signupLink:{defaultValue:null,description:"",name:"signupLink",required:!0,type:{name:"ILinkButton"}}}}}catch{}const _={title:"Design System/Molecules/SignupTeaser",component:a},T={render:({...r})=>e("div",{style:{margin:"2rem auto",padding:"1rem",maxWidth:"50rem"},children:e(a,{...r})})},n={...T,args:{heading:"Smidiga köp med din inköplista",richText:"<p><b>Bli företagskund idag!</b></p><p>För en smidig hantering av dina framtida ordrar så borde du passa på att <a href={/inkoplistan}>skapa upp din första inköpslista</a> Det är ett smidigt verktyg för att du så snabbt som möjligt ska kunna beställa dom där återkommande ordrarna som så ofta behövs. Kanske till den där sommarfesten?</p><p>Din inköpslistor hanterar du sedan enkelt på <a href={/mina-sidor}>mina sidor</a></p><p><b>Du kan enkelt lägga till en produkt i en lista eller som en favorit genom att klicka på hjärtat på produkt kortet</b></p>",shoppingListButton:{id:"button_shopping",disabled:!0,surface:"primary",surfaceVariant:"blue",children:"Inköpslistor",iconRight:{icon:"icon-clipboard"},onClick:p("clicked")},favoriteButton:{id:"button_favorite",disabled:!0,surface:"primary",surfaceVariant:"blue",children:"Produkter",iconRight:{icon:"icon-heart"},onClick:p("clicked")},signupLink:{surface:"primary",children:"Bli kund idag",href:"/register",isExternal:!0,target:null,title:"Bli kund idag"}}};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...SignupTeaserStoryTemplate,
  args: {
    heading: 'Smidiga köp med din inköplista',
    richText: '<p><b>Bli företagskund idag!</b></p><p>För en smidig hantering av dina framtida ordrar så borde du passa på att <a href={/inkoplistan}>skapa upp din första inköpslista</a> Det är ett smidigt verktyg för att du så snabbt som möjligt ska kunna beställa dom där återkommande ordrarna som så ofta behövs. Kanske till den där sommarfesten?</p><p>Din inköpslistor hanterar du sedan enkelt på <a href={/mina-sidor}>mina sidor</a></p><p><b>Du kan enkelt lägga till en produkt i en lista eller som en favorit genom att klicka på hjärtat på produkt kortet</b></p>',
    shoppingListButton: {
      id: 'button_shopping',
      disabled: true,
      surface: 'primary',
      surfaceVariant: 'blue',
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
      surfaceVariant: 'blue',
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const S=["SignupTeaserStory"],j=Object.freeze(Object.defineProperty({__proto__:null,SignupTeaserStory:n,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{a as S,n as a,j as s};
//# sourceMappingURL=signup-teaser.stories-93b722ef.js.map

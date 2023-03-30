import{c as a}from"./index-74f03c09.js";import{P}from"./picture-8799a0b4.js";import{L as W}from"./link-button-f9b44de0.js";import{j as u,a as n}from"./jsx-runtime-76c5c2e2.js";import{PictureStory as C,PictureStoryCookies as E,PictureStoryBoat as V,PictureStoryKitchen as K}from"./picture.stories-c609c08d.js";const L="_hero_zqjnx_1",M="_outerWrapper_zqjnx_15",I="_innerWrapper_zqjnx_47",D="_content_zqjnx_85",O="_topHeading_zqjnx_135",R="_heading_zqjnx_143",w="_preamble_zqjnx_167",A="_linkButton_zqjnx_189",X="_lightTheme_zqjnx_203",$="_darkTheme_zqjnx_221",F="_picture_zqjnx_239",G="_image_zqjnx_249",e={hero:L,outerWrapper:M,innerWrapper:I,content:D,"content-left":"_content-left_zqjnx_101","content-right":"_content-right_zqjnx_109","content-center":"_content-center_zqjnx_121",topHeading:O,heading:R,preamble:w,linkButton:A,lightTheme:X,darkTheme:$,picture:F,image:G};function J(r="left"){return e[`content-${r}`]}function Q(r="light"){return r==="dark"?e.darkTheme:e.lightTheme}const o=({topHeading:r,heading:m,preamble:d,image:q,alignContent:T,link:c,heroTheme:j,fetchPriority:B,loading:N})=>u("section",{className:e.hero,children:[n(P,{...q,fetchPriority:B,loading:N,classNamePicture:e.picture,classNameImg:a(e.image)}),n("div",{className:e.outerWrapper,children:n("div",{className:e.innerWrapper,children:u("div",{className:a(e.content,J(T),Q(j)),children:[(r||m)&&u("header",{children:[r&&n("h2",{className:a("body","fontRegular",e.topHeading),children:r}),m&&n("h1",{className:a("headingXL",e.heading),children:m})]}),d&&n("p",{className:a("body",e.preamble),children:d}),c&&n(W,{...c,className:e.linkButton})]})})})]});try{o.displayName="Hero",o.__docgenInfo={description:"",displayName:"Hero",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},topHeading:{defaultValue:null,description:"",name:"topHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILinkButton"}},heroTheme:{defaultValue:null,description:"",name:"heroTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},fetchPriority:{defaultValue:null,description:"",name:"fetchPriority",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"high"'},{value:'"low"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}}}}}catch{}const U={title:"Design System/Molecules/Heros",component:o},g={render:({...r})=>n("div",{style:{margin:"0 0 0 0"},children:n(o,{...r})})},t={...g,args:{image:C.args,topHeading:"Nytt i höst",heading:"Nya produkter",preamble:"Mer text här...",alignContent:"left",link:{size:"large",surface:"primary",children:"Ny knapp text",href:"#sometext",isExternal:!0,target:null,title:"Ny knapp text"}}},i={...g,args:{image:E.args,topHeading:"Kanske sommarens populäraste....",heading:"Vår smidiga spritzer på fat finns nu i ny smak",preamble:"Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.",alignContent:"left",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},l={...g,args:{image:V.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"right",heroTheme:"light",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},s={...g,args:{image:K.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"center",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}};var p,h,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStory.args,
    topHeading: 'Nytt i höst',
    heading: 'Nya produkter',
    preamble: 'Mer text här...',
    alignContent: 'left',
    link: {
      size: 'large',
      surface: 'primary',
      children: 'Ny knapp text',
      href: '#sometext',
      isExternal: true,
      target: null,
      title: 'Ny knapp text'
    }
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var y,f,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryCookies.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Vår smidiga spritzer på fat finns nu i ny smak',
    preamble: 'Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.',
    alignContent: 'left',
    heroTheme: 'dark',
    link: {
      size: 'large',
      surface: 'primary',
      children: 'Beställ idag',
      href: '#bestalla',
      isExternal: true,
      target: null,
      title: 'Beställ idag'
    }
  }
}`,...(_=(f=i.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var b,x,H;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryBoat.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
    alignContent: 'right',
    heroTheme: 'light',
    link: {
      size: 'large',
      surface: 'primary',
      children: 'Beställ idag',
      href: '#bestalla',
      isExternal: true,
      target: null,
      title: 'Beställ idag'
    }
  }
}`,...(H=(x=l.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var S,v,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryKitchen.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
    alignContent: 'center',
    heroTheme: 'dark',
    link: {
      size: 'large',
      surface: 'primary',
      children: 'Beställ idag',
      href: '#bestalla',
      isExternal: true,
      target: null,
      title: 'Beställ idag'
    }
  }
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const Y=["HeroStory","HeroStoryLeft","HeroStoryRight","HeroStoryCenter"],te=Object.freeze(Object.defineProperty({__proto__:null,HeroStory:t,HeroStoryCenter:s,HeroStoryLeft:i,HeroStoryRight:l,__namedExportsOrder:Y,default:U},Symbol.toStringTag,{value:"Module"}));export{o as H,i as a,l as b,s as c,te as h};
//# sourceMappingURL=hero.stories-11c0477a.js.map

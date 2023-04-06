import{c as n}from"./index-74f03c09.js";import{P as L}from"./picture-45f1777a.js";import{L as q}from"./link-button-6d13b7bf.js";import{j as u,a}from"./jsx-runtime-76c5c2e2.js";import{PictureStory as K,PictureStoryBottles as j,PictureStoryMoscowMule as w,PictureStoryManBrewer as I,PictureStoryWomanBrewer as O}from"./picture.stories-d0d099ca.js";const D="_hero_17cdk_1",R="_outerWrapper_17cdk_15",A="_innerWrapper_17cdk_47",X="_content_17cdk_85",$="_topHeading_17cdk_135",F="_heading_17cdk_143",G="_preamble_17cdk_167",J="_linkButton_17cdk_189",Q="_lightTheme_17cdk_203",U="_darkTheme_17cdk_221",Y="_picture_17cdk_239",Z="_image_17cdk_249",e={hero:D,outerWrapper:R,innerWrapper:A,content:X,"content-left":"_content-left_17cdk_101","content-right":"_content-right_17cdk_109","content-center":"_content-center_17cdk_121",topHeading:$,heading:F,preamble:G,linkButton:J,lightTheme:Q,darkTheme:U,picture:Y,image:Z};function ee(r="left"){return e[`content-${r}`]}function re(r="light"){return r==="dark"?e.darkTheme:e.lightTheme}const d=({topHeading:r,heading:m,preamble:c,image:M,alignContent:C,link:p,heroTheme:h="light",fetchPriority:z,loading:V})=>u("section",{className:e.hero,children:[a(L,{...M,fetchPriority:z,loading:V,classNamePicture:e.picture,classNameImg:n(e.image),pictureWithOpacity:h}),a("div",{className:e.outerWrapper,children:a("div",{className:e.innerWrapper,children:u("div",{className:n(e.content,ee(C),re(h)),children:[(r||m)&&u("header",{children:[r&&a("h2",{className:n("body","fontRegular",e.topHeading),children:r}),m&&a("h1",{className:n("headingXL",e.heading),children:m})]}),c&&a("p",{className:n("body",e.preamble),children:c}),p&&a(q,{...p,className:e.linkButton})]})})})]});try{d.displayName="Hero",d.__docgenInfo={description:"",displayName:"Hero",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},topHeading:{defaultValue:null,description:"",name:"topHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILinkButton"}},heroTheme:{defaultValue:{value:"light"},description:"",name:"heroTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},fetchPriority:{defaultValue:null,description:"",name:"fetchPriority",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"high"'},{value:'"low"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}}}}}catch{}const ae={title:"Design System/Molecules/Heros",component:d},g={render:({...r})=>a("div",{style:{margin:"0 0 0 0"},children:a(d,{...r})})},t={...g,args:{image:K.args,topHeading:"Nytt i höst",heading:"Nya produkter",preamble:"Mer text här...",alignContent:"left",link:{size:"large",surface:"primary",children:"Ny knapp text",href:"#sometext",isExternal:!0,target:null,title:"Ny knapp text"}}},i={...g,args:{image:j.args,topHeading:"Kanske sommarens populäraste....",heading:"Vår smidiga spritzer på fat finns nu i ny smak",preamble:"Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.",alignContent:"center",heroTheme:"light",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},s={...g,args:{image:w.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"left",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},l={...g,args:{image:I.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"left",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},o={...g,args:{image:O.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"right",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}};var k,y,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,_,H;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryBottles.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Vår smidiga spritzer på fat finns nu i ny smak',
    preamble: 'Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.',
    alignContent: 'center',
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
}`,...(H=(_=i.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var S,v,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryMoscowMule.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
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
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var T,x,P;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryManBrewer.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
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
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var W,N,E;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryWomanBrewer.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
    alignContent: 'right',
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
}`,...(E=(N=o.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const ne=["HeroStory","HeroStoryCenter","HeroStoryLeft1","HeroStoryLeft2","HeroStoryRight"],ge=Object.freeze(Object.defineProperty({__proto__:null,HeroStory:t,HeroStoryCenter:i,HeroStoryLeft1:s,HeroStoryLeft2:l,HeroStoryRight:o,__namedExportsOrder:ne,default:ae},Symbol.toStringTag,{value:"Module"}));export{d as H,s as a,i as b,l as c,o as d,ge as h};
//# sourceMappingURL=hero.stories-cf1bef5f.js.map

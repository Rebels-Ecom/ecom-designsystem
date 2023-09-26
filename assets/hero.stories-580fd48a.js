import{c as t}from"./index-74f03c09.js";import{P as S}from"./picture-1385f78c.js";import{L as J}from"./link-button-d63a9320.js";import{V as Q,a as U}from"./video.stories-d5450a01.js";import{j as h,a as r}from"./jsx-runtime-76c5c2e2.js";import{PictureStory as Y,PictureStoryBottles as Z,PictureStoryMoscowMule as ee,PictureStoryManBrewer as re,PictureStoryWomanBrewer as ae,PictureStoryPistonHead as A,PictureStoryPistonHeadLogo as X}from"./picture.stories-91d00d12.js";const ne="_hero_1520o_1",te="_outerWrapper_1520o_15",ie="_innerWrapper_1520o_71",se="_content_1520o_81",le="_dark_1520o_105",oe="_light_1520o_121",ge="_topHeading_1520o_173",de="_heading_1520o_181",me="_preamble_1520o_205",ue="_linkButton_1520o_225",pe="_picture_1520o_239",ce="_image_1520o_249",e={hero:ne,outerWrapper:te,innerWrapper:ie,content:se,dark:le,light:oe,"content-left":"_content-left_1520o_139","content-right":"_content-right_1520o_147","content-center":"_content-center_1520o_159",topHeading:ge,heading:de,preamble:me,linkButton:ue,picture:pe,image:ce};function he(a="left"){return e[`content-${a}`]}const u=({topHeading:a,heading:p,preamble:y,image:$,video:k,contentImage:f,alignContent:F,link:b,heroTheme:c="light",fetchPriority:_,loading:v,isVideo:G})=>h("section",{className:t(e.hero,e[c]),children:[G&&k?r(Q,{...k,videoWithOpacity:c}):r(S,{...$,fetchPriority:_,loading:v,classNamePicture:e.picture,classNameImg:t(e.image),pictureWithOpacity:c}),r("div",{className:e.outerWrapper,children:r("div",{className:e.innerWrapper,children:h("div",{className:t(e.content,he(F)),children:[(a||p)&&h("header",{children:[a&&r("h2",{className:t("body","fontRegular",e.topHeading),children:a}),p&&r("h1",{className:t("headingXL",e.heading),children:p})]}),f&&r(S,{...f,fetchPriority:_,loading:v}),y&&r("p",{className:t("body",e.preamble),children:y}),b&&r(J,{...b,className:e.linkButton})]})})})]});try{u.displayName="Hero",u.__docgenInfo={description:"",displayName:"Hero",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},video:{defaultValue:null,description:"",name:"video",required:!1,type:{name:"IVideo"}},contentImage:{defaultValue:null,description:"",name:"contentImage",required:!1,type:{name:"IPicture"}},topHeading:{defaultValue:null,description:"",name:"topHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILinkButton"}},heroTheme:{defaultValue:{value:"light"},description:"",name:"heroTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},fetchPriority:{defaultValue:null,description:"",name:"fetchPriority",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"high"'},{value:'"low"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}},isVideo:{defaultValue:null,description:"",name:"isVideo",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"Design System/Molecules/Heros",component:u},n={render:({...a})=>r("div",{style:{margin:"0 0 0 0"},children:r(u,{...a})})},i={...n,args:{image:Y.args,topHeading:"Nytt i höst",heading:"Nya produkter",preamble:"Mer text här...",alignContent:"left",link:{size:"large",surface:"primary",children:"Ny knapp text",href:"#sometext",isExternal:!0,target:null,title:"Ny knapp text"}}},s={...n,args:{image:Z.args,topHeading:"Kanske sommarens populäraste....",heading:"Vår smidiga spritzer på fat finns nu i ny smak",preamble:"Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.",alignContent:"center",heroTheme:"light",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},l={...n,args:{image:ee.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"left",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},o={...n,args:{image:re.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"left",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},g={...n,args:{image:ae.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"right",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},d={...n,args:{image:A.args,contentImage:X.args,topHeading:"Kanske sommarens populäraste....",heading:"Pistonhead lager",preamble:"Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden",alignContent:"center",heroTheme:"dark"}},m={...n,args:{image:A.args,video:U.args,isVideo:!0,contentImage:X.args,topHeading:"Kanske sommarens populäraste....",heading:"Pistonhead lager",preamble:"Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden",alignContent:"center",heroTheme:"light"}};var H,P,V;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,x,W;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(x=s.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var T,N,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(N=l.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var E,M,z;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(M=o.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var L,q,K;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=(q=g.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var j,I,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryPistonHead.args,
    contentImage: PictureStoryPistonHeadLogo.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Pistonhead lager',
    preamble: 'Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden',
    alignContent: 'center',
    heroTheme: 'dark'
  }
}`,...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var O,D,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryPistonHead.args,
    video: VideoStory.args,
    isVideo: true,
    contentImage: PictureStoryPistonHeadLogo.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Pistonhead lager',
    preamble: 'Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden',
    alignContent: 'center',
    heroTheme: 'light'
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const ke=["HeroStory","HeroStoryCenter","HeroStoryLeft1","HeroStoryLeft2","HeroStoryRight","HeroStoryPistonhead","HeroStoryVideo"],Pe=Object.freeze(Object.defineProperty({__proto__:null,HeroStory:i,HeroStoryCenter:s,HeroStoryLeft1:l,HeroStoryLeft2:o,HeroStoryPistonhead:d,HeroStoryRight:g,HeroStoryVideo:m,__namedExportsOrder:ke,default:ye},Symbol.toStringTag,{value:"Module"}));export{u as H,m as a,l as b,g as c,o as d,d as e,Pe as h};
//# sourceMappingURL=hero.stories-580fd48a.js.map

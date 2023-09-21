import{c as t}from"./index-74f03c09.js";import{P as _}from"./picture-1385f78c.js";import{L as J}from"./link-button-caf985fe.js";import{V as Q,a as U}from"./video.stories-d5450a01.js";import{j as c,a as r}from"./jsx-runtime-76c5c2e2.js";import{PictureStory as Y,PictureStoryBottles as Z,PictureStoryMoscowMule as ee,PictureStoryManBrewer as re,PictureStoryWomanBrewer as ae,PictureStoryPistonHead as A,PictureStoryPistonHeadLogo as X}from"./picture.stories-91d00d12.js";const ne="_hero_g6hjb_1",te="_outerWrapper_g6hjb_15",se="_innerWrapper_g6hjb_71",ie="_content_g6hjb_81",le="_topHeading_g6hjb_147",oe="_heading_g6hjb_155",ge="_preamble_g6hjb_179",de="_linkButton_g6hjb_199",me="_picture_g6hjb_213",ue="_image_g6hjb_223",e={hero:ne,outerWrapper:te,innerWrapper:se,content:ie,"content-left":"_content-left_g6hjb_113","content-right":"_content-right_g6hjb_121","content-center":"_content-center_g6hjb_133",topHeading:le,heading:oe,preamble:ge,linkButton:de,picture:me,image:ue};function pe(a="left"){return e[`content-${a}`]}const u=({topHeading:a,heading:p,preamble:h,image:$,video:y,contentImage:k,alignContent:F,link:f,heroTheme:b="light",fetchPriority:v,loading:S,isVideo:G})=>c("section",{className:e.hero,children:[G&&y?r(Q,{...y,videoWithOpacity:b}):r(_,{...$,fetchPriority:v,loading:S,classNamePicture:e.picture,classNameImg:t(e.image),pictureWithOpacity:b}),r("div",{className:e.outerWrapper,children:r("div",{className:e.innerWrapper,children:c("div",{className:t(e.content,pe(F)),children:[(a||p)&&c("header",{children:[a&&r("h2",{className:t("body","fontRegular",e.topHeading),children:a}),p&&r("h1",{className:t("headingXL",e.heading),children:p})]}),k&&r(_,{...k,fetchPriority:v,loading:S}),h&&r("p",{className:t("body",e.preamble),children:h}),f&&r(J,{...f,className:e.linkButton})]})})})]});try{u.displayName="Hero",u.__docgenInfo={description:"",displayName:"Hero",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},video:{defaultValue:null,description:"",name:"video",required:!1,type:{name:"IVideo"}},contentImage:{defaultValue:null,description:"",name:"contentImage",required:!1,type:{name:"IPicture"}},topHeading:{defaultValue:null,description:"",name:"topHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILinkButton"}},heroTheme:{defaultValue:{value:"light"},description:"",name:"heroTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},fetchPriority:{defaultValue:null,description:"",name:"fetchPriority",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"high"'},{value:'"low"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}},isVideo:{defaultValue:null,description:"",name:"isVideo",required:!1,type:{name:"boolean"}}}}}catch{}const ce={title:"Design System/Molecules/Heros",component:u},n={render:({...a})=>r("div",{style:{margin:"0 0 0 0"},children:r(u,{...a})})},s={...n,args:{image:Y.args,topHeading:"Nytt i höst",heading:"Nya produkter",preamble:"Mer text här...",alignContent:"left",link:{size:"large",surface:"primary",children:"Ny knapp text",href:"#sometext",isExternal:!0,target:null,title:"Ny knapp text"}}},i={...n,args:{image:Z.args,topHeading:"Kanske sommarens populäraste....",heading:"Vår smidiga spritzer på fat finns nu i ny smak",preamble:"Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.",alignContent:"center",heroTheme:"light",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},l={...n,args:{image:ee.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"left",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},o={...n,args:{image:re.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"left",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},g={...n,args:{image:ae.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"right",heroTheme:"dark",link:{size:"large",surface:"primary",children:"Beställ idag",href:"#bestalla",isExternal:!0,target:null,title:"Beställ idag"}}},d={...n,args:{image:A.args,contentImage:X.args,topHeading:"Kanske sommarens populäraste....",heading:"Pistonhead lager",preamble:"Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden",alignContent:"center",heroTheme:"dark"}},m={...n,args:{image:A.args,video:U.args,isVideo:!0,contentImage:X.args,topHeading:"Kanske sommarens populäraste....",heading:"Pistonhead lager",preamble:"Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden",alignContent:"center",heroTheme:"dark"}};var H,P,V;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(P=s.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,x,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var W,T,N;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var C,E,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var z,L,q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var K,I,w;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    heroTheme: 'dark'
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const he=["HeroStory","HeroStoryCenter","HeroStoryLeft1","HeroStoryLeft2","HeroStoryRight","HeroStoryPistonhead","HeroStoryVideo"],_e=Object.freeze(Object.defineProperty({__proto__:null,HeroStory:s,HeroStoryCenter:i,HeroStoryLeft1:l,HeroStoryLeft2:o,HeroStoryPistonhead:d,HeroStoryRight:g,HeroStoryVideo:m,__namedExportsOrder:he,default:ce},Symbol.toStringTag,{value:"Module"}));export{u as H,m as a,l as b,g as c,o as d,d as e,_e as h};
//# sourceMappingURL=hero.stories-991ea21f.js.map

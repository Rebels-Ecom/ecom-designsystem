import{c as o}from"./index-74f03c09.js";import{P as W}from"./picture-8799a0b4.js";import{L as V}from"./link-button-092a91d1.js";import{j as c,a as t,F as L}from"./jsx-runtime-76c5c2e2.js";import{PictureStory as j,PictureStoryCookies as M,PictureStoryBoat as z,PictureStoryKitchen as I}from"./picture.stories-d6e59fff.js";const K="_hero_1q5bu_1",R="_outerWrapper_1q5bu_15",E="_innerWrapper_1q5bu_47",O="_content_1q5bu_85",D="_topHeading_1q5bu_135",F="_heading_1q5bu_143",$="_preamble_1q5bu_167",w="_linkButton_1q5bu_189",A="_lightTheme_1q5bu_203",X="_darkTheme_1q5bu_221",G="_picture_1q5bu_239",J="_image_1q5bu_251",e={hero:K,outerWrapper:R,innerWrapper:E,content:O,"content-left":"_content-left_1q5bu_101","content-right":"_content-right_1q5bu_109","content-center":"_content-center_1q5bu_121",topHeading:D,heading:F,preamble:$,linkButton:w,lightTheme:A,darkTheme:X,picture:G,image:J};function Q(r="left"){return e[`content-${r}`]}function U(r="light"){return r==="dark"?e.darkTheme:e.lightTheme}const l=({topHeading:r,heading:m,preamble:d,image:T,alignContent:C,link:g,heroTheme:x,fetchPriority:P,loading:B})=>c("section",{className:e.hero,children:[t(W,{...T,fetchPriority:P,loading:B,classNamePicture:e.picture,classNameImg:o(e.image)}),t("div",{className:e.outerWrapper,children:t("div",{className:e.innerWrapper,children:c("div",{className:o(e.content,Q(C),U(x)),children:[(r||m)&&c("header",{children:[r&&t("h2",{className:o("body","fontRegular",e.topHeading),children:r}),m&&t("h1",{className:o("headingXL",e.heading),children:m})]}),d&&t("p",{className:o("body",e.preamble),children:d}),g&&t(V,{surface:"primary",size:"small",...g,className:e.linkButton})]})})})]});try{l.displayName="Hero",l.__docgenInfo={description:"",displayName:"Hero",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},topHeading:{defaultValue:null,description:"",name:"topHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},heroTheme:{defaultValue:null,description:"",name:"heroTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},fetchPriority:{defaultValue:null,description:"",name:"fetchPriority",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"high"'},{value:'"low"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}}}}}catch{}const Y={title:"Design System/Molecules/Heros",component:l},u=r=>t(L,{children:t("div",{style:{margin:"0 0 0 0"},children:t(l,{...r})})}),a=u.bind({});a.storyName="Hero";a.args={image:j.args,topHeading:"Nytt i höst",heading:"Nya produkter",preamble:"Mer text här...",alignContent:"left",link:{text:"Ny knapp text",href:"#sometext",linkComponent:"a",title:"Ny knapp text"}};const n=u.bind({});n.storyName="Hero Left";n.args={image:M.args,topHeading:"Kanske sommarens populäraste....",heading:"Vår smidiga spritzer på fat finns nu i ny smak",preamble:"Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.",alignContent:"left",heroTheme:"dark",link:{text:"Beställ idag",href:"#bestalla",linkComponent:"a",title:"Beställ idag"}};const i=u.bind({});i.storyName="Hero Right";i.args={image:z.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"right",heroTheme:"light",link:{text:"Beställ idag",href:"#bestalla",linkComponent:"a",title:"Beställ idag"}};const s=u.bind({});s.storyName="Hero Center";s.args={image:I.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"center",heroTheme:"dark",link:{text:"Beställ idag",href:"#bestalla",linkComponent:"a",title:"Beställ idag"}};var p,h,_;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 0 0'
    }}>
        <Hero {...args} />
      </div>
    </>;
}`,...(_=(h=a.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var y,f,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 0 0'
    }}>
        <Hero {...args} />
      </div>
    </>;
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,v,H;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 0 0'
    }}>
        <Hero {...args} />
      </div>
    </>;
}`,...(H=(v=i.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var q,N,S;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 0 0'
    }}>
        <Hero {...args} />
      </div>
    </>;
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const Z=["HeroStory","HeroStoryLeft","HeroStoryRight","HeroStoryCenter"],ie=Object.freeze(Object.defineProperty({__proto__:null,HeroStory:a,HeroStoryCenter:s,HeroStoryLeft:n,HeroStoryRight:i,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{l as H,n as a,i as b,s as c,ie as h};
//# sourceMappingURL=hero.stories-cfc38f79.js.map

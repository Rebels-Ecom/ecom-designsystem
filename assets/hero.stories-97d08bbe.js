import{c as o}from"./index-74f03c09.js";import{P as V}from"./picture-8799a0b4.js";import{L as x}from"./link-button-092a91d1.js";import{j as d,a as n,F as L}from"./jsx-runtime-76c5c2e2.js";import{PictureStory as j,PictureStoryCookies as M,PictureStoryBoat as z,PictureStoryKitchen as I}from"./picture.stories-d6e59fff.js";const K="_hero_1q5bu_1",R="_outerWrapper_1q5bu_15",E="_innerWrapper_1q5bu_47",F="_content_1q5bu_85",O="_topHeading_1q5bu_135",D="_heading_1q5bu_143",$="_preamble_1q5bu_167",w="_linkButton_1q5bu_189",A="_lightTheme_1q5bu_203",X="_darkTheme_1q5bu_221",G="_picture_1q5bu_239",J="_image_1q5bu_251",e={hero:K,outerWrapper:R,innerWrapper:E,content:F,"content-left":"_content-left_1q5bu_101","content-right":"_content-right_1q5bu_109","content-center":"_content-center_1q5bu_121",topHeading:O,heading:D,preamble:$,linkButton:w,lightTheme:A,darkTheme:X,picture:G,image:J};function Q(r="left"){return e[`content-${r}`]}function U(r="light"){return r==="dark"?e.darkTheme:e.lightTheme}const l=({topHeading:r,heading:u,preamble:c,image:T,alignContent:C,link:g,heroTheme:P,fetchPriority:B,loading:W})=>d("section",{className:e.hero,children:[n(V,{...T,fetchPriority:B,loading:W,classNamePicture:e.picture,classNameImg:o(e.image)}),n("div",{className:e.outerWrapper,children:n("div",{className:e.innerWrapper,children:d("div",{className:o(e.content,Q(C),U(P)),children:[(r||u)&&d("header",{children:[r&&n("h2",{className:o("body","fontRegular",e.topHeading),children:r}),u&&n("h1",{className:o("headingXL",e.heading),children:u})]}),c&&n("p",{className:o("body",e.preamble),children:c}),g&&n(x,{surface:"primary",size:"small",...g,className:e.linkButton})]})})})]});try{l.displayName="Hero",l.__docgenInfo={description:"",displayName:"Hero",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},topHeading:{defaultValue:null,description:"",name:"topHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},heroTheme:{defaultValue:null,description:"",name:"heroTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},fetchPriority:{defaultValue:null,description:"",name:"fetchPriority",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"high"'},{value:'"low"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}}}}}catch{}const Y={title:"Design System/Molecules/Heros",component:l},m=r=>n(L,{children:n("div",{style:{margin:"0 0 0 0"},children:n(l,{...r})})}),a=m.bind({});a.storyName="Hero";a.args={image:j.args,topHeading:"Nytt i höst",heading:"Möte, konferens & filmevent med Filmstaden",preamble:"Låt ditt varumärke följa våra gäster genom hela biobesöket - innan, under och efter.",alignContent:"left",link:{text:"Ny bokningsförfrågan",href:"#bokningsforfragan",linkComponent:"a",title:"Ny bokningsförfrågan"}};const t=m.bind({});t.storyName="Hero Left";t.args={image:M.args,topHeading:"Kanske sommarens populäraste....",heading:"Vår smidiga spritzer på fat finns nu i ny smak",preamble:"Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.",alignContent:"left",heroTheme:"dark",link:{text:"Beställ idag",href:"#bestalla",linkComponent:"a",title:"Beställ idag"}};const i=m.bind({});i.storyName="Hero Right";i.args={image:z.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"right",heroTheme:"light",link:{text:"Beställ idag",href:"#bestalla",linkComponent:"a",title:"Beställ idag"}};const s=m.bind({});s.storyName="Hero Center";s.args={image:I.args,topHeading:"Kanske sommarens populäraste....",heading:"Wisby är tillbaka, nu bättre en någonsin",preamble:"Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär",alignContent:"center",heroTheme:"dark",link:{text:"Beställ idag",href:"#bestalla",linkComponent:"a",title:"Beställ idag"}};var p,h,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 0 0'
    }}>
        <Hero {...args} />
      </div>
    </>;
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var _,y,b;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      margin: '0 0 0 0'
    }}>
        <Hero {...args} />
      </div>
    </>;
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,v,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const Z=["HeroStory","HeroStoryLeft","HeroStoryRight","HeroStoryCenter"],ie=Object.freeze(Object.defineProperty({__proto__:null,HeroStory:a,HeroStoryCenter:s,HeroStoryLeft:t,HeroStoryRight:i,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{l as H,t as a,i as b,s as c,ie as h};
//# sourceMappingURL=hero.stories-97d08bbe.js.map

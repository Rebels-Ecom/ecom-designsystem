import{c as m}from"./index-74f03c09.js";import{U as v}from"./ui-link-0bef27c7.js";import{P as C}from"./picture-8799a0b4.js";import{a as r,j as c,F as f}from"./jsx-runtime-76c5c2e2.js";import{CardSquareStory as S}from"./card-square.stories-620aeda2.js";const b="_card_10qqn_1",x="_content_10qqn_35",N="_center_10qqn_55",k="_middleCenter_10qqn_63",I="_heading_10qqn_81",T="_preamble_10qqn_107",P="_link_10qqn_131",j="_picture_10qqn_139",F="_image_10qqn_153",V="_contain_10qqn_175",w="_fill_10qqn_181",O="_cover_10qqn_187",e={card:b,content:x,center:N,middleCenter:k,heading:I,preamble:T,link:P,picture:j,image:F,contain:V,fill:w,cover:O},s=({heading:t,preamble:d,link:o,image:i,imageFit:l})=>r("div",{className:e.card,children:c("div",{className:m(e.content,(i||!o)&&e.center,i&&e.middleCenter),children:[i&&r(C,{...i,classNamePicture:e.picture,classNameImg:m(e.image,l&&e[l])}),!i&&c(f,{children:[c("div",{children:[t&&r("h2",{className:e.heading,children:t}),d&&r("h3",{className:e.preamble,children:d})]}),o&&r(v,{...o,iconRight:"icon-arrow-right",onSurface:"transparent",size:"default",className:e.link})]})]})});try{s.displayName="Card_16_9",s.__docgenInfo={description:"",displayName:"Card_16_9",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"IPicture"}},imageFit:{defaultValue:null,description:"",name:"imageFit",required:!1,type:{name:"enum",value:[{value:'"contain"'},{value:'"cover"'},{value:'"fill"'}]}}}}}catch{}const L={title:"Design System/Atoms/Cards/Card_16_9",component:s},y=t=>r(f,{children:r("div",{style:{width:"100%",marginTop:"2rem",maxWidth:388},children:r(s,{...t})})}),a=y.bind({}),W={id:"pictureOne",src:"/fimstaden-light-logo.png",sources:[{srcset:"/fimstaden-light-logo.png"}],alt:"Placholder",loading:"eager",decoding:"auto",fetchPriority:"auto"};a.args={heading:"Förhandsvisning",preamble:"Låt varumärken ta plats",link:{...S.args.link,onSurface:"transparent"},imageFit:"contain"};a.storyName="Card 16:9 Text";const n=y.bind({});n.args={...a.args,image:W};n.storyName="Card 16:9 Image";var _,p,u;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '100%',
      marginTop: '2rem',
      maxWidth: 388
    }}>
        <Card_16_9 {...args} />
      </div>
    </>;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,q;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '100%',
      marginTop: '2rem',
      maxWidth: 388
    }}>
        <Card_16_9 {...args} />
      </div>
    </>;
}`,...(q=(h=n.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const z=["Card_16_9StoryText","Card_16_9StoryImage"],M=Object.freeze(Object.defineProperty({__proto__:null,Card_16_9StoryImage:n,Card_16_9StoryText:a,__namedExportsOrder:z,default:L},Symbol.toStringTag,{value:"Module"}));export{s as C,a,n as b,M as c};
//# sourceMappingURL=card-16-9.stories-a699f3c9.js.map

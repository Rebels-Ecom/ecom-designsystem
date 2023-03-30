import{L}from"./link-button-f9b44de0.js";import{P as v}from"./picture-8799a0b4.js";import{T}from"./tag-f7025b30.js";import{c as q}from"./index-74f03c09.js";import{j as s,a as t}from"./jsx-runtime-76c5c2e2.js";import{PictureStory as _}from"./picture.stories-c609c08d.js";import{TagStoryRound_S as h}from"./tag.stories-6e6e2eff.js";const R="_teaser_b2g1q_1",P="_teaserLeft_b2g1q_14",B="_teaserRight_b2g1q_20",j="_imageWrapper_b2g1q_27",N="_tag_b2g1q_45",W="_tagLeft_b2g1q_52",V="_tagRight_b2g1q_56",F="_picture_b2g1q_60",I="_image_b2g1q_27",$="_contentWrapper_b2g1q_73",z="_contentLeft_b2g1q_86",C="_contentRight_b2g1q_99",U="_heading_b2g1q_115",M="_preamble_b2g1q_120",O="_linkButton_b2g1q_124",w="_text_b2g1q_128",K="_textRight_b2g1q_158",e={teaser:R,teaserLeft:P,teaserRight:B,imageWrapper:j,tag:N,tagLeft:W,tagRight:V,picture:F,image:I,contentWrapper:$,contentLeft:z,contentRight:C,heading:U,preamble:M,linkButton:O,text:w,textRight:K},i=({heading:n,preamble:o,text:y,image:b,imagePosition:l,tag:g,tagPosition:S,linkButton:x,fullWidth:H})=>s("div",{className:`${e.teaser} ${l==="left"?e.teaserLeft:e.teaserRight}`,children:[s("div",{className:e.imageWrapper,children:[t(v,{...b,classNamePicture:e.picture,classNameImg:e.image}),g&&t(T,{...g,className:`${e.tag} ${S==="left"?e.tagLeft:e.tagRight}`})]}),s("div",{className:`${e.contentWrapper} ${l==="left"?e.contentRight:e.contentLeft}`,children:[t("h2",{className:e.heading,children:n}),o&&t("p",{className:e.preamble,children:o}),t("p",{className:q(e.text,l==="right"&&e.textRight),dangerouslySetInnerHTML:{__html:y}}),t(L,{surface:"primary",...x,className:e.linkButton})]})]});try{i.displayName="Teaser",i.__docgenInfo={description:"",displayName:"Teaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},imagePosition:{defaultValue:null,description:"",name:"imagePosition",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"ITag"}},tagPosition:{defaultValue:null,description:"",name:"tagPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},linkButton:{defaultValue:null,description:"",name:"linkButton",required:!0,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Design System/Molecules/Teaser",component:i},k={render:({...n})=>t("div",{style:{margin:"0 auto",maxWidth:"73rem"},children:t(i,{...n})})},a={...k,args:{image:_.args,imagePosition:"left",tag:h.args,tagPosition:"left",heading:"Kockens naturliga val",preamble:"Utbildningar för din personal",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p><ul><li>Lära dig konsten att prova vin</li><li>Vad passar med vad</li><li>Utmana smaklökarna</li><li>Få en djupdykning</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},r={...k,args:{image:_.args,imagePosition:"right",tag:h.args,tagPosition:"right",heading:"Stockholm bästa gin",preamble:"Skapad på Södermalm i Stockholm",text:"<p>Framtagen tillsammans med Ludwig Tj&ouml;rnemo. Fyller p&aring; med text f&ouml;r att se hur det blir visuellt p&aring; sidan. Fyller p&aring; med mer text f&ouml;r att se hur det blir</p><ul><li>test1</li><li>test2</li><li>test3</li></ul>",linkButton:{text:"Läs mer",href:"#bokningsforfragan",linkComponent:"a",title:"Läs mer",surface:"primary",size:"large",children:"Läs mer"}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStory.args,
    imagePosition: 'left',
    tag: TagStoryRound_S.args,
    tagPosition: 'left',
    heading: 'Kockens naturliga val',
    preamble: 'Utbildningar för din personal',
    text: '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p><ul><li>Lära dig konsten att prova vin</li><li>Vad passar med vad</li><li>Utmana smaklökarna</li><li>Få en djupdykning</li></ul>',
    linkButton: {
      text: 'Boka din plats',
      href: '#bokningsforfragan',
      linkComponent: 'a',
      title: 'Boka din plats',
      surface: 'primary',
      size: 'large',
      children: 'Boka din plats'
    }
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,c,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStory.args,
    imagePosition: 'right',
    tag: TagStoryRound_S.args,
    tagPosition: 'right',
    heading: 'Stockholm bästa gin',
    preamble: 'Skapad på Södermalm i Stockholm',
    text: '<p>Framtagen tillsammans med Ludwig Tj&ouml;rnemo. Fyller p&aring; med text f&ouml;r att se hur det blir visuellt p&aring; sidan. Fyller p&aring; med mer text f&ouml;r att se hur det blir</p><ul><li>test1</li><li>test2</li><li>test3</li></ul>',
    linkButton: {
      text: 'Läs mer',
      href: '#bokningsforfragan',
      linkComponent: 'a',
      title: 'Läs mer',
      surface: 'primary',
      size: 'large',
      children: 'Läs mer'
    }
  }
}`,...(f=(c=r.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const E=["TeaserStoryLeft","TeaserStoryRight"],ee=Object.freeze(Object.defineProperty({__proto__:null,TeaserStoryLeft:a,TeaserStoryRight:r,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{i as T,r as a,a as b,ee as t};
//# sourceMappingURL=teaser.stories-20a8551f.js.map

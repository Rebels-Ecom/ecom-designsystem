import{L}from"./link-button-d63a9320.js";import{P as B}from"./picture-1385f78c.js";import{T as P}from"./tag-cf40f1b7.js";import{c as R}from"./index-74f03c09.js";import{j as o,a as t}from"./jsx-runtime-76c5c2e2.js";import{PictureStory_Teaser_KockensVal as V,PictureStory_Teaser_Gin as N,PictureStory_Teaser_Beer as W}from"./picture.stories-91d00d12.js";import{TagStoryRound_S as g}from"./tag.stories-3854d668.js";const M="_teaser_je5n2_1",I="_teaserLeft_je5n2_14",q="_teaserRight_je5n2_20",z="_imageWrapper_je5n2_27",C="_tag_je5n2_45",U="_tagLeft_je5n2_52",$="_tagRight_je5n2_56",K="_picture_je5n2_60",E="_image_je5n2_27",O="_contentWrapper_je5n2_73",F="_contentLeft_je5n2_90",G="_contentRight_je5n2_99",J="_heading_je5n2_111",D="_preamble_je5n2_116",H="_linkButton_je5n2_120",w="_text_je5n2_124",A="_textRight_je5n2_154",e={teaser:M,teaserLeft:I,teaserRight:q,imageWrapper:z,tag:C,tagLeft:U,tagRight:$,picture:K,image:E,contentWrapper:O,contentLeft:F,contentRight:G,heading:J,preamble:D,linkButton:H,text:w,textRight:A},s=({heading:i,preamble:d,text:T,image:j,imagePosition:l,tag:p,tagPosition:b,linkButton:x,fullWidth:Y})=>o("div",{className:`${e.teaser} ${l==="left"?e.teaserLeft:e.teaserRight}`,children:[o("div",{className:e.imageWrapper,children:[t(B,{...j,classNamePicture:e.picture,classNameImg:e.image}),p&&t(P,{...p,className:`${e.tag} ${b==="left"?e.tagLeft:e.tagRight}`})]}),o("div",{className:`${e.contentWrapper} ${l==="left"?e.contentRight:e.contentLeft}`,children:[t("h2",{className:e.heading,children:i}),d&&t("p",{className:e.preamble,children:d}),t("p",{className:R(e.text,l==="right"&&e.textRight),dangerouslySetInnerHTML:{__html:T}}),t(L,{surface:"primary",...x,className:e.linkButton})]})]});try{s.displayName="Teaser",s.__docgenInfo={description:"",displayName:"Teaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},imagePosition:{defaultValue:null,description:"",name:"imagePosition",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"ITag"}},tagPosition:{defaultValue:null,description:"",name:"tagPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},linkButton:{defaultValue:null,description:"",name:"linkButton",required:!0,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"Design System/Molecules/Teaser",component:s},m={render:({...i})=>t("div",{style:{margin:"0 auto",maxWidth:"73rem"},children:t(s,{...i})})},a={...m,args:{image:V.args,imagePosition:"left",tag:g.args,tagPosition:"left",heading:"Kockens naturliga val",preamble:"Utbildningar för din personal",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p><ul><li>Lära dig konsten att prova vin</li><li>Vad passar med vad</li><li>Utmana smaklökarna</li><li>Få en djupdykning</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},n={...m,args:{image:N.args,imagePosition:"right",tag:g.args,tagPosition:"right",heading:"Stockholm bästa gin",preamble:"Skapad på Södermalm i Stockholm",text:"<p>I en gammal Jaguarverkstad på Södermalm i Stockholm. Ligger Stockholms Bränneri I den gamla verkstaden skapar dom Stockholms första hantverksgin, inspirerad av vårt nordiska arv. Påverkade av de naturliga men också arkitektoniska elementen i deras omgivning, drivna av nyfikenhet.</p>",linkButton:{text:"Läs mer",href:"#bokningsforfragan",linkComponent:"a",title:"Läs mer",surface:"primary",size:"large",children:"Läs mer"}}},r={...m,args:{image:W.args,imagePosition:"left",tag:g.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}};var c,u,k;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStory_Teaser_KockensVal.args,
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
}`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var f,h,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStory_Teaser_Gin.args,
    imagePosition: 'right',
    tag: TagStoryRound_S.args,
    tagPosition: 'right',
    heading: 'Stockholm bästa gin',
    preamble: 'Skapad på Södermalm i Stockholm',
    text: '<p>I en gammal Jaguarverkstad på Södermalm i Stockholm. Ligger Stockholms Bränneri I den gamla verkstaden skapar dom Stockholms första hantverksgin, inspirerad av vårt nordiska arv. Påverkade av de naturliga men också arkitektoniska elementen i deras omgivning, drivna av nyfikenhet.</p>',
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
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var v,y,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStory_Teaser_Beer.args,
    imagePosition: 'left',
    tag: TagStoryRound_S.args,
    tagPosition: 'left',
    heading: 'Mer smak med Melleruds',
    preamble: 'Utmärkt pilsner',
    text: '<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>',
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
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const X=["TeaserStoryLeft1","TeaserStoryRight","TeaserStoryLeft2"],se=Object.freeze(Object.defineProperty({__proto__:null,TeaserStoryLeft1:a,TeaserStoryLeft2:r,TeaserStoryRight:n,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{n as T,a,r as b,s as c,se as t};
//# sourceMappingURL=teaser.stories-a22d2ba7.js.map
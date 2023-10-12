import{L as B}from"./link-button-10720cac.js";import{P as j}from"./picture-097a8d40.js";import{T as N}from"./tag-cf40f1b7.js";import{c as u}from"./index-74f03c09.js";import{j as l,a as t}from"./jsx-runtime-76c5c2e2.js";import{PictureStoryPistonHead as V,PictureStory_Teaser_Gin as W,PictureStory_Teaser_Beer as M}from"./picture.stories-05fb3950.js";import{TagStoryRound_S as m}from"./tag.stories-3854d668.js";import{C as q}from"./content-wrapper-854859bc.js";const I="_teaser_nkh7p_1",C="_teaserLeft_nkh7p_11",z="_contentWrapper_nkh7p_15",U="_linkButton_nkh7p_21",$="_teaserRight_nkh7p_26",E="_imageWrapper_nkh7p_34",H="_imageRound_nkh7p_41",O="_image_nkh7p_34",F="_tag_nkh7p_66",G="_tagLeft_nkh7p_73",J="_tagRight_nkh7p_77",K="_picture_nkh7p_81",D="_contentLeft_nkh7p_105",w="_contentRight_nkh7p_114",A="_heading_nkh7p_124",Q="_preamble_nkh7p_130",X="_text_nkh7p_135",Y="_textRight_nkh7p_161",e={teaser:I,teaserLeft:C,contentWrapper:z,linkButton:U,teaserRight:$,imageWrapper:E,imageRound:H,image:O,tag:F,tagLeft:G,tagRight:J,picture:K,contentLeft:D,contentRight:w,heading:A,preamble:Q,text:X,textRight:Y},s=({heading:a,preamble:d,text:P,image:b,imagePosition:o,tag:p,tagPosition:L,linkButton:R,imageRound:x,fullWidth:te})=>l("div",{className:`${e.teaser} ${o==="left"?e.teaserLeft:e.teaserRight}`,children:[l("div",{className:u(e.imageWrapper,{[e.imageRound]:x}),children:[t(j,{...b,classNamePicture:e.picture,classNameImg:e.image}),p&&t(N,{...p,className:`${e.tag} ${L==="left"?e.tagLeft:e.tagRight}`})]}),l("div",{className:`${e.contentWrapper} ${o==="left"?e.contentRight:e.contentLeft}`,children:[t("h2",{className:e.heading,children:a}),d&&t("p",{className:e.preamble,children:d}),t("p",{className:u(e.text,o==="right"&&e.textRight),dangerouslySetInnerHTML:{__html:P}}),t(B,{surface:"primary",...R,className:e.linkButton})]})]});try{s.displayName="Teaser",s.__docgenInfo={description:"",displayName:"Teaser",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},imagePosition:{defaultValue:null,description:"",name:"imagePosition",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},imageRound:{defaultValue:null,description:"",name:"imageRound",required:!1,type:{name:"boolean"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"ITag"}},tagPosition:{defaultValue:null,description:"",name:"tagPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},linkButton:{defaultValue:null,description:"",name:"linkButton",required:!0,type:{name:"ILink"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Design System/Molecules/Teaser",component:s},g={render:({...a})=>l(q,{children:[t(s,{...a}),t(s,{...a,imagePosition:"right"})]})},n={...g,args:{image:V.args,imagePosition:"left",imageRound:!0,tag:m.args,tagPosition:"left",heading:"Kockens naturliga val",preamble:"Utbildningar för din personal",text:"<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p><ul><li>Lära dig konsten att prova vin</li><li>Vad passar med vad</li><li>Utmana smaklökarna</li><li>Få en djupdykning</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}},r={...g,args:{image:W.args,imagePosition:"right",tag:m.args,tagPosition:"right",heading:"Stockholm bästa gin",preamble:"Skapad på Södermalm i Stockholm",text:"<p>I en gammal Jaguarverkstad på Södermalm i Stockholm. Ligger Stockholms Bränneri I den gamla verkstaden skapar dom Stockholms första hantverksgin, inspirerad av vårt nordiska arv. Påverkade av de naturliga men också arkitektoniska elementen i deras omgivning, drivna av nyfikenhet.</p>",linkButton:{text:"Läs mer",href:"#bokningsforfragan",linkComponent:"a",title:"Läs mer",surface:"primary",size:"large",children:"Läs mer"}}},i={...g,args:{image:M.args,imagePosition:"left",tag:m.args,tagPosition:"left",heading:"Mer smak med Melleruds",preamble:"Utmärkt pilsner",text:"<p>Melleruds är en modern rejäl svensk lager som förbinder tradition med ett genuint hantverkskunnande. Som alltid är väl avvägd.</p><ul><li>Perfekt som sällskapsdryck</li><li>Med en utsökt beska</li><li>Svensk ljus lager</li><li>Ekologisk</li></ul>",linkButton:{text:"Boka din plats",href:"#bokningsforfragan",linkComponent:"a",title:"Boka din plats",surface:"primary",size:"large",children:"Boka din plats"}}};var c,k,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...TeaserStoryTemplate,
  args: {
    image: PictureStoryPistonHead.args,
    imagePosition: 'left',
    imageRound: true,
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
}`,...(h=(k=n.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var f,_,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(_=r.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var y,S,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const ee=["TeaserStoryLeft1","TeaserStoryRight","TeaserStoryLeft2"],ge=Object.freeze(Object.defineProperty({__proto__:null,TeaserStoryLeft1:n,TeaserStoryLeft2:i,TeaserStoryRight:r,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{r as T,n as a,i as b,s as c,ge as t};
//# sourceMappingURL=teaser.stories-6c9034a9.js.map

import{c as n}from"./index-09749a66.js";import{P as m}from"./picture-b42c0b1b.js";import{L as v}from"./link-button-deeb7d4c.js";import{V as f}from"./video-887fb8ef.js";import{j as t}from"./jsx-runtime-03333307.js";const y="_hero_12vco_1",x="_outerWrapper_12vco_23",j="_innerWrapper_12vco_77",q="_content_12vco_87",N="_textContent_12vco_117",T="_dark_12vco_127",W="_light_12vco_143",b="_topHeading_12vco_183",k="_heading_12vco_199",I="_preamble_12vco_223",w="_linkButton_12vco_243",B="_picture_12vco_261",C="_image_12vco_271",e={hero:y,outerWrapper:x,innerWrapper:j,content:q,textContent:N,dark:T,light:W,"content-right":"_content-right_12vco_161","content-center":"_content-center_12vco_169",topHeading:b,heading:k,preamble:I,linkButton:w,picture:B,image:C};function H(r="left"){return e[`content-${r}`]}const P=({topHeading:r,heading:i,preamble:o,image:u,video:l,contentImage:c,alignContent:_,link:a,heroTheme:s="light",fetchPriority:p,loading:d,isVideo:g,fallbackImageUrl:h})=>t.jsxs("section",{className:n(e.hero,e[s]),children:[g&&l?t.jsx(f,{...l,videoWithOpacity:s}):t.jsx(m,{...u,fallbackImageUrl:h,fetchPriority:p,loading:d,classNamePicture:e.picture,classNameImg:n(e.image),pictureWithOpacity:s}),t.jsx("div",{className:e.outerWrapper,children:t.jsx("div",{className:e.innerWrapper,children:t.jsxs("div",{className:n(e.content,H(_)),children:[(r||i)&&t.jsxs("div",{className:e.textContent,children:[r&&t.jsx("h2",{className:n("body","fontRegular",e.topHeading),children:r}),i&&t.jsx("h1",{className:n("headingXL",e.heading),children:i})]}),c&&t.jsx(m,{...c,fetchPriority:p,loading:d}),o&&t.jsx("p",{className:n("body",e.preamble),children:o}),(a==null?void 0:a.href)&&t.jsx(v,{...a,className:e.linkButton})]})})})]});P.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{image:{required:!0,tsType:{name:"IPicture"},description:""},fallbackImageUrl:{required:!1,tsType:{name:"string"},description:""},video:{required:!1,tsType:{name:"IVideo"},description:""},contentImage:{required:!1,tsType:{name:"IPicture"},description:""},topHeading:{required:!1,tsType:{name:"string"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},preamble:{required:!1,tsType:{name:"string"},description:""},alignContent:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}]},description:""},link:{required:!1,tsType:{name:"ILinkButton"},description:""},heroTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},fetchPriority:{required:!1,tsType:{name:"union",raw:"'high' | 'low' | 'auto'",elements:[{name:"literal",value:"'high'"},{name:"literal",value:"'low'"},{name:"literal",value:"'auto'"}]},description:""},loading:{required:!1,tsType:{name:"union",raw:"'eager' | 'lazy'",elements:[{name:"literal",value:"'eager'"},{name:"literal",value:"'lazy'"}]},description:""},isVideo:{required:!1,tsType:{name:"boolean"},description:""}}};export{P as H};
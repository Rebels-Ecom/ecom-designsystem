import{c as a}from"./index-74f03c09.js";import{P as m}from"./picture-097a8d40.js";import{L as h}from"./link-button-ac486e45.js";import{V as v}from"./video-385e7077.js";import{j as l,a as t}from"./jsx-runtime-76c5c2e2.js";const V="_hero_y013z_1",z="_outerWrapper_y013z_15",q="_innerWrapper_y013z_69",N="_content_y013z_79",k="_dark_y013z_103",W="_light_y013z_119",b="_topHeading_y013z_171",H="_heading_y013z_179",I="_preamble_y013z_203",B="_linkButton_y013z_223",P="_picture_y013z_237",x="_image_y013z_247",e={hero:V,outerWrapper:z,innerWrapper:q,content:N,dark:k,light:W,"content-left":"_content-left_y013z_137","content-right":"_content-right_y013z_145","content-center":"_content-center_y013z_157",topHeading:b,heading:H,preamble:I,linkButton:B,picture:P,image:x};function L(n="left"){return e[`content-${n}`]}const _=({topHeading:n,heading:r,preamble:o,image:g,video:u,contentImage:c,alignContent:y,link:s,heroTheme:i="light",fetchPriority:d,loading:p,isVideo:f})=>l("section",{className:a(e.hero,e[i]),children:[f&&u?t(v,{...u,videoWithOpacity:i}):t(m,{...g,fetchPriority:d,loading:p,classNamePicture:e.picture,classNameImg:a(e.image),pictureWithOpacity:i}),t("div",{className:e.outerWrapper,children:t("div",{className:e.innerWrapper,children:l("div",{className:a(e.content,L(y)),children:[(n||r)&&l("header",{children:[n&&t("h2",{className:a("body","fontRegular",e.topHeading),children:n}),r&&t("h1",{className:a("headingXL",e.heading),children:r})]}),c&&t(m,{...c,fetchPriority:d,loading:p}),o&&t("p",{className:a("body",e.preamble),children:o}),s&&t(h,{...s,className:e.linkButton})]})})})]});try{_.displayName="Hero",_.__docgenInfo={description:"",displayName:"Hero",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},video:{defaultValue:null,description:"",name:"video",required:!1,type:{name:"IVideo"}},contentImage:{defaultValue:null,description:"",name:"contentImage",required:!1,type:{name:"IPicture"}},topHeading:{defaultValue:null,description:"",name:"topHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILinkButton"}},heroTheme:{defaultValue:{value:"light"},description:"",name:"heroTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},fetchPriority:{defaultValue:null,description:"",name:"fetchPriority",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"high"'},{value:'"low"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}},isVideo:{defaultValue:null,description:"",name:"isVideo",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as H};
//# sourceMappingURL=hero-e9c5cf0b.js.map
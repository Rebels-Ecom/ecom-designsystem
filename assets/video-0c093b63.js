import{r as t,a as p,F as y,j as i}from"./jsx-runtime-a3a6c0b8.js";import{c as d}from"./index-a587463d.js";const f="_video_17lz7_1",m="_opacityLayer_17lz7_9",g="_withLightBackground_17lz7_16",_="_withDarkBackground_17lz7_20",r={video:f,opacityLayer:m,withLightBackground:g,withDarkBackground:_},s=({videoUrl:a,videoWithOpacity:o,className:n,mobileUrl:c})=>{const[u,l]=t.useState(a),e=t.useRef(null);return t.useEffect(()=>{e.current&&(e.current.muted=!0,e.current.defaultMuted=!0,e.current.autoplay=!0,e.current.loop=!0),!(typeof window>"u")&&window.innerWidth<=767&&c&&l(c)},[e]),p(y,{children:[i("video",{ref:e,loop:!0,playsInline:!0,className:d(r.video,n&&n),children:i("source",{src:u,type:"video/mp4"})}),o&&i("div",{className:d(r.opacityLayer,o==="light"?r.withLightBackground:r.withDarkBackground)})]})};try{s.displayName="Video",s.__docgenInfo={description:"",displayName:"Video",props:{videoUrl:{defaultValue:null,description:"",name:"videoUrl",required:!0,type:{name:"string"}},mobileUrl:{defaultValue:null,description:"",name:"mobileUrl",required:!1,type:{name:"string"}},videoWithOpacity:{defaultValue:null,description:"",name:"videoWithOpacity",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{s as V};
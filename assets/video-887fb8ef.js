import{r as s,j as t}from"./jsx-runtime-03333307.js";import{c as u}from"./index-09749a66.js";const y="_video_17lz7_1",f="_opacityLayer_17lz7_9",h="_withLightBackground_17lz7_16",m="_withDarkBackground_17lz7_20",i={video:y,opacityLayer:f,withLightBackground:h,withDarkBackground:m},_=({videoUrl:p,videoWithOpacity:o,className:n,mobileUrl:c})=>{const[l,g]=s.useState(p),e=s.useRef(null);return s.useEffect(()=>{if(e.current&&(e.current.muted=!0,e.current.defaultMuted=!0,e.current.autoplay=!0,e.current.loop=!0,e.current.playsInline=!0,e.current.paused)){const a=e.current.play();a!==void 0&&a.then(d=>{var r;(r=e.current)==null||r.classList.add("playing")}).catch(d=>{var r;(r=e.current)==null||r.classList.remove("playing"),console.log(d)})}typeof window>"u"||window.innerWidth<=767&&c&&g(c)},[e]),t.jsxs(t.Fragment,{children:[t.jsx("video",{ref:e,className:u(i.video,n&&n),children:t.jsx("source",{src:l,type:"video/mp4"})}),o&&t.jsx("div",{className:u(i.opacityLayer,o==="light"?i.withLightBackground:i.withDarkBackground)})]})};_.__docgenInfo={description:"",methods:[],displayName:"Video",props:{videoUrl:{required:!0,tsType:{name:"string"},description:""},mobileUrl:{required:!1,tsType:{name:"string"},description:""},videoWithOpacity:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{_ as V};
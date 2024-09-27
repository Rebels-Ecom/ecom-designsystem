import{H}from"./hero-6edeed26.js";import{C as S,a as f}from"./carousel-68e34069.js";import{j as o}from"./jsx-runtime-03333307.js";import{HeroStoryVideo as P,HeroStoryLeft1 as c,HeroStoryRight as g,HeroStoryLeft2 as j,HeroStoryPistonhead as _}from"./hero.stories-00fb7ae3.js";const a=({heroComponents:s,autoplay:y=!0,onSlideChange:n})=>o.jsx(S,{onSlideChange:n,onNavigation:n,splideProps:{options:{autoplay:y,pauseOnHover:!0,gap:0,type:"loop"}},breakpoints:{lg:{perPage:1},md:{perPage:1}},lightArrows:!0,children:s.map((C,t)=>o.jsx(f,{children:o.jsx(H,{...C,fetchPriority:t===0?"high":"auto",loading:t===0?"eager":"lazy"})},t))});a.__docgenInfo={description:"",methods:[],displayName:"HeroCarousel",props:{heroComponents:{required:!0,tsType:{name:"Array",elements:[{name:"IHero"}],raw:"Array<IHero>"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onSlideChange:{required:!1,tsType:{name:"CallableFunction"},description:""}}};const x={title:"Design System/Organisms/HeroCarousel",component:a},h={render:s=>o.jsx("div",{style:{margin:"auto",maxWidth:"77.5rem"},children:o.jsx(a,{...s})})},T=[P.args,c.args,g.args,j.args],b=[_.args,c.args,g.args],e={...h,args:{heroComponents:T}},r={...h,args:{heroComponents:b}};var i,p,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsList
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsPistonheadList
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const L=["HeroCarouselStory","HeroCarouselPistonheadStory"],A=Object.freeze(Object.defineProperty({__proto__:null,HeroCarouselPistonheadStory:r,HeroCarouselStory:e,__namedExportsOrder:L,default:x},Symbol.toStringTag,{value:"Module"}));export{e as H,a,A as h};

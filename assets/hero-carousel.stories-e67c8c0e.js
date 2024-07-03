import{H as C}from"./hero-3636e03e.js";import{C as H,a as S}from"./carousel-5f3c2a62.js";import{j as o}from"./jsx-runtime-03333307.js";import{HeroStoryVideo as f,HeroStoryLeft1 as d,HeroStoryRight as c,HeroStoryLeft2 as P,HeroStoryPistonhead as j}from"./hero.stories-22afeb51.js";const a=({heroComponents:s,autoplay:h=!0})=>o.jsx(H,{splideProps:{options:{autoplay:h,pauseOnHover:!0,gap:0,type:"loop"}},breakpoints:{lg:{perPage:1},md:{perPage:1}},children:s.map((y,t)=>o.jsx(S,{children:o.jsx(C,{...y,fetchPriority:t===0?"high":"auto",loading:t===0?"eager":"lazy"})},t))});a.__docgenInfo={description:"",methods:[],displayName:"HeroCarousel",props:{heroComponents:{required:!0,tsType:{name:"Array",elements:[{name:"IHero"}],raw:"Array<IHero>"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const _={title:"Design System/Organisms/HeroCarousel",component:a},g={render:s=>o.jsx("div",{style:{margin:"auto",maxWidth:"77.5rem"},children:o.jsx(a,{...s})})},x=[f.args,d.args,c.args,P.args],L=[j.args,d.args,c.args],e={...g,args:{heroComponents:x}},r={...g,args:{heroComponents:L}};var n,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsList
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,l,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsPistonheadList
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const T=["HeroCarouselStory","HeroCarouselPistonheadStory"],q=Object.freeze(Object.defineProperty({__proto__:null,HeroCarouselPistonheadStory:r,HeroCarouselStory:e,__namedExportsOrder:T,default:_},Symbol.toStringTag,{value:"Module"}));export{e as H,a,q as h};

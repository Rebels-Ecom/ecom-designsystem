import{H}from"./hero-0227848c.js";import{C as S,a as f}from"./carousel-c1935f6a.js";import{j as o}from"./jsx-runtime-03333307.js";import{HeroStoryVideo as x,HeroStoryLeft1 as d,HeroStoryRight as c,HeroStoryLeft2 as P,HeroStoryPistonhead as j}from"./hero.stories-7ed0f38b.js";const t=({heroComponents:s,autoplay:h=!0,onSlideChange:a})=>o.jsx(S,{onSlideChange:a,onNavigation:a,splideProps:{options:{autoplay:h,pauseOnHover:!0,gap:0,type:"loop"}},breakpoints:{lg:{perPage:1},md:{perPage:1}},lightArrows:!0,children:s.map((y,C)=>o.jsx(f,{children:o.jsx(H,{...y,fetchPriority:"high",loading:"eager"})},C))});t.__docgenInfo={description:"",methods:[],displayName:"HeroCarousel",props:{heroComponents:{required:!0,tsType:{name:"Array",elements:[{name:"IHero"}],raw:"Array<IHero>"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onSlideChange:{required:!1,tsType:{name:"CallableFunction"},description:""}}};const _={title:"Design System/Organisms/HeroCarousel",component:t},g={render:s=>o.jsx("div",{style:{margin:"auto",maxWidth:"77.5rem"},children:o.jsx(t,{...s})})},T=[x.args,d.args,c.args,P.args],b=[j.args,d.args,c.args],e={...g,args:{heroComponents:T}},r={...g,args:{heroComponents:b}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsList
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsPistonheadList
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const L=["HeroCarouselStory","HeroCarouselPistonheadStory"],A=Object.freeze(Object.defineProperty({__proto__:null,HeroCarouselPistonheadStory:r,HeroCarouselStory:e,__namedExportsOrder:L,default:_},Symbol.toStringTag,{value:"Module"}));export{e as H,t as a,A as h};

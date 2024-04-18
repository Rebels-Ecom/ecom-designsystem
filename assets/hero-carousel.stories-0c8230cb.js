import{H as C}from"./hero-cd93e663.js";import{C as H,a as S}from"./carousel-54229a2b.js";import{j as r}from"./jsx-runtime-a3a6c0b8.js";import{HeroStoryVideo as _,HeroStoryLeft1 as d,HeroStoryRight as g,HeroStoryLeft2 as f,HeroStoryPistonhead as P}from"./hero.stories-e42cd493.js";const a=({heroComponents:t,autoplay:n=!0})=>(console.log("autoplay heroCarousel",n),r(H,{splideProps:{options:{autoplay:n,pauseOnHover:!0,gap:0,type:"loop"}},breakpoints:{lg:{perPage:1},md:{perPage:1}},children:t.map((y,s)=>r(S,{children:r(C,{...y,fetchPriority:s===0?"high":"auto",loading:s===0?"eager":"lazy"})},s))}));try{a.displayName="HeroCarousel",a.__docgenInfo={description:"",displayName:"HeroCarousel",props:{heroComponents:{defaultValue:null,description:"",name:"heroComponents",required:!0,type:{name:"IHero[]"}},autoplay:{defaultValue:{value:"true"},description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const L={title:"Design System/Organisms/HeroCarousel",component:a},h={render:t=>r("div",{style:{margin:"auto",maxWidth:"77.5rem"},children:r(a,{...t})})},b=[_.args,d.args,g.args,f.args],O=[P.args,d.args,g.args],e={...h,args:{heroComponents:b}},o={...h,args:{heroComponents:O}};var p,l,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsList
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,u,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsPistonheadList
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const j=["HeroCarouselStory","HeroCarouselPistonheadStory"],q=Object.freeze(Object.defineProperty({__proto__:null,HeroCarouselPistonheadStory:o,HeroCarouselStory:e,__namedExportsOrder:j,default:L},Symbol.toStringTag,{value:"Module"}));export{e as H,a,q as h};

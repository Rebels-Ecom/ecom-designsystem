import{H as C}from"./hero-cd93e663.js";import{C as H,a as S}from"./carousel-db3752e2.js";import{j as r}from"./jsx-runtime-a3a6c0b8.js";import{HeroStoryVideo as _,HeroStoryLeft1 as c,HeroStoryRight as d,HeroStoryLeft2 as f,HeroStoryPistonhead as P}from"./hero.stories-e42cd493.js";const a=({heroComponents:t,autoplay:y=!0})=>r(H,{splideProps:{options:{autoplay:y,pauseOnHover:!0,gap:0,type:"loop"}},breakpoints:{lg:{perPage:1},md:{perPage:1}},children:t.map((h,s)=>r(S,{children:r(C,{...h,fetchPriority:s===0?"high":"auto",loading:s===0?"eager":"lazy"})},s))});try{a.displayName="HeroCarousel",a.__docgenInfo={description:"",displayName:"HeroCarousel",props:{heroComponents:{defaultValue:null,description:"",name:"heroComponents",required:!0,type:{name:"IHero[]"}},autoplay:{defaultValue:{value:"true"},description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const L={title:"Design System/Organisms/HeroCarousel",component:a},g={render:t=>r("div",{style:{margin:"auto",maxWidth:"77.5rem"},children:r(a,{...t})})},b=[_.args,c.args,d.args,f.args],O=[P.args,c.args,d.args],e={...g,args:{heroComponents:b}},o={...g,args:{heroComponents:O}};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsList
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,m,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsPistonheadList
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const j=["HeroCarouselStory","HeroCarouselPistonheadStory"],q=Object.freeze(Object.defineProperty({__proto__:null,HeroCarouselPistonheadStory:o,HeroCarouselStory:e,__namedExportsOrder:j,default:L},Symbol.toStringTag,{value:"Module"}));export{e as H,a,q as h};

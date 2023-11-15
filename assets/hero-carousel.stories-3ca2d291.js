import{H as y}from"./hero-92d93722.js";import{C,a as H}from"./carousel-f8718485.js";import{a as r}from"./jsx-runtime-76c5c2e2.js";import{HeroStoryVideo as S,HeroStoryLeft1 as c,HeroStoryRight as d,HeroStoryLeft2 as _,HeroStoryPistonhead as f}from"./hero.stories-bddc72ce.js";const t=({heroComponents:s})=>r(C,{splideProps:{options:{autoplay:!0,pauseOnHover:!0,gap:0,type:"loop"}},breakpoints:{lg:{perPage:1},md:{perPage:1}},children:s.map((h,a)=>r(H,{children:r(y,{...h,fetchPriority:a===0?"high":"auto",loading:a===0?"eager":"lazy"})},a))});try{t.displayName="HeroCarousel",t.__docgenInfo={description:"",displayName:"HeroCarousel",props:{heroComponents:{defaultValue:null,description:"",name:"heroComponents",required:!0,type:{name:"IHero[]"}}}}}catch{}const P={title:"Design System/Organisms/HeroCarousel",component:t},g={render:s=>r("div",{style:{margin:"auto",maxWidth:"77.5rem"},children:r(t,{...s})})},L=[S.args,c.args,d.args,_.args],O=[f.args,c.args,d.args],e={...g,args:{heroComponents:L}},o={...g,args:{heroComponents:O}};var n,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsList
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsPistonheadList
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const b=["HeroCarouselStory","HeroCarouselPistonheadStory"],x=Object.freeze(Object.defineProperty({__proto__:null,HeroCarouselPistonheadStory:o,HeroCarouselStory:e,__namedExportsOrder:b,default:P},Symbol.toStringTag,{value:"Module"}));export{e as H,t as a,x as h};
//# sourceMappingURL=hero-carousel.stories-3ca2d291.js.map

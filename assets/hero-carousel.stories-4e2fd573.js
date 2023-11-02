import{H as y,a as C,b as u,c as d,d as H,e as S}from"./hero.stories-403546c5.js";import{C as _,a as f}from"./carousel-6037f7ec.js";import{a as r}from"./jsx-runtime-76c5c2e2.js";const a=({heroComponents:s})=>r(_,{splideProps:{options:{autoplay:!0,pauseOnHover:!0,gap:0,type:"loop"}},breakpoints:{lg:{perPage:1},md:{perPage:1}},children:s.map((h,t)=>r(f,{children:r(y,{...h,fetchPriority:t===0?"high":"auto",loading:t===0?"eager":"lazy"})},t))});try{a.displayName="HeroCarousel",a.__docgenInfo={description:"",displayName:"HeroCarousel",props:{heroComponents:{defaultValue:null,description:"",name:"heroComponents",required:!0,type:{name:"IHero[]"}}}}}catch{}const P={title:"Design System/Organisms/HeroCarousel",component:a},g={render:s=>r("div",{style:{margin:"auto",maxWidth:"77.5rem"},children:r(a,{...s})})},L=[C.args,u.args,d.args,H.args],b=[S.args,u.args,d.args],e={...g,args:{heroComponents:L}},o={...g,args:{heroComponents:b}};var n,p,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsList
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...HeroCarouselStoryTemplate,
  args: {
    heroComponents: heroComponentsPistonheadList
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const O=["HeroCarouselStory","HeroCarouselPistonheadStory"],I=Object.freeze(Object.defineProperty({__proto__:null,HeroCarouselPistonheadStory:o,HeroCarouselStory:e,__namedExportsOrder:O,default:P},Symbol.toStringTag,{value:"Module"}));export{e as H,a,I as h};
//# sourceMappingURL=hero-carousel.stories-4e2fd573.js.map

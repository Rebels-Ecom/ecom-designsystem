import{P as C}from"./product-carousel-1261b48d.js";import{I as d}from"./icon-456a804f.js";import{j as s,a as t}from"./jsx-runtime-76c5c2e2.js";import{a as f}from"./chunk-OPEUWD42-0dc0813d.js";import{P as y}from"./product-card-list.stories-6da2d757.js";const _="_title_kcmz2_1",h="_linkWrapper_kcmz2_5",l={title:_,linkWrapper:h},n=({title:o,link:e,productCards:r,addToCart:p,linkComponent:m})=>s("section",{children:[t("h2",{className:l.title,children:o}),t(C,{productCards:r,addToCart:p}),t("div",{className:l.linkWrapper,children:e.isExternal?s("a",{href:e.href,target:e.target,className:"body",children:[e.children," ",t(d,{icon:"icon-plus-circle"})]}):s(m,{to:e.href,children:[e.children," ",t(d,{icon:"icon-plus-circle"})]})})]});try{n.displayName="FeaturedProductsCarousel",n.__docgenInfo={description:"",displayName:"FeaturedProductsCarousel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"ILink"}},productCards:{defaultValue:null,description:"",name:"productCards",required:!0,type:{name:"TProductCard[]"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}}}}}catch{}const g={title:"Design System/Organisms/FeaturedProductsCarousel",component:n},P={render:o=>{function e(r){alert(`Adding to cart - ${r.productName} - ${r.packaging}. Quantity: ${r.quantity}, Total: ${r.totalPrice}`)}return t(n,{...o,addToCart:e})}},k=y.args.productCards.slice(0,10),a={...P,args:{title:"Våra mest sålda",productCards:k,link:{href:"/featured-products",children:"Visa alla blivande favoriter",isExternal:!0},linkComponent:"a",addToCart:f("clicked")}};var i,c,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...FeaturedProductsCarouselStoryTemplate,
  args: {
    title: 'Våra mest sålda',
    productCards: cardList,
    link: {
      href: '/featured-products',
      children: 'Visa alla blivande favoriter',
      isExternal: true
    },
    linkComponent: 'a',
    addToCart: action('clicked')
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const T=["FeaturedProductsCarouselStory"],q=Object.freeze(Object.defineProperty({__proto__:null,FeaturedProductsCarouselStory:a,__namedExportsOrder:T,default:g},Symbol.toStringTag,{value:"Module"}));export{a as F,n as a,q as f};
//# sourceMappingURL=featured-products-carousel.stories-28e0d2bf.js.map
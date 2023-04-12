import{P as m}from"./product-carousel-40297182.js";import{I as C}from"./icon-375c4d56.js";import{j as s,a as t}from"./jsx-runtime-76c5c2e2.js";import"./index-db2bed09.js";import{P as f}from"./product-card-list.stories-7dc70eec.js";import{a as y}from"./chunk-NX5DM7EF-906d95d8.js";const _="_title_3i3u5_1",h="_linkWrapper_3i3u5_5",d={title:_,linkWrapper:h},n=({title:o,link:e,productCards:r,addToCart:c,linkComponent:p})=>s("section",{children:[t("h2",{className:d.title,children:o}),t(m,{productCards:r,addToCart:c}),s("div",{className:d.linkWrapper,children:[e.isExternal?t("a",{href:e.href,target:e.target,className:"body",children:e.children}):t(p,{to:e.href,children:e.children}),t(C,{icon:"icon-plus-circle"})]})]});try{n.displayName="FeaturedProductsCarousel",n.__docgenInfo={description:"",displayName:"FeaturedProductsCarousel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"ILink"}},productCards:{defaultValue:null,description:"",name:"productCards",required:!0,type:{name:"IProductCard[]"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}}}}}catch{}const g={title:"Design System/Organisms/FeaturedProductsCarousel",component:n},P={render:o=>{function e(r){alert(`Adding to cart - ${r.productName} - ${r.packaging}. Quantity: ${r.quantity}, Total: ${r.totalPrice}`)}return t(n,{...o,addToCart:e})}},k=f.args.productCards.slice(0,10),a={...P,args:{title:"Våra mest sålda",productCards:k,link:{href:"/featured-products",children:"Visa alla blivande favoriter",isExternal:!0},linkComponent:"a",addToCart:y("clicked")}};var l,i,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const F=["FeaturedProductsCarouselStory"],v=Object.freeze(Object.defineProperty({__proto__:null,FeaturedProductsCarouselStory:a,__namedExportsOrder:F,default:g},Symbol.toStringTag,{value:"Module"}));export{n as F,a,v as f};
//# sourceMappingURL=featured-products-carousel.stories-20516656.js.map

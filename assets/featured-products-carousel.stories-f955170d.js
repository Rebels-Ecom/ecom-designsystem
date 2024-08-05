import{P as m}from"./product-carousel-fad804ab.js";import{I as n}from"./icon-cf6ebd85.js";import{j as r}from"./jsx-runtime-03333307.js";import{a as C}from"./chunk-MZXVCX43-aa6c8130.js";import{P as f}from"./product-card-list.stories-80e2bcd2.js";const y="_title_kcmz2_1",P="_linkWrapper_kcmz2_5",d={title:y,linkWrapper:P},s=({title:o,link:e,productCards:t,addToCart:u,linkComponent:p})=>r.jsxs("section",{children:[r.jsx("h2",{className:d.title,children:o}),r.jsx(m,{productCards:t,addToCart:u}),r.jsx("div",{className:d.linkWrapper,children:e.isExternal?r.jsxs("a",{href:e.href,target:e.target,className:"body",children:[e.children," ",r.jsx(n,{icon:"icon-plus-circle"})]}):r.jsxs(p,{to:e.href,children:[e.children," ",r.jsx(n,{icon:"icon-plus-circle"})]})})]});s.__docgenInfo={description:"",methods:[],displayName:"FeaturedProductsCarousel",props:{title:{required:!0,tsType:{name:"string"},description:""},link:{required:!0,tsType:{name:"ILink"},description:""},productCards:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"IProductCard & (TProductCardVertical | TProductCardHorizontal)",elements:[{name:"IProductCard"},{name:"unknown"}]}],raw:"Array<TProductCard>"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},linkComponent:{required:!0,tsType:{name:"any"},description:""}}};const h={title:"Design System/Organisms/FeaturedProductsCarousel",component:s},T={render:o=>{function e(t){alert(`Adding to cart - ${t.productName} - ${t.packaging}. Quantity: ${t.quantity}, Total: ${t.totalPrice}`)}return r.jsx(s,{...o,addToCart:e})}},x=f.args.productCards.slice(0,10),a={...T,args:{title:"Våra mest sålda",productCards:x,link:{href:"/featured-products",children:"Visa alla blivande favoriter",isExternal:!0},linkComponent:"a",addToCart:C("clicked")}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const g=["FeaturedProductsCarouselStory"],b=Object.freeze(Object.defineProperty({__proto__:null,FeaturedProductsCarouselStory:a,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{a as F,s as a,b as f};

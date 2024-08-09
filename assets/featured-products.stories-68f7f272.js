import{P as k}from"./product-card.stories-f0d76bd9.js";import{P as v}from"./product-carousel-70530a77.js";import{B as N,A as B}from"./below-c0fccb92.js";import{I as f}from"./icon-cf6ebd85.js";import{j as r}from"./jsx-runtime-03333307.js";import{a as l}from"./chunk-MZXVCX43-aa6c8130.js";import{P as p}from"./product-card-list.stories-a255f2b7.js";const L="_featuredProducts_bjfb1_1",W="_productsWrapper_bjfb1_18",q="_title_bjfb1_22",I="_linkWrapper_bjfb1_28",c={featuredProducts:L,productsWrapper:W,title:q,linkWrapper:I};function A(a,e){return r.jsx(v,{productCards:a,addToCart:e})}function V(a,e){return a.map((t,n)=>r.jsx(k,{...t,addToCart:e},n))}const m=({title:a,link:e,productCards:t,addToCart:n,productCardsNumber:F="3",linkComponent:S})=>{const i=t==null?void 0:t.slice(0,parseInt(F));return i?r.jsxs("div",{className:c.featuredProducts,children:[a&&r.jsx("h2",{className:c.title,children:a}),r.jsxs("div",{className:c.productsWrapper,children:[r.jsx(N,{breakpoint:"lg",children:u=>u&&r.jsx(r.Fragment,{children:A(i,n)})}),r.jsx(B,{breakpoint:"lg",children:u=>u&&r.jsx(r.Fragment,{children:V(i,n)})})]}),e&&r.jsx("div",{className:c.linkWrapper,children:e.isExternal?r.jsxs("a",{href:e.href,target:e.target,className:"body",children:[e.children," ",r.jsx(f,{icon:"icon-plus-circle"})]}):r.jsxs(S,{to:e.href,children:[e.children," ",r.jsx(f,{icon:"icon-plus-circle"})]})})]}):null};m.__docgenInfo={description:"@deprecated Use ProductCarousel instead",methods:[],displayName:"FeaturedProducts",props:{title:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"ILink"},description:""},productCards:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"IProductCard & (TProductCardVertical | TProductCardHorizontal)",elements:[{name:"IProductCard"},{name:"unknown"}]}],raw:"Array<TProductCard>"},description:""},addToCart:{required:!0,tsType:{name:"CallableFunction"},description:""},productCardsNumber:{required:!1,tsType:{name:"union",raw:"'3' | '4'",elements:[{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'3'",computed:!1}},linkComponent:{required:!0,tsType:{name:"any"},description:""}}};const w={title:"Design System/Deprecated/FeaturedProducts",component:m},C={render:a=>{function e(t){alert(`Adding to cart - ${t.productName} - ${t.packaging}. Quantity: ${t.quantity}, Total: ${t.totalPrice}`)}return r.jsx(m,{...a,addToCart:e})}},E=p.args.productCards.slice(0,3),$=p.args.productCards.slice(0,4),O=p.args.productCards.slice(8,12),s={...C,args:{title:"Våra mest sålda",productCards:E,link:{href:"/featured-products",children:"Visa alla blivande favoriter",isExternal:!0},linkComponent:"a",addToCart:l("clicked")}},o={...C,args:{productCards:$,productCardsNumber:"4",addToCart:l("clicked")}},d={...C,args:{productCards:O,productCardsNumber:"4",addToCart:l("clicked")}};var P,y,g;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...FeaturedProductsStoryTemplate,
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
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,_,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...FeaturedProductsStoryTemplate,
  args: {
    productCards: promoBrandsCardList1,
    productCardsNumber: '4',
    addToCart: action('clicked')
  }
}`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var j,h,x;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...FeaturedProductsStoryTemplate,
  args: {
    productCards: promoBrandsCardList2,
    productCardsNumber: '4',
    addToCart: action('clicked')
  }
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const z=["FeaturedProductsStory","FeaturedProductsStory_PromoBrands1","FeaturedProductsStory_PromoBrands2"],J=Object.freeze(Object.defineProperty({__proto__:null,FeaturedProductsStory:s,FeaturedProductsStory_PromoBrands1:o,FeaturedProductsStory_PromoBrands2:d,__namedExportsOrder:z,default:w},Symbol.toStringTag,{value:"Module"}));export{s as F,o as a,m as b,J as f};

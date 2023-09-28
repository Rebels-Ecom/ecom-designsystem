import{P as V}from"./product-card.stories-8b628609.js";import{P as j}from"./product-carousel-3f045399.js";import{B as L,A as W}from"./below-e3aa399e.js";import{I as P}from"./icon-7e598265.js";import{j as c,a as e,F as _}from"./jsx-runtime-76c5c2e2.js";import{a as m}from"./chunk-OPEUWD42-0dc0813d.js";import{P as f}from"./product-card-list.stories-50e1f97b.js";const q="_featuredProducts_bjfb1_1",x="_productsWrapper_bjfb1_18",I="_title_bjfb1_22",A="_linkWrapper_bjfb1_28",u={featuredProducts:q,productsWrapper:x,title:I,linkWrapper:A};function E(a,r){return e(j,{productCards:a,addToCart:r})}function $(a,r){return a.map((t,n)=>e(V,{...t,addToCart:r},n))}const i=({title:a,link:r,productCards:t,addToCart:n,productCardsNumber:v="3",linkComponent:B})=>{const l=t==null?void 0:t.slice(0,parseInt(v));return l?c("div",{className:u.featuredProducts,children:[a&&e("h2",{className:u.title,children:a}),c("div",{className:u.productsWrapper,children:[e(L,{breakpoint:"lg",children:p=>p&&e(_,{children:E(l,n)})}),e(W,{breakpoint:"lg",children:p=>p&&e(_,{children:$(l,n)})})]}),r&&e("div",{className:u.linkWrapper,children:r.isExternal?c("a",{href:r.href,target:r.target,className:"body",children:[r.children," ",e(P,{icon:"icon-plus-circle"})]}):c(B,{to:r.href,children:[r.children," ",e(P,{icon:"icon-plus-circle"})]})})]}):null};try{i.displayName="FeaturedProducts",i.__docgenInfo={description:"",displayName:"FeaturedProducts",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"ILink"}},productCards:{defaultValue:null,description:"",name:"productCards",required:!0,type:{name:"TProductCard[]"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},productCardsNumber:{defaultValue:{value:"3"},description:"",name:"productCardsNumber",required:!1,type:{name:"enum",value:[{value:'"3"'},{value:'"4"'}]}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!0,type:{name:"any"}}}}}catch{}const O={title:"Design System/Molecules/FeaturedProducts",component:i},C={render:a=>{function r(t){alert(`Adding to cart - ${t.productName} - ${t.packaging}. Quantity: ${t.quantity}, Total: ${t.totalPrice}`)}return e(i,{...a,addToCart:r})}},M=f.args.productCards.slice(0,3),w=f.args.productCards.slice(0,4),z=f.args.productCards.slice(8,12),o={...C,args:{title:"Våra mest sålda",productCards:M,link:{href:"/featured-products",children:"Visa alla blivande favoriter",isExternal:!0},linkComponent:"a",addToCart:m("clicked")}},d={...C,args:{productCards:w,productCardsNumber:"4",addToCart:m("clicked")}},s={...C,args:{productCards:z,productCardsNumber:"4",addToCart:m("clicked")}};var y,g,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,F,T;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...FeaturedProductsStoryTemplate,
  args: {
    productCards: promoBrandsCardList1,
    productCardsNumber: '4',
    addToCart: action('clicked')
  }
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var k,S,N;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...FeaturedProductsStoryTemplate,
  args: {
    productCards: promoBrandsCardList2,
    productCardsNumber: '4',
    addToCart: action('clicked')
  }
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const D=["FeaturedProductsStory","FeaturedProductsStory_PromoBrands1","FeaturedProductsStory_PromoBrands2"],X=Object.freeze(Object.defineProperty({__proto__:null,FeaturedProductsStory:o,FeaturedProductsStory_PromoBrands1:d,FeaturedProductsStory_PromoBrands2:s,__namedExportsOrder:D,default:O},Symbol.toStringTag,{value:"Module"}));export{o as F,i as a,d as b,s as c,X as f};
//# sourceMappingURL=featured-products.stories-1e1b8a40.js.map

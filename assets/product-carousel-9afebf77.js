import{P as i}from"./product-card.stories-453e67ff.js";import{C as n,a as m}from"./carousel-851c0365.js";import{m as c}from"./hooks-c687ffa3.js";import{j as r}from"./jsx-runtime-a3a6c0b8.js";const t=({productCards:e,addToCart:o,productsPerPageMobile:u=1,productsPerPageTablet:d=2,productsPerPageDesktop:s=4})=>{const{isMobile:a}=c();return r(n,{splideProps:{options:{gap:"1rem",autoplay:"pause",pauseOnHover:!0,intersection:{inView:{autoplay:!0},outView:{autoplay:!1}}}},offsetArrows:!0,padding:a?"2rem":void 0,breakpoints:a?{sm:{hideArrows:!0,perPage:u}}:{md:{perPage:d},lg:{perPage:s}},children:(()=>e==null?void 0:e.map((l,p)=>r(m,{children:r(i,{...l,addToCart:o})},p)))()})};try{t.displayName="ProductCarousel",t.__docgenInfo={description:"",displayName:"ProductCarousel",props:{productCards:{defaultValue:null,description:"",name:"productCards",required:!0,type:{name:"TProductCard[]"}},addToCart:{defaultValue:null,description:"",name:"addToCart",required:!0,type:{name:"CallableFunction"}},productsPerPageMobile:{defaultValue:{value:"1"},description:"",name:"productsPerPageMobile",required:!1,type:{name:"number"}},productsPerPageTablet:{defaultValue:{value:"2"},description:"",name:"productsPerPageTablet",required:!1,type:{name:"number"}},productsPerPageDesktop:{defaultValue:{value:"4"},description:"",name:"productsPerPageDesktop",required:!1,type:{name:"number"}}}}}catch{}export{t as P};
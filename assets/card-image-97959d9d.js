import{D as m}from"./divider-lines-9d28c35d.js";import{T as o}from"./tag-f7025b30.js";import{j as i,a as r}from"./jsx-runtime-76c5c2e2.js";import{P as g}from"./picture-8799a0b4.js";const _="_cardImageWrapper_1odkr_1",y="_imageWrapper_1odkr_11",I="_tagsList_1odkr_25",h="_packageBtn_1odkr_44",k="_content_1odkr_51",P="_heading_1odkr_61",f="_textGray_1odkr_74",N="_textPurple_1odkr_74",x="_cardPicture_1odkr_95",q="_cardImage_1odkr_1",e={cardImageWrapper:_,imageWrapper:y,tagsList:I,packageBtn:h,content:k,heading:P,textGray:f,textPurple:N,cardPicture:x,cardImage:q},V=({tagsList:a=[]})=>r("ul",{className:e.tagsList,children:Array.isArray(a)&&a.length>0&&a.map((n,t)=>r("li",{children:r(o,{...n})},t))}),c=({className:a,image:n,productTags:t,heading:d,articleId:s,country:l,packaging:u,unitPriceStr:p})=>i("div",{className:`${e.cardImageWrapper} ${a||""}`,children:[t&&r(V,{tagsList:t}),i("div",{className:e.imageWrapper,children:[r(g,{...n,classNamePicture:e.cardPicture,classNameImg:`${e.cardImage}`})," "]}),i("div",{className:`${e.content}`,children:[r("p",{className:e.heading,children:d}),r(m,{}),r("p",{className:e.textGray,children:`Art.nr. ${s} - ${l}`}),r("p",{className:e.textPurple,children:`${u}: ${p} kr/st`})]})]});try{c.displayName="CardImage",c.__docgenInfo={description:"",displayName:"CardImage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"IPicture"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},articleId:{defaultValue:null,description:"",name:"articleId",required:!0,type:{name:"string"}},country:{defaultValue:null,description:"",name:"country",required:!0,type:{name:"string"}},packaging:{defaultValue:null,description:"",name:"packaging",required:!0,type:{name:"string"}},unitPriceStr:{defaultValue:null,description:"",name:"unitPriceStr",required:!0,type:{name:"string"}},productTags:{defaultValue:null,description:"",name:"productTags",required:!0,type:{name:"ITag[]"}}}}}catch{}export{c as C};
//# sourceMappingURL=card-image-97959d9d.js.map
import{c as n}from"./index-09749a66.js";import{j as p}from"./jsx-runtime-03333307.js";const c="_placeholderImage_1sxpc_1",s="_placeholderShimmer_1sxpc_1",h="_placeholderTags_1sxpc_15",t="_placeholderHeading_1sxpc_21",d="_placeholderParagraphLong_1sxpc_27",g="_placeholderParagraphShort_1sxpc_32",i="_noMargin_1sxpc_46",e={placeholderImage:c,placeholderShimmer:s,placeholderTags:h,placeholderHeading:t,placeholderParagraphLong:d,placeholderParagraphShort:g,noMargin:i};function m({type:a="heading",noMargin:r}){function l(o){switch(o){case"image":return"placeholderImage";case"tags":return"placeholderTags";case"p_long":return"placeholderParagraphLong";case"p_short":return"placeholderParagraphShort";case"heading":default:return"placeholderHeading"}}return p.jsx("div",{className:n(e.placeholder,e[l(a)],{[e.noMargin]:r})})}m.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{type:{required:!1,tsType:{name:"union",raw:"'image' | 'tags' | 'heading' | 'p_long' | 'p_short'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'tags'"},{name:"literal",value:"'heading'"},{name:"literal",value:"'p_long'"},{name:"literal",value:"'p_short'"}]},description:"",defaultValue:{value:"'heading'",computed:!1}},noMargin:{required:!1,tsType:{name:"boolean"},description:""}}};export{m as P};
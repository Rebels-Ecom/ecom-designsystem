import{r as s,j as p}from"./jsx-runtime-a3a6c0b8.js";import{c as i}from"./index-a587463d.js";const d="_contentWrapper_gqkdt_1",c={contentWrapper:d},r=({padding:e,id:t="",children:n})=>{const a=s.useMemo(()=>!e&&e!==0?"":typeof e=="number"?`${e}rem`:e.map(o=>`${o}rem`).join(" "),[e]);return p("div",{id:t,className:i(c.contentWrapper),style:{padding:a},children:n})};try{r.displayName="ContentWrapper",r.__docgenInfo={description:"",displayName:"ContentWrapper",props:{id:{defaultValue:{value:""},description:"",name:"id",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"undefined"},description:`Sets the padding prop in rem
Takes either a single number, e.g. 1 or an array of numbers, e.g. [1, 0] or [1, 0, 0, 1] (top, right, bottom, left)
Default is undefined, and therefore decided by styles/css`,name:"padding",required:!1,type:{name:"number | number[]"}}}}}catch{}export{r as C};
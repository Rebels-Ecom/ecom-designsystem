import{P as p,R as c,T as m,a as d,C as u,A as h}from"./index-9d35675b.js";import{c as i}from"./index-09749a66.js";import{j as e}from"./jsx-runtime-03333307.js";const x="_componentWithTooltip_10u94_1",f="_text_10u94_2",T="_content_10u94_12",_="_pink_10u94_26",t={componentWithTooltip:x,text:f,content:T,pink:_},v=({content:n,wrapperClassName:l,side:o,align:s,element:a,color:r="black"})=>n?e.jsx("div",{className:i(t.componentWithTooltip,l),children:e.jsx(p,{delayDuration:0,children:e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx("div",{style:{display:"inline-block"},children:a})}),e.jsx(d,{children:e.jsxs(u,{className:i(t.content,t[r]),sideOffset:0,side:o??"top",align:s,children:[e.jsx("span",{children:n}),e.jsx(h,{className:"TooltipArrow"})]})})]})})}):a;v.__docgenInfo={description:"",methods:[],displayName:"ComponentWithTooltip",props:{element:{required:!0,tsType:{name:"ReactElement"},description:""},content:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'end' | 'start' | 'center'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"},{name:"literal",value:"'center'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'black' | 'pink'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'pink'"}]},description:"",defaultValue:{value:"'black'",computed:!1}}}};export{v as C};
import{r as x,j as y}from"./jsx-runtime-03333307.js";import{c as w}from"./index-09749a66.js";const A="_boxWrapper_1rn3e_1",P="_light_1rn3e_9",W="_onlyButton_1rn3e_16",B="_noMargin_1rn3e_21",T="_noPadding_1rn3e_25",q="_noWrap_1rn3e_35",M="_hasMaxWidth_1rn3e_36",V="_withBorder_1rn3e_37",S="_withStrongBorder_1rn3e_38",E="_leftPosition_1rn3e_40",R="_rightPosition_1rn3e_41",j="_centerPosition_1rn3e_42",G="_apartPosition_1rn3e_45",N="_leftAlignment_1rn3e_47",I="_rightAlignment_1rn3e_48",D="_centerAlignment_1rn3e_49",$="_stretchAlignment_1rn3e_50",k="_baselineAlignment_1rn3e_51",z="_groupWrapper_1rn3e_53",e={boxWrapper:A,light:P,onlyButton:W,noMargin:B,noPadding:T,"spacing-xs":"_spacing-xs_1rn3e_29","spacing-sm":"_spacing-sm_1rn3e_30","spacing-md":"_spacing-md_1rn3e_31","spacing-lg":"_spacing-lg_1rn3e_32","spacing-xl":"_spacing-xl_1rn3e_33",noWrap:q,hasMaxWidth:M,withBorder:V,withStrongBorder:S,leftPosition:E,rightPosition:R,centerPosition:j,apartPosition:G,leftAlignment:N,rightAlignment:I,centerAlignment:D,stretchAlignment:$,baselineAlignment:k,groupWrapper:z,"direction-default":"_direction-default_1rn3e_55","direction-row":"_direction-row_1rn3e_61","direction-column":"_direction-column_1rn3e_64"};function C({children:a,direction:i="default",position:l="left",spacing:o="md",noWrap:s=!0,align:u="left",hasMaxWidth:c=!0,withBorder:m=!0,withStrongBorder:d=!1,onlyButton:p=!1,noMargin:f=!1,padding:n,backgroundColor:r}){function g(t){switch(t){case"left":return"leftPosition";case"right":return"rightPosition";case"center":return"centerPosition";case"apart":default:return"apartPosition"}}function _(t){switch(t){case"left":return"leftAlignment";case"right":return"rightAlignment";case"center":return"centerAlignment";case"stretch":return"stretchAlignment";case"baseline":default:return"baselineAlignment"}}function h(t){switch(t){case"xs":return"spacing-xs";case"sm":return"spacing-sm";case"md":return"spacing-md";case"lg":return"spacing-lg";case"xl":default:return"spacing-xl"}}function v(t){switch(t){case"column":return"direction-column";case"row":return"direction-row";case"default":default:return"direction-default"}}const b=x.useMemo(()=>!n&&n!==0?"":typeof n=="number"?`${n}rem`:n.map(t=>`${t}rem`).join(" "),[n]);return y.jsx("div",{className:w(e.boxWrapper,e[v(i)],e[g(l)],e[_(u)],e[h(o)],{[e[r??""]]:r,[e.hasMaxWidth]:c,[e.withBorder]:m,[e.withStrongBorder]:d,[e.noWrap]:s,[e.onlyButton]:p,[e.noMargin]:f}),style:{padding:b},children:a})}C.__docgenInfo={description:"",methods:[],displayName:"BoxWrapper",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'default' | 'row' | 'column'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'apart'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'apart'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"number"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},noWrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hasMaxWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},withBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},withStrongBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'baseline' | 'stretch'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onlyButton:{required:!1,tsType:{name:"boolean"},description:`If true, applies an even vertical padding in order to vertically center the button
@default false`,defaultValue:{value:"false",computed:!1}},noMargin:{required:!1,tsType:{name:"boolean"},description:`If true, the default margin will be removed
@default false`,defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"Array<number> | number",elements:[{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},{name:"number"}]},description:`Sets the padding prop in rem
Takes either a single number, e.g. 1 or an array of numbers, e.g. [1, 0] or [1, 0, 0, 1] (top, right, bottom, left)
Default is undefined, and therefore decided by styles/css
@default undefined`},backgroundColor:{required:!1,tsType:{name:"literal",value:"'light'"},description:""}}};export{C as B};
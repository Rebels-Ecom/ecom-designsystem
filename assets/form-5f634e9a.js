import{r as d,j as r}from"./jsx-runtime-03333307.js";import{I as R}from"./input-field-0be9721f.js";import{c as y}from"./index-09749a66.js";import{m as A}from"./motion-9380e2c6.js";import{I as L}from"./icon-a32914e5.js";import{H as k}from"./heading-ba18f9a9.js";import{T as M}from"./text-3c780825.js";import{B as x}from"./button-1f0f0554.js";import{F as v}from"./flex-container-7aff6506.js";import{E as N}from"./expandable-wrapper-968690e0.js";import{L as B}from"./link-button-ac128ff7.js";const S="_form_1y2wm_1",H="_formDirectionRow_1y2wm_6",V="_formTitle_1y2wm_11",W="_fieldsWrapper_1y2wm_15",$="_fieldsContainer_1y2wm_20",z="_field_1y2wm_15",U="_half_1y2wm_33",P="_full_1y2wm_37",J="_fieldDirectionRow_1y2wm_41",O="_actionsWrapper_1y2wm_47",X="_link_1y2wm_56",G="_linkDisabled_1y2wm_57",K="_generalErrorMessage_1y2wm_68",Q="_generalErrorMessageDisabled_1y2wm_79",Y="_loaderContainer_1y2wm_89",Z="_successIcon_1y2wm_100",t={form:S,formDirectionRow:H,formTitle:V,fieldsWrapper:W,fieldsContainer:$,field:z,half:U,full:P,fieldDirectionRow:J,actionsWrapper:O,link:X,linkDisabled:G,generalErrorMessage:K,generalErrorMessageDisabled:Q,loaderContainer:Y,successIcon:Z},F=(n,s)=>{switch(n){case"email":return s&&ne(s);case"password":return s&&re(s);case"age-verification":return s&&Number(s)>19;default:return!0}},ee=n=>n.required?n.pattern?!!F(n.pattern,n.value??n.originalValue)&&!!(n.value??n.originalValue):!!(n.value??n.originalValue):n.pattern?!!F(n.pattern,n.value??n.originalValue):!0,ne=n=>n&&/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(n),re=n=>n&&n!=="",ae=({onSubmit:n,onControlledSubmit:s,formTitle:h,formSubtitle:g,loading:p,responseMessage:c,...a})=>{var T,_;const[m,w]=d.useState(a.fields),[j,q]=d.useState(!1),b=d.useRef(null);d.useEffect(()=>{if(!b.current)return;const e=!m.some(i=>i.required&&!i.valid);q(e)},[m]);const C=d.useCallback(e=>{e.preventDefault(),n==null||n(m),s==null||s(e)},[m,n]),E=d.useCallback((e,i)=>{m.find(l=>l.name===i)&&w(l=>l.map(o=>{if(o.name===i){if(o.alphaField){const f=l.find(D=>D.name===o.alphaField);return{...o,dirty:!0,valid:(f==null?void 0:f.value)===e,value:e}}return{...o,dirty:!0,valid:ee({...o,value:e}),value:e}}else return o.alphaField?{...o,dirty:o.dirty,valid:o.value===e,value:o.name===i?e:o.value}:o}))},[]),I=e=>{w(i=>i.map(l=>l.name===e?{...l,valid:!0}:l))};return c?r.jsx(A.div,{initial:{opacity:0,scale:.2},animate:{opacity:c?1:0,scale:c?1:.2},children:r.jsxs("div",{className:t.loaderContainer,children:[c.icon&&r.jsx(L,{icon:c.icon,className:t.successIcon}),c.title&&r.jsx(k,{order:3,noMargin:!0,children:c.title}),r.jsx(M,{align:"center",children:c.message}),c.onClose&&r.jsx(x,{type:"button",surface:"primary",onClick:c.onClose,children:c.closeLabel??"Stäng"})]})}):r.jsxs("form",{ref:b,className:y(t.form,a.alignSubmitButtonHorizontally?t.formDirectionRow:""),onSubmit:C,autoComplete:"on",children:[r.jsxs("div",{className:t.fieldsWrapper,children:[h&&r.jsx(k,{order:3,className:t.formTitle,children:h}),g&&r.jsx("p",{className:t.formSubtitle,children:g}),r.jsx(v,{wrap:!0,className:t.fieldsContainer,children:m==null?void 0:m.map((e,i)=>r.jsx("div",{className:y(t.field,a.alignSubmitButtonHorizontally?t.fieldDirectionRow:"",t[e.size??"half"]),children:e.fieldType==="input"&&r.jsx(R,{...e,value:e.value??e.originalValue,onChange:(u,l)=>{E(u,l)},onControlledChange:u=>{var l;(l=e.onControlledChange)==null||l.call(e,u)},focusOnRender:i===0,readonly:e.blocked,disabled:p,validateAutofill:a.isLogin?I:void 0})},e.name))}),r.jsx(N,{open:!!a.generalErrorMessage,children:r.jsx(v,{alignItems:"center",justifyContent:"center",children:a.generalErrorMessage&&r.jsx("p",{className:y(t.generalErrorMessage,{[t.generalErrorMessageDisabled]:p}),dangerouslySetInnerHTML:{__html:a.generalErrorMessage}})})})]}),a.captcha&&r.jsx(v,{justifyContent:"center",alignItems:"center",children:a.captcha}),(a.actions||a.linkActions)&&r.jsxs(v,{justifyContent:a.alignActions??"center",className:t.actionsWrapper,children:[(T=a.actions)==null?void 0:T.map((e,i)=>r.jsx(x,{...e,disabled:e.type==="submit"?!j||e.disabled:e.disabled||p,loading:e.type==="submit"&&p},`${e.type}-${i}`)),(_=a.linkActions)==null?void 0:_.map((e,i)=>r.jsx(B,{...e},`${e.id??"0"}-${i}`))]}),a.links&&r.jsx(v,{alignItems:a.alignActions??"center",flexDirection:"column",children:a.links.map((e,i)=>r.jsx("a",{className:y(t.link,{[t.linkDisabled]:p}),href:e.href,target:"_blank",onClick:()=>{var u;return(u=e.onClick)==null?void 0:u.call(e)},children:e.name},`${e.name}-${i}`))})]})};ae.__docgenInfo={description:"",methods:[],displayName:"Form",props:{formTitle:{required:!0,tsType:{name:"string"},description:"descriptive title to display on top of form"},formSubtitle:{required:!1,tsType:{name:"string"},description:"descriptive subtitle to display under formTitle"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: TFormFieldType[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  /** if true, this will render a non editable, read only item */
  blocked?: boolean;
} & (
  | TFormInputType
  // | TFormInputMultiType
  // | TFormSingleSelectType
  // | TFormMultiSelectType
  // | TFormAssetsType
)`,elements:[{name:"signature",type:"object",raw:`{
  /** if true, this will render a non editable, read only item */
  blocked?: boolean;
}`,signature:{properties:[{key:"blocked",value:{name:"boolean",required:!1},description:"if true, this will render a non editable, read only item"}]}},{name:"unknown"}]}],raw:"TFormFieldType[]"},name:"data"}],return:{name:"void"}}},description:"submit that requires the complete form data"},onControlledSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},name:"event"}],return:{name:"void"}}},description:"submit that requires only the react form event"},loading:{required:!0,tsType:{name:"boolean"},description:"loading state which is necessary in order to disable form while loading"},fields:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  /** if true, this will render a non editable, read only item */
  blocked?: boolean;
} & (
  | TFormInputType
  // | TFormInputMultiType
  // | TFormSingleSelectType
  // | TFormMultiSelectType
  // | TFormAssetsType
)`,elements:[{name:"signature",type:"object",raw:`{
  /** if true, this will render a non editable, read only item */
  blocked?: boolean;
}`,signature:{properties:[{key:"blocked",value:{name:"boolean",required:!1},description:"if true, this will render a non editable, read only item"}]}},{name:"unknown"}]}],raw:"TFormFieldType[]"},description:"all fields to be rendered inside the form"},actions:{required:!1,tsType:{name:"Array",elements:[{name:"IButton"}],raw:"IButton[]"},description:""},linkActions:{required:!1,tsType:{name:"Array",elements:[{name:"ILinkButton"}],raw:"ILinkButton[]"},description:"Link buttons that will be rendered together with normal buttons/actions"},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  href: string;
  onClick?: CallableFunction;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"onClick",value:{name:"CallableFunction",required:!1}}]}}],raw:"TFormLink[]"},description:""},alignActions:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"}]},description:""},alignSubmitButtonHorizontally:{required:!1,tsType:{name:"boolean"},description:""},generalErrorMessage:{required:!1,tsType:{name:"any"},description:""},responseMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  message: string;
  title?: string;
  icon?: TIcon;
  onClose?: () => void;
  closeLabel?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"icon",value:{name:"union",raw:`| 'icon-alert-circle'\r
| 'icon-bell'\r
| 'icon-arrow-right'\r
| 'icon-mail'\r
| 'icon-map-pin'\r
| 'icon-menu'\r
| 'icon-x'\r
| 'icon-phone'\r
| 'icon-refresh-cw'\r
| 'icon-search'\r
| 'icon-x-circle'\r
| 'icon-plus-circle'\r
| 'icon-plus'\r
| 'icon-chevron-up'\r
| 'icon-chevron-down'\r
| 'icon-chevron-left'\r
| 'icon-chevron-right'\r
| 'icon-chevrons-left'\r
| 'icon-chevrons-right'\r
| 'icon-layers'\r
| 'icon-check'\r
| 'icon-check-circle'\r
| 'icon-user'\r
| 'icon-heart'\r
| 'icon-shopping-cart'\r
| 'icon-award'\r
| 'icon-package'\r
| 'icon-users'\r
| 'icon-facebook'\r
| 'icon-instagram'\r
| 'icon-linkedin'\r
| 'icon-clipboard'\r
| 'icon-download'\r
| 'icon-calendar'\r
| 'icon-settings'\r
| 'icon-info'\r
| 'icon-play'\r
| 'icon-archive'\r
| 'icon-file'\r
| 'icon-file-text'\r
| 'icon-message-circle'\r
| 'icon-share'\r
| 'icon-arrow-down-circle'\r
| 'icon-trash'\r
| 'icon-trash-2'\r
| 'icon-edit'\r
| 'icon-truck'\r
| 'icon-share-2'\r
| 'icon-heart-o'\r
| 'icon-heart1'\r
| 'icon-file-plus'\r
| 'icon-eye'\r
| 'icon-save'\r
| 'icon-alert-triangle'\r
| 'icon-trash-2'\r
| 'icon-minus-circle'\r
| 'icon-minus'`,elements:[{name:"literal",value:"'icon-alert-circle'"},{name:"literal",value:"'icon-bell'"},{name:"literal",value:"'icon-arrow-right'"},{name:"literal",value:"'icon-mail'"},{name:"literal",value:"'icon-map-pin'"},{name:"literal",value:"'icon-menu'"},{name:"literal",value:"'icon-x'"},{name:"literal",value:"'icon-phone'"},{name:"literal",value:"'icon-refresh-cw'"},{name:"literal",value:"'icon-search'"},{name:"literal",value:"'icon-x-circle'"},{name:"literal",value:"'icon-plus-circle'"},{name:"literal",value:"'icon-plus'"},{name:"literal",value:"'icon-chevron-up'"},{name:"literal",value:"'icon-chevron-down'"},{name:"literal",value:"'icon-chevron-left'"},{name:"literal",value:"'icon-chevron-right'"},{name:"literal",value:"'icon-chevrons-left'"},{name:"literal",value:"'icon-chevrons-right'"},{name:"literal",value:"'icon-layers'"},{name:"literal",value:"'icon-check'"},{name:"literal",value:"'icon-check-circle'"},{name:"literal",value:"'icon-user'"},{name:"literal",value:"'icon-heart'"},{name:"literal",value:"'icon-shopping-cart'"},{name:"literal",value:"'icon-award'"},{name:"literal",value:"'icon-package'"},{name:"literal",value:"'icon-users'"},{name:"literal",value:"'icon-facebook'"},{name:"literal",value:"'icon-instagram'"},{name:"literal",value:"'icon-linkedin'"},{name:"literal",value:"'icon-clipboard'"},{name:"literal",value:"'icon-download'"},{name:"literal",value:"'icon-calendar'"},{name:"literal",value:"'icon-settings'"},{name:"literal",value:"'icon-info'"},{name:"literal",value:"'icon-play'"},{name:"literal",value:"'icon-archive'"},{name:"literal",value:"'icon-file'"},{name:"literal",value:"'icon-file-text'"},{name:"literal",value:"'icon-message-circle'"},{name:"literal",value:"'icon-share'"},{name:"literal",value:"'icon-arrow-down-circle'"},{name:"literal",value:"'icon-trash'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-edit'"},{name:"literal",value:"'icon-truck'"},{name:"literal",value:"'icon-share-2'"},{name:"literal",value:"'icon-heart-o'"},{name:"literal",value:"'icon-heart1'"},{name:"literal",value:"'icon-file-plus'"},{name:"literal",value:"'icon-eye'"},{name:"literal",value:"'icon-save'"},{name:"literal",value:"'icon-alert-triangle'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-minus-circle'"},{name:"literal",value:"'icon-minus'"}],required:!1}},{key:"onClose",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"closeLabel",value:{name:"string",required:!1}}]}},description:"If true, a message will be displayed after submit response"},captcha:{required:!1,tsType:{name:"JSX.Element"},description:""},isLogin:{required:!1,tsType:{name:"boolean"},description:"Used for login form only, in order to avoid disabling submit button per default"}}};export{ae as F,ee as v};

import{r as m,j as r}from"./jsx-runtime-03333307.js";import{I as R}from"./input-field-7ae7c81e.js";import{c as h}from"./index-09749a66.js";import{m as A}from"./motion-9380e2c6.js";import{I as L}from"./icon-e3522fc5.js";import{H as _}from"./heading-ba18f9a9.js";import{T as M}from"./text-002528fe.js";import{B as x}from"./button-1a287b34.js";import{F as v}from"./flex-container-7aff6506.js";import{E as B}from"./expandable-wrapper-2c014a29.js";import{L as N}from"./link-button-8ad71205.js";const F=(n,s)=>{switch(n){case"email":return s&&H(s);case"password":return s&&V(s);case"age-verification":return s&&Number(s)>19;default:return!0}},S=n=>n.required?n.pattern?!!F(n.pattern,n.value??n.originalValue)&&!!(n.value??n.originalValue):!!(n.value??n.originalValue):n.pattern?!!F(n.pattern,n.value??n.originalValue):!0,H=n=>n&&/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(n),V=n=>n&&n!=="",W="_form_1no36_1",$="_formDirectionRow_1no36_6",z="_formTitle_1no36_11",U="_fieldsWrapper_1no36_15",P="_field_1no36_15",J="_half_1no36_25",O="_full_1no36_29",X="_fieldDirectionRow_1no36_33",G="_actionsWrapper_1no36_39",K="_link_1no36_48",Q="_linkDisabled_1no36_49",Y="_generalErrorMessage_1no36_60",Z="_generalErrorMessageDisabled_1no36_66",ee="_loaderContainer_1no36_76",ne="_successIcon_1no36_87",t={form:W,formDirectionRow:$,formTitle:z,fieldsWrapper:U,field:P,half:J,full:O,fieldDirectionRow:X,actionsWrapper:G,link:K,linkDisabled:Q,generalErrorMessage:Y,generalErrorMessageDisabled:Z,loaderContainer:ee,successIcon:ne},re=({onSubmit:n,onControlledSubmit:s,formTitle:g,formSubtitle:y,loading:d,responseMessage:c,...a})=>{var T,k;const[u,b]=m.useState(a.fields),[j,q]=m.useState(!1),w=m.useRef(null);m.useEffect(()=>{if(!w.current)return;const e=!u.some(i=>i.required&&!i.valid);q(e)},[u]);const E=m.useCallback(e=>{e.preventDefault(),n==null||n(u),s==null||s(e)},[u,n]),I=m.useCallback((e,i)=>{u.find(l=>l.name===i)&&b(l=>l.map(o=>{if(o.name===i){if(o.alphaField){const f=l.find(D=>D.name===o.alphaField);return{...o,dirty:!0,valid:(f==null?void 0:f.value)===e,value:e}}return{...o,dirty:!0,valid:S({...o,value:e}),value:e}}else return o.alphaField?{...o,dirty:o.dirty,valid:o.value===e,value:o.name===i?e:o.value}:o}))},[]),C=e=>{b(i=>i.map(l=>l.name===e?{...l,valid:!0}:l))};return c?r.jsx(A.div,{initial:{opacity:0,scale:.2},animate:{opacity:c?1:0,scale:c?1:.2},children:r.jsxs("div",{className:t.loaderContainer,children:[c.icon&&r.jsx(L,{icon:c.icon,className:t.successIcon}),c.title&&r.jsx(_,{order:3,noMargin:!0,children:c.title}),r.jsx(M,{align:"center",children:c.message}),c.onClose&&r.jsx(x,{type:"button",surface:"primary",onClick:c.onClose,children:c.closeLabel??"Stäng"})]})}):r.jsxs("form",{ref:w,className:h(t.form,a.alignSubmitButtonHorizontally?t.formDirectionRow:""),onSubmit:E,autoComplete:"on",children:[r.jsxs("div",{className:t.fieldsWrapper,children:[g&&r.jsx(_,{order:3,className:t.formTitle,children:g}),y&&r.jsx("p",{className:t.formSubtitle,children:y}),r.jsx(v,{wrap:!0,children:u==null?void 0:u.map((e,i)=>r.jsx("div",{className:h(t.field,a.alignSubmitButtonHorizontally?t.fieldDirectionRow:"",t[e.size??"half"]),children:e.fieldType==="input"&&r.jsx(R,{...e,value:e.value??e.originalValue,onChange:(p,l)=>{I(p,l)},onControlledChange:p=>{var l;(l=e.onControlledChange)==null||l.call(e,p)},focusOnRender:i===0,readonly:e.blocked,disabled:d,validateAutofill:a.isLogin?C:void 0})},e.name))}),r.jsx(B,{open:!!a.generalErrorMessage,children:r.jsx(v,{alignItems:"center",justifyContent:"center",children:a.generalErrorMessage&&r.jsx("p",{className:h(t.generalErrorMessage,{[t.generalErrorMessageDisabled]:d}),dangerouslySetInnerHTML:{__html:a.generalErrorMessage}})})})]}),a.captcha&&r.jsx(v,{justifyContent:"center",alignItems:"center",children:a.captcha}),(a.actions||a.linkActions)&&r.jsxs(v,{justifyContent:a.alignActions??"center",className:t.actionsWrapper,children:[(T=a.actions)==null?void 0:T.map((e,i)=>r.jsx(x,{...e,disabled:e.type==="submit"?!j||e.disabled:e.disabled||d,loading:e.type==="submit"&&d},`${e.type}-${i}`)),(k=a.linkActions)==null?void 0:k.map((e,i)=>r.jsx(N,{...e},`${e.id??"0"}-${i}`))]}),a.links&&r.jsx(v,{alignItems:a.alignActions??"center",flexDirection:"column",children:a.links.map((e,i)=>r.jsx("a",{className:h(t.link,{[t.linkDisabled]:d}),href:e.href,target:"_blank",children:e.name},`${e.name}-${i}`))})]})};re.__docgenInfo={description:"",methods:[],displayName:"Form",props:{formTitle:{required:!0,tsType:{name:"string"},description:"descriptive title to display on top of form"},formSubtitle:{required:!1,tsType:{name:"string"},description:"descriptive subtitle to display under formTitle"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: TFormFieldType[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"TFormLink[]"},description:""},alignActions:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"}]},description:""},alignSubmitButtonHorizontally:{required:!1,tsType:{name:"boolean"},description:""},generalErrorMessage:{required:!1,tsType:{name:"any"},description:""},responseMessage:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| 'icon-trash-2'`,elements:[{name:"literal",value:"'icon-alert-circle'"},{name:"literal",value:"'icon-bell'"},{name:"literal",value:"'icon-arrow-right'"},{name:"literal",value:"'icon-mail'"},{name:"literal",value:"'icon-map-pin'"},{name:"literal",value:"'icon-menu'"},{name:"literal",value:"'icon-x'"},{name:"literal",value:"'icon-phone'"},{name:"literal",value:"'icon-refresh-cw'"},{name:"literal",value:"'icon-search'"},{name:"literal",value:"'icon-x-circle'"},{name:"literal",value:"'icon-plus-circle'"},{name:"literal",value:"'icon-plus'"},{name:"literal",value:"'icon-chevron-up'"},{name:"literal",value:"'icon-chevron-down'"},{name:"literal",value:"'icon-chevron-left'"},{name:"literal",value:"'icon-chevron-right'"},{name:"literal",value:"'icon-chevrons-left'"},{name:"literal",value:"'icon-chevrons-right'"},{name:"literal",value:"'icon-layers'"},{name:"literal",value:"'icon-check'"},{name:"literal",value:"'icon-check-circle'"},{name:"literal",value:"'icon-user'"},{name:"literal",value:"'icon-heart'"},{name:"literal",value:"'icon-shopping-cart'"},{name:"literal",value:"'icon-award'"},{name:"literal",value:"'icon-package'"},{name:"literal",value:"'icon-users'"},{name:"literal",value:"'icon-facebook'"},{name:"literal",value:"'icon-instagram'"},{name:"literal",value:"'icon-linkedin'"},{name:"literal",value:"'icon-clipboard'"},{name:"literal",value:"'icon-download'"},{name:"literal",value:"'icon-calendar'"},{name:"literal",value:"'icon-settings'"},{name:"literal",value:"'icon-info'"},{name:"literal",value:"'icon-play'"},{name:"literal",value:"'icon-archive'"},{name:"literal",value:"'icon-file'"},{name:"literal",value:"'icon-file-text'"},{name:"literal",value:"'icon-message-circle'"},{name:"literal",value:"'icon-share'"},{name:"literal",value:"'icon-arrow-down-circle'"},{name:"literal",value:"'icon-trash'"},{name:"literal",value:"'icon-trash-2'"},{name:"literal",value:"'icon-edit'"},{name:"literal",value:"'icon-truck'"},{name:"literal",value:"'icon-share-2'"},{name:"literal",value:"'icon-heart-o'"},{name:"literal",value:"'icon-heart1'"},{name:"literal",value:"'icon-file-plus'"},{name:"literal",value:"'icon-eye'"},{name:"literal",value:"'icon-save'"},{name:"literal",value:"'icon-alert-triangle'"},{name:"literal",value:"'icon-trash-2'"}],required:!1}},{key:"onClose",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"closeLabel",value:{name:"string",required:!1}}]}},description:"If true, a message will be displayed after submit response"},captcha:{required:!1,tsType:{name:"JSX.Element"},description:""},isLogin:{required:!1,tsType:{name:"boolean"},description:"Used for login form only, in order to avoid disabling submit button per default"}}};export{re as F,S as v};
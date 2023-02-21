import{r as l}from"./index-6f814c40.js";import{c as C}from"./index-74f03c09.js";import{I as L}from"./icon-eb31426b.js";import{a as e,j as f,F as w}from"./jsx-runtime-76c5c2e2.js";import{u as W,a as A}from"./useOnClickOutside-97ae9690.js";import{r as E}from"./index-6de6b113.js";import{A as H,m as k}from"./index-822585cb.js";import{B as v}from"./button-e76f0a80.js";import{F as D}from"./form-group-3d2833e4.js";import{I as j}from"./input-text-9b6e45e8.js";import{T as z}from"./textarea-9285016a.js";import"./_commonjsHelpers-042e6b4d.js";import"./button.module-495ac369.js";import"./inline-helper-text-aaf55e8e.js";import"./inline-error-text-ec1cfa0f.js";import"./form-helper-ce65ae5e.js";const G=t=>{const[o,r]=l.useState({render:()=>null,remove:()=>null}),a=l.useCallback(n=>({render:({children:s})=>E.createPortal(s,n),remove:()=>E.unmountComponentAtNode(n)}),[]);return l.useEffect(()=>{if(t){o.remove();const n=a(t);return r(n),()=>{n.remove()}}},[t]),o.render},$=G;function J(t,o,r){var i;const a=(i=t.current)==null?void 0:i.querySelectorAll('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])'),n=a!=null&&a.length?a[0]:null;l.useLayoutEffect(()=>{const s=document.querySelector("body");o?setTimeout(()=>{s.style.overflow="hidden",r.current?r.current.focus():n==null||n.focus()},25):s.style.overflow="visible"},[o,r]),l.useEffect(()=>{o?document.addEventListener("focusout",c):document.removeEventListener("focusout",c)},[o]);const c=s=>{var h;const u=(h=t==null?void 0:t.current)==null?void 0:h.querySelectorAll('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])'),y=u!=null&&u.length?u[0]:null;(u!=null&&u.length?u[u.length-1]:null)===s.target&&y&&setTimeout(()=>y.focus(),25)}}const K="_dialog_wugmk_1",Q="_innerWrapper_wugmk_3",X="_overlay_wugmk_29",Y="_content_wugmk_43",Z="_noPadding_wugmk_93",U="_closeBtn_wugmk_101",ee="_icon_wugmk_163",d={dialog:K,innerWrapper:Q,overlay:X,content:Y,noPadding:Z,closeBtn:U,icon:ee},x=.5,te={open:{display:"block"},closed:{display:"none"}},g=({id:t,role:o,children:r,ariaLabelledBy:a,ariaDescribedBy:n,hasOverlay:c,onClose:i,isOpen:s,animationVariants:u=te,focusableElementInside:y,noPadding:b,hasPortal:h=!0,theme:M,className:V})=>{const _=l.useRef(null),O=l.useRef(null);W({ref:O,onClose:i}),J(_,s,y),A({onClose:i,isOpen:s});const N=$(document.querySelector("body")),P=()=>e(H,{initial:!1,children:s&&f("div",{className:C(d.dialog,V),id:t||void 0,role:o,"aria-labelledby":a,"aria-describedby":n,"aria-modal":"true",ref:_,children:[c&&e(k.div,{id:t,initial:"closed",animate:"open",exit:"closed",variants:{open:{display:"block"},closed:{display:"none"}},transition:{duration:x,ease:"easeOut"},children:e("div",{className:d.overlay})}),e(k.div,{id:t,initial:"closed",animate:"open",exit:"closed",variants:u,transition:{duration:x,ease:"easeOut"},children:e("div",{className:d.innerWrapper,children:f("div",{className:C(d.content,M,b&&d.noPadding),ref:O,children:[e("button",{className:d.closeBtn,onClick:i,children:e(L,{icon:"icon-x",className:d.icon})}),r]})})})]})});return h?e(N,{children:P()}):P()};try{g.displayName="Dialog",g.__docgenInfo={description:"",displayName:"Dialog",props:{role:{defaultValue:null,description:"",name:"role",required:!0,type:{name:"enum",value:[{value:'"dialog"'},{value:'"alert"'},{value:'"alertdialog"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!1,type:{name:"string"}},ariaDescribedBy:{defaultValue:null,description:"",name:"ariaDescribedBy",required:!1,type:{name:"string"}},hasOverlay:{defaultValue:null,description:"",name:"hasOverlay",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},animationVariants:{defaultValue:{value:`{\r
  open: { display: 'block' },\r
  closed: { display: 'none' },\r
}`},description:"",name:"animationVariants",required:!1,type:{name:"TAnimationVariants"}},focusableElementInside:{defaultValue:null,description:"",name:"focusableElementInside",required:!1,type:{name:"any"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},hasPortal:{defaultValue:{value:"true"},description:"",name:"hasPortal",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _e={title:"Design System/Molecules/Dialog",component:g,decorators:[(t,o)=>e("div",{className:o.globals.theme,children:e(t,{})})]},ne=t=>{const[o,r]=l.useState(!1),a=l.useRef(null),n=l.useRef(null);function c(){var s;r(!1),(s=a==null?void 0:a.current)==null||s.focus()}function i(){r(!0)}return f("div",{children:[e("div",{children:e(v,{type:"button",surface:"primary",onClick:i,ref:a,children:"Open Modal"})}),e(g,{...t,isOpen:o,onClose:c,focusableElementInside:n,hasPortal:!1,theme:"light",children:f("form",{style:{minHeight:"10rem"},children:[e("h2",{className:"h3",style:{marginTop:0},children:"We value your opinion"}),e(D,{label:"What is your favourite cinema visit through all times?",formElement:j,formElementProps:{id:"input1",value:"",onChange:()=>{}},ref:n}),e("br",{}),e(D,{label:"What was so special about it?",formElement:z,formElementProps:{id:"input2",value:"",onChange:()=>{}}}),f("div",{style:{marginTop:"2rem"},children:[e("span",{style:{marginRight:"2rem"},children:e(v,{type:"submit",surface:"primary",size:"small",children:"Submit"})}),e(v,{type:"button",surface:"secondary",size:"small",onClick:c,children:"Close"})]})]})})]})},oe=t=>{const[o,r]=l.useState(!1),a=l.useRef(null),n=l.useRef(null);function c(){r(!1)}function i(){r(!0)}return f(w,{children:[e(v,{type:"button",surface:"primary",onClick:i,ref:a,children:"Open Modal"}),e(g,{...t,isOpen:o,onClose:c,focusableElementInside:n,noPadding:!0,hasPortal:!1,theme:"dark",children:e("div",{style:{paddingBottom:"56.25%",width:"100%"},children:e("video",{controls:!0,style:{position:"absolute",top:0,height:"100%",left:0},ref:n,children:e("source",{src:"https://trailers.filmstaden.se/asset-bd59494e-d4fb-4699-9d8e-a614c4c3273e/Lidl_juni_1280x720.mp4"})})})})]})},F={role:"dialog",hasOverlay:!0},m=ne.bind({});m.storyName="Light Dialog";m.args=F;const p=oe.bind({});p.storyName="Dark Dialog";p.args=F;var B,R,S;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const insideFocusModalRef = useRef<HTMLInputElement>(null);
  function onClose() {
    setIsOpen(false);
    buttonRef?.current?.focus();
  }
  function onOpen() {
    setIsOpen(true);
  }
  return <div>
      <div>
        <Button type="button" surface="primary" onClick={onOpen} ref={buttonRef}>
          Open Modal
        </Button>
      </div>
      <Dialog {...args} isOpen={isOpen} onClose={onClose} focusableElementInside={insideFocusModalRef} hasPortal={false} theme="light">
        <form style={{
        minHeight: '10rem'
      }}>
          <h2 className="h3" style={{
          marginTop: 0
        }}>
            We value your opinion
          </h2>
          <FormGroup label={'What is your favourite cinema visit through all times?'} formElement={InputText} formElementProps={{
          id: 'input1',
          value: '',
          onChange: () => {}
        }} ref={insideFocusModalRef} />
          <br />
          <FormGroup label={'What was so special about it?'} formElement={Textarea} formElementProps={{
          id: 'input2',
          value: '',
          onChange: () => {}
        }} />
          <div style={{
          marginTop: '2rem'
        }}>
            <span style={{
            marginRight: '2rem'
          }}>
              <Button type="submit" surface="primary" size="small">
                Submit
              </Button>
            </span>
            <Button type="button" surface="secondary" size="small" onClick={onClose}>
              Close
            </Button>
          </div>
        </form>
      </Dialog>
    </div>;
}`,...(S=(R=m.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var I,T,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const insideFocusModalRef = useRef<HTMLVideoElement>(null);
  function onClose() {
    setIsOpen(false);
  }
  function onOpen() {
    setIsOpen(true);
  }
  return <>
      <Button type="button" surface="primary" onClick={onOpen} ref={buttonRef}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={onClose} focusableElementInside={insideFocusModalRef} noPadding hasPortal={false} theme="dark">
        <div style={{
        paddingBottom: '56.25%',
        width: '100%'
      }}>
          <video controls style={{
          position: 'absolute',
          top: 0,
          height: '100%',
          left: 0
        }} ref={insideFocusModalRef}>
            <source src="https://trailers.filmstaden.se/asset-bd59494e-d4fb-4699-9d8e-a614c4c3273e/Lidl_juni_1280x720.mp4" />
          </video>
        </div>
      </Dialog>
    </>;
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const Oe=["DialogStoryLight","DialogStoryDark"];export{p as DialogStoryDark,m as DialogStoryLight,Oe as __namedExportsOrder,_e as default};
//# sourceMappingURL=dialog.stories-db7892a8.js.map

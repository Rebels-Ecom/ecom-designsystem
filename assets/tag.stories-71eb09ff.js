import{a as u}from"./jsx-runtime-76c5c2e2.js";const N="_tag_8tyjh_1",b="_rectangular_8tyjh_10",j="_small_8tyjh_11",z="_large_8tyjh_21",L="_round_8tyjh_33",l={tag:N,rectangular:b,small:j,large:z,round:L},n=({text:s,size:R,shape:f,className:g})=>u("div",{className:`${l.tag} ${l[R]} ${l[f]} ${g||""}`,children:s});try{n.displayName="Tag",n.__docgenInfo={description:"",displayName:"Tag",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"enum",value:[{value:'"rectangular"'},{value:'"round"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Design System/Atoms/Tag",component:n},o=s=>u("div",{style:{margin:"0 auto",maxWidth:"1800px"},children:u(n,{...s})}),a=o.bind({});a.storyName="Tag Story Rectangular Small";a.args={text:"EKO",size:"small",shape:"rectangular"};const e=o.bind({});e.storyName="Tag Story Rectangular Large";e.args={text:"Tillval",size:"large",shape:"rectangular"};const r=o.bind({});r.storyName="Tag Story Round Small";r.args={text:"Kurs",size:"small",shape:"round"};const t=o.bind({});t.storyName="Tag Story Round Large";t.args={text:"Nyhet",size:"large",shape:"round"};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
            <Tag {...args} />
        </div>;
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
            <Tag {...args} />
        </div>;
}`,...(y=(p=e.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var _,S,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
            <Tag {...args} />
        </div>;
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var h,x,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <div style={{
    margin: '0 auto',
    maxWidth: '1800px'
  }}>
            <Tag {...args} />
        </div>;
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const $=["TagStoryRectangular_S","TagStoryRectangular_L","TagStoryRound_S","TagStoryRound_L"],O=Object.freeze(Object.defineProperty({__proto__:null,TagStoryRectangular_L:e,TagStoryRectangular_S:a,TagStoryRound_L:t,TagStoryRound_S:r,__namedExportsOrder:$,default:W},Symbol.toStringTag,{value:"Module"}));export{n as T,a,r as b,O as t};
//# sourceMappingURL=tag.stories-71eb09ff.js.map

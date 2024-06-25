import{c as g}from"./index-09749a66.js";import{j as a}from"./jsx-runtime-03333307.js";import{m as l}from"./motion-9380e2c6.js";import"./tslib.es6-4d885d63.js";const f="_campaignsWrapper_14iam_1",b="_absolute_14iam_4",y="_fixed_14iam_11",v="_campaignBanner_14iam_19",B="_title_14iam_38",n={campaignsWrapper:f,absolute:b,fixed:y,campaignBanner:v,title:B},i=({campaigns:r,position:d="absolute",animate:c=!1})=>a.jsx("div",{className:g(n.campaignsWrapper,n[d]),children:r.map((e,s)=>{const u={"--campaign-banner-color":e.color};return a.jsx(l.div,{className:n.campaignBanner,style:u,initial:c?{opacity:0,translateY:"-50px"}:void 0,animate:{opacity:1,translateY:0},transition:{delay:(s+1)*.3,type:"spring",duration:.3},children:a.jsx(l.button,{whileTap:e.disabled?void 0:{scale:.95},className:n.button,onClick:e.onClick,disabled:e.disabled,children:a.jsx("span",{className:n.title,children:e.title})},e.title)},`${e.title}-${s}`)})});i.__docgenInfo={description:"",methods:[],displayName:"CampaignBanner",props:{campaigns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Array<TCampaign>"},description:""},position:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed' | 'relative'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"},{name:"literal",value:"'relative'"}]},description:`sets positioning of the wrapper
@default 'absolute'`,defaultValue:{value:"'absolute'",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:`If true, each campaign will have an enter animation
@default false`,defaultValue:{value:"false",computed:!1}}}};const D={title:"Design System/Atoms/CampaignBanner",component:i},_={render:r=>a.jsx(a.Fragment,{children:a.jsx(i,{...r})})},t={..._,args:{animate:!1,campaigns:[{title:"Campaign Banner",color:"#9A576F",disabled:!1},{title:"Campaign Banner 2",color:"#3D5B49",disabled:!1},{title:"Campaign Banner 3",color:"#1D1D1D",disabled:!1}]}};var o,m,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...CampaignBannerStoryTemplate,
  args: {
    animate: false,
    campaigns: [{
      title: 'Campaign Banner',
      color: '#9A576F',
      disabled: false
    }, {
      title: 'Campaign Banner 2',
      color: '#3D5B49',
      disabled: false
    }, {
      title: 'Campaign Banner 3',
      color: '#1D1D1D',
      disabled: false
    }]
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const k=["CampaignBannerStory"];export{t as CampaignBannerStory,k as __namedExportsOrder,D as default};

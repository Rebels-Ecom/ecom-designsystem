import{r as g,j as A}from"./jsx-runtime-03333307.js";import{P as ct,u as Pt,c as ne,a as wt,b as Ve,d as K,e as oe,D as Ye,S as Xe,f as Ge,g as qe,h as Ue}from"./index-145cfc81.js";import{r as Ke}from"./index-821951ec.js";import{I as Ze}from"./icon-e3522fc5.js";import{c as Je}from"./index-09749a66.js";const Qe=["top","right","bottom","left"],W=Math.min,j=Math.max,ht=Math.round,dt=Math.floor,G=t=>({x:t,y:t}),tn={left:"right",right:"left",bottom:"top",top:"bottom"},en={start:"end",end:"start"};function Tt(t,e,n){return j(t,W(e,n))}function V(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function St(t){return t==="x"?"y":"x"}function _t(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(Y(t))?"y":"x"}function Dt(t){return St(et(t))}function nn(t,e,n){n===void 0&&(n=!1);const o=tt(t),r=Dt(t),i=_t(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=mt(s)),[s,mt(s)]}function on(t){const e=mt(t);return[Rt(t),e,Rt(e)]}function Rt(t){return t.replace(/start|end/g,e=>en[e])}function rn(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}function sn(t,e,n,o){const r=tt(t);let i=rn(Y(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(Rt)))),i}function mt(t){return t.replace(/left|right|bottom|top/g,e=>tn[e])}function cn(t){return{top:0,right:0,bottom:0,left:0,...t}}function re(t){return typeof t!="number"?cn(t):{top:t,right:t,bottom:t,left:t}}function gt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Gt(t,e,n){let{reference:o,floating:r}=t;const i=et(e),s=Dt(e),l=_t(s),c=Y(e),a=i==="y",f=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,h=o[l]/2-r[l]/2;let d;switch(c){case"top":d={x:f,y:o.y-r.height};break;case"bottom":d={x:f,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(tt(e)){case"start":d[s]-=h*(n&&a?-1:1);break;case"end":d[s]+=h*(n&&a?-1:1);break}return d}const ln=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=Gt(a,o,c),h=o,d={},p=0;for(let m=0;m<l.length;m++){const{name:x,fn:w}=l[m],{x:y,y:C,data:v,reset:b}=await w({x:f,y:u,initialPlacement:o,placement:h,strategy:r,middlewareData:d,rects:a,platform:s,elements:{reference:t,floating:e}});f=y??f,u=C??u,d={...d,[x]:{...d[x],...v}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:f,y:u}=Gt(a,h,c)),m=-1)}return{x:f,y:u,placement:h,strategy:r,middlewareData:d}};async function it(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:h=!1,padding:d=0}=V(e,t),p=re(d),x=l[h?u==="floating"?"reference":"floating":u],w=gt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:a,rootBoundary:f,strategy:c})),y=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),v=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},b=gt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:C,strategy:c}):y);return{top:(w.top-b.top+p.top)/v.y,bottom:(b.bottom-w.bottom+p.bottom)/v.y,left:(w.left-b.left+p.left)/v.x,right:(b.right-w.right+p.right)/v.x}}const an=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:f=0}=V(t,e)||{};if(a==null)return{};const u=re(f),h={x:n,y:o},d=Dt(r),p=_t(d),m=await s.getDimensions(a),x=d==="y",w=x?"top":"left",y=x?"bottom":"right",C=x?"clientHeight":"clientWidth",v=i.reference[p]+i.reference[d]-h[d]-i.floating[p],b=h[d]-i.reference[d],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let R=P?P[C]:0;(!R||!await(s.isElement==null?void 0:s.isElement(P)))&&(R=l.floating[C]||i.floating[p]);const S=v/2-b/2,$=R/2-m[p]/2-1,M=W(u[w],$),D=W(u[y],$),O=M,k=R-m[p]-D,_=R/2-m[p]/2+S,E=Tt(O,_,k),L=!c.arrow&&tt(r)!=null&&_!==E&&i.reference[p]/2-(_<O?M:D)-m[p]/2<0,T=L?_<O?_-O:_-k:0;return{[d]:h[d]+T,data:{[d]:E,centerOffset:_-E-T,...L&&{alignmentOffset:T}},reset:L}}}),fn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...x}=V(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const w=Y(r),y=Y(l)===l,C=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=h||(y||!m?[mt(l)]:on(l));!h&&p!=="none"&&v.push(...sn(l,m,p,C));const b=[l,...v],P=await it(e,x),R=[];let S=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&R.push(P[w]),u){const O=nn(r,s,C);R.push(P[O[0]],P[O[1]])}if(S=[...S,{placement:r,overflows:R}],!R.every(O=>O<=0)){var $,M;const O=((($=i.flip)==null?void 0:$.index)||0)+1,k=b[O];if(k)return{data:{index:O,overflows:S},reset:{placement:k}};let _=(M=S.filter(E=>E.overflows[0]<=0).sort((E,L)=>E.overflows[1]-L.overflows[1])[0])==null?void 0:M.placement;if(!_)switch(d){case"bestFit":{var D;const E=(D=S.map(L=>[L.placement,L.overflows.filter(T=>T>0).reduce((T,N)=>T+N,0)]).sort((L,T)=>L[1]-T[1])[0])==null?void 0:D[0];E&&(_=E);break}case"initialPlacement":_=l;break}if(r!==_)return{reset:{placement:_}}}return{}}}};function qt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Ut(t){return Qe.some(e=>t[e]>=0)}const un=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=V(t,e);switch(o){case"referenceHidden":{const i=await it(e,{...r,elementContext:"reference"}),s=qt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ut(s)}}}case"escaped":{const i=await it(e,{...r,altBoundary:!0}),s=qt(i,n.floating);return{data:{escapedOffsets:s,escaped:Ut(s)}}}default:return{}}}}};async function dn(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Y(n),l=tt(n),c=et(n)==="y",a=["left","top"].includes(s)?-1:1,f=i&&c?-1:1,u=V(e,t);let{mainAxis:h,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof p=="number"&&(d=l==="end"?p*-1:p),c?{x:d*f,y:h*a}:{x:h*a,y:d*f}}const pn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:l}=e,c=await dn(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:s}}}}},hn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:x=>{let{x:w,y}=x;return{x:w,y}}},...c}=V(t,e),a={x:n,y:o},f=await it(e,c),u=et(Y(r)),h=St(u);let d=a[h],p=a[u];if(i){const x=h==="y"?"top":"left",w=h==="y"?"bottom":"right",y=d+f[x],C=d-f[w];d=Tt(y,d,C)}if(s){const x=u==="y"?"top":"left",w=u==="y"?"bottom":"right",y=p+f[x],C=p-f[w];p=Tt(y,p,C)}const m=l.fn({...e,[h]:d,[u]:p});return{...m,data:{x:m.x-n,y:m.y-o}}}}},mn=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=V(t,e),f={x:n,y:o},u=et(r),h=St(u);let d=f[h],p=f[u];const m=V(l,e),x=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(c){const C=h==="y"?"height":"width",v=i.reference[h]-i.floating[C]+x.mainAxis,b=i.reference[h]+i.reference[C]-x.mainAxis;d<v?d=v:d>b&&(d=b)}if(a){var w,y;const C=h==="y"?"width":"height",v=["top","left"].includes(Y(r)),b=i.reference[u]-i.floating[C]+(v&&((w=s.offset)==null?void 0:w[u])||0)+(v?0:x.crossAxis),P=i.reference[u]+i.reference[C]+(v?0:((y=s.offset)==null?void 0:y[u])||0)-(v?x.crossAxis:0);p<b?p=b:p>P&&(p=P)}return{[h]:d,[u]:p}}}},gn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:r,elements:i}=e,{apply:s=()=>{},...l}=V(t,e),c=await it(e,l),a=Y(n),f=tt(n),u=et(n)==="y",{width:h,height:d}=o.floating;let p,m;a==="top"||a==="bottom"?(p=a,m=f===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(m=a,p=f==="end"?"top":"bottom");const x=d-c.top-c.bottom,w=h-c.left-c.right,y=W(d-c[p],x),C=W(h-c[m],w),v=!e.middlewareData.shift;let b=y,P=C;if(u?P=f||v?W(C,w):w:b=f||v?W(y,x):x,v&&!f){const S=j(c.left,0),$=j(c.right,0),M=j(c.top,0),D=j(c.bottom,0);u?P=h-2*(S!==0||$!==0?S+$:j(c.left,c.right)):b=d-2*(M!==0||D!==0?M+D:j(c.top,c.bottom))}await s({...e,availableWidth:P,availableHeight:b});const R=await r.getDimensions(i.floating);return h!==R.width||d!==R.height?{reset:{rects:!0}}:{}}}};function nt(t){return ie(t)?(t.nodeName||"").toLowerCase():"#document"}function H(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function X(t){var e;return(e=(ie(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ie(t){return t instanceof Node||t instanceof H(t).Node}function F(t){return t instanceof Element||t instanceof H(t).Element}function B(t){return t instanceof HTMLElement||t instanceof H(t).HTMLElement}function Kt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof H(t).ShadowRoot}function lt(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=I(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function xn(t){return["table","td","th"].includes(nt(t))}function Lt(t){const e=Mt(),n=I(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function wn(t){let e=q(t);for(;B(e)&&!J(e);){if(Lt(e))return e;e=q(e)}return null}function Mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(nt(t))}function I(t){return H(t).getComputedStyle(t)}function yt(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function q(t){if(nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||X(t);return Kt(e)?e.host:e}function se(t){const e=q(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&lt(e)?e:se(e)}function st(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=se(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=H(r);return i?e.concat(s,s.visualViewport||[],lt(r)?r:[],s.frameElement&&n?st(s.frameElement):[]):e.concat(r,st(r,[],n))}function ce(t){const e=I(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=B(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,l=ht(n)!==i||ht(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function kt(t){return F(t)?t:t.contextElement}function Z(t){const e=kt(t);if(!B(e))return G(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=ce(e);let s=(i?ht(n.width):n.width)/o,l=(i?ht(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const yn=G(0);function le(t){const e=H(t);return!Mt()||!e.visualViewport?yn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function vn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==H(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=kt(t);let s=G(1);e&&(o?F(o)&&(s=Z(o)):s=Z(t));const l=vn(i,n,o)?le(i):G(0);let c=(r.left+l.x)/s.x,a=(r.top+l.y)/s.y,f=r.width/s.x,u=r.height/s.y;if(i){const h=H(i),d=o&&F(o)?H(o):o;let p=h,m=p.frameElement;for(;m&&o&&d!==p;){const x=Z(m),w=m.getBoundingClientRect(),y=I(m),C=w.left+(m.clientLeft+parseFloat(y.paddingLeft))*x.x,v=w.top+(m.clientTop+parseFloat(y.paddingTop))*x.y;c*=x.x,a*=x.y,f*=x.x,u*=x.y,c+=C,a+=v,p=H(m),m=p.frameElement}}return gt({width:f,height:u,x:c,y:a})}const bn=[":popover-open",":modal"];function Nt(t){return bn.some(e=>{try{return t.matches(e)}catch{return!1}})}function Cn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=X(o),l=e?Nt(e.floating):!1;if(o===s||l&&i)return n;let c={scrollLeft:0,scrollTop:0},a=G(1);const f=G(0),u=B(o);if((u||!u&&!i)&&((nt(o)!=="body"||lt(s))&&(c=yt(o)),B(o))){const h=U(o);a=Z(o),f.x=h.x+o.clientLeft,f.y=h.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+f.x,y:n.y*a.y-c.scrollTop*a.y+f.y}}function An(t){return Array.from(t.getClientRects())}function ae(t){return U(X(t)).left+yt(t).scrollLeft}function Pn(t){const e=X(t),n=yt(t),o=t.ownerDocument.body,r=j(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=j(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+ae(t);const l=-n.scrollTop;return I(o).direction==="rtl"&&(s+=j(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:l}}function Tn(t,e){const n=H(t),o=X(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,c=0;if(r){i=r.width,s=r.height;const a=Mt();(!a||a&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:i,height:s,x:l,y:c}}function Rn(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=B(t)?Z(t):G(1),s=t.clientWidth*i.x,l=t.clientHeight*i.y,c=r*i.x,a=o*i.y;return{width:s,height:l,x:c,y:a}}function Zt(t,e,n){let o;if(e==="viewport")o=Tn(t,n);else if(e==="document")o=Pn(X(t));else if(F(e))o=Rn(e,n);else{const r=le(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return gt(o)}function fe(t,e){const n=q(t);return n===e||!F(n)||J(n)?!1:I(n).position==="fixed"||fe(n,e)}function En(t,e){const n=e.get(t);if(n)return n;let o=st(t,[],!1).filter(l=>F(l)&&nt(l)!=="body"),r=null;const i=I(t).position==="fixed";let s=i?q(t):t;for(;F(s)&&!J(s);){const l=I(s),c=Lt(s);!c&&l.position==="fixed"&&(r=null),(i?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||lt(s)&&!c&&fe(t,s))?o=o.filter(f=>f!==s):r=l,s=q(s)}return e.set(t,o),o}function On(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?Nt(e)?[]:En(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,f)=>{const u=Zt(e,f,r);return a.top=j(u.top,a.top),a.right=W(u.right,a.right),a.bottom=W(u.bottom,a.bottom),a.left=j(u.left,a.left),a},Zt(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Sn(t){const{width:e,height:n}=ce(t);return{width:e,height:n}}function _n(t,e,n){const o=B(e),r=X(e),i=n==="fixed",s=U(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const c=G(0);if(o||!o&&!i)if((nt(e)!=="body"||lt(r))&&(l=yt(e)),o){const u=U(e,!0,i,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else r&&(c.x=ae(r));const a=s.left+l.scrollLeft-c.x,f=s.top+l.scrollTop-c.y;return{x:a,y:f,width:s.width,height:s.height}}function At(t){return I(t).position==="static"}function Jt(t,e){return!B(t)||I(t).position==="fixed"?null:e?e(t):t.offsetParent}function ue(t,e){const n=H(t);if(Nt(t))return n;if(!B(t)){let r=q(t);for(;r&&!J(r);){if(F(r)&&!At(r))return r;r=q(r)}return n}let o=Jt(t,e);for(;o&&xn(o)&&At(o);)o=Jt(o,e);return o&&J(o)&&At(o)&&!Lt(o)?n:o||wn(t)||n}const Dn=async function(t){const e=this.getOffsetParent||ue,n=this.getDimensions,o=await n(t.floating);return{reference:_n(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ln(t){return I(t).direction==="rtl"}const Mn={convertOffsetParentRelativeRectToViewportRelativeRect:Cn,getDocumentElement:X,getClippingRect:On,getOffsetParent:ue,getElementRects:Dn,getClientRects:An,getDimensions:Sn,getScale:Z,isElement:F,isRTL:Ln};function kn(t,e){let n=null,o;const r=X(t);function i(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:a,top:f,width:u,height:h}=t.getBoundingClientRect();if(l||e(),!u||!h)return;const d=dt(f),p=dt(r.clientWidth-(a+u)),m=dt(r.clientHeight-(f+h)),x=dt(a),y={rootMargin:-d+"px "+-p+"px "+-m+"px "+-x+"px",threshold:j(0,W(1,c))||1};let C=!0;function v(b){const P=b[0].intersectionRatio;if(P!==c){if(!C)return s();P?s(!1,P):o=setTimeout(()=>{s(!1,1e-7)},1e3)}C=!1}try{n=new IntersectionObserver(v,{...y,root:r.ownerDocument})}catch{n=new IntersectionObserver(v,y)}n.observe(t)}return s(!0),i}function Nn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=kt(t),f=r||i?[...a?st(a):[],...st(e)]:[];f.forEach(w=>{r&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});const u=a&&l?kn(a,n):null;let h=-1,d=null;s&&(d=new ResizeObserver(w=>{let[y]=w;y&&y.target===a&&d&&(d.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=d)==null||C.observe(e)})),n()}),a&&!c&&d.observe(a),d.observe(e));let p,m=c?U(t):null;c&&x();function x(){const w=U(t);m&&(w.x!==m.x||w.y!==m.y||w.width!==m.width||w.height!==m.height)&&n(),m=w,p=requestAnimationFrame(x)}return n(),()=>{var w;f.forEach(y=>{r&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),u==null||u(),(w=d)==null||w.disconnect(),d=null,c&&cancelAnimationFrame(p)}}const jn=pn,Hn=hn,$n=fn,In=gn,Wn=un,Qt=an,Fn=mn,Bn=(t,e,n)=>{const o=new Map,r={platform:Mn,...n},i={...r.platform,_c:o};return ln(t,e,{...r,platform:i})};var pt=typeof document<"u"?g.useLayoutEffect:g.useEffect;function xt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!xt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!xt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function de(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function te(t,e){const n=de(t);return Math.round(e*n)/n}function ee(t){const e=g.useRef(t);return pt(()=>{e.current=t}),e}function zn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=t,[f,u]=g.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,d]=g.useState(o);xt(h,o)||d(o);const[p,m]=g.useState(null),[x,w]=g.useState(null),y=g.useCallback(T=>{T!==P.current&&(P.current=T,m(T))},[]),C=g.useCallback(T=>{T!==R.current&&(R.current=T,w(T))},[]),v=i||p,b=s||x,P=g.useRef(null),R=g.useRef(null),S=g.useRef(f),$=c!=null,M=ee(c),D=ee(r),O=g.useCallback(()=>{if(!P.current||!R.current)return;const T={placement:e,strategy:n,middleware:h};D.current&&(T.platform=D.current),Bn(P.current,R.current,T).then(N=>{const z={...N,isPositioned:!0};k.current&&!xt(S.current,z)&&(S.current=z,Ke.flushSync(()=>{u(z)}))})},[h,e,n,D]);pt(()=>{a===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,u(T=>({...T,isPositioned:!1})))},[a]);const k=g.useRef(!1);pt(()=>(k.current=!0,()=>{k.current=!1}),[]),pt(()=>{if(v&&(P.current=v),b&&(R.current=b),v&&b){if(M.current)return M.current(v,b,O);O()}},[v,b,O,M,$]);const _=g.useMemo(()=>({reference:P,floating:R,setReference:y,setFloating:C}),[y,C]),E=g.useMemo(()=>({reference:v,floating:b}),[v,b]),L=g.useMemo(()=>{const T={position:n,left:0,top:0};if(!E.floating)return T;const N=te(E.floating,f.x),z=te(E.floating,f.y);return l?{...T,transform:"translate("+N+"px, "+z+"px)",...de(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:N,top:z}},[n,l,E.floating,f.x,f.y]);return g.useMemo(()=>({...f,update:O,refs:_,elements:E,floatingStyles:L}),[f,O,_,E,L])}const Vn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Qt({element:o.current,padding:r}).fn(n):{}:o?Qt({element:o,padding:r}).fn(n):{}}}},Yn=(t,e)=>({...jn(t),options:[t,e]}),Xn=(t,e)=>({...Hn(t),options:[t,e]}),Gn=(t,e)=>({...Fn(t),options:[t,e]}),qn=(t,e)=>({...$n(t),options:[t,e]}),Un=(t,e)=>({...In(t),options:[t,e]}),Kn=(t,e)=>({...Wn(t),options:[t,e]}),Zn=(t,e)=>({...Vn(t),options:[t,e]});var Jn="Arrow",pe=g.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return A.jsx(ct.svg,{...i,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:A.jsx("polygon",{points:"0,0 30,0 15,10"})})});pe.displayName=Jn;var Qn=pe;function to(t){const[e,n]=g.useState(void 0);return Pt(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,l;if("borderBoxSize"in i){const c=i.borderBoxSize,a=Array.isArray(c)?c[0]:c;s=a.inlineSize,l=a.blockSize}else s=t.offsetWidth,l=t.offsetHeight;n({width:s,height:l})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}var jt="Popper",[he,me]=ne(jt),[eo,ge]=he(jt),xe=t=>{const{__scopePopper:e,children:n}=t,[o,r]=g.useState(null);return A.jsx(eo,{scope:e,anchor:o,onAnchorChange:r,children:n})};xe.displayName=jt;var we="PopperAnchor",ye=g.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=ge(we,n),s=g.useRef(null),l=wt(e,s);return g.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:A.jsx(ct.div,{...r,ref:l})});ye.displayName=we;var Ht="PopperContent",[no,oo]=he(Ht),ve=g.forwardRef((t,e)=>{var Wt,Ft,Bt,zt,Vt,Yt;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:a=[],collisionPadding:f=0,sticky:u="partial",hideWhenDetached:h=!1,updatePositionStrategy:d="optimized",onPlaced:p,...m}=t,x=ge(Ht,n),[w,y]=g.useState(null),C=wt(e,ot=>y(ot)),[v,b]=g.useState(null),P=to(v),R=(P==null?void 0:P.width)??0,S=(P==null?void 0:P.height)??0,$=o+(i!=="center"?"-"+i:""),M=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},D=Array.isArray(a)?a:[a],O=D.length>0,k={padding:M,boundary:D.filter(io),altBoundary:O},{refs:_,floatingStyles:E,placement:L,isPositioned:T,middlewareData:N}=zn({strategy:"fixed",placement:$,whileElementsMounted:(...ot)=>Nn(...ot,{animationFrame:d==="always"}),elements:{reference:x.anchor},middleware:[Yn({mainAxis:r+S,alignmentAxis:s}),c&&Xn({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?Gn():void 0,...k}),c&&qn({...k}),Un({...k,apply:({elements:ot,rects:Xt,availableWidth:We,availableHeight:Fe})=>{const{width:Be,height:ze}=Xt.reference,ut=ot.floating.style;ut.setProperty("--radix-popper-available-width",`${We}px`),ut.setProperty("--radix-popper-available-height",`${Fe}px`),ut.setProperty("--radix-popper-anchor-width",`${Be}px`),ut.setProperty("--radix-popper-anchor-height",`${ze}px`)}}),v&&Zn({element:v,padding:l}),so({arrowWidth:R,arrowHeight:S}),h&&Kn({strategy:"referenceHidden",...k})]}),[z,ke]=Ae(L),ft=Ve(p);Pt(()=>{T&&(ft==null||ft())},[T,ft]);const Ne=(Wt=N.arrow)==null?void 0:Wt.x,je=(Ft=N.arrow)==null?void 0:Ft.y,He=((Bt=N.arrow)==null?void 0:Bt.centerOffset)!==0,[$e,Ie]=g.useState();return Pt(()=>{w&&Ie(window.getComputedStyle(w).zIndex)},[w]),A.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...E,transform:T?E.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:$e,"--radix-popper-transform-origin":[(zt=N.transformOrigin)==null?void 0:zt.x,(Vt=N.transformOrigin)==null?void 0:Vt.y].join(" "),...((Yt=N.hide)==null?void 0:Yt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:A.jsx(no,{scope:n,placedSide:z,onArrowChange:b,arrowX:Ne,arrowY:je,shouldHideArrow:He,children:A.jsx(ct.div,{"data-side":z,"data-align":ke,...m,ref:C,style:{...m.style,animation:T?void 0:"none"}})})})});ve.displayName=Ht;var be="PopperArrow",ro={top:"bottom",right:"left",bottom:"top",left:"right"},Ce=g.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=oo(be,o),s=ro[i.placedSide];return A.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:A.jsx(Qn,{...r,ref:n,style:{...r.style,display:"block"}})})});Ce.displayName=be;function io(t){return t!==null}var so=t=>({name:"transformOrigin",options:t,fn(e){var x,w,y;const{placement:n,rects:o,middlewareData:r}=e,s=((x=r.arrow)==null?void 0:x.centerOffset)!==0,l=s?0:t.arrowWidth,c=s?0:t.arrowHeight,[a,f]=Ae(n),u={start:"0%",center:"50%",end:"100%"}[f],h=(((w=r.arrow)==null?void 0:w.x)??0)+l/2,d=(((y=r.arrow)==null?void 0:y.y)??0)+c/2;let p="",m="";return a==="bottom"?(p=s?u:`${h}px`,m=`${-c}px`):a==="top"?(p=s?u:`${h}px`,m=`${o.floating.height+c}px`):a==="right"?(p=`${-c}px`,m=s?u:`${d}px`):a==="left"&&(p=`${o.floating.width+c}px`,m=s?u:`${d}px`),{data:{x:p,y:m}}}});function Ae(t){const[e,n="center"]=t.split("-");return[e,n]}var co=xe,lo=ye,ao=ve,fo=Ce,uo="VisuallyHidden",Pe=g.forwardRef((t,e)=>A.jsx(ct.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Pe.displayName=uo;var po=Pe,[vt,Yo]=ne("Tooltip",[me]),bt=me(),Te="TooltipProvider",ho=700,Et="tooltip.open",[mo,$t]=vt(Te),Re=t=>{const{__scopeTooltip:e,delayDuration:n=ho,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:i}=t,[s,l]=g.useState(!0),c=g.useRef(!1),a=g.useRef(0);return g.useEffect(()=>{const f=a.current;return()=>window.clearTimeout(f)},[]),A.jsx(mo,{scope:e,isOpenDelayed:s,delayDuration:n,onOpen:g.useCallback(()=>{window.clearTimeout(a.current),l(!1)},[]),onClose:g.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>l(!0),o)},[o]),isPointerInTransitRef:c,onPointerInTransitChange:g.useCallback(f=>{c.current=f},[]),disableHoverableContent:r,children:i})};Re.displayName=Te;var Ct="Tooltip",[go,at]=vt(Ct),Ee=t=>{const{__scopeTooltip:e,children:n,open:o,defaultOpen:r=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:l}=t,c=$t(Ct,t.__scopeTooltip),a=bt(e),[f,u]=g.useState(null),h=Ge(),d=g.useRef(0),p=s??c.disableHoverableContent,m=l??c.delayDuration,x=g.useRef(!1),[w=!1,y]=qe({prop:o,defaultProp:r,onChange:R=>{R?(c.onOpen(),document.dispatchEvent(new CustomEvent(Et))):c.onClose(),i==null||i(R)}}),C=g.useMemo(()=>w?x.current?"delayed-open":"instant-open":"closed",[w]),v=g.useCallback(()=>{window.clearTimeout(d.current),x.current=!1,y(!0)},[y]),b=g.useCallback(()=>{window.clearTimeout(d.current),y(!1)},[y]),P=g.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{x.current=!0,y(!0)},m)},[m,y]);return g.useEffect(()=>()=>window.clearTimeout(d.current),[]),A.jsx(co,{...a,children:A.jsx(go,{scope:e,contentId:h,open:w,stateAttribute:C,trigger:f,onTriggerChange:u,onTriggerEnter:g.useCallback(()=>{c.isOpenDelayed?P():v()},[c.isOpenDelayed,P,v]),onTriggerLeave:g.useCallback(()=>{p?b():window.clearTimeout(d.current)},[b,p]),onOpen:v,onClose:b,disableHoverableContent:p,children:n})})};Ee.displayName=Ct;var Ot="TooltipTrigger",Oe=g.forwardRef((t,e)=>{const{__scopeTooltip:n,...o}=t,r=at(Ot,n),i=$t(Ot,n),s=bt(n),l=g.useRef(null),c=wt(e,l,r.onTriggerChange),a=g.useRef(!1),f=g.useRef(!1),u=g.useCallback(()=>a.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),A.jsx(lo,{asChild:!0,...s,children:A.jsx(ct.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...o,ref:c,onPointerMove:K(t.onPointerMove,h=>{h.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(r.onTriggerEnter(),f.current=!0)}),onPointerLeave:K(t.onPointerLeave,()=>{r.onTriggerLeave(),f.current=!1}),onPointerDown:K(t.onPointerDown,()=>{a.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:K(t.onFocus,()=>{a.current||r.onOpen()}),onBlur:K(t.onBlur,r.onClose),onClick:K(t.onClick,r.onClose)})})});Oe.displayName=Ot;var It="TooltipPortal",[xo,wo]=vt(It,{forceMount:void 0}),Se=t=>{const{__scopeTooltip:e,forceMount:n,children:o,container:r}=t,i=at(It,e);return A.jsx(xo,{scope:e,forceMount:n,children:A.jsx(oe,{present:n||i.open,children:A.jsx(Ue,{asChild:!0,container:r,children:o})})})};Se.displayName=It;var Q="TooltipContent",_e=g.forwardRef((t,e)=>{const n=wo(Q,t.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...i}=t,s=at(Q,t.__scopeTooltip);return A.jsx(oe,{present:o||s.open,children:s.disableHoverableContent?A.jsx(De,{side:r,...i,ref:e}):A.jsx(yo,{side:r,...i,ref:e})})}),yo=g.forwardRef((t,e)=>{const n=at(Q,t.__scopeTooltip),o=$t(Q,t.__scopeTooltip),r=g.useRef(null),i=wt(e,r),[s,l]=g.useState(null),{trigger:c,onClose:a}=n,f=r.current,{onPointerInTransitChange:u}=o,h=g.useCallback(()=>{l(null),u(!1)},[u]),d=g.useCallback((p,m)=>{const x=p.currentTarget,w={x:p.clientX,y:p.clientY},y=Co(w,x.getBoundingClientRect()),C=Ao(w,y),v=Po(m.getBoundingClientRect()),b=Ro([...C,...v]);l(b),u(!0)},[u]);return g.useEffect(()=>()=>h(),[h]),g.useEffect(()=>{if(c&&f){const p=x=>d(x,f),m=x=>d(x,c);return c.addEventListener("pointerleave",p),f.addEventListener("pointerleave",m),()=>{c.removeEventListener("pointerleave",p),f.removeEventListener("pointerleave",m)}}},[c,f,d,h]),g.useEffect(()=>{if(s){const p=m=>{const x=m.target,w={x:m.clientX,y:m.clientY},y=(c==null?void 0:c.contains(x))||(f==null?void 0:f.contains(x)),C=!To(w,s);y?h():C&&(h(),a())};return document.addEventListener("pointermove",p),()=>document.removeEventListener("pointermove",p)}},[c,f,s,a,h]),A.jsx(De,{...t,ref:i})}),[vo,bo]=vt(Ct,{isInside:!1}),De=g.forwardRef((t,e)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:i,onPointerDownOutside:s,...l}=t,c=at(Q,n),a=bt(n),{onClose:f}=c;return g.useEffect(()=>(document.addEventListener(Et,f),()=>document.removeEventListener(Et,f)),[f]),g.useEffect(()=>{if(c.trigger){const u=h=>{const d=h.target;d!=null&&d.contains(c.trigger)&&f()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[c.trigger,f]),A.jsx(Ye,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:f,children:A.jsxs(ao,{"data-state":c.stateAttribute,...a,...l,ref:e,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[A.jsx(Xe,{children:o}),A.jsx(vo,{scope:n,isInside:!0,children:A.jsx(po,{id:c.contentId,role:"tooltip",children:r||o})})]})})});_e.displayName=Q;var Le="TooltipArrow",Me=g.forwardRef((t,e)=>{const{__scopeTooltip:n,...o}=t,r=bt(n);return bo(Le,n).isInside?null:A.jsx(fo,{...r,...o,ref:e})});Me.displayName=Le;function Co(t,e){const n=Math.abs(e.top-t.y),o=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),i=Math.abs(e.left-t.x);switch(Math.min(n,o,r,i)){case i:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Ao(t,e,n=5){const o=[];switch(e){case"top":o.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":o.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":o.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":o.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return o}function Po(t){const{top:e,right:n,bottom:o,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:o},{x:r,y:o}]}function To(t,e){const{x:n,y:o}=t;let r=!1;for(let i=0,s=e.length-1;i<e.length;s=i++){const l=e[i].x,c=e[i].y,a=e[s].x,f=e[s].y;c>o!=f>o&&n<(a-l)*(o-c)/(f-c)+l&&(r=!r)}return r}function Ro(t){const e=t.slice();return e.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),Eo(e)}function Eo(t){if(t.length<=1)return t.slice();const e=[];for(let o=0;o<t.length;o++){const r=t[o];for(;e.length>=2;){const i=e[e.length-1],s=e[e.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let o=t.length-1;o>=0;o--){const r=t[o];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var Oo=Re,So=Ee,_o=Oe,Do=Se,Lo=_e,Mo=Me;const ko="_iconWithTooltip_1it3t_1",No="_triggerButton_1it3t_2",jo="_icon_1it3t_1",Ho="_text_1it3t_13",$o="_content_1it3t_25",rt={iconWithTooltip:ko,triggerButton:No,icon:jo,text:Ho,content:$o},Io=({content:t,className:e,...n})=>A.jsx("div",{className:Je(rt.iconWithTooltip,e),children:A.jsx(Oo,{delayDuration:0,children:A.jsxs(So,{children:[A.jsx(_o,{asChild:!0,children:A.jsxs("button",{className:rt.triggerButton,"aria-label":t,children:[n.icon&&A.jsx(Ze,{...n.icon,className:rt.icon,size:"large"}),n.text&&A.jsx("span",{className:rt.text,children:n.text})]})}),A.jsx(Do,{children:A.jsxs(Lo,{className:rt.content,sideOffset:5,side:"top",children:[A.jsx("span",{children:t}),A.jsx(Mo,{className:"TooltipArrow"})]})})]})})});Io.__docgenInfo={description:"",methods:[],displayName:"IconWithTooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{Io as I};
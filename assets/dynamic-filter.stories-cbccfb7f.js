import{r as i,j as v}from"./jsx-runtime-03333307.js";import{D as oa}from"./drawer-sidebar-7bd0792d.js";import{c as le}from"./index-09749a66.js";import{_ as ce,a as ca,b as $n,c as tn}from"./defineProperty-dca1f18b.js";import{_ as rn}from"./extends-4c19d496.js";import{r as da}from"./index-821951ec.js";import{u as ma}from"./generic-helper-ddbede2e.js";import{I as Cn}from"./input-field-0be9721f.js";import{B as Mn}from"./button-856a03f5.js";import{B as fa,A as va}from"./below-c0fccb92.js";import{E as en}from"./expandable-wrapper-968690e0.js";import{I as He}from"./icon-a32914e5.js";import{F as Bn}from"./flex-container-7aff6506.js";import{m as nn}from"./motion-9380e2c6.js";import{C as ga}from"./checkbox-aacef711.js";import{A as ha}from"./index-61679f6b.js";const ya="_dynamicFilter_1fs4n_1",ba="_filterItem_1fs4n_5",_a="_filterName_1fs4n_18",xa="_filterItemIcon_1fs4n_23",pa="_expandableWrapper_1fs4n_28",Ea="_showMoreButton_1fs4n_36",Sa="_showMoreLabel_1fs4n_48",ka="_checkboxItem_1fs4n_53",Ca="_inActive_1fs4n_64",Ma="_checkbox_1fs4n_53",Na="_label_1fs4n_70",Ta="_count_1fs4n_85",Oa="_radioItem_1fs4n_93",Ra="_radio_1fs4n_93",Ia="_filtersWrapper_1fs4n_123",wa="_selectedFilters_1fs4n_136",Fa="_filterButton_1fs4n_147",Aa="_selectedFilter_1fs4n_136",La="_active_1fs4n_183",ja="_clear_1fs4n_200",Da="_stickyResult_1fs4n_208",Va="_removeAllBtn_1fs4n_237",P={dynamicFilter:ya,filterItem:ba,filterName:_a,filterItemIcon:xa,expandableWrapper:pa,showMoreButton:Ea,showMoreLabel:Sa,checkboxItem:ka,inActive:Ca,checkbox:Ma,label:Na,count:Ta,radioItem:Oa,radio:Ra,filtersWrapper:Ia,selectedFilters:wa,filterButton:Fa,selectedFilter:Aa,active:La,clear:ja,stickyResult:Da,removeAllBtn:Va};function Nn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,a)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Nn(Object(t),!0).forEach(function(a){ce(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Pa(e){if(Array.isArray(e))return ca(e)}function qa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ha(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e){return Pa(e)||qa(e)||$n(e)||Ha()}function $a(e){if(Array.isArray(e))return e}function Ba(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,l,s,m,c=[],S=!0,_=!1;try{if(s=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;S=!1}else for(;!(S=(a=s.call(t)).done)&&(c.push(a.value),c.length!==n);S=!0);}catch(k){_=!0,l=k}finally{try{if(!S&&t.return!=null&&(m=t.return(),Object(m)!==m))return}finally{if(_)throw l}}return c}}function Ua(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e,n){return $a(e)||Ba(e,n)||$n(e,n)||Ua()}function $e(e){var n=i.useRef();n.current=e;var t=i.useCallback(function(){for(var a,l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=n.current)===null||a===void 0?void 0:a.call.apply(a,[n].concat(s))},[]);return t}function Wa(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Tn=Wa()?i.useLayoutEffect:i.useEffect,Un=function(n,t){var a=i.useRef(!0);Tn(function(){return n(a.current)},t),Tn(function(){return a.current=!1,function(){a.current=!0}},[])},On=function(n,t){Un(function(a){if(!a)return n()},t)};function Rn(e){var n=i.useRef(!1),t=i.useState(e),a=ne(t,2),l=a[0],s=a[1];i.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function m(c,S){S&&n.current||s(c)}return[l,m]}function an(e){return e!==void 0}function Ka(e,n){var t=n||{},a=t.defaultValue,l=t.value,s=t.onChange,m=t.postState,c=Rn(function(){return an(l)?l:an(a)?typeof a=="function"?a():a:typeof e=="function"?e():e}),S=ne(c,2),_=S[0],k=S[1],N=l!==void 0?l:_,T=m?m(N):N,E=$e(s),h=Rn([N]),b=ne(h,2),o=b[0],y=b[1];On(function(){var x=o[0];_!==x&&E(_,x)},[o]),On(function(){an(l)||k(l)},[l]);var r=$e(function(x,w){k(x,w),y([N],w)});return[T,r]}var ln={},Ga=function(n){};function Ya(e,n){}function Xa(e,n){}function Qa(){ln={}}function Wn(e,n,t){!n&&!ln[t]&&(e(!1,t),ln[t]=!0)}function Be(e,n){Wn(Ya,e,n)}function Za(e,n){Wn(Xa,e,n)}Be.preMessage=Ga;Be.resetWarned=Qa;Be.noteOnce=Za;function za(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=new Set;function l(s,m){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,S=a.has(s);if(Be(!S,"Warning: There may be circular references"),S)return!1;if(s===m)return!0;if(t&&c>1)return!1;a.add(s);var _=c+1;if(Array.isArray(s)){if(!Array.isArray(m)||s.length!==m.length)return!1;for(var k=0;k<s.length;k++)if(!l(s[k],m[k],_))return!1;return!0}if(s&&m&&tn(s)==="object"&&tn(m)==="object"){var N=Object.keys(s);return N.length!==Object.keys(m).length?!1:N.every(function(T){return l(s[T],m[T],_)})}return!1}return l(e,n)}function Ja(e,n){if(e==null)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;t[a]=e[a]}return t}function Kn(e,n){if(e==null)return{};var t,a,l=Ja(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function sn(e,n,t){return(e-n)/(t-n)}function un(e,n,t,a){var l=sn(n,t,a),s={};switch(e){case"rtl":s.right="".concat(l*100,"%"),s.transform="translateX(50%)";break;case"btt":s.bottom="".concat(l*100,"%"),s.transform="translateY(50%)";break;case"ttb":s.top="".concat(l*100,"%"),s.transform="translateY(-50%)";break;default:s.left="".concat(l*100,"%"),s.transform="translateX(-50%)";break}return s}function Ie(e,n){return Array.isArray(e)?e[n]:e}var f={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var t=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||t>=f.F1&&t<=f.F12)return!1;switch(t){case f.ALT:case f.CAPS_LOCK:case f.CONTEXT_MENU:case f.CTRL:case f.DOWN:case f.END:case f.ESC:case f.HOME:case f.INSERT:case f.LEFT:case f.MAC_FF_META:case f.META:case f.NUMLOCK:case f.NUM_CENTER:case f.PAGE_DOWN:case f.PAGE_UP:case f.PAUSE:case f.PRINT_SCREEN:case f.RIGHT:case f.SHIFT:case f.UP:case f.WIN_KEY:case f.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=f.ZERO&&n<=f.NINE||n>=f.NUM_ZERO&&n<=f.NUM_MULTIPLY||n>=f.A&&n<=f.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case f.SPACE:case f.QUESTION_MARK:case f.NUM_PLUS:case f.NUM_MINUS:case f.NUM_PERIOD:case f.NUM_DIVISION:case f.SEMICOLON:case f.DASH:case f.EQUALS:case f.COMMA:case f.PERIOD:case f.SLASH:case f.APOSTROPHE:case f.SINGLE_QUOTE:case f.OPEN_SQUARE_BRACKET:case f.BACKSLASH:case f.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},we=i.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),et=i.createContext({}),nt=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],In=i.forwardRef(function(e,n){var t=e.prefixCls,a=e.value,l=e.valueIndex,s=e.onStartMove,m=e.onDelete,c=e.style,S=e.render,_=e.dragging,k=e.draggingDelete,N=e.onOffsetChange,T=e.onChangeComplete,E=e.onFocus,h=e.onMouseEnter,b=Kn(e,nt),o=i.useContext(we),y=o.min,r=o.max,x=o.direction,w=o.disabled,F=o.keyboard,B=o.range,X=o.tabIndex,z=o.ariaLabelForHandle,j=o.ariaLabelledByForHandle,g=o.ariaRequired,d=o.ariaValueTextFormatterForHandle,p=o.styles,R=o.classNames,U="".concat(t,"-handle"),Q=function(L){w||s(L,l)},u=function(L){E==null||E(L,l)},M=function(L){h(L,l)},O=function(L){if(!w&&F){var I=null;switch(L.which||L.keyCode){case f.LEFT:I=x==="ltr"||x==="btt"?-1:1;break;case f.RIGHT:I=x==="ltr"||x==="btt"?1:-1;break;case f.UP:I=x!=="ttb"?1:-1;break;case f.DOWN:I=x!=="ttb"?-1:1;break;case f.HOME:I="min";break;case f.END:I="max";break;case f.PAGE_UP:I=2;break;case f.PAGE_DOWN:I=-2;break;case f.BACKSPACE:case f.DELETE:m(l);break}I!==null&&(L.preventDefault(),N(I,l))}},D=function(L){switch(L.which||L.keyCode){case f.LEFT:case f.RIGHT:case f.UP:case f.DOWN:case f.HOME:case f.END:case f.PAGE_UP:case f.PAGE_DOWN:T==null||T();break}},A=un(x,a,y,r),H={};if(l!==null){var Z;H={tabIndex:w?null:Ie(X,l),role:"slider","aria-valuemin":y,"aria-valuemax":r,"aria-valuenow":a,"aria-disabled":w,"aria-label":Ie(z,l),"aria-labelledby":Ie(j,l),"aria-required":Ie(g,l),"aria-valuetext":(Z=Ie(d,l))===null||Z===void 0?void 0:Z(a),"aria-orientation":x==="ltr"||x==="rtl"?"horizontal":"vertical",onMouseDown:Q,onTouchStart:Q,onFocus:u,onMouseEnter:M,onKeyDown:O,onKeyUp:D}}var $=i.createElement("div",rn({ref:n,className:le(U,ce(ce(ce({},"".concat(U,"-").concat(l+1),l!==null&&B),"".concat(U,"-dragging"),_),"".concat(U,"-dragging-delete"),k),R.handle),style:te(te(te({},A),c),p.handle)},H,b));return S&&($=S($,{index:l,prefixCls:t,value:a,dragging:_,draggingDelete:k})),$}),at=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],tt=i.forwardRef(function(e,n){var t=e.prefixCls,a=e.style,l=e.onStartMove,s=e.onOffsetChange,m=e.values,c=e.handleRender,S=e.activeHandleRender,_=e.draggingIndex,k=e.draggingDelete,N=e.onFocus,T=Kn(e,at),E=i.useRef({}),h=i.useState(!1),b=ne(h,2),o=b[0],y=b[1],r=i.useState(-1),x=ne(r,2),w=x[0],F=x[1],B=function(d){F(d),y(!0)},X=function(d,p){B(p),N==null||N(d)},z=function(d,p){B(p)};i.useImperativeHandle(n,function(){return{focus:function(d){var p;(p=E.current[d])===null||p===void 0||p.focus()},hideHelp:function(){da.flushSync(function(){y(!1)})}}});var j=te({prefixCls:t,onStartMove:l,onOffsetChange:s,render:c,onFocus:X,onMouseEnter:z},T);return i.createElement(i.Fragment,null,m.map(function(g,d){var p=_===d;return i.createElement(In,rn({ref:function(U){U?E.current[d]=U:delete E.current[d]},dragging:p,draggingDelete:p&&k,style:Ie(a,d),key:d,value:g,valueIndex:d},j))}),S&&o&&i.createElement(In,rn({key:"a11y"},j,{value:m[w],valueIndex:null,dragging:_!==-1,draggingDelete:k,render:S,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),rt=function(n){var t=n.prefixCls,a=n.style,l=n.children,s=n.value,m=n.onClick,c=i.useContext(we),S=c.min,_=c.max,k=c.direction,N=c.includedStart,T=c.includedEnd,E=c.included,h="".concat(t,"-text"),b=un(k,s,S,_);return i.createElement("span",{className:le(h,ce({},"".concat(h,"-active"),E&&N<=s&&s<=T)),style:te(te({},b),a),onMouseDown:function(y){y.stopPropagation()},onClick:function(){m(s)}},l)},it=function(n){var t=n.prefixCls,a=n.marks,l=n.onClick,s="".concat(t,"-mark");return a.length?i.createElement("div",{className:s},a.map(function(m){var c=m.value,S=m.style,_=m.label;return i.createElement(rt,{key:c,prefixCls:s,style:S,value:c,onClick:l},_)})):null},lt=function(n){var t=n.prefixCls,a=n.value,l=n.style,s=n.activeStyle,m=i.useContext(we),c=m.min,S=m.max,_=m.direction,k=m.included,N=m.includedStart,T=m.includedEnd,E="".concat(t,"-dot"),h=k&&N<=a&&a<=T,b=te(te({},un(_,a,c,S)),typeof l=="function"?l(a):l);return h&&(b=te(te({},b),typeof s=="function"?s(a):s)),i.createElement("span",{className:le(E,ce({},"".concat(E,"-active"),h)),style:b})},st=function(n){var t=n.prefixCls,a=n.marks,l=n.dots,s=n.style,m=n.activeStyle,c=i.useContext(we),S=c.min,_=c.max,k=c.step,N=i.useMemo(function(){var T=new Set;if(a.forEach(function(h){T.add(h.value)}),l&&k!==null)for(var E=S;E<=_;)T.add(E),E+=k;return Array.from(T)},[S,_,k,l,a]);return i.createElement("div",{className:"".concat(t,"-step")},N.map(function(T){return i.createElement(lt,{prefixCls:t,key:T,value:T,style:s,activeStyle:m})}))},wn=function(n){var t=n.prefixCls,a=n.style,l=n.start,s=n.end,m=n.index,c=n.onStartMove,S=n.replaceCls,_=i.useContext(we),k=_.direction,N=_.min,T=_.max,E=_.disabled,h=_.range,b=_.classNames,o="".concat(t,"-track"),y=sn(l,N,T),r=sn(s,N,T),x=function(X){!E&&c&&c(X,-1)},w={};switch(k){case"rtl":w.right="".concat(y*100,"%"),w.width="".concat(r*100-y*100,"%");break;case"btt":w.bottom="".concat(y*100,"%"),w.height="".concat(r*100-y*100,"%");break;case"ttb":w.top="".concat(y*100,"%"),w.height="".concat(r*100-y*100,"%");break;default:w.left="".concat(y*100,"%"),w.width="".concat(r*100-y*100,"%")}var F=S||le(o,ce(ce({},"".concat(o,"-").concat(m+1),m!==null&&h),"".concat(t,"-track-draggable"),c),b.track);return i.createElement("div",{className:F,style:te(te({},w),a),onMouseDown:x,onTouchStart:x})},ut=function(n){var t=n.prefixCls,a=n.style,l=n.values,s=n.startPoint,m=n.onStartMove,c=i.useContext(we),S=c.included,_=c.range,k=c.min,N=c.styles,T=c.classNames,E=i.useMemo(function(){if(!_){if(l.length===0)return[];var b=s??k,o=l[0];return[{start:Math.min(b,o),end:Math.max(b,o)}]}for(var y=[],r=0;r<l.length-1;r+=1)y.push({start:l[r],end:l[r+1]});return y},[l,_,s,k]);if(!S)return null;var h=E!=null&&E.length&&(T.tracks||N.tracks)?i.createElement(wn,{index:null,prefixCls:t,start:E[0].start,end:E[E.length-1].end,replaceCls:le(T.tracks,"".concat(t,"-tracks")),style:N.tracks}):null;return i.createElement(i.Fragment,null,h,E.map(function(b,o){var y=b.start,r=b.end;return i.createElement(wn,{index:o,prefixCls:t,style:te(te({},Ie(a,o)),N.track),start:y,end:r,key:o,onStartMove:m})}))},ot=130;function Fn(e){var n="targetTouches"in e?e.targetTouches[0]:e;return{pageX:n.pageX,pageY:n.pageY}}function ct(e,n,t,a,l,s,m,c,S,_,k){var N=i.useState(null),T=ne(N,2),E=T[0],h=T[1],b=i.useState(-1),o=ne(b,2),y=o[0],r=o[1],x=i.useState(!1),w=ne(x,2),F=w[0],B=w[1],X=i.useState(t),z=ne(X,2),j=z[0],g=z[1],d=i.useState(t),p=ne(d,2),R=p[0],U=p[1],Q=i.useRef(null),u=i.useRef(null),M=i.useRef(null),O=i.useContext(et),D=O.onDragStart,A=O.onDragChange;Un(function(){y===-1&&g(t)},[t,y]),i.useEffect(function(){return function(){document.removeEventListener("mousemove",Q.current),document.removeEventListener("mouseup",u.current),M.current&&(M.current.removeEventListener("touchmove",Q.current),M.current.removeEventListener("touchend",u.current))}},[]);var H=function(I,G,ee){G!==void 0&&h(G),g(I);var ae=I;ee&&(ae=I.filter(function(W,ie){return ie!==y})),m(ae),A&&A({rawValues:I,deleteIndex:ee?y:-1,draggingIndex:y,draggingValue:G})},Z=$e(function(L,I,G){if(L===-1){var ee=R[0],ae=R[R.length-1],W=a-ee,ie=l-ae,de=I*(l-a);de=Math.max(de,W),de=Math.min(de,ie);var Fe=s(ee+de);de=Fe-ee;var ve=R.map(function(ye){return ye+de});H(ve)}else{var ge=(l-a)*I,he=pe(j);he[L]=R[L];var Ee=S(he,ge,L,"dist");H(Ee.values,Ee.value,G)}}),$=function(I,G,ee){I.stopPropagation();var ae=ee||t,W=ae[G];r(G),h(W),U(ae),g(ae),B(!1);var ie=Fn(I),de=ie.pageX,Fe=ie.pageY,ve=!1;D&&D({rawValues:ae,draggingIndex:G,draggingValue:W});var ge=function(ye){ye.preventDefault();var se=Fn(ye),Ae=se.pageX,Le=se.pageY,je=Ae-de,fe=Le-Fe,me=e.current.getBoundingClientRect(),Te=me.width,De=me.height,Se,ke;switch(n){case"btt":Se=-fe/De,ke=je;break;case"ttb":Se=fe/De,ke=je;break;case"rtl":Se=-je/Te,ke=fe;break;default:Se=je/Te,ke=fe}ve=_?Math.abs(ke)>ot&&k<j.length:!1,B(ve),Z(G,Se,ve)},he=function Ee(ye){ye.preventDefault(),document.removeEventListener("mouseup",Ee),document.removeEventListener("mousemove",ge),M.current&&(M.current.removeEventListener("touchmove",Q.current),M.current.removeEventListener("touchend",u.current)),Q.current=null,u.current=null,M.current=null,c(ve),r(-1),B(!1)};document.addEventListener("mouseup",he),document.addEventListener("mousemove",ge),I.currentTarget.addEventListener("touchend",he),I.currentTarget.addEventListener("touchmove",ge),Q.current=ge,u.current=he,M.current=I.currentTarget},K=i.useMemo(function(){var L=pe(t).sort(function(W,ie){return W-ie}),I=pe(j).sort(function(W,ie){return W-ie}),G={};I.forEach(function(W){G[W]=(G[W]||0)+1}),L.forEach(function(W){G[W]=(G[W]||0)-1});var ee=_?1:0,ae=Object.values(G).reduce(function(W,ie){return W+Math.abs(ie)},0);return ae<=ee?j:t},[t,j,_]);return[y,E,F,K,$]}function dt(e,n,t,a,l,s){var m=i.useCallback(function(E){return Math.max(e,Math.min(n,E))},[e,n]),c=i.useCallback(function(E){if(t!==null){var h=e+Math.round((m(E)-e)/t)*t,b=function(x){return(String(x).split(".")[1]||"").length},o=Math.max(b(t),b(n),b(e)),y=Number(h.toFixed(o));return e<=y&&y<=n?y:null}return null},[t,e,n,m]),S=i.useCallback(function(E){var h=m(E),b=a.map(function(r){return r.value});t!==null&&b.push(c(E)),b.push(e,n);var o=b[0],y=n-e;return b.forEach(function(r){var x=Math.abs(h-r);x<=y&&(o=r,y=x)}),o},[e,n,a,t,m,c]),_=function E(h,b,o){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof b=="number"){var r,x=h[o],w=x+b,F=[];a.forEach(function(g){F.push(g.value)}),F.push(e,n),F.push(c(x));var B=b>0?1:-1;y==="unit"?F.push(c(x+B*t)):F.push(c(w)),F=F.filter(function(g){return g!==null}).filter(function(g){return b<0?g<=x:g>=x}),y==="unit"&&(F=F.filter(function(g){return g!==x}));var X=y==="unit"?x:w;r=F[0];var z=Math.abs(r-X);if(F.forEach(function(g){var d=Math.abs(g-X);d<z&&(r=g,z=d)}),r===void 0)return b<0?e:n;if(y==="dist")return r;if(Math.abs(b)>1){var j=pe(h);return j[o]=r,E(j,b-B,o,y)}return r}else{if(b==="min")return e;if(b==="max")return n}},k=function(h,b,o){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=h[o],x=_(h,b,o,y);return{value:x,changed:x!==r}},N=function(h){return s===null&&h===0||typeof s=="number"&&h<s},T=function(h,b,o){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",r=h.map(S),x=r[o],w=_(r,b,o,y);if(r[o]=w,l===!1){var F=s||0;o>0&&r[o-1]!==x&&(r[o]=Math.max(r[o],r[o-1]+F)),o<r.length-1&&r[o+1]!==x&&(r[o]=Math.min(r[o],r[o+1]-F))}else if(typeof s=="number"||s===null){for(var B=o+1;B<r.length;B+=1)for(var X=!0;N(r[B]-r[B-1])&&X;){var z=k(r,1,B);r[B]=z.value,X=z.changed}for(var j=o;j>0;j-=1)for(var g=!0;N(r[j]-r[j-1])&&g;){var d=k(r,-1,j-1);r[j-1]=d.value,g=d.changed}for(var p=r.length-1;p>0;p-=1)for(var R=!0;N(r[p]-r[p-1])&&R;){var U=k(r,-1,p-1);r[p-1]=U.value,R=U.changed}for(var Q=0;Q<r.length-1;Q+=1)for(var u=!0;N(r[Q+1]-r[Q])&&u;){var M=k(r,1,Q+1);r[Q+1]=M.value,u=M.changed}}return{value:r[o],values:r}};return[S,T]}function mt(e){return i.useMemo(function(){if(e===!0||!e)return[!!e,!1,!1,0];var n=e.editable,t=e.draggableTrack,a=e.minCount,l=e.maxCount;return[!0,n,!n&&t,a||0,l]},[e])}var ft=i.forwardRef(function(e,n){var t=e.prefixCls,a=t===void 0?"rc-slider":t,l=e.className,s=e.style,m=e.classNames,c=e.styles,S=e.id,_=e.disabled,k=_===void 0?!1:_,N=e.keyboard,T=N===void 0?!0:N,E=e.autoFocus,h=e.onFocus,b=e.onBlur,o=e.min,y=o===void 0?0:o,r=e.max,x=r===void 0?100:r,w=e.step,F=w===void 0?1:w,B=e.value,X=e.defaultValue,z=e.range,j=e.count,g=e.onChange,d=e.onBeforeChange,p=e.onAfterChange,R=e.onChangeComplete,U=e.allowCross,Q=U===void 0?!0:U,u=e.pushable,M=u===void 0?!1:u,O=e.reverse,D=e.vertical,A=e.included,H=A===void 0?!0:A,Z=e.startPoint,$=e.trackStyle,K=e.handleStyle,L=e.railStyle,I=e.dotStyle,G=e.activeDotStyle,ee=e.marks,ae=e.dots,W=e.handleRender,ie=e.activeHandleRender,de=e.track,Fe=e.tabIndex,ve=Fe===void 0?0:Fe,ge=e.ariaLabelForHandle,he=e.ariaLabelledByForHandle,Ee=e.ariaRequired,ye=e.ariaValueTextFormatterForHandle,se=i.useRef(null),Ae=i.useRef(null),Le=i.useMemo(function(){return D?O?"ttb":"btt":O?"rtl":"ltr"},[O,D]),je=mt(z),fe=ne(je,5),me=fe[0],Te=fe[1],De=fe[2],Se=fe[3],ke=fe[4],ue=i.useMemo(function(){return isFinite(y)?y:0},[y]),Ve=i.useMemo(function(){return isFinite(x)?x:100},[x]),Oe=i.useMemo(function(){return F!==null&&F<=0?1:F},[F]),Xn=i.useMemo(function(){return typeof M=="boolean"?M?Oe:!1:M>=0?M:!1},[M,Oe]),Ye=i.useMemo(function(){return Object.keys(ee||{}).map(function(V){var C=ee[V],q={value:Number(V)};return C&&tn(C)==="object"&&!i.isValidElement(C)&&("label"in C||"style"in C)?(q.style=C.style,q.label=C.label):q.label=C,q}).filter(function(V){var C=V.label;return C||typeof C=="number"}).sort(function(V,C){return V.value-C.value})},[ee]),Qn=dt(ue,Ve,Oe,Ye,Q,Xn),cn=ne(Qn,2),Xe=cn[0],dn=cn[1],Zn=Ka(X,{value:B}),mn=ne(Zn,2),Ce=mn[0],zn=mn[1],re=i.useMemo(function(){var V=Ce==null?[]:Array.isArray(Ce)?Ce:[Ce],C=ne(V,1),q=C[0],Y=q===void 0?ue:q,J=Ce===null?[]:[Y];if(me){if(J=pe(V),j||Ce===void 0){var Me=j>=0?j+1:2;for(J=J.slice(0,Me);J.length<Me;){var be;J.push((be=J[J.length-1])!==null&&be!==void 0?be:ue)}}J.sort(function(_e,xe){return _e-xe})}return J.forEach(function(_e,xe){J[xe]=Xe(_e)}),J},[Ce,me,ue,j,Xe]),Pe=function(C){return me?C:C[0]},Qe=$e(function(V){var C=pe(V).sort(function(q,Y){return q-Y});g&&!za(C,re,!0)&&g(Pe(C)),zn(C)}),fn=$e(function(V){V&&se.current.hideHelp();var C=Pe(re);p==null||p(C),Be(!p,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),R==null||R(C)}),Jn=function(C){if(!(k||!Te||re.length<=Se)){var q=pe(re);q.splice(C,1),d==null||d(Pe(q)),Qe(q);var Y=Math.max(0,C-1);se.current.hideHelp(),se.current.focus(Y)}},ea=ct(Ae,Le,re,ue,Ve,Xe,Qe,fn,dn,Te,Se),Ue=ne(ea,5),vn=Ue[0],na=Ue[1],aa=Ue[2],ze=Ue[3],gn=Ue[4],hn=function(C,q){if(!k){var Y=pe(re),J=0,Me=0,be=Ve-ue;re.forEach(function(Ne,Ze){var kn=Math.abs(C-Ne);kn<=be&&(be=kn,J=Ze),Ne<C&&(Me=Ze)});var _e=J;Te&&be!==0&&(!ke||re.length<ke)?(Y.splice(Me+1,0,C),_e=Me+1):Y[J]=C,me&&!re.length&&j===void 0&&Y.push(C);var xe=Pe(Y);if(d==null||d(xe),Qe(Y),q){var Re,qe;(Re=document.activeElement)===null||Re===void 0||(qe=Re.blur)===null||qe===void 0||qe.call(Re),se.current.focus(_e),gn(q,_e,Y)}else p==null||p(xe),Be(!p,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),R==null||R(xe)}},ta=function(C){C.preventDefault();var q=Ae.current.getBoundingClientRect(),Y=q.width,J=q.height,Me=q.left,be=q.top,_e=q.bottom,xe=q.right,Re=C.clientX,qe=C.clientY,Ne;switch(Le){case"btt":Ne=(_e-qe)/J;break;case"ttb":Ne=(qe-be)/J;break;case"rtl":Ne=(xe-Re)/Y;break;default:Ne=(Re-Me)/Y}var Ze=ue+Ne*(Ve-ue);hn(Xe(Ze),C)},ra=i.useState(null),yn=ne(ra,2),Je=yn[0],bn=yn[1],ia=function(C,q){if(!k){var Y=dn(re,C,q);d==null||d(Pe(re)),Qe(Y.values),bn(Y.value)}};i.useEffect(function(){if(Je!==null){var V=re.indexOf(Je);V>=0&&se.current.focus(V)}bn(null)},[Je]);var la=i.useMemo(function(){return De&&Oe===null?!1:De},[De,Oe]),_n=$e(function(V,C){gn(V,C),d==null||d(Pe(re))}),xn=vn!==-1;i.useEffect(function(){if(!xn){var V=re.lastIndexOf(na);se.current.focus(V)}},[xn]);var We=i.useMemo(function(){return pe(ze).sort(function(V,C){return V-C})},[ze]),sa=i.useMemo(function(){return me?[We[0],We[We.length-1]]:[ue,We[0]]},[We,me,ue]),pn=ne(sa,2),En=pn[0],Sn=pn[1];i.useImperativeHandle(n,function(){return{focus:function(){se.current.focus(0)},blur:function(){var C,q=document,Y=q.activeElement;(C=Ae.current)!==null&&C!==void 0&&C.contains(Y)&&(Y==null||Y.blur())}}}),i.useEffect(function(){E&&se.current.focus(0)},[]);var ua=i.useMemo(function(){return{min:ue,max:Ve,direction:Le,disabled:k,keyboard:T,step:Oe,included:H,includedStart:En,includedEnd:Sn,range:me,tabIndex:ve,ariaLabelForHandle:ge,ariaLabelledByForHandle:he,ariaRequired:Ee,ariaValueTextFormatterForHandle:ye,styles:c||{},classNames:m||{}}},[ue,Ve,Le,k,T,Oe,H,En,Sn,me,ve,ge,he,Ee,ye,c,m]);return i.createElement(we.Provider,{value:ua},i.createElement("div",{ref:Ae,className:le(a,l,ce(ce(ce(ce({},"".concat(a,"-disabled"),k),"".concat(a,"-vertical"),D),"".concat(a,"-horizontal"),!D),"".concat(a,"-with-marks"),Ye.length)),style:s,onMouseDown:ta,id:S},i.createElement("div",{className:le("".concat(a,"-rail"),m==null?void 0:m.rail),style:te(te({},L),c==null?void 0:c.rail)}),de!==!1&&i.createElement(ut,{prefixCls:a,style:$,values:re,startPoint:Z,onStartMove:la?_n:void 0}),i.createElement(st,{prefixCls:a,marks:Ye,dots:ae,style:I,activeStyle:G}),i.createElement(tt,{ref:se,prefixCls:a,style:K,values:ze,draggingIndex:vn,draggingDelete:aa,onStartMove:_n,onOffsetChange:ia,onFocus:h,onBlur:b,handleRender:W,activeHandleRender:ie,onChangeComplete:fn,onDelete:Te?Jn:void 0}),i.createElement(it,{prefixCls:a,marks:Ye,onClick:hn})))});const vt="_sliderWrapper_y1huq_1",gt="_sliderInputField_y1huq_7",ht="_handle_y1huq_14",yt="_track_y1huq_18",bt="_rail_y1huq_22",_t="_inputRange_y1huq_26",xt="_sliderContainer_y1huq_33",pt="_valueLabel_y1huq_36",Et="_hide_y1huq_45",St="_slider_y1huq_1",kt="_maxLabel_y1huq_66",Ct="_minLabel_y1huq_67",Mt="_labelContainer_y1huq_75",Nt="_fieldsContainer_y1huq_97",Tt="_disabled_y1huq_113",Ot="_activeTrack_y1huq_116",Rt="_formatLabels_y1huq_122",It="_formatLabel_y1huq_122",oe={sliderWrapper:vt,sliderInputField:gt,handle:ht,track:yt,rail:bt,inputRange:_t,sliderContainer:xt,valueLabel:pt,hide:Et,slider:St,maxLabel:kt,minLabel:Ct,labelContainer:Mt,fieldsContainer:Nt,disabled:Tt,activeTrack:Ot,formatLabels:Rt,formatLabel:It},Gn=({steps:e,defaultMinVal:n,defaultMaxVal:t,onChange:a,withFields:l,minLabel:s,maxLabel:m,allowSameValues:c=!0,disabled:S,disableDebounce:_,formatLabel:k})=>{if(!e||e.length===0)throw new Error("RangeInput requires a non-empty steps array");const N=e[0],T=e[e.length-1],E=(g,d,p)=>Math.max(d,Math.min(p,g)),h=g=>{for(let d=0;d<e.length;d++)if(e[d]>=g)return d;return e.length-1},b=g=>Math.max(0,Math.min(g,e.length-1)),[o,y]=i.useState(!0),[r,x]=i.useState({min:E(n??e[0],N,T),max:E(t??e[e.length-1],N,T)}),[w,F]=i.useState({minIdx:h(r.min),maxIdx:h(r.max)}),B=ma(()=>{if(!c&&r.min===r.max){const g=E(r.max+1,N,T);x(d=>({...d,max:g})),a==null||a({min:r.min,max:g})}else r.min>r.max?x({min:r.max,max:r.min}):a==null||a({min:r.min,max:r.max})},1e3);i.useEffect(()=>{if(!e||e.length===0)return;const g=E(n??e[0],e[0],e[e.length-1]),d=E(t??e[e.length-1],e[0],e[e.length-1]);x({min:g,max:d}),F({minIdx:h(g),maxIdx:h(d)}),y(!0)},[e,n,t]),i.useEffect(()=>{!o&&!_&&B()},[r,o,_]);const X=(g,d)=>{const p=Number(g);if(isNaN(p))return;let R={min:d==="min"?p:r.min,max:d==="max"?p:r.max};!c&&R.min===R.max&&(d==="min"&&(R.min=R.min-1),d==="max"&&(R.max=R.max+1));const U={minIdx:h(R.min),maxIdx:h(R.max)};o&&y(!1),x(R),F(U),_&&(a==null||a({min:R.min,max:R.max}))},z=g=>{if(Array.isArray(g)){let[d,p]=g;d=b(d),p=b(p),!c&&d===p&&(p=Math.min(e.length-1,p+1));const R=e[d],U=e[p];o||y(!0),F({minIdx:d,maxIdx:p}),x({min:R,max:U}),_&&(a==null||a({min:R,max:U}))}},j=g=>{if(Array.isArray(g)){let[d,p]=g;!c&&d===p&&(p=Math.min(e.length-1,p+1));const R=e[d],U=e[p];a==null||a({min:R,max:U})}};return v.jsxs("div",{className:le(oe.sliderWrapper,{[oe.disabled]:S}),children:[l&&v.jsxs("div",{className:oe.fieldsContainer,children:[v.jsx(Cn,{className:oe.sliderInputField,label:s,name:"min",type:"number",onChange:g=>X(g,"min"),value:r.min.toString(),min:N,max:c?r.max:Math.max(N,r.max-1),height:"sm",disabled:S}),v.jsx(Cn,{className:oe.sliderInputField,label:m,name:"max",type:"number",onChange:g=>X(g,"max"),value:r.max.toString(),min:c?r.min:Math.min(T,r.min+1),max:T,height:"sm",disabled:S})]}),v.jsx(ft,{range:!0,min:0,max:e.length-1,step:1,allowCross:c,disabled:S,marks:Object.fromEntries(e.map((g,d)=>[d,""])),value:[w.minIdx,w.maxIdx],onChange:z,onChangeComplete:j,classNames:{tracks:oe.tracks,handle:oe.handle,track:oe.track,rail:oe.rail}}),v.jsxs("div",{className:oe.formatLabels,children:[v.jsx("span",{className:oe.formatLabel,children:`${e[0]} ${k}`}),v.jsx("span",{className:oe.formatLabel,children:`${e[e.length-1]} ${k}`})]})]})};Gn.__docgenInfo={description:"",methods:[],displayName:"RangeInput",props:{steps:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},defaultMinVal:{required:!1,tsType:{name:"number"},description:""},defaultMaxVal:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: { min: number; max: number }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ min: number; max: number }",signature:{properties:[{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}}]}},name:"range"}],return:{name:"void"}}},description:""},formatLabel:{required:!1,tsType:{name:"string"},description:""},withFields:{required:!1,tsType:{name:"boolean"},description:""},minLabel:{required:!1,tsType:{name:"string"},description:""},maxLabel:{required:!1,tsType:{name:"string"},description:""},allowSameValues:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},disableDebounce:{required:!1,tsType:{name:"boolean"},description:""}}};const An=e=>{if(!e||!Array.isArray(e))return;const n=e==null?void 0:e.map(l=>Number(l.name)),t=Math.max(...n);return{min:Math.min(...n),max:Math.ceil(t/10)*10}},on=({filters:e,title:n,preSelected:t,onUpdate:a,loading:l,hideSliderFields:s,hideFilters:m,maxOptionsToShow:c=6,result:S,backdropOptions:_})=>{var Q;const[k,N]=i.useState(!1),[T,E]=i.useState([]),[h,b]=i.useState(t??[]),[o,y]=i.useState([]),[r,x]=i.useState(!1),w=u=>{E(M=>M.includes(u)?M.filter(O=>O!==u):[...M,u])},F=u=>{y(M=>M.includes(u)?M.filter(O=>O!==u):[...M,u])},B=(u,M,O)=>{X({name:M,value:`${M}_${O.min}-${O.max}`},M,!0)},X=(u,M,O)=>{b(D=>{var $;const A=D==null?void 0:D.find(K=>K.name===M);let H=[];if(!A)H=[...D,{name:M,selectedOptions:[u]}];else{const K=($=A.selectedOptions)==null?void 0:$.find(L=>L.name===u.name);H=[...D].map(L=>{if(L.name!==M)return L;let I=[];return O?I=[u]:K?I=L.selectedOptions.filter(G=>G.name!==u.name):I=[...L.selectedOptions,u],{...L,selectedOptions:[...I]}})}const Z=H.filter(K=>K.selectedOptions.length);return a==null||a(u,Z),Z})},z=(u,M)=>{b(O=>{const A=[...O].map(H=>({...H,selectedOptions:H.selectedOptions.filter(Z=>Z.name!==u.name)})).filter(H=>!!H.selectedOptions.length);return M?a==null||a({name:u.value,value:u.name},A):a==null||a(u,A),A})},j=()=>{b([]),a==null||a(void 0,[])};i.useEffect(()=>{b(t??[])},[t]);const g=()=>N(!1),d=u=>{var M;return(M=u.options)==null?void 0:M.map((O,D)=>{var Z,$;const A=h==null?void 0:h.find(K=>K.name===u.name),H=(Z=A==null?void 0:A.selectedOptions)==null?void 0:Z.find(K=>K.value===O.value);switch(u.type){case"checkbox":case"radio":default:return v.jsxs("button",{className:le(P.checkboxItem,{[P.inActive]:O.disabled}),onClick:()=>X(O,u.name),disabled:l,children:[v.jsx(ga,{checked:!!H,id:O.value,name:O.value,className:P.checkbox,disabled:l}),v.jsx("span",{className:P.label,children:($=O.name)==null?void 0:$.replace(/\s*\(.*$/,"")}),O.count&&v.jsx("span",{className:le(P.label,P.count),children:O.count})]},`${O.name}-${D}`)}})},p=()=>v.jsxs("div",{className:P.selectedFilters,children:[h==null?void 0:h.map(u=>{var M;return(M=u.selectedOptions)==null?void 0:M.map((O,D)=>{let A=O.name;const H=e==null?void 0:e.find(Z=>{var $;return Z.type==="range"&&(($=Z.options)==null?void 0:$.find(K=>K.value===O.name))});return H&&(A=H.name),v.jsx(ha,{exitBeforeEnter:!0,presenceAffectsLayout:!0,initial:!1,children:v.jsxs(nn.button,{className:le(P.selectedFilter,P.active,{[P.inActive]:O.disabled}),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.25,opacity:0},onClick:()=>z(O,!!H),children:[v.jsx("span",{children:A}),v.jsx(He,{icon:"icon-x"})]})},`${O.value}-${D}-${O.disabled}`)})}),!!h.length&&v.jsx("button",{className:le(P.selectedFilter,P.clear),onClick:j,children:v.jsx(He,{icon:"icon-trash-2"})})]});function R(u){const M=new Set;return u==null||u.forEach(({name:O})=>{const D=Number(O);isNaN(D)||M.add(D)}),Array.from(M).sort((O,D)=>O-D)}const U=(Q=h==null?void 0:h.flatMap(u=>u==null?void 0:u.selectedOptions))==null?void 0:Q.length;return v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:P.filtersWrapper,children:[v.jsx(Mn,{type:"button",surface:"x",size:"xx-small",iconRight:{icon:"icon-plus"},onClick:()=>N(!0),className:P.filterButton,disabled:l,children:"Filtrera"}),!m&&h.length>0&&v.jsxs(v.Fragment,{children:[v.jsx(fa,{breakpoint:"md",children:u=>u&&v.jsxs(v.Fragment,{children:[v.jsx(Mn,{type:"button",surface:"x",size:"xx-small",onClick:()=>x(!r),className:P.filterButton,iconRight:{icon:r?"icon-chevron-up":"icon-chevron-down"},children:U>0?`Valda filter (${U})`:"Valda filter"}),v.jsx(en,{open:r,children:p()})]})}),v.jsx(va,{breakpoint:"md",children:u=>u&&v.jsx(v.Fragment,{children:p()})})]})]}),v.jsxs(oa,{isOpen:k,onClose:g,from:"left",width:"md",..._,children:[v.jsxs("div",{className:P.dynamicFilter,children:[n&&v.jsx("h4",{className:P.title,children:n}),e==null?void 0:e.map((u,M)=>{var L,I,G,ee,ae;const O=T.includes(u.name),D=u.type==="range"?t==null?void 0:t.find(W=>W.name===u.id):void 0,A=(G=(I=(L=D==null?void 0:D.selectedOptions)==null?void 0:L[0])==null?void 0:I.value)==null?void 0:G.split("-"),H=A!=null&&A[0]?Number(A==null?void 0:A[0]):void 0,Z=A!=null&&A[1]?Number(A==null?void 0:A[1]):void 0;(((ee=An(u.options))==null?void 0:ee.min)??0)>=10&&((ae=An(u.options))==null||ae.min);const $=o.includes(u.name),K=R(u.options);return v.jsxs("div",{className:P.filterCategory,children:[v.jsxs("button",{className:P.filterItem,onClick:()=>w(u.name),children:[v.jsx("span",{className:P.filterName,children:u.name}),v.jsx(He,{className:P.filterItemIcon,icon:O?"icon-chevron-up":"icon-chevron-down"})]}),v.jsxs(en,{open:O,className:P.expandableWrapper,children:[u.type==="range"&&K.length>0?v.jsx(Gn,{steps:K,defaultMinVal:H||0,defaultMaxVal:Z,withFields:!s,formatLabel:u.formatLabel||"kr",onChange:W=>B(u.name,u.id,typeof W=="object"?W:{min:0,max:0}),disabled:l}):v.jsx(v.Fragment,{children:d(u).slice(0,c)}),d(u).length>c&&u.type!=="range"?v.jsxs(v.Fragment,{children:[v.jsx(en,{open:$,children:d(u).slice(c,d(u).length)}),v.jsxs(Bn,{alignItems:"center",justifyContent:"center",children:[$&&v.jsxs(nn.button,{initial:{scale:.5},animate:{scale:$?1:0},exit:{scale:.5},onClick:()=>F(u.name),className:P.showMoreButton,children:[v.jsx("span",{className:P.showMoreLabel,children:$?"Se mindre":"Se mer"}),v.jsx(He,{icon:$?"icon-x-circle":"icon-plus-circle"})]},"open"),!$&&v.jsxs(nn.button,{initial:{scale:.5},animate:{scale:$?0:1},exit:{scale:.5},onClick:()=>F(u.name),className:P.showMoreButton,children:[v.jsx("span",{className:P.showMoreLabel,children:$?"Se mindre":"Se mer"}),v.jsx(He,{icon:$?"icon-x-circle":"icon-plus-circle"})]},"close")]})]}):null]})]},`${u.name}-${M}`)})]}),!!h.length&&v.jsx("button",{className:le(P.stickyResult,P.removeAllBtn),onClick:j,children:v.jsx(He,{icon:"icon-trash-2"})}),(S||S===0)&&v.jsx("button",{className:P.stickyResult,onClick:g,disabled:S===0,children:`Visa resultat (${S})`})]})]})};on.__docgenInfo={description:"",methods:[],displayName:"DynamicFilter",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  type: 'checkbox' | 'range' | 'radio'
  name: string
  options: TOptionType[]
} & (TCheckbox | TRange | TRadio)`,elements:[{name:"signature",type:"object",raw:`{
  type: 'checkbox' | 'range' | 'radio'
  name: string
  options: TOptionType[]
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'checkbox' | 'range' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'range'"},{name:"literal",value:"'radio'"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}},{name:"unknown"}]}],raw:"TFilterType[]"},description:""},preSelected:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(option?: TOptionType, filters?: TSelected[]) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  selectedOptions: TOptionType[]
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"selectedOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string
  value: string
  count?: string | number
  disabled?: boolean
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TOptionType[]",required:!0}}]}}],raw:"TSelected[]"},name:"filters"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},hideSliderFields:{required:!1,tsType:{name:"boolean"},description:""},hideFilters:{required:!1,tsType:{name:"boolean"},description:`Defines if selected filters should be hidden
@default false`},maxOptionsToShow:{required:!1,tsType:{name:"number"},description:`Defines how many options to display
The remaining will be hidden in a ExpandableWrapper (show more / show less)
@default 6`,defaultValue:{value:"6",computed:!1}},result:{required:!1,tsType:{name:"number"},description:'If provided, a "show result (x)" button will be displayed at bottom of drawer'},backdropOptions:{required:!1,tsType:{name:"Pick",elements:[{name:"IDrawerSidebar"},{name:"union",raw:"'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'",elements:[{name:"literal",value:"'enableBackgroundScroll'"},{name:"literal",value:"'hideOverlay'"},{name:"literal",value:"'disableCloseOnOutsideClick'"}]}],raw:"Pick<IDrawerSidebar, 'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'>"},description:""}}};const wt={title:"Design System/Molecules/Dynamic Filter",component:on},Ln=[{id:"1",country:"italien",price:"20",producer:"Birra Moretti"},{id:"2",country:"italien",price:"30",producer:"Birra Moretti"},{id:"3",country:"sverige",price:"40",producer:"Heineken"},{id:"4",country:"sverige",price:"10",producer:"Heineken"}],Yn={render:e=>{const[n,t]=i.useState(),a=(s,m)=>{t(m)},l=i.useMemo(()=>Ln.filter(s=>n==null?void 0:n.find(m=>{var c;return(c=m.selectedOptions)==null?void 0:c.find(S=>{var _,k;return((_=S.name)==null?void 0:_.toLowerCase())===s.country||((k=S.name)==null?void 0:k.toLowerCase())===s.producer})})),[n]);return v.jsxs(v.Fragment,{children:[v.jsx(on,{onUpdate:a,title:"Filter",preSelected:e.preSelected??[],filters:e.filters}),v.jsx(Bn,{flexDirection:"column",children:(l.length?l:Ln).map(s=>v.jsxs("span",{style:{color:"blue"},children:[s.producer,", ",s.price,"kr"]},s.id))})]})}},Ke={...Yn,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}]}},Ge={...Yn,args:{filters:[{name:"Listpris",type:"range",id:"rangefilter*V16062",options:[{name:"0",value:"rangefilter*V16062"},{name:"10",value:"rangefilter*V16062"},{name:"20",value:"rangefilter*V16062"},{name:"30",value:"rangefilter*V16062"},{name:"40",value:"rangefilter*V16062"},{name:"50",value:"rangefilter*V16062"},{name:"60",value:"rangefilter*V16062"},{name:"70",value:"rangefilter*V16062"},{name:"80",value:"rangefilter*V16062"},{name:"90",value:"rangefilter*V16062"},{name:"100",value:"rangefilter*V16062"},{name:"200",value:"rangefilter*V16062"},{name:"300",value:"rangefilter*V16062"},{name:"400",value:"rangefilter*V16062"},{name:"500",value:"rangefilter*V16062"},{name:"1000",value:"rangefilter*V16062"},{name:"1500",value:"rangefilter*V16062"},{name:"2000",value:"rangefilter*V16062"},{name:"2466",value:"rangefilter*V16062"}]},{name:"Land",type:"checkbox",options:[{name:"Sverige",value:"sverige"},{name:"Italien",value:"italien"},{name:"USA",value:"usa"},{name:"Belgien",value:"belgien"},{name:"Norge",value:"norge"},{name:"Irland",value:"irland"},{name:"Tyskland",value:"tyskland"},{name:"Nederländerna",value:"nederländerna"},{name:"Tjeckien",value:"tjeckien"}]},{name:"Producent",type:"checkbox",options:[{name:"Heineken",value:"heineken"},{name:"Birra Moretti",value:"birra-moretti"}]},{name:"Single Select",type:"radio",options:[{name:"Endast dryck",value:"drink-only"},{name:"Allt",value:"all"}]}],preSelected:[{name:"Listpris",selectedOptions:[{name:"range-id",value:"20-600"}]},{name:"Land",selectedOptions:[{name:"Italien",value:"italien"}]}]}};var jn,Dn,Vn;Ke.parameters={...Ke.parameters,docs:{...(jn=Ke.parameters)==null?void 0:jn.docs,source:{originalSource:`{
  ...DynamicFilterStoryTemplate,
  args: {
    filters: ([{
      name: 'Listpris',
      type: 'range',
      id: 'rangefilter*V16062',
      options: [{
        name: "0",
        value: "rangefilter*V16062"
      }, {
        name: "10",
        value: "rangefilter*V16062"
      }, {
        name: "20",
        value: "rangefilter*V16062"
      }, {
        name: "30",
        value: "rangefilter*V16062"
      }, {
        name: "40",
        value: "rangefilter*V16062"
      }, {
        name: "50",
        value: "rangefilter*V16062"
      }, {
        name: "60",
        value: "rangefilter*V16062"
      }, {
        name: "70",
        value: "rangefilter*V16062"
      }, {
        name: "80",
        value: "rangefilter*V16062"
      }, {
        name: "90",
        value: "rangefilter*V16062"
      }, {
        name: "100",
        value: "rangefilter*V16062"
      }, {
        name: "200",
        value: "rangefilter*V16062"
      }, {
        name: "300",
        value: "rangefilter*V16062"
      }, {
        name: "400",
        value: "rangefilter*V16062"
      }, {
        name: "500",
        value: "rangefilter*V16062"
      }, {
        name: "1000",
        value: "rangefilter*V16062"
      }, {
        name: "1500",
        value: "rangefilter*V16062"
      }, {
        name: "2000",
        value: "rangefilter*V16062"
      }, {
        name: "2466",
        value: "rangefilter*V16062"
      }]
    }, {
      name: 'Land',
      type: 'checkbox',
      options: [{
        name: 'Sverige',
        value: 'sverige'
      }, {
        name: 'Italien',
        value: 'italien'
      }, {
        name: 'USA',
        value: 'usa'
      }, {
        name: 'Belgien',
        value: 'belgien'
      }, {
        name: 'Norge',
        value: 'norge'
      }, {
        name: 'Irland',
        value: 'irland'
      }, {
        name: 'Tyskland',
        value: 'tyskland'
      }, {
        name: 'Nederländerna',
        value: 'nederländerna'
      }, {
        name: 'Tjeckien',
        value: 'tjeckien'
      }]
    }, {
      name: 'Producent',
      type: 'checkbox',
      options: [{
        name: 'Heineken',
        value: 'heineken'
      }, {
        name: 'Birra Moretti',
        value: 'birra-moretti'
      }]
    }, {
      name: 'Single Select',
      type: 'radio',
      options: [{
        name: 'Endast dryck',
        value: 'drink-only'
      }, {
        name: 'Allt',
        value: 'all'
      }]
    }] as TFilterType[])
  }
}`,...(Vn=(Dn=Ke.parameters)==null?void 0:Dn.docs)==null?void 0:Vn.source}}};var Pn,qn,Hn;Ge.parameters={...Ge.parameters,docs:{...(Pn=Ge.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  ...DynamicFilterStoryTemplate,
  args: {
    filters: ([{
      name: 'Listpris',
      type: 'range',
      id: 'rangefilter*V16062',
      options: [{
        name: "0",
        value: "rangefilter*V16062"
      }, {
        name: "10",
        value: "rangefilter*V16062"
      }, {
        name: "20",
        value: "rangefilter*V16062"
      }, {
        name: "30",
        value: "rangefilter*V16062"
      }, {
        name: "40",
        value: "rangefilter*V16062"
      }, {
        name: "50",
        value: "rangefilter*V16062"
      }, {
        name: "60",
        value: "rangefilter*V16062"
      }, {
        name: "70",
        value: "rangefilter*V16062"
      }, {
        name: "80",
        value: "rangefilter*V16062"
      }, {
        name: "90",
        value: "rangefilter*V16062"
      }, {
        name: "100",
        value: "rangefilter*V16062"
      }, {
        name: "200",
        value: "rangefilter*V16062"
      }, {
        name: "300",
        value: "rangefilter*V16062"
      }, {
        name: "400",
        value: "rangefilter*V16062"
      }, {
        name: "500",
        value: "rangefilter*V16062"
      }, {
        name: "1000",
        value: "rangefilter*V16062"
      }, {
        name: "1500",
        value: "rangefilter*V16062"
      }, {
        name: "2000",
        value: "rangefilter*V16062"
      }, {
        name: "2466",
        value: "rangefilter*V16062"
      }]
    }, {
      name: 'Land',
      type: 'checkbox',
      options: [{
        name: 'Sverige',
        value: 'sverige'
      }, {
        name: 'Italien',
        value: 'italien'
      }, {
        name: 'USA',
        value: 'usa'
      }, {
        name: 'Belgien',
        value: 'belgien'
      }, {
        name: 'Norge',
        value: 'norge'
      }, {
        name: 'Irland',
        value: 'irland'
      }, {
        name: 'Tyskland',
        value: 'tyskland'
      }, {
        name: 'Nederländerna',
        value: 'nederländerna'
      }, {
        name: 'Tjeckien',
        value: 'tjeckien'
      }]
    }, {
      name: 'Producent',
      type: 'checkbox',
      options: [{
        name: 'Heineken',
        value: 'heineken'
      }, {
        name: 'Birra Moretti',
        value: 'birra-moretti'
      }]
    }, {
      name: 'Single Select',
      type: 'radio',
      options: [{
        name: 'Endast dryck',
        value: 'drink-only'
      }, {
        name: 'Allt',
        value: 'all'
      }]
    }] as TFilterType[]),
    preSelected: [{
      name: 'Listpris',
      selectedOptions: [{
        name: 'range-id',
        value: '20-600'
      }]
    }, {
      name: 'Land',
      selectedOptions: [{
        name: 'Italien',
        value: 'italien'
      }]
    }]
  }
}`,...(Hn=(qn=Ge.parameters)==null?void 0:qn.docs)==null?void 0:Hn.source}}};const Ft=["Dynamic_Filter_Default","Dynamic_Filter_With_Pre_Selected"],Qt=Object.freeze(Object.defineProperty({__proto__:null,Dynamic_Filter_Default:Ke,Dynamic_Filter_With_Pre_Selected:Ge,__namedExportsOrder:Ft,default:wt},Symbol.toStringTag,{value:"Module"}));export{on as D,Ke as a,Qt as d};

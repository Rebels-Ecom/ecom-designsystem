import{j as s,r as i,R as E}from"./jsx-runtime-03333307.js";import{u as d,r as _}from"./react-16-e4b76919.js";import"./index-821951ec.js";var f=Object.defineProperty,v=(r,e)=>{for(var t in e)f(r,t,{get:e[t],enumerable:!0})};const{global:w}=__STORYBOOK_MODULE_GLOBAL__;var x={};v(x,{parameters:()=>b,render:()=>g,renderToCanvas:()=>M});var g=(r,e)=>{let{id:t,component:o}=e;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return s.jsx(o,{...r})},{FRAMEWORK_OPTIONS:a}=w,j=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:r}=this.state,{showMain:e}=this.props;r||e()}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:e}},h=a!=null&&a.strictMode?i.StrictMode:i.Fragment;async function M({storyContext:r,unboundStoryFn:e,showMain:t,showException:o,forceRemount:u},n){var c,m;let p=s.jsx(j,{showMain:t,showException:o,children:E.createElement(e,{...r})}),l=h?s.jsx(h,{children:p}):p;return u&&d(n),await _(l,n,(m=(c=r==null?void 0:r.parameters)==null?void 0:c.react)==null?void 0:m.rootOptions),()=>d(n)}var b={renderer:"react"};export{b as parameters,g as render,M as renderToCanvas};
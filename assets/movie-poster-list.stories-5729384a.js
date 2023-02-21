import{r as c,R as S}from"./index-6f814c40.js";import{M as f}from"./movie-poster-1e87da86.js";import{j as p,a as s,F as I}from"./jsx-runtime-76c5c2e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./picture-8799a0b4.js";function x(t,e=0){const[a,l]=c.useState(e);return c.useLayoutEffect(()=>{function o(){t&&t.current&&l(t.current.scrollLeft)}return t&&t.current&&t.current.addEventListener("scroll",o),o(),()=>{t&&t.current&&t.current.removeEventListener("scroll",o)}},[]),a}function L(t){return!!(t.href&&t.isExternal)}function b(t,e){return!!(t.href&&e)}function y(t,e,a){!t||!e||(a&&(e={value:e,sessionStorageItemValidUntil:a}),typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e))}function w(t){let e=new Date;return t>=e.setMinutes(e.getMinutes())}function k(t){let e=sessionStorage.getItem(t);if(e)return(e[0]==="{"||e[0]==="[")&&(e=JSON.parse(e)),e&&!e.sessionStorageItemValidUntil?e:M(e,t)}function M(t,e){if(w(t.sessionStorageItemValidUntil))return t.value;N(e)}function N(t){sessionStorage.removeItem(t)}const E="_heading_wmxrx_1",V="_noMarginBottom_wmxrx_15",$="_preamble_wmxrx_23",R="_preambleReactNode_wmxrx_45",T="_list_wmxrx_87",W="_listItem_wmxrx_125",J="_listItemHeading_wmxrx_163",H="_listItemPreamble_wmxrx_181",j="_link_wmxrx_191",r={heading:E,noMarginBottom:V,preamble:$,preambleReactNode:R,list:T,listItem:W,listItemHeading:J,listItemPreamble:H,link:j};function F(t=""){const e=typeof window<"u"&&t?k(t):0;return e||0}const u=({heading:t,preamble:e,list:a=[],linkComponent:l,listSessionId:o})=>{const n=c.useRef(null),m=x(n,F(o));c.useEffect(()=>{n!=null&&n.current&&(n.current.scrollLeft=m||0)},[]),c.useEffect(()=>{o&&y(o,m)},[m]);function h(i){return i!=null&&i.link&&L(i.link)?s("a",{href:i.link.href,target:i.link.target,title:i.link.title,className:r.link,children:s(f,{...i.image})}):i!=null&&i.link&&b(i.link,l)?s(l,{to:i.link.href,target:i.link.target,title:i.link.title,className:r.link,children:s(f,{...i.image})}):s(f,{...i.image})}return p("section",{children:[t&&s("h1",{className:`headingS ${r.heading} ${e?r.noMarginBottom:""}`,children:t}),e&&S.isValidElement(e)?s("div",{className:r.preambleReactNode,children:e}):s("p",{className:r.preamble,children:e}),s("ul",{ref:n,className:r.list,children:a.map((i,v)=>p("li",{className:r.listItem,children:[h(i),i.heading&&s("p",{className:`body bold ${r.listItemHeading}`,children:i.heading}),i.preamble&&s("p",{className:`bodyS ${r.listItemPreamble}`,children:i.preamble})]},v))})]})};try{u.displayName="MoviePosterList",u.__docgenInfo={description:"",displayName:"MoviePosterList",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},preamble:{defaultValue:null,description:"",name:"preamble",required:!1,type:{name:"ReactNode"}},list:{defaultValue:{value:"[]"},description:"",name:"list",required:!1,type:{name:"IMoviePosterListItem[]"}},linkComponent:{defaultValue:null,description:"",name:"linkComponent",required:!1,type:{name:"any"}},listSessionId:{defaultValue:null,description:"",name:"listSessionId",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Design System/Molecules/MoviePosterList",component:u},q=t=>{let e=[];const a=["The Assassination of Jesse James by the Coward Robert Ford","The Silence of the Lambs","Titanic","Jurassic Park","Pulp Fiction","Star Wars"];let l=1011;for(let n=0,m=6;n<m;n++){let h={id:`pictureOne_${n}`,src:`https://picsum.photos/id/${l+n}/480/720`,sources:[{srcset:`https://picsum.photos/id/${l+n}/480/720`}],alt:"Placholder",loading:"eager",decoding:"auto",fetchPriority:"auto"};e.push({image:h,heading:a[n],preamble:"Premiär 19 maj"})}let o=e.map(n=>({...n,link:{href:"https://filmstaden.se",isExternal:!0,target:"_blank"}}));return p(I,{children:[s("div",{style:{width:"100%",maxWidth:"1256px",margin:"0 0 5rem 0"},children:s(u,{...t,list:e,heading:"Premiärer i April",preamble:p("p",{children:["Se hela vårt utbud på ",s("a",{href:"https://www.filmstaden.se",children:"filmstaden.se"})]}),listSessionId:"moviePosterListSessionId_1"})}),s("div",{style:{width:"100%",maxWidth:"1256px",margin:"0 0 5rem 0"},children:s(u,{...t,list:o,heading:"Lista med länkar",preamble:"Se hela vårt utbud på filmstaden.se",listSessionId:"moviePosterListSessionId_2"})})]})},d=q.bind({});d.storyName="Movie Poster List";var g,P,_;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  let moviePosterList = [];
  const headings = ['The Assassination of Jesse James by the Coward Robert Ford', 'The Silence of the Lambs', 'Titanic', 'Jurassic Park', 'Pulp Fiction', 'Star Wars'];
  let picsumId = 1011;
  for (let i = 0, iMax = 6; i < iMax; i++) {
    let image = {
      id: \`pictureOne_\${i}\`,
      src: \`https://picsum.photos/id/\${picsumId + i}/480/720\`,
      sources: [{
        srcset: \`https://picsum.photos/id/\${picsumId + i}/480/720\`
      }],
      alt: 'Placholder',
      loading: 'eager',
      decoding: 'auto',
      fetchPriority: 'auto'
    };
    moviePosterList.push({
      image: image,
      heading: headings[i],
      preamble: 'Premiär 19 maj'
    });
  }
  let moviePosterListWithHrefs = moviePosterList.map((li: IMoviePosterListItem) => {
    return {
      ...li,
      link: {
        href: 'https://filmstaden.se',
        isExternal: true,
        target: '_blank'
      }
    };
  });
  return <>
      <div style={{
      width: '100%',
      maxWidth: '1256px',
      margin: '0 0 5rem 0'
    }}>
        <MoviePosterList {...args} list={moviePosterList} heading={'Premiärer i April'} preamble={<p>
              Se hela vårt utbud på <a href="https://www.filmstaden.se">filmstaden.se</a>
            </p>} listSessionId={'moviePosterListSessionId_1'} />
      </div>

      <div style={{
      width: '100%',
      maxWidth: '1256px',
      margin: '0 0 5rem 0'
    }}>
        <MoviePosterList {...args} list={moviePosterListWithHrefs} heading={'Lista med länkar'} preamble={'Se hela vårt utbud på filmstaden.se'} listSessionId={'moviePosterListSessionId_2'} />
      </div>
    </>;
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const z=["MoviePosterListStory"];export{d as MoviePosterListStory,z as __namedExportsOrder,D as default};
//# sourceMappingURL=movie-poster-list.stories-5729384a.js.map

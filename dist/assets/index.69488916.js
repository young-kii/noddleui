import{L,r as g,j as t,F as f,a as v}from"./index.a45ea5cd.js";import{C as E}from"./index.5c7062a6.js";import{n as S,a as k}from"./common.be625b9d.js";import{T as N}from"./index.5b0a577c.js";const $="_show_doplh_1",j="_content_doplh_50",B="_container_doplh_61",P="_left_doplh_66",R="_right_doplh_71",Y="_nav_doplh_93",A="_active_doplh_105",p={"noddle-configPanel":"_noddle-configPanel_doplh_12",show:$,content:j,container:B,left:P,right:R,nav:Y,active:A},F=L.getLocale,Q=_=>{const{children:c,width:l,onScroll:a}=_,[r,m]=g.exports.useState([]),[d,I]=g.exports.useState(""),[x,b]=g.exports.useState(0),w=F();let T=[];g.exports.useEffect(()=>{var u;const i=document.querySelectorAll("[id*=noddle-contentItem]");if(i.length!==0){let o=[],s=0;for(let n of i)o.push({id:n==null?void 0:n.id,label:(u=n==null?void 0:n.dataset)==null?void 0:u.label,top:n.offsetTop,index:s++});m(o),I(i[0].id),T=o}const e=document.getElementById("noddle-content"),h=o=>{a==null||a(o.target.scrollTop);for(let s of T)o.target.scrollTop>=s.top+64&&(I(s.id),b(s.index))};return e.addEventListener("scroll",h),()=>{e.removeEventListener("scroll",h)}},[w]);const y=i=>{var s,n;const e=(n=(s=i.target)==null?void 0:s.dataset)==null?void 0:n.id,h=document.getElementById("noddle-content");let o=document.getElementById(e).offsetTop;h.scrollTo({top:o+70,behavior:"smooth"})},C=()=>r&&r.length!==0?v("div",{className:p.right,children:[t("div",{className:p.active,style:{transform:`translateY(${x*24}px)`,position:"absolute",transition:".3s cubic-bezier(0.165, 0.84, 0.44, 1)",lineHeight:"24px"},children:t(E,{height:5,width:5,color:S})}),r.map(e=>t("div",{"data-id":e.id,"data-selected":e.id===d,className:p.nav+" "+(e.id===d?p.active:""),onClick:h=>y(h),children:e.label},e.id))]}):t(f,{});return t(f,{children:v("div",{className:p.container,children:[t("div",{className:p.left,style:{width:l},children:c}),C()]})})},M="_show_1efk4_1",q="_content_1efk4_50",z="_container_1efk4_61",H={"noddle-configPanel":"_noddle-configPanel_1efk4_12",show:M,content:q,container:z},K=_=>{const{id:c,children:l,label:a,marginBottom:r,paddingTop:m}=_,d="noddle-contentItem-"+c;return t("div",{className:H.container,id:c&&c.length!==0?d:"","data-label":a,style:{marginBottom:r,paddingTop:m},children:l})},U=_=>{const{data:c,label:l}=_,a=r=>r.sort((m,d)=>m.property.localeCompare(d.property));return t(f,{children:t(K,{id:l.split(" ").join("-"),label:l,paddingTop:64,children:v(f,{children:[t("h3",{children:l}),t(N,{columns:k,rowKey:"property",dataSource:a(c),outline:!0})]})})})};export{Q as C,U as T,K as a};
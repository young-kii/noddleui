import{j as r,F as L,C as N,r as a,a as W}from"./index.a45ea5cd.js";const M="_show_hmpnu_1",O="_content_hmpnu_50",P="_container_hmpnu_61",A="_ball_hmpnu_75",Y="_extra_hmpnu_85",q="_moreStatus_hmpnu_95",z="_on_hmpnu_111",x={"noddle-configPanel":"_noddle-configPanel_hmpnu_12",show:M,content:O,default:"_default_hmpnu_61",container:P,ball:A,extra:Y,moreStatus:q,on:z},K=f=>{const{theme:o,biggerButton:s,onChange:c,extraContent:t,type:u,defaultStatus:h,status:l}=f,n=()=>o&&["danger","default","primary","warning","success"].indexOf(o)>-1?o:"default",m=()=>{let p="default",_;return u&&(p=["default","moreStatus"].indexOf(u)>-1?u:"default"),_=t||i[p],[p,_]},i={default:{on:"",off:""},moreStatus:[{content:"\u521D\u59CB\u72B6\u6001",theme:"primary"},{content:"\u544A\u8B66\u72B6\u6001",theme:"warning"},{content:"\u5371\u9669\u72B6\u6001",theme:"danger"},{content:"\u6210\u529F\u72B6\u6001",theme:"success"}]},[e,d]=m(),S={default:r(G,{theme:n(),biggerButton:s,onChange:c,extraContent:d,defaultStatus:h,status:l}),moreStatus:r(I,{onChange:c,extraContent:d,status:Number(l)})};return r(L,{children:S[e]})},G=f=>{const{theme:o,biggerButton:s,onChange:c,extraContent:t,defaultStatus:u,status:h}=f,l=N.mClassNames.bind(x),[n,m]=a.exports.useState(h||u==="on"),i=a.exports.useRef(),e=a.exports.useRef(),d=a.exports.useRef(),S=n?t==null?void 0:t.on:t==null?void 0:t.off,[p,_]=a.exports.useState(0),[C,B]=a.exports.useState(0),[v,g]=a.exports.useState(0),[w,E]=a.exports.useState(0),R=l({container:!0,on:n}),k=l({ball:!0}),T=l({extra:!0}),$={},j={transform:n?`translateX(${p-C}px) ${s?"scale(1.4)":""}`:`translateX(0) ${s?"scale(1.4)":""}`},F={minWidth:v,transform:n?`translateX(-${w}px)`:"none"},H=()=>{m(!n),c==null||c(!n)};a.exports.useEffect(()=>{_(i.current.offsetWidth),B(i.current.offsetHeight),g(e.current.offsetWidth)},[n]);const X=()=>{const D=e.current.getElementsByClassName("hiddenSpan");let y=0;for(let b of D)b.offsetWidth>y&&(y=b.offsetWidth);g(y)};return a.exports.useEffect(()=>{X(),E(d.current.offsetWidth)},[n]),r("div",{className:x.default,children:W("div",{ref:i,className:R,style:$,onClick:H,"data-theme":o,children:[r("div",{ref:d,className:k,style:j}),W("div",{ref:e,className:T,style:F,children:[S,r("span",{className:"hiddenSpan",style:{visibility:"hidden",position:"absolute"},children:t==null?void 0:t.on}),r("span",{className:"hiddenSpan",style:{visibility:"hidden",position:"absolute"},children:t==null?void 0:t.off})]})]})})},I=f=>{const{onChange:o,extraContent:s,status:c}=f,[t,u]=a.exports.useState(0),h=s.length,l=N.mClassNames.bind(x),n={},m=l({container:!0,on:!0}),i=()=>{let e;t+1===h?e=0:e=t+1,u(e),o==null||o({status:e,content:s[e].content,theme:s[e].theme})};return a.exports.useEffect(()=>{s==null||s.find((e,d)=>{e.default&&u(c||d)})},[]),r("div",{className:x.moreStatus,onClick:i,children:r("div",{className:m,style:n,"data-theme":s[t].theme||"default",children:s[t].content})})};export{K as S};

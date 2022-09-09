import{C as S}from"./index.737f94e5.js";import{r as k,a as $,F as r,j as i}from"./index.92920d2a.js";const B="_content_p524o_31",L="_blocks_p524o_59",f={content:B,blocks:L},T="_content_b9kmy_31",v="_show_b9kmy_59",Y="_keywords_b9kmy_62",j="_punctuation_b9kmy_65",x="_mark_b9kmy_68",D="_tags_b9kmy_71",R="_functions_b9kmy_74",A="_comma_b9kmy_77",H="_objectKey_b9kmy_80",K="_codeBoxContainer_b9kmy_83",W="_code_b9kmy_83",g={content:T,show:v,keywords:Y,punctuation:j,mark:x,tags:D,functions:R,comma:A,objectKey:H,codeBoxContainer:K,code:W};const z=new Set(["boolean","type","true","false","new","as","any","if","of","else","var","import","export","let","default","function","from","const","return"]),C=new Set([".","(",")","{","}","=","<",">","[","]",":","/"]),M=new Set(["Cascader","div"]),q=m=>{const F=(m==null?void 0:m.code)||"",b=k.exports.useRef(),p=k.exports.useRef();let w=F.split(""),h=new Set;const u=E=>{let s="",t="",d=0,a=!1,_=!1,y=w.reduce((n,o,e,c)=>{if(E||o==="("&&s.trim()&&h.add(s.trim().split(" ").at(-1)),(o==="'"||o==='"')&&(d++,d===2))return s+=o,t=s,s="",d=0,n+`<span class="mark">${t}</span>`;if(d===1)return s+=o,n;if(C.has(o)){let l="punctuation";return t=s,o==="<"&&(a=!0,l="tags"),o===">"&&(a&&(l="tags"),a=!1),o==="/"&&(l="tags"),o===":"&&(a||(t=`<span class="objectKey">${s}</span>`)),o==="="&&a&&(l="mark"),o==="{"&&(_=!0),o==="}"&&(_=!1),s="",n+t+`<span class="${l}">${o}</span>`}else{if(o===","||o===";")return t=s,s="",n+t+`<span class="comma">${o}</span>`;if(s+=o,z.has(s)){if(e!==c.length-1&&c[e+1]===" ")return t=s,s="",n+`<span class="keywords">${t}</span>`}else if(M.has(s)){if(t=s,s="",c[e+1]===">"){if(c[e-t.length]==="<"||c[e-t.length]===" "||c[e-t.length]==="/")return n+`<span class="tags">${t}</span>`}else if(c[e-t.length]==="<"&&(c[e+1]===">"||c[e+1]===" "))return n+`<span class="tags">${t}</span>`;return n+`<span>${t}</span>`}else if(h.has(s)&&(c[e+1]===" "||C.has(c[e+1])))if(a){if(_)return t=s,s="",n+`<span class="functions">${t}</span>`}else return t=s,s="",n+`<span class="functions">${t}</span>`;else{if(s===`
`||s==="	")return s="",n+`<span>${o}</span>`;if(o===" "||s===" ")return t=s,s="",n+`<span>${t}</span>`;if(e===c.length-1)return n+s}return n}},"");return E?y:""},N=()=>{p.current.classList.toggle("show")};return k.exports.useEffect(()=>{u(!1),b.current.innerHTML=u(!0)},[]),$(r,{children:[i("button",{onClick:N,children:"d"}),i("div",{className:g.codeBoxContainer,ref:p,children:i("pre",{children:i("code",{className:g.code,ref:b})})}),"hello world"]})},O=()=>$(r,{children:[i(S,{title:"React for Web",description:"Design \u9002\u914D\u684C\u9762\u7AEF\u7684\u7EC4\u4EF6\u5E93\uFF0C\u9002\u5408\u5728 React \u6280\u672F\u6808\u9879\u76EE\u4E2D\u4F7F\u7528\u3002",img:"https://iconfont.alicdn.com/p/illus_3d/file/NdzEShoF8VBW/584439a2-5f12-42e9-ab51-ec083badc77f.png"}),i(q,{code:`import ContentHeader from "@/components/content-header";
import CodeBox from "@/noddle-components/codeBox";

export default () => {

    return (
        <>
            <ContentHeader
                title={'React for Web'}
                description={'Design \u9002\u914D\u684C\u9762\u7AEF\u7684\u7EC4\u4EF6\u5E93\uFF0C\u9002\u5408\u5728 React \u6280\u672F\u6808\u9879\u76EE\u4E2D\u4F7F\u7528\u3002'}
                img={"https://iconfont.alicdn.com/p/illus_3d/file/NdzEShoF8VBW/584439a2-5f12-42e9-ab51-ec083badc77f.png"}/>
            <CodeBox code={'123'}/>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
            <div className={STYLE.blocks}></div>
        </>
    )
}`}),i("div",{className:f.blocks}),i("div",{className:f.blocks}),i("div",{className:f.blocks}),i("div",{className:f.blocks}),i("div",{className:f.blocks}),i("div",{className:f.blocks})]});export{O as default};

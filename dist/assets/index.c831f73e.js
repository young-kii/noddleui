import{r as d,a as w,F as x,j as c,L as S,u as T}from"./index.57425fbb.js";const v="_show_4w1e0_45",R="_keywords_4w1e0_48",B="_punctuation_4w1e0_51",L="_mark_4w1e0_54",N="_tags_4w1e0_57",b="_functions_4w1e0_60",j="_comma_4w1e0_63",E="_objectKey_4w1e0_66",F="_codeBoxContainer_4w1e0_69",K="_code_4w1e0_69",h={show:v,keywords:R,punctuation:B,mark:L,tags:N,functions:b,comma:j,objectKey:E,codeBoxContainer:F,code:K};const V=new Set(["boolean","type","true","false","new","as","any","if","of","else","var","import","export","let","default","function","from","const","return"]),$=new Set([".","(",")","{","}","=","<",">","[","]",":","/"]),Y=new Set(["Cascader","div"]),H=u=>{const _=(u==null?void 0:u.code)||"",A=d.exports.useRef();let k=_.split(""),p=new Set;const m=l=>{let e="",r="",f=0,o=!1,y=!1,C=k.reduce((t,n,a,s)=>{if(l||n==="("&&e.trim()&&p.add(e.trim().split(" ").at(-1)),(n==="'"||n==='"')&&(f++,f===2))return e+=n,r=e,e="",f=0,t+`<span class="mark">${r}</span>`;if(f===1)return e+=n,t;if($.has(n)){let i="punctuation";return r=e,n==="<"&&(o=!0,i="tags"),n===">"&&(o&&(i="tags"),o=!1),n==="/"&&(i="tags"),n===":"&&(o||(r=`<span class="objectKey">${e}</span>`)),n==="="&&o&&(i="mark"),n==="{"&&(y=!0),n==="}"&&(y=!1),e="",t+r+`<span class="${i}">${n}</span>`}else{if(n===","||n===";")return r=e,e="",t+r+`<span class="comma">${n}</span>`;if(e+=n,V.has(e)){if(a!==s.length-1&&s[a+1]===" ")return r=e,e="",t+`<span class="keywords">${r}</span>`}else if(Y.has(e)){if(r=e,e="",s[a+1]===">"){if(s[a-r.length]==="<"||s[a-r.length]===" "||s[a-r.length]==="/")return t+`<span class="tags">${r}</span>`}else if(s[a-r.length]==="<"&&(s[a+1]===">"||s[a+1]===" "))return t+`<span class="tags">${r}</span>`;return t+`<span>${r}</span>`}else if(p.has(e)&&(s[a+1]===" "||$.has(s[a+1])))if(o){if(y)return r=e,e="",t+`<span class="functions">${r}</span>`}else return r=e,e="",t+`<span class="functions">${r}</span>`;else{if(e===`
`||e==="	")return e="",t+`<span>${n}</span>`;if(n===" "||e===" ")return r=e,e="",t+`<span>${r}</span>`;if(a===s.length-1)return t+e}return t}},"");if(l)return C};d.exports.useEffect(()=>{m(!1);let l=m(!0);A.current.innerHTML=l,console.log(p)},[]);const g=d.exports.useRef();return w(x,{children:[c("button",{onClick:()=>{g.current.classList.toggle("show")},children:"d"}),c("div",{className:h.codeBoxContainer,ref:g,children:c("pre",{children:c("code",{className:h.code,ref:A})})}),"hello world"]})};let I=`import STYLE from './index.module.less';
import './index.less';
import {useEffect, useRef, useState} from "react";

const keywords = new Set(['var', 'import', 'export', 'let', 'default', 'function', 'from', 'const', 'return']);
const punctuation = new Set(['(', ')', '{', '}', '=', '<', '>', '[', ']', ':', '/']);
const tags = new Set(['Cascader', 'div']);
const special = ['React']
type props = {
    code: string
}

export default (props: props) => {
    const code = props?.code || ''
    const codeRef = useRef() as any
    let codeArray = code.split('')
    let functionSet = new Set()
    const compile = (getResult: boolean) => {
        let currentArray = '', newArray = ''
        let markCount = 0
        let inTag = false
        let inCurlyBracket = false
        let result = codeArray.reduce((previousValue, currentValue, currentIndex, array) => {
            if (!getResult) {
                // if (currentValue === '(') {
                //     if (currentArray.trim()) functionSet.add(currentArray.trim().split(' ').at(-1))
                // }
                let reg = /((var|const|let)\\s*(?<arrowFun>\\S*)\\s*=\\s*\\(.*\\))|(\\s*(?<fun>\\w*)\\s*\\(.*\\))/g
                let functions = code.matchAll(reg)
                for (let fun of functions) {
                    if (fun.groups?.arrowFun)
                        functionSet.add(fun.groups?.arrowFun)
                    if (fun.groups?.fun)
                        functionSet.add(fun.groups.fun)
                }
            }
            if (currentValue === "'" || currentValue === '"') {
                markCount++
                if (markCount === 2) {
                    currentArray += currentValue
                    newArray = currentArray
                    currentArray = ''
                    markCount = 0
                    return previousValue + \`<span class="mark">\${newArray}</span>\`
                }
            }
            if (markCount === 1) {
                currentArray += currentValue
                return previousValue
            }
            if (punctuation.has(currentValue)) {
                let className = 'punctuation'
                newArray = currentArray
                if (currentValue === '<') {
                    inTag = true
                    className = 'tags'
                }
                if (currentValue === '>') {
                    if (inTag)
                        className = 'tags'
                    inTag = false
                }
                if (currentValue === '/') {
                    className = 'tags'
                }
                if (currentValue === ':') {
                    if (!inTag)
                        newArray = \`<span class="objectKey">\${currentArray}</span>\`
                }
                if (currentValue === '=') {
                    if (inTag)
                        className = 'mark'
                }
                if (currentValue === '{') {
                    inCurlyBracket = true
                }
                if (currentValue === '}') {
                    inCurlyBracket = false
                }
                currentArray = ''
                return previousValue + newArray + \`<span class="\${className}">\${currentValue}</span>\`
            } else if (currentValue === ',' || currentValue === ';') {
                newArray = currentArray
                currentArray = ''
                return previousValue + newArray + \`<span class="comma">\${currentValue}</span>\`
            } else {
                currentArray += currentValue
                if (keywords.has(currentArray)) {
                    if (currentIndex !== array.length - 1 && array[currentIndex + 1] === ' ') {
                        newArray = currentArray
                        currentArray = ''
                        return previousValue + \`<span class="keywords">\${newArray}</span>\`
                    }
                } else if (tags.has(currentArray)) {
                    newArray = currentArray
                    currentArray = ''
                    if (array[currentIndex + 1] === '>') {
                        if (array[currentIndex - newArray.length] === '<' || array[currentIndex - newArray.length] === ' ' || array[currentIndex - newArray.length] === '/')
                            return previousValue + \`<span class="tags">\${newArray}</span>\`
                    } else if (array[currentIndex - newArray.length] === '<') {
                        if (array[currentIndex + 1] === '>' || array[currentIndex + 1] === ' ')
                            return previousValue + \`<span class="tags">\${newArray}</span>\`
                    }
                    return previousValue + \`<span>\${newArray}</span>\`
                } else if (functionSet.has(currentArray) && (array[currentIndex + 1] === ' ' || punctuation.has(array[currentIndex + 1]))) {
                    if (inTag) {
                        if (inCurlyBracket) {
                            newArray = currentArray
                            currentArray = ''
                            return previousValue + \`<span class="functions">\${newArray}</span>\`
                        }
                    } else {
                        newArray = currentArray
                        currentArray = ''
                        return previousValue + \`<span class="functions">\${newArray}</span>\`
                    }
                } else if (currentArray === '\\n' || currentArray === '\\t') {
                    currentArray = ''
                    return previousValue + \`<span>\${currentValue}</span>\`
                } else if (currentValue === ' ' || currentArray === ' ') {
                    newArray = currentArray
                    currentArray = ''
                    return previousValue + \`<span>\${newArray}</span>\`
                } else if (currentIndex === array.length - 1) {
                    return previousValue + currentArray
                }
                return previousValue
            }
        }, '')
        if (getResult) return result
    }

    compile(false)
    let result = compile(true)
    useEffect(() => {
        codeRef.current.innerHTML = result
    }, [])

    const pre = useRef() as any
    const show = () => {
        pre.current.classList.toggle('show')
    }
    return <>
        <button onClick={show}>d</button>
        <div className={STYLE.codeBoxContainer} ref={pre}>
            <pre>
              <code className={STYLE.code} ref={codeRef}/>
          </pre>
        </div>
        hello world
    </>
}`;const z=()=>w("div",{children:["changelog",w("div",{children:[c(M,{}),c(S.LocaleOption,{}),c(H,{code:I})]})]}),M=()=>{const u=T();return c("div",{children:u("person.young.name")})};export{z as default};

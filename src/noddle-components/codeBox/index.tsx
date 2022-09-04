import STYLE from './index.module.less';
import './index.less';
import {useEffect, useRef, useState} from "react";

const keywords = new Set(['boolean','type','true','false','new','as','any','if','of','else','var', 'import', 'export', 'let', 'default', 'function', 'from', 'const', 'return']);
const punctuation = new Set(['.','(', ')', '{', '}', '=', '<', '>', '[', ']', ':', '/']);
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
                if (currentValue === '(') {
                    if (currentArray.trim()) functionSet.add(currentArray.trim().split(' ').at(-1))
                }
                // let reg = /((var|const|let)\s*(?<arrowFun>\S*)\s*=\s*\(.*\))|(\s*(?<fun>\w*)\s*\(.*\))/g
                // let functions = code.matchAll(reg)
                // for (let fun of functions) {
                //     if (fun.groups?.arrowFun)
                //         functionSet.add(fun.groups?.arrowFun)
                //     if (fun.groups?.fun)
                //         functionSet.add(fun.groups.fun)
                // }
            }
            if (currentValue === "'" || currentValue === '"') {
                markCount++
                if (markCount === 2) {
                    currentArray += currentValue
                    newArray = currentArray
                    currentArray = ''
                    markCount = 0
                    return previousValue + `<span class="mark">${newArray}</span>`
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
                        newArray = `<span class="objectKey">${currentArray}</span>`
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
                return previousValue + newArray + `<span class="${className}">${currentValue}</span>`
            } else if (currentValue === ',' || currentValue === ';') {
                newArray = currentArray
                currentArray = ''
                return previousValue + newArray + `<span class="comma">${currentValue}</span>`
            } else {
                currentArray += currentValue
                if (keywords.has(currentArray)) {
                    if (currentIndex !== array.length - 1 && array[currentIndex + 1] === ' ') {
                        newArray = currentArray
                        currentArray = ''
                        return previousValue + `<span class="keywords">${newArray}</span>`
                    }
                } else if (tags.has(currentArray)) {
                    newArray = currentArray
                    currentArray = ''
                    if (array[currentIndex + 1] === '>') {
                        if (array[currentIndex - newArray.length] === '<' || array[currentIndex - newArray.length] === ' ' || array[currentIndex - newArray.length] === '/')
                            return previousValue + `<span class="tags">${newArray}</span>`
                    } else if (array[currentIndex - newArray.length] === '<') {
                        if (array[currentIndex + 1] === '>' || array[currentIndex + 1] === ' ')
                            return previousValue + `<span class="tags">${newArray}</span>`
                    }
                    return previousValue + `<span>${newArray}</span>`
                } else if (functionSet.has(currentArray) && (array[currentIndex + 1] === ' ' || punctuation.has(array[currentIndex + 1]))) {
                    if (inTag) {
                        if (inCurlyBracket) {
                            newArray = currentArray
                            currentArray = ''
                            return previousValue + `<span class="functions">${newArray}</span>`
                        }
                    } else {
                        newArray = currentArray
                        currentArray = ''
                        return previousValue + `<span class="functions">${newArray}</span>`
                    }
                } else if (currentArray === '\n' || currentArray === '\t') {
                    currentArray = ''
                    return previousValue + `<span>${currentValue}</span>`
                } else if (currentValue === ' ' || currentArray === ' ') {
                    newArray = currentArray
                    currentArray = ''
                    return previousValue + `<span>${newArray}</span>`
                } else if (currentIndex === array.length - 1) {
                    return previousValue + currentArray
                }
                return previousValue
            }
        }, '')
        if (getResult) return result
    }



    useEffect(() => {
        compile(false)
        let result = compile(true)
        codeRef.current.innerHTML = result
        console.log(functionSet)

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
}
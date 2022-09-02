import STYLE from './index.module.less';
import './index.less';
import {useEffect, useRef, useState} from "react";

const keywords = new Set(['var', 'import', 'export', 'let', 'default', 'function', 'from', 'const', 'return']);
const punctuation = new Set(['(', ')', '{', '}', '=', '<', '>', '[', ']', ':', '/']);
const tags = new Set(['Cascader', 'div']);
const special = ['React']

const code = `import React, { useState } from 'react';
import { Cascader } from 'tdesign-react';

export default function Example() {
  const [value, setValue] = useState(['1.1']);
  const options = [
    {
      label: '选项一',
      value: '1',
      children: [
        {
          label: '子选项一',
          value: '1.1',
        },
        {
          label: '子选项二',
          value: '1.2',
        },
        {
          label: '子选项三',
          value: '1.3',
        },
      ],
    },
    {
      label: '{选项二}',
      value: '2',
      children: [
        {
          label: '子(),{}\\''选项一',
          value: '2.1',
        },
        {
          label: '子选项二',
          value: '2.2',
        },
      ],
    },
  ];
    function aa () {
        sda
    }
  const onChange = (value) => {
    setValue(value);
  };
    var onChange1 = (value) => {
    setValue(value);
  };
     var onChange133 = (value) => {
    setValue (value);
  };
    
  return (
    <div className="tdesign-demo-block-row">
      <Cascader options={options} onChange={onChange} value={value} multiple clearable />
    </div>
  );
}`
export default () => {
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
                let reg = /((var|const|let)\s*(?<arrowFun>\S*)\s*=\s*\(.*\))|(\s*(?<fun>\w*)\s*\(.*\))/g
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
                }
                return previousValue
            }
        }, '')
        if (getResult) return result
    }
    compile(false)
    console.log(functionSet)
    let result = compile(true)

    useEffect(() => {
        codeRef.current.innerHTML = result
    }, [])
    // useEffect(() => {
    //     const a = codeRef.current as unknown as HTMLElement
    //     let str = a.innerHTML
    //     const reg = /'(?<url>.*)'/g
    //     const result = str.match(reg) as string[]
    //
    //     for(let keyword of keywords){
    //         a.innerHTML = a.innerHTML.replace(keyword,`<span class="keyword">${keyword}</span>`)
    //     }
    //     for (let item of result) {
    //         a.innerHTML = a.innerHTML.replace(item, `<span class="nod">${item}</span>`)
    //     }
    //     console.log(codeRef.current)
    // }, [])

    return <>
        <div className={STYLE.codeBoxContainer}>
            <pre>
              <code className="language-jsx" ref={codeRef}>
                  123
              </code>
          </pre>
        </div>
    </>
}
import STYLE from './index.module.less';
import './index.less';
import {useEffect, useRef, useState} from "react";


const keywords = ['import ', 'export ', 'let ', 'default ', 'function ', 'from ', 'const ', 'return '];
const punctuation = ['(', ')', '{', '}', ';', '<', '>', '=', '[', ']', ':', '/'];
const tags = ['div', 'Cascader '];
const functions = ['useState'];
const special = ['React']

const code = `import React, { useState } from 'react';
import { Cascaderss , Cascader } from 'tdesign-react';

export default function Example() {
  const [value, setValue] = useState([]);
  const [options] = useState([
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
      label: '选项二',
      value: '2',
      children: [
        {
          label: '子选项一',
          value: '2.1',
        },
        {
          label: '子选项二',
          value: '2.2',
        },
      ],
    },
  ]);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Cascader options={options} onChange={onChange} value={value} size="medium" clearable />
    </div>
  );
}`
export default () => {

    const codeRef = useRef() as any
    let codeArray = code.split('')
    let currentArray = '', newArray = ''
    let markCount = 0
    let result = codeArray.reduce((previousValue, currentValue) => {
        if (punctuation.indexOf(currentValue) > -1) {
            newArray = currentArray
            currentArray = ''
            return previousValue + newArray + `<span class="punctuation">${currentValue}</span>`
        } else if (currentValue === ',') {
            newArray = currentArray
            currentArray = ''
            return previousValue + newArray + `<span class="comma">${currentValue}</span>`
        } else {
            currentArray += currentValue
            if (keywords.indexOf(currentArray) > -1) {
                newArray = currentArray
                currentArray = ''
                return previousValue + `<span class="keywords">${newArray}</span>`
            } else if (tags.indexOf(currentArray) > -1) {
                newArray = currentArray
                currentArray = ''
                return previousValue + `<span class="tags">${newArray}</span>`
            } else if (functions.indexOf(currentArray) > -1) {
                newArray = currentArray
                currentArray = ''
                return previousValue + `<span class="functions">${newArray}</span>`
            } else if (currentArray === ' ' || currentArray === '\n' || currentArray === '\t') {
                currentArray = ''
                return previousValue + currentValue
            } else if (currentValue === "'") {
                markCount++
                if (markCount === 2) {
                    newArray = currentArray
                    currentArray = ''
                    markCount = 0
                    return previousValue + `<span class="mark">${newArray}</span>`
                }
            }
            return previousValue
        }
    }, '')
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
                  {code}
              </code>
          </pre>
        </div>
    </>
}
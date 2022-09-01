import STYLE from './index.module.less'
import './index.less'
import {useEffect, useRef} from "react";
const keywords = ['import', 'export', 'let', 'default', 'function', 'from']
const punctuation = ['(', ')', '{', '}', ';', ',']

export default () => {

    const codeRef = useRef(null)
    useEffect(() => {
        const a = codeRef.current as unknown as HTMLElement
        let str = a.innerHTML
        const reg = /'(?<url>.*)'/g
        const result = str.match(reg) as string[]
        for(let keyword of keywords){
            a.innerHTML = a.innerHTML.replace(keyword,`<span class="noddle-codeBox-keyword">${keyword}</span>`)
        }
        for (let item of result) {
            a.innerHTML = a.innerHTML.replace(item, `<span class="nod">${item}</span>`)
        }
        console.log(codeRef.current)
    }, [])

    return <>
        <div className={STYLE.codeBoxContainer}>
            <pre ref={codeRef}>
              <code className="language-jsx">
                  {`import React, { useState } from 'react';
import { Cascader } from 'tdesign-react';

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
}`}
              </code>

          </pre>
        </div>
    </>
}
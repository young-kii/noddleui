import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.less'
import {Config} from "@/components/globalConfig/Config";
import II from "./II";
import {Locales} from "@/locales";
function App() {
    useEffect(()=>{
        const a = document.getElementById('demo') as HTMLElement
        let str = a.innerHTML
        const reg = /'(?<url>.*?)'/g
        const result = str.match(reg) as string[]
        const pun = /(a|b|c)/g
        const result2 = str.match(pun) as string[]
        for(let item of result){
            a.innerHTML = a.innerHTML.replace(item,`<span style="color: red">${item}</span>`)
        }

    },[])
  return (
    <div className="App">
        <Config Locales={Locales}>
            <II></II>
        </Config>
      <div>
          <pre id={'demo'}>
              <code className="language-jsx">

                        {`import React from 'react' 'sds' 'dss';
                        
                         import { LoadingIcon, CloseIcon, CheckCircleFilledIcon } from 'tdesign-icons-react'`}
                      {/*<span className="token keyword">import</span> React <span*/}
                      {/*className="token keyword">from</span> <span className="token string">'react'</span><span*/}
                      {/*className="token punctuation">;</span>{'\n'}*/}
                      {/*<span className="token keyword">import</span> <span*/}
                      {/*className="token punctuation">{'{'}</span> LoadingIcon<span className="token punctuation">,</span> CloseIcon<span className="token punctuation">,</span> CheckCircleFilledIcon <span className="token punctuation">{'}'}</span>*/}
                      {/*<span className="token keyword"> from</span> <span*/}
                      {/*className="token string">'tdesign-icons-react'</span><span className="token punctuation">;</span>*/}


              </code>

          </pre>

      </div>

    </div>
  )
}

export default App

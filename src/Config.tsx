import React, {createContext, Fragment, ReactNode, useEffect, useRef, useState} from "react";
import useT from "./useT";
let lang = 'en'
// const a = useRef('en')
// a.current = 'en'
export const setLang = () => {
    lang = 'sadas'
}
export const context = createContext({})
export default ({children}:any) => {
    const {Provider} = context
    const [lan,setLan] = useState('zh')
    return (
<Provider value={{lan:lan,setLan:setLan}}>
    <div id={'noddle_Config'} data-lan={lang}>
        {children}
    </div>
</Provider>

    )
}
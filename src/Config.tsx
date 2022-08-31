import React, {ReactNode, useEffect, useRef, useState} from "react";
import useT from "./useT";
let lang = 'en'
// const a = useRef('en')
// a.current = 'en'
export const setLang = () => {
    lang = 'sadas'
}
export default ({children}:{children:ReactNode}) => {
    const [lan,setLan] = useState(lang)
    setTimeout(()=>{
        setLang()
    },1000)
    return (

        <div id={'noddle_Config'} data-lan={lang}>
            {children}
        </div>
    )
}